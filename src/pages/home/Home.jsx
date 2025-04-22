import React from "react";
import "./Home.css";
import { Tab, Tabs } from "@mui/material";
import { LuExternalLink, LuGithub } from "react-icons/lu";

function Home() {
  const [value, setValue] = React.useState(0);

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
            I build exceptional digital experiences that are fast, accessible,
            and visually appealing. Specializing in modern web technologies and
            frameworks.
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
        <section  className="aboutSection">
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
              <Tab label="Featured" />
              <Tab label="Static" />
              <Tab label="API Integrated" />
              <Tab label="React Based" />
            </Tabs>
            <div className="porfolioBlock">
              <div className="portfolioBox">
                <div className="projectImg">
                  <img src="/mixel.png" alt="" />
                </div>
                <div className="projectData">
                  <h2 className="projectName">Mixel E-Commerse </h2>
                  <p className="projectInfo">
                    A comprehensive admin dashboard for managing online stores
                    with real-time analytics.
                  </p>
                  <div className="technologies">
                    <div className="techItem">
                      <p>React</p>
                    </div>
                    <div className="techItem">
                      <p>RestFul API</p>
                    </div>
                    <div className="techItem">
                      <p>Swiper</p>
                    </div>
                  </div>
                  <div className="source">
                    <div className="github">
                      <LuGithub />
                      <p>GitHub</p>
                    </div>
                    <div className="liveLink">
                      <LuExternalLink />
                      <p>Live Demo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolioBox">
                <div className="projectImg">
                  <img src="/mixel.png" alt="" />
                </div>
                <div className="projectData">
                  <h2 className="projectName">Mixel E-Commerse </h2>
                  <p className="projectInfo">
                    A comprehensive admin dashboard for managing online stores
                    with real-time analytics.
                  </p>
                  <div className="technologies">
                    <div className="techItem">
                      <p>React</p>
                    </div>
                    <div className="techItem">
                      <p>RestFul API</p>
                    </div>
                    <div className="techItem">
                      <p>Swiper</p>
                    </div>
                  </div>
                  <div className="source">
                    <div className="github">
                      <LuGithub />
                      <p>GitHub</p>
                    </div>
                    <div className="liveLink">
                      <LuExternalLink />
                      <p>Live Demo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolioBox">
                <div className="projectImg">
                  <img src="/mixel.png" alt="" />
                </div>
                <div className="projectData">
                  <h2 className="projectName">Mixel E-Commerse </h2>
                  <p className="projectInfo">
                    A comprehensive admin dashboard for managing online stores
                    with real-time analytics.
                  </p>
                  <div className="technologies">
                    <div className="techItem">
                      <p>React</p>
                    </div>
                    <div className="techItem">
                      <p>RestFul API</p>
                    </div>
                    <div className="techItem">
                      <p>Swiper</p>
                    </div>
                  </div>
                  <div className="source">
                    <div className="github">
                      <LuGithub />
                      <p>GitHub</p>
                    </div>
                    <div className="liveLink">
                      <LuExternalLink />
                      <p>Live Demo</p>
                    </div>
                  </div>
                </div>
              </div>
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
