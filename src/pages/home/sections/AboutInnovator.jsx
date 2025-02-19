import React from "react";
import {
  MapPin,
  Calendar,
  Award,
  ExternalLink,
  Linkedin,
  Mail,
} from "lucide-react";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa"; // Correct import for GitHub
import CEO from "../../../assets/ceo.jpg";

const AboutInnovator = () => {
  // Innovator data
  const innovator = {
    name: "Elizabeth Acheampong",
    title: "Mechanical Engineer & Social Entrepreneur",
    location: "Tarkwa-Nsuaem, Western Region, Ghana",
    bio: "Elizabeth Acheampong is a mechanical engineer and social entrepreneur dedicated to creating accessible mobility solutions for individuals with physical disabilities. Through her groundbreaking work on the Fowohodie Conversion Kit, she has transformed the lives of wheelchair users across Ghana.",
    story:
      "Growing up with a family member who relied on a manual wheelchair, Elizabeth witnessed firsthand the challenges of mobility and independence. After completing her engineering degree at Kwame Nkrumah University of Science and Technology, she committed herself to developing affordable solutions that could be implemented locally using available resources.",
    achievements: [
      "Winner, 2023 Regional Innovation Award",
      "Featured in 'Africa's Top 30 Innovators Under 30'",
      "Recipient of the Ghana Technology Development Grant (2022)",
      "TEDx Speaker on 'Designing for Accessibility in Developing Nations'",
    ],
    education: [
      {
        degree: "B.Sc. Mechanical Engineering",
        institution: "KNUST",
        year: "2014-2018",
      },
      {
        degree: "Certificate in Social Entrepreneurship",
        institution: "Ashesi University",
        year: "2019",
      },
    ],
    vision:
      "Elizabeth's vision extends beyond the Fowohodie Conversion Kit. She aims to establish a center for accessible technology innovation in Ghana, providing training and resources for young engineers to develop solutions for various disability challenges.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "#",
        icon: <Linkedin className="w-5 h-5" />,
      },
      { platform: "Email", url: "#", icon: <Mail className="w-5 h-5" /> },
      { platform: "GitHub", url: "#", icon: <FaGithub className="w-5 h-5" /> },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-6 pt-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left column - Profile and quick info */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-8">
              <div className="relative mb-8">
                <div className="absolute -z-50 inset-8 rounded-full transform translate-x-3 translate-y-3"></div>
                <img
                  src={CEO}
                  alt="Elizabeth Acheampong - Innovator"
                  className="w-full max-w-md mx-auto rounded-sm shadow-lg relative z-10"
                />
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {innovator.name}
              </h1>
              <p className="text-xl text-amber-600 font-medium mb-4">
                {innovator.title}
              </p>

              <div className="flex items-start gap-2 text-gray-700 mb-4">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>{innovator.location}</span>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm border border-amber-100 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                  Education
                </h3>
                <ul className="space-y-3">
                  {innovator.education.map((edu, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <HiOutlineAcademicCap className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">
                          {edu.degree}
                        </p>
                        <p className="text-sm text-gray-600">
                          {edu.institution} | {edu.year}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {innovator.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-amber-50 border border-gray-200 rounded-md text-gray-700 hover:text-amber-600 transition-colors duration-200"
                  >
                    {link.icon} {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Main content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 border-amber-200 pb-2">
              About the Innovator
            </h2>

            <div className="prose max-w-none mb-10">
              <p className="text-xl font-medium text-gray-700 mb-6">
                {innovator.bio}
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                The Journey
              </h3>
              <p className="text-gray-700 mb-8">{innovator.story}</p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Vision for the Future
              </h3>
              <p className="text-gray-700 mb-8">{innovator.vision}</p>

              <blockquote className="p-6 bg-amber-50 border-l-4 border-amber-500 italic text-lg text-gray-700 mb-8">
                "My goal is not just to create products, but to build a movement
                that ensures mobility and independence are fundamental rights
                available to everyone, regardless of economic status."
              </blockquote>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Key Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {innovator.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-amber-100"
                  >
                    <Award className="w-6 h-6 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Impact Stories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Empowering Communities
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Elizabeth's work has led to the formation of local
                    wheelchair user groups that advocate for greater
                    accessibility in public spaces.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-amber-500 hover:text-amber-600 font-medium"
                  >
                    Read more <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Skills Development Program
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Through her workshops, Elizabeth has trained over 50 young
                    engineers in accessible design principles and fabrication
                    techniques.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-amber-500 hover:text-amber-600 font-medium"
                  >
                    Read more <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Connect with Elizabeth
              </h3>
              <div className="bg-amber-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Interested in learning more about Elizabeth's work or the
                  Fowohodie Conversion Kit? Reach out to schedule a conversation
                  or demonstration.
                </p>
                <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors duration-200">
                  Request a Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInnovator;
