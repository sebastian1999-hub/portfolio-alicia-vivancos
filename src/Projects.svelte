<script lang="ts">
  import ProjectCard from './lib/components/ProjectCard.svelte';
  import { projects } from './projectsData';
  import { push } from 'svelte-spa-router';

  let searchTerm = '';
  
  $: filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function goToDetail(id: string) {
    push(`/projects/${id}`);
  }
</script>

<section class="w-full py-16 px-6">
  <div class="w-full max-w-[95%] mx-auto">
    <!-- Buscador (oculto en móvil) -->
    <div class="mb-8 max-w-2xl mx-auto hidden md:block">
      <div class="relative">
        <input
          type="text"
          bind:value={searchTerm}
          placeholder="Buscar proyectos..."
          class="w-full px-6 py-4 rounded-xl border-2 border-blue-300 focus:border-blue-500 focus:outline-none transition-colors bg-white/80 backdrop-blur-sm text-lg shadow-lg"
        />
        <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      {#if searchTerm}
        <p class="mt-3 text-center text-gray-600">
          {filteredProjects.length} {filteredProjects.length === 1 ? 'proyecto encontrado' : 'proyectos encontrados'}
        </p>
      {/if}
    </div>

    <!-- Grid de proyectos -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each filteredProjects as p}
        <ProjectCard p={p} on:select={() => goToDetail(p.id)} />
      {/each}
    </div>

    {#if filteredProjects.length === 0}
      <div class="text-center py-16">
        <svg class="w-24 h-24 mx-auto text-blue-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p class="text-xl text-gray-600 mb-2">No se encontraron proyectos</p>
        <p class="text-gray-500">Intenta con otro término de búsqueda</p>
      </div>
    {/if}
  </div>
</section>
