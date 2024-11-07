import { NextResponse } from "next/server";
import axios from "axios";
import { createHash } from "crypto";

// Type for the form submission request body
interface FormSubmissionRequestBody {
  name: string; // Name field from the form
  phone: string; // Phone field from the form
  adress: string; // Address field from the form
  referrer?: string; // Referrer can be optional
}

// Hash function for email
function hashEmail(email: string): string {
  return createHash("sha256").update(email).digest("hex");
}

// Function to send event to Facebook Conversion API
async function sendConversionEvent(emailHash: string, value?: string) {
  const pixelId = "YOUR_PIXEL_ID"; // Replace with your actual pixel ID
  const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with your actual access token
  const url = `https://graph.facebook.com/v17.0/${pixelId}/events`;

  const payload = {
    data: [
      {
        event_name: "Lead", // You can change this to other event types if needed
        event_time: Math.floor(new Date().getTime() / 1000),
        user_data: {
          em: emailHash, // Hashed email
        },
        custom_data: {
          value: value || "0.00", // Default value if none is provided
          currency: "TND", // Customize this as per your needs
        },
      },
    ],
    access_token: accessToken,
  };

  // Send the event data to Facebook
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  return result;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, adress, referrer }: FormSubmissionRequestBody = body;

    // Make a request to your webhook or external API
    const req = await axios.post(
      "https://n8n.lataklak.tn/webhook/09835f9a-8232-462f-b9d8-5246b00058cc",
      {
        name,
        phone,
        adress,
        referral: referrer, // Send referrer data if available
      }
    );

    // Hash the email (assuming the email is part of the form in future versions)
    const emailHash = hashEmail(phone); // Assuming phone is used as an identifier

    // Send conversion event to Facebook
    const result = await sendConversionEvent(emailHash, "197"); // Sending a fixed value of "197" for demonstration

    console.log(result); // Log the result for debugging

    // Send a success response
    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error); // Log any errors for debugging
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
