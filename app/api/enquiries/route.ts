import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Enquiry from '@/lib/models/Enquiry';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();

    const enquiry = await Enquiry.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      tour: body.tour,
      message: body.message,
    });

    return NextResponse.json({ success: true, enquiry }, { status: 201 });
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, enquiries });
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}