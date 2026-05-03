<template>
  <section
    id="contact"
    class="pt-24 pb-48 px-6 md:px-12 lg:px-24 bg-navy-dark relative overflow-hidden"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-teal/10 blur-[80px]" />
      <div class="absolute top-0 left-0 w-64 h-64 rounded-full bg-coral/10 blur-[60px]" />
    </div>

    <!-- Teal wave decoration — exact hero path, boosted opacity -->
    <svg
      class="absolute bottom-0 left-0 w-full opacity-15"
      viewBox="0 0 1440 200"
      fill="none"
      preserveAspectRatio="none"
    >
      <path d="M0,100 C360,180 1080,20 1440,100 L1440,200 L0,200 Z" fill="#2EC4B6" />
    </svg>

    <div class="relative z-10 max-w-3xl mx-auto text-center">
      <p class="text-coral text-sm font-semibold uppercase tracking-[0.2em] mb-4">Contact</p>
      <h2 class="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        Want to know more?<br />
        <span class="text-coral">Say hello.</span>
      </h2>
      <p class="text-white/50 text-lg mb-10">
        We're always happy to hear from curious minds. Drop us a line anytime.
      </p>
      <a
        href="mailto:hello@forza7.dev"
        class="inline-block px-10 py-4 rounded-full text-white font-semibold text-lg transition-colors"
        style="background-color: #72b9cf;"
      >
        hello@forza7.dev
      </a>
    </div>
  </section>
</template>
