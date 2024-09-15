'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'UD Barokah',
    description: `UD Barokah is a website dedicated to the distribution business of cigarette tobacco machines and spare parts. Through this website, customers can explore various types of high-quality cigarette tobacco machines, ranging from production machines to other supporting equipment, complete with product descriptions and transparent prices.
The website is designed with a simple yet functional interface, allowing customers to search for products quickly and efficiently. Built using Vite.js for speedy access, UD Barokah's website ensures optimal performance, both on desktop and mobile devices.
Customers can also find the spare parts they need easily, as well as contact the UD Barokah team through the contact page for consultation or ordering. With a simple online ordering feature, shopping for cigarette tobacco machines and spare parts becomes more practical and efficient.`,
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
    previewUrl: 'https://tobaccosparepart.com',
  },
  {
    id: 2,
    title: 'Airy AI',
    description: `Airy AI is an innovative platform that harnesses the power of artificial intelligence from Groq to deliver accessible, high-performance AI solutions. Using Groq's renowned technology for fast and efficient AI processing, Airy AI provides a range of features, including intelligent chatbots, automated data analysis, and natural language processing, designed to help businesses and individuals optimize their productivity.
The website is built with an intuitive and responsive interface, allowing users of different skill levels to easily integrate AI into their workflow. Groq technology support ensures optimal performance, with processing speeds that are superior to traditional solutions, making Airy AI the right choice for applications that require advanced artificial intelligence and high speed.`,
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Airyyy23/airyai',
    previewUrl: 'https://airyai.vercel.app',
  },
  {
    id: 3,
    title: 'Airy Store',
    description: `The Airy Store website consists of two main parts: the store website and the admin website. The store website, built using Next.js, React, and TypeScript, serves as an e-commerce platform that allows users to browse and purchase various products. Its main features include a product catalog that displays details and images, a shopping cart for the purchase process, and search and filter features for easy navigation. In addition, users can create accounts, login, and make payments online.`,
    image: '/images/projects/3.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Airyyy23/website-toko',
  },
  {
    id: 4,
    title: 'Airy Store Admin',
    description: `On the other hand, the admin website is also developed with Next.js, React, and TypeScript, and supported by Prisma for data management. The website is designed to manage and control store operations, including product management, order management, and provision of reports and statistics. Admins can add, edit, and delete products, manage incoming orders, and monitor user activity and sales. The integration between the store website and admin ensures smooth operations and an efficient and well-managed user experience.`,
    image: '/images/projects/4.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Airyyy23/website-admin',
  },
  {
    id: 5,
    title: 'LaporKasat',
    description: `LaporKasat is an innovative application designed to simplify the process of filing complaints and requests for assistance to Satpol PP. With an intuitive and easy-to-use interface, the app allows the public to report various problems and needs efficiently. Users can file complaints regarding issues in their neighborhood, ranging from regulatory violations to social issues that require attention, as well as apply for assistance in emergency situations or special needs. The app is equipped with a form validation feature to ensure the data entered by users is valid and complete. By using Dart and Flutter, as well as utilizing GetX for status management and GetStorage for local storage, LaporKasat offers a simple yet effective user experience. The application supports Satpol PP's efforts in maintaining public safety and order in a more organized and efficient manner. Check on PlayStore`,
    image: '/images/projects/5.jpg',
    tag: ['All', 'Mobile'],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
