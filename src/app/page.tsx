import NavBar from "@/components/navbar/NavBar";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Advantages from "@/components/advantages/Advantages";
import Testimonial from "@/components/testimonial/Testimonial";
import FAQ from "@/components/faq/FAQ";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <NavBar />
      <Hero />
      <Features />
      <Advantages />
      <Testimonial />
      <FAQ />
      <Footer />
    </main>
  );
}
