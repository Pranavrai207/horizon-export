
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Globe } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "JIANSH Spark Plugs",
    image: "https://horizons-cdn.hostinger.com/38727cf0-565e-4ae8-b59b-37f2b9952d98/4d6e21b485d448b1e5995e888266a397.png",
    url: "https://www.jianshsparkplugs.com/",
    telephone: "+91-8595010027",
    email: "jianshsparkplug@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "S-24, Balram Nagar, Loni Industrial Area, Loni Estate",
      addressLocality: "Ghaziabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "201102",
      addressCountry: "IN"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "09:00",
        closes: "18:00"
      }
    ]
  };

  const products = [
    {
      image: '/premium-quality-card.png',
      title: 'Premium Quality',
      description: 'Manufactured with precision engineering and highest quality materials for optimal performance',
      imageClass: 'object-contain object-center bg-white'
    },
    {
      image: '/Superior-performance.png',
      title: 'Superior Performance',
      description: 'Designed to deliver maximum efficiency, fuel economy, and engine longevity',
      imageClass: 'object-center'
    }
  ];

  const qualityFeatures = [
    'Rigorous 6-stage quality testing',
    'Precision-controlled manufacturing',
    'Heat resistance up to 1000°C',
    'Extended durability guarantee'
  ];

  return (
    <>
      <Helmet>
        <title>JIANSH Spark Plugs - Premium Spark Plugs for Superior Performance</title>
        <meta name="description" content="JIANSH Spark Plugs manufactures premium quality spark plugs with superior performance, durability, and reliability. Trusted by professionals worldwide." />
        <link rel="canonical" href="https://www.jianshsparkplugs.com/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JIANSH Spark Plugs" />
        <meta property="og:title" content="JIANSH Spark Plugs - Premium Spark Plugs for Superior Performance" />
        <meta property="og:description" content="JIANSH Spark Plugs manufactures premium quality spark plugs with superior performance, durability, and reliability." />
        <meta property="og:url" content="https://www.jianshsparkplugs.com/" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/38727cf0-565e-4ae8-b59b-37f2b9952d98/4d6e21b485d448b1e5995e888266a397.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JIANSH Spark Plugs - Premium Spark Plugs for Superior Performance" />
        <meta name="twitter:description" content="JIANSH Spark Plugs manufactures premium quality spark plugs with superior performance, durability, and reliability." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/38727cf0-565e-4ae8-b59b-37f2b9952d98/4d6e21b485d448b1e5995e888266a397.png" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative mt-20 h-[76vw] sm:h-[68vh] md:h-[78vh] lg:h-[calc(100vh-5rem)] overflow-hidden bg-gradient-to-b from-[#1f1f1f] to-black">
        <div className="absolute bottom-0 inset-x-0 z-30 px-0 sm:bottom-6 md:bottom-8 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:px-4">
          <Link to="/contact" className="inline-flex w-full sm:w-auto items-center justify-center space-x-2 bg-[#FF3333] text-white px-5 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#CC0000] hover:shadow-2xl hover:scale-105 active:scale-95">
            <span>Send Inquiry</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>

        {/* Hero image */}
        <div className="absolute inset-0 z-0 pb-8 sm:pb-0">
          <img
            src="/home.png"
            alt=""
            aria-hidden="true"
            className="hidden lg:block absolute inset-0 w-full h-full object-cover object-center [filter:brightness(0.6)_contrast(1.04)_saturate(1.02)]"
          />
          <img
            src="/home.png"
            alt="JIANSH Spark Plugs Hero"
            className="relative z-10 w-full h-full object-contain object-center [filter:brightness(0.9)_contrast(1.02)_saturate(1.02)]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-black mb-6">
              Leading Manufacturer of <span className="text-gradient">Premium Spark Plugs</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              JIANSH Spark Plugs is a trusted name in automotive excellence, specializing in the manufacturing of high-performance spark plugs. With years of industry experience and cutting-edge technology, we deliver products that meet the highest standards of quality, durability, and performance.
            </p>
            <Link to="/about" className="btn-outline inline-flex items-center space-x-2">
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="section-padding bg-gray-50 pattern-grid">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-black mb-4">
              Our <span className="text-gradient">Products</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Precision-engineered spark plugs designed for maximum performance and longevity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-industrial group cursor-pointer"
              >
                <div className="overflow-hidden mb-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 ${product.imageClass || ''}`}
                  />
                </div>
                <h3 className="text-black mb-3 group-hover:text-[#FF3333] transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Highlight */}
      <section className="section-padding bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-white mb-6">
                Uncompromising <span className="text-[#FF3333]">Quality Standards</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Every JIANSH spark plug undergoes rigorous testing through our comprehensive 6-stage quality assurance process. We ensure that each product meets international standards and exceeds customer expectations.
              </p>
              
              <div className="space-y-4 mb-8 max-w-2xl mx-auto text-left">
                {qualityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#FF3333] flex-shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center">
                <Link to="/quality-checks" className="btn-primary inline-flex items-center space-x-2">
                  <span>View Quality Process</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-black mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions or need assistance? Our team is here to help you find the perfect spark plug solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="card-industrial text-center group !px-3 !py-3 md:!px-4 md:!py-4"
            >
              <Phone className="w-6 h-6 text-[#FF3333] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-black mb-0.5 text-base md:text-lg leading-tight">Phone</h4>
              <a href="tel:8595010027" className="text-gray-600 hover:text-[#FF3333] transition-colors duration-300 text-sm leading-tight">
                8595010027
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-industrial text-center group !px-3 !py-3 md:!px-4 md:!py-4"
            >
              <Mail className="w-6 h-6 text-[#FF3333] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-black mb-0.5 text-base md:text-lg leading-tight">Email</h4>
              <a href="mailto:jianshsparkplug@gmail.com" className="text-gray-600 hover:text-[#FF3333] transition-colors duration-300 break-all text-sm leading-tight">
                jianshsparkplug@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-industrial text-center group !px-3 !py-3 md:!px-4 md:!py-4"
            >
              <Globe className="w-6 h-6 text-[#FF3333] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-black mb-0.5 text-base md:text-lg leading-tight">Website</h4>
              <p className="text-gray-600 text-sm leading-tight">www.jianshsparkplugs.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-industrial text-center group !px-3 !py-3 md:!px-4 md:!py-4"
            >
              <MapPin className="w-6 h-6 text-[#FF3333] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-black mb-0.5 text-base md:text-lg leading-tight">Location</h4>
              <p className="text-gray-600 text-sm leading-snug inline-block text-left">
                S-24, Balram Nagar, Loni Industrial Area, Loni Estate, Ghaziabad<br />
                Uttar Pradesh 201102, India
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/contact" className="btn-secondary inline-flex items-center space-x-2">
              <span>Contact Us Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;

