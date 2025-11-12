import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, departure, destination, date } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send email notification
    // 2. Save to database
    // 3. Send to CRM
    
    // Example: Send email using a service like SendGrid, Resend, etc.
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New Booking Request from ${name}`,
    //   html: `
    //     <h2>New Booking Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Departure:</strong> ${departure}</p>
    //     <p><strong>Destination:</strong> ${destination}</p>
    //     <p><strong>Date:</strong> ${date}</p>
    //   `
    // })

    console.log('Booking request received:', body)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We will contact you shortly.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
