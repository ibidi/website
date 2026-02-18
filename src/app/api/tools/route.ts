import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Tool } from '@/models';

export async function GET() {
  try {
    await connectDB();
    const tools = await Tool.find({}).sort({ createdAt: -1 });
    return NextResponse.json(tools);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tools' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const tool = await Tool.create(body);
    return NextResponse.json(tool, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create tool' }, { status: 500 });
  }
}