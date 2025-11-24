<template>
  <div class="bg-black/70 p-6 rounded-xl shadow-lg transform transition-all hover:-translate-y-4 hover:scale-105 neon-border w-72" data-aos="fade-up">
    <h3 class="text-xl font-bold neon-text mb-2">{{ project.name }}</h3>
    <p class="text-sm text-white mb-4">{{ project.tech }}</p>
    <div class="flex justify-between">
      <a :href="project.repo" target="_blank" class="text-cyan-400 hover:underline">Repo</a>
      <a :href="project.demo" target="_blank" class="text-cyan-400 hover:underline">Demo</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"]
}
</script>

<style scoped>
.neon-border {
  /* Replace neon glow with subtle glass border */
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: none;
  background-color: rgba(255,255,255,0.03);
}
</style>
