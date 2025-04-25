import React from "react";
import PriceOption from "../PriceOption/PriceOption";
import { IoPricetags } from "react-icons/io5";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: "gym001",
      name: "Basic Plan",
      price_per_month: 1200,
      features: [
        "Unlimited access to gym equipment",
        "Locker room access",
        "Free fitness assessment once a month",
        "Water station access",
        "Access during off-peak hours (6AM - 4PM)",
        "Access to mobile app for workout tracking",
      ],
    },
    {
      id: "gym002",
      name: "Standard Plan",
      price_per_month: 1800,
      features: [
        "All Basic Plan features",
        "Full day access to the gym",
        "Access to group fitness classes (Yoga, Zumba, HIIT)",
        "Two guest passes per month",
        "Personal trainer consultation (once a month)",
        "Monthly body composition analysis",
        "Discounts on gym merchandise (10%)",
        "Free Wi-Fi access",
        "Nutrition tips and meal plan guide",
      ],
    },
    {
      id: "gym003",
      name: "Premium Plan",
      price_per_month: 2500,
      features: [
        "All Standard Plan features",
        "Unlimited group fitness classes",
        "One-on-one weekly personal training session",
        "Access to steam room, sauna and spa",
        "Access to exclusive members-only events",
        "Free gym merchandise (starter kit)",
        "Priority support and class booking",
        "24/7 gym access",
        "Customized nutrition coaching",
        "Massage therapy (once a month)",
      ],
    },
  ];

  return (
    <div className="m-12">
      <div className=" ">
        <h2 className="text-4xl font-semibold mb-5 flex items-center justify-center  p-15 ">
          <IoPricetags className="mr-3 text-green-500 " />
          Best Prices in the Town
        </h2>
        {/* Title line with text */}
        <div className="flex items-center justify-center my-6">
          <div className="h-px bg-gray-200 flex-grow"></div>
          <span className="px-4 text-gray-200 font-medium text-lg">Here</span>
          <div className="h-px bg-gray-200 flex-grow"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-3  gap-3 ">
        {priceOptions.map((option, idx) => (
          <PriceOption key={idx} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
