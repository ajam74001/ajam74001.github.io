
export const profile_pic_url = 'images/profile.png'
export const email_address = "ainazj1@umbc.edu"
export const resume_url = 'docs/resume.pdf'

export const achievements = [
    {title: "Offered Senior Data Scientist Role at Trendyol-The largest online shopping platform in Turkey.",
    year: 2023},
    {title: "Awarded the KUSIS AI scholarship at Koc University.",
    year: 2022},

    {title: "Kaggle Expert, received 1 silver and 8 bronze medals.",
    year: "2021"},

    {title: "Exceptional talent award from Amirkabir University.",
    year: 2015},
    {title: "Top 0.1% of participants in the nationwide university entrance exam in Iran.",
    year: 2013},
]
export const news = [
  {
    title: "Joining UMBC as a PhD student ",
    date: "August 2023",
    description: [
      "I am very excited to pursue my academic journey as a PhD student at UMBC. "
    ]
  },
  {
    title: "Teaching Assistant for Foundations of Data Science.",
    date: "August 2023",
    description: [
      "I joined as teaching assistant of Foundations of Data Science course at UMBC in fall 2023."
    ]
  },
  // {
  //   title: "Left my part-time job at Hospital on Mobile",
  //   date: "January 2022",
  //   description: [
  //     " I left my part-time job at Hospital on Mobile to focus more on my current research project on Text-Guided Image Manipulation"]
  // },
]
export const experience = [
  {
    title : "KUIS AI LAB Research Assistance",
    location: "Istanbul, Turkey",
    subtitle: "Supervised by Prof.Baris Akgun",
    date: "September 2018 - 2023",
    description: [
      "Worked on several projects based on Deep Learning (DL) and Reinforcement Learning (RL), including:", 
      "Operator Decision Aid Design via Multi-Dimensional Time-Series Event Prediction: A Hydrocracking Unit Application,",
      "Learning Autonomous Discretionary Lane Change behaviour utilizing Offline Reinforcement Learning"
    ],
  },
  {
    title: "CareX",
    subtitle: "Remote Part-Time Machine Learning Engineer",
    date: "Nov 2021 - March 2022",
    location: "California, USA",
    description: [
      "Designed a pipeline to extract PPG signals from the videos recorded from the finger tip by smart phones’ camera.",
      "Designed and implemented Machine learning pipelines for blood pressure estima- tion using Pytorch and Keras."
    ],
  },
  {
    title: "Private Tutoring",
    location: "London, England",
    subtitle: "Remote",
    date: "September 2021 - 2023",
    description: [
      "Delivered +400 hours of private tutoring in introductory Python programming, Advanced Python programming, Algorithm and complexity.",
      
    ],
  },
  {
    title: "Data Scientist",
    location: "Tehran, Iran",
    subtitle: "Supervised by Dr.Golnaz Baghdadi",
    date: "June 2017 - June 2019",
    description: [
      "Designed and implemented a pipeline for denoising EEG signals based on ICA algorithm using Matlab and WinEEG.",
      "Designed and implemented a new two back task with positive and negative feed- back in c# programming language. This implementation was employed, by the clinic, in their studies for a long time.", 
      "Research on cognitive neuroscience, designing and programming cognitive tasks.",
    ],
  },
]

export const indep_projects = [
  {
    title : "Generation of High Quality Synthetic Phonocardiogram Signals Using Generative Adversarial Networks and Diffusion Models. ",
    subtitle: "year: 2023",
    description: [
      "",
    ],
  },
  {
    title : "Bio-signal processing course project: Addressing PCG Heart Murmur Detection from Audio Saliency Prediction Perspective.",
    subtitle: "year: 2022 - 2023",
    description: [
      "",
      
    ],
  },
  {
    title : "Learning Autonomous Discretionary Lane Change behaviour Based on Offline Reinforcement Learning. ",
    subtitle: "year: 2022",
    description: [
      "Submitted to IEEE Transactions on Intelligent Transportation Systems.",
    ],
  },
  {
    title : "Technical Skills & Tools: ",
    subtitle: "",
    description: [
      "Programming Languages And Tools: Python, C/C++, Java, Julia, MYSQL.",
      "Advanced algorithms, Data Structure, Machine learning, Deep learning, Reinforcement Learning, and the basics of Web development, and Android development.",
      "Unix, LaTex, Web scraping, Git, etc."
    ],
  },
]




// TODO: add the links to the git code of each project 
export const projects = [
  {
    title: 'Generation of High Quality Synthetic Phonocardiogram Signals Using Generative Adversarial Networks and Diffusion Models.',
    link: 'images/PCG.png',
    image: 'images/PCG.png',
    date: 'September 2023 - Present',
    relevantSkills : ["Research", "Pytohn", "Pytoch", "Generative models", "Healthcare"],
    desc:
      "In this ongoing research project at UMBC, which is under the supervision of <a href='https://sanjayp.is.umbc.edu'> Prof. Sanjay Purushotham </a>, the focus is on generating high-quality PCG signals. I utilized the <a href= 'https://moody-challenge.physionet.org/2022/'> Physionet Moody Challenge 2022</a> dataset." +
      " The shared image represents a preliminary result of the quality of the synthetic PCG data generated through our methodology. The project's codebase will be made available after the work is published."
  },
  {
    title: 'Learning Autonomous Discretionary Lane Change behaviour Based on Offline Reinforcement Learning.',
    link: 'images/DQN.gif',
    image: 'images/DQN.gif',
    date: 'May 2022',
    relevantSkills : ["Research", "Python", "Deep learning", "Reinforcemnet Learning ", "Autonomuos Driving"],
    desc:
    "During my research assistance ship at the <a href='https://ai.ku.edu.tr/'> KUSIS AI lab</a> at Koc University, I worked under the supervision of " +
    "<a href='https://mysite.ku.edu.tr/baakgun/'>Prof. Baris Akgun</a> on various DL and RL based projects."
    +" The latest work focuses on proposing a high-level decision-making mechanism, rooted in offline RL methods, for discretionary lane-change behavior on highways."
    + "The above gif shows the performance of our offline methodology on a Python coded Environment.",

  },

  // {
  //   title: 'Opera: Distributed Systems Simulator',
  //   image: 'static/images/dashboard_sample.png',
  //   link: 'https://github.com/MoayedHajiAli/Opera',
  //   date: 'May 2020 - March 2021',
  //   relevantSkills : ["Software Engineering", "Java", "Computer networking", "Docker"],
  //   desc:
  //     'Opera is an offline simulator for distributed systems. Opera provides an integrative and easy-to-use interface for running, testing, and analysing distributed systems on various protocols such as TCP, JavaRMI, and UDP.'+
  //     " The work was publish as a demo paper at <a href='https://ieeexplore.ieee.org/document/9484524'> IEEE INFOCOMP Conference</a>"
  // },
  
  // {
  //   title: 'KuViD 2021: The winner of Best Software engineering & desing course project',
  //   link: 'https://github.com/MoayedHajiAli/KUvid-302',
  //   image: 'static/images/game.gif',
  //   date: 'Sep 2020 - Jan 2021',
  //   relevantSkills : ["Software Engineering", "Java", "Design patterns"],
  //   desc:
  //     'As a part of Koc University Software engineering & design course, I worked with a team of five students to develop an invader game.' +
  //     ' The project was meant to practice various design patters such as Decorator, Controller, Observor, and Visitor.' +
  //     'KuVid was awarded the best project of the year award'
  // },

  {
    title: 'Operator Decision Aid Design via Multi-Dimensional Time-Series Event Prediction: A Hydrocracking Unit Application',
    image: 'images/DecisionAid.png',
    link: 'images/DecisionAid.png',
    date: 'Sep 2019-2021',
    relevantSkills : ["Deep Learning ", "Machine Learning", "Timeseries Forecasting",  "PyTorch"],
    center : true,
    desc:
      'This is my Masters thesis project which was under the supervision of Prof. Baris Akgun.' +
      
      ' This work proposes a data-driven methodology to create decision aids for refinery operators. These aids use machine learning models trained on historical data to generate soft-alarms that alert operators of potential undesirable events within a specific timeframe.'+
      'The study also explores an online adaptive thresholding method to fine-tune the precision-recall trade-off, enhancing the decision-making process.' 
  },
];

