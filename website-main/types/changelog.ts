// Changelog Types
export interface ChangelogEntry {
  version: string;
  date: string;
  title?: string;
  changes: {
    added?: string[];
    changed?: string[];
    fixed?: string[];
    removed?: string[];
  };
}

export interface VersionInfo {
  current: string;
  history: VersionHistory[];
}

export interface VersionHistory {
  version: string;
  date: string;
  changelog: string;
}

// Blog Filter Types
export interface BlogPost {
  _path: string;
  title: string;
  description?: string;
  excerpt?: string;
  date: string;
  tags: string[];
  category?: string;
  readTime?: number;
}

export interface FilterState {
  activeCategory: string | null;
  activeTags: string[];
}

// Bookmark Types
export interface Bookmark {
  id: string;
  title: string;
  description: string;
  url: string;
  dateAdded: string;
  tags: string[];
}

export interface TagInfo {
  name: string;
  count: number;
  color?: string;
}
