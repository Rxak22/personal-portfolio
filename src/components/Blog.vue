<template>
  <section id="blog" class="py-28">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Title -->
      <h2 class="text-4xl font-bold text-center mb-16 tracking-wide 
               bg-gradient-to-r from-cyan-400 to-blue-500 
               text-transparent bg-clip-text" data-aos="fade-up">
        Blog
      </h2>

      <!-- Blog Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="post in posts" :key="post.title" class="group glass-card rounded-2xl p-7 border border-white/10 
                 shadow-lg hover:shadow-cyan-500/20 
                 transition-all duration-300 hover:-translate-y-1" data-aos="fade-up">
          <h3 class="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition">
            {{ post.title }}
          </h3>

          <p class="text-gray-300 text-[15px] leading-relaxed mb-3">
            {{ post.description }}
          </p>

          <a :href="post.link" class="inline-flex items-center gap-1 mt-3 text-cyan-400 font-medium
                   group-hover:underline">
            Read More
            <span class="transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const posts = [
  {
    title: "🐳 Docker Basics",
    description: "My first experience using Docker as a developer and how it simplified my workflow.",
    link: "/blog/docker-basics"
  },
  {
    title: "⚡ Vue 3 Composition API",
    description: "A simple explanation of how Composition API changed the way I structure my apps.",
    link: "/blog/vue-composition-api"
  },
  {
    title: "🧩 REST API Design",
    description: "Things I learned while building REST APIs with ASP.NET Core.",
    link: "/blog/rest-api-design"
  },
  {
    title: "🎨 Tailwind CSS Workflow",
    description: "Why Tailwind makes building UI 3x faster and cleaner.",
    link: "/blog/tailwind-css-workflow"
  },
  {
    title: "🗄️ SQL Database Tips",
    description: "Basic indexing and relations I use in real projects.",
    link: "/blog/sql-database-tips"
  },
  {
    title: "💼 My Developer Journey",
    description: "How I started coding and what I learned along the way.",
    link: "/blog/developer-journey"
  }
];
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
}
</style>
