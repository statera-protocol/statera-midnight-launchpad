import { Button } from "../components/ui/button";
import {
  Wallet,
  User,
  Users,
  Rocket,
  Coins,
  Loader2,
  Search,
  Filter,
  DollarSign,
  ArrowRight,
} from "lucide-react";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Footer } from "../components/footer";
import { useAppDeployment } from "../hooks/useAppDeployment";
import { useEffect, useState } from "react";
import { IMAGE, saleTypesList, statuses } from "../lib/assets";
import type {
  BatchSaleData,
  DerivedState,
  FixedSaleData,
  OverflowSaleData,
} from "@repo/launchpad-api";
import type { SaleData } from "./ProjectDetail";

export default function Dashboard() {
  const {
    connectWallet,
    deploymentState,
    walletAddress,
    disconnectWallet,
    setRoute,
    setProjectDetail,
    api,
  } = useAppDeployment();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedSaleType, setSelectedSaleType] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [allProjects, setAllProjects] = useState<SaleData[]>([]);

  useEffect(() => {
    if (!api) return;

    setIsLoading(true);
    const stateSubscription = api.state$.subscribe((state: DerivedState) => {
      const merged = [
        ...state.fixed_sales,
        ...state.batch_sales,
        ...state.overflow_sales,
      ];

      // Fix the shuffling logic
      const shuffled = merged
        .map((p) => ({ ...p, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ sort, ...rest }) => rest);

      setAllProjects(shuffled ?? []);
      setIsLoading(false); // Move this inside the subscription
    });

    return () => {
      stateSubscription.unsubscribe();
    };
  }, [api]);

  useEffect(() => {
    api?.state$.subscribe((state) => {
      console.log(state);
    });
  }, [api]);

  const isFixedSale = (sale: SaleData): sale is FixedSaleData => {
    return sale.saleType === "fixed";
  };

  const isBatchSale = (sale: SaleData): sale is BatchSaleData => {
    return sale.saleType === "batch";
  };

  const isOverflowSale = (sale: SaleData): sale is OverflowSaleData => {
    return sale.saleType === "overflow";
  };

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

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 text-left">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50 px-4">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Midnight Launchpad
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            {deploymentState === "deployed" && (
              <Button
                onClick={() => setRoute("create-sale")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
              >
                Launch Project
              </Button>
            )}

            {deploymentState === "deployed" && (
              <Button
                onClick={() => setRoute("token-generator")}
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 hover:text-white bg-transparent cursor-pointer"
              >
                <Coins className="w-4 h-4 mr-2" />
                Token Generator
              </Button>
            )}

            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
              Midnight
            </Badge>

            {deploymentState !== "deployed" && (
              <Button
                onClick={connectWallet}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
                disabled={deploymentState === "in-progress"}
              >
                <Wallet className="w-4 h-4 mr-2" />
                {deploymentState === "in-progress" ? (
                  <>
                    {" "}
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>{" "}
                    Connecting...
                  </>
                ) : (
                  "Connect Wallet"
                )}
              </Button>
            )}
            {deploymentState === "deployed" && (
              <div className="flex items-center space-x-3">
                <Badge
                  variant="secondary"
                  className="bg-green-500/10 text-green-400 border-green-500/20"
                >
                  {walletAddress}
                </Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                    >
                      <Avatar className="w-8 h-8 cursor-pointer">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600">
                          <User className="w-4 h-4" />
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-gray-800 border-gray-700 text-white"
                  >
                    <DropdownMenuItem className="hover:bg-gray-700">
                      <span
                        onClick={() => setRoute("dashboard")}
                        className="flex items-center w-full"
                      >
                        <Users className="w-4 h-4 mr-2" />
                        My Projects
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-700" />
                    <DropdownMenuItem
                      onClick={disconnectWallet}
                      className="hover:bg-gray-700 text-red-400"
                    >
                      <Wallet className="w-4 h-4 mr-2" />
                      Disconnect
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col px-6">
        {/* Hero Section - Full Screen */}
        {deploymentState !== "deployed" ? (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/25">
              <Wallet className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-3 text-zinc-100">
              Connect Your Wallet
            </h2>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto leading-relaxed">
              Connect your Lace wallet to launch a token sale or contribute to
              existing sale in the decentralized ecosystem.
            </p>
            <Button
              onClick={connectWallet}
              size="lg"
              className="gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-blue-500/25 px-8 py-3"
              disabled={deploymentState === "in-progress"}
            >
              <Wallet className="w-5 h-5" />
              {deploymentState === "in-progress" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Connecting...
                </>
              ) : (
                "Connect Wallet"
              )}
            </Button>
          </div>
        ) : (
          <div className="bg-gray-900 text-gray-100 flex flex-col">
            {/* Main Content */}
            <main className="flex-1 container mx-auto px-6 py-8">
              {/* Hero Section */}
              {allProjects.length > 0 && (
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Discover Projects
                  </h2>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Explore innovative projects launching on the Midnight
                    blockchain
                  </p>
                </div>
              )}

              {/* Filters */}
              {allProjects.length > 0 && (
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
                    <Select
                      value={selectedStatus}
                      onValueChange={setSelectedStatus}
                    >
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

                  {/* Results Count */}
                  {isLoading && (
                    <div className="flex items-center justify-between">
                      <p className="text-gray-400">
                        Showing {allProjects.length} of {allProjects.length}{" "}
                        projects
                      </p>
                      <div className="flex items-center space-x-2">
                        <Filter className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">
                          Filters applied
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Loading Skeleton */}
              {isLoading && (
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
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-700/50 rounded-full" />
                          <div>
                            <div className="h-5 w-24 bg-gray-700/50 rounded mb-2" />
                            <div className="h-4 w-16 bg-gray-700/50 rounded" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4 flex-1">
                        <div className="h-4 w-full bg-gray-700/50 rounded" />
                        <div className="h-4 w-3/4 bg-gray-700/50 rounded" />
                        <div className="flex gap-4 justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-gray-700/50 rounded" />
                            <div>
                              <div className="h-3 w-8 bg-gray-700/50 rounded mb-1" />
                              <div className="h-4 w-16 bg-gray-700/50 rounded" />
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-gray-700/50 rounded" />
                            <div>
                              <div className="h-3 w-12 bg-gray-700/50 rounded mb-1" />
                              <div className="h-4 w-8 bg-gray-700/50 rounded" />
                            </div>
                          </div>
                        </div>
                        <div className="h-10 w-full bg-gray-700/50 rounded" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {!isLoading && allProjects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {allProjects.map((project) => (
                    <Card
                      key={project.key}
                      className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 group !text-left flex flex-col"
                    >
                      <div
                        onClick={() => {
                          const displayProject = allProjects.find(
                            (proj) => proj.key === project.key
                          );
                          setProjectDetail(displayProject);
                          setRoute("project-detail");
                        }}
                        className="relative cursor-pointer"
                      >
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
                            {project.saleType}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold relative">
                              TG
                            </span>
                          </div>
                          <div>
                            <CardTitle className="text-gray-100">
                              {project.projectName}
                            </CardTitle>
                            <CardDescription className="text-gray-400">
                              {project.tokenSymbol}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4 flex-1">
                        <p className="text-gray-300 text-sm line-clamp-2">
                          Blockchain-based supply chain management with
                          transparency and traceability.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-4 justify-between items-center text-sm">
                          {isFixedSale(project) && (
                            <div className="flex items-center space-x-2">
                              <DollarSign className="w-4 h-4 text-green-400" />
                              <div>
                                <p className="text-gray-400">Price</p>
                                <p className="text-gray-100">
                                  {project.tokenSaleRatio}{" "}
                                  {project.acceptableTokenSymbol}
                                </p>
                              </div>
                            </div>
                          )}
                          {isBatchSale(project) && (
                            <div className="flex items-center space-x-2">
                              <DollarSign className="w-4 h-4 text-green-400" />
                              <div>
                                <p className="text-gray-400">Total Pool</p>
                                <p className="text-gray-100">
                                  {project.totalAmountForSale}{" "}
                                  {project.tokenSymbol}
                                </p>
                              </div>
                            </div>
                          )}
                          {isOverflowSale(project) && (
                            <div className="flex items-center space-x-2">
                              <DollarSign className="w-4 h-4 text-green-400" />
                              <div>
                                <p className="text-gray-400">Target</p>
                                <p className="text-gray-100">
                                  {project.target}{" "}
                                  {project.acceptableTokenSymbol}
                                </p>
                              </div>
                            </div>
                          )}
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
                        <Button
                          onClick={() => {
                            const displayProject = allProjects.find(
                              (proj) => proj.key === project.key
                            );
                            setProjectDetail(displayProject);
                            setRoute("project-detail");
                          }}
                          className="w-full self-end bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:shadow-lg group-hover:shadow-purple-500/25 cursor-pointer"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {!isLoading && allProjects.length === 0 && (
                <div className="text-center py-12 mx-0 my-0">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">
                    No projects found
                  </h3>
                  <Button
                    onClick={() => {
                      setRoute("create-sale");
                    }}
                    variant="outline"
                    className="bg-gray-600 !text-white border-gray-600 hover:bg-gray-800 mt-4"
                  >
                    Launch Sale
                  </Button>
                </div>
              )}
            </main>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
