import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Icon from "@assets/images/svg/icon.svg";

const Experience = () => {
  const [projects, setProjects] = useState(0);
  const [totalFunding, setTotalFunding] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the section is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2; // Duration of the animation in seconds
      const projectsTarget = 1250;
      const fundingTarget = 156000000; // $156M
      const customersTarget = 1456;

      const increment = (target, setter) => {
        let start = 0;
        const step = Math.ceil(target / (duration * 60)); // Assuming 60 FPS
        const interval = setInterval(() => {
          start += step;
          if (start >= target) {
            clearInterval(interval);
            setter(target);
          } else {
            setter(start);
          }
        }, 1000 / 60); // 60 FPS
      };

      increment(projectsTarget, setProjects);
      increment(fundingTarget, setTotalFunding);
      increment(customersTarget, setCustomers);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="mt-[25%] container">
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <div className="flex font-[ZenDots] items-center gap-2">
            <span>
              <img src={Icon} alt="" />
            </span>
            <motion.h3 className="text-[48px]">
              {projects.toLocaleString()}
            </motion.h3>
          </div>
          <span className="opacity-60">Projects</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex font-[ZenDots] items-center gap-2">
            <span>
              <img src={Icon} alt="" />
            </span>
            <motion.h3 className="text-[48px]">
              ${totalFunding.toLocaleString()}
            </motion.h3>
          </div>
          <span className="opacity-60">Total Funding</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex font-[ZenDots] items-center gap-2">
            <span>
              <img src={Icon} alt="" />
            </span>
            <motion.h3 className="text-[48px]">
              {customers.toLocaleString()}
            </motion.h3>
          </div>
          <span className="opacity-60">Customers</span>
        </div>
      </div>
    </section>
  );
}

export default Experience;
