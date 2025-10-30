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

<div class="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 py-12 px-4">
  <div class="max-w-7xl mx-auto">
    <!-- Header con título del proyecto -->
    <div class="mb-8">
      <h1 class="text-5xl font-bold text-gray-800 mb-2" style="font-family: 'Playfair Display', serif;">
        {project.title}
      </h1>
      <div class="h-1 w-32 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
    </div>

    <!-- Layout principal: Sidebar + Contenido -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Sidebar izquierdo con información -->
      <div class="lg:col-span-4 space-y-6">
        
        <!-- Card de Proyecto -->
        <div class="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8 shadow-lg border border-orange-200">
          <h2 class="text-2xl font-bold text-orange-800 mb-6" style="font-family: 'Playfair Display', serif;">
            PROYECTO
          </h2>
          
          <!-- Nombre del Proyecto -->
          <div class="mb-6">
            <h3 class="text-sm font-bold text-orange-700 mb-2 uppercase tracking-wide">
              Nombre del Proyecto
            </h3>
            <p class="text-gray-800 text-lg">{project.title}</p>
          </div>

          <!-- Herramientas -->
          {#if project.tags && project.tags.length > 0}
            <div class="mb-6">
              <h3 class="text-sm font-bold text-orange-700 mb-2 uppercase tracking-wide">
                Herramientas
              </h3>
              <p class="text-gray-700">{project.tags.join(', ')}</p>
            </div>
          {/if}

          <!-- Presupuesto -->
          <div class="mb-6">
            <h3 class="text-sm font-bold text-orange-700 mb-2 uppercase tracking-wide">
              Presupuesto
            </h3>
            <p class="text-2xl font-bold text-gray-800">€600</p>
          </div>

          <!-- Objetivo -->
          <div class="mb-6">
            <h3 class="text-sm font-bold text-orange-700 mb-2 uppercase tracking-wide">
              Objetivo
            </h3>
            <p class="text-gray-700 text-sm leading-relaxed">
              Creación de una pieza artística única que represente la tradición fallera valenciana
            </p>
          </div>

          <!-- Cliente -->
          <div class="mb-6">
            <h3 class="text-sm font-bold text-orange-700 mb-2 uppercase tracking-wide">
              Cliente
            </h3>
            <p class="text-gray-800 font-semibold">Nombre del cliente</p>
            <p class="text-gray-700 text-sm mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          <!-- Estadísticas circulares -->
          <div class="grid grid-cols-3 gap-4 mt-8">
            <div class="text-center">
              <div class="relative w-20 h-20 mx-auto mb-2">
                <svg class="w-20 h-20 transform -rotate-90">
                  <circle cx="40" cy="40" r="32" stroke="#fed7aa" stroke-width="8" fill="none"/>
                  <circle cx="40" cy="40" r="32" stroke="#f97316" stroke-width="8" fill="none"
                          stroke-dasharray="201" stroke-dashoffset="60" stroke-linecap="round"/>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-lg font-bold text-orange-700">70%</span>
                </div>
              </div>
              <p class="text-xs text-gray-600">Diseño</p>
            </div>
            
            <div class="text-center">
              <div class="relative w-20 h-20 mx-auto mb-2">
                <svg class="w-20 h-20 transform -rotate-90">
                  <circle cx="40" cy="40" r="32" stroke="#fed7aa" stroke-width="8" fill="none"/>
                  <circle cx="40" cy="40" r="32" stroke="#f97316" stroke-width="8" fill="none"
                          stroke-dasharray="201" stroke-dashoffset="140" stroke-linecap="round"/>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-lg font-bold text-orange-700">30</span>
                </div>
              </div>
              <p class="text-xs text-gray-600">Días</p>
            </div>
            
            <div class="text-center">
              <div class="relative w-20 h-20 mx-auto mb-2">
                <svg class="w-20 h-20 transform -rotate-90">
                  <circle cx="40" cy="40" r="32" stroke="#fed7aa" stroke-width="8" fill="none"/>
                  <circle cx="40" cy="40" r="32" stroke="#f97316" stroke-width="8" fill="none"
                          stroke-dasharray="201" stroke-dashoffset="1" stroke-linecap="round"/>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-sm font-bold text-orange-700">337h</span>
                </div>
              </div>
              <p class="text-xs text-gray-600">Horas</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contenido principal con imagen grande -->
      <div class="lg:col-span-8">
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {#if project.image}
            <div class="relative h-[500px] bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center">
              <img 
                src={project.image} 
                alt={project.title} 
                class="w-full h-full object-cover"
              />
              <div class="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                <p class="text-sm font-semibold text-gray-700">Vista Principal</p>
              </div>
            </div>
          {:else}
            <div class="h-[500px] bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center">
              <p class="text-4xl font-bold text-white" style="font-family: 'Playfair Display', serif;">
                {project.title}
              </p>
            </div>
          {/if}
          
          <!-- Miniaturas de proyectos relacionados -->
          <div class="p-8 bg-gradient-to-b from-gray-50 to-white">
            <h3 class="text-xl font-bold text-gray-800 mb-6" style="font-family: 'Playfair Display', serif;">
              Variaciones del Proyecto
            </h3>
            <div class="grid grid-cols-3 gap-6">
              {#each [1, 2, 3] as variant}
                <div class="group cursor-pointer">
                  <div class="relative bg-gradient-to-br from-teal-400 to-cyan-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <div class="aspect-video flex items-center justify-center">
                      {#if project.image}
                        <img src={project.image} alt="{project.title}.{String.fromCharCode(64 + variant)}" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"/>
                      {:else}
                        <p class="text-2xl font-bold text-white" style="font-family: 'Playfair Display', serif;">
                          {project.title}.{String.fromCharCode(64 + variant)}
                        </p>
                      {/if}
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p class="text-white font-semibold text-sm">
                        {project.title}.{String.fromCharCode(64 + variant)}
                      </p>
                    </div>
                    <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
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
