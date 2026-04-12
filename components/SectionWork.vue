<script setup lang="ts">
interface Project {
  title: string
  category: string
  description: string
  tags: string[]
  accent: string
  bg: string
}

const projects: Project[] = [
  {
    title: 'SailGenius',
    category: 'Mobile App · AI',
    description:
      'The AI that thinks like a sailor. SailGenius brings intelligent, context-aware sailing assistance to your fingertips — route planning, weather reading, and on-the-water decision support.',
    tags: ['iOS', 'Android', 'AI', 'Marco'],
    accent: 'text-teal',
    bg: 'bg-sand-dark',
  },
  {
    title: 'Galley',
    category: 'Mobile App',
    description:
      'Coming soon.',
    tags: ['iOS', 'Android'],
    accent: 'text-coral',
    bg: 'bg-sand-dark',
  },
]
</script>

<template>
  <section id="work" class="section-pad bg-sand">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-16">
        <p class="text-coral text-sm font-semibold uppercase tracking-[0.2em] mb-3">Portfolio</p>
        <h2 class="font-display text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-4">
          Selected work.
        </h2>
        <p class="text-navy-dark/50 max-w-sm">
          A handful of projects we're proud of. Each one a collaboration, each one a story.
        </p>
      </div>

      <!-- Projects -->
      <div class="grid md:grid-cols-2 gap-8 items-start">
        <article
          v-for="project in projects"
          :key="project.title"
          class="group rounded-2xl overflow-hidden border border-sand-dark hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <!-- Placeholder image area -->
          <div
            class="h-52 flex items-center justify-center"
            :class="project.bg"
          >
            <span class="font-display text-5xl font-bold opacity-10 text-white select-none">
              F7
            </span>
          </div>

          <div class="bg-white p-6">
            <p class="text-xs font-semibold uppercase tracking-widest mb-2" :class="project.accent">
              {{ project.category }}
            </p>
            <h3 class="font-display text-xl font-bold text-navy-dark mb-2">
              {{ project.title }}
            </h3>
            <p class="text-navy-dark/60 text-sm leading-relaxed mb-4">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 rounded-full text-xs font-medium bg-sand text-navy border border-sand-dark"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
