<template>
  <nav class="fixed w-full top-0 left-0 z-50">
    <div
      class="max-w-6xl mx-auto flex items-center justify-between py-4 px-6 
             bg-black/50 backdrop-blur-md text-white rounded-md"
    >

      <!-- Logo -->
      <div class="text-2xl font-bold neon-text">Portfolio</div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-10">
        <ul class="hidden md:flex items-center gap-10">
  <li><a href="#about" class="nav-item group">About</a></li>
  <li><a href="#projects" class="nav-item group">Projects</a></li>
  <li><a href="#blog" class="nav-item group">Blog</a></li>
  <li><a href="#contact" class="nav-item group">Contact</a></li>
</ul>

      </ul>

      <!-- Right side buttons -->
      <div class="hidden md:flex items-center gap-4">
        <a
          href="/cv/ouk-narak-cv.pdf"
          download
          class="px-4 py-2 bg-gradient-to-r from-cyan-400 to-indigo-500
                 text-black font-semibold rounded-lg 
                 hover:from-cyan-500 hover:to-indigo-600 transition"
        >
          Download CV
        </a>
      </div>

      <!-- Mobile buttons -->
      <div class="md:hidden flex items-center gap-4">
        <button
          @click="drawerOpen = !drawerOpen"
          class="p-2 border border-white rounded"
        >
          ☰
        </button>

        <a
          href="/cv/ouk-narak-cv.pdf"
          download
          class="p-2 border border-cyan-400 rounded text-cyan-400 
                 hover:bg-cyan-400/10"
        >
          📄
        </a>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <transition name="slide">
      <div
        v-if="drawerOpen"
        class="md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 
               flex flex-col items-center justify-center space-y-8 
               text-2xl neon-text"
      >
        <a @click="drawerOpen=false" href="#about">About</a>
        <a @click="drawerOpen=false" href="#projects">Projects</a>
        <a @click="drawerOpen=false" href="#blog">Blog</a>
        <a @click="drawerOpen=false" href="#contact">Contact</a>
        <a
          @click="drawerOpen=false"
          href="/cv/ouk-narak-cv.pdf"
          download
          class="text-lg px-4 py-2 border border-cyan-400 rounded text-cyan-400"
        >
          Download CV
        </a>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawerOpen: false,
    };
  },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
