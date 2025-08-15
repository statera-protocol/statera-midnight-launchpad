import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Search,
  Filter,
  TrendingUp,
  Users,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { Footer } from "../components/footer";

import { IMAGE, saleTypesList, statuses } from "../lib/assets";
import { useApp } from "../hooks/useApp";

export default function Projects() {
  const { contractState } = useApp();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedSaleType, setSelectedSaleType] = useState("All");

  const project_names: string[] =
    contractState?.fixed_sales.forEach((state, idx) => {
      `Sample Project ${idx + 1}`;
    }) || [];

  const filteredProjects = contractState?.fixed_sales.filter((project) => {
    let matchesSearch = project_names.map((name) => {
      const is_true =
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        name.toLowerCase().includes(searchTerm.toLowerCase());

      return is_true;
    });

    const matchesStatus =
      selectedStatus === "All" ||
      project.status === selectedStatus.toLowerCase();
    const matchesSaleType =
      selectedSaleType === "All" || project.sale_type === selectedSaleType;

    return matchesSearch && matchesStatus && matchesSaleType;
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

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50 px-6">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center cursor-pointer">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              All Projects
            </h1>
          </div>
          <Link to="/create-sale">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Launch Project
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-8">
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

            {/* Status Filter */}
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full lg:w-48 bg-gray-800 border-gray-700 text-gray-100">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                {statuses.map((status) => (
                  <SelectItem
                    key={status}
                    value={status}
                    className="text-gray-100"
                  >
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sale Type Filter */}
            <Select
              value={selectedSaleType}
              onValueChange={setSelectedSaleType}
            >
              <SelectTrigger className="w-full lg:w-48 bg-gray-800 border-gray-700 text-gray-100">
                <SelectValue placeholder="Sale Type" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                {saleTypesList.map((type) => (
                  <SelectItem key={type} value={type} className="text-gray-100">
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          {/* Results Count - Only show when contractState is loaded */}
          {contractState && (
            <div className="flex items-center justify-between">
              <p className="text-gray-400">
                Showing {filteredProjects?.length} of{" "}
                {contractState?.fixed_sales.length} projects
              </p>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Filters applied</span>
              </div>
            </div>
          )}

          {/* Empty State - Only show when contractState is loaded and no projects match filters */}
          {contractState && filteredProjects?.length === 0 && (
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
                  setSelectedStatus("All");
                  setSelectedSaleType("All");
                }}
                variant="outline"
                className="bg-gray-600 !text-white border-gray-600 hover:bg-gray-800"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Loading Projects Grid Skeleton */}
        {/* Loading Projects Grid Skeleton - Only show when contractState is being fetched */}
        {!contractState && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Card
                key={idx}
                className="bg-gray-800/50 border-gray-700 !text-left flex flex-col animate-pulse"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gray-700/50 rounded-t-lg" />
                  <div className="absolute top-4 left-4">
                    <div className="h-6 w-16 bg-gray-600/50 rounded-full" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="h-6 w-16 bg-gray-600/50 rounded-full" />
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-600/50 rounded-full" />
                    <div>
                      <div className="h-4 w-32 bg-gray-600/50 rounded mb-2" />
                      <div className="h-3 w-20 bg-gray-600/50 rounded" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 flex-1">
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-gray-600/50 rounded" />
                    <div className="h-3 w-5/6 bg-gray-600/50 rounded" />
                  </div>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div className="h-3 w-16 bg-gray-600/50 rounded" />
                      <div className="h-3 w-24 bg-gray-600/50 rounded" />
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div className="bg-gray-500 h-2 rounded-full w-2/3" />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 bg-gray-600/50 rounded" />
                      <div>
                        <div className="h-3 w-12 bg-gray-600/50 rounded mb-1" />
                        <div className="h-3 w-20 bg-gray-600/50 rounded" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 bg-gray-600/50 rounded" />
                      <div>
                        <div className="h-3 w-16 bg-gray-600/50 rounded mb-1" />
                        <div className="h-3 w-12 bg-gray-600/50 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="h-10 w-full bg-gray-600/50 rounded-md" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        {/* Projects Grid - Only show when contractState is loaded */}
        {contractState && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects?.map((project, idx) => (
              <Card
                key={project.key}
                className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 group !text-left flex flex-col"
              >
                <div className="relative">
                  <img
                    src={IMAGE}
                    alt="Sample Project Banner"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
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
                      {project.sale_type}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold relative">TG</span>
                    </div>
                    <div>
                      <CardTitle className="text-gray-100">
                        {project_names[idx + 1] || "Sample Project"}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {project.token_symbol.toUpperCase()}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 flex-1">
                  <p className="text-gray-300 text-sm line-clamp-2">
                    Blockchain-based supply chain management with transparency
                    and traceability.
                  </p>

                  {/* Progress */}
                  {project.status === "live" && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-gray-100">
                          {project.total_amount_sold} /{" "}
                          {project.total_amount_for_sale}{" "}
                          {project.token_symbol.toUpperCase()}{" "}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${getProgressPercentage(project.total_amount_sold, project.total_amount_for_sale)}%`,
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Stats */}
                  <div className="flex gap-4 justify-between items-center text-sm">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <div>
                        <p className="text-gray-400">Price</p>
                        <p className="text-gray-100">
                          {project.token_sale_ratio}{" "}
                          {project.acceptable_token_symbol.toUpperCase()}
                        </p>
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
                  <Link to={`/projects/${project.key}`} className="self-end">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Footer />
      </main>
    </div>
  );
}
