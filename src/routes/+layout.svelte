<script>
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme.js';

  let { children } = $props();

  onMount(() => {
    theme.init();
  });
</script>

<Nav />
<main id="main-content">
  {@render children()}
</main>
<Footer />

<style>
  main {
    min-height: calc(100vh - var(--nav-h));
    position: relative;
    z-index: 1;
  }
</style>
