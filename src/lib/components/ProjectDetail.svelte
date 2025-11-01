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

<div class="min-h-screen bg-[color:var(--surface)] py-12 px-4">
  <div class="max-w-7xl mx-auto">
    <!-- Header con título del proyecto -->
    <div class="mb-8">
      <div class="eyebrow">Proyecto</div>
      <h1 class="section-title">{project.title}</h1>
      <div class="divider mt-3"></div>
    </div>

    <!-- Layout principal: Sidebar + Contenido -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      
      <!-- Sidebar izquierdo con información -->
      <div class="lg:col-span-4">
        <!-- Card info -->
        <div class="card h-full p-8 flex flex-col">
          <div>
            <div class="eyebrow mb-1">Ficha</div>
            <h2 class="font-serif text-2xl font-semibold text-[color:var(--ink)] mb-6">Resumen</h2>

            <!-- Nombre del Proyecto -->
            <div class="mb-6">
              <h3 class="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)] mb-2">Nombre</h3>
              <p class="text-lg text-[color:var(--ink)]">{project.title}</p>
            </div>

            <!-- Herramientas / Tags -->
            {#if project.tags && project.tags.length > 0}
              <div class="mb-6">
                <h3 class="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)] mb-2">Etiquetas</h3>
                <div class="flex flex-wrap gap-2">
                  {#each project.tags as tag}
                    <span class="chip">{tag}</span>
                  {/each}
                </div>
              </div>
            {/if}

            <!-- Presupuesto (demo) -->
            <div class="mb-6">
              <h3 class="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)] mb-2">Presupuesto</h3>
              <p class="text-2xl font-semibold text-[color:var(--ink)]">€600</p>
            </div>

            <!-- Cliente / Descripción -->
            <div class="mb-6">
              <h3 class="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)] mb-2">Descripción</h3>
              <p class="text-[color:var(--ink-2)] leading-relaxed">{project.description}</p>
            </div>
          </div>

          <!-- Stats simples alineadas al final si hay espacio -->
          <div class="mt-auto grid grid-cols-3 gap-4 pt-6 border-t border-[color:var(--line)]">
            <div class="text-center">
              <div class="text-sm text-[color:var(--muted)]">Diseño</div>
              <div class="text-lg font-semibold text-[color:var(--ink)]">70%</div>
            </div>
            <div class="text-center">
              <div class="text-sm text-[color:var(--muted)]">Días</div>
              <div class="text-lg font-semibold text-[color:var(--ink)]">30</div>
            </div>
            <div class="text-center">
              <div class="text-sm text-[color:var(--muted)]">Horas</div>
              <div class="text-lg font-semibold text-[color:var(--ink)]">337h</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contenido principal con imagen grande -->
      <div class="lg:col-span-8">
        <div class="card h-full overflow-hidden flex flex-col">
          {#if project.image}
            <div class="relative h-[500px] bg-black/5">
              <img 
                src={project.image} 
                alt={project.title} 
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow">
                <p class="text-xs font-semibold text-[color:var(--ink-2)]">Vista principal</p>
              </div>
            </div>
          {:else}
            <div class="h-[500px] grid place-items-center bg-[color:var(--surface)]">
              <p class="font-serif text-3xl text-[color:var(--ink)]">{project.title}</p>
            </div>
          {/if}

          <!-- Variaciones / miniaturas -->
          <div class="p-8 bg-white">
            <h3 class="font-serif text-xl font-semibold text-[color:var(--ink)] mb-6">Variaciones del proyecto</h3>
            <div class="grid grid-cols-3 gap-6">
              {#each [1, 2, 3] as variant}
                <div class="group cursor-pointer">
                  <div class="relative rounded-xl overflow-hidden border border-[color:var(--line)] shadow-sm hover:shadow transition">
                    <div class="aspect-video">
                      {#if project.image}
                        <img src={project.image} alt="{project.title}.{String.fromCharCode(64 + variant)}" class="w-full h-full object-cover"/>
                      {:else}
                        <div class="w-full h-full grid place-items-center bg-[color:var(--surface)]">
                          <p class="font-serif text-lg text-[color:var(--ink)]">{project.title}.{String.fromCharCode(64 + variant)}</p>
                        </div>
                      {/if}
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p class="text-white font-medium text-xs">{project.title}.{String.fromCharCode(64 + variant)}</p>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
