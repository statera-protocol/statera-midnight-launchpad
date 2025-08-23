import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Wallet,
  User,
  Plus,
  TrendingUp,
  Users,
  BarChart3,
  Rocket,
  Coins,
} from "lucide-react";
import { saleModels } from "../lib/assets";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Footer } from "../components/footer";
import { useApp } from "../hooks/useApp";

export default function Dashboard() {
  const {
    connectWallet,
    deploymentState,
    walletAddress,
    disconnectWallet,
    setRoute,
  } = useApp();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 text-left">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50 px-6">
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
            <Button
              onClick={() => setRoute("projects")}
              variant="outline"
              className="border-gray-700 hover:bg-gray-800 hover:text-white bg-transparent"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Projects
            </Button>

            <Button
              onClick={() => setRoute("token-generator")}
              variant="outline"
              className="border-gray-700 hover:bg-gray-800 hover:text-white bg-transparent"
            >
              <Coins className="w-4 h-4 mr-2" />
              Token Generator
            </Button>

            {deploymentState !== "deployed" && (
              <Button
                onClick={connectWallet}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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
                      <Avatar className="w-8 h-8">
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
                        onClick={() => setRoute("projects")}
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
        <section className="min-h-screen flex flex-col justify-center items-center container mx-auto px-6 py-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Launch Your Project on Midnight
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose from multiple sale mechanisms to launch your token with the
              best strategy for your project
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Raised</p>
                    <p className="text-2xl font-bold text-green-400">$12.5M</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Active Projects</p>
                    <p className="text-2xl font-bold text-blue-400">24</p>
                  </div>
                  <Rocket className="w-8 h-8 text-blue-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Participants</p>
                    <p className="text-2xl font-bold text-purple-400">8,432</p>
                  </div>
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Success Rate</p>
                    <p className="text-2xl font-bold text-orange-400">94%</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-orange-400" />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex gap-8">
            <Button
              onClick={() => setRoute("create-sale")}
              variant="outline"
              className="border-gray-700 hover:bg-gray-800 hover:text-white bg-transparent"
            >
              <Coins className="w-4 h-4 mr-2" />
              Create a Sale
            </Button>
            <Button
              onClick={() => setRoute("token-generator")}
              variant="outline"
              className="border-gray-700 hover:bg-gray-800 hover:text-white bg-transparent"
            >
              <Coins className="w-4 h-4 mr-2" />
              Launch your Token
            </Button>
          </div>
        </section>

        {/* Sale Models Section - Full Screen */}
        <section className="min-h-screen flex flex-col justify-center container mx-auto px-6 py-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Choose Your Sale Model
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {saleModels.map((model) => {
                const IconComponent = model.icon;
                return (
                  <Card
                    key={model.id}
                    className="bg-gray-800/50 border-gray-700 border-2 hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-gray-800/50`}>
                            <IconComponent
                              className={`w-6 h-6 ${model.iconColor}`}
                            />
                          </div>
                          <span className="text-gray-100">{model.title}</span>
                        </CardTitle>
                      </div>
                      <CardDescription className="text-gray-400">
                        {model.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => setRoute("create-sale")}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                        disabled={deploymentState === "deployed"}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Create Sale
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {deploymentState !== "deployed" && (
        <div className="fixed bottom-6 right-6">
          <Card className="bg-gray-800 border-gray-700 p-4">
            <p className="text-sm text-gray-400 mb-2">
              Connect your wallet to get started
            </p>
            <Button
              onClick={connectWallet}
              disabled={deploymentState === "in-progress"}
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Wallet className="w-4 h-4 mr-2" />
              {deploymentState == "in-progress"
                ? "Connecting..."
                : "Connect Wallet"}
            </Button>
          </Card>
        </div>
      )}
      <Footer />
    </div>
  );
}
