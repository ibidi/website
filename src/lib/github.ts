export type GitHubProject = {
  _id: string;
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  language: string | null;
  html_url: string;
  updated_at: string;
  pushed_at: string;
};

export async function getGitHubProjects(): Promise<GitHubProject[]> {
  try {
    const username = "ibidi";
    const token = process.env.GITHUB_TOKEN;
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "ibidi.dev",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      },
    );

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`GitHub API error ${response.status}: ${body.slice(0, 300)}`);
    }

    const repos = await response.json();

    if (!Array.isArray(repos)) return [];

    return repos
      .filter((repo: any) => !repo.fork && !repo.archived && !repo.disabled)
      .map((repo: any) => ({
        _id: repo.id.toString(),
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        html_url: repo.html_url,
        updated_at: repo.updated_at,
        pushed_at: repo.pushed_at,
      }));
  } catch (error) {
    console.error("GitHub API error:", error);
    return [];
  }
}
