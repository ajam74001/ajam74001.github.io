
export const profile_pic_url = 'static/images/profile.png'
export const email_address = "mali18@ku.edu.tr"
export const resume_url = 'static/docs/resume.pdf'

export const achievements = [
    {title: "Huawei Koc university mobile development competition (ranked 1st)",
    year: 2021},
    {title: "Project of the year award in software engineering analysis and design course",
    year: 2020},

    {title: "Top 100 worldwide in IEEEXtreme Programming Contest (ranked 2ed in Turkey).",
    year: 2019},

    {title: "Damascus ACM College Programing Contest (ranked 1st for two years).",
    year: "2015 & 2016"},

    {title: "Honorable mention in Asia-Pacific Olympiad of Informatics (APIO)",
    year: 2016},
    
]
export const news = [
  {
    title: "Participating at HashCode 2022",
    date: "February 2022",
    description: [
      "I am very excited to participate in <a href:'https://codingcompetitions.withgoogle.com/hashcode/'>HashCode 2022</a>. The qualification round starts on February 24th"
    ]
  },
  {
    title: "Teaching assistant at COMP 547 Deep Unsupervised Learning",
    date: "February 2022",
    description: [
      "I joined as an undergraduate teaching assistant of <a href='https://aykuterdem.github.io/classes/comp547/'> COMP 547 Deep Unsupervised Learning </a> for spring 2022."
    ]
  },
  {
    title: "Left my part-time job at Hospital on Mobile",
    date: "January 2022",
    description: [
      " I left my part-time job at Hospital on Mobile to focus more on my current research project on Text-Guided Image Manipulation"]
  },
]
export const experience = [
  {
    title : "KUIS AI LAB Research Intern",
    location: "Istanbul, Turkey",
    subtitle: "“Text-guided image manipulation”. (Supervised by Prof. Aykut Erdem)",
    date: "July 2021 - Present",
    description: [
      "Working on an ongoing research on text-guided image manipulation using a novel approach based on vectorquantized variational auto-encoders and transformers.",
    ],
  },
  {
    title: "Hospital on Mobile",
    subtitle: "Remote Part-Time Machine Learning Engineer",
    date: "Feb 2021 - Jan 2022",
    location: "California, USA",
    description: [
      "Implemented a Pytorch and Tensorflow framework interface for integrating, training, and visualizing deep learning architectures, which was used by the AI research team.",
      "Contributed to the state-of-the-art results on Blood Pressure estimation from PPG signals by applying recent deep learning architectures with novel extensions, implemented in Python based on Tensorflow framework.",
      "Worked on an algorithmic-based approach for extracting HRV measurements from fingertip videos, which was deployed in the Hospital On Mobile application API"
    ],
  },
  {
    title: "IUI LAB Resarch Intern",
    location: "Istanbul, Turkey",
    subtitle: "“Automated feedback for sketch-based questions”. (Supervised by Prof. Metin Sezgin)",
    date: "May 2020 - June 2021",
    description: [
      "Designed and implemented an unsupervised feedback system for sketch-based questions based on sketch objectlevel semantic segmentation, and object to object alignment, inspired by image registration.",
    ],
  },
]

export const indep_projects = [
  {
    title : "Video Continuous Implicit Representation: ",
    subtitle: "",
    description: [
      "As a part of “advances in deep learning” course project, I implemented a new architecture using Pytorch for representing videos as an implicit function parameterized by a transformer architecture.",
    ],
  },
  {
    title : "Opera: ",
    subtitle: "An easy to integrate and research-oriented distributed network simulator",
    description: [
      "Integrated TCP, UDP, JavaRMI, and a mock network underlay, and implemented the simulator overlay.",
      "Published at IEEE INFOCOM 2021 conference"
    ],
  },
  {
    title : "Co-Founder of Yders: ",
    subtitle: "A platform that empowers university students and links them with school students to give them private tutoring at reasonable prices.",
    description: [
      "1st place in Startup Roadshow Istanbul 2019.",
    ],
  },
  {
    title : "Technical Skills & Tools: ",
    subtitle: "",
    description: [
      "Programming Languages And Tools: Python, C/C++, Java, Julia, MYSQL.",
      "Advanced algorithms, Data Structure, Computer Networking, Machine learning, Deep learning, and the basics of Web development, and Android development.",
      "Unix, LaTex, Web scraping, Git, LEGO Robotics, and Arduino."
    ],
  },
]



// TODO Add a couple lines about each projectexport 
export const projects = [
  {
    title: 'Text-Guided Image Manipulation',
    link: 'https://ai.ku.edu.tr/',
    image: 'static/images/image-manipulation.png',
    date: 'July 2021 - Present',
    relevantSkills : ["Research", "Pytohn", "Pytoch", "Generative models", "Deep Unsupervised Learning"],
    desc:
      "In this ongoing research project at <a href='https://ai.ku.edu.tr/'>KUIS AI LAB</a> under the supervision of <a href='https://aykuterdem.github.io/'> Prof. Aykut Erdem</a>, I am working on performing image manipulation guided by a given textual description." +
      " The shared image is a preliminary result of image manipulation by moving in the feature space. The project codebase will be shared after publishing the work."
  },
  {
    title: 'self-supervised Feedback System',
    link: 'https://github.com/MoayedHajiAli/Sketch-Feedback-System',
    image: 'static/images/sketch.gif',
    date: 'May 2020 - July 2021',
    relevantSkills : ["Research", "Python", "Deep learning", "Clustering algorithms", "self-supervised learning"],
    desc:
    "During my research internship at the <a href='https://iui.ku.edu.tr'>IUI LAB</a>, I worked under the supervision of " +
    "<a href='https://iui.ku.edu.tr/people/'>Prof. Metin Sezgin</a> on designing a self-supervised feedback system for sketch-based open-ended questions."
    +" The project is based on <a href='https://arxiv.org/abs/2002.10381'>Sketchformer</a> for object-to-object alignment and a clustering-based approach for object-level segmentation."
    + ' The shared video is a sample of transforming student answer (bottom-left corner) to the correct answer (upper-right corner)',
  },

  {
    title: 'Opera: Distributed Systems Simulator',
    image: 'static/images/dashboard_sample.png',
    link: 'https://github.com/MoayedHajiAli/Opera',
    date: 'May 2020 - March 2021',
    relevantSkills : ["Software Engineering", "Java", "Computer networking", "Docker"],
    desc:
      'Opera is an offline simulator for distributed systems. Opera provides an integrative and easy-to-use interface for running, testing, and analysing distributed systems on various protocols such as TCP, JavaRMI, and UDP.'+
      " The work was publish as a demo paper at <a href='https://ieeexplore.ieee.org/document/9484524'> IEEE INFOCOMP Conference</a>"
  },
  
  {
    title: 'KuViD 2021: The winner of Best Software engineering & desing course project',
    link: 'https://github.com/MoayedHajiAli/KUvid-302',
    image: 'static/images/game.gif',
    date: 'Sep 2020 - Jan 2021',
    relevantSkills : ["Software Engineering", "Java", "Design patterns"],
    desc:
      'As a part of Koc University Software engineering & design course, I worked with a team of five students to develop an invader game.' +
      ' The project was meant to practice various design patters such as Decorator, Controller, Observor, and Visitor.' +
      'KuVid was awarded the best project of the year award'
  },

  {
    title: 'HuaweiQA: Huawei androind development competition winner',
    image: 'static/images/huawei.gif',
    link: 'https://github.com/MoayedHajiAli/HuaweiQA',
    date: 'Nov 2020 - Dec 2020',
    relevantSkills : ["Software Engineering", "Java", "Android Development"],
    center : true,
    desc:
      'HuaweiQA is an android application that enables teachers to create quizzes for students and track their overall scores.'
      + ' The application was meant to showcase using HMS Toolkit, and I received first place in Huawei Android Development Competition.' 
  },
];

