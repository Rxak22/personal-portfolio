<template>
  <div class="app-root min-h-screen bg-white/3 backdrop-blur-lg">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    
    <h2 class="text-4xl font-bold text-center neon-text mb-12 flex items-center justify-center gap-3">
      <svg class="w-9 h-9 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 7a2 2 0 012-2h3l2 2h7a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 3v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Project
    </h2>
    <section id="projects" class="flex w-[90%] flex-wrap gap-2 mx-auto justify-center">
      <ProjectCard v-for="project in visibleProjects" :key="project.name" :project="project" />

        <!-- load more Btn -->
        <div v-if="hasMore" class="w-full flex justify-center mt-8">
          <button
            @click="loadMore"
            class="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 
                  text-black font-semibold shadow-lg hover:shadow-cyan-400/40 
                  transition-all duration-300 hover:-translate-y-1"
          >
            Load More →
          </button>
        </div>
    </section>

    <Blog />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed  } from 'vue'
import Navbar from './components/Navba2r.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import ProjectCard from './components/ProjectCard.vue'
import Blog from './components/Blog.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const projects = ref([
  {
    name: "School Management System",
    tech: "Laravel 9 + Bootstrap + MySQL",
    repo: "https://github.com/Rxak22/school-mgt-system",
    demo: "#",
    featured: true,
    thumbnail: "https://res.cloudinary.com/dvsqwcz7u/image/upload/v1764168752/c9901c97-d241-4767-be5e-bd56beefad54.png"
  },
  {
    name: "Shop | Api Project",
    tech: "Vue 3 + TypeScript + Tailwind CSS + Fake Api",
    repo: "https://github.com/Rxak22/shop-project",
    demo: "#",
    featured: false,
    thumbnail: "https://res.cloudinary.com/dvsqwcz7u/image/upload/v1764169434/ceed58a8-d050-4757-b4f0-1bd90c33fc68.png"
  },
  {
    name: "Todo App",
    tech: "Vue 3 + TypeScript + Tailwind CSS",
    repo: "https://github.com/Rxak22/todo-app",
    demo: "#",
    featured: false,
    thumbnail: "https://res.cloudinary.com/dvsqwcz7u/image/upload/v1764241374/55313467-8ca8-4559-bbf7-74a012660b65.png"
  },
  {
    name: "Todo Api",
    tech: "ASP.NET Core + SQL Server",
    repo: "https://github.com/Rxak22/todoApi",
    demo: "#",
    featured: false,
    thumbnail: "https://res.cloudinary.com/dvsqwcz7u/image/upload/v1764169839/797189df-18df-4cdc-ba01-ef463b2f018f.png"
  },
  {
    name: "Attendence Management System",
    tech: "Laravel + Bootstrap + MySQL",
    repo: "https://github.com/Rxak22/attendence_mgt_sys",
    demo: "#",
    featured: false,
    thumbnail: "https://res.cloudinary.com/dvsqwcz7u/image/upload/v1764244038/photo_1_2025-11-27_18-47-03_m5qd9p.jpg"
  },
  {
    name: "News Website",
    tech: "PHP + MySQL + Bootstrap",
    repo: "https://github.com/Rxak22/News-Website-Full-Stack",
    demo: "#",
    featured: false,
    thumbnail: "https://res.cloudinary.com/dvsqwcz7u/image/upload/v1764242521/0b5e2587-780c-4754-9d58-018391b770b2.png"
  },
  {
    name: "Book Store",
    tech: "React Js + Tailwind CSS",
    repo: "https://github.com/Rxak22/Book-Store",
    demo: "#",
    featured: false,
    thumbnail: "https://res.cloudinary.com/dvsqwcz7u/image/upload/v1764170743/af3afa70-154e-4d5b-829c-47451fc2c519.png"
  },
  {
    name: "SMTP Email Sender",
    tech: "Laravel 9 + Bootstrap",
    repo: "https://github.com/Rxak22/laravel-smtp",
    demo: "#",
    featured: false,
    thumbnail: "https://res.cloudinary.com/dvsqwcz7u/image/upload/v1764171100/c4d10eb4-3a7d-4581-bad7-03150b350d23.png"
  },
  {
    name: "Sanctum API",
    tech: "Laravel 9 + Bootstrap",
    repo: "https://github.com/Rxak22/laravel-sanctum-api",
    demo: "#",
    featured: false,
    thumbnail: "https://res.cloudinary.com/dvsqwcz7u/image/upload/v1764171551/9c638eb9-1a83-413a-86bd-7e28f58660f3.png"
  },
])

// Pagination state
const itemsPerPage = 6;
const visibleCount = ref(itemsPerPage);

const visibleProjects  = computed(() => {
  return projects.value.slice(0, visibleCount.value);
})

const loadMore = () => {
  visibleCount.value += itemsPerPage;
}

// Check if all projects are shown
const hasMore = computed(() => visibleCount.value < projects.value.length);
</script>
