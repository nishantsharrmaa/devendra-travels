import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Enquiry from '@/lib/models/Enquiry';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();

    const enquiry = await Enquiry.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      tour: body.tour,
      pickupLocation: body.pickupLocation,
      passengers: body.passengers,
      message: body.message,
    });

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: process.env.ADMIN_EMAIL,
        subject: `New Enquiry from ${body.name}`,
        text: `You have received a new enquiry from Devendra Travels website.

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}
Pickup Location: ${body.pickupLocation || 'N/A'}
Passengers: ${body.passengers || 'N/A'}
Interested Tour: ${body.tour || 'N/A'}
Message: ${body.message}
`,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Error sending email:', emailError);
    }

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