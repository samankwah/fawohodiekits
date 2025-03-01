import React, { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Calendar,
  Award,
  ExternalLink,
  Linkedin,
  Mail,
  Clock,
  Video,
  X,
} from "lucide-react";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import CEO from "../../../assets/innovator.jpg";
import { Link } from "react-router-dom";

const AboutInnovator = () => {
  const dialogRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    topic: "",
  });

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  // Function to open modal
  const handleOpenDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  // Function to close modal
  const handleCloseDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Meeting Request:", formData);
    handleCloseDialog(); // Close modal after submission
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        handleCloseDialog();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Innovator data
  const innovator = {
    name: "Kelvin Acheampong Domfeh",
    title: "Mechanical Engineer & Social Entrepreneur",
    location: "Tarkwa-Nsuaem, Western Region, Ghana",
    bio: "Kelvin Acheampong Domfeh is a mechanical engineer and social entrepreneur dedicated to creating accessible mobility solutions for individuals with physical disabilities. Through his groundbreaking work on the Fowohodie Conversion Kit, he has transformed the lives of wheelchair users across Ghana.",
    story:
      "Growing up with a family member who relied on a manual wheelchair, Kelvin witnessed firsthand the challenges of mobility and independence. After completing his engineering degree at Kwame Nkrumah University of Science and Technology, he committed himself to developing affordable solutions that could be implemented locally using available resources.",
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
      "Kelvin's vision extends beyond the Fowohodie Conversion Kit. He aims to establish a center for accessible technology innovation in Ghana, providing training and resources for young engineers to develop solutions for various disability challenges.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "/www.linkedin.com/in/kelvindomfeh",
        icon: <Linkedin className="w-5 h-5" />,
      },
      {
        platform: "Email",
        url: "/kelvindomfeh2004@gmail.com",
        icon: <Mail className="w-5 h-5" />,
      },
      { platform: "GitHub", url: "#", icon: <FaGithub className="w-5 h-5" /> },
    ],
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-6 pt-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left column - Profile and quick info */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-8">
              <div className="relative mb-8">
                <div className="absolute -z-50 inset-8 rounded-full transform translate-x-3 translate-y-3"></div>
                <img
                  src={CEO}
                  alt="Kelvin Acheampong - Innovator"
                  className="w-full max-w-md mx-auto rounded-sm shadow-lg relative z-10"
                />
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {innovator.name}
              </h1>
              <p className="text-xl text-[#0A5EB0] font-medium mb-4">
                {innovator.title}
              </p>

              <div className="flex items-start gap-2 text-gray-700 mb-4">
                <MapPin className="w-5 h-5 text-[#0A5EB0] mt-0.5 flex-shrink-0" />
                <span>{innovator.location}</span>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm border border-blue-100 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                  Education
                </h3>
                <ul className="space-y-3">
                  {innovator.education.map((edu, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <HiOutlineAcademicCap className="w-4 h-4 text-[#0A5EB0] mt-1 flex-shrink-0" />
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
                    className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-blue-50 border border-gray-200 rounded-md text-gray-700 hover:text-[#0A5EB0] transition-colors duration-200"
                  >
                    {link.icon} {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Main content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 border-[#0A5EB0] pb-2">
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

              <blockquote className="p-6 bg-blue-50 border-l-4 border-[#0A5EB0] italic text-lg text-gray-700 mb-8">
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
                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-blue-100"
                  >
                    <Award className="w-6 h-6 text-[#0A5EB0] flex-shrink-0" />
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
                    Kelvin's work has led to the formation of local wheelchair
                    user groups that advocate for greater accessibility in
                    public spaces.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-[#0A5EB0] hover:text-blue-600 font-medium"
                  >
                    Read more <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Skills Development Program
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Through his workshops, Kelvin has trained over 50 young
                    engineers in accessible design principles and fabrication
                    techniques.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-[#0A5EB0] hover:text-blue-600 font-medium"
                  >
                    Read more <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Connect with Kelvin
              </h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Interested in learning more about Kelvin's work or the
                  Fowohodie Conversion Kit? Reach out to schedule a conversation
                  or demonstration.
                </p>
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenDialog();
                  }}
                  className="px-6 py-3 bg-[#0A5EB0] hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-200"
                >
                  Request a Meeting
                </Link>
                {/* Meeting Request Modal */}
                <dialog
                  ref={dialogRef}
                  className="justify-center items-center p-6 rounded-2xl shadow-xl backdrop:bg-black backdrop:opacity-60 w-full max-w-lg transition-all transform scale-95 open:scale-100"
                >
                  {/* Modal Header */}
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-3">
                      <Video className="w-6 h-6 text-[#0A5EB0]" />
                      <h2 className="text-2xl font-semibold text-gray-800">
                        Schedule a Zoom Meeting
                      </h2>
                    </div>
                    <button
                      onClick={handleCloseDialog}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                        onChange={handleInputChange}
                        value={formData.name}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                        onChange={handleInputChange}
                        value={formData.email}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Meeting Topic
                      </label>
                      <input
                        type="text"
                        name="topic"
                        required
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                        onChange={handleInputChange}
                        value={formData.topic}
                      />
                    </div>

                    {/* Date & Time Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                          <input
                            type="date"
                            name="date"
                            required
                            className="w-full pl-10 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                            onChange={handleInputChange}
                            value={formData.date}
                            min={new Date().toISOString().split("T")[0]}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Time
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                          <select
                            name="time"
                            required
                            className="w-full pl-10 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                            onChange={handleInputChange}
                            value={formData.time}
                          >
                            <option value="">Select time</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4 pt-4">
                      <button
                        type="button"
                        className="px-5 py-3 text-gray-500 hover:text-gray-700 transition-all rounded-lg"
                        onClick={handleCloseDialog}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-3 bg-[#0A5EB0] hover:bg-blue-600 text-white font-medium rounded-lg shadow-lg transition-all"
                      >
                        Schedule Meeting
                      </button>
                    </div>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInnovator;
