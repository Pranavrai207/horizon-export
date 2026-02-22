
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact JIANSH Spark Plugs - Get in Touch for Inquiries</title>
        <meta name="description" content="Contact JIANSH Spark Plugs for product inquiries, technical support, or business partnerships. Located in Ghaziabad, UP. Call 8595010027 or email us." />
        <link rel="canonical" href="https://www.jianshsparkplugs.com/contact" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JIANSH Spark Plugs" />
        <meta property="og:title" content="Contact JIANSH Spark Plugs - Get in Touch for Inquiries" />
        <meta property="og:description" content="Contact JIANSH Spark Plugs for product inquiries, technical support, or business partnerships." />
        <meta property="og:url" content="https://www.jianshsparkplugs.com/contact" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/38727cf0-565e-4ae8-b59b-37f2b9952d98/4d6e21b485d448b1e5995e888266a397.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact JIANSH Spark Plugs - Get in Touch for Inquiries" />
        <meta name="twitter:description" content="Contact JIANSH Spark Plugs for product inquiries, technical support, or business partnerships." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/38727cf0-565e-4ae8-b59b-37f2b9952d98/4d6e21b485d448b1e5995e888266a397.png" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden mt-20 py-12 md:py-0">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-[#1a1a1a] to-[#FF3333]/20" />
        <div className="absolute inset-0 z-0 pattern-dots opacity-40" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto"
        >
          <h1 className="text-white mb-6 drop-shadow-2xl text-4xl md:text-5xl lg:text-6xl">
            Contact <span className="text-[#FF3333]">Us</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-medium">
            We're Here to Help You Find the Perfect Solution
          </p>
        </motion.div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-20 px-4 md:px-6 lg:px-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 md:space-y-8 w-full max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-center">
                <div>
                  <h2 className="text-black mb-2 text-3xl md:text-4xl">
                    Send Us a <span className="text-[#FF3333]">Message</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    Have questions about our products or need technical assistance?
                  </p>
                  <a
                    href="https://wa.me/918384093072"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2.5 text-[#25D366] hover:text-[#1DA851] transition-colors duration-300 font-bold text-xl md:text-2xl"
                  >
                    <svg viewBox="0 0 32 32" className="w-6 h-6 md:w-7 md:h-7" aria-hidden="true" focusable="false">
                      <path fill="currentColor" d="M19.11 17.17c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.04-.15.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.49-1.84-.15-.27-.02-.42.11-.56.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.44-.82-1.98-.21-.51-.43-.44-.6-.45h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.95 2.57 1.08 2.75.14.18 1.86 2.84 4.5 3.98.63.27 1.12.44 1.5.56.63.2 1.2.17 1.65.1.5-.07 1.58-.65 1.8-1.28.22-.63.22-1.17.15-1.28-.06-.12-.24-.18-.5-.31zM16 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.47 1.71 6.4L3.2 28.8l6.57-1.68c1.86 1.01 3.96 1.54 6.23 1.55h.01c7.06 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05A12.7 12.7 0 0 0 16 3.2zm0 23.3h-.01a10.45 10.45 0 0 1-5.32-1.45l-.38-.22-3.9 1 1.04-3.8-.24-.39a10.5 10.5 0 1 1 8.8 4.86z" />
                    </svg>
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
                <div className="justify-self-start md:justify-self-end mt-4 md:mt-8">
                  <img
                    src="/whatsapp-qr.png"
                    alt="Scan to enquire on WhatsApp"
                    className="w-48 h-48 md:w-64 md:h-64 object-contain"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-black mb-4 md:mb-6 text-3xl md:text-4xl">
                  Get in <span className="text-gradient">Touch</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                  Reach out to us through any of the following channels. Our team is ready to assist you with product information, technical support, or business inquiries.
                </p>
              </div>

              <div className="space-y-2">
                <div className="card-industrial group !px-3 !py-3 md:!px-4 md:!py-4">
                  <div className="flex items-start space-x-2.5">
                    <Phone className="w-4 h-4 text-[#FF3333] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="text-black mb-0.5 text-base md:text-lg leading-tight">Phone</h4>
                      <a
                        href="tel:8595010027"
                        className="text-gray-600 hover:text-[#FF3333] transition-colors duration-300 text-sm font-medium leading-tight"
                      >
                        8595010027
                      </a>
                      <p className="text-xs text-gray-500 mt-0.5 leading-snug">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="card-industrial group !px-3 !py-3 md:!px-4 md:!py-4">
                  <div className="flex items-start space-x-2.5">
                    <Mail className="w-4 h-4 text-[#FF3333] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="text-black mb-0.5 text-base md:text-lg leading-tight">Email</h4>
                      <a
                        href="mailto:jianshsparkplug@gmail.com"
                        className="text-gray-600 hover:text-[#FF3333] transition-colors duration-300 font-medium break-all text-sm leading-tight"
                      >
                        jianshsparkplug@gmail.com
                      </a>
                      <p className="text-xs text-gray-500 mt-0.5 leading-snug">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="card-industrial group !px-3 !py-3 md:!px-4 md:!py-4">
                  <div className="flex items-start space-x-2.5">
                    <MapPin className="w-4 h-4 text-[#FF3333] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="text-black mb-0.5 text-base md:text-lg leading-tight">Business Address</h4>
                      <p className="text-gray-600 font-medium text-sm leading-snug">
                        S-24, Balram Nagar, Loni Industrial Area, Loni Estate, Ghaziabad<br />
                        Uttar Pradesh 201102, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-black to-[#1a1a1a] text-white p-8 industrial-shadow-lg">
                <h4 className="text-white mb-4 text-xl font-bold">Business Hours</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold text-[#FF3333]">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
  
