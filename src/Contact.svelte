<script>
  let formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  let formStatus = '';
  let isSubmitting = false;

  // Validación reactiva
  $: isFormValid = formData.name.trim() !== '' && 
                   formData.email.trim() !== '' && 
                   formData.email.includes('@') &&
                   formData.subject.trim() !== '' && 
                   formData.message.trim() !== '';

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!isFormValid) return;
    
    isSubmitting = true;
    formStatus = 'enviando';
    
    // Crear el mailto link con los datos del formulario
    const mailtoLink = `mailto:alivivsol@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )}`;
    
    // Abrir el cliente de correo
    window.location.href = mailtoLink;
    
    // Resetear formulario
    setTimeout(() => {
      formData = { name: '', email: '', subject: '', message: '' };
      formStatus = 'enviado';
      isSubmitting = false;
      
      setTimeout(() => {
        formStatus = '';
      }, 3000);
    }, 1000);
  }
</script>

<section class="w-full py-16 px-6">
  <div class="w-full max-w-[95%] mx-auto">
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Columna izquierda: Información y redes sociales -->
      <div class="bg-gradient-to-br from-blue-50/80 via-sky-50/80 to-indigo-50/80 backdrop-blur-sm p-10 rounded-xl shadow-xl border-2 border-blue-400">
        <h2 class="text-4xl font-serif font-bold mb-6 text-blue-700">Contacto</h2>
        
        <div class="space-y-6 text-gray-700">
          <p class="text-lg leading-relaxed">
            ¿Tienes un proyecto en mente o quieres saber más sobre mi trabajo? 
            No dudes en contactarme. Estaré encantada de conversar contigo.
          </p>
          
          <div class="space-y-4">
            <h3 class="text-2xl font-semibold text-blue-600 mb-4">Encuéntrame en</h3>
            
            <!-- Email -->
            <div class="flex items-center gap-4 hover:translate-x-2 transition-transform">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <a href="mailto:alivivsol@gmail.com" class="text-lg text-blue-600 font-semibold hover:underline">
                alivivsol@gmail.com
              </a>
            </div>
            
            <!-- Instagram -->
            <div class="flex items-center gap-4 hover:translate-x-2 transition-transform">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <a href="https://instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer" class="text-lg text-blue-600 font-semibold hover:underline">
                @tu_usuario
              </a>
            </div>
            
            <!-- LinkedIn -->
            <div class="flex items-center gap-4 hover:translate-x-2 transition-transform">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" class="text-lg text-blue-600 font-semibold hover:underline">
                Alicia Vivancos
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Columna derecha: Formulario de contacto -->
      <div class="bg-gradient-to-br from-blue-50/80 via-sky-50/80 to-indigo-50/80 backdrop-blur-sm p-10 rounded-xl shadow-xl border-2 border-blue-400">
        <h3 class="text-2xl font-serif font-bold mb-6 text-blue-700">Envíame un mensaje</h3>
        
        <form on:submit={handleSubmit} class="space-y-5">
          <div>
            <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              bind:value={formData.name}
              required
              class="w-full px-4 py-3 rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:outline-none transition-colors bg-white/80"
              placeholder="Tu nombre"
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              bind:value={formData.email}
              required
              class="w-full px-4 py-3 rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:outline-none transition-colors bg-white/80"
              placeholder="tu@email.com"
            />
          </div>
          
          <div>
            <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">Asunto</label>
            <input
              type="text"
              id="subject"
              bind:value={formData.subject}
              required
              class="w-full px-4 py-3 rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:outline-none transition-colors bg-white/80"
              placeholder="Asunto del mensaje"
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
            <textarea
              id="message"
              bind:value={formData.message}
              required
              rows="5"
              class="w-full px-4 py-3 rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:outline-none transition-colors resize-none bg-white/80"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            class="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>
          
          {#if formStatus === 'enviado'}
            <p class="text-green-600 text-center font-semibold">¡Mensaje enviado con éxito!</p>
          {/if}
        </form>
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
