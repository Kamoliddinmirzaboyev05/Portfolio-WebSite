import React from "react";
import "./Home.css";
import { Tab, Tabs } from "@mui/material";
import { LuExternalLink, LuGithub } from "react-icons/lu";

function Home() {
  const portfolioDB = [
    {
      id: 1,
      category: "featured",
      name: "Mixel E-Commerse",
      img: "/mixel.png",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Restful API",
        },
        {
          id: 3,
          name: "SwiperJs",
        },
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
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Restful API",
        },
        {
          id: 3,
          name: "SwiperJs",
        },
      ],
      github:
        "https://github.com/Kamoliddinmirzaboyev05/Exclusive-E-Commerse-Site",
      live: "https://exclusive-ecommerse-site.netlify.app/",
    },
    {
      id: 3,
      category: "featured",
      name: "Discover E-Commerse",
      img: "/discover.jpg",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        {
          id: 1,
          name: "JavaScript",
        },
        {
          id: 2,
          name: "Fetch API",
        },
        {
          id: 3,
          name: "Local Storage",
        },
      ],
      github:
        "https://github.com/Kamoliddinmirzaboyev05/eCommerse-Big-JS-Project",
      live: "https://ecommerse-mkm.netlify.app/",
    },
    {
      id: 4,
      category: "api",
      name: "Image Generator",
      img: "/imagegenerator.jpg",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        {
          id: 1,
          name: "JavaScript",
        },
        {
          id: 2,
          name: "Unsplash API",
        },
        {
          id: 3,
          name: "Local Storage",
        },
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
        {
          id: 1,
          name: "HTML & CSS",
        },
        {
          id: 2,
          name: "JavaScript",
        },
        {
          id: 3,
          name: "Fetch API",
        },
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
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Restful API",
        },
        {
          id: 3,
          name: "SwiperJs",
        },
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
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Local Storage",
        },
        {
          id: 3,
          name: "SwiperJs",
        },
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
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Multi Page",
        },
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
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Drop Shadow",
        },
        {
          id: 3,
          name: "Landing Page",
        },
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
        {
          id: 1,
          name: "HTML & CSS",
        },
        {
          id: 2,
          name: "JavaScript",
        },
        {
          id: 3,
          name: "Dark - Light Mode", 
        },
      ],
      github: "https://github.com/Kamoliddinmirzaboyev05/Rolex",
      live: "https://rolex-mkm.netlify.app/",
    },
    {
      id: 11,
      category: "static",
      name: "Mixel E-Commerse",
      img: "/contact.jpg",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Restful API",
        },
        {
          id: 3,
          name: "SwiperJs",
        },
      ],
      github: "",
      live: "",
    },
    {
      id: 1,
      category: "featured",
      name: "Mixel E-Commerse",
      img: "/mixel.png",
      info: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      tech: [
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Restful API",
        },
        {
          id: 3,
          name: "SwiperJs",
        },
      ],
      github: "",
      live: "",
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
          <div className="condition">
            <p>Available for work</p>
          </div>
          <h2 className="mainText">Hi I'm Kamoliddin Mirzaboyev</h2>
          <h3 className="jobName">Front - End Developer</h3>
          <p className="litlleInfo">
            Crafting fast, beautiful, and user-first web experiences. Turning
            ideas into responsive, high-performing digital products
          </p>
          <div className="heroBtns">
            <button className="heroBtn">
              Download resume <i className="fas fa-arrow-right"></i>
            </button>
            <button className="heroBtn contactBtn">
              Contact me <i class="fa-solid fa-share"></i>
            </button>
          </div>
        </div>
      </div>
      <main id="aboutSection">
        <section className="aboutSection">
          <div className="container">
            <div className="condition">
              <p>My way</p>
            </div>
            <h2 className="sectionTitle">About Me</h2>
            <p className="infoText">
              I’m a front-end developer working with modern technologies such as
              React.js, Next.js, TypeScript, and other technologies.
            </p>
            <p className="infoText">
              Although I’m at the beginning of my career, I have worked on and
              am currently working on several projects where I prioritize
              attention to detail, clean code, and user-friendly design. I
              strive to learn something new and grow my skills and experience
              through real-world development.
            </p>
          </div>
        </section>
        <section id="skills" className="skillsSection">
          <div className="container">
            <div className="condition">
              <p>Skills & Expertise</p>
            </div>
            <h2 className="sectionTitle">My Technical Proficiency</h2>
            <div className="skillsBlock">
              <div className="skillBox">
                <div className="skillLogo">
                  <img src="/html.svg" alt="" />
                </div>
                <h2>Foundation</h2>
                <p>Using HTML5 and CSS3 and create magic web site design</p>
              </div>
              <div className="skillBox">
                <div className="skillLogo">
                  <img src="/tailwind-css.svg" alt="" />
                </div>
                <h2>Tailwind - CSS</h2>
                <p>Using HTML5 and CSS3 and create magic web site design</p>
              </div>
              <div className="skillBox">
                <div className="skillLogo">
                  <img src="/javascript-js.svg" alt="" />
                </div>
                <h2>JavaScript</h2>
                <p>Using HTML5 and CSS3 and create magic web site design</p>
              </div>
              <div className="skillBox">
                <div className="skillLogo">
                  <img src="/react.svg" alt="" />
                </div>
                <h2>React - JS</h2>
                <p>Using HTML5 and CSS3 and create magic web site design</p>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="portfolioSection">
          <div className="container">
            <div className="condition">
              <p>Recently projects & Portfolio</p>
            </div>
            <h2 className="sectionTitle">Recent Projects</h2>
            <p className="projectInfo">
              Explore my latest work showcasing my skills and expertise in
              front-end development.
            </p>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Featured" value={"featured"} />
              <Tab label="Static" value={"static"} />
              <Tab label="API Integrated" value={"api"} />
              <Tab label="Responsive Design" value={"responsive"} />
              <Tab label="React Based" value={"react"} />
            </Tabs>
            <div className="porfolioBlock">
              {portfolioDB.map((item) => {
                if (item.category === value) {
                  return (
                    <div className="portfolioBox" key={item.id}>
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
                    </div>
                  );
                } else {
                  return;
                }
              })}
            </div>
            <div className="viewBtn">
              <button>
                View all projects <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section id="contact" className="contactSection">
          <div className="container">
            <div className="condition">
              <p>Get In Touch</p>
            </div>
            <h2 className="sectionTitle">Let's Work Together</h2>
            <p>
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear from you.
            </p>
            <form className="contactForm">
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
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Home;
