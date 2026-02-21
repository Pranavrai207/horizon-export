
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Store in localStorage
      const submissions = JSON.parse(localStorage.getItem('jiansh_inquiries') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('jiansh_inquiries', JSON.stringify(submissions));

      setIsSubmitting(false);
      setIsSubmitted(true);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting JIANSH. We'll get back to you soon.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

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

      {/* Contact Form & Info */}
      <section className="py-16 md:py-20 px-4 md:px-6 lg:px-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h2 className="text-black mb-4 md:mb-6 text-3xl md:text-4xl">
                Send Us a <span className="text-gradient">Message</span>
              </h2>
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                Have questions about our products or need technical assistance? Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-industrial"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-industrial"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-industrial"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="input-industrial resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                    isSubmitting || isSubmitted ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 md:space-y-8 w-full"
            >
              <div>
                <h2 className="text-black mb-4 md:mb-6 text-3xl md:text-4xl">
                  Get in <span className="text-gradient">Touch</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                  Reach out to us through any of the following channels. Our team is ready to assist you with product information, technical support, or business inquiries.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="card-industrial group">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-8 h-8 text-[#FF3333] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="text-black mb-2">Phone</h4>
                      <a
                        href="tel:8595010027"
                        className="text-gray-600 hover:text-[#FF3333] transition-colors duration-300 text-lg font-medium"
                      >
                        8595010027
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="card-industrial group">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-8 h-8 text-[#FF3333] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="text-black mb-2">Email</h4>
                      <a
                        href="mailto:jianshsparkplug@gmail.com"
                        className="text-gray-600 hover:text-[#FF3333] transition-colors duration-300 font-medium break-all"
                      >
                        jianshsparkplug@gmail.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="card-industrial group">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-8 h-8 text-[#FF3333] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="text-black mb-2">Business Address</h4>
                      <p className="text-gray-600 font-medium">
                        S-24, Balram Nagar<br />
                        Loni Industrial Area<br />
                        Loni Estate, Ghaziabad<br />
                        Uttar Pradesh 201102<br />
                        India
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
  