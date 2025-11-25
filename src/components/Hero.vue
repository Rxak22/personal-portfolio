<template>
  <section class="relative h-screen w-full overflow-hidden">
    <HeroThree />

    <!-- Overlay (text on left) -->
    <div class="relative z-10 container mx-auto px-6 h-full flex items-center">
      <div class="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div class="w-full md:w-1/2 text-left">
          <div class="bg-white/6 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-lg inline-block">
            <div class="greeting text-lg md:text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-indigo-400 to-purple-400">Welcome</div>
              <h1 class="text-3xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-indigo-300 to-purple-400">Hi, I'm {{ typed }}<span class="cursor">&nbsp;</span></h1>
            <p class="text-white/80 max-w-lg">I build full-stack web applications — robust backends, sleek frontends, seamless experiences.</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 flex justify-center md:justify-end">
          <!-- 3D hero rendered by HeroThree sits visually here -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import HeroThree from './HeroThree.vue'

const lines = ["Ouk Narak", 'A Web Developer', 'A Full Stack Developer']
const typed = ref('')
let lineIndex = 0
let charIndex = 0
let typingTimer = null

function startTyping() {
  const type = () => {
    const current = lines[lineIndex]
    if (charIndex <= current.length) {
      typed.value = current.slice(0, charIndex)
      charIndex++
      typingTimer = setTimeout(type, 70)
    } else {
      typingTimer = setTimeout(() => {
        charIndex = 0
        lineIndex = (lineIndex + 1) % lines.length
        typingTimer = setTimeout(type, 300)
      }, 1200)
    }
  }
  type()
}

onMounted(() => startTyping())
onBeforeUnmount(() => { if (typingTimer) clearTimeout(typingTimer) })
</script>

<style scoped>
.cursor { display:inline-block; width:10px; background:linear-gradient(90deg,#9be7ff,#a78bfa); margin-left:6px; animation: blink 1s steps(2,start) infinite; border-radius:2px }
@keyframes blink { to { opacity: 0 } }

.greeting { color: inherit }

.three-container { z-index: 0 }
</style>
