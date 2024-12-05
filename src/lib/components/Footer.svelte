<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer class="w-full bg-background border-t">
  <div class="container flex flex-col sm:flex-row items-center justify-between py-4 px-4">
    <p class="text-sm text-muted-foreground">
      © {currentYear} Torelas. All rights reserved.
    </p>
    <div class="flex items-center space-x-4 mt-2 sm:mt-0">
      <a href="/privacy" class="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
      <a href="/terms" class="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
      <a href="/contact" class="text-sm text-muted-foreground hover:text-foreground">Contact</a>
    </div>
  </div>
</footer>
