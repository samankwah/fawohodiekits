import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Battery,
  Zap,
  Award,
  Heart,
  Settings,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import KitUser from "../../../assets/kit-user.webp";
import About from "../../../assets/about1.jpg";
import HowItWork from "../../../assets/sample.mp4";

const AboutProduct = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/installation");
    // navigate("/contact");
  };

  // Product features data
  const features = [
    {
      icon: <Battery className="w-6 h-6 text-[#0A5EB0]" />,
      title: "Long-lasting Battery",
      description:
        "Enjoy up to 8 hours of continuous use on a single charge, providing reliable mobility throughout the day.",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#0A5EB0]" />,
      title: "Quick Installation",
      description:
        "The kit can be installed on most standard manual wheelchairs in under 30 minutes, no special tools required.",
    },
    {
      icon: <Settings className="w-6 h-6 text-[#0A5EB0]" />,
      title: "Adjustable Settings",
      description:
        "Customize speed and sensitivity settings to match individual preferences and needs.",
    },
    {
      icon: <Heart className="w-6 h-6 text-[#0A5EB0]" />,
      title: "Enhanced Quality of Life",
      description:
        "Designed to reduce physical strain and increase independence for users with mobility impairments.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 pt-6">
          {/* <p className="text-amber-600 font-medium mb-2">
            INNOVATION FROM TARKWA-NSUAEM
          </p> */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            The Fowohodie Conversion Kit
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforming manual wheelchairs into motorized mobility solutions
            for greater independence and freedom.
          </p>
        </div>

        {/* Main product showcase */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="w-full lg:w-1/2">
            {/* <div className="relative">
              <div className="absolute -z-10 inset-0 bg-amber-100 rounded-lg transform translate-x-4 translate-y-4"></div>
              <img
                src={About}
                alt="Fowohodie Conversion Kit"
                className="w-full h-auto rounded-lg shadow-md relative z-10"
              />
            </div> */}
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-blue-100 rounded-lg transform translate-x-4 translate-y-4"></div>
              <video
                src={HowItWork} // Update the path to your video file
                autoPlay
                loop
                muted
                playsInline
                className="relative z-10 rounded-lg shadow-md w-full h-auto object-cover"
              ></video>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#0A5EB0] font-semibold text-sm tracking-wider uppercase">
              Mobility Solution
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 mb-4">
              How It Works
            </h3>
            <p className="text-gray-600 mb-6 text-justify">
              The Fowohodie Conversion Kit transforms standard manual
              wheelchairs into motorized ones through a battery-powered motor
              system. The kit is designed for easy installation and operation,
              making mobility more accessible without the high cost of
              purchasing a new motorized wheelchair.
            </p>
            <ul className="space-y-4">
              {[
                "Compatible with most standard manual wheelchair models",
                "Intuitive control system with adjustable sensitivity",
                "Swappable battery system for extended use",
                "Weather-resistant components for both indoor and outdoor use",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-[#0A5EB0] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button
              className="mt-8 px-6 py-3 bg-[#0A5EB0] hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-200 flex items-center gap-2"
              onClick={handleClick}
            >
              Learn About Installation <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Benefits section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Benefits of the Conversion Kit
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The Fowohodie Conversion Kit offers numerous advantages for
              wheelchair users and their caregivers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Enhanced Independence
              </h4>
              <p className="text-gray-600">
                Users gain greater control over their mobility, reducing
                reliance on caregivers for everyday movement and activities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Reduced Physical Strain
              </h4>
              <p className="text-gray-600">
                Minimizes upper body exertion, preventing long-term injuries and
                fatigue associated with manual propulsion.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Cost-Effective Solution
              </h4>
              <p className="text-gray-600">
                Offers the benefits of a motorized wheelchair at a fraction of
                the cost of purchasing a new electric wheelchair.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Improved Accessibility
              </h4>
              <p className="text-gray-600">
                Makes navigating inclines, rough terrain, and longer distances
                significantly easier for users.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Community Integration
              </h4>
              <p className="text-gray-600">
                Enables users to participate more actively in social,
                educational, and professional activities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Customizable Experience
              </h4>
              <p className="text-gray-600">
                Adaptive controls can be tailored to accommodate various
                mobility impairments and personal preferences.
              </p>
            </div>
          </div>
        </div>

        {/* Technical features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Technical Features
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Innovative engineering meets practical design in every aspect of
              the Fowohodie Conversion Kit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-20 bg-white p-8 md:p-12 rounded-lg shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-[#0A5EB0] text-4xl mb-6">"</div>
            <p className="text-xl md:text-2xl text-gray-700 italic mb-6">
              Before the Fowohodie Conversion Kit, I struggled to move around my
              neighborhood independently. Now, I can visit friends, go to the
              market, and even attend community events without exhausting myself
              or relying on others for help.
            </p>
            <div className="flex items-center justify-center">
              <img
                src={KitUser}
                alt="Testimonial from user"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Kofi Mensah</p>
                <p className="text-gray-500 text-sm">Kit user since 2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Availability and pricing */}
        <div className="flex flex-col md:flex-row items-center bg-blue-50 rounded-lg overflow-hidden mb-20">
          <div className="w-full md:w-2/3 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Availability & Support
            </h3>
            <p className="text-gray-700 mb-6">
              The Fowohodie Conversion Kit is available throughout the Western
              Region with plans for nationwide distribution. Each kit comes with
              a 1-year warranty and access to our support team for installation
              assistance and maintenance guidance.
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#0A5EB0]" />
                <span className="text-gray-700">2-day delivery available</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#0A5EB0]" />
                <span className="text-gray-700">Free installation support</span>
              </div>
            </div>
            <button className="mt-4 px-6 py-3 bg-[#0A5EB0] hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-200">
              Check Availability In Your Area
            </button>
          </div>
          <div className="w-full md:w-1/3 bg-blue-100 p-8 md:p-12">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-800 mb-2">
                Starting from
              </p>
              <p className="text-4xl font-bold text-blue-600 mb-2">GH₵ 2,499</p>
              <p className="text-gray-600 mb-4">Installment plans available</p>
              <div className="flex justify-center">
                <Award className="w-8 h-8 text-[#0A5EB0]" />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Winner of the 2023 Regional Innovation Award
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Ready to Transform Your Mobility Experience?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join the growing community of Fowohodie users who have discovered a
            new level of independence and freedom.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-8 py-3 bg-[#0A5EB0] hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-200"
              onClick={handleClick}
            >
              Request a Demonstration
            </button>
            <button
              className="px-8 py-3 border border-gray-300 hover:border-blue-500 hover:text-blue-500 text-gray-700 font-medium rounded-md transition-colors duration-200"
              onClick={handleClick}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
