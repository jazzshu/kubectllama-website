
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="blur-circle bg-kubectlLama-blue w-[600px] h-[600px] top-[-300px] right-[-300px]"></div>
      <div className="blur-circle bg-kubectlLama-purple w-[600px] h-[600px] bottom-[-200px] left-[-300px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 text-xs font-semibold bg-kubectlLama-blue/10 text-kubectlLama-blue rounded-full">
              Open Source Kubernetes CLI Assistant
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Transform natural language into 
            <span className="text-gradient block md:inline"> kubectl commands</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-kubectlLama-gray mb-10 max-w-3xl"
          >
            KubectlLama leverages Ollama to convert your natural language requests into precise kubectl commands,
            making Kubernetes management simpler and more accessible.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#installation" className="btn-primary">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="https://github.com/jazzshu/kubectllama" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View on GitHub
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 md:mt-24 max-w-4xl mx-auto"
        >
          <div className="glass-panel-dark rounded-xl overflow-hidden">
            <div className="bg-kubectlLama-dark py-2 px-4 flex items-center">
              <div className="flex gap-2 mr-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-sm text-white opacity-80">Terminal</div>
            </div>
            <div className="p-6 font-mono text-white overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="flex items-start mb-4"
              >
                <span className="text-kubectlLama-teal mr-2">$</span>
                <span>kubectl-lama "list all pods that are not running"</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.1 }}
                className="text-gray-400 mb-4 pl-4 border-l border-gray-700 ml-2"
              >
                Generating kubectl command...
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.4 }}
                className="pl-4 border-l border-gray-700 ml-2 text-sm"
              >
                <p className="mb-2 text-kubectlLama-teal">Found command:</p>
                <pre className="bg-kubectlLama-dark/50 p-2 rounded overflow-x-auto text-white mb-2">
                  kubectl get pods --field-selector=status.phase!=Running --all-namespaces
                </pre>
                <p>This will list all pods across all namespaces that are not in the "Running" state.</p>
                <p className="mt-2">Execute this command? [Y/n] <span className="animate-pulse">_</span></p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
