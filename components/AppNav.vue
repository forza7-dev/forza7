<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-navy-dark/95 backdrop-blur shadow-lg' : 'bg-transparent'"
  >
    <nav class="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#">
        <img src="/logo/forza7-marcellus-light.svg" alt="Forza7" class="h-7 w-auto" />
      </a>

      <!-- Desktop links -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-medium text-white/80 hover:text-teal transition-colors duration-200"
          >
            {{ link.label }}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            class="px-5 py-2 rounded-full bg-coral text-white text-sm font-semibold hover:bg-coral-light transition-colors duration-200"
          >
            Let's talk
          </a>
        </li>
      </ul>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden text-white p-2"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <Transition name="slide">
      <div v-if="menuOpen" class="md:hidden bg-navy-dark border-t border-white/10 px-6 py-4">
        <ul class="flex flex-col gap-4">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="block text-white/80 hover:text-teal font-medium py-1 transition-colors"
              @click="menuOpen = false"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
