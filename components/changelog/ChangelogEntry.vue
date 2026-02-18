<template>
  <article class="changelog-entry">
    <AnimatedContent
      :distance="30"
      direction="vertical"
      :duration="0.6"
      :delay="delay"
      ease="power2.out"
    >
      <div class="p-6 bg-zinc-50 dark:bg-zinc-800/30 rounded-lg border border-zinc-200 dark:border-zinc-700/50">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div class="flex items-center gap-3">
            <VersionBadge :version="entry.version" variant="success" />
            <h2 class="text-2xl font-medium text-zinc-900 dark:text-zinc-200">
              {{ entry.title || `Version ${entry.version}` }}
            </h2>
          </div>
          <time class="text-sm text-zinc-500 dark:text-zinc-400">
            {{ formatDate(entry.date) }}
          </time>
        </div>

        <!-- Changes Grid -->
        <div class="grid gap-6 md:grid-cols-2">
          <!-- Added -->
          <ChangeSection
            v-if="entry.changes.added && entry.changes.added.length > 0"
            title="Added"
            :items="entry.changes.added"
            icon="carbon:add"
            color="green"
          />

          <!-- Changed -->
          <ChangeSection
            v-if="entry.changes.changed && entry.changes.changed.length > 0"
            title="Changed"
            :items="entry.changes.changed"
            icon="carbon:edit"
            color="blue"
          />

          <!-- Fixed -->
          <ChangeSection
            v-if="entry.changes.fixed && entry.changes.fixed.length > 0"
            title="Fixed"
            :items="entry.changes.fixed"
            icon="carbon:checkmark"
            color="violet"
          />

          <!-- Removed -->
          <ChangeSection
            v-if="entry.changes.removed && entry.changes.removed.length > 0"
            title="Removed"
            :items="entry.changes.removed"
            icon="carbon:subtract"
            color="red"
          />
        </div>
      </div>
    </AnimatedContent>
  </article>
</template>

<script setup lang="ts">
import type { ChangelogEntry } from '~/types/changelog';

interface Props {
  entry: ChangelogEntry;
  delay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0
});

const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return dateString;
  }
};
</script>

<style scoped>
.changelog-entry {
  scroll-margin-top: 100px; /* For anchor links */
}
</style>
