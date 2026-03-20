const twilio = require('twilio');

let client;
try {
  // initialize twilio only if variables exist so the app doesn't crash on start without them
  if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
    client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  }
} catch (error) {
  console.error("Twilio initialization error:", error);
}

const sendWhatsAppAlert = async (enquiry) => {
  if (!client) {
    console.warn("Twilio client not initialized, skipping WhatsApp alert.");
    return;
  }

  const message = `New Enquiry Received 🔔\nName: ${enquiry.name}\nPhone: ${enquiry.phone}\nService: ${enquiry.service}\nMessage: ${enquiry.message}`;

  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_WHATSAPP_FROM,
      to: process.env.ADMIN_WHATSAPP
    });
    console.log("WhatsApp alert sent successfully.");
  } catch (error) {
    console.error("Failed to send WhatsApp alert:", error.message);
  }
};

module.exports = {
  sendWhatsAppAlert
};
