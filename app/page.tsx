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
  () => import("@/components/layout/sections/testimonial2"), // New TestimonialSection2
  {
    ssr: false,
  }
);

const FinalPage = dynamic(
  () => import("@/components/layout/sections/finalpage"), // FinalPage section
  {
    ssr: false,
  }
);

const FloatingButton = dynamic(() => import("@/components/ui/FloatingButton"), {
  ssr: false,
});

export const metadata = {
  title: "Lataklak",
  description: "Formation Sponsoring Facebook",
  openGraph: {
    type: "website",
    title: "Lataklak",
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
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TestimonialSection />
      <Merkanti />
      <TestimonialSection2 />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FloatingButton />
    </>
  );
}
