import React, { useState, useMemo } from "react";
import { Search, Grid, List, X } from "lucide-react";
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
      },
      {
        id: 2,
        title: "Accessible Design Workshops",
        description:
          "Workshops aimed at training young engineers to design accessible technologies that improve the lives of people with disabilities.",
        imageUrl: Feature2,
        price: "1800",
        category: "Education",
      },
      {
        id: 3,
        title: "Smart Mobility Device",
        description:
          "A wearable, AI-powered device to assist with mobility in urban spaces. It offers real-time guidance and obstacle detection.",
        imageUrl: Feature3,
        price: "5900",
        category: "Technology",
      },
      {
        id: 4,
        title: "Community Support Groups",
        description:
          "Local communities formed to support individuals with disabilities by advocating for accessible public spaces and providing peer support.",
        imageUrl: Feature4,
        price: "Free",
        category: "Community",
      },
      {
        id: 5,
        title: "Fowohodie Conversion Kit",
        description:
          "A locally designed mobility solution to help individuals with physical disabilities gain independence. It can be easily installed on existing wheelchairs.",
        imageUrl: Feature5,
        price: "3500",
        category: "Mobility",
      },
      {
        id: 6,
        title: "Accessible Design Workshops",
        description:
          "Workshops aimed at training young engineers to design accessible technologies that improve the lives of people with disabilities.",
        imageUrl: Feature6,
        price: "1800",
        category: "Education",
      },
      {
        id: 7,
        title: "Smart Mobility Device",
        description:
          "A wearable, AI-powered device to assist with mobility in urban spaces. It offers real-time guidance and obstacle detection.",
        imageUrl: Feature7,
        price: "5900",
        category: "Technology",
      },
      {
        id: 8,
        title: "Community Support Groups",
        description:
          "Local communities formed to support individuals with disabilities by advocating for accessible public spaces and providing peer support.",
        imageUrl: Feature8,
        price: "Free",
        category: "Community",
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
      const matchesPrice = product.price <= priceRange;
      const matchesSearch =
        searchQuery === "" ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesPrice && matchesSearch;
    });

    return filtered.sort((a, b) => {
      switch (sortType) {
        case "priceAsc":
          return a.price - b.price;
        case "priceDesc":
          return b.price - a.price;
        case "nameAsc":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  }, [allProducts, selectedCategory, sortType, priceRange, searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8 relative">
          {/* Sticky Sidebar */}
          <div className="hidden md:block w-80 flex-shrink-0">
            <div className="sticky top-24 w-80 bg-white p-6 rounded-xl shadow-lg border border-slate-100 overflow-y-auto max-h-[calc(100vh-8rem)]">
              <h2 className="text-xl font-semibold mb-6 text-slate-800">
                FILTER BY
              </h2>

              {/* Search with Form */}
              <form onSubmit={handleSearch} className="relative mb-6">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search product..."
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
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
                    className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center shadow-sm"
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
                        className={`w-full text-left flex justify-between items-center py-2 px-3 rounded-lg transition-colors ${
                          selectedCategory === category.name
                            ? "bg-[#0A5EB0] text-gray-700 font-medium"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-slate-400">
                          ({category.count})
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
                <input
                  type="range"
                  min="0"
                  max="6000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-sm text-slate-600 mt-3">
                  <span>GH₵0</span>
                  <span>GH₵{priceRange.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 md:ml-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="text-slate-600 font-medium">
                {filteredAndSortedProducts.length} Products found
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "grid"
                        ? "bg-white text-[#0A5EB0] shadow-sm"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "list"
                        ? "bg-white text-[#0A5EB0] shadow-sm"
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
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div
              className={`grid ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "grid-cols-1 gap-4"
              }`}
            >
              {filteredAndSortedProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 transition-transform hover:scale-[1.02] ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className={`object-cover ${
                      viewMode === "list" ? "w-48 h-48" : "w-full h-48"
                    }`}
                  />
                  <div className="p-5">
                    <h2 className="text-xl font-semibold mb-2 text-slate-800">
                      {product.title}
                    </h2>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-[#0A5EB0]">
                        {product.price === "Free"
                          ? "Free"
                          : `GH₵${Number(product.price).toLocaleString()}`}
                      </span>
                      <button className="px-4 py-2 bg-[#0A5EB0] text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md">
                        {product.price === "Free"
                          ? "Get Started"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
