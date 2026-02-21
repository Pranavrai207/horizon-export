
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, Cog, Zap, Flame, Shield, CheckCircle, Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const QualityChecksPage = () => {
  const qualityStages = [
    {
      icon: <Search className="w-16 h-16" />,
      title: 'Raw Material Inspection',
      description: 'Every batch of raw materials undergoes rigorous inspection to ensure they meet our strict quality standards. We verify chemical composition, purity levels, and physical properties before materials enter production.',
      features: ['Chemical composition analysis', 'Purity verification', 'Physical property testing', 'Supplier certification review']
    },
    {
      icon: <Cog className="w-16 h-16" />,
      title: 'Precision Manufacturing',
      description: 'Our state-of-the-art CNC machines and precision tools manufacture each component with tolerances measured in microns. Every step is monitored to ensure dimensional accuracy and consistency.',
      features: ['CNC precision machining', 'Dimensional verification', 'Surface finish inspection', 'Assembly quality control']
    },
    {
      icon: <Zap className="w-16 h-16" />,
      title: 'Performance Testing',
      description: 'Each spark plug is tested under simulated engine conditions to verify ignition performance, voltage requirements, and spark consistency across various operating parameters.',
      features: ['Ignition performance testing', 'Voltage requirement verification', 'Spark consistency analysis', 'Cold start simulation']
    },
    {
      icon: <Flame className="w-16 h-16" />,
      title: 'Heat Resistance Testing',
      description: 'Spark plugs are subjected to extreme temperature cycles up to 1000°C to ensure they can withstand the intense heat generated in modern engines without degradation or failure.',
      features: ['High-temperature exposure', 'Thermal cycling tests', 'Heat dissipation analysis', 'Material stability verification']
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: 'Durability Testing',
      description: 'Extended durability tests simulate thousands of hours of engine operation to verify long-term reliability, resistance to fouling, and consistent performance over the product lifecycle.',
      features: ['Accelerated life testing', 'Fouling resistance evaluation', 'Electrode wear analysis', 'Insulator integrity testing']
    },
    {
      icon: <CheckCircle className="w-16 h-16" />,
      title: 'Final Quality Inspection',
      description: 'Before packaging, every spark plug undergoes a comprehensive final inspection covering all critical parameters. Only products that pass all quality checks receive the JIANSH certification.',
      features: ['Visual inspection', 'Dimensional verification', 'Performance validation', 'Packaging quality control']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Quality Checks - JIANSH Spark Plugs 6-Stage Testing Process</title>
        <meta name="description" content="Discover JIANSH's comprehensive 6-stage quality testing process ensuring every spark plug meets the highest standards of performance, durability, and reliability." />
        <link rel="canonical" href="https://www.jianshsparkplugs.com/quality-checks" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JIANSH Spark Plugs" />
        <meta property="og:title" content="Quality Checks - JIANSH Spark Plugs 6-Stage Testing Process" />
        <meta property="og:description" content="Discover JIANSH's comprehensive 6-stage quality testing process ensuring every spark plug meets high standards of performance and reliability." />
        <meta property="og:url" content="https://www.jianshsparkplugs.com/quality-checks" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/38727cf0-565e-4ae8-b59b-37f2b9952d98/4d6e21b485d448b1e5995e888266a397.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quality Checks - JIANSH Spark Plugs 6-Stage Testing Process" />
        <meta name="twitter:description" content="Discover JIANSH's comprehensive 6-stage quality testing process ensuring every spark plug meets high standards of performance and reliability." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/38727cf0-565e-4ae8-b59b-37f2b9952d98/4d6e21b485d448b1e5995e888266a397.png" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1682561477064-44fb2dfd82bf"
            alt="JIANSH Quality Testing Laboratory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-[#FF3333]/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <h1 className="text-white mb-6 drop-shadow-2xl">
            Quality <span className="text-[#FF3333]">Assurance</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-medium">
            6-Stage Testing Process for Uncompromising Excellence
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
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
              Rigorous Testing for <span className="text-gradient">Superior Quality</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At JIANSH, quality is not an afterthought—it's built into every stage of our manufacturing process. Our comprehensive 6-stage quality assurance system ensures that every spark plug meets the highest standards of performance, durability, and reliability. From raw material inspection to final quality checks, we leave nothing to chance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Stages Grid */}
      <section className="section-padding bg-gray-50 pattern-grid">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-l-4 border-[#FF3333] p-8 transition-all duration-300 hover:shadow-2xl hover:border-l-8 group"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-[#FF3333] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {stage.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#FF3333] mb-2 uppercase tracking-wider">
                      Stage {index + 1}
                    </div>
                    <h3 className="text-black text-2xl font-bold mb-3">
                      {stage.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {stage.description}
                </p>

                <div className="space-y-2">
                  {stage.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#FF3333] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Laboratory */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-white mb-6">
                State-of-the-Art <span className="text-[#FF3333]">Testing Facility</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Our advanced testing laboratory is equipped with the latest diagnostic equipment and testing apparatus. We invest continuously in technology to ensure our quality control processes remain at the forefront of the industry.
                </p>
                <p>
                  Every test is conducted by trained technicians following strict protocols. Data from each testing stage is recorded and analyzed to maintain our commitment to continuous improvement and quality excellence.
                </p>
                <p>
                  Our testing procedures exceed industry standards, incorporating both international quality benchmarks and our own rigorous internal specifications. This dual-layer approach ensures that JIANSH spark plugs consistently outperform expectations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white/5 backdrop-blur-sm p-6 border-l-4 border-[#FF3333]">
                  <div className="text-4xl font-bold text-[#FF3333] mb-2">100%</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Products Tested</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 border-l-4 border-[#FF3333]">
                  <div className="text-4xl font-bold text-[#FF3333] mb-2">6</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Quality Stages</div>
                </div>
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
                  src="https://images.unsplash.com/photo-1682561477064-44fb2dfd82bf"
                  alt="JIANSH Advanced Testing Laboratory"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
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
              Quality <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Our commitment to quality is validated by rigorous internal testing and adherence to strict manufacturing standards. JIANSH spark plugs are designed to meet demanding performance expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                className="card-industrial"
              >
                <Shield className="w-16 h-16 text-[#FF3333] mx-auto mb-4" />
                <h4 className="text-black mb-3">Precision Controlled</h4>
                <p className="text-gray-600">
                  Manufacturing processes monitored with strict quality control at every stage
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card-industrial"
              >
                <CheckCircle className="w-16 h-16 text-[#FF3333] mx-auto mb-4" />
                <h4 className="text-black mb-3">Quality Assured</h4>
                <p className="text-gray-600">
                  Every product undergoes comprehensive testing before shipment
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card-industrial"
              >
                <Award className="w-16 h-16 text-[#FF3333] mx-auto mb-4" />
                <h4 className="text-black mb-3">Industry Leading</h4>
                <p className="text-gray-600">
                  Exceeding industry benchmarks for performance and durability
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-[#FF3333] to-[#CC0000] text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-white mb-6">
              Experience the JIANSH Difference
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Our rigorous quality assurance process ensures that every JIANSH spark plug delivers the performance, reliability, and durability you demand. Trust in quality. Trust in JIANSH.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default QualityChecksPage;
