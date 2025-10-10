import project1 from "../assets/projects/ASLearn-Preview.png";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/WellMate-Demo.mov";
import project4 from "../assets/projects/MailSafe-Demo.mov";
import project5 from "../assets/projects/elev8-demo.mov";

export const HERO_CONTENT = 'I am a Computer Science student at Drexel University, with concentrations in AI and Software Engineering. I enjoy building full-stack applications and machine learning projects using Python, Java, React, and AI frameworks, bringing ideas to life to solve real-world problems.';

export const EXPERIENCES = [
  {
    year: "September 2025 - Present",
    role: "Undergraduate Researcher - Co-Design of Spiking BERT",
    company: "Drexel University - Department of Electrical & Computer Engineering",
    description: `Fine-tuned BERT on 9 GLUE benchmark datasets achieving 86% accuracy and 84% F1-score. Developed a spiking BERT model with 88% accuracy on GLUE and 70% energy reduction. Optimized training workflow with GPU acceleration, conducting 50+ experiments and achieving 35% training time reduction.`,
    technologies: ["Python", "PyTorch", "BERT", "Machine Learning", "Neural Networks"],
  },
  {
    year: "June 2025 - August 2025",
    role: "Tech Instructor",
    company: "Lavner Education",
    description: `Taught Python, Java, Robotics, and Game Development to 20+ students. Designed and guided projects in Object-Oriented Programming and game mechanics, resulting in 30% boost in completion and engagement rates. Provided one-on-one tutoring across multiple programming languages and platforms.`,
    technologies: ["Python", "Java", "Robotics", "Game Development", "Teaching"],
  },
];

export const PROJECTS = [
  {
    title: "elev8",
    image: project5,
    isVideo: true,
    description:
      "Founded and developed a voice AI receptionist SaaS platform using Vapi API to automate client communication workflows for small businesses. Designed and implemented secure RESTful APIs with JWT authentication, integrating Vapi.ai and Supabase to handle 500+ daily requests with 99.9% uptime, enabling real-time analytics and scalable session management. Built a CI/CD pipeline using GitHub Actions, reducing deployment time by 70% and delivering weekly automated releases with zero downtime.",
    technologies: ["Vapi API", "TypeScript", "Supabase", "AWS", "React", "Next.js"],
    githubUrl: "https://github.com/kevindinh24/elev8",
    liveUrl: "https://www.elev8ai.dev/",
  },
  {
    title: "ASLearn - Philly Codefest 2025",
    image: project1,
    description:
      "Led a 4-member team to build an AI-powered web platform for American Sign Language (ASL) gesture recognition. Developed and trained an AI model using OpenCV and YOLOvX, with automated dataset collection using Jupyter Notebook scripts.",
    technologies: ["OpenCV", "YOLOvX", "Python", "Jupyter", "AI/ML"],
    githubUrl: "https://github.com/kevindinh24/ASLearn",
  },
  {
    title: "WellMate",
    image: project3,
    isVideo: true,
    description:
      "Developed a goal-tracking app using Flutter and Firebase. Implemented secure user authentication and personalized data sync with 2-second login/load time reduction. Led 3 Agile sprints with 10+ code commits/week, tracking 100+ goal completions using structured models in Realtime Database.",
    technologies: ["Flutter", "Dart", "Firebase", "Authentication", "Agile"],
    githubUrl: "https://github.com/kevindinh24/WellMate",
  },
  {
    title: "Spam and Phishing Detection",
    image: project4,
    isVideo: true,
    description:
      "Developed a machine learning-based web application to detect and classify email messages as spam or phishing, enhancing email security for users. Achieved 80% accuracy in spam detection by implementing and tuning a Naive Bayes model using Scikit-learn. Applied NLP techniques to analyze email content and extract relevant features, with a user-friendly interface for real-time classification.",
    technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "NLP"],
    githubUrl: "https://github.com/kevindinh24/Spam-Phishing-Detector",
  },
  {
    title: "Moodify",
    image: project2,
    description:
      "Built a Flask-based web app integrating Spotify API for mood-based playlists. Implemented secure OAuth 2.0 authentication and leveraged Spotify's Recommendations API for 5 mood states, improving personalization with 20% reduction in page load time.",
    technologies: ["Spotify API", "Python", "Flask", "HTML", "CSS", "OAuth 2.0"],
    githubUrl: "https://github.com/kevindinh24/Moodify",
  },
];

export const CONTACT = {
  address: "Philadelphia, PA",
  phoneNo: "516-800-7669",
  email: "kkd49@drexel.edu",
};