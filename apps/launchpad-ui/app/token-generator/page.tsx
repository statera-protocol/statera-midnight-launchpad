"use client";

import type React from "react";

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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Upload,
  Coins,
  Rocket,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Footer } from "@/components/footer";

export default function TokenGenerator() {
  const [tokenData, setTokenData] = useState({
    name: "",
    ticker: "",
    totalSupply: "",
    // decimals: "18",
    description: "",
    website: "",
    twitter: "",
    telegram: "",
  });

  const [iconFile, setIconFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationComplete, setGenerationComplete] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setTokenData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleIconUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIconFile(file);
    }
  };

  const generateToken = async () => {
    setIsGenerating(true);
    // Simulate token generation
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsGenerating(false);
    setGenerationComplete(true);
  };

  const isFormValid =
    tokenData.name && tokenData.ticker && tokenData.totalSupply;

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
                <Coins className="w-5 h-5 text-white" />
              </div>
              <Link href="/">
                <h1 className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Token Generator
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl min-h-screen flex flex-col justify-center">
        {!generationComplete ? (
          <>
            {/* Hero Section */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Create Your Token
              </h2>
              <p className="text-gray-400 text-lg">
                Generate a custom token on the Midnight blockchain with just a
                few details
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-100">
                      Token Details
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Fill in the basic information for your token
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-200">
                          Token Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="e.g., My Awesome Token"
                          value={tokenData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ticker" className="text-gray-200">
                          Ticker Symbol *
                        </Label>
                        <Input
                          id="ticker"
                          placeholder="e.g., MAT"
                          value={tokenData.ticker}
                          onChange={(e) =>
                            handleInputChange(
                              "ticker",
                              e.target.value.toUpperCase()
                            )
                          }
                          className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                          maxLength={10}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="supply" className="text-gray-200">
                          Total Supply *
                        </Label>
                        <Input
                          id="supply"
                          type="number"
                          placeholder="e.g., 1000000"
                          value={tokenData.totalSupply}
                          onChange={(e) =>
                            handleInputChange("totalSupply", e.target.value)
                          }
                          className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                        />
                      </div>
                      {/* <div className="space-y-2">
                        <Label htmlFor="decimals" className="text-gray-200">
                          Decimals
                        </Label>
                        <Input
                          id="decimals"
                          type="number"
                          value={tokenData.decimals}
                          onChange={(e) =>
                            handleInputChange("decimals", e.target.value)
                          }
                          className="bg-gray-700 border-gray-600 text-gray-100"
                          min="0"
                          max="18"
                        />
                      </div> */}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-gray-200">
                        Description
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your token and its purpose..."
                        value={tokenData.description}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                        className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 min-h-[100px]"
                      />
                    </div>

                    {/* Token Icon */}
                    <div className="space-y-2">
                      <Label className="text-gray-200">Token Icon</Label>
                      <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-gray-500 transition-colors">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleIconUpload}
                          className="hidden"
                          id="icon-upload"
                        />
                        <label htmlFor="icon-upload" className="cursor-pointer">
                          {iconFile ? (
                            <div className="space-y-2">
                              <CheckCircle className="w-8 h-8 text-green-400 mx-auto" />
                              <p className="text-gray-300">{iconFile.name}</p>
                              <p className="text-sm text-gray-400">
                                Click to change
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <Upload className="w-8 h-8 text-gray-400 mx-auto" />
                              <p className="text-gray-300">Upload token icon</p>
                              <p className="text-sm text-gray-400">
                                PNG, JPG up to 2MB
                              </p>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>

                    {/* Social Links */}
                    {/* <div className="space-y-4">
                      <Label className="text-gray-200">Social Links (Optional)</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="website" className="text-sm text-gray-300">
                            Website
                          </Label>
                          <Input
                            id="website"
                            placeholder="https://..."
                            value={tokenData.website}
                            onChange={(e) => handleInputChange("website", e.target.value)}
                            className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="twitter" className="text-sm text-gray-300">
                            Twitter
                          </Label>
                          <Input
                            id="twitter"
                            placeholder="@username"
                            value={tokenData.twitter}
                            onChange={(e) => handleInputChange("twitter", e.target.value)}
                            className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telegram" className="text-sm text-gray-300">
                            Telegram
                          </Label>
                          <Input
                            id="telegram"
                            placeholder="@channel"
                            value={tokenData.telegram}
                            onChange={(e) => handleInputChange("telegram", e.target.value)}
                            className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                          />
                        </div>
                      </div>
                    </div> */}
                  </CardContent>
                </Card>
              </div>

              {/* Preview & Info */}
              <div className="space-y-6">
                {/* Token Preview */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-100">
                      Token Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        {iconFile ? (
                          <img
                            src={
                              URL.createObjectURL(iconFile) ||
                              "/placeholder.svg"
                            }
                            alt="Token icon"
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <Coins className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-100">
                          {tokenData.name || "Token Name"}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {tokenData.ticker || "TICKER"}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Supply:</span>
                        <span className="text-gray-100">
                          {tokenData.totalSupply
                            ? Number(tokenData.totalSupply).toLocaleString()
                            : "0"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Blockchain:</span>
                        <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                          Midnight
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Generation Info */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-100 flex items-center">
                      <Info className="w-5 h-5 mr-2 text-blue-400" />
                      Generation Info
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    {/* <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">ERC-20 Compatible</span>
                    </div> */}
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Midnight Blockchain</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Instant Deployment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-orange-400" />
                      <span className="text-gray-300">Gas Fee: ~0.1 DUST</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Generate Button */}
                <Button
                  onClick={generateToken}
                  disabled={!isFormValid || isGenerating}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating Token...
                    </>
                  ) : (
                    <>
                      <Rocket className="w-4 h-4 mr-2" />
                      Generate Token
                    </>
                  )}
                </Button>

                {!isFormValid && (
                  <Alert className="bg-orange-500/10 border-orange-500/20">
                    <AlertCircle className="h-4 w-4 text-orange-400" />
                    <AlertDescription className="text-orange-300">
                      Please fill in all required fields (Name, Ticker, Total
                      Supply)
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
          </>
        ) : (
          /* Success State */
          <div className="text-center space-y-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-green-400">
                Token Generated Successfully!
              </h2>
              <p className="text-gray-400 text-lg">
                Your token has been deployed to the Midnight blockchain
              </p>
            </div>

            <Card className="bg-gray-800/50 border-gray-700 max-w-md mx-auto">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Coins className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-100">
                      {tokenData.name}
                    </h3>
                    <p className="text-sm text-gray-400">{tokenData.ticker}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Contract Address:</span>
                  </div>
                  <div className="bg-gray-700 p-2 rounded font-mono text-xs text-green-400 break-all">
                    0x1234567890abcdef1234567890abcdef12345678
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Transaction Hash:</span>
                  </div>
                  <div className="bg-gray-700 p-2 rounded font-mono text-xs text-blue-400 break-all">
                    0xabcdef1234567890abcdef1234567890abcdef12
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setGenerationComplete(false)}
                variant="outline"
                className="border-gray-600 hover:bg-gray-800"
              >
                Generate Another Token
              </Button>
              <Link href="/">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Rocket className="w-4 h-4 mr-2" />
                  Create Sale Campaign
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Add footer before closing div */}
      <Footer />
    </div>
  );
}
