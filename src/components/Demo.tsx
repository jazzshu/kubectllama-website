
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Terminal } from 'lucide-react';

const Demo = () => {
  const [query, setQuery] = useState('');
  const [activeDemo, setActiveDemo] = useState<number | null>(null);

  const demoQueries = [
    {
      query: "list all pods in the kube-system namespace",
      command: "kubectl get pods -n kube-system",
      explanation: "This command lists all pods running in the kube-system namespace."
    },
    {
      query: "show all services with selector app=nginx",
      command: "kubectl get services -l app=nginx --all-namespaces",
      explanation: "This command finds all services across all namespaces that have the label app=nginx."
    },
    {
      query: "get logs for the container myapp in pod frontend-pod",
      command: "kubectl logs frontend-pod -c myapp",
      explanation: "This command retrieves logs for the myapp container within the frontend-pod pod."
    },
    {
      query: "delete all evicted pods",
      command: "kubectl get pods --all-namespaces --field-selector=status.phase=Failed | grep Evicted | awk '{print $2 \" --namespace=\" $1}' | xargs kubectl delete pod",
      explanation: "This command finds and deletes all pods in an 'Evicted' state across all namespaces."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      // In a real implementation, this would call the actual API
      // For demo purposes, just select the first demo item
      setActiveDemo(0);
    }
  };

  const handleDemoClick = (index: number) => {
    setQuery(demoQueries[index].query);
    setActiveDemo(index);
  };

  return (
    <section id="demo" className="section-container relative bg-gray-50">
      <div className="blur-circle bg-kubectlLama-blue/30 w-[400px] h-[400px] top-[30%] left-[-200px]"></div>
      
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block py-1 px-3 text-xs font-semibold bg-kubectlLama-blue/10 text-kubectlLama-blue rounded-full mb-4"
        >
          Interactive Demo
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Try <span className="text-gradient">kubectllama</span> in action
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-kubectlLama-gray"
        >
          See how natural language is transformed into kubectl commands with real examples.
        </motion.p>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-12"
      >
        <div className="p-6 border-b">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <div className="flex-1 bg-gray-100 rounded-lg flex items-center px-4 py-2">
              <Search className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Describe what you want to do with kubectl..."
                className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-sm"
              />
            </div>
            <button 
              type="submit" 
              className="btn-primary py-2"
              disabled={!query}
            >
              Generate
            </button>
          </form>
        </div>
        
        <div className="p-6">
          <div className="text-sm font-medium text-kubectlLama-gray mb-4">Try these examples:</div>
          <div className="flex flex-wrap gap-2 mb-6">
            {demoQueries.map((demo, index) => (
              <button
                key={index}
                onClick={() => handleDemoClick(index)}
                className="px-3 py-1 text-xs rounded-full border border-gray-200 hover:border-kubectlLama-blue hover:bg-kubectlLama-blue/5 transition-colors"
              >
                {demo.query}
              </button>
            ))}
          </div>
          
          {activeDemo !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="terminal-text"
            >
              <div className="flex items-start mb-4">
                <span className="text-kubectlLama-blue mr-2">$</span>
                <span className="font-mono">kubectllama "{demoQueries[activeDemo].query}"</span>
              </div>
              <div className="pl-4 border-l-2 border-gray-300 mb-4">
                <div className="font-medium mb-1">Command:</div>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto mb-2">
                  {demoQueries[activeDemo].command}
                </pre>
                <div className="text-sm text-gray-600">
                  {demoQueries[activeDemo].explanation}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center"
      >
        <a href="#installation" onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById("installation");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }} className="btn-primary inline-flex items-center">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
};

export default Demo;
