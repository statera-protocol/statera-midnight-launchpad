"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Upload, Rocket, Calendar, DollarSign, Shield, Info, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

const saleTypes = [
  { value: "fixed", label: "Fixed Sale", description: "Traditional fixed-price sale" },
  { value: "batch", label: "Batch Auction", description: "Fair price discovery mechanism" },
  { value: "overflow", label: "Overflow Sale", description: "Handle excess demand efficiently" },
  { value: "whitelist", label: "Whitelist Sale", description: "Exclusive pre-approved participants" },
  { value: "bonding-curve", label: "Bonding Curve", description: "Dynamic pricing mechanism" },
  { value: "hybrid", label: "Hybrid Sale", description: "Combination of multiple mechanisms" },
]

export default function CreateSale() {
  const [saleData, setSaleData] = useState({
    // Project Info
    projectName: "",
    projectDescription: "",
    website: "",
    twitter: "",
    telegram: "",
    discord: "",

    // Token Info
    tokenAddress: "",
    tokenName: "",
    tokenSymbol: "",
    tokenDecimals: "18",

    // Sale Parameters
    saleType: "",
    tokenPrice: "",
    softCap: "",
    hardCap: "",
    minContribution: "",
    maxContribution: "",
    startDate: "",
    endDate: "",

    // Whitelist Settings
    whitelistEnabled: false,
    whitelistSpots: "",

    // Vesting
    vestingEnabled: false,
    vestingPeriod: "",
    cliffPeriod: "",

    // Additional Settings
    liquidityPercentage: "70",
    liquidityLockPeriod: "365",
  })

  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [bannerFile, setBannerFile] = useState<File | null>(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [isCreating, setIsCreating] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setSaleData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFileUpload = (type: "logo" | "banner", file: File | null) => {
    if (type === "logo") {
      setLogoFile(file)
    } else {
      setBannerFile(file)
    }
  }

  const createSale = async () => {
    setIsCreating(true)
    // Simulate sale creation
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsCreating(false)
    // Redirect or show success
  }

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  const steps = [
    { number: 1, title: "Project Info", icon: Info },
    { number: 2, title: "Token Details", icon: DollarSign },
    { number: 3, title: "Sale Parameters", icon: Calendar },
    { number: 4, title: "Review & Launch", icon: Rocket },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Create Sale
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = currentStep === step.number
              const isCompleted = currentStep > step.number

              return (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600"
                        : isCompleted
                          ? "bg-green-600"
                          : "bg-gray-700"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{step.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-2 ${isCompleted ? "bg-green-600" : "bg-gray-700"}`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-3">
            {currentStep === 1 && (
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-100">Project Information</CardTitle>
                  <CardDescription className="text-gray-400">
                    Tell us about your project and provide social links
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectName" className="text-gray-200">
                        Project Name *
                      </Label>
                      <Input
                        id="projectName"
                        placeholder="e.g., DeFi Protocol"
                        value={saleData.projectName}
                        onChange={(e) => handleInputChange("projectName", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-gray-200">
                        Website
                      </Label>
                      <Input
                        id="website"
                        placeholder="https://yourproject.com"
                        value={saleData.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-gray-200">
                      Project Description *
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your project, its goals, and what makes it unique..."
                      value={saleData.projectDescription}
                      onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-gray-100 min-h-[120px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="twitter" className="text-gray-200">
                        Twitter
                      </Label>
                      <Input
                        id="twitter"
                        placeholder="@yourproject"
                        value={saleData.twitter}
                        onChange={(e) => handleInputChange("twitter", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telegram" className="text-gray-200">
                        Telegram
                      </Label>
                      <Input
                        id="telegram"
                        placeholder="@yourproject"
                        value={saleData.telegram}
                        onChange={(e) => handleInputChange("telegram", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="discord" className="text-gray-200">
                        Discord
                      </Label>
                      <Input
                        id="discord"
                        placeholder="discord.gg/yourproject"
                        value={saleData.discord}
                        onChange={(e) => handleInputChange("discord", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-gray-200">Project Logo</Label>
                      <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload("logo", e.target.files?.[0] || null)}
                          className="hidden"
                          id="logo-upload"
                        />
                        <label htmlFor="logo-upload" className="cursor-pointer">
                          {logoFile ? (
                            <div className="space-y-2">
                              <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                              <p className="text-sm text-gray-300">{logoFile.name}</p>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <Upload className="w-6 h-6 text-gray-400 mx-auto" />
                              <p className="text-sm text-gray-300">Upload Logo</p>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-gray-200">Banner Image</Label>
                      <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload("banner", e.target.files?.[0] || null)}
                          className="hidden"
                          id="banner-upload"
                        />
                        <label htmlFor="banner-upload" className="cursor-pointer">
                          {bannerFile ? (
                            <div className="space-y-2">
                              <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                              <p className="text-sm text-gray-300">{bannerFile.name}</p>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <Upload className="w-6 h-6 text-gray-400 mx-auto" />
                              <p className="text-sm text-gray-300">Upload Banner</p>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 2 && (
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-100">Token Details</CardTitle>
                  <CardDescription className="text-gray-400">
                    Configure your token information and contract details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="tokenAddress" className="text-gray-200">
                      Token Contract Address *
                    </Label>
                    <Input
                      id="tokenAddress"
                      placeholder="0x..."
                      value={saleData.tokenAddress}
                      onChange={(e) => handleInputChange("tokenAddress", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-gray-100 font-mono"
                    />
                    <p className="text-xs text-gray-400">
                      Enter your token contract address or{" "}
                      <Link href="/token-generator" className="text-blue-400 hover:underline">
                        create a new token
                      </Link>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tokenName" className="text-gray-200">
                        Token Name *
                      </Label>
                      <Input
                        id="tokenName"
                        placeholder="e.g., My Token"
                        value={saleData.tokenName}
                        onChange={(e) => handleInputChange("tokenName", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tokenSymbol" className="text-gray-200">
                        Token Symbol *
                      </Label>
                      <Input
                        id="tokenSymbol"
                        placeholder="e.g., MTK"
                        value={saleData.tokenSymbol}
                        onChange={(e) => handleInputChange("tokenSymbol", e.target.value.toUpperCase())}
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tokenDecimals" className="text-gray-200">
                        Decimals
                      </Label>
                      <Input
                        id="tokenDecimals"
                        type="number"
                        value={saleData.tokenDecimals}
                        onChange={(e) => handleInputChange("tokenDecimals", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 3 && (
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-100">Sale Parameters</CardTitle>
                  <CardDescription className="text-gray-400">
                    Configure your sale mechanism and parameters
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="saleType" className="text-gray-200">
                      Sale Type *
                    </Label>
                    <Select value={saleData.saleType} onValueChange={(value) => handleInputChange("saleType", value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-gray-100">
                        <SelectValue placeholder="Select sale type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        {saleTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value} className="text-gray-100">
                            <div>
                              <div className="font-medium">{type.label}</div>
                              <div className="text-xs text-gray-400">{type.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tokenPrice" className="text-gray-200">
                        Token Price (DUST) *
                      </Label>
                      <Input
                        id="tokenPrice"
                        type="number"
                        step="0.000001"
                        placeholder="0.001"
                        value={saleData.tokenPrice}
                        onChange={(e) => handleInputChange("tokenPrice", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="softCap" className="text-gray-200">
                        Soft Cap (DUST) *
                      </Label>
                      <Input
                        id="softCap"
                        type="number"
                        placeholder="100"
                        value={saleData.softCap}
                        onChange={(e) => handleInputChange("softCap", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hardCap" className="text-gray-200">
                        Hard Cap (DUST) *
                      </Label>
                      <Input
                        id="hardCap"
                        type="number"
                        placeholder="1000"
                        value={saleData.hardCap}
                        onChange={(e) => handleInputChange("hardCap", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="minContribution" className="text-gray-200">
                        Min Contribution (DUST)
                      </Label>
                      <Input
                        id="minContribution"
                        type="number"
                        step="0.1"
                        placeholder="0.1"
                        value={saleData.minContribution}
                        onChange={(e) => handleInputChange("minContribution", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate" className="text-gray-200">
                        Start Date *
                      </Label>
                      <Input
                        id="startDate"
                        type="datetime-local"
                        value={saleData.startDate}
                        onChange={(e) => handleInputChange("startDate", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate" className="text-gray-200">
                        End Date *
                      </Label>
                      <Input
                        id="endDate"
                        type="datetime-local"
                        value={saleData.endDate}
                        onChange={(e) => handleInputChange("endDate", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                  </div>

                  {/* Whitelist Settings */}
                  <div className="space-y-4 p-4 bg-gray-700/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-gray-200">Enable Whitelist</Label>
                        <p className="text-sm text-gray-400">Restrict participation to pre-approved addresses</p>
                      </div>
                      <Switch
                        checked={saleData.whitelistEnabled}
                        onCheckedChange={(checked) => handleInputChange("whitelistEnabled", checked)}
                      />
                    </div>
                    {saleData.whitelistEnabled && (
                      <div className="space-y-2">
                        <Label htmlFor="whitelistSpots" className="text-gray-200">
                          Whitelist Spots
                        </Label>
                        <Input
                          id="whitelistSpots"
                          type="number"
                          placeholder="1000"
                          value={saleData.whitelistSpots}
                          onChange={(e) => handleInputChange("whitelistSpots", e.target.value)}
                          className="bg-gray-700 border-gray-600 text-gray-100"
                        />
                      </div>
                    )}
                  </div>

                  {/* Vesting Settings */}
                  <div className="space-y-4 p-4 bg-gray-700/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-gray-200">Enable Vesting</Label>
                        <p className="text-sm text-gray-400">Lock tokens with gradual release schedule</p>
                      </div>
                      <Switch
                        checked={saleData.vestingEnabled}
                        onCheckedChange={(checked) => handleInputChange("vestingEnabled", checked)}
                      />
                    </div>
                    {saleData.vestingEnabled && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="vestingPeriod" className="text-gray-200">
                            Vesting Period (days)
                          </Label>
                          <Input
                            id="vestingPeriod"
                            type="number"
                            placeholder="180"
                            value={saleData.vestingPeriod}
                            onChange={(e) => handleInputChange("vestingPeriod", e.target.value)}
                            className="bg-gray-700 border-gray-600 text-gray-100"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cliffPeriod" className="text-gray-200">
                            Cliff Period (days)
                          </Label>
                          <Input
                            id="cliffPeriod"
                            type="number"
                            placeholder="30"
                            value={saleData.cliffPeriod}
                            onChange={(e) => handleInputChange("cliffPeriod", e.target.value)}
                            className="bg-gray-700 border-gray-600 text-gray-100"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 4 && (
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-100">Review & Launch</CardTitle>
                  <CardDescription className="text-gray-400">
                    Review your sale configuration and launch your project
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="bg-blue-500/10 border-blue-500/20">
                    <Info className="h-4 w-4 text-blue-400" />
                    <AlertDescription className="text-blue-300">
                      Please review all details carefully. Once launched, some parameters cannot be changed.
                    </AlertDescription>
                  </Alert>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-200">Project Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Name:</span>
                          <span className="text-gray-100">{saleData.projectName || "Not set"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Token:</span>
                          <span className="text-gray-100">
                            {saleData.tokenName || "Not set"} ({saleData.tokenSymbol || "N/A"})
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Sale Type:</span>
                          <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                            {saleTypes.find((t) => t.value === saleData.saleType)?.label || "Not selected"}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-200">Sale Parameters</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Price:</span>
                          <span className="text-gray-100">{saleData.tokenPrice || "0"} DUST</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Soft Cap:</span>
                          <span className="text-gray-100">{saleData.softCap || "0"} DUST</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Hard Cap:</span>
                          <span className="text-gray-100">{saleData.hardCap || "0"} DUST</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Whitelist:</span>
                          <Badge
                            className={
                              saleData.whitelistEnabled
                                ? "bg-green-500/10 text-green-400 border-green-500/20"
                                : "bg-gray-500/10 text-gray-400 border-gray-500/20"
                            }
                          >
                            {saleData.whitelistEnabled ? "Enabled" : "Disabled"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={createSale}
                    disabled={isCreating}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    size="lg"
                  >
                    {isCreating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Creating Sale...
                      </>
                    ) : (
                      <>
                        <Rocket className="w-4 h-4 mr-2" />
                        Launch Sale
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">Sale Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    {logoFile ? (
                      <img
                        src={URL.createObjectURL(logoFile) || "/placeholder.svg"}
                        alt="Logo"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-white font-bold text-sm">
                        {saleData.projectName ? saleData.projectName[0].toUpperCase() : "P"}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-100">{saleData.projectName || "Project Name"}</h3>
                    <p className="text-sm text-gray-400">{saleData.tokenSymbol || "TOKEN"}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-gray-100">{saleData.tokenPrice || "0"} DUST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Hard Cap:</span>
                    <span className="text-gray-100">{saleData.hardCap || "0"} DUST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Type:</span>
                    <span className="text-gray-100">
                      {saleTypes.find((t) => t.value === saleData.saleType)?.label || "Not selected"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                  <span className="text-gray-300">Liquidity Lock</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Anti-Bot Protection</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            onClick={prevStep}
            disabled={currentStep === 1}
            variant="outline"
            className="border-gray-600 hover:bg-gray-800 bg-transparent"
          >
            Previous
          </Button>
          <Button
            onClick={nextStep}
            disabled={currentStep === 4}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Next
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
