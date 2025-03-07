import { useEffect, useState, useRef } from "react";
import ViewAllProductsButton from "./ViewAllProductsButton";
import Product1 from "../../../assets/about1.jpg";
import Product2 from "../../../assets/about.jpg";
import Product3 from "../../../assets/feat2.jpg";
import Product4 from "../../../assets/product6.jpg";
import { ExternalLink, Star, MessageSquare, Tag } from "lucide-react";

const Showcase = () => {
  const showcaseItems = [
    {
      title: "Fowohodie Conversion Kit",
      description:
        "A locally designed mobility solution to help individuals with physical disabilities gain independence. It can be easily installed on existing wheelchairs.",
      imageUrl: Product1,
      price: "GH₵3500",
      badge: "Best Seller",
      features: [
        "Easy Installation",
        "Lightweight Design",
        "Durable Materials",
        "Local Support",
      ],
      paystackLink: "https://paystack.com/buy/fowohodie-conversion-kit-axkycb",
      // Added new properties
      tags: ["Mobility", "Wheelchair", "Conversion", "Independence"],
      rating: 4.8,
      reviewCount: 42,
      reviews: [
        {
          user: "Joseph A.",
          rating: 5,
          comment:
            "Changed my life! I can now travel independently around my neighborhood.",
          date: "2025-02-15",
        },
        {
          user: "Akosua M.",
          rating: 5,
          comment:
            "Easy to install and very sturdy. The local support team is excellent.",
          date: "2025-01-23",
        },
        {
          user: "Kofi D.",
          rating: 4,
          comment:
            "Great product, but installation guide could be clearer. Works perfectly though!",
          date: "2025-01-10",
        },
      ],
    },
    {
      title: "Accessible Design Workshops",
      description:
        "Workshops aimed at training young engineers to design accessible technologies that improve the lives of people with disabilities.",
      imageUrl: Product2,
      price: "GH₵1800",
      badge: "New",
      features: [
        "Hands-on Training",
        "Expert Instructors",
        "Certificate Provided",
        "Materials Included",
      ],
      paystackLink:
        "https://paystack.com/buy/adaptive-bicycle-attachment-hfuymh",
      // Added new properties
      tags: ["Workshop", "Training", "Certification", "Accessibility"],
      rating: 4.6,
      reviewCount: 18,
      reviews: [
        {
          user: "Yaw B.",
          rating: 5,
          comment:
            "Excellent workshop! The instructors are very knowledgeable and supportive.",
          date: "2025-02-28",
        },
        {
          user: "Abena K.",
          rating: 4,
          comment:
            "Great content and hands-on experience. Would recommend more time for practice.",
          date: "2025-02-12",
        },
        {
          user: "Daniel O.",
          rating: 5,
          comment:
            "This workshop gave me the skills to start my own accessibility project. Worth every cedi!",
          date: "2025-01-30",
        },
      ],
    },
    {
      title: "Smart Mobility Device",
      description:
        "A wearable, AI-powered device to assist with mobility in urban spaces. It offers real-time guidance and obstacle detection.",
      imageUrl: Product3,
      price: "GH₵5900",
      badge: "Premium",
      features: [
        "AI-Powered",
        "Water Resistant",
        "10hr Battery Life",
        "Voice Controls",
      ],
      paystackLink: "https://paystack.com/buy/smart-mobility-device-niddwp",
      // Added new properties
      tags: ["AI", "Smart Device", "Navigation", "Wearable"],
      rating: 4.9,
      reviewCount: 27,
      reviews: [
        {
          user: "Ama P.",
          rating: 5,
          comment:
            "The obstacle detection is amazing! I feel so much safer navigating the city now.",
          date: "2025-03-01",
        },
        {
          user: "Emmanuel T.",
          rating: 5,
          comment:
            "Battery life is excellent and the voice controls are very intuitive.",
          date: "2025-02-22",
        },
        {
          user: "Grace L.",
          rating: 4,
          comment:
            "Great product but a bit expensive. Still, the features are worth it.",
          date: "2025-02-10",
        },
      ],
    },
    {
      title: "Community Support Groups",
      description:
        "Local communities formed to support individuals with disabilities by advocating for accessible public spaces and providing peer support.",
      imageUrl: Product4,
      price: "Free",
      badge: "Community",
      features: [
        "Weekly Meetings",
        "Resource Sharing",
        "Advocacy Training",
        "Peer Mentorship",
      ],
      paystackLink:
        "https://paystack.com/buy/voice-controlled-home-assistant-togywn",
      // Added new properties
      tags: ["Community", "Support", "Advocacy", "Free"],
      rating: 4.7,
      reviewCount: 35,
      reviews: [
        {
          user: "Kwame S.",
          rating: 5,
          comment:
            "The sense of community is amazing. I've met so many supportive people.",
          date: "2025-02-25",
        },
        {
          user: "Fatima R.",
          rating: 4,
          comment:
            "Great resources and advocacy training. I've learned so much!",
          date: "2025-02-15",
        },
        {
          user: "John M.",
          rating: 5,
          comment: "The peer mentorship program has been life-changing for me.",
          date: "2025-01-20",
        },
      ],
    },
  ];

  // Animation trigger state
  const [animateItems, setAnimateItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(
    Array(showcaseItems.length).fill(false)
  );
  // New state for reviews tab in quick view
  const [activeTab, setActiveTab] = useState("features");
  // New state for new review form
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: "",
    name: "",
  });
  const intervalRef = useRef(null);

  useEffect(() => {
    // Trigger animation after component mount
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 300);

    // Auto-rotate featured items
    intervalRef.current = setInterval(() => {
      if (!isHovering.some((item) => item)) {
        setActiveIndex((prev) => (prev + 1) % showcaseItems.length);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(intervalRef.current);
    };
  }, [isHovering]);

  const handleQuickView = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
    setActiveTab("features"); // Reset tab when opening quick view
  };

  const handleHover = (index, isHovering) => {
    setIsHovering((prev) => {
      const newState = [...prev];
      newState[index] = isHovering;
      return newState;
    });
  };

  // Function to handle redirect to Paystack
  const handlePaystackRedirect = (paystackLink) => {
    window.open(paystackLink, "_blank");
  };

  // Function to render star rating
  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            size={16}
            className="text-yellow-500 fill-yellow-500"
          />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star
              size={16}
              className="text-yellow-500 fill-yellow-500"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            />
            <Star
              size={16}
              className="text-yellow-500 absolute top-0 left-0"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            />
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} size={16} className="text-yellow-500" />
        ))}
      </div>
    );
  };

  // Function to handle new review submission
  const handleReviewSubmit = (e, index) => {
    e.preventDefault();

    // Create new review object
    const review = {
      user: newReview.name || "Anonymous",
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split("T")[0],
    };

    // Update showcaseItems with new review
    const updatedItems = [...showcaseItems];
    updatedItems[index].reviews.unshift(review);
    updatedItems[index].reviewCount += 1;

    // Calculate new average rating
    const totalRating = updatedItems[index].reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    updatedItems[index].rating = parseFloat(
      (totalRating / updatedItems[index].reviews.length).toFixed(1)
    );

    // Reset form
    setNewReview({ rating: 5, comment: "", name: "" });

    // Update state
    // Note: In a real application, you would typically send this to a server
    // and then update the state with the response
  };

  return (
    <section
      id="products"
      className="bg-gradient-to-b from-gray-50 to-white py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      {/* Background decorative elements - changed to blue/black */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-black blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-blue-400 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
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
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform ${
                animateItems
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${
                activeIndex === index
                  ? "ring-1 ring-offset-1 ring-blue-500"
                  : ""
              } relative group`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.badge && (
                  <div
                    className={`absolute top-3 left-3 ${
                      item.price === "Free"
                        ? "bg-black"
                        : "bg-gradient-to-r from-blue-600 to-blue-800"
                    } px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-md`}
                  >
                    {item.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleQuickView(index)}
                    className="bg-white text-gray-900 py-3 px-6 rounded-full font-medium transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-lg hover:shadow-xl hover:bg-gray-50"
                  >
                    Quick View
                  </button>
                </div>
              </div>

              <div className="p-6 sm:p-8 relative">
                {/* Curved accent at top of content - changed to blue */}
                <div
                  className={`absolute -top-5 left-0 right-0 h-5 ${
                    item.price === "Free"
                      ? "bg-black"
                      : "bg-gradient-to-r from-[#0A5EB0] to-blue-800"
                  } rounded-b-full`}
                ></div>

                {/* Tags display */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800"
                    >
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>

                {/* Ratings display */}
                <div className="flex items-center gap-2 mb-3">
                  {renderStarRating(item.rating)}
                  <span className="text-sm text-gray-600">
                    {item.rating} ({item.reviewCount})
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 line-through mb-1">
                      {item.price === "Free"
                        ? ""
                        : `GH₵${
                            parseInt(item.price.replace(/[^0-9]/g, "")) * 1.2
                          }`}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {item.price}
                    </span>
                  </div>
                  <button
                    onClick={() => handlePaystackRedirect(item.paystackLink)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      item.price === "Free"
                        ? "bg-black text-white hover:bg-gray-800 hover:shadow-lg hover:scale-105 focus:ring-gray-500"
                        : "bg-[#0A5EB0] text-white hover:bg-[#0A5EB0] hover:shadow-lg hover:scale-105 focus:ring-blue-900"
                    }`}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    {item.price === "Free" ? "Get Started" : "Buy Now"}
                  </button>
                </div>
              </div>

              {/* Quick View Panel */}
              {selectedItem === index && (
                <div className="absolute inset-0 bg-white z-10 p-6 overflow-y-auto transition-all duration-300 transform translate-y-0">
                  <button
                    className="absolute top-4 right-4 bg-gray-100 rounded-full p-2 hover:bg-gray-200"
                    onClick={() => setSelectedItem(null)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Product header */}
                  <div className="flex flex-col mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>

                    {/* Tags in quick view */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800"
                        >
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Rating in quick view */}
                    <div className="flex items-center gap-2 mb-3">
                      {renderStarRating(item.rating)}
                      <span className="text-sm text-gray-600">
                        {item.rating} ({item.reviewCount} reviews)
                      </span>
                    </div>

                    <div
                      className={`inline-block py-1 px-3 rounded-full ${
                        item.price === "Free"
                          ? "bg-black"
                          : "bg-gradient-to-r from-blue-600 to-blue-800"
                      } text-white text-sm font-medium mb-4`}
                    >
                      {item.badge}
                    </div>
                  </div>

                  <div className="h-40 rounded-xl overflow-hidden mb-6">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Tabs for details/reviews */}
                  <div className="mb-6 border-b">
                    <div className="flex">
                      <button
                        className={`py-2 px-4 font-medium border-b-2 transition-colors ${
                          activeTab === "features"
                            ? "border-blue-600 text-blue-600"
                            : "border-transparent text-gray-500 hover:text-gray-700"
                        }`}
                        onClick={() => setActiveTab("features")}
                      >
                        Features
                      </button>
                      <button
                        className={`py-2 px-4 font-medium border-b-2 transition-colors flex items-center ${
                          activeTab === "reviews"
                            ? "border-blue-600 text-blue-600"
                            : "border-transparent text-gray-500 hover:text-gray-700"
                        }`}
                        onClick={() => setActiveTab("reviews")}
                      >
                        Reviews
                        <span className="ml-2 bg-gray-100 text-gray-700 rounded-full px-2 py-0.5 text-xs">
                          {item.reviewCount}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Tab content */}
                  {activeTab === "features" ? (
                    <>
                      <p className="text-gray-600 mb-6">{item.description}</p>

                      {/* Features list */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Key Features
                        </h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {item.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <svg
                                className="h-4 w-4 mr-2 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-6">
                      {/* Add review form */}
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Write a Review
                        </h4>
                        <form onSubmit={(e) => handleReviewSubmit(e, index)}>
                          <div className="mb-4">
                            <label className="block text-sm text-gray-600 mb-1">
                              Your Name
                            </label>
                            <input
                              type="text"
                              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                              value={newReview.name}
                              onChange={(e) =>
                                setNewReview({
                                  ...newReview,
                                  name: e.target.value,
                                })
                              }
                              placeholder="Your name (optional)"
                            />
                          </div>

                          <div className="mb-4">
                            <label className="block text-sm text-gray-600 mb-1">
                              Rating
                            </label>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                  key={star}
                                  type="button"
                                  onClick={() =>
                                    setNewReview({ ...newReview, rating: star })
                                  }
                                  className="focus:outline-none"
                                >
                                  <Star
                                    size={24}
                                    className={`${
                                      newReview.rating >= star
                                        ? "text-yellow-500 fill-yellow-500"
                                        : "text-gray-300"
                                    }`}
                                  />
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="mb-4">
                            <label className="block text-sm text-gray-600 mb-1">
                              Your Review
                            </label>
                            <textarea
                              className="w-full p-2 border border-gray-300 rounded-lg h-24 focus:ring-blue-500 focus:border-blue-500"
                              value={newReview.comment}
                              onChange={(e) =>
                                setNewReview({
                                  ...newReview,
                                  comment: e.target.value,
                                })
                              }
                              placeholder="Share your experience with this product"
                              required
                            ></textarea>
                          </div>

                          <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                          >
                            Submit Review
                          </button>
                        </form>
                      </div>

                      {/* Reviews list */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <MessageSquare size={16} className="mr-2" />
                          Customer Reviews ({item.reviewCount})
                        </h4>

                        {item.reviews.length === 0 ? (
                          <p className="text-gray-500 italic">
                            No reviews yet. Be the first to review!
                          </p>
                        ) : (
                          <div className="space-y-4">
                            {item.reviews.map((review, reviewIdx) => (
                              <div
                                key={reviewIdx}
                                className="border-b border-gray-100 pb-4"
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <span className="font-medium text-gray-800">
                                      {review.user}
                                    </span>
                                    <div className="flex items-center mt-1">
                                      {[...Array(5)].map((_, i) => (
                                        <Star
                                          key={i}
                                          size={14}
                                          className={`${
                                            i < review.rating
                                              ? "text-yellow-500 fill-yellow-500"
                                              : "text-gray-300"
                                          }`}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                  <span className="text-xs text-gray-500">
                                    {review.date}
                                  </span>
                                </div>
                                <p className="text-gray-600 text-sm">
                                  {review.comment}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col space-y-4 mt-6">
                    <div className="flex items-center justify-between py-2 border-t border-gray-100">
                      <span className="text-gray-600">Price</span>
                      <div className="flex items-end flex-col">
                        <span className="text-sm text-gray-500 line-through">
                          {item.price === "Free"
                            ? ""
                            : `GH₵${
                                parseInt(item.price.replace(/[^0-9]/g, "")) *
                                1.2
                              }`}
                        </span>
                        <span className="text-xl font-bold">{item.price}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-t border-gray-100">
                      <span className="text-gray-600">Availability</span>
                      <span className="text-blue-600 font-medium">
                        In Stock
                      </span>
                    </div>

                    {/* Quantity selector */}
                    {item.price !== "Free" && (
                      <div className="flex items-center justify-between py-2 border-t border-gray-100">
                        <span className="text-gray-600">Quantity</span>
                        <div className="flex items-center border rounded-lg overflow-hidden">
                          <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">
                            −
                          </button>
                          <span className="px-4 py-1">1</span>
                          <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">
                            +
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3 pt-3">
                      <button
                        onClick={() =>
                          handlePaystackRedirect(item.paystackLink)
                        }
                        className={`flex-1 py-3 rounded-full font-medium transition-all duration-300 ${
                          item.price === "Free"
                            ? "bg-black text-white hover:bg-gray-800"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                      >
                        {item.price === "Free" ? "Get Started" : "Buy Now"}
                      </button>
                      <button className="flex-1 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                        Save for Later
                      </button>
                    </div>
                  </div>
                </div>
              )}
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
