<script lang="ts">
	import '../app.css';
	import Topbar from '$lib/components/Topbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	let { children } = $props();
</script>

  <div class="min-h-screen bg-background">
    <div class="dark">
      <Topbar />
      <Sidebar />
    </div>
    <main class="pt-[3.5rem] sm:pl-20 min-h-screen pb-[4.5rem] sm:pb-0">
      <div class="p-4">
        {@render children()}
      </div>
    </main>
  </div>
