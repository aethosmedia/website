import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import BlogPreview from "@/components/sections/BlogPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Work />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
      <BlogPreview />
    </>
  );
}
