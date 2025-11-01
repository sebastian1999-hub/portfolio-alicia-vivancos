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

<article class="card transition-all hover:shadow-lg hover:-translate-y-0.5 overflow-hidden group">
  <!-- Imagen del proyecto -->
  {#if p.image}
    <div class="w-full overflow-hidden">
      <img 
        src={p.image} 
        alt={p.title}
        class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  {/if}
  
  <div class="p-4">
  <h3 class="text-xl font-semibold mb-2 text-[color:var(--ink)] font-serif">{p.title}</h3>
  <p class="text-gray-600 text-sm mb-3 line-clamp-2">{p.description}</p>
    {#if p.tags}
      <div class="mb-3">
        {#each p.tags as tag}
          <span class="chip mr-2 mb-2">{tag}</span>
        {/each}
      </div>
    {/if}
    <button
      type="button"
      class="w-full btn-primary focus-ring"
      on:click={() => dispatch('select')}
    >
      Ver Detalle
    </button>
  </div>
</article>
