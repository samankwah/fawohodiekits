import React, { useEffect, useState } from "react";
import ViewAllProductsButton from "./ViewAllProductsButton"; // Import the button component
import Product1 from "../../../assets/about1.jpg";
import Product2 from "../../../assets/about.jpg";
import Product3 from "../../../assets/feat2.jpg";
import Product4 from "../../../assets/product6.jpg";
const Showcase = () => {
  // Sample data for products/services
  const showcaseItems = [
    {
      title: "Fowohodie Conversion Kit",
      description:
        "A locally designed mobility solution to help individuals with physical disabilities gain independence. It can be easily installed on existing wheelchairs.",
      imageUrl: Product1,
      price: "GH₵3500",
      badge: "Best Seller",
    },
    {
      title: "Accessible Design Workshops",
      description:
        "Workshops aimed at training young engineers to design accessible technologies that improve the lives of people with disabilities.",
      imageUrl: Product2,
      price: "GH₵1800",
      badge: "New",
    },
    {
      title: "Smart Mobility Device",
      description:
        "A wearable, AI-powered device to assist with mobility in urban spaces. It offers real-time guidance and obstacle detection.",
      imageUrl: Product3,
      price: "GH₵5900",
      badge: "Premium",
    },
    {
      title: "Community Support Groups",
      description:
        "Local communities formed to support individuals with disabilities by advocating for accessible public spaces and providing peer support.",
      imageUrl: Product4,
      price: "Free",
      badge: "Community",
    },
  ];

  // Animation trigger state
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    // Trigger animation after the component is mounted
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 300); // Delay for smooth fade-in effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="products"
      className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 sm:px-8 lg:px-12"
    >
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Featured Products
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            Discover innovative products and services created to empower
            individuals with disabilities and enhance their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-500 transform ${
                animateItems
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.badge && (
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm">
                    {item.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <button className="bg-white text-gray-900 py-2 px-5 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-50">
                    Quick View
                  </button>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    {item.price}
                  </span>
                  <button
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      item.price === "Free"
                        ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 hover:shadow-md"
                        : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md"
                    }`}
                  >
                    {item.price === "Free" ? "Get Started" : "Add to Cart"}
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-500 ${
            animateItems
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${showcaseItems.length * 100 + 100}ms` }}
        >
          <ViewAllProductsButton productPagePath="/product-catalog" />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
