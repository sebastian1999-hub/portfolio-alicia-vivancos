<script lang="ts">
  import ProjectDetail from './lib/components/ProjectDetail.svelte';
  import { projects } from './projectsData';
  export let params: { id?: string } = {};

  let project = projects.find(p => p.id === params.id);
</script>

{#if project}
  <ProjectDetail {project} />
{:else}
  <div class="p-8 text-center">Proyecto no encontrado.</div>
{/if}
