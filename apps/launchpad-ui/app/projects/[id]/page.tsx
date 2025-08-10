"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  ArrowLeft,
  Users,
  Calendar,
  Target,
  Clock,
  Shield,
  Globe,
  Twitter,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

// Mock project data - in real app, this would come from API/database
const getProjectData = (id: string) => {
  const projects = {
    "defi-protocol": {
      id: "defi-protocol",
      name: "DeFi Protocol",
      symbol: "DFP",
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
      endDate: "2024-02-15T10:00:00Z",
      category: "DeFi",
      tags: ["Yield Farming", "Liquidity Mining", "AMM", "Governance"],
      website: "https://defiprotocol.com",
      twitter: "@defiprotocol",
      telegram: "@defiprotocol",
      discord: "discord.gg/defiprotocol",
      whitepaper: "https://defiprotocol.com/whitepaper.pdf",
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
          items: ["Smart Contract Deployment", "Initial Liquidity", "Community Building"],
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
          items: ["Cross-chain Bridge", "NFT Integration", "Institutional Partnerships"],
        },
        {
          phase: "Q4 2024",
          title: "Global Expansion",
          status: "upcoming",
          items: ["Multi-language Support", "Regulatory Compliance", "Enterprise Solutions"],
        },
      ],
      team: [
        {
          name: "Alex Chen",
          role: "CEO & Founder",
          avatar: "A",
          bio: "Former Goldman Sachs quantitative analyst with 10+ years in DeFi",
        },
        {
          name: "Sarah Kim",
          role: "CTO",
          avatar: "S",
          bio: "Ex-Google engineer specializing in blockchain infrastructure",
        },
        {
          name: "Michael Rodriguez",
          role: "Head of Product",
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
    },
  }

  return projects[id as keyof typeof projects] || null
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectData(params.id)
  const [contributionAmount, setContributionAmount] = useState("")
  const [isContributing, setIsContributing] = useState(false)

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    )
  }

  const getProgressPercentage = () => {
    return Math.min((project.raised / project.target) * 100, 100)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-green-500/10 text-green-400 border-green-500/20"
      case "upcoming":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20"
      case "completed":
        return "bg-gray-500/10 text-gray-400 border-gray-500/20"
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20"
    }
  }

  const handleContribute = async () => {
    setIsContributing(true)
    // Simulate contribution
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsContributing(false)
    setContributionAmount("")
  }

  const timeRemaining = () => {
    const now = new Date()
    const endDate = new Date(project.endDate)
    const diff = endDate.getTime() - now.getTime()

    if (diff <= 0) return "Sale ended"

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    return `${days}d ${hours}h remaining`
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/projects">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">{project.logo}</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {project.name}
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className={getStatusColor(project.status)}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <img
          src={project.banner || "/placeholder.svg"}
          alt={`${project.name} banner`}
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{project.name}</h2>
                <p className="text-gray-300 text-lg max-w-2xl">{project.description}</p>
              </div>
              <div className="flex space-x-3">
                {project.website && (
                  <Button variant="outline" size="icon" className="border-gray-600 hover:bg-gray-800 bg-transparent">
                    <Globe className="w-4 h-4" />
                  </Button>
                )}
                {project.twitter && (
                  <Button variant="outline" size="icon" className="border-gray-600 hover:bg-gray-800 bg-transparent">
                    <Twitter className="w-4 h-4" />
                  </Button>
                )}
                {project.telegram && (
                  <Button variant="outline" size="icon" className="border-gray-600 hover:bg-gray-800 bg-transparent">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5 bg-gray-800 border-gray-700">
                <TabsTrigger value="overview" className="data-[state=active]:bg-gray-700">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="tokenomics" className="data-[state=active]:bg-gray-700">
                  Tokenomics
                </TabsTrigger>
                <TabsTrigger value="roadmap" className="data-[state=active]:bg-gray-700">
                  Roadmap
                </TabsTrigger>
                <TabsTrigger value="team" className="data-[state=active]:bg-gray-700">
                  Team
                </TabsTrigger>
                <TabsTrigger value="risks" className="data-[state=active]:bg-gray-700">
                  Risks
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-100">About {project.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-200">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-gray-600 text-gray-400">
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
                    <CardTitle className="text-gray-100">Token Distribution</CardTitle>
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
                                  <span className="text-gray-400 capitalize">{key.replace("Allocation", "")}:</span>
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
                        <h4 className="font-semibold text-gray-200">Token Utility</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span className="text-gray-300 text-sm">Governance voting rights</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span className="text-gray-300 text-sm">Staking rewards</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span className="text-gray-300 text-sm">Platform fee discounts</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span className="text-gray-300 text-sm">Liquidity mining rewards</span>
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
                    <CardTitle className="text-gray-100">Development Roadmap</CardTitle>
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
                                <h4 className="font-semibold text-gray-200">{phase.phase}</h4>
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
                              <h5 className="text-gray-100 mb-2">{phase.title}</h5>
                              <ul className="space-y-1">
                                {phase.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-gray-600 rounded-full" />
                                    <span className="text-gray-300 text-sm">{item}</span>
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
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">{member.avatar}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-200">{member.name}</h4>
                            <p className="text-blue-400 text-sm mb-2">{member.role}</p>
                            <p className="text-gray-300 text-sm">{member.bio}</p>
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
                        Please carefully consider these risks before participating in this sale.
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-3">
                      {project.risks.map((risk, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-700/30 rounded-lg">
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
                <CardTitle className="text-gray-100">Sale Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-gray-100 font-semibold">{project.price} DUST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sale Type:</span>
                    <Badge variant="outline" className="border-gray-600 text-gray-400">
                      {project.saleType}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Time Remaining:</span>
                    <span className="text-gray-100">{timeRemaining()}</span>
                  </div>
                </div>

                {project.status === "live" && (
                  <>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-gray-100">
                          {formatCurrency(project.raised)} / {formatCurrency(project.target)}
                        </span>
                      </div>
                      <Progress value={getProgressPercentage()} className="h-3" />
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>{getProgressPercentage().toFixed(1)}% Complete</span>
                        <span>{project.participants.toLocaleString()} Participants</span>
                      </div>
                    </div>

                    {/* Contribution Form */}
                    <div className="space-y-3 pt-4 border-t border-gray-700">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-300">Contribution Amount (DUST)</label>
                        <Input
                          type="number"
                          placeholder="0.0"
                          value={contributionAmount}
                          onChange={(e) => setContributionAmount(e.target.value)}
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

                {project.status === "upcoming" && (
                  <Alert className="bg-blue-500/10 border-blue-500/20">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <AlertDescription className="text-blue-300">
                      Sale starts on {new Date(project.startDate).toLocaleDateString()}
                    </AlertDescription>
                  </Alert>
                )}

                {project.status === "completed" && (
                  <Alert className="bg-green-500/10 border-green-500/20">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <AlertDescription className="text-green-300">Sale completed successfully!</AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {/* Security Features */}
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
                  <span className="text-gray-300">Smart Contract Audited</span>
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
                  <span className="text-gray-100 font-semibold">{project.participants.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-400 text-sm">Hard Cap</span>
                  </div>
                  <span className="text-gray-100 font-semibold">{formatCurrency(project.target)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-orange-400" />
                    <span className="text-gray-400 text-sm">Duration</span>
                  </div>
                  <span className="text-gray-100 font-semibold">30 days</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
