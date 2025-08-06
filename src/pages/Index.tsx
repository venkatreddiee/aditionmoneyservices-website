import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import SIPCalculator from "@/components/SIPCalculator";
import InsightsPreview from "@/components/InsightsPreview";
import NewsSection from "@/components/NewsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductsGrid />
      <SIPCalculator />
      <InsightsPreview />
      <NewsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
