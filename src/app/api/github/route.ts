import { NextResponse } from 'next/server';
import { getGitHubProjects } from '@/lib/github';

export async function GET() {
  try {
    const projects = await getGitHubProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('GitHub API error:', error);
    return NextResponse.json({ error: 'Failed to fetch GitHub repos' }, { status: 500 });
  }
}
