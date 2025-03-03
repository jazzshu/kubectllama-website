
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Terminal, Zap, Globe, Shield, GitBranch } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Terminal />,
      title: 'Natural Language Processing',
      description: 'Convert plain English into precise kubectl commands without memorizing complex syntax.',
    },
    {
      icon: <Brain />,
      title: 'Powered by Ollama',
      description: 'Leverages Ollama to provide accurate command translations with local AI processing.',
    },
    {
      icon: <Shield />,
      title: 'Secure & Private',
      description: 'Runs locally on your machine without sending data to external servers.',
    },
    {
      icon: <Zap />,
      title: 'Instant Results',
      description: 'Get immediate command suggestions and explanations with low latency.',
    },
    {
      icon: <Globe />,
      title: 'Works Offline',
      description: 'No internet connection required after initial setup.',
    },
    {
      icon: <GitBranch />,
      title: 'Open Source',
      description: 'Fully open source and community-driven development.',
    },
  ];

  const fadeInUpVariant = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="features" className="section-container relative">
      <div className="blur-circle bg-kubectlLama-teal/30 w-[400px] h-[400px] top-[20%] right-[-200px]"></div>
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block py-1 px-3 text-xs font-semibold bg-kubectlLama-blue/10 text-kubectlLama-blue rounded-full mb-4"
        >
          Features
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Why use <span className="text-gradient">kubectllama?</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-kubectlLama-gray"
        >
          KubectlLama simplifies Kubernetes management by translating natural language into kubectl commands,
          making it easier for both beginners and experts.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUpVariant}
            className="glass-panel rounded-xl p-6 h-full flex flex-col"
          >
            <div className="feature-icon-container">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-kubectlLama-gray">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
