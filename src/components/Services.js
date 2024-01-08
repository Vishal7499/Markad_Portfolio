/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services
const services = [
  {
    name: "Java Developer",
    description:
      "I have a profound in Java development, I've successfully developed projects, the Placement Management System.",
    link: "Learn more",
  },
  {
    name: "Web Development",
    description:
      "I am venturing into the world of web development with a foundation in HTML, CSS, and JavaScript. ",
    link: "Learn more",
  },
  {
    name: "ReactJs Development",
    description:
      "I am proficient in building dynamic and interactive user interfaces using ReactJs.",
    link: "Learn more",
  },
  {
    name: "Database Management",
    description:
      "I possess foundational knowledge in database management, including MySQL, MongoDB, and Firebase.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:mt-16">
          {/* text and images */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
            style={{ backgroundSize: '90%', backgroundPosition: 'center' }}
          >
            <h2 className="h2 text-accent mb-6 ">What I Do.</h2>
            <h3 className="h3 mb-12 max-w-[455px]">
              I am a passionate developer with a love for crafting clean and efficient code.
            </h3>
            <button className="btn btn-sm">
  <a href="https://github.com/Vishal7499" target="_blank" rel="noopener noreferrer">
    See my work
  </a>
</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* services list */}
            <div className="flex-1">
              {services.map((service, index) => {
                // destructure data
                const { name, description, link } = service;
                return (
                  <div className="border-b border-white/20 h-[142px] mb-[36px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-5">{name}</h4>
                      <p className="font-secondary leading-tight">{description}</p>
                    </div>
                    <div className="flex  flex-col flex-1 items-end">
                      <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center"> <BsArrowUpRight /> </a>
                      <a href="#" className="text-gradient text-sm">{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
