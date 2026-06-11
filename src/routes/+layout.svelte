<script>
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Search from '$lib/components/Search.svelte';
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme.js';

  let { children } = $props();

  onMount(() => {
    theme.init();

    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    function observeElements() {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  });
</script>

<Search />
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
