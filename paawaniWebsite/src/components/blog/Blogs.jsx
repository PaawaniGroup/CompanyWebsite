import React from "react";
import {
  TrendingUp,
  Handshake,
  Rocket,
  ArrowRight,
  Calendar,
  Tag,
} from "lucide-react";
import { Button } from "../ui/button";
import SectionHeader from "../SecHeader";
import Badge from "../Badge";
import { Card, CardContent } from "../ui/card";
import { motion } from 'motion/react'

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      icon: TrendingUp,
      title: "Future of Digital Transformation",
      excerpt:
        "Explore how emerging technologies are reshaping business landscapes and creating new opportunities for growth in an increasingly connected world.",
      date: "January 15, 2025",
      category: "Business Strategy",
      gradient: "from-[#20ab26] to-[#1a8f21]",
    },
    {
      id: 2,
      icon: Handshake,
      title: "Building Strategic Alliances",
      excerpt:
        "Learn the key principles of forming successful business partnerships that drive mutual growth and innovation across diverse industries.",
      date: "January 12, 2025",
      category: "Partnerships",
      gradient: "from-[#16a085] to-[#27ae60]",
    },
    {
      id: 3,
      icon: Rocket,
      title: "Innovation in Modern Business",
      excerpt:
        "Discover how leading companies are leveraging innovation to stay competitive in rapidly evolving markets and emerging technologies.",
      date: "January 8, 2025",
      category: "Innovation",
      gradient: "from-[#2ecc71] to-[#20ab26]",
    },
  ];

  return (
    <section
      id="blogs"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Latest"
          highlighted="Insights"
          description="Stay ahead of the curve with our latest thoughts on industry trends, business strategy, and innovation."
          badge={<Badge title="Our Latest Blogs" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => {
            const Icon = post.icon;
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: post.id * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group bg-white">
                  <div
                    className={`h-48 bg-gradient-to-br ${post.color} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <Icon className="h-16 w-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="h-4 w-4" />
                        {post.category}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-md font-semibold text-blue-600 hover:text-blue-700 group/btn"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
