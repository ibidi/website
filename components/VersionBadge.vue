<template>
  <div class="version-badge">
    <span 
      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
      :class="badgeClasses"
    >
      <Icon :name="icon" class="w-4 h-4" />
      <span>{{ displayText }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  version?: string;
  showLabel?: boolean;
  variant?: 'default' | 'success' | 'info' | 'warning';
  icon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  showLabel: true,
  variant: 'default',
  icon: 'carbon:tag'
});

const { version: currentVersion, loadVersion } = useVersion();

// Load version on mount
onMounted(() => {
  loadVersion();
});

const displayVersion = computed(() => {
  return props.version || currentVersion.value;
});

const displayText = computed(() => {
  return props.showLabel ? `v${displayVersion.value}` : displayVersion.value;
});

const badgeClasses = computed(() => {
  const variants = {
    default: 'bg-zinc-100 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50 hover:bg-zinc-200 dark:hover:bg-zinc-800',
    success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700/50 hover:bg-green-200 dark:hover:bg-green-900/50',
    info: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50 hover:bg-blue-200 dark:hover:bg-blue-900/50',
    warning: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700/50 hover:bg-yellow-200 dark:hover:bg-yellow-900/50'
  };

  return variants[props.variant];
});
</script>

<style scoped>
.version-badge {
  display: inline-block;
}
</style>
