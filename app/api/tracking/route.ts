import { NextRequest, NextResponse } from "next/server";

// Type for the request body
interface FacebookConversionRequestBody {
  eventName: string;
  eventData: {
    emailHash: string;
    value?: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body: FacebookConversionRequestBody = await req.json();
    const { eventName, eventData } = body;

    const pixelId = "YOUR_PIXEL_ID";
    const accessToken = "YOUR_ACCESS_TOKEN";

    // Facebook Conversion API URL
    const url = `https://graph.facebook.com/v17.0/${pixelId}/events`;

    // Payload for Facebook Conversion API
    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(new Date().getTime() / 1000), // Unix timestamp
          user_data: {
            em: eventData.emailHash, // Hashed email
            // You can add more user data like phone hash (ph) here
          },
          custom_data: {
            value: eventData.value || "197.00", // Conversion value (optional)
            currency: "TND",
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

    // Return the response from Facebook
    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error("Facebook Conversion API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
