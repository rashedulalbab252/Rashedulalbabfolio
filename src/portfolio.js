/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rashedul Albab",
  title: "Hi all, I'm Rashed",
  subTitle: emoji(
    "AI Researcher & PhD Candidate with an EEE foundation, specializing in the synergy between Physics-Informed AI and Modern Multimodal Systems. My research bridges Computer Vision, NLP, and Behavioral AI to revolutionize Healthcare, Renewable Energy, and AI-Driven Electromagnetic Systems—transforming high-impact theory into resilient, real-world engineering solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rashedulalbab253",
  linkedin: "https://www.linkedin.com/in/rashedul-albab/",
  gmail: "albabahmed74@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/rashedul.albab",
  researchgate: "https://www.researchgate.net/profile/Rashedul-Albab?ev=hdr_xprf",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle: "A comprehensive skill set spanning AI/ML, Computer Vision, Software Development, and Hardware Engineering.",
  skills: [
    emoji(
      "⚡ Programming: Python, MATLAB, C/C++, LaTeX"
    ),
    emoji("⚡ Tools & Frameworks: PyTorch, TensorFlow, Keras DL framework, Scikit-Learn, Huggingface Transformers"),
    emoji(
      "⚡ Software & DevOps: Simulink, Proteus, AutoCAD, FastAPI, Docker, Git, LangGraph"
    ),
    emoji(
      "⚡ AI/ML: Core Machine Learning (Supervised and Unsupervised Learning), Deep Learning (Neural Networks, Transformer), Fundamentals of NLP, LLM, Multimodal LLM, Rag, Generative Models (GAN)"
    ),
    emoji(
      "⚡ Computer Vision: Image Segmentation, Object Detection, Digital Image Processing (Feature Extraction, Enhancement), Optical Character Recognition (OCR), Vision Language Model (VLM)"
    ),
    emoji(
      "⚡ Hardware Skills: Arduino, FPGA"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "arduino",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Computer Vision",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Deep Learning",
      fontAwesomeClassname: "fas fa-network-wired"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Shahjalal University of Science & Technology",
      logo: "/works/sust_logo.png",
      schoolUrl: "https://www.sust.edu/",
      subHeader: "Bachelor of Science in Electrical and Electronic Engineering",
      duration: "January 2020 - July 2025",
      //desc: "Participated in the research of XXX and published 3 papers.",
      //descBullets: [
      // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    //{
    //schoolName: "Stanford University",
    //logo: require("./assets/images/stanfordLogo.png"),
    //subHeader: "Bachelor of Science in Computer Science",
    //duration: "September 2013 - April 2017",
    //desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    //}
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  sections: [
    {
      title: "Research Experience",
      experiences: [
        {
          title: "Research Assistant",
          company: "Dept. of EEE, Sylhet Engineering College",
          //companylogo: "/works/logo.png",
          date: "Dec 2024 – Jul 2025",
          desc: "Assisted in research projects focused on Machine Learning, Computer Vision, and AI applications.",
          descBullets: [
            "Conducted  research on explainable machine learning for multi-class power quality disturbance classification, implementing preprocessing pipelines, classical ML models (LR, SVM, RF, XGBoost), and a 1D-CNN architecture,accepted at ICCIT(IEEE),2025.", "Performed model interpretability analysis using SHAP and feature importance methods."

          ],
          url: "https://sec.ac.bd/"
        },
        {
          title: "Research Trainee",
          company: "Mahdy Research Academy",
          // companylogo: "/works/mahdy.png",
          date: "Jan 2024 – Dec 2024",
          desc: "Conducted research in ML, NLP,Human Centered AI and Healthcare AI applications.",
          descBullets: [
            "Mastered topics from statistical modeling to advanced architectures (Transformers, XAI) with hands-on implementation in Python, TensorFlow,PyTorch and scikit-learn.",
            "Developed a novel AI research project, leading to a journal-ready manuscript and a professional technical poster through iterative methodology refinement."
          ],
          url: "https://www.facebook.com/groups/315264107544221" // Replace with official URL if different
        }
      ]
    },
    {
      title: "Professional Experiences",
      experiences: [
        {
          title: "Machine Learning Engineer Intern",
          company: "eleVVo",
          companylogo: "/works/Elevo.png",
          date: "Aug 2025 – Sep 2025",
          desc: "Developed and deployed ML & DL  models on real-world data using Python, scikit-learn,Tensorflow,pytorch,Streamlit,Fastapi,AWS.",
          //descBullets: [
          //"Developed and deployed ML & DL  models on real-world data using Python, scikit-learn,Tensorflow,pytorch,Streamlit,Fastapi,AWS.",

          //],
          url: "https://elevvo.tech/home"
        }
      ]
    },
    {
      title: "Industrial Experience",
      experiences: [
        {
          title: "Industrial Trainee",
          company: "Training Institue for Chemical Industries(TICI)",
          companylogo: "/works/tici.png",
          date: "January 2024",
          desc: "3 week intensive industrial technology course at TICI, covering advanced Electrical Engineering & Instrumentation ,including motor control, substation distribution, DCS and PLC/SCADA systems",
          //descBullets: [
          //"Implemented data preprocessing scripts.",
          // "Integrated AI models into existing web dashboards."
          //],
          url: "https://tici.gov.bd/"
        }
      ]
    },
    {
      title: "Teaching Experience",
      experiences: [
        {
          title: "Physics Instructor",
          company: "Bright Teaching Home",
          companylogo: "/works/bright.png",
          date: "Jan 2020 – present",
          desc: "Teaching Physics at the HSC level for 5 years.",
          descBullets: [
            "Designed exam questions to develop problem solving skills and prepare students for competitive exams",

          ]
        },
        {
          title: "ICT  Instructor",
          company: "Odommo Academy",
          companylogo: "/works/odommo.jpeg",
          date: "Nov 2025 – Present",
          desc: "Assisting in teaching C programming,HTML and Database Management System.",
          descBullets: [
            "created exam questions aimed at enhancing problem-solving skills and preparing students for competitive exams.",

          ]
        }
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// Categorized Projects Structure
const bigProjects = {
  title: "Projects",
  subtitle: "A showcase of my work spanning AI/ML systems, Computer Vision, Multimodal AI, IoT systems, and Renewable Energy solutions",

  // Hierarchical project categories
  categories: [
    {
      categoryName: "Generative AI & LLMs",
      categoryIcon: "fas fa-brain",
      projects: [
        {
          projectName: "MathRAG AI – Reliable Multimodal Math Problem Solver",
          projectDesc: "Built an end-to-end AI Math Mentor that solves math problems using multimodal inputs (image, audio, text), explains solutions step-by-step, and improves via human feedback.",
          footerLink: [{ name: "GitHub", url: "https://github.com/rashedulalbab253/AI_math_solver_system_" }]
        },
        {
          projectName: "Albab ExamAI – AI-powered Exam Management System",
          projectDesc: "A scalable platform using FastAPI and Groq Llama 3 for automated grading, real-time anti-cheat security, and crash-resilient exam sessions.",
          footerLink: [{ name: "GitHub", url: "https://github.com/rashedulalbab253/GenAI-Assessment-Engine" }]
        },
        {
          projectName: "Multi Agent Research Assistant (CrewAI)",
          projectDesc: "Automates complex research workflows, analysis, and structured report generation using a modular multi-agent system.",
          footerLink: [{ name: "GitHub", url: "https://github.com/rashedulalbab253/AI-Research-Orchestrator" }]
        }
      ]
    },
    {
      categoryName: "Speech AI & NLP",
      categoryIcon: "fas fa-microphone-alt",
      projects: [
        {
          projectName: "BanglaVox AI: Context-Aware Neural Speech Translation System",
          projectDesc: "An industry-grade English-Bengali NMT ecosystem featuring an 8-turn context memory buffer and sub-500ms latency optimized on Groq LPU. Deployed across Edge (Desktop App) and Cloud (Vercel Serverless) with full CI/CD.",
          footerLink: [
            { name: "GitHub", url: "https://github.com/rashedulalbab253/english-bengali-voice-ai" }
          ]
        }
      ]
    },
    {
      categoryName: "Computer Vision",
      categoryIcon: "fas fa-eye",
      projects: [
        {
          projectName: "BengalVision ALPR: AI-Powered Bangla Number Plate System",
          projectDesc: "Real-time detection and recognition of Bangladeshi vehicle number plates using YOLOv11 and custom OCR, optimized with OpenVINO for edge deployment.",
          footerLink: [{ name: "GitHub", url: "https://github.com/rashedulalbab253/BengalPlateAI" }]
        },
        {
          projectName: "CourtVision: AI Powered Tennis Match Analysis",
          projectDesc: "A high-performance system for tennis analytics, performing player tracking, ball detection, and court keypoint estimation.",
          footerLink: [{ name: "GitHub", url: "https://github.com/rashedulalbab253/Tennis_analysis_system_using_YoloV12" }]
        }
      ]
    },
    {
      categoryName: "Healthcare AI",
      categoryIcon: "fas fa-heartbeat",
      projects: [
        {
          projectName: "Medibot AI: Retrieval-Grounded Clinical Assistant",
          projectDesc: "RAG-powered clinical chatbot orchestrating LLMs and vector retrieval for domain-grounded medical answers on AWS.",
          footerLink: [{ name: "GitHub", url: "https://github.com/rashedulalbab253/Medibot_with-LLMs-LangChain-Pinecone-Flask-AWS" }]
        },
        {
          projectName: "DermatoScan AI & LesionNet",
          projectDesc: "End-to-end skin lesion classification systems achieving 97%+ accuracy using custom CNN architectures (LesionNet) and EfficientNet-B3.",
          footerLink: [{ name: "GitHub", url: "https://github.com/rashedulalbab253/DermatoScan-End-to-End-AI" }]
        }
      ]
    },
    {
      categoryName: "Renewable Energy Systems",
      categoryIcon: "fas fa-solar-panel",
      projects: [
        {
          projectName: "Feasibility Study for a Small-Scale PV Project in North Baghbari,Sylhet",
          projectDesc: "Performed a techno-economic feasibility analysis of solar PV and wind energy systems using NREL's SAM, integrating weather and location data to evaluate system performance.",
          footerLink: [{ name: "View Report", url: "/projects/Renewable_Energy_System_Project.pdf" }]
        }
      ]
    },
    {
      categoryName: "IoT & Hardware Systems",
      categoryIcon: "fas fa-microchip",
      projects: [
        {
          projectName: "IoT Based Environmental Data Logger",
          projectDesc: "Designed and implemented a real-time environmental monitoring system using ESP32 and multiple sensors with cloud-based data logging.",
          footerLink: [{ name: "View Report", url: "/projects/IOT_bASED_DATA_LOGGER.pdf" }]
        }
      ]
    }
  ],

  // Legacy flat structure for backward compatibility
  projects: [
    {
      projectName: "IoT Based Environmental Data logger(ESP32)",
      projectDesc: "Designed and implemented a realtime environmental monitoring system using ESP32 and multiple sensors, enabling cloud based data logging and remote access through Google Sheets.",
      footerLink: [
        {
          name: "View Report",
          url: "/projects/IOT_bASED_DATA_LOGGER.pdf"
        }
      ]
    },
    {
      projectName: "Feasibility Study for a small-scale PV project in North Baghbari,Sylhet",
      projectDesc: "Performed a techno economic feasibility analysis of solar PV and wind energy systems using NREL s System Advisor Model(SAM), integrating weather, location, and energy yield data to evaluate system performance and local renewable energy viability..",
      footerLink: [
        {
          name: "View Report",
          url: "/projects/Renewable_Energy_System_Project.pdf"
        }
      ]
    },
    {
      projectName: "Medibot AI: Retrieval-Grounded Clinical Assistant",
      projectDesc: "Developed a RAG-powered clinical chatbot on AWS with Docker, orchestrating LLMs and vector retrieval for reliable, domain-grounded medical answers.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/rashedulalbab253/Medibot_with-LLMs-LangChain-Pinecone-Flask-AWS"
        }
      ]
    },
    {
      projectName: "Albab ExamAI – Real-time AI-powered Exam Management System",
      projectDesc: " Developed an AI-powered Exam Management System using FastAPI, Groq Llama 3, and Docker for automated grading of MCQs and subjective answers.Implemented real-time feedback, anti-cheat security, and crash-resilient exam sessions.Deployed a scalable production-ready platform with background evaluation queues and CI/CD pipelines.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/rashedulalbab253/GenAI-Assessment-Engine"
        }
      ]
    },
    {
      projectName: "MathRAG AI – Reliable Multimodal Math Problem Solver",
      projectDesc: " Built a end-to-end AI Math Mentor that can solve  math problems using multimodal inputs (image, audio, text), explain solutions step-by-step, and improve over time using memory and human feedback.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/rashedulalbab253/AI_math_solver_system_"
        }
      ]
    },
    {
      projectName: "BengalVision ALPR: AI-Powered Bangla Number Plate Detection and Recognition System",
      projectDesc: " Engineered an AI-powered ALPR system, BengalPlateAI, for real-time detection and recognition of Bangladeshi vehicle number plates using YOLOv11. Built FastAPI dashboards featuring confidence tuning and session tracking, with Docker-based deployment for production readiness. Optimized inference across PyTorch, ONNX, and OpenVINO, achieving approximately 92% accuracy in complex urban environments.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/rashedulalbab253/Tennis_analysis_system_using_YoloV12"
        }
      ]
    },
    {
      projectName: "CourtVision:AI Powered Tennis Match Analysis System",
      projectDesc: " Engineered a real-time AI system for tennis analytics, performing player detection, ball tracking, and court keypoint estimation using YOLO and ResNet models",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/rashedulalbab253/Tennis_analysis_system_using_YoloV12"
        }
      ]
    },
    {
      projectName: "Multi Agent Research Assistant(CrewAi )",
      projectDesc: " Created a modular multi-agent research assistant using CrewAI to automate research, analysis, and report generation, producing structured, high-quality outputs efficiently",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/rashedulalbab253/Ai_Research_Assitant"
        }
      ]
    },
    {
      projectName: "DermatoScan AI ",
      projectDesc: " DermatoScan AI is an end-to-end skin lesion classification system using EfficientNet-B3 (PyTorch) for multi-class diagnosis.Built with FastAPI, Docker, and CI/CD, it delivers secure, production-ready medical AI deployment",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/rashedulalbab253/DermatoScan-End-to-End-AI"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Highlighting my key accomplishments, international certifications, and honors in the field of technology and research.",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Research Section

const researchSection = {
  title: "Research Contributions",
  subtitle: "Specialized research interests",
  interests: [
    "AI in Healthcare",
    "Computer Vision",
    "Behavioral AI",
    "Natural Language Processing (NLP)",
    "AI-Driven Electromagnetic System",
    "AI in Renewable Energy"
  ],
  sections: [
    {
      title: "THESIS",
      projects: [
        {
          projectName: "LesionNet: A Custom CNN Model for Accurate Multiclass Classification of Dermoscopic Skin Lesions",
          projectDesc: `Skin cancer is one of the most prevalent and potentially fatal forms of cancer worldwide. The ability to accurately classify different types of skin lesions at an early stage is critical for ensuring timely treatment and improving patient outcomes. This study proposes a deep learning-based approach to automate the classification of dermoscopic images into seven categories of skin lesions, using a custom-designed Convolutional Neural Network (CNN) architecture named LesionNet. The model was trained and evaluated on the HAM10000 dataset, which includes over 10,015 RGB dermoscopic images representing a variety of dermatological conditions. To address the dataset’s inherent class imbalance, Random Oversampling was applied only to the training data to avoid biasing the test set. Comprehensive image preprocessing, including resizing, normalization, and augmentation (such as rotation, flipping, and zoom), was performed to improve the model’s generalizability. In addition, Exploratory Data Analysis (EDA) was conducted on associated metadata to observe trends in class distribution, patient age, gender, and lesion location. The LesionNet model was trained using categorical cross-entropy loss and optimized with the Adam optimizer. Evaluation was carried out using standard multiclass performance metrics, including accuracy, precision, recall, and F1-score. The proposed model, LesionNet, achieved a test accuracy of 97.12%, showing robust classification performance across all seven lesion types. These results demonstrate that with careful preprocessing and targeted model design, a lightweight customized CNN like LesionNet can serve as an effective tool for automated skin lesion classification, aiding in the development of reliable diagnostic support systems.

Keywords: Skin Lesions, Multiclass Classification, LesionNet, Convolutional Neural Network (CNN), Deep learning, Medical Image Analysis, Dermoscopy, Image Augmentation.
`,
          isThesis: true,
          footerLink: [
            {
              name: "View Book",
              url: "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-sec/2024/12/bd3cc794feca4a2bb611ce35e798f511.pdf"
            }
          ]
        }
      ]
    },
    {
      title: "Publications",
      projects: [
        {
          projectName: "Explainable Machine Learning for Multi-Class Power Quality Disturbance Classification Using SHAP and Feature Importance Analysis",
          projectDesc: `The reliability and efficiency of modern power systems are negatively impacted by power quality disturbances (PQDs), such as voltage sags, swells, harmonics, and transients. Hence, rapid and accurate classification of PQDs is essential to prevent equipment failures and to ensure stable grid operation. This paper proposes an explainable machine learning (ML) framework for multi-class PQD classification. The framework combines traditional algorithms, Logistic Regression (LR), Decision Tree (DT), Random Forest (RF), Support Vector Machine (SVM), and XGBoost, with a one-dimensional Convolutional Neural Network (1D-CNN). The dataset was preprocessed by handling negative THD values, capping outliers, performing feature selection, encoding categorical variables, and normalizing numerical features. Model interpretability was ensured using feature importance analysis and SHAP values. The experimental findings indicate that LR achieved the maximum accuracy of 99.79% across the five disturbance categories. Beyond predictive performance, the framework enhances transparency by identifying the most influential features including Total Harmonic Distortion (THD), RMS Voltage, and Peak Voltage. The findings demonstrate that integrating robust preprocessing, highperforming models, and explainability methods offers a reliable and interpretable solution for detecting power disturbances in advanced grid networks and present-day energy infrastructures. 

Keywords—Power quality disturbances, Power quality monitoring, Machine learning, Explainable AI (XAI), SHAP, 1D-CNN, Smart grids

`,
          publishedAt: "Accepted at: 28th ICCIT 2025(IEEE)",
          footerLink: [
            {
              name: "View Paper",
              url: "https://iccit.org.bd/2025/"
            }
          ]
        },

        {
          projectName: "Quantifying the Relationship between Socioeconomic Status and Parent-Child Attachment on Adolescents Through Machine Learning",
          projectDesc: `Parent-child relationships have a significant impact on adolescent development, influencing social cohesion, intellectual growth, and emotional well-being. Adolescence entails rapid biological, cognitive, and neurodevelopmental changes that profoundly impact psychosocial functioning and interpersonal dynamics. Socioeconomic status (SES) is a crucial factor influencing parent-child relationships, although quantifying how parentchild attachment influences SES remains challenging. To bridge this gap, we propose a Machine Learning (ML) framework to classify SES based on parent-child attachment factors, by using the publicly available dataset ”The effect of parent-child attachment on adolescents’ belief in a just world”, which consists of survey data from 239 families (478 samples). Following rigorous preprocessing—including Principal Component Analysis (PCA) for feature selection, z-score normalization, outlier rejection, and missing value imputation—seven classifiers (Decision Tree, Random Forest, k-Nearest Neighbors, Support Vector Machine, AdaBoost, XGBoost, and Logistic Regression) were trained and evaluated using k-fold cross-validation. Upsampling techniques were used to reduce class imbalance, which significantly enhanced model performance. XGBoost demonstrated the efficiency of ensemble approaches in SES classification by achieving the highest accuracy of 89.00% and AUC-ROC (98.44%), followed by Random Forest (88.40%) and Decision Tree (87.33%). Our findings indicate that attachment dimensions—particularly trust, communication, and alienation in both maternal and paternal relationships—are closely associated with SES categories. These findings provide a data-driven approach for creating focused interventions to improve the well-being of adolescents and reduce socioeconomic inequities. 

Index Terms—Socioeconomic Status (SES), Parent-Child Relationships, Machine Learning, Principal Component Analysis (PCA), XGBoost, Adolescent development.

`,
          publishedAt: "Accepted at: 28th ICCIT 2025(IEEE)",
          footerLink: [
            {
              name: "View Paper",
              url: "https://iccit.org.bd/2025/"
            }
          ]
        },
        {
          projectName: "Enhancing Wind Farm Operational Efficiency Through Power Output Classification Using MLP and Ensemble Models",
          projectDesc: `Accurately forecasting wind turbine power output is challenging due to the complex and non-linear patterns present in wind farm operational data. Conventional approaches largely adopt regression-based forecasting, which, while effective in predicting continuous values, often lacks the interpretability required for direct operational decision-making. In this work, we reframe the problem as a multi-class classification task, categorizing power output into discrete levels, low, medium, and high, to provide actionable insights for identifying underperforming turbines and optimizing maintenance schedules. A curated Supervisory Control and Data Acquisition (SCADA) dataset was processed through a rigorous pipeline, including the handling of physically impossible negative power values, outlier capping, feature normalization, and label encoding. Five Machine Learning (ML) models, including Logistic Regression (LR), Random Forest (RF), Gradient Boosting (GB), XGBoost, and a Multilayer Perceptron (MLP), were trained and optimized using Grid Search hyperparameter tuning. The MLP model obtained the highest classification accuracy of 93.51%, marginally outperforming the top-performing ensemble models. Feature importance analysis revealed that while tree-based models relied heavily on a limited set of features, the MLP distributed its attention more evenly across all inputs. The proposed classification-based framework offers a robust and interpretable alternative to regression-based approaches, providing direct operational benefits for the renewable energy sector. 

Keywords—Wind Turbine, Wind Energy, Machine Learning (ML), Power Output Classification, SCADA Data, Predictive Maintenance, Renewable Energy



`,
          publishedAt: "Accepted at: 28th ICCIT 2025(IEEE)",
          footerLink: [
            {
              name: "View Paper",
              url: "https://iccit.org.bd/2025/"
            }
          ]
        },
        {
          projectName: "Time-Dependent Control of Voltage and Current via a Tunable Metasurface",
          projectDesc: `Metasurfaces have recently attracted significant attention due to their potential use in optics and meta-devices as compact platforms for precise manipulation of electromagnetic waves. In this work, we present a tunable metasurface geometry based on a triple concentric ring configuration that offers superior surface-wave confinement and enhanced reactive control compared with conventional single-ring or patch structures. Based on our designs, the proposed structure achieves controllable voltage and current responses through strong field confinement and rapid impedance modulation along its surface. Although implementation on a cost-effective FR-4 substrate exhibits moderate dielectric loss at high frequencies, the metasurface maintains efficient performance and supports surfacewave transmission at 30 GHz. Under sinusoidal excitation with an input amplitude of 1V at 30 GHz, the device outperforms a copper reference plate, providing approximately 40V of voltage and about 0.8A of current at the microscale across a resistive load. Temporal reconfiguration is enabled by an exponential voltage signal applied to the voltage-controlled switches (VCS), which alternates the surface reactance between capacitive and inductive states within a 20 ns window. The electromagnetic field amplitudes remain stable across the metasurface, and the switching process produces controlled suppression and restoration of power flow. Overall, the metasurface demonstrates tunable, time-dependent electrical control and holds promise for nextgeneration reconfigurable communication, sensing, and energymodulation platforms. 

Index Terms—Metasurface, Voltage Controlled Switch, Temporal modulation, Surface reactance, Temporal boundaries, FR-4 substrate.

`,
          publishedAt: "Accepted at: 28th ICCIT 2025(IEEE)",
          footerLink: [
            {
              name: "View Paper",
              url: "https://iccit.org.bd/2025/"
            }
          ]
        },
        {
          projectName: " A Vision Transformer-Based Pipeline for the Automated Classification of Monkeypox and Other Vesicular Skin Lesions: A Computationally-Efficient Approach for Global Health",
          projectDesc: `Infectious diseases with dermatological manifestations, such as monkeypox, pose significant di-agnostic challenges, particularly in resource-limited settings. The visual similarity of monkeypox lesions to those of chickenpox, cowpox, hand-foot-and-mouth disease (HFMD), and measles com-plicates clinical assessment, often leading to misdiagnosis and delayed containment efforts. This thesis addresses the urgent need for an accurate, accessible, and automated diagnostic tool by pro-posing a novel pipeline based on a Vision Transformer (ViT). The proposed framework leverages pre-trained, frozen ViT-B/16 embeddings (specifically 'vit_base_patch16_224.orig_in21k' from the timm library) to perform six-class classification on the Mpox Skin Lesion Dataset Version 2.0 (MSLD v2.0), comprising 37,044 images. Evaluated using a rigorous five-fold cross-validation protocol, the primary model (ViT + SMOTE + SVM) achieves a mean macro-F1 score of 0.9895 ± 0.0018 and an accuracy of 98.95% ± 0.29%. By extracting robust, high-level features from im-ages, the pipeline avoids the computational expense of fine-tuning deep neural networks. To ad-dress the inherent class imbalance in medical datasets, the Synthetic Minority Oversampling Tech-nique (SMOTE) is integrated with a Support Vector Machine (SVM) classifier. Evaluated using a rigorous five-fold cross-validation protocol, the pipeline demonstrates exceptional performance. The primary model (ViT + SMOTE + SVM) achieves a mean macro-F1 score of 0.9895 ± 0.0018 and an accuracy of 98.95% ± 0.29%. Critically for public health applications and indicating a high sensitivity for detecting the target disease. This performance significantly surpasses a k-Nearest Neighbors (k-NN) baseline, validating the effectiveness of the SMOTE-based balancing strat-egy.This work makes several contributions: it demonstrates the power of frozen ViT embeddings for complex medical classification tasks, presents a lightweight and scalable pipeline suitable for deployment on edge devices, and provides a robust framework for handling class imbalance. By incorporating discussions on feature space visualization, ethical considerations, and practical de-ployment case studies, this thesis lays the groundwork for a clinically relevant tool that can en-hance global health preparedness and support dermatological diagnostics in diverse environments. 

Keywords: Monkeypox, Skin Lesion Classification, Vision Transformer (ViT), Mpox Skin Le-sion Dataset (MSLD v2.0), Support Vector Machine (SVM), Synthetic Minority Oversampling Technique (SMOTE).

`,
          publishedAt: "Ongoing",
          //footerLink: [
          //{
          // name: "View Paper",
          //url: "https://iccit.org.bd/2025/"
          //}
          // ]
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Sharing insights and tutorials on emerging technologies, AI research, and software development.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://arxiv.org/abs/2410.07176",
      title: "Astute RAG: Overcoming Imperfect Retrieval Augmentation and Knowledge",
      description:
        "Retrieval-Augmented Generation (RAG) models often grapple with challenges stemming from the use of imperfect, irrelevant, or misleading information during the retrieval process. Despite the prevalence of these issues, there is scant research on the conflicts that arise between a large language model's (LLM) internal knowledge and the external sources it retrieves from. To address this gap, here introduced Astute RAG, a refined approach designed to enhance the synergy between LLMs and retrieval systems.\n\nAstute RAG improves upon traditional RAG models by meticulously combining consistent information from both internal and external sources. It employs advanced mechanisms to identify and resolve conflicts between these sources, ensuring that only relevant and accurate information influences the generation process. By filtering the misleading or irrelevant content, Astute RAG significantly enhances the reliability and effectiveness of LLM outputs, making it a pivotal development in the field of augmented language models.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      footerLink: [
        {
          name: "Astute RAG Paper",
          url: "https://arxiv.org/abs/2410.07176"
        }
      ]
    },
    {
      url: "https://arxiv.org/abs/2104.08691",
      title: "Differences Among Fine Tuning, Prompt Tuning, and Prompt Engineering",
      description:
        "Differences Among Fine Tuning, Prompt Tuning, and Prompt Engineering\n\nFine Tuning:\nThis involves re-training a pre-trained model to adapt it for a specific task. It adjusts the model's weights through additional training, which can require significant computational resources. The entire model is updated to optimize performance for the new task.\n\nPrompt Tuning:\nUnlike fine tuning, prompt tuning involves adding a set of trainable parameters (or soft prompts) to the input without altering the original model’s weights. This approach allows the model to adapt to new tasks while keeping the pre-existing weights fixed, making it less computationally intensive than fine tuning.\n\nPrompt Engineering:\nThis method relies entirely on crafting effective input prompts for the model. It does not involve any computational training or modification of model parameters. Prompt engineering is about designing prompts that effectively guide the model to generate the desired output.\n\nTwo Approaches to Prompt Tuning:\n- Soft Prompt Tuning: This approach uses gradient descent to optimize continuous embedding vectors that are attached to the language model’s input. While soft prompts can be effective, they are typically hard for humans to interpret, which can obscure understanding of the model’s decision-making processes. Additionally, these prompts are not reusable across different models and require access to the model's internal gradients, which can be computationally expensive.\n- Reinforcement Learning (RL) Prompt Tuning: RL prompt tuning optimizes prompts using reinforcement learning techniques. In this method, an agent generates prompts by selecting tokens in a way that maximizes a reward signal derived from the model’s performance on a task. This approach does not require gradient information from the language model, making it suitable for models where gradient access is impractical. RL prompts are specifically tuned for input scenarios and are interpretable, allowing them to handle diverse textual styles. They are also flexible and can be adapted to different models, such as left-to-right models like GPT or masked models like BERT.\n\nConclusion:\nFine tuning adjusts the entire model to new tasks but requires substantial resources. Prompt tuning modifies input handling to adapt the model with less resource expenditure, and prompt engineering creatively utilizes designed inputs to steer model outputs without any training.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
      footerLink: [
        {
          name: "PEFT Paper",
          url: "https://arxiv.org/abs/2104.08691"
        },
        {
          name: "RL-Prompt Paper",
          url: "https://arxiv.org/abs/2205.12548"
        }
      ]
    },
    {
      url: "https://arxiv.org/abs/2106.09685",
      title: "Efficiency in LLM Training: LoRA, QLoRa, Galore, and QGalore",
      description:
        "Training large language models (LLMs) is a resource-intensive process, primarily due to the vast number of parameters involved. Various methods have been developed to improve the efficiency of this process, focusing on reducing memory usage without significantly sacrificing model performance.\n\nLoRA: Low-Rank Adaptation\n\nLoRA (Low-Rank Adaptation) is a technique that introduces two low-rank matrices, A and B, into the training process. This method allows the freezing of pre-trained model weights, thereby reducing the number of trainable parameters. By focusing only on adapting these low-rank matrices, LoRA enables finer model tuning while leveraging existing, well-optimized model architectures.\n\nQLoRa: Quantized Low-Rank Adaptation\n\nBuilding on the foundation of LoRA, QLoRa incorporates a 4-bit quantized pre-trained model with low-rank adapters. This approach aims to maintain the efficiency benefits of LoRA while further reducing the memory footprint through quantization.\n\nGalore: Gradient Approximation for Low-Rank Updates\n\nDespite its advantages, one limitation of LoRA is that it only supports fine-tuning and may result in degraded accuracy. Galore addresses this by supporting both pre-training and fine-tuning phases. Unlike LoRA, which approximates weight updates, Galore approximates the gradients themselves. It uses Singular Value Decomposition (SVD) to decompose each gradient matrix into two smaller matrices, P and Q, aiming to reconstruct an approximation of the gradient matrix. This method allows Galore to update the low-rank factors P and Q iteratively, optimizing memory usage by only storing these factors instead of the entire gradient matrix.\n\nQGalore: Adaptive Quantization in Gradient Subspaces\n\nTo enhance the efficiency of Galore, QGalore introduces adaptive updates within the gradient subspaces while maintaining a compact memory format. It preserves the gradient matrix in a 4-bit format for memory efficiency and uses an 8-bit format for weights, in contrast to the 16-bit representation typically used in Galore. This quantization not only reduces the memory requirements further but also allows the model to adapt more dynamically to changes in the gradient subspace.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
      footerLink: [
        {
          name: "LoRA Paper",
          url: "https://arxiv.org/abs/2106.09685"
        },
        {
          name: "QLoRa Paper",
          url: "https://arxiv.org/abs/2305.14314"
        },
        {
          name: "Galore Paper",
          url: "https://arxiv.org/abs/2403.03507"
        },
        {
          name: "QGalore Paper",
          url: "https://arxiv.org/abs/2407.08296"
        }
      ]
    },
    {
      url: "https://arxiv.org/abs/2311.09677",
      title: "R-Tuning: Teaching LLMs to Declare Uncertainty",
      description:
        "Large language models (LLMs) often face issues with generating incorrect or hallucinated content. Various methods have been proposed to address this challenge, one of which includes the use of Retrieval Augmented Generation (RAG) techniques. This paper introduces a novel approach called R-tuning, aimed at teaching LLMs to better handle uncertainty in questions.\n\nThey applied a pre-trained model to a dataset composed of questions and their corresponding answers. This dataset was divided into two subsets based on the congruence between the predicted and actual answers:\n- D0: The subset where the model’s prediction does not match the ground truth.\n- D1: The subset where the model’s prediction aligns with the ground truth.\n\nIn the D1 subset, where predictions were accurate, they prepended the phrase \"I am sure\" to the model's responses. Conversely, in the D0 subset, where predictions were incorrect, they used the padding \"I am unsure.\" This method of explicit feedback helps the model learn to express certainty or uncertainty based on the context of the information provided.\n\nThe implementation of this R-tuning approach has demonstrated significant improvements over traditional LLM setups. When tested against well-known models such as Llama 7b and Llama 13b, their method showed superior performance on diverse datasets including MMLU, which features multiple-choice questions, and ParaRel, which involves predicting answers. By integrating phrases that indicate confidence, the model not only learns to recognize its own certainty levels but also enhances its reliability by openly expressing uncertainty when appropriate.\n\nThis R-tuning strategy marks a promising advance in the development of more reliable and self-aware language models. By enabling LLMs to acknowledge and communicate the certainty of their responses, they can significantly reduce the occurrence of hallucinations and increase the trustworthiness of model-generated content.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
      footerLink: [
        {
          name: "R-Tuning Paper",
          url: "https://arxiv.org/abs/2311.09677"
        }
      ]
    },
    {
      url: "https://arxiv.org/abs/2205.14135",
      title: "Flash Attention: Overcoming Memory Access Bottlenecks",
      description:
        "Attention mechanisms are pivotal in modeling sequences in deep learning. Vanilla attention, with its complexity of O(n²), involves multiplying queries with keys and values, which can be computationally expensive. To optimize this, methods like sparse attention and low-rank approximations have been introduced. However, these methods are mere approximations of the exact attention mechanism.\n\nFlash Attention: A Breakthrough in Attention Mechanism Efficiency\n\nFlash Attention emerges as a true game-changer by providing exact attention computations with significantly reduced complexity. Unlike Vanilla Attention, Flash Attention addresses both FLOPS and memory access overheads, boasting an attention time complexity of O(n). This is a stark improvement over the O(n log n) complexity of models like the Reformer.\n\nMemory Hierarchy and GPU Utilization\n\nThe performance of attention mechanisms is also tightly coupled with memory hierarchy utilization:\n- Storage Devices: From hard disks to GPUs, each storage level plays a crucial role. GPUs excel due to their parallelism.\n- GPU Architecture: Modern GPUs like the NVIDIA A100 feature streaming multiprocessors with specialized tensor and CUDA cores, supported by L1/shared memory (SRAM).\n- Memory Hierarchy in GPUs: Data travels from HBM to L2 cache and finally to local SRAM. Flash Attention optimizes this data movement.\n\nOptimizing GPU Utilization with Flash Attention\n\nFlash Attention maximizes the use of tensor cores which are approximately 200 times faster than standard GPU memory. It leverages High Bandwidth Memory (HBM) technology through:\n- Tiling and Recomputation: Flash Attention employs tiling to split the matrix into manageable chunks processed in SRAM, and uses recomputation during backpropagation to save memory.\n- Kernel Fusion: This technique combines operations in tensor cores without frequent data transfers back to GPU memory, reducing synchronization overhead.\n- Block Sparse Attention: This method applies attention sparsely within blocks to compute results at a much faster rate.\n\nPerformance and Efficiency\n\nUsing techniques like kernel fusion and block sparse attention, Flash Attention enhances the speed and efficiency of models like BERT and GPT-2 significantly. Benchmarks show it outperforms Vanilla Attention and other approximations like Linformer, particularly in handling longer sequences on single GPU setups.",
      image: "/blog_images/flash_attention.png",
      footerLink: [
        {
          name: "Flash Attention Paper",
          url: "https://arxiv.org/abs/2205.14135"
        }
      ]
    },
    {
      url: "https://github.com/rashedulalbab253",
      title: "Decoding Activation Functions: From Sigmoid to SELU",
      description:
        "Activation functions play a crucial role in neural networks, typically employed in hidden and output layers, but not in input layers. By default, the absence of an activation function implies a linear activation. Here's a closer look at several common types:\n\nSigmoid:\nCharacterized by its S-shaped curve, the sigmoid function outputs values between 0 and 1 for any input ranging from negative to positive infinity. While useful, it is prone to causing vanishing gradient issues due to its output range, and its outputs are not zero-centered.\n\nTanh (Hyperbolic Tangent):\nSimilar to the sigmoid in shape but outputs values from -1 to 1. It offers stronger gradients than sigmoid, making it more effective in some cases. However, it still suffers from vanishing gradient problems like its sigmoid counterpart.\n\nReLU (Rectified Linear Unit):\nThis function addresses some of the drawbacks of sigmoid and tanh by outputting the input directly if it is positive; otherwise, it outputs zero. Although it helps mitigate vanishing gradient issues, ReLU is not differentiable at zero and can lead to \"dying neurons\" where outputs become zero for all negative inputs.\n\nLeaky ReLU:\nTo avoid the dying neuron issue, Leaky ReLU modifies ReLU by allowing a small, non-zero output for negative inputs. Typically, the equation is f(x) = x if x > 0, otherwise f(x) = 0.01x. Variants like randomized and parametric Leaky ReLU allow for the negative slope to be randomized or learned during training, adding flexibility.\n\nParametric ReLU (PReLU):\nThis function generalizes Leaky ReLU by making the negative slope a parameter that is learned during training, rather than being a fixed value. This flexibility can lead to better model performance but increases model complexity.\n\nSigmoid Linear Unit (SiLU):\nSiLU, or Swish, combines properties of sigmoid and ReLU, promoting smooth and non-monotonic function that dynamically adjusts based on the input value, improving model performance.\n\nSoftplus:\nThis function serves as a smooth approximation of ReLU, defined as f(x) = ln(1 + exp(x)). It smoothly transitions outputs based on the input but can be computationally intensive and may still encounter vanishing gradients for very negative inputs.\n\nGaussian Error Linear Unit (GELU):\nGELU is both smooth and monotonic, making it highly effective in neural network layers. The function is defined as f(x) = x * φ(x), where φ(x) represents the cumulative distribution function of Gaussian. This setup allows for a slight output even for negative inputs close to zero, while larger negative inputs tend toward zero.\n\nExponential Linear Unit (ELU):\nELU improves upon the ReLU by outputting non-zero values for negative inputs, thereby solving the dying neuron problem. The function formula is f(x) = x if x > 0, otherwise f(x) = α(exp(x) - 1). This characteristic enhances the backpropagation process through negative regions and generally results in faster convergence.\n\nScaled Exponential Linear Unit (SELU):\nBuilding on the advantages of ELU, SELU is designed to be self-normalizing. It automatically scales outputs of neurons to maintain a mean of zero and standard deviation of one across layers, which helps in stabilizing the gradient in deep networks. λ and α are predefined constants that ensure self-normalization.\n\nActivation Function Hierarchy (Performance Ranking):\nIn practice, the performance hierarchy often observed is:\n- SELU (Highest Stability)\n- ELU\n- Leaky ReLU\n- ReLU\n- Tanh\n- Logistic / Sigmoid\n\nThis ranking is based on each function's ability to handle issues like vanishing gradients and neuron death, as well as their impact on the speed of convergence and generalization in different neural network architectures.",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
      footerLink: [
        {
          name: "Learn More",
          url: "https://github.com/rashedulalbab253"
        }
      ]
    },
    {
      url: "https://arxiv.org/abs/2404.19756",
      title: "KAN: Kolmogorov-Arnold Networks",
      description:
        "Introducing Kolmogorov-Arnold Networks (KANs):\nA Novel Approach to Deep Learning Architectures\n\nWhile Multilayer Perceptrons (MLPs) have been foundational to the development of deep learning architectures, their design places activation functions directly on neurons. In this work, they propose a transformative approach called Kolmogorov-Arnold Networks (KANs), which repositions activation functions from neurons to the connections between them—specifically, on the weights.\n\nTheoretical Foundation:\nThis research demonstrates that KANs offer improved accuracy and interpretability over traditional MLPs. This approach is based on the Kolmogorov-Arnold representation theorem (KART), contrasting sharply with the universal approximation theorem (UAT) that inspires MLPs. While UAT posits that a network cannot achieve infinite accuracy with a fixed width, KART suggests the possibility under certain conditions.\n\nCore Innovation:\nThe core innovation of KANs involves two-layer networks where activation functions are learnable and positioned on the edges, representing a shift from neuron-centric to connection-centric neural design. This concept honors the legacies of mathematicians Andrey Kolmogorov and Vladimir Arnold, whose work underpins our theoretical framework.\n\nFuture Impact:\nIt marks a significant step forward in exploring alternative deep learning models that could potentially revolutionize how neural networks are conceptualized and implemented in various fields of artificial intelligence.\n\nConclusion:\nBy repositioning learnable activation functions to the weights, KANs provide a mathematically robust and interpretable alternative to the standard MLP architectures that have dominated the field for decades.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
      footerLink: [
        {
          name: "KAN Research Paper",
          url: "https://arxiv.org/abs/2404.19756"
        }
      ]
    },
    {
      url: "https://arxiv.org/abs/2405.04517",
      title: "LSTM vs xLSTM: Evolution of Recurrent Architectures",
      description:
        "Understanding LSTM and its Variants for Sequence Modeling\n\nLSTM (Long Short-Term Memory) networks are a compelling choice for stock market prediction due to their ability to handle long sequence data effectively. Unlike n-gram models, which are essentially large collections of tokens, LSTM networks can process sequences of indefinite length thanks to their unique architectural features.\n\nxLSTM Architecture:\nxLSTM networks incorporate two types of memory cells: the standard LSTM (sLSTM) and the modified LSTM (mLSTM). The sLSTM introduces a new memory mixing technique that enhances its ability to manage sequence information dynamically. This model is structured with alternate stacking layers (s layer and m layer), allowing for sophisticated data processing flows.\n\nCore Improvements:\nOne significant enhancement in the mLSTM is the addition of Matrix Memory, which provides extra memory capacity and supports parallelizable training, similar to attention mechanisms in Transformers. This feature allows LSTMs to outperform when dealing with tasks requiring constant memory attention.\n\nChallenges and Innovations:\nDespite their strengths, LSTMs encounter vanishing and exploding gradient issues. These arise when gradients are multiplied recursively. Traditional LSTMs also suffer from non-parallelizability, necessitating sequential processing.\n\nTo mitigate the vanishing gradient problem, the sLSTM variant removes the sigmoid nonlinearity in favor of an exponential function. This approach involves normalizing the output of each hidden state and employing gradient clipping to maintain stability.\n\nmLSTM: Enhancing Memory Utilization\nThe mLSTM configuration introduces a novel approach to memory utilization by storing vectors in a matrix, with the matrix columns acting as keys for retrieval. This aspect underscores the practical improvements when applying mLSTM in scenarios like time series forecasting, where its recurrent capabilities are beneficial.\n\nConclusion:\nWhile there is no definitive superior model for all tasks, the variations and improvements in LSTM designs, such as sLSTM and mLSTM, demonstrate their versatility and potential in applications like time series forecasting. Future work continues to leverage techniques from other architectures to address LSTM’s inherent limitations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080&auto=format&fit=crop",
      footerLink: [
        {
          name: "xLSTM Research Paper",
          url: "https://arxiv.org/abs/2405.04517"
        }
      ]
    },
    {
      url: "https://arxiv.org/abs/2302.05737",
      title: "Text Generation via Discrete Diffusion Models",
      description:
        "Text Generation via Discrete Diffusion Models\n\nDiffusion models, originally celebrated for their efficacy in generating high-quality images, audio, and video, have now made significant strides in text generation. Unlike traditional autoregressive models, discrete diffusion models have emerged as potent tools capable of producing text with high fidelity, positioning them as valuable complements to models like GPT.\n\nUnderstanding Diffusion Models:\nDiffusion models work by gradually introducing noise into a data sample until it is fully randomized, and then methodically reversing this process during inference to generate coherent outputs. This technique is intuitive for continuous data like images but presents unique challenges when applied to the discrete and symbolic nature of text.\n\nChallenges in Text Diffusion:\nIn text generation, the transition from one token to another isn't as direct as it is in images. To address this, developers have adapted diffusion models specifically for text by focusing on the probability vectors of tokens rather than the tokens themselves.\n\nDiscrete Diffusion Models for Text:\nThe discrete diffusion model innovatively applies diffusion processes to the probability vectors that represent the likelihood of each token in the vocabulary. Unlike BERT, which only masks 15% of tokens, the discrete diffusion model can handle a varying range of masked tokens—from 0% to 100%.\n\nAdvantages Over BERT:\nOne significant advantage lies in its flexibility and the breadth of its masking capability, allowing it to learn from a broader context and more complex patterns. This approach pushes the boundaries of what's possible in natural language processing by overcoming the limitations inherent in traditional generative models.",
      image: "/blog_images/discrete_diffusion.png",
      footerLink: [
        {
          name: "Discrete Diffusion Paper",
          url: "https://arxiv.org/abs/2302.05737"
        }
      ]
    },
    {
      url: "https://arxiv.org/abs/2305.14282",
      title: "InstructScore: Explainable Evaluation for Text Generation",
      description:
        "InstructScore: Enhancing Explainability in Text Generation Evaluation\n\nThe paper introduces InstructScore, a novel method for evaluating text generation that surpasses traditional models by providing detailed, explainable feedback instead of mere scores. This approach aims to offer deeper insights into the evaluation process, improving both transparency and utility.\n\nProcess Overview:\nThe evaluation begins by generating a seed example using GPT-4, which is intentionally crafted to include errors. This error-laden data is then used to fine-tune a Llama model, adapting it to recognize and adjust for similar issues in future outputs.\n\nIterative Refinement and Feedback:\nFollowing fine-tuning, the Llama model is queried with specific questions that probe its understanding and handling of the input text. The responses from Llama undergo a rigorous evaluation process involving both automated tools and human reviewers. This stage assesses the alignment of the generated text with expected standards and outputs an alignment score.\n\nMeta-Feedback for Continuous Improvement:\nThe feedback, rich in specifics, is then fed back into the Llama model as part of a meta-feedback system. This iterative process not only refines the model’s performance but also enhances its ability to generate explanations for its text outputs.\n\nConclusion:\nInstructScore represents a significant advance in text generation evaluation by providing a framework that not only assesses textual outputs but also explains the basis of its evaluations. This method fosters greater understanding and trust in automated text generation systems, paving the way for more refined and accountable AI-driven content creation.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      footerLink: [
        {
          name: "InstructScore Paper",
          url: "https://arxiv.org/abs/2305.14282"
        }
      ]
    },
    {
      url: "https://arxiv.org/abs/2404.14469",
      title: "SnapKV: Memory-Efficient Selective KV Caching",
      description:
        "SnapKV: Enhancing Memory Efficiency in LLMs with Selective KV Caching\n\nLarge Language Models (LLMs) are adept at processing extensive contexts but face challenges in managing the growth of the Key-Value (KV) cache, which can significantly impact memory use and processing time. To address these challenges, the paper introduces SnapKV, a novel approach that does not require fine-tuning.\n\nKey Innovation:\nSnapKV efficiently reduces the KV cache size while maintaining performance levels comparable to traditional methods. The innovation stems from the observation that specific attention heads consistently focus on particular features of the input during generation. By analyzing these patterns through an 'observation window,' SnapKV identifies and retains only the most impactful KV pairs, effectively compressing the KV cache.\n\nEfficiency and Performance:\nIn practical terms, SnapKV dramatically improves the efficiency of LLMs. It achieves a 3.6 times faster decoding speed and an 8.2 times improvement in memory efficiency when handling sequences up to 16K tokens. Moreover, it extends the capacity of LLMs to process up to 380K context tokens on a single A100-80GB GPU without a significant loss in accuracy.\n\nConclusion:\nSnapKV's advancements suggest it has significant potential for practical applications, particularly in scenarios requiring the processing of large datasets with resource constraints. This approach not only conserves computational resources but also paves the way for more sustainable and scalable implementations of LLMs.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1080&auto=format&fit=crop",
      footerLink: [
        {
          name: "SnapKV Paper",
          url: "https://arxiv.org/abs/2404.14469"
        }
      ]
    },
    {
      url: "https://blog.google/products-and-platforms/products/gemini/gemini-3/",
      title: "Google Gemini 3 Pro: The New Frontier in LLMs",
      description:
        "In the rapidly evolving landscape of artificial intelligence, Google’s Gemini 3 Pro represents one of the most significant advances in large language model (LLM) research as of late 2025. Developed by Google DeepMind, this model extends beyond conventional language understanding to deliver state-of-the-art reasoning, deep multimodal comprehension, and phd-level analytical performance.\n\nFlagship Variant Capabilities:\nGemini 3 Pro is built as the flagship variant of the Gemini 3 family. Through improvements in architecture and training regimes, the model achieves exceptional results across major natural language and vision benchmarks. It has recorded breakthrough scores on tests such as LMArena (1501 Elo) and demonstrated robust reasoning performance even on complex scientific and mathematical tasks.\n\nMultimodal Intelligence:\nA defining feature of Gemini 3 Pro is its multimodal intelligence. Unlike earlier models restricted to text or simplistic image recognition, Gemini 3 Pro processes and synthesizes information across text, images, video, and spatial inputs. This enables it to interpret and reason about diagrams, spatial layouts, and scientific visualizations — tasks that are critically important in fields such as physics, biology, architecture, and medicine.\n\nExtended Context & Workflows:\nResearchers and developers can access Gemini 3 Pro through platforms like Google AI Studio and Vertex AI. The model’s support for extended long-context windows enables it to handle entire books, research papers, or large datasets in a single pass, drastically reducing context fragmentation.\n\nConclusion:\nGoogle’s Gemini 3 Pro is not merely another incremental update; it represents a paradigm shift in how large language models can engage with multimodal data and reasoning. Its robust performance on challenging benchmarks makes it a compelling subject for academic discussion and a powerful tool for PhD-level research and practical applications.",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1080&auto=format&fit=crop",
      footerLink: [
        {
          name: "Launch Details",
          url: "https://blog.google/products-and-platforms/products/gemini/gemini-3/?utm_source=chatgpt.com"
        },
        {
          name: "Multimodal Vision",
          url: "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-3-pro-vision/?utm_source=chatgpt.com"
        },
        {
          name: "Developer Overview",
          url: "https://blog.google/technology/developers/gemini-3-developers/?utm_source=chatgpt.com"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Passionate about sharing knowledge and engaging with the tech community through research talks and workshops! 🎤"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Discussing the intersection of technology, research, and personal growth in various tech platforms.",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Have a question or want to collaborate on a research or project? Feel free to reach out!",
  number: "+8801834616407",
  email_address: "albabahmed74@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  researchSection
};
