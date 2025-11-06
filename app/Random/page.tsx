"use client";

import React, { useEffect, useRef, useState } from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  type: "education" | "experience" | "certification";
  achievements?: string[];
  link?: string;
  index: number;
}

const TimelineItem = ({
  year,
  title,
  description,
  type,
  achievements,
  link,
  index,
}: TimelineItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = itemRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const typeLabel =
    type === "certification"
      ? "Certification"
      : type === "experience"
      ? "Experience"
      : "Education";

  const typeColor =
    type === "certification"
      ? "border-blue-400/30 hover:border-blue-400/50"
      : type === "experience"
      ? "border-purple-500/30 hover:border-purple-500/50"
      : "border-pink-600/30 hover:border-pink-600/50";

  const dotColor =
    type === "certification"
      ? "bg-blue-400"
      : type === "experience"
      ? "bg-purple-500"
      : "bg-pink-600";

  const tagColor =
    type === "certification"
      ? "bg-blue-400/10 text-blue-400 border-blue-400/30"
      : type === "experience"
      ? "bg-purple-500/10 text-purple-400 border-purple-500/30"
      : "bg-pink-600/10 text-pink-400 border-pink-600/30";

  const isEven = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      className={`flex flex-col items-center min-w-[calc(100vw-2rem)] sm:min-w-[350px] max-w-[calc(100vw-2rem)] sm:max-w-[380px] snap-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Card positioned above or below the line */}
      <div
        className={`${
          isEven ? "order-1 mb-8" : "order-3 mt-8"
        } w-full transition-transform duration-300 hover:-translate-y-1`}
      >
        <div
          className={`bg-gray-900/80 backdrop-blur-sm border-2 ${typeColor} rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all w-full`}
        >
          <div className="mb-2 sm:mb-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span className="text-gray-400 font-semibold text-xs sm:text-sm tracking-wide">
              {year}
            </span>
            <span
              className={`px-2 sm:px-3 py-1 text-xs rounded-md border font-medium ${tagColor}`}
            >
              {typeLabel}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">
            {title}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
            {description}
          </p>
          {achievements && achievements.length > 0 && (
            <ul className="space-y-1.5 sm:space-y-2 mb-2 sm:mb-3 pl-1">
              {achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-gray-500 text-xs sm:text-xs leading-relaxed"
                >
                  <span className="text-gray-600 mr-2 mt-0.5 flex-shrink-0">
                    •
                  </span>
                  <span className="flex-1">{achievement}</span>
                </li>
              ))}
            </ul>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-gray-300 hover:text-white text-sm font-medium transition-colors group"
            >
              <span>View Certificate</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Dot on the timeline */}
      <div className={`${isEven ? "order-2" : "order-2"} relative z-10`}>
        <div
          className={`w-4 h-4 rounded-full ${dotColor} border-4 border-gray-900 shadow-lg ring-2 ring-gray-800`}
        ></div>
      </div>

      {/* Empty space for opposite side */}
      <div className={`${isEven ? "order-3" : "order-1"} h-8`}></div>
    </div>
  );
};

const Timeline = () => {
  const timelineData = [
    {
      year: "2020 - May 2025",
      title: "Software Engineering Student at KFUPM",
      description:
        "Bachelor's degree in Software Engineering at King Fahd University of Petroleum & Minerals.",
      type: "education" as const,
      achievements: [
        "Focus on full-stack development and cloud technologies",
        "Strong foundation in algorithms and data structures",
        "Active participation in coding competitions and hackathons",
      ],
    },
    {
      year: "Jun 2024 – Aug 2024",
      title: "Software Development Intern",
      description:
        "Alamer & Brothers Trading Co. - Gained hands-on experience in software development and collaborated on real-world projects.",
      type: "experience" as const,
      achievements: [
        "Developed software solutions for business operations",
        "Collaborated with cross-functional teams",
        "Implemented best practices in software development",
      ],
    },
    {
      year: "Jul 2025 – Oct 2025",
      title: "Cloud Technology New Associate",
      description:
        "Accenture - Working with cutting-edge cloud technologies and DevOps practices.",
      type: "experience" as const,
      achievements: [
        "Implementing cloud solutions for enterprise clients",
        "Working with Google Cloud Platform",
        "Applying DevOps best practices",
      ],
    },
    {
      year: "Sep 2025",
      title: "Associate Cloud Engineer",
      description:
        "Google Cloud Certification - Certified in deploying, monitoring, and maintaining Google Cloud projects.",
      type: "certification" as const,
      achievements: [
        "Proficient in GCP core services",
        "Experience with cloud infrastructure management",
        "Knowledge of cloud security and compliance",
      ],
      link: "/AssociateCloudEngineer20250923-31-5nakcf.pdf",
    },
    {
      year: "Sep 2025",
      title: "Cloud DevOps Engineer Nanodegree",
      description:
        "Udacity - Comprehensive training in cloud DevOps practices and infrastructure automation.",
      type: "certification" as const,
      achievements: [
        "Mastered CI/CD pipeline implementation",
        "Infrastructure as Code with CloudFormation and Terraform",
        "Container orchestration with Kubernetes",
      ],
    },
    {
      year: "Oct 2025",
      title: "Professional Cloud DevOps Engineer",
      description:
        "Google Cloud Professional Certification - Advanced expertise in implementing DevOps practices on GCP.",
      type: "certification" as const,
      achievements: [
        "Expertise in CI/CD pipeline implementation",
        "Advanced monitoring and logging strategies",
        "Infrastructure automation and optimization",
      ],
      link: "/ProfessionalCloudDevOpsEngineer20251017-32-hg8osi.pdf",
    },
    {
      year: "Oct 2025",
      title: "Accenture Cloud Software Engineering Certificate",
      description:
        "Comprehensive training in modern cloud software engineering practices and methodologies.",
      type: "certification" as const,
      link: "/Mohammed Alammar Cloud Software Engineering Certificate.pdf",
    },
    {
      year: "Oct 2025",
      title: "Accenture Consulting Readiness Certificate",
      description:
        "Training in consulting methodologies, client engagement, and professional communication skills.",
      type: "certification" as const,
      link: "/Mohammed Alammar Consulting Readiness Certificate.pdf",
    },
    {
      year: "Oct 2025",
      title: "Accenture Certificate of Completion",
      description:
        "Successfully completed Accenture's comprehensive training program.",
      type: "certification" as const,
      link: "/Mohammed Alammar accenture C E R T I F IC A T E OF C O M P L E T I O N.pdf",
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-black text-gray-100 overflow-hidden pb-20">
      <div className="w-full px-4 sm:px-8 pt-2 sm:pt-8 flex flex-col flex-1">
        {/* Header */}
        <div className="text-center mb-2 sm:mb-4 md:mb-8">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 md:mb-3 text-white tracking-tight">
            Professional Journey
          </h1>
          <p className="text-xs sm:text-base text-gray-400 max-w-2xl mx-auto px-2 hidden sm:block">
            A timeline of education, experience, and certifications
          </p>
        </div>

        {/* Legend */}
        <div className="mb-2 sm:mb-4 md:mb-8 flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 justify-center">
          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gray-900 border-2 border-pink-600/30 rounded-md">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-pink-600"></div>
            <span className="text-xs sm:text-sm text-pink-400 font-medium">
              Education
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gray-900 border-2 border-purple-500/30 rounded-md">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-500"></div>
            <span className="text-xs sm:text-sm text-purple-400 font-medium">
              Experience
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gray-900 border-2 border-blue-400/30 rounded-md">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-400"></div>
            <span className="text-xs sm:text-sm text-blue-400 font-medium">
              Certifications
            </span>
          </div>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative flex-1 flex items-center min-h-0">
          {/* Timeline Line */}
          <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 top-1/2 transform -translate-y-1/2"></div>

          {/* Scrollable Container */}
          <div className="overflow-x-auto h-full w-full pb-8 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 snap-x snap-mandatory">
            <div className="flex gap-4 sm:gap-8 px-4 sm:px-8 py-4 sm:py-8 min-w-max h-full items-center">
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  type={item.type}
                  achievements={item.achievements}
                  link={item.link}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="mt-2 sm:mt-4 md:mt-6 mb-20 text-center px-4">
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black hover:bg-gray-200 font-semibold text-sm sm:text-base rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Full CV
          </a>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-thin {
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #111827;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #374151;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #4b5563;
        }
        @media (max-width: 640px) {
          .scrollbar-thin {
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </div>
  );
};

export default Timeline;
