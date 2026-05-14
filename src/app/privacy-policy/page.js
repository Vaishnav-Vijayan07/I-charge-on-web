import InnerHeroSection from "@/components/common/InnerHeroSection";
import PrivacyPolicy from "@/components/features/privacy-policy/PrivacyPolicy";

export const metadata = {
  title: "ichargeON | Privacy policy",
  description: "Understand how ichargeON collects.",
};

export default function page() {
  return (
    <>
      <InnerHeroSection title="Privacy Policy" />
      <PrivacyPolicy />
    </>
  );
}
