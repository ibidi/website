import type { BlogPost, FilterState } from '~/types/changelog';

export const useFilter = () => {
  const route = useRoute();
  const router = useRouter();

  // State
  const activeCategory = ref<string | null>(null);
  const activeTags = ref<string[]>([]);

  /**
   * Initialize filters from URL query params
   */
  const initializeFromUrl = () => {
    const categoryParam = route.query.category as string;
    const tagsParam = route.query.tags as string;

    if (categoryParam) {
      activeCategory.value = categoryParam;
    }

    if (tagsParam) {
      activeTags.value = tagsParam.split(',').filter(Boolean);
    }
  };

  /**
   * Set active category and update URL
   */
  const setCategory = (category: string | null) => {
    activeCategory.value = category;
    updateUrl();
  };

  /**
   * Toggle tag in active tags array
   */
  const toggleTag = (tag: string) => {
    const index = activeTags.value.indexOf(tag);
    
    if (index > -1) {
      activeTags.value.splice(index, 1);
    } else {
      activeTags.value.push(tag);
    }
    
    updateUrl();
  };

  /**
   * Clear all filters
   */
  const clearFilters = () => {
    activeCategory.value = null;
    activeTags.value = [];
    updateUrl();
  };

  /**
   * Check if a tag is active
   */
  const isTagActive = (tag: string): boolean => {
    return activeTags.value.includes(tag);
  };

  /**
   * Update URL with current filter state
   */
  const updateUrl = () => {
    const query: Record<string, string> = {};

    if (activeCategory.value) {
      query.category = activeCategory.value;
    }

    if (activeTags.value.length > 0) {
      query.tags = activeTags.value.join(',');
    }

    router.push({
      query: Object.keys(query).length > 0 ? query : undefined
    });
  };

  /**
   * Filter blog posts based on active filters
   */
  const filterPosts = (posts: BlogPost[]): BlogPost[] => {
    if (!posts) return [];

    let filtered = [...posts];

    // Filter by category
    if (activeCategory.value) {
      filtered = filtered.filter(post => {
        // Check if post has the category
        if (post.category === activeCategory.value) return true;
        
        // Also check tags for category match
        if (post.tags && post.tags.includes(activeCategory.value)) return true;
        
        return false;
      });
    }

    // Filter by tags (OR logic - post must have at least one of the active tags)
    if (activeTags.value.length > 0) {
      filtered = filtered.filter(post => {
        if (!post.tags) return false;
        return activeTags.value.some(tag => post.tags.includes(tag));
      });
    }

    return filtered;
  };

  /**
   * Extract unique categories from posts
   */
  const extractCategories = (posts: BlogPost[]): string[] => {
    const categories = new Set<string>();

    posts.forEach(post => {
      if (post.category) {
        categories.add(post.category);
      }
      
      // Also add tags as potential categories
      if (post.tags) {
        post.tags.forEach(tag => categories.add(tag));
      }
    });

    return Array.from(categories).sort();
  };

  /**
   * Count posts per category
   */
  const countPostsByCategory = (posts: BlogPost[], category: string): number => {
    return posts.filter(post => {
      if (post.category === category) return true;
      if (post.tags && post.tags.includes(category)) return true;
      return false;
    }).length;
  };

  /**
   * Get filter state
   */
  const filterState = computed<FilterState>(() => ({
    activeCategory: activeCategory.value,
    activeTags: activeTags.value
  }));

  /**
   * Check if any filters are active
   */
  const hasActiveFilters = computed(() => {
    return activeCategory.value !== null || activeTags.value.length > 0;
  });

  // Initialize on mount
  onMounted(() => {
    initializeFromUrl();
  });

  return {
    // State
    activeCategory: readonly(activeCategory),
    activeTags: readonly(activeTags),
    filterState,
    hasActiveFilters,

    // Methods
    setCategory,
    toggleTag,
    clearFilters,
    isTagActive,
    filterPosts,
    extractCategories,
    countPostsByCategory,
    initializeFromUrl
  };
};
