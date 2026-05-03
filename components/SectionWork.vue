<script setup lang="ts">
interface Project {
  title: string
  category: string
  description: string
  accent: string
  bg: string
}

const projects: Project[] = [
  {
    title: 'SailGenius',
    category: 'Mobile App · AI',
    description:
      'The AI that thinks like a sailor. SailGenius brings intelligent, context-aware sailing assistance to your fingertips: route planning, weather reading, and on-the-water decision support.',
    accent: 'text-teal',
    bg: 'bg-sand-dark',
  },
  {
    title: 'Galley',
    category: 'Mobile App',
    description: 'Your galley, sorted. Manage your pantry stock, plan menus, build shopping lists, and discover recipes built for life aboard. Then share your favourites with the crew.',
    accent: 'text-coral',
    bg: 'bg-sand-dark',
  },
  {
    title: 'ShipShape',
    category: 'Mobile App',
    description: 'Keep your boat in her best shape. Log maintenance, track service history, set reminders, and find trusted marine professionals wherever you\'re moored. Because a well-maintained boat is a safe boat.',
    accent: 'text-navy',
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
          Products we are building.
        </h2>
        <p class="text-navy-dark/50 max-w-lg">
          Three apps, one life afloat: Sail well, eat well and stay safe.
        </p>
      </div>

      <!-- Projects -->
      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="project in projects"
          :key="project.title"
          class="group rounded-2xl overflow-hidden border border-sand-dark hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <!-- Placeholder image area -->
          <div class="h-52 flex items-center justify-center bg-sand-dark">
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
            <p class="text-navy-dark/60 text-sm leading-relaxed">
              {{ project.description }}
            </p>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
