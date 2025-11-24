<template>
  <div class="app-root min-h-screen bg-white/3 backdrop-blur-lg">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <section id="projects">
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
  { name: 'Phone Shop', tech: 'Vue + ASP.NET', repo: '#', demo: '#' },
  { name: 'Todo App', tech: 'Vue 3 + Tailwind', repo: '#', demo: '#' }
])
</script>
