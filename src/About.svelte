<script>
  import { onMount } from 'svelte';
  
  let mounted = false;
  onMount(() => {
    mounted = true;
  });
</script>

<section class="w-full py-16 px-6">
  <div class="w-full max-w-[95%] mx-auto">
    <div class="flex flex-col w-full gap-8">
      <!-- Imagen y texto sobre mí en fila -->
      <div class="flex flex-col md:flex-row w-full gap-8">
        <!-- Imagen a la izquierda -->
        <div class="w-full md:w-auto flex justify-center md:justify-start">
          <div class="w-full max-w-xs">
            <div class="card overflow-hidden">
              <img 
                src={`${import.meta.env.BASE_URL}images/IMG_7990.jpg`} 
                alt="Alicia Vivancos" 
                class="w-full h-[320px] object-cover"
              />
            </div>
          </div>
        </div>
        
        <!-- Texto sobre mí a la derecha -->
        <div class="flex-1 card p-8">
          <div class="eyebrow">Perfil</div>
          <h2 class="section-title mb-4">Sobre mí</h2>
          
          <div class="space-y-5 text-gray-700">
            <p class="text-lg leading-relaxed">
              Soy Alicia Vivancos, artista fallera con raíces profundas en la tradición valenciana. Mi pasión por el arte y la cultura de las Fallas me ha llevado a dedicarme a la creación de monumentos que fusionan historia, emoción y creatividad.
            </p>
            
            <p class="text-lg leading-relaxed">
              Mi trabajo se caracteriza por la búsqueda constante de innovación, sin perder de vista la esencia de la fiesta. Cada proyecto es una oportunidad para contar historias, transmitir valores y sorprender al público con detalles únicos y acabados de alta calidad.
            </p>

            <p class="text-lg leading-relaxed">
              He cursado estudios en Bellas Artes y me he especializado en técnicas falleras, lo que me permite abordar tanto grandes monumentos como piezas más íntimas, siempre con el objetivo de emocionar y conectar con las personas.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Especialidades debajo de todo -->
      <div class="w-full card p-8">
        <div class="eyebrow">Competencias</div>
        <h3 class="font-serif text-2xl font-semibold text-[color:var(--ink)] mb-4">Especialidades</h3>
        <ul class="list-disc list-inside space-y-2 text-lg text-gray-700">
          <li>Diseño y modelado de figuras falleras</li>
          <li>Pintura y acabados artísticos</li>
          <li>Composición de escenas y narrativas visuales</li>
          <li>Restauración y conservación de obras falleras</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
  /* Animación de entrada suave */
  section {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.8s ease-out forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: none;
    }
  }
</style>
