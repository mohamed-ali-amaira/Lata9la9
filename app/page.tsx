import dynamic from "next/dynamic";
import { FAQSection } from "@/components/layout/sections/faq";
import Merkanti from "@/components/layout/sections/merkanti";

const CourseMaterial = dynamic(
  () => import("@/components/layout/sections/courseMaterial"),
  { ssr: false }
);

const ContactSection = dynamic(
  () => import("@/components/layout/sections/contact"),
  { ssr: false }
);

const HeroSection = dynamic(() => import("@/components/layout/sections/hero"), {
  ssr: false,
});
const PricingSection = dynamic(
  () => import("@/components/layout/sections/pricing"),
  {
    ssr: false,
  }
);

const TestimonialSection = dynamic(
  () => import("@/components/layout/sections/testimonial"),
  {
    ssr: false,
  }
);

const TestimonialSection2 = dynamic(
  () => import("@/components/layout/sections/testimonial2"), // New TestimonialSection2 imported
  {
    ssr: false,
  }
);

const FinalPage = dynamic(
  () => import("@/components/layout/sections/finalpage"), // Importing FinalPage section
  {
    ssr: false,
  }
);

const FloatingButton = dynamic(() => import("@/components/ui/FloatingButton"), {
  ssr: false,
});

export const metadata = {
  title: "lataklak",
  description: "Formation Sponsoring Facebook",
  openGraph: {
    type: "website",
    title: "lataklak",
    description: "lataklak Tunisie",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "lataklak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Formation Sponsoring",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TestimonialSection />
      <Merkanti />
      <FAQSection />
      <TestimonialSection2 /> {/* New TestimonialSection2 added after FAQ */}
      <PricingSection />
      <ContactSection />
      <FinalPage /> {/* FinalPage added as the last section */}
      <FloatingButton />
    </>
  );
}