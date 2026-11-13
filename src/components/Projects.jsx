import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Hotel Management System",
    category: "Development",
    description:
      "A hotel management system featuring room management and an integrated guest feedback collection and analysis module.",
    technologies: ["ASP.NET MVC", "C#", "SQL Server", "AI/NLP"],
    image: "/HotelMSImg.png",
    type: "featured",
  },
  {
    title: "ABC Car",
    category: "Development",
    description:
      "A desktop application developed for a car and car-parts selling business to support its business operations.",
    technologies: ["C#", "Windows Forms", ".NET"],
    image: "/ABCCarImg.png",
  },
  {
    title: "Taxi Reservation System",
    category: "UI/UX Design",
    description:
      "A user interface design concept for a taxi reservation system, focusing on a clear booking experience and intuitive navigation.",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
    image: "/CityTaxiImg.png",
  },
  {
    title: "Book Shop Management System",
    category: "Development",
    description:
      "A management application designed to organise book inventory and streamline bookshop operations.",
    technologies: ["C#", "Database", "Application Development"],
    image: "/BookShopImg.png",
  },
  {
    title: "Shero Shoes",
    category: "UI/UX Design",
    description:
      "A UI/UX design project for a shoe retail brand, focusing on an engaging product browsing experience and a clean visual interface.",
    technologies: ["Figma", "UI/UX Design", "Wireframing"],
    image: "/ShoeShopImg.png",
  },
  {
    title: "Personal Portfolio",
    category: "Development",
    description:
      "A responsive personal portfolio showcasing my UI/UX design work, software development projects, professional experience, and technical skills.",
    technologies: ["React", "Vite", "CSS", "Framer Motion"],
    image: "/PortfolioImg.png",
  },
];

const filters = ["All", "UI/UX Design", "Development"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>

          <h2>
            Projects that bring{" "}
            <span className="gradient-text">ideas to life.</span>
          </h2>

          <p>
            A selection of my UI/UX design work and software development
            projects, showcasing creativity and technical expertise.
          </p>
        </div>

        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-button ${
                activeFilter === filter ? "active" : ""
              }`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div className="projects-grid" layout>
          {filteredProjects.map((project, index) => (
            <motion.article
              className={`project-card ${
                project.type === "featured" ? "project-featured" : ""
              }`}
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.06,
              }}
            >
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="project-image"
                  loading="lazy"
                />

                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-body">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <ArrowUpRight size={20} aria-hidden="true" />
                </div>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
