import { Github, Twitter, MessageCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm mt-auto">
      <div className="text-left mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Midnight Launchpad
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              The premier launchpad for innovative projects on the Midnight
              blockchain.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-gray-200 font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-400 hover:text-gray-200 text-sm transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/projects"
                className="block text-gray-400 hover:text-gray-200 text-sm transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/token-generator"
                className="block text-gray-400 hover:text-gray-200 text-sm transition-colors"
              >
                Token Generator
              </Link>
              <Link
                to="/create-sale"
                className="block text-gray-400 hover:text-gray-200 text-sm transition-colors"
              >
                Create Sale
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-gray-200 font-semibold">Resources</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-gray-200 text-sm transition-colors"
              >
                Documentation
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-gray-200 text-sm transition-colors"
              >
                API Reference
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-gray-200 text-sm transition-colors"
              >
                Support
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-gray-200 font-semibold">Community</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center px-12">
          <p className="text-gray-400 text-sm">
            © 2024 Midnight Launchpad. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
