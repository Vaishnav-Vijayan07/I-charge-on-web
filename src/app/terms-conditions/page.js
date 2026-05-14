import InnerHeroSection from "@/components/common/InnerHeroSection";
import TermsConditions from "@/components/features/terms-conditions/TermsConditions";

export const metadata = {
  title: "ichargeON | Terms and conditions",
  description: "Understand how ichargeON collects.",
};

export default function page() {
  return (
    <>
      <InnerHeroSection title="Terms & conditions" />
      <TermsConditions />
    </>
  );
}
