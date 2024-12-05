<script lang="ts">
	import '../app.css';
	import Topbar from '$lib/components/Topbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<div class="min-h-screen bg-background flex flex-col">
    <div class="dark">
      <Topbar />
      <Sidebar />
    </div>
    <div class="pt-[3.5rem] sm:pl-20 flex flex-col">
      <main class="min-h-screen flex-1">
        <div class="p-4">
          {@render children()}
        </div>
      </main>
      <div class="dark">
        <Footer />
      </div>
    </div>
</div>
