// src/components/EducationSection.tsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './EducationSection.css'; // Import the CSS file

const educationItems = [
  {
    school: "Associate of Science",
    degree: "Computer Information Systems",
    year: 2023,
    details: "GPA: 4.0 - High Honors, Summa Cum Laude",
    link: "https://www.aims.edu/",
    description: "Completed a comprehensive program focused on the principles and practices of computer information systems, including coursework in software development, database management, and network security."
  },
  {
    school: "Full Stack Web Developer Certificate",
    year: 2023,
    details: "Skills: HTML, CSS, JavaScript, SQL",
    link: "https://www.example.com/full-stack-cert",
    description: "Acquired skills in full stack web development, mastering both front-end and back-end technologies to build and deploy web applications."
  },
  {
    school: "C# Programming Certificate",
    year: 2023,
    details: "Skills: C#, .NET, OOP principles",
    link: "https://www.example.com/csharp-cert",
    description: "Gained expertise in C# programming and .NET framework, with a focus on object-oriented programming principles and software design patterns."
  },
  {
    school: "UNIX Certificate",
    year: 2024,
    details: "Skills: UNIX system administration, shell scripting",
    link: "https://www.example.com/unix-cert",
    description: "Learned UNIX system administration and shell scripting, gaining proficiency in managing and automating tasks on UNIX-based systems."
  },
  {
    school: "Object-Oriented Programming Mobile Applications Certificate",
    year: 2024,
    details: "Skills: Java, Android, Swift, mobile app development",
    link: "https://www.example.com/oop-mobile-apps-cert",
    description: "Developed skills in mobile app development for Android and iOS platforms, focusing on object-oriented programming with Java and Swift."
  }
];

const EducationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
      const items = section.querySelectorAll('.education-item');
      items.forEach((item: Element) => observer.observe(item));
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="education"
      className={`education-section-container section ${isClient ? '' : 'active'}`}
      ref={sectionRef}
    >
      <div className="education-section-title-container">
        <h2 className="education-section-title">Education</h2>
      </div>
      <div className="education-content">
        {educationItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            className="education-item"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{item.school}</h3>
            <p><strong>{item.degree || item.school}</strong>, {item.year}</p>
            <p>{item.details}</p>
            <p>{item.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
