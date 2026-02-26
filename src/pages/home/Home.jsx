import React from "react";
import "./Home.css";
import { Tab, Tabs } from "@mui/material";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { motion } from "framer-motion";

function Home() {
  const portfolioDB = [
    {
      id: 1,
      category: "featured",
      name: "Mixel E-Commerse",
      img: "/mixel.png",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        { id: 1, name: "React" },
        { id: 2, name: "Restful API" },
        { id: 3, name: "SwiperJs" },
      ],
      github: "https://github.com/Kamoliddinmirzaboyev05/Mixel-E-Commerse-",
      live: "https://mixel-os.netlify.app/",
    },
    {
      id: 2,
      category: "featured",
      name: "Exclusive E-Commerse",
      img: "/exclusive.jpg",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        { id: 1, name: "React" },
        { id: 2, name: "Restful API" },
        { id: 3, name: "SwiperJs" },
      ],
      github: "https://github.com/Kamoliddinmirzaboyev05/Exclusive-E-Commerse-Site",
      live: "https://exclusive-ecommerse-site.netlify.app/",
    },
    {
      id: 3,
      category: "featured",
      name: "Discover E-Commerse",
      img: "/discover.jpg",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        { id: 1, name: "JavaScript" },
        { id: 2, name: "Fetch API" },
        { id: 3, name: "Local Storage" },
      ],
      github: "https://github.com/Kamoliddinmirzaboyev05/eCommerse-Big-JS-Project",
      live: "https://ecommerse-mkm.netlify.app/",
    },
    {
      id: 4,
      category: "api",
      name: "Image Generator",
      img: "/imagegenerator.jpg",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        { id: 1, name: "JavaScript" },
        { id: 2, name: "Unsplash API" },
        { id: 3, name: "Local Storage" },
      ],
      github: "",
      live: "",
    },
    {
      id: 5,
      category: "api",
      name: "Taqvim",
      img: "/taqvim.jpg",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        { id: 1, name: "HTML & CSS" },
        { id: 2, name: "JavaScript" },
        { id: 3, name: "Fetch API" },
      ],
      github: "https://github.com/Kamoliddinmirzaboyev05/Namoz-Vaqtlari-APP",
      live: "https://taqvim-mkm.netlify.app/",
    },
    {
      id: 6,
      category: "api",
      name: "DevFinder",
      img: "/devfinder.jpg",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        { id: 1, name: "React" },
        { id: 2, name: "Restful API" },
        { id: 3, name: "SwiperJs" },
      ],
      github: "",
      live: "https://devfinder-github-mkm.netlify.app/",
    },
    {
      id: 7,
      category: "react",
      name: "Greenshop",
      img: "/greenshop.jpg",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        { id: 1, name: "React" },
        { id: 2, name: "Local Storage" },
        { id: 3, name: "SwiperJs" },
      ],
      github: "https://github.com/Kamoliddinmirzaboyev05/GreenShop",
      live: "https://greenshop-mkm.netlify.app/",
    },
    {
      id: 8,
      category: "react",
      name: "Finsweet",
      img: "/finsweet.jpg",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        { id: 1, name: "React" },
        { id: 2, name: "Multi Page" },
      ],
      github: "https://github.com/Kamoliddinmirzaboyev05/Finsweet-React.git",
      live: "https://finsweet-react-mkm.vercel.app/",
    },
    {
      id: 9,
      category: "react",
      name: "Planto",
      img: "/planto.jpg",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        { id: 1, name: "React" },
        { id: 2, name: "Drop Shadow" },
        { id: 3, name: "Landing Page" },
      ],
      github: "https://github.com/Kamoliddinmirzaboyev05/Planto-First-React-",
      live: "https://planto-firt-react-mkm.netlify.app/",
    },
    {
      id: 10,
      category: "static",
      name: "Rolex",
      img: "/rolex.jpg",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        { id: 1, name: "HTML & CSS" },
        { id: 2, name: "JavaScript" },
        { id: 3, name: "Dark - Light Mode" },
      ],
      github: "https://github.com/Kamoliddinmirzaboyev05/Rolex",
      live: "https://rolex-mkm.netlify.app/",
    },
    {
      id: 11,
      category: "static",
      name: "Contact Mini App",
      img: "/contact.jpg",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        { id: 1, name: "HTML & CSS" },
        { id: 2, name: "JavaScript" },
        { id: 3, name: "Local Storage" },
      ],
      github: "",
      live: "",
    },
    {
      id: 12,
      category: "static",
      name: "Digital Agency",
      img: "/todo.jpg",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        { id: 1, name: "HTML & CSS" },
        { id: 2, name: "CSS Tools" },
      ],
      github: "https://github.com/Kamoliddinmirzaboyev05/To-Do-App",
      live: "https://todolist-mkm.netlify.app/",
    },
  ];

  const [value, setValue] = React.useState("featured");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="homePage">
      <div className="hero">
        <div className="container">
          <motion.div 
            className="condition"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p>Available for work</p>
          </motion.div>
          <motion.h2 
            className="mainText"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi I'm Kamoliddin Mirzaboyev
          </motion.h2>
          <motion.h3 
            className="jobName"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Front - End Developer
          </motion.h3>
          <motion.p 
            className="litlleInfo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting fast, beautiful, and user-first web experiences. Turning
            ideas into responsive, high-performing digital products
          </motion.p>
          <motion.div 
            className="heroBtns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="heroBtn">
              Download resume <i className="fas fa-arrow-right"></i>
            </button>
            <button className="heroBtn contactBtn">
              Contact me <i className="fa-solid fa-share"></i>
            </button>
          </motion.div>
        </div>
      </div>
      <main id="aboutSection">
        <section className="aboutSection">
          <div className="container">
            <motion.div 
              className="condition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p>My way</p>
            </motion.div>
            <motion.h2 
              className="sectionTitle"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="infoText"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm a front-end developer working with modern technologies such as
              React.js, Next.js, TypeScript, and other technologies.
            </motion.p>
            <motion.p 
              className="infoText"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Although I'm at the beginning of my career, I have worked on and
              am currently working on several projects where I prioritize
              attention to detail, clean code, and user-friendly design. I
              strive to learn something new and grow my skills and experience
              through real-world development.
            </motion.p>
          </div>
        </section>
        <section id="skills" className="skillsSection">
          <div className="container">
            <motion.div 
              className="condition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p>Skills & Expertise</p>
            </motion.div>
            <motion.h2 
              className="sectionTitle"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My Technical Proficiency
            </motion.h2>
            <div className="skillsBlock">
              {[
                { img: "/html.svg", title: "Foundation", desc: "Using HTML5 and CSS3 and create magic web site design" },
                { img: "/tailwind-css.svg", title: "Tailwind - CSS", desc: "Using HTML5 and CSS3 and create magic web site design" },
                { img: "/javascript-js.svg", title: "JavaScript", desc: "Using HTML5 and CSS3 and create magic web site design" },
                { img: "/react.svg", title: "React - JS", desc: "Using HTML5 and CSS3 and create magic web site design" }
              ].map((skill, index) => (
                <motion.div 
                  className="skillBox"
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="skillLogo">
                    <img src={skill.img} alt="" />
                  </div>
                  <h2>{skill.title}</h2>
                  <p>{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="portfolio" className="portfolioSection">
          <div className="container">
            <motion.div 
              className="condition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p>Recently projects & Portfolio</p>
            </motion.div>
            <motion.h2 
              className="sectionTitle"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Recent Projects
            </motion.h2>
            <motion.p 
              className="projectInfo"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Explore my latest work showcasing my skills and expertise in
              front-end development.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Featured" value={"featured"} />
                <Tab label="Static" value={"static"} />
                <Tab label="API Integrated" value={"api"} />
                <Tab label="Responsive Design" value={"responsive"} />
                <Tab label="React Based" value={"react"} />
              </Tabs>
            </motion.div>
            <div className="porfolioBlock">
              {portfolioDB.map((item, index) => {
                if (item.category === value) {
                  return (
                    <motion.div 
                      className="portfolioBox" 
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                      <div className="projectImg">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="projectData">
                        <h2 className="projectName">{item.name}</h2>
                        <p className="projectInfo">{item.info}</p>
                        <div className="technologies">
                          {item.tech.map((tech) => {
                            return (
                              <div className="techItem" key={tech.id}>
                                <p>{tech.name}</p>
                              </div>
                            );
                          })}
                        </div>
                        <div className="source">
                          {item.github && (
                            <a
                              href={item.github}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <div className="github">
                                <LuGithub />
                                <p>GitHub</p>
                              </div>
                            </a>
                          )}
                          {item.live && (
                            <a
                              href={item.live}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <div className="liveLink">
                                <LuExternalLink />
                                <p>Live Demo</p>
                              </div>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <motion.div 
              className="viewBtn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <button>
                View all projects <i className="fas fa-arrow-right"></i>
              </button>
            </motion.div>
          </div>
        </section>
        <section id="contact" className="contactSection">
          <div className="container">
            <motion.div 
              className="condition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p>Get In Touch</p>
            </motion.div>
            <motion.h2 
              className="sectionTitle"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear from you.
            </motion.p>
            <motion.form 
              className="contactForm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="row">
                <div className="rowItem">
                  <label htmlFor="name">Name</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="rowItem">
                  <label htmlFor="name">Email</label>
                  <input type="text" placeholder="youremil@example.com" />
                </div>
              </div>
              <div className="row">
                <div className="fulrowItem">
                  <label htmlFor="name">Subject</label>
                  <input type="text" placeholder="Project inquiry" />
                </div>
              </div>
              <div className="row">
                <div className="fulrowItem">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Tell me about your project"
                  ></textarea>
                </div>
              </div>
              <button className="sendBtn">Send Message</button>
            </motion.form>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Home;
