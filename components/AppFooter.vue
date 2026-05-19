<template>
  <footer class="bg-navy-dark border-t border-white/10 py-8 px-6 md:px-12">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#">
        <img src="/logo/forza7-marcellus-light.svg" alt="Forza7" class="h-6 w-auto" />
      </a>
      <p class="text-white/30 text-sm">
        &copy; {{ new Date().getFullYear() }} Forza7. All rights reserved.
      </p>
      <div class="flex items-center gap-6">
        <a
          href="https://github.com/Forza7"
          target="_blank"
          rel="noopener"
          class="text-white/40 hover:text-teal transition-colors text-sm"
        >
          GitHub
        </a>
        <a href="#contact" class="text-white/40 hover:text-teal transition-colors text-sm">
          Contact
        </a>
      </div>
    </div>
  </footer>
</template>
