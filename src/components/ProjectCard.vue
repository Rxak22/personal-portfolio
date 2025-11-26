<template>
  <div class="relative group bg-black/60 backdrop-blur-xl p-5 rounded-2xl shadow-lg w-80 border border-white/10 
        transition-all duration-300 
        hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]" data-aos="fade-up">

        <!-- Thumbnail -->
    <div class="w-full h-40 rounded-xl overflow-hidden mb-4">
      <img
        :src="project.thumbnail"
        alt="project thumbnail"
        class="w-full h-full object-cover group-hover:scale-105 transition"
      />
    </div>
    
    <h3 class="text-xl font-bold neon-text mb-1">{{ project.name }}</h3>
    <p class="text-sm text-gray-300 mb-4">{{ project.tech }}</p>
    <div class="flex justify-between">
      <a :href="project.repo" target="_blank" class="text-cyan-400 hover:underline">Repo</a>
      <a :href="project.demo" target="_blank" class="text-cyan-400 hover:underline">Demo</a>
    </div>

    <!-- Animated Border -->
    <div class="absolute inset-0 rounded-2xl border border-cyan-400/0 
           group-hover:border-cyan-400/40 transition-all duration-300 pointer-events-none">
    </div>
  </div>
</template>

<script setup>
  defineProps({
    project: {
      tyoe: Object,
      require: true
    }
  })
</script>

<style scoped>
.neon-border {
  /* Replace neon glow with subtle glass border */
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: none;
  background-color: rgba(255,255,255,0.03);
}
.neon-text {
  text-shadow: 0 0 3px cyan, 0 0 6px cyan;
}
</style>
