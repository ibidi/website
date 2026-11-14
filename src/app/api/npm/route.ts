import { NextResponse } from 'next/server';
import { getNpmPackages } from '@/lib/npm';

export async function GET() {
  try {
    const packages = await getNpmPackages();
    return NextResponse.json(packages);
  } catch (error) {
    console.error('NPM API error:', error);
    return NextResponse.json({ error: 'Failed to fetch NPM packages' }, { status: 500 });
  }
}
