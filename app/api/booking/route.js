// app/api/booking/route.js
import { NextResponse } from 'next/server';

// Temporary Local Database Block
const mockClinicDB = [
  { id: 1, customerName: "Zahid", customerNumber: "03001234567", doctorName: "Dr. Asif", timeSlot: "10:00 AM", date: "2026-07-15" }
];

// SAKHT RULE: Hamesha "export async function POST" likhein (No Default Export)
export async function POST(request) {
  try {
    const body = await request.json();
    const { customerName, customerNumber, doctorName, timeSlot, date } = body;

    // Validation Check Layer
    if (!customerName || !customerNumber || !doctorName || !timeSlot || !date) {
      return NextResponse.json({ error: "Tamam fields (Name, Number, Doctor, Time, Date) lazmi hain!" }, { status: 400 });
    }

    // Double-Booking Filter Logic
    const isConflict = mockClinicDB.find(
      (appointment) => 
        appointment.doctorName === doctorName && 
        appointment.date === date && 
        appointment.timeSlot === timeSlot
    );

    if (isConflict) {
      return NextResponse.json({ 
        error: `Maazrat! ${doctorName} ka yeh time (${timeSlot}) pehle se booked hai.` 
      }, { status: 409 });
    }

    // Push new structured record instance
    const newAppointment = {
      id: Date.now(),
      customerName,
      customerNumber,
      doctorName,
      timeSlot,
      date,
      createdAt: new Date().toISOString()
    };

    mockClinicDB.push(newAppointment);

    console.log("🤖 [Automation Core] Appointment Saved Successfully:", newAppointment);
    console.log(`📱 SMS Trigger Pipeline: Notify owner phone about ${customerName}`);

    return NextResponse.json({
      success: true,
      message: "Chatha Medical Clinic appointment confirmed!",
      data: newAppointment
    }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: "Backend crash execution failure!" }, { status: 500 });
  }
}
