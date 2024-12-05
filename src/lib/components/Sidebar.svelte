<script>
  import { Home, Calendar, Settings, User, LayoutDashboard, ReceiptText, Truck, Package, CreditCard } from "lucide-svelte";
  import { page } from "$app/stores";
</script>

<!-- Desktop Sidebar -->
<div class="hidden sm:flex flex-col items-center fixed top-[3.5rem] left-0 h-[calc(100vh-3.5rem)] w-20 bg-background border-r shadow-sm">
  <!-- Sidebar Icon Wrapper -->
  <div class="flex flex-col items-center justify-between flex-1 py-4 space-y-6">
    <!-- Top Section -->
    <div class="flex flex-col items-center space-y-6">
      <!-- Dashboard Icon -->
      <a
        href="/dashboard"
        class="group flex flex-col items-center justify-center w-[72px] h-16 space-y-1 rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 {$page.url.pathname === '/dashboard' ? 'bg-blue-500' : ''} transition-colors"
        aria-label="Dashboard"
      >
        <LayoutDashboard class="h-8 w-8 {$page.url.pathname === '/dashboard' ? 'text-white' : 'text-foreground'} group-hover:text-white" />
        <span class="text-xs {$page.url.pathname === '/dashboard' ? 'text-white' : 'text-muted-foreground'} group-hover:text-white">Ana Panel</span>
      </a>

      <!-- Account Icon -->
      <a
        href="/account"
        class="group flex flex-col items-center justify-center w-[72px] h-16 space-y-1 rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 {$page.url.pathname === '/account' ? 'bg-blue-500' : ''} transition-colors"
        aria-label="Account"
      >
        <ReceiptText class="h-8 w-8 {$page.url.pathname === '/account' ? 'text-white' : 'text-foreground'} group-hover:text-white" />
        <span class="text-xs {$page.url.pathname === '/account' ? 'text-white' : 'text-muted-foreground'} group-hover:text-white">Cari Hesap</span>
      </a>

      <!-- Orders Icon -->
      <a
        href="/orders"
        class="group flex flex-col items-center justify-center w-[72px] h-16 space-y-1 rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 {$page.url.pathname === '/orders' ? 'bg-blue-500' : ''} transition-colors"
        aria-label="Orders"
      >
        <Truck class="h-8 w-8 {$page.url.pathname === '/orders' ? 'text-white' : 'text-foreground'} group-hover:text-white" />
        <span class="text-xs {$page.url.pathname === '/orders' ? 'text-white' : 'text-muted-foreground'} group-hover:text-white">Siparişler</span>
      </a>

      <!-- Products Icon -->
      <a
        href="/products"
        class="group flex flex-col items-center justify-center w-[72px] h-16 space-y-1 rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 {$page.url.pathname === '/products' ? 'bg-blue-500' : ''} transition-colors"
        aria-label="Products"
      >
        <Package class="h-8 w-8 {$page.url.pathname === '/products' ? 'text-white' : 'text-foreground'} group-hover:text-white" />
        <span class="text-xs {$page.url.pathname === '/products' ? 'text-white' : 'text-muted-foreground'} group-hover:text-white">Ürünler</span>
      </a>

      <!-- Payment Icon -->
      <a
        href="/payment"
        class="group flex flex-col items-center justify-center w-[72px] h-16 space-y-1 rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 {$page.url.pathname === '/payment' ? 'bg-blue-500' : ''} transition-colors"
        aria-label="Payment"
      >
        <CreditCard class="h-8 w-8 {$page.url.pathname === '/payment' ? 'text-white' : 'text-foreground'} group-hover:text-white" />
        <span class="text-xs {$page.url.pathname === '/payment' ? 'text-white' : 'text-muted-foreground'} group-hover:text-white">Ödeme</span>
      </a>
    </div>

    <!-- Bottom Section -->
    <div class="flex flex-col items-center space-y-6">
      <!-- Settings Icon -->
      <a
        href="/settings"
        class="group flex flex-col items-center justify-center w-[72px] h-16 space-y-1 rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 {$page.url.pathname === '/settings' ? 'bg-blue-500' : ''} transition-colors"
        aria-label="Settings"
      >
        <Settings class="h-8 w-8 {$page.url.pathname === '/settings' ? 'text-white' : 'text-foreground'} group-hover:text-white" />
        <span class="text-xs {$page.url.pathname === '/settings' ? 'text-white' : 'text-muted-foreground'} group-hover:text-white">Ayarlar</span>
      </a>
    </div>
  </div>
</div>

<!-- Mobile Bottom Navigation -->
<div class="fixed bottom-0 left-0 right-0 sm:hidden bg-background border-t shadow-sm z-50">
  <div class="flex justify-around items-center py-2">
    <a
      href="/dashboard"
      class="group flex flex-col items-center justify-center w-[72px] h-16 space-y-1 rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 {$page.url.pathname === '/dashboard' ? 'bg-blue-500' : ''} transition-colors"
      aria-label="Dashboard"
    >
      <LayoutDashboard class="h-6 w-6 {$page.url.pathname === '/dashboard' ? 'text-white' : 'text-foreground'} group-hover:text-white" />
      <span class="text-xs {$page.url.pathname === '/dashboard' ? 'text-white' : 'text-muted-foreground'} group-hover:text-white">Ana Panel</span>
    </a>
    <a
      href="/orders"
      class="group flex flex-col items-center justify-center w-[72px] h-16 space-y-1 rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 {$page.url.pathname === '/orders' ? 'bg-blue-500' : ''} transition-colors"
      aria-label="Orders"
    >
      <Truck class="h-6 w-6 {$page.url.pathname === '/orders' ? 'text-white' : 'text-foreground'} group-hover:text-white" />
      <span class="text-xs {$page.url.pathname === '/orders' ? 'text-white' : 'text-muted-foreground'} group-hover:text-white">Siparişler</span>
    </a>
    <a
      href="/products"
      class="group flex flex-col items-center justify-center w-[72px] h-16 space-y-1 rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 {$page.url.pathname === '/products' ? 'bg-blue-500' : ''} transition-colors"
      aria-label="Products"
    >
      <Package class="h-6 w-6 {$page.url.pathname === '/products' ? 'text-white' : 'text-foreground'} group-hover:text-white" />
      <span class="text-xs {$page.url.pathname === '/products' ? 'text-white' : 'text-muted-foreground'} group-hover:text-white">Ürünler</span>
    </a>
    <a
      href="/settings"
      class="group flex flex-col items-center justify-center w-[72px] h-16 space-y-1 rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 {$page.url.pathname === '/settings' ? 'bg-blue-500' : ''} transition-colors"
      aria-label="Settings"
    >
      <Settings class="h-6 w-6 {$page.url.pathname === '/settings' ? 'text-white' : 'text-foreground'} group-hover:text-white" />
      <span class="text-xs {$page.url.pathname === '/settings' ? 'text-white' : 'text-muted-foreground'} group-hover:text-white">Ayarlar</span>
    </a>
  </div>
</div>
