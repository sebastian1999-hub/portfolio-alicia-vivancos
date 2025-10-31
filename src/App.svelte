<script lang="ts">
  import Router from 'svelte-spa-router';
  import routes from './routes';
  import Header from './lib/components/Header.svelte';
  import Footer from './lib/components/Footer.svelte';
</script>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
  }
  
  @keyframes glow {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.2); }
  }

  .flame {
    animation: float 8s ease-in-out infinite;
  }

  .glow {
    animation: glow 4s ease-in-out infinite;
  }

  .backdrop {
    backdrop-filter: blur(100px);
  }
</style>

<main class="min-h-screen bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-100 text-gray-900 pb-32 relative overflow-hidden">
  <div class="absolute inset-0 pointer-events-none z-0">
    <!-- Formas de fuego decorativas -->
    <svg class="absolute bottom-0 left-0 w-96 h-96 opacity-20 flame" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#3B82F6" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.3,-1.0C86.6,14.3,80.6,28.6,72.7,41.4C64.8,54.2,55,65.5,42.2,74.3C29.4,83.1,13.7,89.4,-1.9,92.3C-17.5,95.2,-35,94.7,-48.4,86.9C-61.8,79.1,-71,64,-77.6,48.4C-84.2,32.8,-88.2,16.4,-88.7,-0.3C-89.2,-17,-86.2,-34,-77.9,-47.4C-69.6,-60.8,-56,-70.6,-41.8,-77.7C-27.6,-84.8,-13.8,-89.2,1.0,-90.8C15.8,-92.4,31.6,-91.2,44.7,-76.4Z" transform="translate(100 100)" />
    </svg>
    <svg class="absolute bottom-0 right-0 w-96 h-96 opacity-20 flame" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#6366F1" d="M39.3,-65.6C54.1,-60.3,71.5,-54.9,81.5,-43.5C91.5,-32,94.1,-14.5,92,2.1C89.9,18.7,83.1,34.4,73.1,47.4C63.1,60.4,49.9,70.7,35.4,76.5C20.9,82.2,5.2,83.4,-11.2,81.8C-27.5,80.2,-44.5,75.8,-57.7,65.9C-70.9,56,-80.3,40.5,-85,23.7C-89.7,6.9,-89.7,-11.3,-83.9,-26.8C-78.2,-42.3,-66.7,-55,-52.8,-61.5C-38.9,-68,-19.4,-68.3,-2.2,-64.8C15,-61.3,30,-71,39.3,-65.6Z" transform="translate(100 100)" />
    </svg>
    <svg class="absolute top-20 left-1/4 w-64 h-64 opacity-20 flame glow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#60A5FA" d="M47.1,-81.5C62.2,-72.8,76.4,-62.4,83.9,-48.3C91.4,-34.2,92.2,-16.1,89.8,1.4C87.4,18.9,81.8,37.8,71.7,53.5C61.6,69.2,47,81.7,30.2,87.9C13.5,94,-5.4,93.8,-22.2,87.7C-39,81.6,-53.8,69.5,-65.4,55.1C-77,40.7,-85.5,24,-87.4,6.5C-89.2,-11,-84.5,-29.3,-75.3,-44.7C-66.1,-60.1,-52.4,-72.6,-37.3,-81.3C-22.2,-90,-11.1,-94.9,2.5,-98.8C16,-102.8,32,-90.2,47.1,-81.5Z" transform="translate(100 100)" />
    </svg>
    <!-- Nuevas formas orgánicas -->
    <svg class="absolute top-40 right-1/4 w-72 h-72 opacity-15 flame" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#0EA5E9" d="M54.4,-67.8C71.9,-55.4,88.2,-38.8,93.6,-18.7C99,1.4,93.5,25,81.5,43.2C69.5,61.4,50.9,74.2,30.4,80.6C9.9,87,-12.4,87,-32.7,79.7C-52.9,72.4,-71,57.8,-81.5,37.8C-91.9,17.8,-94.7,-7.5,-87.7,-28.9C-80.7,-50.3,-63.9,-67.8,-45,-75.8C-26.1,-83.9,-5.1,-82.5,13.5,-77.9C32,-73.4,36.9,-80.2,54.4,-67.8Z" transform="translate(100 100)" />
    </svg>
    <svg class="absolute bottom-1/3 left-1/3 w-48 h-48 opacity-20 flame glow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#2563EB" d="M42.3,-69.7C53.4,-61.5,60.2,-47,65.7,-32.2C71.2,-17.4,75.4,-2.3,73.7,12.2C72,26.7,64.5,40.6,53.6,51.7C42.7,62.8,28.5,71.1,13.5,72.7C-1.5,74.3,-17.2,69.2,-31.9,62.1C-46.6,54.9,-60.3,45.7,-69.7,32.2C-79.1,18.7,-84.2,0.8,-80.9,-15.2C-77.7,-31.2,-66.1,-45.4,-52.3,-53.4C-38.5,-61.4,-22.5,-63.2,-5.9,-64.8C10.7,-66.3,31.2,-77.8,42.3,-69.7Z" transform="translate(100 100)" />
    </svg>
    <svg class="absolute top-1/4 right-10 w-40 h-40 opacity-25 flame" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#7DD3FC" d="M38.9,-64.7C51.9,-56.3,65,-48.2,73.7,-36.3C82.4,-24.4,86.7,-8.7,84.7,6.2C82.7,21,74.4,35,64.7,47.2C55,59.4,43.9,69.8,30.5,74.8C17.1,79.8,1.4,79.5,-14.8,77C-31,74.6,-47.7,70.1,-60.6,60.1C-73.5,50.2,-82.5,34.8,-86.3,17.8C-90,-0.8,-88.5,-20.9,-81.1,-37.2C-73.7,-53.4,-60.4,-65.8,-45.4,-73.1C-30.4,-80.4,-13.7,-82.6,0.2,-82.9C14,-83.2,25.9,-73.1,38.9,-64.7Z" transform="translate(100 100)" />
    </svg>
    <!-- Pequeñas formas adicionales -->
    <svg class="absolute top-1/2 right-1/3 w-32 h-32 opacity-15 flame glow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#93C5FD" d="M44.1,-76.3C58.4,-69.2,72,-59.4,80.8,-45.9C89.6,-32.4,93.5,-15.2,92.3,1.7C91.1,18.6,84.7,37.2,74.6,53C64.5,68.8,50.7,81.8,34.7,87.7C18.7,93.6,0.5,92.3,-17.8,88.4C-36.1,84.5,-54.5,77.9,-69.7,66.2C-84.9,54.5,-96.9,37.7,-100.1,19.3C-103.3,1,-97.7,-18.9,-88.5,-35.8C-79.3,-52.7,-66.5,-66.5,-51.2,-73.2C-35.9,-79.9,-17.9,-79.4,-1,-77.8C15.9,-76.2,31.8,-73.5,44.1,-76.3Z" transform="translate(100 100)" />
    </svg>
    <svg class="absolute bottom-1/4 left-20 w-24 h-24 opacity-20 flame" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#1D4ED8" d="M42.3,-69.7C53.4,-61.5,60.2,-47,65.7,-32.2C71.2,-17.4,75.4,-2.3,73.7,12.2C72,26.7,64.5,40.6,53.6,51.7C42.7,62.8,28.5,71.1,13.5,72.7C-1.5,74.3,-17.2,69.2,-31.9,62.1C-46.6,54.9,-60.3,45.7,-69.7,32.2C-79.1,18.7,-84.2,0.8,-80.9,-15.2C-77.7,-31.2,-66.1,-45.4,-52.3,-53.4C-38.5,-61.4,-22.5,-63.2,-5.9,-64.8C10.7,-66.3,31.2,-77.8,42.3,-69.7Z" transform="translate(100 100)" />
    </svg>
  </div>
  
  <Header />
  <div class="w-full px-2 py-6 relative z-10">
    <div class="rounded-2xl">
        <Router {routes} />
    </div>
  </div>
  <Footer />
</main>
