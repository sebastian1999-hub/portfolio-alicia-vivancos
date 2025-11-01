<script lang="ts">
  import { onMount } from 'svelte';
  import { projects } from './projectsData';
  import { push } from 'svelte-spa-router';
  import { fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  // Usamos los proyectos como slides del carrusel
  const slides = projects;
  let index = 0;

  function prev() {
    index = (index - 1 + slides.length) % slides.length;
  }

  function next() {
    index = (index + 1) % slides.length;
  }

  function openDetail() {
    const proj = slides[index];
    if (proj?.id) push(`/projects/${proj.id}`);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  }

  let touchStartX = 0;
  function onTouchStart(e: TouchEvent) {
    touchStartX = e.changedTouches[0].clientX;
  }
  function onTouchEnd(e: TouchEvent) {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      dx > 0 ? prev() : next();
    }
  }

  // Medir dinámicamente header y footer para calcular altura sin scroll
  let headerH = 64;
  let footerH = 48;
  let viewportH = 0;

  function measure() {
    viewportH = window.innerHeight;
    const header = document.querySelector('header') as HTMLElement | null;
    const footer = document.querySelector('footer') as HTMLElement | null;
    headerH = header?.offsetHeight ?? headerH;
    footerH = footer?.offsetHeight ?? footerH;
  }

  onMount(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Carrusel clásico a pantalla completa (entre header y footer) -->
<section
  class="w-full"
  style={`height: calc(${viewportH}px - ${headerH}px - ${footerH}px); margin-top: ${headerH}px;`}
>
  <div class="relative w-full h-full bg-neutral-900" on:touchstart={onTouchStart} on:touchend={onTouchEnd}>
    {#if slides && slides.length}
      <!-- Imagen actual con transición de desvanecimiento -->
      {#key index}
        <img
          src={slides[index].image}
          alt={slides[index].title}
          class="absolute inset-0 w-full h-full object-cover select-none"
          draggable="false"
          transition:fade={{ duration: 450, easing: cubicOut }}
        />
      {/key}

      <!-- Degradados para legibilidad -->
      <div class="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
      <div class="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>

      <!-- Flecha izquierda -->
      <button
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
        on:click={prev}
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Flecha derecha -->
      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
        on:click={next}
        aria-label="Siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Indicadores (puntos) removidos -->

      <!-- Información inferior: eyebrow + título + descripción + botones -->
      <div class="absolute inset-x-0 bottom-0 p-6">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div class="max-w-3xl">
            {#if slides[index].tags && slides[index].tags.length}
              <div class="eyebrow text-white/80">{slides[index].tags[0]}</div>
            {/if}
            <h2 class="text-white text-2xl md:text-4xl font-serif font-semibold drop-shadow">
              {slides[index].title}
            </h2>
            {#if slides[index].description}
              <p class="hidden md:block text-white/90 mt-2 max-w-2xl">{slides[index].description}</p>
            {/if}
          </div>
          <div class="flex gap-3">
            <button class="btn-primary focus-ring" on:click={openDetail}>Ver detalle</button>
          </div>
        </div>
      </div>
    {:else}
      <div class="w-full h-full grid place-items-center text-white">No hay proyectos</div>
    {/if}
  </div>
</section>

<style>
  /* Evitar selección accidental de texto/imágenes durante el swipe */
  :global(img) { user-select: none; }
</style>
