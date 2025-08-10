"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  TrendingUp,
  Users,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";

const projects = [
  {
    id: "defi-protocol",
    name: "DeFi Protocol",
    symbol: "DFP",
    description:
      "Revolutionary DeFi protocol bringing advanced yield farming and liquidity mining to Midnight blockchain.",
    logo: "D",
    banner: "/defi-protocol-banner.png",
    status: "live",
    saleType: "Fixed Sale",
    price: "0.05",
    raised: 2100000,
    target: 3000000,
    participants: 1247,
    startDate: "2024-01-15T10:00:00Z",
    endDate: "2024-02-15T10:00:00Z",
    category: "DeFi",
    tags: ["Yield Farming", "Liquidity Mining", "AMM"],
    website: "https://defiprotocol.com",
    twitter: "@defiprotocol",
    telegram: "@defiprotocol",
  },
  {
    id: "nft-marketplace",
    name: "NFT Marketplace",
    symbol: "NFTM",
    description:
      "Next-generation NFT marketplace with advanced trading features and creator tools.",
    logo: "N",
    banner: "/nft-marketplace-banner.png",
    status: "upcoming",
    saleType: "Batch Auction",
    price: "0.08",
    raised: 0,
    target: 5000000,
    participants: 3456,
    startDate: "2024-02-20T10:00:00Z",
    endDate: "2024-03-20T10:00:00Z",
    category: "NFT",
    tags: ["Marketplace", "Creator Tools", "Royalties"],
    website: "https://nftmarketplace.com",
    twitter: "@nftmarketplace",
    telegram: "@nftmarketplace",
  },
  {
    id: "gaming-token",
    name: "Gaming Token",
    symbol: "GAME",
    description:
      "Gaming ecosystem token powering play-to-earn mechanics and in-game economies.",
    logo: "G",
    banner: "/gaming-token-banner.png",
    status: "completed",
    saleType: "Overflow Sale",
    price: "0.02",
    raised: 1500000,
    target: 1500000,
    participants: 892,
    startDate: "2023-12-01T10:00:00Z",
    endDate: "2023-12-31T10:00:00Z",
    category: "Gaming",
    tags: ["Play-to-Earn", "Gaming", "Metaverse"],
    website: "https://gamingtoken.com",
    twitter: "@gamingtoken",
    telegram: "@gamingtoken",
  },
  {
    id: "ai-platform",
    name: "AI Platform",
    symbol: "AIP",
    description:
      "Decentralized AI platform enabling machine learning model training and inference.",
    logo: "A",
    banner: "/ai-platform-banner.png",
    status: "live",
    saleType: "Bonding Curve",
    price: "0.12",
    raised: 800000,
    target: 2000000,
    participants: 567,
    startDate: "2024-01-20T10:00:00Z",
    endDate: "2024-02-20T10:00:00Z",
    category: "AI",
    tags: ["Machine Learning", "AI", "Decentralized"],
    website: "https://aiplatform.com",
    twitter: "@aiplatform",
    telegram: "@aiplatform",
  },
  {
    id: "social-network",
    name: "Social Network",
    symbol: "SOCL",
    description:
      "Decentralized social network with privacy-first approach and user-owned data.",
    logo: "S",
    banner: "/placeholder-xqqwn.png",
    status: "upcoming",
    saleType: "Whitelist Sale",
    price: "0.06",
    raised: 0,
    target: 4000000,
    participants: 2134,
    startDate: "2024-03-01T10:00:00Z",
    endDate: "2024-03-31T10:00:00Z",
    category: "Social",
    tags: ["Privacy", "Social Media", "Decentralized"],
    website: "https://socialnetwork.com",
    twitter: "@socialnetwork",
    telegram: "@socialnetwork",
  },
  {
    id: "supply-chain",
    name: "Supply Chain",
    symbol: "SUPL",
    description:
      "Blockchain-based supply chain management with transparency and traceability.",
    logo: "S",
    banner: "/supply-chain-banner.png",
    status: "completed",
    saleType: "Hybrid Sale",
    price: "0.04",
    raised: 3200000,
    target: 3200000,
    participants: 1876,
    startDate: "2023-11-01T10:00:00Z",
    endDate: "2023-11-30T10:00:00Z",
    category: "Enterprise",
    tags: ["Supply Chain", "Transparency", "Enterprise"],
    website: "https://supplychain.com",
    twitter: "@supplychain",
    telegram: "@supplychain",
  },
];

const categories = [
  "All",
  "DeFi",
  "NFT",
  "Gaming",
  "AI",
  "Social",
  "Enterprise",
];
// const statuses = ["All", "Live", "Upcoming", "Completed"]
const saleTypes = [
  "All",
  "Fixed Sale",
  "Batch Auction",
  "Overflow Sale",
  "Bonding Curve",
  "Whitelist Sale",
  "Hybrid Sale",
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedSaleType, setSelectedSaleType] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.symbol.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "All" ||
      project.status === selectedStatus.toLowerCase();
    const matchesSaleType =
      selectedSaleType === "All" || project.saleType === selectedSaleType;

    return matchesSearch && matchesCategory && matchesStatus && matchesSaleType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "upcoming":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "completed":
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  const getProgressPercentage = (raised: number, target: number) => {
    return Math.min((raised / target) * 100, 100);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center cursor-pointer">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                All Projects
              </h1>
            </div>
          </Link>
          <Link href="/create-sale">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Launch Project
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discover Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore innovative projects launching on the Midnight blockchain
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-gray-100"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 justify-center items-center text-gray-300 text-sm">
              <p>Category</p>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full lg:w-48 bg-gray-800 border-gray-700 text-gray-100 ">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  {categories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category}
                      className="text-gray-100"
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sale Type Filter */}
            <div className="flex gap-2 justify-center items-center text-gray-300 text-sm">
              <p>Sale Type</p>
              <Select
                value={selectedSaleType}
                onValueChange={setSelectedSaleType}
              >
                <SelectTrigger className="w-full lg:w-48 bg-gray-800 border-gray-700 text-gray-100">
                  <SelectValue placeholder="Sale Type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  {saleTypes.map((type) => (
                    <SelectItem
                      key={type}
                      value={type}
                      className="text-gray-100"
                    >
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-gray-400">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Filters applied</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 group "
            >
              <div className="relative">
                <Link href={`/projects/${project.id}`}>
                  <img
                    src={project.banner || "/placeholder.svg"}
                    alt={`${project.name} banner`}
                    className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
                  />
                </Link>
                <div className="absolute top-4 left-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status.charAt(0).toUpperCase() +
                      project.status.slice(1)}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-gray-900/80 text-gray-200"
                  >
                    {project.saleType}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{project.logo}</span>
                  </div>
                  <div>
                    <CardTitle className="text-gray-100">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {project.symbol}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs border-gray-600 text-gray-400"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <div>
                      <p className="text-gray-400">Price</p>
                      <p className="text-gray-100">{project.price} DUST</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <div>
                      <p className="text-gray-400">Participants</p>
                      <p className="text-gray-100">
                        {project.participants.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Link href={`/projects/${project.id}`}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              No projects found
            </h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedStatus("All");
                setSelectedSaleType("All");
              }}
              variant="outline"
              className="border-gray-600 hover:bg-gray-800"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
