
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Award, TrendingUp, Shield, Users } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Quality Excellence',
      description: 'Committed to delivering products that exceed industry standards through rigorous testing and quality control.'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Reliability',
      description: 'Building trust through consistent performance and durability that professionals depend on.'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Innovation',
      description: 'Continuously advancing our technology and processes to stay ahead in the automotive industry.'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Customer Focus',
      description: 'Dedicated to understanding and meeting the unique needs of every customer we serve.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About JIANSH Spark Plugs - Leading Manufacturer of Premium Spark Plugs</title>
        <meta name="description" content="Learn about JIANSH Spark Plugs' commitment to quality, innovation, and excellence in spark plug manufacturing. Discover our history, vision, and values." />
        <link rel="canonical" href="https://www.jianshsparkplugs.com/about" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JIANSH Spark Plugs" />
        <meta property="og:title" content="About JIANSH Spark Plugs - Leading Manufacturer of Premium Spark Plugs" />
        <meta property="og:description" content="Learn about JIANSH Spark Plugs' commitment to quality, innovation, and excellence in spark plug manufacturing." />
        <meta property="og:url" content="https://www.jianshsparkplugs.com/about" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/38727cf0-565e-4ae8-b59b-37f2b9952d98/4d6e21b485d448b1e5995e888266a397.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About JIANSH Spark Plugs - Leading Manufacturer of Premium Spark Plugs" />
        <meta name="twitter:description" content="Learn about JIANSH Spark Plugs' commitment to quality, innovation, and excellence in spark plug manufacturing." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/38727cf0-565e-4ae8-b59b-37f2b9952d98/4d6e21b485d448b1e5995e888266a397.png" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0d0d0f] via-[#141418] to-[#2a2a30]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(80%_70%_at_80%_20%,rgba(255,51,51,0.22)_0%,rgba(255,51,51,0)_70%)]" />
        <div className="absolute inset-0 z-0 pattern-dots opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <h1 className="text-white mb-6 drop-shadow-2xl">
            About <span className="text-[#FF3333]">JIANSH</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-medium">
            Engineering Excellence in Every Spark
          </p>
        </motion.div>
      </section>

      {/* Company History */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-black mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  JIANSH Spark Plugs was founded with a singular vision: to manufacture spark plugs that set new standards in performance, reliability, and durability. What began as a commitment to quality has evolved into a legacy of excellence in the automotive industry.
                </p>
                <p>
                  Located in S-24, Balram Nagar, Loni Industrial Area, Loni Estate, Ghaziabad, Uttar Pradesh 201102, our state-of-the-art manufacturing facility combines traditional craftsmanship with cutting-edge technology. Every spark plug that leaves our facility represents our unwavering dedication to precision engineering.
                </p>
                <p>
                  Over the years, we have built a reputation for delivering products that professionals trust. Our spark plugs are designed to withstand extreme conditions while maintaining optimal performance, making them the preferred choice for automotive experts and enthusiasts alike.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="industrial-shadow-lg">
                <img
                  src="/our-story.png"
                  alt="JIANSH Manufacturing Excellence"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-black text-white pattern-dots">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border-l-4 border-[#FF3333] p-8"
            >
              <Target className="w-16 h-16 text-[#FF3333] mb-6" />
              <h3 className="text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the global leader in spark plug manufacturing, recognized for our unwavering commitment to quality, innovation, and customer satisfaction. We envision a future where JIANSH becomes synonymous with automotive excellence and reliability worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border-l-4 border-[#FF3333] p-8"
            >
              <Award className="w-16 h-16 text-[#FF3333] mb-6" />
              <h3 className="text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To manufacture premium spark plugs that deliver superior performance, exceptional durability, and unmatched reliability. We are committed to continuous innovation, rigorous quality control, and providing our customers with products that exceed their expectations every time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-black mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at JIANSH
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-industrial text-center group"
              >
                <div className="text-[#FF3333] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-black mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-gradient-to-br from-black via-[#1a1a1a] to-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-white mb-6">
              Our Commitment to <span className="text-[#FF3333]">Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              At JIANSH, we don't just manufacture spark plugs—we engineer solutions that power performance. Every product that bears our name represents our promise of quality, durability, and reliability. We stand behind our products with confidence because we know they're built to last.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              With years of industry experience and a relentless focus on innovation, JIANSH continues to set new benchmarks in spark plug manufacturing. Our commitment to excellence is not just a statement—it's a guarantee backed by rigorous testing, premium materials, and uncompromising quality standards.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
