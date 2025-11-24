<template>
  <footer class="bg-black/80 py-8 mt-20 text-center">
    <div class="flex justify-center space-x-6 mb-4">
      <!-- Empty social icons placeholders -->
      <img src="../assets/social_placeholder.svg" alt="Social" class="w-8 h-8" v-for="n in 5" :key="n" />
    </div>
    <p class="text-white text-sm">&copy; {{ new Date().getFullYear() }} Ouk Narak. All rights reserved.</p>
  </footer>
</template>

<script>
export default {}
</script>
