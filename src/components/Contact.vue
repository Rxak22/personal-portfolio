<template>
  <section id="contact" class="py-20 max-w-3xl mx-auto px-6" data-aos="fade-left">
    <h2 class="text-4xl font-bold neon-text mb-6 text-center">Contact Me</h2>
    <form action="https://formspree.io/f/xovokrnz" method="POST" class="flex flex-col gap-4">
      <input type="text" name="name" placeholder="Your Name" class="p-3 rounded-lg bg-black/70 text-white border border-cyan-400"/>
      <input type="email" name="email" placeholder="Your Email" class="p-3 rounded-lg bg-black/70 text-white border border-cyan-400"/>
      <textarea name="message" placeholder="Your Message" class="p-3 rounded-lg bg-black/70 text-white border border-cyan-400"></textarea>
      <button type="submit" class="bg-cyan-400 text-black font-bold py-3 rounded-lg hover:bg-cyan-600 transition">Send Message</button>
    </form>
  </section>
</template>

<script>
export default {}
</script>
