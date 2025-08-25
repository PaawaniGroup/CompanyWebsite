import React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import SectionHeader from "../SecHeader";
import Badge from "../Badge";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Sent Successfully! We will get back to you soon.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      id: 1,
      icon: MapPin,
      title: "Address",
      content: "651/B, Sainik Colony Near Ganga Enclave, Roorkee, Uttarakhand Pincode - 247667",
      color: "from-[#20ab26] to-[#1a8f21]",
    },
    {
      id: 2,
      icon: Phone,
      title: "Phone",
      content: "+91 7302983397",
      color: "from-[#1a8f21] to-[#16a085]",
    },
    {
      id: 3,
      icon: Mail,
      title: "Email",
      content: "contact@paawanigroup.com",
      color: "from-[#16a085] to-[#27ae60]",
    },
  ];

  return (
    <section
      id="contact"
      className="py-30 bg-background relative overflow-hidden"
    >
      {/* Background Textures and Elements */}
      <div className="absolute inset-0 bg-texture-grid opacity-70" />
      <div className="absolute inset-0 bg-texture-dots opacity-70" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-xl" />
      <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary/4 rounded-full blur-xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <SectionHeader
          title="Let's Start a"
          highlighted="Conversation"
          description="Ready to transform your business? Let's discuss how we can help you achieve your goals and drive sustainable growth."
          badge={<Badge title="Get In Touch" />}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="glass-effect rounded-3xl p-10 bg-texture-wave relative overflow-hidden">
              <div className="absolute inset-0 gradient-overlay-green-light" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#1a8f21] rounded-3xl flex items-center justify-center shadow-lg">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl font-bold text-charcoal">
                      Get In Touch
                    </h3>
                    <p className="font-body text-muted-foreground">
                      We're here to help
                    </p>
                  </div>
                </div>
                <p className="font-body text-muted-foreground text-lg leading-relaxed">
                  Let's discuss how we can
                  help you achieve your goals and create lasting impact in your
                  success.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: info.id * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="modern-card border-0 transition-all duration-300 hover:-translate-y-1 bg-texture-noise">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                          >
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <h4 className="font-heading text-xl font-semibold text-charcoal mb-2">
                              {info.title}
                            </h4>
                            <p className="font-body text-muted-foreground leading-relaxed">
                              {info.content}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            inital={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="modern-card border-0 shadow-2xl bg-texture-noise relative overflow-hidden">
              <div className="absolute inset-0 gradient-overlay-green-light" />
              <CardContent className="p-10 relative z-10">
                <div className="mb-8">
                  <h3 className="font-heading text-3xl font-bold text-charcoal mb-4">
                    Send us a Message
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body font-semibold text-charcoal mb-3 block">
                        Your Name
                      </label>
                      <Input
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="glass-effect border-primary/20 text-charcoal placeholder:text-muted-foreground h-12"
                      />
                    </div>
                    <div>
                      <label className="font-body font-semibold text-charcoal mb-3 block">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="glass-effect border-primary/20 text-charcoal placeholder:text-muted-foreground h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body font-semibold text-charcoal mb-3 block">
                      Subject
                    </label>
                    <Input
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                      className="glass-effect border-primary/20 text-charcoal placeholder:text-muted-foreground h-12"
                    />
                  </div>

                  <div>
                    <label className="font-body font-semibold text-charcoal mb-3 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us more about your project or inquiry..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={6}
                      className="glass-effect border-primary/20 text-charcoal placeholder:text-muted-foreground resize-none"
                    />
                  </div>

                  <Button
                  type="submit"
                  className="btn-modern w-full font-body text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg group">
                    Send Message
                    <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
