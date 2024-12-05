<script lang="ts">
  import { Calendar, User } from "lucide-svelte";
</script>

<div class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 border-b shadow-sm bg-background">
  <!-- Company Logo -->
  <div class="flex items-center space-x-2">
    <img src="/logo.png" alt="Company Logo" class="h-8 w-auto object-contain" />
  </div>

  <!-- Profile and Calendar Icons -->
  <div class="flex items-center space-x-4">
    <button
      class="p-2 rounded-full hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label="Calendar"
    >
      <Calendar class="h-6 w-6 text-foreground" />
    </button>
    <button
      class="p-2 rounded-full hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label="Profile"
    >
      <User class="h-6 w-6 text-foreground" />
    </button>
  </div>
</div>
