import React, { useState } from "react";
import { motion } from "motion/react";
import { jobOpenings } from "./index";
import { companyCulture } from "./index";
import { companyValues } from "./index";
import { benefits } from "./index";
import { departments } from "./index";
import SecHeader from "@/components/SecHeader";
import Badge1 from "@/components/Badge";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Card, CardContent } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Users,
  DollarSign,
  Heart,
  Award,
  Coffee,
  Laptop,
  Car,
  Calendar,
  Send,
  Search,
  Filter,
  Star,
  Briefcase,
  TrendingUp,
  Shield,
  BookOpen,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogHeader, DialogContent, DialogTitle } from "@/components/ui/dialog";


const Career = ({ embedded = false }) => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Filter by Department
  const filteredJobs = jobOpenings.filter((job) => {
    const departmentMatch =
      selectedDepartment === "All" || job.department === selectedDepartment;
    return departmentMatch;
  });

  // In embedded mode, show only featured jobs or limit to 3
  const displayJobs = embedded
    ? filteredJobs.filter((job) => job.featured).slice(0, 3)
    : filteredJobs;

  const handleApply = (jobId) => {
    setIsModalOpen(false);
    setSelectedJob(null);

    const formElement = document.getElementById("application-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className={`min-h-screen bg-background ${!embedded ? "pt-0" : ""}`}>
      {/* Hero Section */}
      <section
        className={`${
          embedded ? "py-16" : "py-24"
        } bg-white/70 relative overflow-hidden`}
      >
        {/* BG Elements */}
        <div className="absolute inset-0 bg-texture-grid opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center my-16"
          >
            <SecHeader
              title="Build Your"
              highlighted="Career"
              description={
                embedded
                  ? "Join our team and be part of our mission to transform education and business through innovation."
                  : "Join a dynamic team that's transforming education and business through innovation, collaboration, and excellence. Discover opportunities to grow, learn, and make a meaningful impact."
              }
              badge={<Badge1 title="Join Our Team" />}
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const jobsElement = document.getElementById("open-positions");
                  if (jobsElement) {
                    jobsElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="btn-modern text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300"
              >
                <Briefcase className="mr-2 h-5 w-5" />
                View Open Positions
              </Button>
              {!embedded && (
                <Button
                  variant="outline"
                  onClick={() => {
                    const cultureElement =
                      document.getElementById("company-culture");
                    if (cultureElement) {
                      cultureElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                >
                  Learn About Our Culture
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Culture - Only visible in embedded mode */}
      {!embedded && (
        <section id="company-culture" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SecHeader
              title="Our Company"
              highlighted="Culture"
              description="We believe that great companies are built by great people. Our culture is founded on collaboration, innovation, and the shared mission to create meaningful impact."
            />

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              {companyCulture.map((culture) => (
                <div
                  key={culture.id}
                  className="relative rounded-3xl overflow-hidden shadow-lg group"
                >
                  <ImageWithFallback
                    src={culture.url}
                    alt={culture.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="font-heading text-xl font-semibold mb-2">
                      {culture.title}
                    </h3>
                    <p className="font-body text-sm opacity-90">
                      {culture.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: value.id * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="modern-card border-0 h-full hover:-translate-y-2 transition-all duration-500 text-center">
                      <CardContent className="p-6">
                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4`}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                          {value.title}
                        </h3>
                        <p className="font-body text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Open Positions   */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-6">
              Open{" "}
              <span className="bg-gradient-to-r from-primary to-[#1a8f21] bg-clip-text text-transparent">
                Positions
              </span>
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {embedded
                ? "Join our team and be part of our mission to transform education and business through innovation."
                : "Discover exciting opportunities to join our team and make a meaningful impact in education and business innovation."}
            </p>

            {/* Filters - Only show in non-embedded mode */}
            {!embedded && (
              <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <Select
                  value={selectedDepartment}
                  onValueChange={setSelectedDepartment}
                >
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter By Department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </motion.div>

          <div className="space-y-6">
            {displayJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: job.id * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`modern-card border-0 hover:-translate-y-1 transition-all duration-300 ${
                    job.featured ? "ring-2 ring-primary ring-opacity-50" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="font-heading text-xl font-semibold text-charcoal">
                            {job.title}
                          </h3>
                          {job.featured && (
                            <Badge className="bg-primary text-white">
                              Featured
                            </Badge>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {job.experience}
                          </div>
                        </div>

                        <p className="font-body text-muted-foreground mb-4">
                          {job.description}
                        </p>

                        <div className="text-xs text-muted-foreground">
                          Posted {job.posted}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row lg:flex-col gap-2 min-w-40">
                        <Button
                          onClick={() => handleApply(job.id)}
                          className="btn-modern text-white font-body font-semibold"
                        >
                          Apply Now
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleViewDetails(job)}
                          className="border-primary text-primary hover:bg-primary hover:text-white font-body"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {displayJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="font-body text-muted-foreground text-lg">
                No positions found matching your criteria. Try adjusting your
                filters.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHeader
            title="Apply"
            highlighted="Today"
            description="Ready to join our team? Send us your application and let's start the conversation."
          />

          <Card className="modern-card border-0">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className="font-body font-medium text-charcoal"
                    >
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      className="mt-2 border-2 border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="lastName"
                      className="font-body font-medium text-charcoal"
                    >
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      className="mt-2 border-2 border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="font-body font-medium text-charcoal"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="mt-2 border-2 border-border focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    className="font-body font-medium text-charcoal"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="mt-2 border-2 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="position"
                    className="font-body font-medium text-charcoal"
                  >
                    Position of Interest *
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-2 border-2 border-border focus:border-primary w-full">
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobOpenings.map((job) => (
                        <SelectItem key={job.id} value={job.title}>
                          {job.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="experience"
                    className="font-body font-medium text-charcoal"
                  >
                    Years of Experience
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-2 border-2 border-border focus:border-primary w-full">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="2-3">2-3 years</SelectItem>
                      <SelectItem value="4-5">4-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="resume"
                    className="font-body font-medium text-charcoal"
                  >
                    Resume *
                  </Label>
                  <div className="mt-2 flex items-center border-2 border-border focus-within:border-primary rounded-md p-1">
                    <label
                      htmlFor="resume"
                      className="cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                    >
                      <span className="bg-primary text-white font-semibold py-1 px-4 rounded-full">
                        Choose file
                      </span>
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="sr-only"
                        required
                      />
                    </label>
                    <span className="text-sm text-gray-500 ml-4">
                      No file chosen
                    </span>
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="coverLetter"
                    className="font-body font-medium text-charcoal"
                  >
                    Cover Letter
                  </Label>
                  <Textarea
                    id="coverLetter"
                    placeholder="Tell us why you're interested in joining our team..."
                    className="mt-2 border-2 border-border focus:border-primary min-h-32"
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="btn-modern text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Job Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleModalClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedJob && (
            <>
              <DialogHeader className="border-b border-border pb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <DialogTitle className="font-heading text-2xl font-bold text-charcoal mb-2">
                      {selectedJob.title}
                    </DialogTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {selectedJob.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {selectedJob.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {selectedJob.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {selectedJob.experience}
                      </div>
                    </div>
                    {selectedJob.featured && (
                      <Badge className="bg-primary text-white mt-2">
                        Featured Position
                      </Badge>
                    )}
                  </div>
                </div>
              </DialogHeader>

              <div className="py-6 space-y-8">
                {selectedJob.companyDescription && (
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                      About This Opportunity
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {selectedJob.companyDescription}
                    </p>
                  </div>
                )}

                {/* Job Description */}
                <div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                    Job Description
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {selectedJob.description}
                  </p>
                </div>

                {/* Key Responsibilities */}
                {selectedJob.responsibilities && (
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-2">
                      {selectedJob.responsibilities.map(
                        (responsibility, index) => (
                          <li
                            key={index}
                            className="font-body text-muted-foreground flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{responsibility}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {/* Requirements */}
                <div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((requirement, index) => (
                      <li
                        key={index}
                        className="font-body text-muted-foreground flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Qualifications */}
                {selectedJob.qualifications && (
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                      Preferred Qualifications
                    </h3>
                    <ul className="space-y-2">
                      {selectedJob.qualifications.map(
                        (qualification, index) => (
                          <li
                            key={index}
                            className="font-body text-muted-foreground flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{qualification}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {/* Benefits */}
                <div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                    What We Offer
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedJob.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="font-body text-muted-foreground flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Working Conditions */}
                {selectedJob.workingConditions && (
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                      Working Environment
                    </h3>
                    <ul className="space-y-2">
                      {selectedJob.workingConditions.map((condition, index) => (
                        <li
                          key={index}
                          className="font-body text-muted-foreground flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Posted Date */}
                <div className="border-t border-border pt-6">
                  <p className="font-body text-sm text-muted-foreground">
                    Posted {selectedJob.posted}
                  </p>
                </div>

                {/* Apply Now Button */}
                <div className="border-t border-border pt-6">
                  <div className="flex justify-center">
                    <Button
                      onClick={() => handleApply(selectedJob.id)}
                      className="btn-modern text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Apply for This Position
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Career;
