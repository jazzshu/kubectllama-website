
import React from 'react';
import { Github, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-kubectlLama-blue text-white">
                <span className="font-mono font-bold text-sm">K</span>
              </div>
              <span className="font-semibold text-lg">kubectllama</span>
            </div>
            <p className="text-kubectlLama-gray text-sm max-w-md">
              An open-source project that uses Ollama to suggest kubectl commands from natural language,
              simplifying Kubernetes management for everyone.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a 
                href="https://github.com/jazzshu/kubectllama" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-kubectlLama-dark hover:border-kubectlLama-blue hover:text-kubectlLama-blue transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/jazzshu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-kubectlLama-dark hover:border-kubectlLama-blue hover:text-kubectlLama-blue transition-colors"
                aria-label="Author"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
            <p className="text-kubectlLama-gray text-sm">
              © {new Date().getFullYear()} kubectllama. MIT License.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
