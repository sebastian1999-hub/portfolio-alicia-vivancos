<script lang="ts">
  import ProjectDetail from '$lib/components/ProjectDetail.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  // Simulación de datos, reemplaza con fetch real o store
  const projects = [
    {
      id: '1',
      title: 'Proyecto Uno',
      description: 'Descripción del proyecto uno.',
      image: '/images/proyecto1.jpg',
      url: 'https://ejemplo.com/1',
      tags: ['Svelte', 'Tailwind']
    },
    {
      id: '2',
      title: 'Proyecto Dos',
      description: 'Descripción del proyecto dos.',
      image: '/images/proyecto2.jpg',
      url: 'https://ejemplo.com/2',
      tags: ['TypeScript', 'Vite']
    }
  ];

  let project;

  $: projectId = $page.params.projectId;

  onMount(() => {
    project = projects.find(p => p.id === projectId);
  });
</script>

{#if project}
  <ProjectDetail {project} />
{:else}
  <div class="p-8 text-center">Proyecto no encontrado.</div>
{/if}
