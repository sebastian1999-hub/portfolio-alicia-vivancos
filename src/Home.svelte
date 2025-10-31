<script lang="ts">
  const images = [
    new URL('./assets/carrousel/001 inicio.JPEG', import.meta.url).href,
    new URL('./assets/carrousel/001 portada (1).jpg', import.meta.url).href,
    new URL('./assets/carrousel/001 portadajpeg.jpeg', import.meta.url).href,
    new URL('./assets/carrousel/01 (3).jpg', import.meta.url).href,
    new URL('./assets/carrousel/04 (1).jpg', import.meta.url).href,
    new URL('./assets/carrousel/09 (1).JPG', import.meta.url).href
  ];
</script>

<section class="w-full py-16">
  <!-- Carrusel infinito continuo -->
  <div class="relative overflow-hidden">
    <div class="carousel-track">
      <!-- Duplicamos las imágenes para efecto infinito -->
      {#each [...images, ...images] as image, i}
        <div class="carousel-item">
          <img
            src={image}
            alt="Obra fallera {(i % images.length) + 1}"
            class="w-full h-full object-cover rounded-xl"
          />
          <!-- Texto sobre la imagen -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl">
            <p class="text-white text-lg font-semibold text-center">Texto de ejemplo</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Animación de entrada suave */
  section {
    opacity: 0;
    animation: fadeIn 1s ease-out forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  /* Carrusel infinito */
  .carousel-track {
    display: flex;
    gap: 2rem;
    animation: scroll 40s linear infinite;
    width: max-content;
  }

  .carousel-item {
    flex-shrink: 0;
    width: 500px;
    height: 400px;
    position: relative;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .carousel-item {
      width: 350px;
      height: 280px;
    }
    
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  }
</style>
