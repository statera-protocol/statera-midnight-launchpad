import { Button } from "../components/ui/button";
import { saleTypes } from "../lib/assets";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { Alert, AlertDescription } from "../components/ui/alert";
import {
  ArrowLeft,
  Upload,
  Rocket,
  Calendar,
  DollarSign,
  Shield,
  Info,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { Footer } from "../components/footer";

import { type SaleDataType } from "../lib/assets";
import { useApp } from "../hooks/useApp";
import { useState } from "react";

interface Step {
  number: number;
  title: string;
  icon: LucideIcon;
}

export default function CreateSale() {
  const { setSaleData, saleData, createFixedSale, launching, setRoute } =
    useApp();
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleInputChange = (
    field: keyof SaleDataType,
    value: string | boolean
  ): void => {
    setSaleData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (
    type: "logo" | "banner",
    file: File | null
  ): void => {
    if (type === "logo") {
      setLogoFile(file);
    } else {
      setBannerFile(file);
    }
  };

  const nextStep = (): void => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = (): void => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const steps: Step[] = [
    { number: 1, title: "Project Info", icon: Info },
    { number: 2, title: "Token Details", icon: DollarSign },
    { number: 3, title: "Sale Parameters", icon: Calendar },
    { number: 4, title: "Review & Launch", icon: Rocket },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col !text-left">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50 ">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => setRoute("dashboard")}
              variant="ghost"
              size="icon"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>

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
      <main className="flex-1 container mx-auto px-6 py-8 max-w-6xl">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;

              return (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center space-x-2 px-6 py-2 rounded-lg transition-all ${
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
                    <div
                      className={`w-8 h-0.5 mx-2 ${isCompleted ? "bg-green-600" : "bg-gray-700"}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-3">
            {currentStep === 1 && (
              <Card className="bg-gray-800/50 border-gray-700 ">
                <CardHeader>
                  <CardTitle className="text-gray-100">
                    Project Information
                  </CardTitle>
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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("projectName", e.target.value)
                        }
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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("website", e.target.value)
                        }
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
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        handleInputChange("projectDescription", e.target.value)
                      }
                      className="bg-gray-700 border-gray-600 text-gray-100 min-h-[120px]"
                    />
                  </div>
                  {/* 
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="twitter" className="text-gray-200">
                        Twitter
                      </Label>
                      <Input
                        id="twitter"
                        placeholder="@yourproject"
                        value={saleData.twitter}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("twitter", e.target.value)
                        }
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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("telegram", e.target.value)
                        }
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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("discord", e.target.value)
                        }
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                  </div> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-gray-200">Project Logo</Label>
                      <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFileUpload(
                              "logo",
                              e.target.files?.[0] || null
                            )
                          }
                          className="hidden"
                          id="logo-upload"
                        />
                        <label htmlFor="logo-upload" className="cursor-pointer">
                          {logoFile ? (
                            <div className="space-y-2">
                              <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                              <p className="text-sm text-gray-300">
                                {logoFile.name}
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <Upload className="w-6 h-6 text-gray-400 mx-auto" />
                              <p className="text-sm text-gray-300">
                                Upload Logo
                              </p>
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
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFileUpload(
                              "banner",
                              e.target.files?.[0] || null
                            )
                          }
                          className="hidden"
                          id="banner-upload"
                        />
                        <label
                          htmlFor="banner-upload"
                          className="cursor-pointer"
                        >
                          {bannerFile ? (
                            <div className="space-y-2">
                              <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                              <p className="text-sm text-gray-300">
                                {bannerFile.name}
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <Upload className="w-6 h-6 text-gray-400 mx-auto" />
                              <p className="text-sm text-gray-300">
                                Upload Banner
                              </p>
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
              <Card className="bg-gray-800/50 border-gray-700 ">
                <CardHeader>
                  <CardTitle className="text-gray-100">Token Details</CardTitle>
                  <CardDescription className="text-gray-400">
                    Configure your token information and contract details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="tokenID" className="text-gray-200">
                      Token ID *
                    </Label>
                    <Input
                      id="tokenAddress"
                      placeholder="0x1234...5678"
                      value={saleData.tokenID}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange("tokenID", e.target.value)
                      }
                      className="bg-gray-700 border-gray-600 text-gray-100 font-mono"
                    />
                    <p className="text-xs text-gray-400">
                      Enter your token ID or{" "}
                      <span
                        onClick={() => setRoute("token-generator")}
                        className="text-blue-400 hover:underline"
                      >
                        create a new token
                      </span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tokenName" className="text-gray-200">
                        Token Name *
                      </Label>
                      <Input
                        id="tokenName"
                        placeholder="e.g., My Token"
                        value={saleData.tokenName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("tokenName", e.target.value)
                        }
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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange(
                            "tokenSymbol",
                            e.target.value.toUpperCase()
                          )
                        }
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hardCap" className="text-gray-200">
                        Hard Cap *
                      </Label>
                      <Input
                        type="number"
                        id="hardCap"
                        placeholder="e.g., 1000000000"
                        value={saleData.hardCap}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("hardCap", e.target.value)
                        }
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="softCap" className="text-gray-200">
                        Soft Cap *
                      </Label>
                      <Input
                        type="number"
                        id="softCap"
                        placeholder="e.g., MTK"
                        value={saleData.softCap}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange(
                            "softCap",
                            e.target.value.toUpperCase()
                          )
                        }
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 3 && (
              <Card className="bg-gray-800/50 border-gray-700 ">
                <CardHeader>
                  <CardTitle className="text-gray-100">
                    Sale Parameters
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Configure your sale mechanism and parameters
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 ">
                  <div className="space-y-2 ">
                    <Label htmlFor="saleType" className="text-gray-200">
                      Sale Type *
                    </Label>
                    <Select
                      value={saleData.saleType}
                      onValueChange={(value: string) =>
                        handleInputChange("saleType", value)
                      }
                    >
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-gray-100">
                        <SelectValue placeholder="Select sale type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        {saleTypes.map((type) => (
                          <SelectItem
                            key={type.value}
                            value={type.value}
                            className="text-gray-100"
                          >
                            <div>
                              <div className="font-medium">{type.label}</div>
                              <div className="text-xs text-gray-400">
                                {type.description}
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="exchangeTokenID"
                        className="text-gray-200"
                      >
                        Exchange Token ID *
                      </Label>
                      <Input
                        id="exchangeTokenID"
                        type="string"
                        placeholder="0x1234...5678"
                        value={saleData.exchangeTokenID}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("exchangeTokenID", e.target.value)
                        }
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="exchangeTokenSymbol"
                        className="text-gray-200"
                      >
                        Exchange Token Symbol *
                      </Label>
                      <Input
                        id="exchangeTokenSymbol"
                        type="text"
                        placeholder="e.g MID"
                        value={saleData.exchangeTokenSymbol.toUpperCase()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange(
                            "exchangeTokenSymbol",
                            e.target.value
                          )
                        }
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="exchangeRatio" className="text-gray-200">
                        Exchange Ratio *
                      </Label>
                      <Input
                        id="exchangeRatio"
                        type="number"
                        placeholder="100"
                        value={saleData.exchangeRatio}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("exchangeRatio", e.target.value)
                        }
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration" className="text-gray-200">
                        Duration (days) *
                      </Label>
                      <Input
                        id="duration"
                        type="number"
                        placeholder="1000"
                        value={saleData.duration}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("duration", e.target.value)
                        }
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="minContribution"
                        className="text-gray-200"
                      >
                        Min Contribution (
                        {saleData.exchangeTokenSymbol.toUpperCase()})
                      </Label>
                      <Input
                        id="minContribution"
                        type="number"
                        step="0.1"
                        placeholder="0.1"
                        value={saleData.minContribution}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("minContribution", e.target.value)
                        }
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="maxContribution"
                        className="text-gray-200"
                      >
                        Max Contribution (
                        {saleData.exchangeTokenSymbol.toUpperCase()})
                      </Label>
                      <Input
                        id="maxContribution"
                        type="number"
                        value={saleData.maxContribution}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("maxContribution", e.target.value)
                        }
                        className="bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 4 && (
              <Card className="bg-gray-800/50 border-gray-700 ">
                <CardHeader>
                  <CardTitle className="text-gray-100">
                    Review & Launch
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Review your sale configuration and launch your project
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="bg-blue-500/10 border-blue-500/20">
                    <Info className="h-4 w-4 text-blue-400" />
                    <AlertDescription className="text-blue-300">
                      Please review all details carefully. Once launched, some
                      parameters cannot be changed.
                    </AlertDescription>
                  </Alert>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-200">
                        Project Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Name:</span>
                          <span className="text-gray-100">
                            {saleData.projectName
                              ? saleData.projectName
                                  .split(" ")
                                  .map(
                                    (word) =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1).toLowerCase()
                                  )
                                  .join(" ")
                              : "Not set"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Token:</span>
                          <span className="text-gray-100">
                            {saleData.tokenName
                              ? saleData.tokenName
                                  .split(" ")
                                  .map(
                                    (word) =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1).toLowerCase()
                                  )
                                  .join(" ")
                              : "Not set"}{" "}
                            ({saleData.tokenSymbol || "N/A"})
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Sale Type:</span>
                          <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                            {saleTypes.find(
                              (t) => t.value === saleData.saleType
                            )?.label || "Not selected"}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 ">
                      <h4 className="font-semibold text-gray-200">
                        Sale Parameters
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between uppercase">
                          <span className="text-gray-400">Price:</span>
                          <span className="text-gray-100">
                            {saleData.exchangeRatio || "0"}{" "}
                            {saleData.exchangeTokenSymbol}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Soft Cap:</span>
                          <span className="text-gray-100">
                            {saleData.softCap || "0"} {saleData.tokenSymbol}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Hard Cap:</span>
                          <span className="text-gray-100">
                            {saleData.hardCap || "0"} {saleData.tokenSymbol}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Whitelist:</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={createFixedSale}
                    disabled={launching}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
                    size="lg"
                  >
                    {launching ? (
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
          <div className="space-y-6 ">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">Sale Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    {logoFile ? (
                      <img
                        src={logoFile ? URL.createObjectURL(logoFile) : ""}
                        alt="Logo"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-white font-bold text-sm">
                        {saleData.projectName
                          ? saleData.projectName[0].toUpperCase()
                          : "P"}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-100">
                      {saleData.projectName.toUpperCase() || "Project Name"}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {saleData.tokenSymbol || "TOKEN"}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-gray-100 uppercase">
                      {saleData.exchangeRatio || "0"}{" "}
                      {saleData.exchangeTokenSymbol}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Hard Cap:</span>
                    <span className="text-gray-100">
                      {saleData.hardCap || "0"} {saleData.tokenSymbol}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Type:</span>
                    <span className="text-gray-100">
                      {saleTypes.find((t) => t.value === saleData.saleType)
                        ?.label || "Not selected"}
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
  );
}
