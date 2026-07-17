export type SiteImage = {
  src: string;
  alt: string;
};

// TODO image sourcing: current files are local stock-photo-style placeholders.
// Replace them with licensed, no-face healthcare photos from Unsplash, Pexels,
// Freepik, or Pixabay. Useful searches: "blood sample tubes",
// "medical sample collection", "vacutainer tubes", "specimen containers",
// "medical gloves sample tubes", "lab test tubes clean table",
// "home healthcare medical kit", and "diagnostic sample collection".
export const siteImages = {
  logo: {
    src: "/images/homecure-logo.png",
    alt: "HomeCure",
  },
  hero: {
    // TODO: Use a large premium photo of vacutainers, blood vials, or a sterile
    // medical kit on a clean home table. Avoid faces, injections, IVs, and care scenes.
    src: "/images/hero-sample-collection.jpg",
    alt: "Safe sample collection at home in Karachi",
  },
  about: {
    // TODO: Use sample tubes, gloves, a medical form, and clipboard on a bright table.
    src: "/images/sample-vials-clean-table.jpg",
    alt: "Home diagnostic sample collection setup",
  },
  howItWorks: {
    // TODO: Use a phone or booking form beside sealed sample collection supplies.
    src: "/images/home-diagnostic-setup.jpg",
    alt: "Booking a home sample collection visit",
  },
  safety: {
    // TODO: Use gloves, sanitizer, sealed containers, sterile packaging, and labeled samples.
    src: "/images/gloved-hands-sample-tubes.jpg",
    alt: "Sterile and hygienic sample handling",
  },
  focus: {
    // TODO: Use a clean medical kit with sealed sample containers in a home setting.
    src: "/images/sterile-medical-kit.jpg",
    alt: "Sterile medical kit for home sample collection",
  },
  contact: {
    // TODO: Use a calm image of a phone, notebook, sample tubes, and medical kit.
    src: "/images/contact-booking-medical-items.jpg",
    alt: "Contact HomeCure for home sample collection",
  },
  services: {
    blood: {
      // TODO: Use blood vacutainers or labeled blood sample tubes.
      src: "/images/blood-vacutainers.jpg",
      alt: "Blood vacutainers for sample collection",
    },
    urine: {
      // TODO: Use a sealed urine specimen container on a clean clinical surface.
      src: "/images/urine-sample-container.jpg",
      alt: "Sealed urine sample container",
    },
    stool: {
      // TODO: Use a sealed opaque stool specimen container, handled tastefully and clinically.
      src: "/images/stool-specimen-container.jpg",
      alt: "Sealed stool sample container",
    },
    sputum: {
      // TODO: Use a sterile sputum specimen container with a blank medical label.
      src: "/images/sputum-specimen-container.jpg",
      alt: "Sterile sputum sample container",
    },
  },
  labeledContainers: {
    // TODO: Use labeled sample containers or vials on a clean diagnostic table.
    src: "/images/labeled-sample-containers.jpg",
    alt: "Labeled sample containers for diagnostic testing",
  },
} satisfies Record<string, SiteImage | Record<string, SiteImage>>;
