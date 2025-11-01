<script lang="ts">
  import Router from 'svelte-spa-router';
  import routes from './routes';
  import Header from './lib/components/Header.svelte';
  import Footer from './lib/components/Footer.svelte';
  import { onMount } from 'svelte';

  // Calcula una altura mínima para el contenido que empuje el footer al fondo
  let contentMinH = 'calc(100vh - 64px - 48px)';

  function measureHeights() {
    const header = document.querySelector('header') as HTMLElement | null;
    const footer = document.querySelector('footer') as HTMLElement | null;
    const h = header?.offsetHeight ?? 64;
    const f = footer?.offsetHeight ?? 48;
    contentMinH = `calc(100vh - ${h}px - ${f}px)`;
  }

  onMount(() => {
    measureHeights();
    const onResize = () => measureHeights();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });
</script>

<style>
  /* App container has no extra animations to keep an elegant, calm background */
</style>
<main class="min-h-screen bg-[color:var(--surface)] text-[color:var(--ink)] pb-0 relative overflow-x-hidden">
  <Header />
  <div class="w-full relative z-10" style={`min-height: ${contentMinH}`}> 
    <Router {routes} />
  </div>
  <Footer />
</main>