// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import './styles.css';  // Tailwind CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.mount('#app');

// Initialize scroll animations
AOS.init({ once: true, duration: 1000 });
