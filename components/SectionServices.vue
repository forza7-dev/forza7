<script setup lang="ts">
interface Service {
  icon: string
  title: string
  description: string
  tags: string[]
}

const services: Service[] = [
  {
    icon: '/icons/icon-software-dev.svg',
    title: 'Software Development',
    description:
      'We build mobile, desktop, and web apps with clean, maintainable code. Every product we ship is fast, solid, and built to last.',
    tags: ['Mobile', 'Desktop', 'API', 'Containers'],
  },
  {
    icon: '/icons/icon-ux-design.svg',
    title: 'UI/UX Design',
    description:
      'Design that serves people first. We craft interfaces grounded in research, refined through iteration, and built to feel effortless.',
    tags: ['User Research', 'Prototyping', 'Design Systems'],
  },
  {
    icon: '/icons/icon-marco-ai.svg',
    title: 'Marco',
    description:
      'Our in-house AI, fully integrated into the software we design and develop. Not bolted on as an afterthought, but woven into the product from day one.',
    tags: ['AI', 'In-house', 'Integrated', 'Smart Features'],
  },
]
</script>

<template>
  <section id="services" class="section-pad bg-sand">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-16">
        <p class="text-coral text-sm font-semibold uppercase tracking-[0.2em] mb-3">
          What we do
        </p>
        <h2 class="font-display text-4xl md:text-5xl font-bold text-navy-dark max-w-xl leading-tight">
          We build apps.
        </h2>
        <p class="mt-4 text-navy-dark/60 text-lg max-w-xl leading-relaxed">
          A small studio. We design, develop, and ship our own products from the ground up.
        </p>
      </div>

      <!-- Cards grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="group bg-white rounded-2xl p-8 border border-sand-dark hover:border-coral/30 hover:shadow-xl transition-all duration-300"
        >
          <img :src="service.icon" alt="" class="w-[70px] h-[70px] mb-6" />

          <h3 class="font-display text-2xl font-semibold text-navy-dark mb-3">
            {{ service.title }}
          </h3>
          <p class="text-navy-dark/60 leading-relaxed mb-6">
            {{ service.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in service.tags"
              :key="tag"
              class="px-3 py-1 rounded-full text-xs font-medium bg-sand text-navy border border-sand-dark"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
