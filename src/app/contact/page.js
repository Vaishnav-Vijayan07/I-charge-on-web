import InnerHeroSection from "@/components/common/InnerHeroSection";
import ContactSection from "@/components/features/contact/ContactSection";

export const metadata = {
  title: "ichargeON | Contact",
  description: "Understand how ichargeON collects.",
};

export default function page() {
  return (
    <>
      <InnerHeroSection title="contact" />
      <ContactSection />
    </>
  );
}
