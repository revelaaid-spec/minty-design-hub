import { Layout } from "@/components/Layout";
import { PortfolioSection } from "@/components/PortfolioSection";

export default function Portfolio() {
  return (
    <Layout>
      <div className="pt-16">
        <PortfolioSection />
      </div>
    </Layout>
  );
}