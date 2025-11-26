<template>
  <div class="app-root min-h-screen bg-white/3 backdrop-blur-lg">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <section id="projects" class="flex w-[80%] flex-wrap gap-2 mx-auto justify-center">
      <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
    </section>
    <Blog />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
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
    thumbnail: ""
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
    thumbnail: ""
  },
  {
    name: "News Website",
    tech: "PHP + MySQL + Bootstrap",
    repo: "https://github.com/Rxak22/News-Website-Full-Stack",
    demo: "#",
    featured: false,
    thumbnail: ""
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

</script>
