import { RiReactjsLine } from "react-icons/ri"
import {
  SiMongodb,
  SiExpress,
  SiC,
  SiCplusplus,
  SiTailwindcss,
  SiHtml5,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiPostgresql,
  SiRedis,
  SiMysql,
  SiSupabase,
  SiGithub
} from "react-icons/si"
import { DiNodejs, DiPython } from "react-icons/di"
import { FaAngular, FaJava } from "react-icons/fa"
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const skills = [
  { icon: RiReactjsLine, color: "text-cyan-400", name: "React" },
  { icon: SiMongodb, color: "text-green-600", name: "MongoDB" },
  { icon: DiNodejs, color: "text-green-700", name: "Node.js" },
  { icon: SiExpress, color: "text-black", name: "Express" },
  { icon: FaAngular, color: "text-red-500", name: "Angular" },
  { icon: FaJava, color: "text-blue-500", name: "Java" },
  { icon: DiPython, color: "text-yellow-500", name: "Python" },
  { icon: SiC, color: "text-blue-600", name: "C" },
  { icon: SiCplusplus, color: "text-blue-700", name: "C++" },
  { icon: SiTailwindcss, color: "text-sky-400", name: "Tailwind CSS" },
  { icon: SiHtml5, color: "text-orange-500", name: "HTML" },
  { icon: SiNextdotjs, color: "text-black", name: "Next.js" },
  { icon: SiJavascript, color: "text-yellow-400", name: "JavaScript" },
  { icon: SiTypescript, color: "text-blue-600", name: "TypeScript" },
  { icon: SiFirebase, color: "text-orange-400", name: "Firebase" },
  { icon: SiPostgresql, color: "text-blue-800", name: "PostgreSQL" },
  { icon: SiRedis, color: "text-red-500", name: "Redis" },
  { icon: SiMysql, color: "text-blue-500", name: "MySQL" },
  { icon: SiSupabase, color: "text-green-500", name: "Supabase" },
  { icon: SiGithub, color: "text-black", name: "GitHub" },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-300 pb-16 md:pb-24" id="skills">

      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-14 md:my-20 text-center text-3xl md:text-4xl "
      >
        My Secret Sauce: A Flavorful Mix of Technologies I Love to Cook With!
      </motion.h1>

      {/* Skills Grid */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-12 md:gap-x-12 md:gap-y-20"
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              variants={iconVariants(2 + index * 0.2)}
              initial="initial"
              animate="animate"
              className="group relative flex flex-col items-center justify-center 
              rounded-xl md:rounded-2xl 
              border-2 md:border-4 border-neutral-300 
              p-4 md:p-6 pb-6 md:pb-10
              hover:shadow-xl transition duration-300"
            >
              <Icon className={`text-4xl md:text-6xl lg:text-7xl ${skill.color}`} />

              {/* Hover Name */}
              <span className="absolute -bottom-8 md:-bottom-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-xs md:text-sm font-medium text-black whitespace-nowrap">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

    </div>
  )
}

export default Technologies
