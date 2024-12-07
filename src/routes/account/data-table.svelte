<script lang="ts" generics="TData, TValue">
 import {
    type ColumnDef,
    type PaginationState,
    type SortingState,
    type ColumnFiltersState,
    type VisibilityState,
    type RowSelectionState,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
  } from "@tanstack/table-core";
 import {
  createSvelteTable,
  FlexRender,
 } from "$lib/components/ui/data-table/index.js";
 import * as Table from "$lib/components/ui/table/index.js";
 import { Button } from "$lib/components/ui/button/index.js";
 import { Input } from "$lib/components/ui/input/index.js";
 import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
 import { onMount, onDestroy } from "svelte";

 import ChevronDown from "lucide-svelte/icons/chevron-down";

 
 type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
 };
 
 let { data, columns }: DataTableProps<TData, TValue> = $props();

 // Approximate row height in pixels (including padding)
 const ROW_HEIGHT = 53;
 // Minimum number of rows to display
 const MIN_ROWS = 8;
 
 function calculatePageSize() {
   if (typeof window === 'undefined') return MIN_ROWS;
   // Get viewport height
   const viewportHeight = window.innerHeight;
   // Calculate approximate space available for table (viewport - header - footer - padding)
   const availableHeight = viewportHeight - 200;
   // Calculate how many rows can fit
   const possibleRows = Math.floor(availableHeight / ROW_HEIGHT);
   // Return the larger of possible rows or minimum rows
   return Math.max(possibleRows, MIN_ROWS);
 }

 let pagination = $state<PaginationState>({ 
   pageIndex: 0, 
   pageSize: MIN_ROWS // Start with minimum rows
 });
 let sorting = $state<SortingState>([]);
 let columnFilters = $state<ColumnFiltersState>([]);
 let columnVisibility = $state<VisibilityState>({});
 let rowSelection = $state<RowSelectionState>({});

 // Handle window resize
 function handleResize() {
   pagination = {
     ...pagination,
     pageSize: calculatePageSize()
   };
 }

 onMount(() => {
   // Calculate initial page size once mounted in browser
   pagination = {
     ...pagination,
     pageSize: calculatePageSize()
   };
   window.addEventListener('resize', handleResize);
 });

 onDestroy(() => {
   if (typeof window !== 'undefined') {
     window.removeEventListener('resize', handleResize);
   }
 });

 const table = createSvelteTable({
    get data() {
      return data;
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        pagination = updater(pagination);
      } else {
        pagination = updater;
      }
    },
    onSortingChange: (updater) => {
      if (typeof updater === "function") {
        sorting = updater(sorting);
      } else {
        sorting = updater;
      }
    },
    onColumnFiltersChange: (updater) => {
      if (typeof updater === "function") {
        columnFilters = updater(columnFilters);
      } else {
        columnFilters = updater;
      }
    },
    onColumnVisibilityChange: (updater) => {
      if (typeof updater === "function") {
        columnVisibility = updater(columnVisibility);
      } else {
        columnVisibility = updater;
      }
    },
    onRowSelectionChange: (updater) => {
      if (typeof updater === "function") {
        rowSelection = updater(rowSelection);
      } else {
        rowSelection = updater;
      }
    },
    state: {
      get pagination() {
        return pagination;
      },
      get sorting() {
        return sorting;
      },
      get columnFilters() {
        return columnFilters;
      },
      get columnVisibility() {
        return columnVisibility;
      },
      get rowSelection() {
        return rowSelection;
      },
    },
  });
</script>

<div>
    <div class="flex items-center py-4">
        <Input
          placeholder="E-postaları filtrele..."
          value={table.getColumn("email")?.getFilterValue() as string}
          onchange={(e) =>
            table.getColumn("email")?.setFilterValue(e.currentTarget.value)}
          oninput={(e) =>
            table.getColumn("email")?.setFilterValue(e.currentTarget.value)}
          class="max-w-sm"
        />
        {#if table.getFilteredSelectedRowModel().rows.length > 0}
          <div class="text-muted-foreground flex-1 text-sm ml-4">
            {table.getFilteredSelectedRowModel().rows.length} / {" "}
            {table.getFilteredRowModel().rows.length} satır seçildi.
          </div>
        {/if}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            {#snippet child({ props })}
              <Button {...props} variant="outline" class="ml-auto">Sütunlar <ChevronDown class="ml-2 size-4" /></Button>
            {/snippet}
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            {#each table
              .getAllColumns()
              .filter((col) => col.getCanHide()) as column (column.id)}
              <DropdownMenu.CheckboxItem
                class="capitalize"
                controlledChecked
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenu.CheckboxItem>
            {/each}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    <div class="rounded-md border">
    <Table.Root>
    <Table.Header>
    {#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
        <Table.Row>
        {#each headerGroup.headers as header (header.id)}
        <Table.Head>
        {#if !header.isPlaceholder}
            <FlexRender
            content={header.column.columnDef.header}
            context={header.getContext()}
            />
        {/if}
        </Table.Head>
        {/each}
        </Table.Row>
    {/each}
    </Table.Header>
    <Table.Body>
    {#each table.getRowModel().rows as row (row.id)}
        <Table.Row data-state={row.getIsSelected() && "selected"}>
        {#each row.getVisibleCells() as cell (cell.id)}
        <Table.Cell>
        <FlexRender
            content={cell.column.columnDef.cell}
            context={cell.getContext()}
        />
        </Table.Cell>
        {/each}
        </Table.Row>
    {:else}
        <Table.Row>
        <Table.Cell colspan={columns.length} class="h-24 text-center">
        Sonuç bulunamadı.
        </Table.Cell>
        </Table.Row>
    {/each}
    </Table.Body>
    </Table.Root>
    </div>
<div class="flex items-center justify-end space-x-2 py-4">
  <Button
    variant="outline"
    size="sm"
    onclick={() => table.previousPage()}
    disabled={!table.getCanPreviousPage()}
  >
    Önceki
  </Button>
  <Button
    variant="outline"
    size="sm"
    onclick={() => table.nextPage()}
    disabled={!table.getCanNextPage()}
  >
    Sonraki
  </Button>
</div>
</div>
