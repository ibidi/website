import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Service } from '@/models';

export async function GET() {
  try {
    await connectDB();
    const services = await Service.find({}).sort({ price: 1 });
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const service = await Service.create(body);
    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}