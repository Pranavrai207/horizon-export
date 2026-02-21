
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

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="JIANSH Premium Spark Plug"
            className="w-full h-full object-cover [filter:brightness(0.82)_contrast(1.12)_saturate(1.08)]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_55%,rgba(20,20,20,0.22)_0%,rgba(20,20,20,0.14)_38%,rgba(20,20,20,0.08)_58%,rgba(20,20,20,0)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0)_16%,rgba(0,0,0,0)_84%,rgba(0,0,0,0.12)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-[#FF3333]/45 backdrop-blur-[1px]" />
          <div className="absolute inset-0 pattern-dots opacity-20" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-center px-6 w-full max-w-4xl"
        >
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Engineered with precision, tested for excellence. Experience unmatched reliability and performance with JIANSH.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Send Inquiry</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-white mb-6">
                Uncompromising <span className="text-[#FF3333]">Quality Standards</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Every JIANSH spark plug undergoes rigorous testing through our comprehensive 6-stage quality assurance process. We ensure that each product meets international standards and exceeds customer expectations.
              </p>
              
              <div className="space-y-4 mb-8">
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

              <Link to="/quality-checks" className="btn-primary inline-flex items-center space-x-2">
                <span>View Quality Process</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
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
                  src="https://horizons-cdn.hostinger.com/38727cf0-565e-4ae8-b59b-37f2b9952d98/4d6e21b485d448b1e5995e888266a397.png"
                  alt="JIANSH Quality Testing Process"
                  className="w-full h-auto"
                />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="card-industrial text-center group"
            >
              <Phone className="w-12 h-12 text-[#FF3333] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-black mb-2">Phone</h4>
              <a href="tel:8595010027" className="text-gray-600 hover:text-[#FF3333] transition-colors duration-300">
                8595010027
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-industrial text-center group"
            >
              <Mail className="w-12 h-12 text-[#FF3333] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-black mb-2">Email</h4>
              <a href="mailto:jianshsparkplug@gmail.com" className="text-gray-600 hover:text-[#FF3333] transition-colors duration-300 break-all text-sm">
                jianshsparkplug@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-industrial text-center group"
            >
              <Globe className="w-12 h-12 text-[#FF3333] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-black mb-2">Website</h4>
              <p className="text-gray-600">www.jianshsparkplugs.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-industrial text-center group"
            >
              <MapPin className="w-12 h-12 text-[#FF3333] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-black mb-2">Location</h4>
              <p className="text-gray-600">
                S-24, Balram Nagar<br />
                Loni Industrial Area<br />
                Loni Estate, Ghaziabad<br />
                Uttar Pradesh 201102<br />
                India
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
