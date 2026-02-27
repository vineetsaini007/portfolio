import project1 from "../assets/projects/project1.png"
import project2 from "../assets/projects/project2.png"


export const HERO_CONTENT = `I am a final year student pursuing B.Tech. in Computer Science & Engineering from Delhi Technical Campus , Guru Gobind Singh Indraprastha University.  
I’m a curious learner and passionate Software Developer in the making. I’m on a journey to turn my love for coding into solutions that make a difference.
I thrive on tackling challenges, learning something new every day, and bringing creative ideas to life through technology. Whether it’s solving complex problems or crafting intuitive solutions, I’m always up for the adventure!
As someone who’s constantly evolving, I’m excited to take on new projects and grow through every opportunity. Let’s create something amazing together!`;


export const EXPERIENCES = [
  {
    year: "July, 2025 - September, 2025",
    role: "Frontend Developer Intern",
    company: "Milenium Erectors Pvt. Ltd.",
    certificate: "View Certificate",
    description: `During my internship, I contributed to both frontend development and quality assurance, ensuring high-performance and user-friendly web applications. I designed and developed responsive UI components using HTML, CSS, JavaScript, and modern frameworks, focusing on clean design and seamless user experience across devices. I collaborated closely with designers and backend developers to integrate APIs efficiently and maintain smooth functionality. Additionally, I performed API validation and debugging using Postman, helping reduce backend response errors by 30%. I actively participated in testing and debugging processes, ensuring 95%+ functionality coverage across various user scenarios and devices. Through team meetings and project discussions, I contributed ideas to improve performance and usability, gaining hands-on experience in real-world development workflows and collaborative environments..`,
    technologies: ["React", "Next.js", "Tailwind CSS", ]
  }
];

export const PROJECTS = [{
    title: "CodeSyncX",
    image: project2,
    link: "https://codesyncx.netlify.app/",
    description:"CodeSyncX is a responsive collaborative coding platform built with React that enables real-time code editing and sharing among multiple users.",
    technologies: ["React","Socket.io", "CodeMirror"],
    github: "https://github.com/vineetsaini007/CodeSyncX"
  },
 {
    title: "CryptoRadar",
    image: project1,
    link: "https://cryyptoradar.netlify.app/",
    description:"CryptoRadar is a responsive crypto tracking app built with React that fetches real-time market data, lets users search coins, and visualize prices with interactive charts for quick insights into cryptocurrency trends.",
    technologies: ["React","Google-Charts", "CoinGecko API"],
    github: "https://github.com/vineetsaini007/CryptoRadar"
  }]



export const CONTACT = {
  address: "New Delhi,India ",
  phoneNo: "+91 8595947790 ",
  email: "vineetsainiii007@gmail.com",
};
