import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import { Alert, AlertDescription } from "../components/ui/alert";
import {
  ArrowLeft,
  Users,
  Calendar,
  Target,
  Shield,
  Globe,
  Twitter,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Zap,
  X,
  BanknoteArrowDown,
} from "lucide-react";
import { Footer } from "../components/footer";
import { useApp } from "../hooks/useApp";
import { IMAGE } from "../lib/assets";

type ProjectStatus = "live" | "completed" | "closed";

// Mock project data - in real app, this would come from API/database
const project = {
  id: "sample-project",
  name: "Sample Project",
  symbol: "SPL",
  description:
    "Revolutionary DeFi protocol bringing advanced yield farming and liquidity mining to Midnight blockchain with innovative automated market making features.",
  longDescription:
    "DeFi Protocol is a comprehensive decentralized finance ecosystem built on the Midnight blockchain. Our platform combines advanced yield farming strategies, automated market making, and innovative liquidity mining mechanisms to provide users with maximum returns on their digital assets. The protocol features a unique dual-token model that ensures sustainable rewards while maintaining protocol security and decentralization.",
  logo: "D",
  banner: "/defi-protocol-banner.png",
  status: "live",
  saleType: "Fixed Sale",
  price: "0.05",
  raised: 2100000,
  target: 3000000,
  participants: 1247,
  startDate: "2024-01-15T10:00:00Z",
  endDate: "2025-10-25T10:00:00Z",
  category: "DeFi",
  tags: ["Yield Farming", "Liquidity Mining", "AMM", "Governance"],
  website: "https://sampleproject.com",
  twitter: "@sampletwitter",
  telegram: "@sampletelegram",
  discord: "discord.gg/sampleproject",
  whitepaper: "https://sampleproject.com/whitepaper.pdf",
  tokenomics: {
    totalSupply: "100,000,000",
    saleAllocation: "30%",
    liquidityAllocation: "25%",
    teamAllocation: "15%",
    marketingAllocation: "10%",
    reserveAllocation: "20%",
  },
  roadmap: [
    {
      phase: "Q1 2024",
      title: "Protocol Launch",
      status: "completed",
      items: [
        "Smart Contract Deployment",
        "Initial Liquidity",
        "Community Building",
      ],
    },
    {
      phase: "Q2 2024",
      title: "Feature Expansion",
      status: "in-progress",
      items: ["Advanced Farming Pools", "Governance Token", "Mobile App"],
    },
    {
      phase: "Q3 2024",
      title: "Ecosystem Growth",
      status: "upcoming",
      items: [
        "Cross-chain Bridge",
        "NFT Integration",
        "Institutional Partnerships",
      ],
    },
    {
      phase: "Q4 2024",
      title: "Global Expansion",
      status: "upcoming",
      items: [
        "Multi-language Support",
        "Regulatory Compliance",
        "Enterprise Solutions",
      ],
    },
  ],
  team: [
    {
      name: "Johnny Eco",
      role: "CEO & Founder",
      avatar: "M",
      bio: "Former Goldman Sachs quantitative analyst with 10+ years in DeFi",
    },
    {
      name: "Vic Salem",
      role: "CTO",
      avatar: "S",
      bio: "Ex-Google engineer specializing in blockchain infrastructure",
    },
    {
      name: "Antonia Malon",
      role: "Head of Product I",
      avatar: "E",
      bio: "Product leader from Coinbase with expertise in user experience",
    },
    {
      name: "Fred Jon",
      role: "Head of Product II",
      avatar: "M",
      bio: "Product leader from Coinbase with expertise in user experience",
    },
  ],
  features: [
    "Automated yield optimization",
    "Cross-chain compatibility",
    "Governance voting system",
    "Advanced analytics dashboard",
    "Mobile-first design",
    "Institutional-grade security",
  ],
  risks: [
    "Smart contract vulnerabilities",
    "Market volatility impact",
    "Regulatory uncertainty",
    "Competition from established protocols",
  ],
};

const ProjectDetail = () => {
  const {
    contractState,
    closeSale,
    buyFixedToken,
    isContributing,
    isWithdrawing,
    WithdrawFunds,
    isClosing,
    setRoute,
    projectId,
  } = useApp();
  const projectDetail = contractState?.fixed_sales.find(
    (sale) => sale.key === projectId
  );

  if (projectDetail === undefined) {
    setRoute("dashboard");
    return null;
  }

  const [contributionAmount, setContributionAmount] = useState<string>("");

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1
            onClick={() => setRoute("projects")}
            className="text-2xl font-bold mb-4"
          >
            Project Not Found
          </h1>

          <Button>Back to Projects</Button>
        </div>
      </div>
    );
  }

  const getProgressPercentage = (): number => {
    return Math.min(
      (projectDetail?.total_amount_sold /
        projectDetail?.total_amount_for_sale) *
        100,
      100
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setContributionAmount(e.target.value);
  };

  const getStatusColor = (status: ProjectStatus): string => {
    switch (status) {
      case "live":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "completed":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "closed":
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  const handleContribute = async (): Promise<void> => {
    buyFixedToken(projectDetail, Number(contributionAmount));
  };

  const calculateTimeRemaining = (startTime: number, duration: number) => {
    // startTime: timestamp from Date.now() when sale was created
    // duration: number of days for the sale

    // Convert duration from days to milliseconds
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisecondsPerHour = 1000 * 60 * 60;
    const durationInMilliseconds = duration * millisecondsPerDay;

    // Calculate when the sale should end
    const endTime = startTime + durationInMilliseconds;

    // Get current timestamp
    const now = Date.now();

    // Calculate the difference
    const diff = endTime - now;

    if (diff <= 0) {
      return "Sale ended";
    }

    // Calculate remaining days and hours
    const daysRemaining = Math.floor(diff / millisecondsPerDay);
    const hoursRemaining = Math.floor(
      (diff % millisecondsPerDay) / millisecondsPerHour
    );

    // If less than a day remaining, show only hours
    if (daysRemaining === 0) {
      return `${hoursRemaining}h remaining`;
    }

    // If a day or more remaining, show days and hours
    return `${daysRemaining}d ${hoursRemaining}h remaining`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50 px-6">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => setRoute("projects")}
              variant="ghost"
              size="icon"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SP</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sample Project
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge
              className={getStatusColor(projectDetail.status as ProjectStatus)}
            >
              {projectDetail.status.charAt(0).toUpperCase() +
                projectDetail.status.slice(1)}
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <img
          src={IMAGE || "/placeholder.svg"}
          alt={`sample project banner`}
          className="w-full h-64 md:h-80 object-cover"
        />

        <div className="flex right-8 top-8 justify-end w-full absolute z-10 px-6">
          {contractState?.user_pk === projectDetail.organizer &&
          projectDetail.status === "live" ? (
            <Button
              onClick={() => closeSale(projectDetail)}
              variant="outline"
              size="default"
              disabled={isClosing}
              className="border-gray-600 hover:bg-gray-200 bg-white text-black flex gap-2"
            >
              {!isClosing ? (
                <span className="flex gap-2 justify-center items-center">
                  <X /> Close Sale
                </span>
              ) : (
                <span className="flex gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>{" "}
                  Closing Sale
                </span>
              )}
            </Button>
          ) : (
            <Button
              onClick={() => WithdrawFunds(projectDetail)}
              variant="outline"
              size="default"
              disabled={isWithdrawing || projectDetail.isWithdrawn}
              className={`border-gray-600 hover:bg-gray-200 text-black flex gap-2 ${projectDetail.isWithdrawn ? "bg-gray-200 cursor-not-allowed" : "bg-white"}`}
            >
              {!isWithdrawing ? (
                <span>
                  {!projectDetail.isWithdrawn ? (
                    <span className="flex gap-2">
                      <BanknoteArrowDown /> Withdraw Funds
                    </span>
                  ) : (
                    "Withdrawn"
                  )}
                </span>
              ) : (
                <span className="flex gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>{" "}
                  Withdrawing Funds...
                </span>
              )}
            </Button>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 px-6 text-left">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Statera Sample Project
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl">
                  Statera Midnight Launchpad: The Launchpad for Statera on
                  Midnight is a crypto launchpad specifically designed for the
                  Midnight blockchain. It provides a secure and efficient
                  platform for projects to launch their tokens and raise
                  capital, empowering developers and investors within the
                  Midnight ecosystem.
                </p>
              </div>
              <div className="flex space-x-3">
                {project.website && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-600 hover:bg-gray-800 bg-transparent"
                  >
                    <Globe className="w-4 h-4" />
                  </Button>
                )}
                {project.twitter && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-600 hover:bg-gray-800 bg-transparent"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                )}
                {project.telegram && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-600 hover:bg-gray-800 bg-transparent"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 container mx-auto py-8 px-6 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5 bg-gray-800 border-gray-700">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-gray-700 text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="tokenomics"
                  className="data-[state=active]:bg-gray-700 text-white"
                >
                  Tokenomics
                </TabsTrigger>
                <TabsTrigger
                  value="roadmap"
                  className="data-[state=active]:bg-gray-700 text-white"
                >
                  Roadmap
                </TabsTrigger>
                <TabsTrigger
                  value="team"
                  className="data-[state=active]:bg-gray-700 text-white"
                >
                  Team
                </TabsTrigger>
                <TabsTrigger
                  value="risks"
                  className="data-[state=active]:bg-gray-700 text-white"
                >
                  Risks
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-100">
                      About Statera Midnight Launchpad
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      Statera Midnight Launchpad: The Launchpad for Statera on
                      Midnight is a crypto launchpad specifically designed for
                      the Midnight blockchain. It provides a secure and
                      efficient platform for projects to launch their tokens and
                      raise capital, empowering developers and investors within
                      the Midnight ecosystem.
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-200">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-gray-600 text-gray-400"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tokenomics" className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-100">
                      Token Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Total Supply:</span>
                          <span className="text-gray-100 font-semibold">
                            {project.tokenomics.totalSupply} {project.symbol}
                          </span>
                        </div>

                        <div className="space-y-3">
                          {Object.entries(project.tokenomics)
                            .slice(1)
                            .map(([key, value]) => (
                              <div key={key} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-400 capitalize">
                                    {key.replace("Allocation", "")}:
                                  </span>
                                  <span className="text-gray-100">{value}</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                  <div
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                                    style={{ width: value }}
                                  />
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-200">
                          Token Utility
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span className="text-gray-300 text-sm">
                              Governance voting rights
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span className="text-gray-300 text-sm">
                              Staking rewards
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span className="text-gray-300 text-sm">
                              Platform fee discounts
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span className="text-gray-300 text-sm">
                              Liquidity mining rewards
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="roadmap" className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-100">
                      Development Roadmap
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {project.roadmap.map((phase, index) => (
                        <div key={index} className="relative">
                          <div className="flex items-start space-x-4">
                            <div
                              className={`w-4 h-4 rounded-full mt-1 ${
                                phase.status === "completed"
                                  ? "bg-green-500"
                                  : phase.status === "in-progress"
                                    ? "bg-blue-500"
                                    : "bg-gray-500"
                              }`}
                            />
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h4 className="font-semibold text-gray-200">
                                  {phase.phase}
                                </h4>
                                <Badge
                                  className={
                                    phase.status === "completed"
                                      ? "bg-green-500/10 text-green-400 border-green-500/20"
                                      : phase.status === "in-progress"
                                        ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                                        : "bg-gray-500/10 text-gray-400 border-gray-500/20"
                                  }
                                >
                                  {phase.status.replace("-", " ")}
                                </Badge>
                              </div>
                              <h5 className="text-gray-100 mb-2">
                                {phase.title}
                              </h5>
                              <ul className="space-y-1">
                                {phase.items.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="flex items-center space-x-2"
                                  >
                                    <div className="w-2 h-2 bg-gray-600 rounded-full" />
                                    <span className="text-gray-300 text-sm">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          {index < project.roadmap.length - 1 && (
                            <div className="absolute left-2 top-6 w-0.5 h-8 bg-gray-700" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team" className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-100">Core Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.team.map((member, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg"
                        >
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">
                              {member.avatar}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-200">
                              {member.name}
                            </h4>
                            <p className="text-blue-400 text-sm mb-2">
                              {member.role}
                            </p>
                            <p className="text-gray-300 text-sm">
                              {member.bio}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="risks" className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-100 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2 text-orange-400" />
                      Risk Factors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Alert className="bg-orange-500/10 border-orange-500/20 mb-4">
                      <AlertCircle className="h-4 w-4 text-orange-400" />
                      <AlertDescription className="text-orange-300">
                        Please carefully consider these risks before
                        participating in this sale.
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-3">
                      {project.risks.map((risk, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-3 bg-gray-700/30 rounded-lg"
                        >
                          <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{risk}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sale Info */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">
                  Sale Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {projectDetail.status === "live" ? (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-gray-100 font-semibold">
                        {projectDetail.token_sale_ratio}{" "}
                        {projectDetail.acceptable_token_symbol.toUpperCase()}
                      </span>
                    </div>
                  ) : (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Amount Sold:</span>
                      <span className="text-gray-400">
                        {projectDetail.total_amount_sold}{" "}
                        {projectDetail.token_symbol}
                      </span>
                    </div>
                  )}
                  {projectDetail.status !== "live" && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Amount Raised:</span>
                      <span className="text-gray-400">
                        {projectDetail.total_amount_sold *
                          Number(projectDetail.token_sale_ratio)}{" "}
                        {projectDetail.acceptable_token_symbol}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sale Type:</span>
                    <Badge
                      variant="outline"
                      className="border-gray-600 text-gray-400"
                    >
                      {projectDetail.sale_type}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Time Remaining:</span>
                    <span className="text-gray-100 text-right">
                      {projectDetail.status !== "live"
                        ? projectDetail.status === "closed"
                          ? "Closed"
                          : "Completed"
                        : calculateTimeRemaining(
                            Number(projectDetail.start_time),
                            Number(projectDetail.duration)
                          )}
                    </span>
                  </div>
                </div>

                {projectDetail.status === "live" && (
                  <>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-gray-100">
                          {projectDetail.total_amount_sold} /{" "}
                          {projectDetail.total_amount_for_sale}{" "}
                          {projectDetail.token_symbol.toUpperCase()}
                        </span>
                      </div>
                      <Progress
                        value={getProgressPercentage()}
                        className="h-3"
                      />
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>
                          {getProgressPercentage().toFixed(1)}% Complete
                        </span>
                        <span>
                          {projectDetail.participants.toLocaleString()}{" "}
                          Participants
                        </span>
                      </div>
                    </div>

                    {/* Contribution Form */}
                    <div className="space-y-3 pt-4 border-t border-gray-700">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-300">
                          Contribution Amount (
                          {projectDetail.acceptable_token_symbol.toUpperCase()})
                        </label>
                        <Input
                          type="number"
                          placeholder="0.0"
                          value={contributionAmount}
                          onChange={handleInputChange}
                          className="bg-gray-700 border-gray-600 text-gray-100"
                        />
                      </div>
                      <Button
                        onClick={handleContribute}
                        disabled={!contributionAmount || isContributing}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        {isContributing ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Contributing...
                          </>
                        ) : (
                          "Contribute Now"
                        )}
                      </Button>
                    </div>
                  </>
                )}

                {/* {project.status === "upcoming" && (
                  <Alert className="bg-blue-500/10 border-blue-500/20">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <AlertDescription className="text-blue-300">
                      Sale starts on{" "}
                      {new Date(project.startDate).toLocaleDateString()}
                    </AlertDescription>
                  </Alert>
                )} */}

                {projectDetail.status === "completed" && (
                  <Alert className="bg-green-500/10 border-green-500/20">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <AlertDescription className="text-green-300">
                      Sale completed successfully!
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {/* Security Features */}

            {projectDetail.status === "live" && (
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-100 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-400" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">
                      Smart Contract Audited
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Liquidity Locked</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Team Tokens Vested</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Anti-Bot Protection</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quick Stats */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-400 text-sm">Participants</span>
                  </div>
                  <span className="text-gray-100 font-semibold">
                    {projectDetail.participants.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-400 text-sm">Hard Cap</span>
                  </div>
                  <span className="text-gray-100 font-semibold">
                    {projectDetail.hard_cap}{" "}
                    {projectDetail.token_symbol.toUpperCase()}
                  </span>
                </div>
                {projectDetail.status !== "live" && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-green-400" />
                      <span className="text-gray-400 text-sm">Soft Cap</span>
                    </div>
                    <span className="text-gray-100 font-semibold">
                      {projectDetail.total_amount_for_sale}{" "}
                      {projectDetail.token_symbol.toUpperCase()}
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-orange-400" />
                    <span className="text-gray-400 text-sm">Duration</span>
                  </div>
                  <span className="text-gray-100 font-semibold">
                    {projectDetail.duration}{" "}
                    {Number(projectDetail.duration) > 1 ? "days" : "day"}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
