import { useState, useMemo, useEffect } from "react";
import {
  Search,
  Grid,
  List,
  X,
  Filter,
  ChevronDown,
  Tag,
  Heart,
  ShoppingCart,
  Star,
  ExternalLink,
} from "lucide-react";
import Feature1 from "../../../assets/about2.jpg";
import Feature2 from "../../../assets/feat1.jpg";
import Feature3 from "../../../assets/product1.jpg";
import Feature4 from "../../../assets/feat2.jpg";
import Feature5 from "../../../assets/product3.jpg";
import Feature6 from "../../../assets/feat3.jpg";
import Feature7 from "../../../assets/product6.jpg";
import Feature8 from "../../../assets/feat4.jpg";

const ProductCatalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortType, setSortType] = useState("priceAsc");
  const [priceRange, setPriceRange] = useState(6000);
  const [viewMode, setViewMode] = useState("grid");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeProductId, setActiveProductId] = useState(null);

  // Track scroll position for sticky header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const allProducts = useMemo(
    () => [
      {
        id: 1,
        title: "Fowohodie Conversion Kit",
        description:
          "A locally designed mobility solution to help individuals with physical disabilities gain independence. It can be easily installed on existing wheelchairs.",
        imageUrl: Feature1,
        price: "3500",
        category: "Mobility",
        rating: 4.7,
        reviews: 42,
        stock: 12,
        tags: ["wheelchair", "mobility", "accessibility"],
        paystackLink:
          "https://paystack.com/buy/fowohodie-conversion-kit-axkycb",
      },
      {
        id: 2,
        title: "Accessible Design Workshops",
        description:
          "Workshops aimed at training young engineers to design accessible technologies that improve the lives of people with disabilities.",
        imageUrl: Feature2,
        price: "1800",
        category: "Education",
        rating: 4.9,
        reviews: 28,
        stock: 5,
        tags: ["training", "education", "design"],
        paystackLink:
          "https://paystack.com/buy/fowohodie-conversion-kit-axkycb",
      },
      {
        id: 3,
        title: "Smart Mobility Device",
        description:
          "A wearable, AI-powered device to assist with mobility in urban spaces. It offers real-time guidance and obstacle detection.",
        imageUrl: Feature3,
        price: "5900",
        category: "Technology",
        rating: 4.5,
        reviews: 36,
        stock: 8,
        tags: ["AI", "wearable", "mobility"],
        paystackLink: "https://paystack.com/buy/smart-mobility-device-niddwp",
      },
      {
        id: 4,
        title: "Community Support Groups",
        description:
          "Local communities formed to support individuals with disabilities by advocating for accessible public spaces and providing peer support.",
        imageUrl: Feature4,
        price: "Free",
        category: "Community",
        rating: 4.8,
        reviews: 59,
        stock: null,
        tags: ["community", "support", "advocacy"],
        paystackLink:
          "https://paystack.com/buy/voice-controlled-home-assistant-togywn",
      },
      {
        id: 5,
        title: "Adaptive Bicycle Attachment",
        description:
          "A specialized attachment that transforms standard wheelchairs into hand-pedaled bicycles, providing recreation and exercise opportunities.",
        imageUrl: Feature5,
        price: "3500",
        category: "Mobility",
        rating: 4.6,
        reviews: 31,
        stock: 7,
        tags: ["bicycle", "exercise", "recreation"],
        paystackLink:
          "https://paystack.com/buy/adaptive-bicycle-attachment-hfuymh",
      },
      {
        id: 6,
        title: "Inclusive Design Certificate",
        description:
          "A comprehensive online course that teaches the principles of inclusive design and how to create products that are accessible to everyone.",
        imageUrl: Feature6,
        price: "1800",
        category: "Education",
        rating: 4.7,
        reviews: 24,
        stock: 15,
        tags: ["certificate", "online", "inclusive"],
        paystackLink:
          "https://paystack.com/buy/fowohodie-conversion-kit-axkycb",
      },
      {
        id: 7,
        title: "Voice-Controlled Home Assistant",
        description:
          "A specialized home assistant with enhanced voice recognition designed specifically for users with mobility or visual impairments.",
        imageUrl: Feature7,
        price: "5900",
        category: "Technology",
        rating: 4.4,
        reviews: 47,
        stock: 4,
        tags: ["voice", "smart home", "assistant"],
        paystackLink:
          "https://paystack.com/buy/voice-controlled-home-assistant-togywn",
      },
      {
        id: 8,
        title: "Peer Mentorship Program",
        description:
          "A structured mentorship program connecting individuals with similar disabilities to share experiences, advice, and support.",
        imageUrl: Feature8,
        price: "Free",
        category: "Community",
        rating: 4.9,
        reviews: 63,
        stock: null,
        tags: ["mentorship", "peer", "support"],
        paystackLink: "https://paystack.com/buy/smart-mobility-device-niddwp",
      },
    ],
    []
  );

  const categories = useMemo(
    () => [
      { name: "All", count: allProducts.length },
      ...Object.entries(
        allProducts.reduce((acc, product) => {
          acc[product.category] = (acc[product.category] || 0) + 1;
          return acc;
        }, {})
      ).map(([name, count]) => ({ name, count })),
    ],
    [allProducts]
  );

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice =
        product.price === "Free" || Number(product.price) <= priceRange;
      const matchesSearch =
        searchQuery === "" ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.tags &&
          product.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          ));

      return matchesCategory && matchesPrice && matchesSearch;
    });

    return filtered.sort((a, b) => {
      if (a.price === "Free") return sortType === "priceAsc" ? -1 : 1;
      if (b.price === "Free") return sortType === "priceAsc" ? 1 : -1;

      switch (sortType) {
        case "priceAsc":
          return Number(a.price) - Number(b.price);
        case "priceDesc":
          return Number(b.price) - Number(a.price);
        case "nameAsc":
          return a.title.localeCompare(b.title);
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }, [allProducts, selectedCategory, sortType, priceRange, searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Redirect to payment page
  const handleBuyNow = (paystackLink) => {
    if (paystackLink) {
      window.open(paystackLink, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 pt-20 pb-12">
      <div className="container mx-auto px-4 py-8">
        {/* Mobile Filters Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="w-full flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-100"
          >
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-blue-600" />
              <span className="font-medium text-slate-800">
                Filters & Search
              </span>
            </div>
            <ChevronDown
              size={18}
              className={`text-slate-400 transition-transform ${
                mobileFiltersOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <div className="flex gap-8 relative">
          {/* Sticky Sidebar */}
          <div
            className={`${
              mobileFiltersOpen ? "block" : "hidden"
            } md:block md:w-80 flex-shrink-0 transition-all duration-300`}
          >
            <div className="sticky top-24 w-full md:w-80 bg-white p-6 rounded-xl shadow-lg border border-slate-100 overflow-y-auto max-h-[calc(100vh-8rem)] backdrop-blur-sm bg-white/90">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-slate-800">
                  FILTER BY
                </h2>
                <button
                  className="md:hidden text-slate-400 hover:text-slate-600"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search with Form */}
              <form onSubmit={handleSearch} className="relative mb-6 group">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search product..."
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    {searchInput && (
                      <button
                        type="button"
                        onClick={() => {
                          setSearchInput("");
                          setSearchQuery("");
                        }}
                        className="absolute right-3 top-3"
                      >
                        <X className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                      </button>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center shadow-sm hover:shadow-md"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </form>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-slate-800">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full text-left flex justify-between items-center py-2 px-3 rounded-lg transition-all ${
                          selectedCategory === category.name
                            ? "bg-blue-100 text-blue-700 font-medium shadow-sm"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <span>{category.name}</span>
                        <span
                          className={`text-sm ${
                            selectedCategory === category.name
                              ? "bg-blue-600 text-white px-2 py-0.5 rounded-full"
                              : "text-slate-400"
                          }`}
                        >
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-4 text-slate-800">
                  Price Range
                </h3>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-slate-600 mb-2">
                    <span>GH₵0</span>
                    <span>GH₵{priceRange.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="6000"
                    step="100"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>
                <div className="flex justify-between gap-2">
                  <div className="px-4 py-2 bg-blue-50 rounded-lg flex-1 text-center">
                    <p className="text-xs text-slate-500">Min</p>
                    <p className="font-medium text-slate-700">GH₵0</p>
                  </div>
                  <div className="px-4 py-2 bg-blue-50 rounded-lg flex-1 text-center">
                    <p className="text-xs text-slate-500">Max</p>
                    <p className="font-medium text-slate-700">
                      GH₵{priceRange.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reset Filters Button */}
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setPriceRange(6000);
                  setSearchInput("");
                  setSearchQuery("");
                }}
                className="w-full py-2.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors mt-4"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 md:ml-4">
            {/* Header */}
            <div
              className={`flex flex-col sm:flex-row justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm sticky top-20 z-10 transition-all ${
                isScrolled ? "shadow-md" : ""
              }`}
            >
              <div className="text-slate-600 font-medium mb-3 sm:mb-0">
                <span className="text-blue-600 font-bold">
                  {filteredAndSortedProducts.length}
                </span>{" "}
                Products found
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "grid"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "list"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <List size={20} />
                  </button>
                </div>
                <select
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value)}
                  className="p-2 border border-slate-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="priceAsc">Price (Lowest)</option>
                  <option value="priceDesc">Price (Highest)</option>
                  <option value="nameAsc">Name (A-Z)</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div
                className={`grid ${
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "grid-cols-1 gap-4"
                }`}
              >
                {filteredAndSortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-lg group ${
                      viewMode === "list" ? "flex" : ""
                    } ${
                      activeProductId === product.id
                        ? "ring-2 ring-blue-500"
                        : ""
                    }`}
                    onMouseEnter={() => setActiveProductId(product.id)}
                    onMouseLeave={() => setActiveProductId(null)}
                  >
                    <div
                      className={`relative ${
                        viewMode === "list" ? "w-48 flex-shrink-0" : ""
                      }`}
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className={`object-cover h-48 ${
                          viewMode === "list" ? "w-48" : "w-full"
                        } transition-transform duration-500 group-hover:scale-105`}
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleFavorite(product.id);
                        }}
                        className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-all"
                      >
                        <Heart
                          size={18}
                          className={
                            favorites.includes(product.id)
                              ? "fill-red-500 text-red-500"
                              : "text-slate-400"
                          }
                        />
                      </button>
                      <div className="absolute top-3 left-3">
                        <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={`${
                                i < Math.floor(product.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-slate-300"
                              } ${
                                i === Math.floor(product.rating) &&
                                product.rating % 1 > 0
                                  ? "fill-yellow-400 text-yellow-400 opacity-60"
                                  : ""
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-slate-500">
                          ({product.reviews})
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">
                        {product.title}
                      </h2>
                      <p
                        className={`text-slate-600 text-sm mb-4 ${
                          viewMode === "grid" ? "line-clamp-2" : ""
                        }`}
                      >
                        {product.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto mb-4">
                        {product.tags &&
                          product.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
                            >
                              <Tag size={12} className="mr-1" />
                              {tag}
                            </span>
                          ))}
                      </div>

                      <div className="flex justify-between items-center mt-auto">
                        <div>
                          <span className="text-xl font-bold text-blue-600">
                            {product.price === "Free"
                              ? "Free"
                              : `GH₵${Number(product.price).toLocaleString()}`}
                          </span>
                          {product.stock !== null && (
                            <div className="text-xs text-slate-500 mt-1">
                              {product.stock > 10 ? (
                                <span className="text-green-600">In Stock</span>
                              ) : product.stock > 0 ? (
                                <span className="text-orange-500">
                                  Only {product.stock} left
                                </span>
                              ) : (
                                <span className="text-red-500">
                                  Out of Stock
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                        {product.paystackLink ? (
                          <button
                            onClick={() => handleBuyNow(product.paystackLink)}
                            className="px-4 py-2 bg-[#0A5EB0] text-white rounded-lg hover:bg-blues-700 transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                          >
                            <ExternalLink size={16} />
                            Buy Now
                          </button>
                        ) : (
                          <button className="px-4 py-2 bg-[#0A5EB0] text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md flex items-center gap-2">
                            {product.price === "Free" ? (
                              <>Get Started</>
                            ) : (
                              <>
                                <ShoppingCart size={16} />
                                Add to Cart
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="flex justify-center mb-4">
                  <Search size={48} className="text-slate-300" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  No Products Found
                </h3>
                <p className="text-slate-600">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setPriceRange(6000);
                    setSearchInput("");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
