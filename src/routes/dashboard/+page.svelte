<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Table from "$lib/components/ui/table";
    import Calendar from '@event-calendar/core';
    import TımeGrid from '@event-calendar/day-grid';

    const plugins = [TımeGrid];
    const options = {
        view: 'dayGridMonth',
        height: '100%',
        locale: 'tr',
        buttonText: {
            today: 'bugün'
        },

        headerToolbar: {
            start: 'prev',
            center: 'title',
            end: 'next today'
        }
    };

    const transactions = [
        {
            id: 1,
            date: "2024-01-15",
            type: "Ödeme",
            amount: "₺1,250.00",
            status: "Tamamlandı"
        },
        {
            id: 2,
            date: "2024-01-14",
            type: "Sipariş",
            amount: "₺2,340.50",
            status: "İşleniyor"
        },
        {
            id: 3,
            date: "2024-01-13",
            type: "Ödeme",
            amount: "₺890.75",
            status: "Tamamlandı"
        }
    ];
</script>

<div class="flex justify-center">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full max-w-[1700px] w-full">
        <div class="lg:col-span-5 space-y-4">
            <!-- Bakiye Card -->
            <Card.Root class="bg-white/50 backdrop-blur-sm h-[230px] w-full">
                <div class="flex h-full p-6">
                    <div class="flex-1 flex flex-col justify-between">
                        <div class="space-y-1">
                            <p class="text-sm text-muted-foreground font-medium">Toplam Bakiye</p>
                            <h2 class="text-3xl font-semibold">₺24,560.45</h2>
                            <div class="flex items-center space-x-1">
                                <span class="flex items-center text-sm text-emerald-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                                        <path fill-rule="evenodd" d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z" clip-rule="evenodd" />
                                    </svg>
                                    +14.5%
                                </span>
                                <span class="text-sm text-muted-foreground">bu ay</span>
                            </div>
                        </div>
                        
                        <div class="flex items-center text-sm text-muted-foreground space-x-2">
                            <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
                            <span>Son güncelleme: 15 dakika önce</span>
                        </div>
                    </div>
                    
                    <div class="w-[160px] h-full flex items-end">
                        <svg viewBox="0 0 160 140" class="w-full h-[140px]">
                            <path 
                                d="M0 100L20 90L40 110L60 80L80 95L100 60L120 75L140 40L160 30"
                                fill="none"
                                stroke="rgb(16 185 129)"
                                stroke-width="2.5"
                            />
                        </svg>
                    </div>
                </div>
            </Card.Root>

            <!-- Son İşlemler Card -->
            <Card.Root class="bg-white/50 backdrop-blur-sm w-full">
                <Card.Header class="flex flex-row items-center justify-between">
                    <Card.Title>Son İşlemler</Card.Title>
                    <a href="/orders" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                        Tümünü Gör
                    </a>
                </Card.Header>
                <Card.Content>
                    <Table.Root>
                        <Table.Header>
                            <Table.Row>
                                <Table.Head>Tarih</Table.Head>
                                <Table.Head>İşlem Türü</Table.Head>
                                <Table.Head>Tutar</Table.Head>
                                <Table.Head>Durum</Table.Head>
                                <Table.Head class="text-right">İşlem</Table.Head>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {#each transactions as transaction}
                                <Table.Row>
                                    <Table.Cell>{transaction.date}</Table.Cell>
                                    <Table.Cell>{transaction.type}</Table.Cell>
                                    <Table.Cell>{transaction.amount}</Table.Cell>
                                    <Table.Cell>
                                        <span class={transaction.status === 'Tamamlandı' ? 'text-emerald-500' : 'text-amber-500'}>
                                            {transaction.status}
                                        </span>
                                    </Table.Cell>
                                    <Table.Cell class="text-right">
                                        <a href={transaction.type === 'Sipariş' ? '/orders' : '/payment'} class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3 py-2">
                                            Detay
                                        </a>
                                    </Table.Cell>
                                </Table.Row>
                            {/each}
                        </Table.Body>
                    </Table.Root>
                </Card.Content>
            </Card.Root>
        </div>

        <!-- Calendar Card -->
        <div class="lg:col-span-7 h-[600px] lg:h-[calc(100vh-8rem)] lg:max-h-[900px]">
            <Card.Root class="bg-white/50 backdrop-blur-sm h-full w-full max-w-[900px]">
                <Card.Header>
                    <Card.Title>Takvim</Card.Title>
                </Card.Header>
                <Card.Content class="h-[calc(100%-4rem)]">
                    <Calendar {plugins} {options} />
                </Card.Content>
            </Card.Root>
        </div>
    </div>
</div>
