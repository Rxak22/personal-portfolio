<template>
  <section id="blog" class="py-20 bg-gray-900/20">
    <h2 class="text-4xl font-bold text-center neon-text mb-12" data-aos="fade-up">Blog</h2>
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      <div class="bg-black/70 p-6 rounded-xl shadow-lg neon-border" data-aos="fade-up" v-for="n in 4" :key="n">
        <h3 class="text-xl font-bold neon-text mb-2">Sample Blog {{n}}</h3>
        <p class="text-white text-sm">This is a sample blog description. You can replace it with your real posts.</p>
        <a href="#" class="text-cyan-400 hover:underline mt-2 inline-block">Read More</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
