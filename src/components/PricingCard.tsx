import React from "react";
import { GoCheck } from "react-icons/go";
import Button from "./common/Button";

interface PricingCardProps {
  heading: string;
  title: string;
  price: number | string;
  features: string[];
  cta: string;
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  heading,
  title,
  price,
  features,
  cta,
  isPopular,
}) => {
  return (
    <div
      className={`${isPopular ? "bg-white" : "bg-primary/10"} flex w-full flex-col justify-between gap-4 rounded-md p-5 shadow md:h-full`}
    >
      <p className="heading">{heading}</p>
      <h1 className="text-lg">{title}</h1>
      <div className="text-3xl font-bold">
        {typeof price === "string" ? (
          price
        ) : (
          <>
            <span>{`$${price}`}</span>
            <span className="text-gray-600">/mo</span>
          </>
        )}
      </div>
      <div className="text-sm leading-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <GoCheck className="text-primary" />
            <p>{feature}</p>
          </div>
        ))}
      </div>
      <Button
        className={`${isPopular ? "border-2 border-primary bg-transparent !text-primary" : ""}`}
        type="button"
      >
        {cta}
      </Button>
    </div>
  );
};

export default PricingCard;
