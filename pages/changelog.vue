<template>
  <div class="pt-32 pb-16 bg-white dark:bg-zinc-900">
    <div class="container mx-auto max-w-4xl px-4">
      <div class="space-y-12">
        <!-- Header -->
        <AnimatedContent
          :distance="50"
          direction="vertical"
          :duration="0.8"
          :delay="0.1"
          ease="power2.out"
        >
          <div class="space-y-6">
            <div class="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 class="text-4xl font-bold text-zinc-900 dark:text-zinc-200 mb-2">
                  Changelog
                </h1>
                <p class="text-lg text-zinc-600 dark:text-zinc-400">
                  Track all updates and improvements to this website
                </p>
              </div>
              <VersionBadge :version="latestVersion" variant="success" />
            </div>

            <!-- Stats -->
            <div class="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <div class="flex items-center gap-2">
                <Icon name="carbon:tag" class="w-4 h-4" />
                <span>{{ entries.length }} {{ entries.length === 1 ? 'version' : 'versions' }}</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="carbon:calendar" class="w-4 h-4" />
                <span>Last updated: {{ formatDate(latestDate) }}</span>
              </div>
            </div>
          </div>
        </AnimatedContent>

        <!-- Changelog Entries -->
        <div v-if="entries.length > 0" class="space-y-8">
          <ChangelogEntry
            v-for="(entry, index) in entries"
            :key="entry.version"
            :entry="entry"
            :delay="0.2 + (index * 0.1)"
          />
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-12">
          <Icon name="carbon:document" class="w-16 h-16 text-zinc-400 mx-auto mb-4" />
          <p class="text-lg text-zinc-600 dark:text-zinc-400">
            No changelog entries found
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChangelogEntry } from '~/types/changelog';

// Fetch changelog entries
const { data: changelogData } = await useAsyncData('changelog-entries', () =>
  queryContent('/changelog')
    .sort({ version: -1 })
    .find()
);

// Transform data to ChangelogEntry format
const entries = computed<ChangelogEntry[]>(() => {
  if (!changelogData.value) return [];
  
  return changelogData.value.map((item: any) => ({
    version: item.version,
    date: item.date,
    title: item.title,
    changes: {
      added: item.body?.children
        ?.find((child: any) => child.tag === 'h2' && child.children?.[0]?.value === 'Added')
        ?.children?.filter((child: any) => child.tag === 'ul')
        ?.[0]?.children?.map((li: any) => li.children?.[0]?.children?.[0]?.value || li.children?.[0]?.value)
        || extractSection(item.body, 'Added'),
      changed: extractSection(item.body, 'Changed'),
      fixed: extractSection(item.body, 'Fixed'),
      removed: extractSection(item.body, 'Removed')
    }
  }));
});

// Helper function to extract sections from markdown body
const extractSection = (body: any, sectionName: string): string[] => {
  if (!body?.children) return [];
  
  const items: string[] = [];
  let inSection = false;
  
  for (const child of body.children) {
    if (child.tag === 'h2') {
      const heading = child.children?.[0]?.value || '';
      inSection = heading === sectionName;
      continue;
    }
    
    if (inSection && child.tag === 'ul') {
      for (const li of child.children || []) {
        if (li.tag === 'li') {
          const text = extractText(li);
          if (text) items.push(text);
        }
      }
      break;
    }
  }
  
  return items;
};

// Helper to extract text from nested structure
const extractText = (node: any): string => {
  if (typeof node === 'string') return node;
  if (node.value) return node.value;
  if (node.children) {
    return node.children.map(extractText).join('');
  }
  return '';
};

const latestVersion = computed(() => {
  return entries.value[0]?.version || '1.0.0';
});

const latestDate = computed(() => {
  return entries.value[0]?.date || new Date().toISOString();
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

// SEO
useSeo({
  title: 'Changelog - İhsan Baki Doğan',
  description: 'Track all updates, improvements, and changes made to this website. View version history and release notes.',
});
</script>
