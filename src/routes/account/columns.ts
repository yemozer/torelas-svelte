import type { ColumnDef } from "@tanstack/table-core";
import { createRawSnippet } from "svelte";
import { renderComponent, renderSnippet } from "$lib/components/ui/data-table/index.js"; 
import DataTableActions from "./data-table-actions.svelte";
import DataTableEmailButton from "./data-table-email-button.svelte";
import { Checkbox } from "$lib/components/ui/checkbox/index.js";
import { Badge } from "$lib/components/ui/badge/index.js";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
 id: string;
 amount: number;
 status: "beklemede" | "işleniyor" | "başarılı" | "başarısız";
 email: string;
};

const getStatusVariant = (status: Payment['status']): "pending" | "processing" | "success" | "error" => {
    switch (status) {
        case "beklemede":
            return "pending";
        case "işleniyor":
            return "processing";
        case "başarılı":
            return "success";
        case "başarısız":
            return "error";
        default:
            return "pending";
    }
};
 
export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({ table }) =>
            renderComponent(Checkbox, {
            checked: table.getIsAllRowsSelected(),
            indeterminate:
                table.getIsSomeRowsSelected() &&
                !table.getIsAllRowsSelected(),
            onCheckedChange: (value) => table.toggleAllRowsSelected(!!value),
            controlledChecked: true,
            "aria-label": "Tümünü Seç",
            }),
        cell: ({ row }) =>
            renderComponent(Checkbox, {
            checked: row.getIsSelected(),
            onCheckedChange: (value) => row.toggleSelected(!!value),
            controlledChecked: true,
            "aria-label": "Satır Seç",
            }),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "status",
        header: "Durum",
        cell: ({ row }) => {
            const status = row.getValue("status") as Payment['status'];
            const statusSnippet = createRawSnippet(() => ({
                render: () => status
            }));
            return renderComponent(Badge, {
                variant: getStatusVariant(status),
                children: statusSnippet
            });
        }
    },
    {
        accessorKey: "email",
        header: ({ column }) =>
        renderComponent(DataTableEmailButton, {
            onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        }),
    },
    {
        accessorKey: "amount",
        header: () => {
        const amountHeaderSnippet = createRawSnippet(() => ({
            render: () => `<div class="text-right">Tutar</div>`,
        }));
        return renderSnippet(amountHeaderSnippet, "");
        },
        cell: ({ row }) => {
        const formatter = new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY",
        });
    
        const amountCellSnippet = createRawSnippet<[string]>((getAmount) => {
            const amount = getAmount();
            return {
            render: () => `<div class="text-right font-medium">${amount}</div>`,
            };
        });
    
        return renderSnippet(
            amountCellSnippet,
            formatter.format(parseFloat(row.getValue("amount")))
        );
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
        // You can pass whatever you need from `row.original` to the component
        return renderComponent(DataTableActions, { id: row.original.id });
        },
    },
];
