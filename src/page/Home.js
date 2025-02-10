import React from "react";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import NewsletterSubscription from "../components/NewsletterSubscription";
import Mentors from "../components/Mentors";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title='Easto | Best Software Training for Software Development Skills'
        description='Join Easto for top software training programs. Learn software development skills and stay ahead in the fast-growing tech world. Build your future today!'
      />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <div className="flex flex-col gap-3 py-2 mt-2">
        <h2 className="lg:text-5xl text-4xl font-bold px-6 text-center lg:px-32">Mentors</h2>
        <div className="flex flex-col my-5">
          <Mentors />
        </div>
      </div>
      <div className="flex flex-col gap-5 py-2">
        <h2 className="lg:text-5xl text-4xl font-bold px-6 lg:px-32">Testimonials</h2>
        <p className="lg:text-2xl text-xl font-semibold px-6 lg:px-32">Read what our students have to say</p>
        <Testimonials />
      </div>
      <FAQ />
      <NewsletterSubscription />
    </>
  );
};

export default Home;