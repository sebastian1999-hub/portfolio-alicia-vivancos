<script lang="ts">
  import { push } from 'svelte-spa-router';
  let open = false;

  function closeMenu() {
    open = false;
  }
</script>

<header class="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
  <div class="px-4 py-3">
    <!-- Versión desktop -->
    <div class="hidden md:flex items-center justify-between">
      <nav class="flex-1">
        <ul class="flex justify-end gap-8 pr-8 text-gray-600">
          <li>
            <a href="/" 
              class="text-sm uppercase tracking-wider hover:text-blue-600 transition-colors" 
              on:click|preventDefault={() => push('/')}>Inicio</a>
          </li>
          <li>
            <a href="/about" 
              class="text-sm uppercase tracking-wider hover:text-blue-600 transition-colors" 
              on:click|preventDefault={() => push('/about')}>Sobre mí</a>
          </li>
        </ul>
      </nav>
      
      <a href="/" 
        class="text-xl font-serif text-blue-700" 
        on:click|preventDefault={() => push('/')}>
        Alicia Vivancos Solano
      </a>
      
      <nav class="flex-1">
        <ul class="flex justify-start gap-8 pl-8 text-gray-600">
          <li>
            <a href="/projects" 
              class="text-sm uppercase tracking-wider hover:text-blue-600 transition-colors" 
              on:click|preventDefault={() => push('/projects')}>Proyectos</a>
          </li>
          <li>
            <a href="/contact" 
              class="text-sm uppercase tracking-wider hover:text-blue-600 transition-colors" 
              on:click|preventDefault={() => push('/contact')}>Contacto</a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Versión móvil -->
    <div class="md:hidden relative">
      <div class="flex flex-col items-center">
        <div class="w-full flex items-center justify-between mb-2">
          <a href="/" 
            class="text-xl font-serif text-blue-700" 
            on:click|preventDefault={() => push('/')}>
            Alicia Vivancos Solano
          </a>
          <button 
            class="text-2xl text-gray-600 focus:outline-none"
            on:click={() => (open = !open)} 
            aria-label="menu">
            {open ? '×' : '☰'}
          </button>
        </div>
        
        {#if open}
          <nav class="w-full bg-white/95 backdrop-blur-sm shadow-lg rounded-lg py-4 mt-2">
            <ul class="flex flex-col items-center gap-4">
              <li>
                <a href="/" 
                  class="text-sm uppercase tracking-wider hover:text-blue-600 transition-colors" 
                  on:click|preventDefault={() => { push('/'); closeMenu(); }}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="/about" 
                  class="text-sm uppercase tracking-wider hover:text-blue-600 transition-colors" 
                  on:click|preventDefault={() => { push('/about'); closeMenu(); }}>
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="/projects" 
                  class="text-sm uppercase tracking-wider hover:text-blue-600 transition-colors" 
                  on:click|preventDefault={() => { push('/projects'); closeMenu(); }}>
                  Proyectos
                </a>
              </li>
              <li>
                <a href="/contact" 
                  class="text-sm uppercase tracking-wider hover:text-blue-600 transition-colors" 
                  on:click|preventDefault={() => { push('/contact'); closeMenu(); }}>
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        {/if}
      </div>
    </div>
  </div>
</header>

<style>
</style>