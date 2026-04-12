<script setup lang="ts">
interface Service {
  // Replace the icon slot below with your chosen SVG icon component
  iconColor: string
  iconBg: string
  title: string
  description: string
  tags: string[]
}

const services: Service[] = [
  {
    iconColor: 'text-coral',
    iconBg: 'bg-coral-muted',
    title: 'Software Development',
    description:
      'We build native and cross-platform apps with smooth, performant experiences. From MVP to full-scale product — we ship clean, maintainable code that scales.',
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
  },
  {
    iconColor: 'text-teal',
    iconBg: 'bg-teal/10',
    title: 'UI/UX Design',
    description:
      'Design that serves people first. We craft interfaces grounded in research, refined through iteration, and built to convert and delight.',
    tags: ['User Research', 'Prototyping', 'Design Systems', 'Figma'],
  },
  {
    iconColor: 'text-navy',
    iconBg: 'bg-sand-dark',
    title: 'Marco',
    description:
      'Our in-house AI, fully integrated into the software we design and develop — not bolted on as an afterthought, but woven into the product from day one.',
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
          Services built around your product.
        </h2>
      </div>

      <!-- Cards grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="group bg-white rounded-2xl p-8 border border-sand-dark hover:border-coral/30 hover:shadow-xl transition-all duration-300"
        >
          <!-- Icon slot — replace the SVG below with your chosen icon -->
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
            :class="[service.iconBg, service.iconColor]"
          >
            <!-- TODO: replace with real icon -->
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="3" />
            </svg>
          </div>

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
