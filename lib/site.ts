export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://homecure.com.pk"
).replace(/\/$/, "");

export const SITE_NAME = "Home Cure";
export const SITE_ALTERNATE_NAME = "Home Cure Pakistan";
export const CONTACT_EMAIL = "info@homecure.com.pk";
export const CONTACT_PHONE = "+92 336 8328325";
export const CONTACT_PHONE_E164 = "+923368328325";
export const INSTAGRAM_LINK = "https://www.instagram.com/homecurepak/";
export const FACEBOOK_LINK =
  "https://www.facebook.com/profile.php?id=61585081491893";
export const WHATSAPP_LINK = `https://wa.me/923368328325?text=${encodeURIComponent(
  "Hello Home Cure, I would like to book a home sample collection visit.",
)}`;
export const PHONE_LINK = `tel:${CONTACT_PHONE_E164}`;
export const EMAIL_LINK = `mailto:${CONTACT_EMAIL}`;

export const SEO_TITLE =
  "Home Cure | At-Home Sample Collection in Karachi";
export const SEO_DESCRIPTION =
  "Book Home Cure for at-home sample collection in Karachi. Blood, urine, stool, and sputum sample collection with trained healthcare staff and hygienic handling.";
