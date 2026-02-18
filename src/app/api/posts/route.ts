import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Post } from '@/models';

export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find({ published: true }).sort({ createdAt: -1 }).limit(6);
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const post = await Post.create(body);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}