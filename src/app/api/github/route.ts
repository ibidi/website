import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const username = 'ibidi';
    // GitHub API'den kullanıcı reposlarını çek
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=100`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 } // 1 saat cache
    });

    if (!response.ok) {
      throw new Error('GitHub API error');
    }

    const repos = await response.json();

    // Fork olmayan, arşivlenmemiş ve devredışı bırakılmamış repoları filtrele
    const filteredRepos = Array.isArray(repos)
      ? repos.filter((repo: any) => !repo.fork && !repo.archived && !repo.disabled)
      : [];

    // Repo bilgilerini düzenle
    const projects = filteredRepos.map((repo: any) => ({
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

    return NextResponse.json(projects);
  } catch (error) {
    console.error('GitHub API error:', error);
    return NextResponse.json({ error: 'Failed to fetch GitHub repos' }, { status: 500 });
  }
}