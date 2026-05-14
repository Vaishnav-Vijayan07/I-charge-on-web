import InnerHeroSection from "@/components/common/InnerHeroSection";
import FAQInfoSection from "@/components/features/faq/FAQInfoSection";

export const metadata = {
  title: "ichargeON | FAQ",
  description: "Understand how ichargeON collects.",
};

export default function page() {
  return (
    <>
      <InnerHeroSection title="FAQ" />
      <FAQInfoSection />
    </>
  );
}
