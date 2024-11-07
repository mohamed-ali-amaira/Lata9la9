import { NextResponse } from "next/server";
import axios from "axios";
import { createHash } from "crypto";

interface FormSubmissionRequestBody {
  name: string; 
  phone: string; 
  adress: string; 
  referrer?: string; 
}

// Hash function for email
function hashEmail(email: string): string {
  return createHash("sha256").update(email).digest("hex");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, adress, referrer }: FormSubmissionRequestBody = body;

    // Make a request to your webhook
    const req = await axios.post(
      "https://n8n.lataklak.tn/webhook/09835f9a-8232-462f-b9d8-5246b00058cc",
      {
        name,
        phone,
        adress,
        referral: referrer, 
      }
    );

    // Removed Facebook Pixel event tracking logic

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
