import React from 'react';
import { Github, Twitter, Globe, Linkedin, Mail } from 'lucide-react';
import MyImage from '../assets/logo-nobg.png';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg text-white">
              <img 
              src={MyImage}
              alt="K logo"
              className="w-6 h-6" // Adjust size as needed
            />
              </div>
              <span className="font-semibold text-lg">kubectllama</span>
            </div>
            <p className="text-kubectlLama-gray text-sm max-w-md">
              An open-source project that uses Ollama to suggest kubectl commands from natural language,
              simplifying Kubernetes management for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-kubectlLama-dark mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://www.linkedin.com/in/jasonshuyinta/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-kubectlLama-gray hover:text-kubectlLama-blue transition-colors"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
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
                href="https://www.linkedin.com/in/jasonshuyinta/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-kubectlLama-dark hover:border-kubectlLama-blue hover:text-kubectlLama-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
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
