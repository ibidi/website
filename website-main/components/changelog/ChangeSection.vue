<template>
  <div class="change-section">
    <div class="flex items-center gap-2 mb-3">
      <div 
        class="w-8 h-8 rounded-md flex items-center justify-center"
        :class="iconBgClass"
      >
        <Icon :name="icon" class="w-4 h-4" :class="iconColorClass" />
      </div>
      <h3 class="text-lg font-medium text-zinc-900 dark:text-zinc-200">
        {{ title }}
      </h3>
      <span 
        class="px-2 py-0.5 text-xs rounded-full"
        :class="badgeClass"
      >
        {{ items.length }}
      </span>
    </div>

    <ul class="space-y-2">
      <li 
        v-for="(item, index) in items" 
        :key="index"
        class="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
      >
        <span 
          class="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
          :class="dotClass"
        ></span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  items: string[];
  icon: string;
  color: 'green' | 'blue' | 'violet' | 'red';
}

const props = defineProps<Props>();

const colorClasses = {
  green: {
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
    badge: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    dot: 'bg-green-500'
  },
  blue: {
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    dot: 'bg-blue-500'
  },
  violet: {
    iconBg: 'bg-violet-100 dark:bg-violet-900/30',
    iconColor: 'text-violet-600 dark:text-violet-400',
    badge: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300',
    dot: 'bg-violet-500'
  },
  red: {
    iconBg: 'bg-red-100 dark:bg-red-900/30',
    iconColor: 'text-red-600 dark:text-red-400',
    badge: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
    dot: 'bg-red-500'
  }
};

const iconBgClass = computed(() => colorClasses[props.color].iconBg);
const iconColorClass = computed(() => colorClasses[props.color].iconColor);
const badgeClass = computed(() => colorClasses[props.color].badge);
const dotClass = computed(() => colorClasses[props.color].dot);
</script>
