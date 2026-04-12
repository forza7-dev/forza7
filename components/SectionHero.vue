<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-dark"
  >
    <!-- Decorative background blobs -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-coral/20 blur-[130px]"
      />
      <div
        class="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] rounded-full bg-teal/10 blur-[100px]"
      />
      <div
        class="absolute bottom-0 left-1/3 w-[400px] h-[300px] rounded-full bg-coral/10 blur-[80px]"
      />
      <!-- Subtle wave lines -->
      <svg
        class="absolute bottom-0 left-0 w-full opacity-15"
        viewBox="0 0 1440 200"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C360,180 1080,20 1440,100 L1440,200 L0,200 Z"
          fill="#72B9CF"
        />
      </svg>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <p class="text-coral text-sm font-semibold uppercase tracking-[0.2em] mb-4">
        Digital Product Studio
      </p>
      <h1 class="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
        We build products
        <span class="text-gradient block">people love to use.</span>
      </h1>
      <p class="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
        Forza7 is an independent digital product studio crafting apps and digital experiences —
        from concept to launch.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#work"
          class="px-8 py-4 rounded-full bg-coral text-white font-semibold hover:bg-coral-light transition-colors"
        >
          See our work
        </a>
        <a
          href="#contact"
          class="px-8 py-4 rounded-full bg-teal text-white font-semibold hover:bg-teal-light transition-colors"
        >
          Start a project
        </a>
      </div>
    </div>

  </section>
</template>
