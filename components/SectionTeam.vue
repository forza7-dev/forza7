<script setup lang="ts">
interface Member {
  name: string
  role: string
  bio: string
  initials: string
  color: string
}

const team: Member[] = [
  {
    name: 'Name Surname',
    role: 'Co-Founder',
    bio: 'Placeholder bio — add your own text here.',
    initials: 'NS',
    color: 'bg-coral',
  },
  {
    name: 'Name Surname',
    role: 'Co-Founder',
    bio: 'Placeholder bio — add your own text here.',
    initials: 'NS',
    color: 'bg-teal',
  },
]
</script>

<template>
  <section id="team" class="section-pad bg-white">
    <div class="max-w-7xl mx-auto">

      <!-- About + Mission/Vision -->
      <div class="grid md:grid-cols-2 gap-16 mb-24">
        <!-- About -->
        <div>
          <p class="text-coral text-sm font-semibold uppercase tracking-[0.2em] mb-3">About us</p>
          <h2 class="font-display text-4xl md:text-5xl font-bold text-navy-dark mb-6 leading-tight">
            Small team.<br />Serious craft.
          </h2>
          <p class="text-navy-dark/60 text-lg leading-relaxed">
            Forza7 is an independent digital product studio. We work closely with
            founders and product teams to design and build apps that matter —
            without the overhead of a large agency.
          </p>
          <p class="text-navy-dark/60 text-lg leading-relaxed mt-4">
            Our name comes from the sea. Force 7 on the Beaufort scale — near gale,
            the point where things truly start moving. <em>Forza</em> in Italian means
            both force and the rallying cry to push forward. That's the energy we
            bring to every product we build.
          </p>
        </div>

        <!-- Mission + Vision -->
        <div class="flex flex-col gap-6">
          <div class="rounded-2xl bg-teal/10 border border-teal/20 p-8">
            <p class="text-teal-dark text-xs font-semibold uppercase tracking-[0.2em] mb-3">Mission</p>
            <p class="font-display text-xl font-semibold text-navy-dark leading-snug">
              To help great ideas become great products — through thoughtful design
              and engineering that puts people first.
            </p>
          </div>
          <div class="rounded-2xl bg-coral-muted border border-coral/20 p-8">
            <p class="text-coral text-xs font-semibold uppercase tracking-[0.2em] mb-3">Vision</p>
            <p class="font-display text-xl font-semibold text-navy-dark leading-snug">
              A world where digital products are built with the same care and intention
              as the best physical crafts — built to last, built to matter.
            </p>
          </div>
        </div>
      </div>

      <!-- Team -->
      <div>
        <p class="text-coral text-sm font-semibold uppercase tracking-[0.2em] mb-3">The team</p>
        <h3 class="font-display text-3xl font-bold text-navy-dark mb-10">
          The people behind the work.
        </h3>
        <div class="grid sm:grid-cols-2 gap-8 max-w-2xl">
          <div
            v-for="member in team"
            :key="member.name + member.role"
            class="flex flex-col items-start"
          >
            <div
              class="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl mb-4"
              :class="member.color"
            >
              {{ member.initials }}
            </div>
            <h4 class="font-display text-xl font-semibold text-navy-dark">{{ member.name }}</h4>
            <p class="text-coral text-sm font-medium mb-2">{{ member.role }}</p>
            <p class="text-navy-dark/60 text-sm leading-relaxed">{{ member.bio }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
