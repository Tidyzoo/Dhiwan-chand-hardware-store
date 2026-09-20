/**
 * STORE CONFIGURATION
 * -------------------
 * Only verified business information is published.
 * Replace the placeholder values below with the store's real
 * contact details once the owner provides them.
 */

export const STORE = {
  name: "Diwan Chand Bartan & Hardware Store",
  brandLine1: "DIWAN CHAND",
  brandLine2: "Bartan & Hardware Store",
  tagline: "Everyday essentials. Hardware. Household needs.",
  address: "373, Nissing, Haryana 132024, India",
  addressShort: "373, Nissing, Haryana 132024",

  // [ADD PHONE NUMBER] — digits only, with country code, e.g. "919876543210"
  phone: "",
  phoneDisplay: "[ADD PHONE NUMBER]",

  // [ADD WHATSAPP NUMBER] — digits only, with country code, e.g. "919876543210"
  whatsapp: "",
  whatsappDisplay: "[ADD WHATSAPP NUMBER]",

  // [ADD VERIFIED HOURS] — e.g. "Mon – Sat · 9:00 AM – 8:00 PM"
  hoursDisplay: "[ADD VERIFIED HOURS]",
} as const;

export const phoneConfigured = STORE.phone.length >= 10;
export const whatsappConfigured = STORE.whatsapp.length >= 10;

const MAPS_QUERY = "Diwan Chand Bartan & Hardware Store, 373, Nissing, Haryana 132024";

export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  MAPS_QUERY,
)}`;

export const MAPS_VIEW_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAPS_QUERY,
)}`;

export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  "Nissing, Karnal, Haryana 132024, India",
)}&z=14&output=embed`;

export const TEL_URL = `tel:+${STORE.phone}`;

/** Builds the wa.me deep-link with a pre-filled enquiry message. */
export const whatsappUrl = (message: string) =>
  `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;

/** Pre-filled message used by every "Ask About This Product" button. */
export const productMessage = (productName: string) =>
  `Hello, I found "${productName}" on your website. Is it available and what is the current price?`;

export const GENERAL_MESSAGE =
  "Hello, I found Diwan Chand Bartan & Hardware Store online. I have a question about a product — could you help me with availability and price?";
