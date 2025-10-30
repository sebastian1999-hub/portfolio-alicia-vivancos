<script lang="ts">
  export let project: {
    id: string;
    title: string;
    description: string;
    image?: string;
    url?: string;
    tags?: string[];
  };
</script>

<div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
  {#if project.image}
    <img src={project.image} alt={project.title} class="w-full h-64 object-cover rounded mb-4" />
  {/if}
  <h2 class="text-2xl font-bold mb-2">{project.title}</h2>
  <p class="mb-4">{project.description}</p>
  {#if project.tags}
    <div class="mb-4">
      {#each project.tags as tag}
        <span class="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2 text-sm">{tag}</span>
      {/each}
    </div>
  {/if}
  {#if project.url}
    <a href={project.url} target="_blank" class="text-blue-500 hover:underline">Ver proyecto</a>
  {/if}
</div>
