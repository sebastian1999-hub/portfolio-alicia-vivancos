<script lang="ts">
  export let p: {
    id: string;
    title: string;
    description: string;
    image?: string;
    url?: string;
    tags?: string[];
  };
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<article class="bg-gradient-to-br from-blue-50/80 via-white/80 to-sky-100/80 rounded-lg shadow-lg border-2 border-blue-200 transition-all hover:shadow-2xl hover:scale-105 overflow-hidden">
  <!-- Imagen del proyecto -->
  {#if p.image}
    <div class="w-full">
      <img 
        src={p.image} 
        alt={p.title}
        class="w-full h-80 object-cover"
      />
    </div>
  {/if}
  
  <div class="p-4">
    <h3 class="text-xl font-semibold mb-2 text-blue-700">{p.title}</h3>
    <p class="text-gray-600 text-sm mb-3 line-clamp-2">{p.description}</p>
    {#if p.tags}
      <div class="mb-3">
        {#each p.tags as tag}
          <span class="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded-full mr-2 text-xs font-semibold">{tag}</span>
        {/each}
      </div>
    {/if}
    <button
      type="button"
      class="w-full px-4 py-2 bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-500 text-white rounded shadow hover:from-blue-500 hover:via-sky-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition font-bold"
      on:click={() => dispatch('select')}
    >
      Ver Detalle
    </button>
  </div>
</article>
