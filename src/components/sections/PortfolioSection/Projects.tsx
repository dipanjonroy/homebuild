import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    img: {
      src: "/projects/project-1.jpg",
      alt: "Desert Vista Luxury Residence",
    },
    title: "Desert Vista Luxury Residence",
    text: "A modern luxury home featuring open living spaces, premium finishes, and a seamless indoor-outdoor design inspired by the desert landscape.",
    url: "/",
  },
  {
    img: {
      src: "/projects/project-2.jpg",
      alt: "The Boulevard Commercial Center",
    },
    title: "The Boulevard Commercial Center",
    text: "A contemporary commercial development designed to provide functional retail and office spaces with a focus on efficiency and modern architecture.",
    url: "/",
  },
  {
    img: {
      src: "/projects/project-3.jpg",
      alt: "Modern Retreat",
    },
    title: "Modern Retreat",
    text: "A contemporary commercial development designed to provide functional retail and office spaces with a focus on efficiency and modern architecture.",
    url: "/",
  },
  {
    img: {
      src: "/projects/project-4.jpg",
      alt: "Sunset Valley Family",
    },
    title: "Sunset Valley Family",
    text: "A contemporary commercial development designed to provide functional retail and office spaces with a focus on efficiency and modern architecture.",
    url: "/",
  },
  {
    img: {
      src: "/projects/project-5.jpg",
      alt: "Home Renovation",
    },
    title: "Home Renovation",
    text: "A contemporary commercial development designed to provide functional retail and office spaces with a focus on efficiency and modern architecture.",
    url: "/",
  },
];

export default function Projects() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6">
        {
          projectsData.map((project,idx)=>(
            <div key={idx} className={idx < 2 ? "xl:col-span-3" : "xl:col-span-2"}>
              <ProjectCard details={project} featured={idx < 2}/>
            </div>
          ))
        }
      </div>
    </div>
  );
}
