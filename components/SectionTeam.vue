<script setup lang="ts">
interface Member {
  name: string
  role: string
  bio: string
  initials: string
  color: string
  photo?: string
}

const team: Member[] = [
  {
    name: 'Noe Giacari',
    role: 'UX/UI Designer',
    bio: '',
    initials: 'NG',
    color: 'bg-coral',
    photo: '/Prof2.jpg',
  },
  {
    name: 'David Coldeira',
    role: 'Software Engineer',
    bio: '',
    initials: 'DC',
    color: 'bg-teal',
    photo: '/Dprof1.jpeg',
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
            Forza7 is an independent studio. We conceive, design, and build our
            own digital products, driven by curiosity, high standards for craft,
            and a deep care for the people who use them.
          </p>
          <p class="text-navy-dark/60 text-lg leading-relaxed mt-4">
            Our name comes from the sea. Force 7 on the Beaufort scale, near gale,
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
              To help great ideas become great products, through thoughtful design
              and engineering that puts people first.
            </p>
          </div>
          <div class="rounded-2xl bg-coral-muted border border-coral/20 p-8">
            <p class="text-coral text-xs font-semibold uppercase tracking-[0.2em] mb-3">Vision</p>
            <p class="font-display text-xl font-semibold text-navy-dark leading-snug">
              A world where digital products are built with the same care and intention
              as the best physical crafts: built to last, built to matter.
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
            <div class="w-24 h-24 rounded-2xl overflow-hidden mb-4" :class="!member.photo ? member.color : ''">
              <img
                v-if="member.photo"
                :src="member.photo"
                :alt="member.name"
                class="w-full h-full object-cover object-top"
              />
              <span v-else class="w-full h-full flex items-center justify-center text-white font-display font-bold text-xl">
                {{ member.initials }}
              </span>
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
