
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Copy, Check, Terminal } from 'lucide-react';

const Installation = () => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const installationMethods = [
    {
      id: 'go',
      title: 'Using Go',
      command: 'go install github.com/jazzshu/kubectllama@latest',
      description: 'Install directly using Go if you have Go installed on your system.'
    },
    {
      id: 'source',
      title: 'From Source',
      command: 'git clone https://github.com/jazzshu/kubectllama.git\ncd kubectllama\ngo build -o kubectl-lama main.go\nsudo mv kubectl-lama /usr/local/bin/',
      description: 'Clone the repository and build from source for the latest version.'
    }
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const steps = [
    {
      title: 'Install Ollama',
      description: 'First, install Ollama on your system following the instructions on the Ollama website.',
      link: 'https://ollama.ai',
      linkText: 'Visit Ollama website'
    },
    {
      title: 'Pull the Llama2 model',
      description: 'Run the command to pull the Llama2 model:',
      command: 'ollama pull llama2'
    },
    {
      title: 'Install kubectllama',
      description: 'Choose one of the installation methods below.'
    },
    {
      title: 'Start using kubectllama',
      description: 'Run the command with your natural language query:',
      command: 'kubectl-lama "list all pods that are not running"'
    }
  ];

  return (
    <section id="installation" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block py-1 px-3 text-xs font-semibold bg-kubectlLama-blue/10 text-kubectlLama-blue rounded-full mb-4"
        >
          Installation
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Get started with <span className="text-gradient">kubectllama</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-kubectlLama-gray"
        >
          Follow these steps to install and start using kubectllama on your machine.
        </motion.p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute left-8 h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex">
                <div className="absolute left-8 -translate-x-1/2 h-8 w-8 rounded-full bg-kubectlLama-blue text-white flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="ml-16 flex-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-kubectlLama-gray mb-3">{step.description}</p>
                  
                  {step.command && (
                    <div className="terminal-text flex items-start mb-3">
                      <div className="flex-1 overflow-x-auto">
                        <span className="text-kubectlLama-blue mr-2">$</span>
                        <span>{step.command}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(step.command, `step-${index}`)}
                        className="ml-2 p-1 hover:bg-gray-200 rounded-md transition-colors"
                        aria-label="Copy to clipboard"
                      >
                        {copied === `step-${index}` ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-500" />
                        )}
                      </button>
                    </div>
                  )}
                  
                  {step.link && (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-kubectlLama-blue hover:underline"
                    >
                      {step.linkText} <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6">Installation Methods</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {installationMethods.map((method) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-panel rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <Terminal className="h-5 w-5 text-kubectlLama-blue mr-2" />
                  <h4 className="font-semibold">{method.title}</h4>
                </div>
                <p className="text-sm text-kubectlLama-gray mb-4">{method.description}</p>
                <div className="terminal-text flex items-start">
                  <div className="flex-1 overflow-x-auto whitespace-pre">
                    {method.command}
                  </div>
                  <button
                    onClick={() => copyToClipboard(method.command, method.id)}
                    className="ml-2 p-1 hover:bg-gray-200 rounded-md transition-colors"
                    aria-label="Copy to clipboard"
                  >
                    {copied === method.id ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <a 
            href="https://github.com/jazzshu/kubectllama" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Documentation
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Installation;
