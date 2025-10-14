import type { VersionInfo } from '~/types/changelog';

export const useVersion = () => {
  const version = ref<string>('1.0.0');
  const versionInfo = ref<VersionInfo | null>(null);

  /**
   * Load version information from data file
   */
  const loadVersion = async () => {
    try {
      const data = await import('~/data/version.json');
      versionInfo.value = data.default as VersionInfo;
      version.value = data.default.current;
    } catch (error) {
      console.error('Failed to load version:', error);
      version.value = '1.0.0'; // Fallback
    }
  };

  /**
   * Increment version number based on semantic versioning
   * @param type - Type of version increment (major, minor, patch)
   * @returns New version string
   */
  const incrementVersion = (type: 'major' | 'minor' | 'patch'): string => {
    const parts = version.value.split('.').map(Number);
    
    if (parts.length !== 3 || parts.some(isNaN)) {
      console.error('Invalid version format:', version.value);
      return version.value;
    }

    let [major, minor, patch] = parts;

    switch (type) {
      case 'major':
        major += 1;
        minor = 0;
        patch = 0;
        break;
      case 'minor':
        minor += 1;
        patch = 0;
        break;
      case 'patch':
        patch += 1;
        break;
    }

    const newVersion = `${major}.${minor}.${patch}`;
    version.value = newVersion;
    return newVersion;
  };

  /**
   * Validate version format (X.Y.Z)
   * @param versionString - Version string to validate
   * @returns True if valid, false otherwise
   */
  const validateVersion = (versionString: string): boolean => {
    const versionRegex = /^\d+\.\d+\.\d+$/;
    return versionRegex.test(versionString);
  };

  /**
   * Compare two version strings
   * @param v1 - First version
   * @param v2 - Second version
   * @returns -1 if v1 < v2, 0 if equal, 1 if v1 > v2
   */
  const compareVersions = (v1: string, v2: string): number => {
    const parts1 = v1.split('.').map(Number);
    const parts2 = v2.split('.').map(Number);

    for (let i = 0; i < 3; i++) {
      if (parts1[i] > parts2[i]) return 1;
      if (parts1[i] < parts2[i]) return -1;
    }

    return 0;
  };

  /**
   * Get version history sorted by version (descending)
   */
  const getVersionHistory = computed(() => {
    if (!versionInfo.value) return [];
    
    return [...versionInfo.value.history].sort((a, b) => 
      compareVersions(b.version, a.version)
    );
  });

  return {
    version: readonly(version),
    versionInfo: readonly(versionInfo),
    loadVersion,
    incrementVersion,
    validateVersion,
    compareVersions,
    getVersionHistory
  };
};
