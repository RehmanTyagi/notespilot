import PricingCard from "../../PricingCard";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="flex flex-col items-center gap-5 px-5 md:grid md:grid-cols-3 md:px-20 md:py-10"
    >
      <h1 className="title text-center md:col-start-1 md:col-end-4">
        Flexible plans for you
      </h1>
      <p className="heading text-center md:col-start-1 md:col-end-4">
        No hidden fees!
      </p>
      <PricingCard
        cta="Start Trial"
        title="Perfect for testing the waters"
        heading="Free Trial"
        price={0}
        features={[
          "Access to essential tools",
          "Up to 10 projects",
          "Basic analytics and reporting",
          "Community support",
        ]}
      />
      <PricingCard
        isPopular
        cta="Get Started"
        title="Perfect for small businesses"
        heading="Most Popular"
        price={45}
        features={[
          "Everything in Free Plan",
          "Unlimited projects",
          "Advanced analytics and reporting",
          "Priority email and chat support",
          "AI-powered chatbot integration",
        ]}
      />
      <PricingCard
        cta="Contact Sales"
        title="Enterprise Plan"
        heading="Enterprise"
        price="Custom"
        features={[
          "Everything in Pro Plan",
          "Dedicated account manager",
          "Advanced security & compliance features",
          "Custom integrations and API access",
          "24/7 premium support",
        ]}
      />
    </section>
  );
};

export default Pricing;
