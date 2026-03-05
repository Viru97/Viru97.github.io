
// ============================================================
//  PORTFOLIO CONTENT FILE
//  Edit ONLY this file to update all text, links, and data.
//  Save and refresh your browser to see changes instantly.
// ============================================================

const PORTFOLIO = {

  // ── PERSONAL INFO ─────────────────────────────────────────
  personal: {
    name:          "Apurv Patel",
    initials:      "AP",
    badge:         "Available for Opportunities · Stuttgart, DE",
    typewriter: [
      "Robotics Engineer",
      "RL Researcher",
      "Simulation Developer",
      "ML Engineer",
      "Dexterous Grasping Expert"
    ],
    bio: "MSc Electrical Engineering (Smart Systems) student at University of Stuttgart. Building intelligent robotic systems through reinforcement learning, simulation, and real-world hardware integration.",
    profileImage:  "images/profile.jpg",
    profileAlt:    "Apurv Patel",
    profileRole:   "robotics.engineer@stuttgart",
    profileTags:   ["RL", "ROS2", "Isaac Lab", "PyTorch"],
    cvPath:        "documents/CV_ApurvPatel.pdf",
    email:         "your.email@example.com",
    linkedin:      "https://linkedin.com/in/yourprofile",
    github:        "https://github.com/yourusername",
    location:      "Stuttgart, Baden-Württemberg, Germany",
    footerNote:    "Crafted with ☕ in Stuttgart"
  },

  // ── HERO FLOATING STATS ──────────────────────────────────
  heroStats: [
    { num: "MSc",  label: "Smart Systems"   },
    { num: "2+",   label: "Yrs Research"    },
    { num: "5+",   label: "Projects Done"   }
  ],

  // ── ABOUT SECTION ────────────────────────────────────────
  about: {
    label:    "// about me",
    heading:  "Building Intelligent\nRobotic Systems",
    paragraphs: [
      `I'm a robotics engineer and researcher completing my <strong>MSc in Electrical Engineering (Smart Systems)</strong> at the University of Stuttgart, with a deep focus on <strong>reinforcement learning for dexterous robotic manipulation</strong>.`,
      `At <strong>Fraunhofer IPA</strong>, I develop cutting-edge industrial automation solutions — from digital twin development and robotic cell simulation to dexterous gripper design. My research bridges the gap between simulation and physical deployment through domain randomization and sim-to-real transfer.`
    ],
    quote: "\"My goal is to develop robotic systems that learn from experience and adapt to complex, unstructured environments — making intelligent automation accessible across industries.\"",
    stats: [
      { num: 3,  label: "Years of Engineering" },
      { num: 5,  label: "Research Projects"    },
      { num: 10, label: "Technologies"         },
      { num: 2,  label: "Publications"         }
    ]
  },

  // ── SKILLS SECTION ───────────────────────────────────────
  skills: {
    label:   "// technical skills",
    heading: "Tools & Technologies",
    desc:    "From simulation environments to hardware interfaces — my full technical toolkit for robotics, ML, and control systems.",
    cards: [
      {
        icon:  "🤖",
        title: "Robotics & Simulation",
        desc:  "Extensive experience in robotic simulation, motion planning, and real-world deployment pipelines.",
        tags:  ["Isaac Lab", "Isaac Sim", "ROS2", "Gazebo", "MoveIt", "URDF"]
      },
      {
        icon:  "🧠",
        title: "Machine Learning & RL",
        desc:  "Deep RL implementation with custom environments, reward shaping, and policy optimization algorithms.",
        tags:  ["PyTorch", "PPO", "SAC", "TensorBoard", "OpenCV", "NumPy"]
      },
      {
        icon:  "⚡",
        title: "Programming & Dev Tools",
        desc:  "Proficient across multiple languages for robotics, embedded systems, and data analysis.",
        tags:  ["Python", "C/C++", "MATLAB", "Simulink", "Git", "Linux"]
      },
      {
        icon:  "🔧",
        title: "Hardware & Control",
        desc:  "Hands-on with motor drives, sensor integration, CAD, and industrial automation systems.",
        tags:  ["BLDC Motors", "CAD/URDF", "Contact Sensors", "Digital Twin", "IK/FK", "Industry 4.0"]
      }
    ],
    bars: [
      { label: "Reinforcement Learning",         pct: 92 },
      { label: "Robotic Simulation — Isaac Lab",  pct: 90 },
      { label: "Python & PyTorch",               pct: 95 },
      { label: "ROS / ROS2",                     pct: 80 },
      { label: "C / C++",                        pct: 70 }
    ]
  },

  // ── PROJECTS SECTION ─────────────────────────────────────
  projects: {
    label:   "// featured projects",
    heading: "What I've Built",
    desc:    "Research and engineering projects showcasing my work in robotics, reinforcement learning, and industrial automation.",
    items: [
      {
        emoji:    "🦾",
        theme:    "t1",
        category: "Master's Thesis · 2025–2026",
        title:    "Hybrid RL + Classical Control for Dexterous Manipulation",
        desc:     "End-to-end RL policy combined with classical IK for robust pick-and-place in Isaac Lab with full sim-to-real transfer pipeline.",
        tags:     ["Isaac Lab", "PPO", "PyTorch", "Sim-to-Real"],
        links:    [{ label: "→ GitHub", url: "#" }, { label: "→ Report", url: "#" }]
      },
      {
        emoji:    "✋",
        theme:    "t2",
        category: "Research · Fraunhofer IPA",
        title:    "3-Finger Adaptive Gripper Design & Prototype",
        desc:     "Dexterous 3-finger adaptive gripper with embedded contact sensing for industrial pick-and-place automation tasks.",
        tags:     ["CAD", "URDF", "Contact Sensors", "ROS2"],
        links:    [{ label: "→ GitHub", url: "#" }]
      },
      {
        emoji:    "🏭",
        theme:    "t3",
        category: "Industrial · Fraunhofer IPA",
        title:    "Digital Twin for Robotic Manufacturing Cell",
        desc:     "Full digital twin for an industrial robotic cell enabling virtual commissioning and automated validation workflows.",
        tags:     ["Isaac Sim", "Digital Twin", "Industry 4.0", "Python"],
        links:    [{ label: "→ Details", url: "#" }]
      },
      {
        emoji:    "⚡",
        theme:    "t1",
        category: "Academic · Uni Stuttgart",
        title:    "BLDC Motor Drive & Power Electronics",
        desc:     "Designed a brushless DC motor drive with power electronic inverter and field-oriented control in MATLAB/Simulink.",
        tags:     ["MATLAB", "Simulink", "FOC", "Power Elec."],
        links:    [{ label: "→ GitHub", url: "#" }]
      },
      {
        emoji:    "👁",
        theme:    "t2",
        category: "Research · Computer Vision",
        title:    "Vision-based Grasp Planning System",
        desc:     "Grasp planning pipeline using RGB-D cameras and deep learning for object detection, pose estimation, and grasp synthesis.",
        tags:     ["OpenCV", "PyTorch", "RGB-D", "Pose Est."],
        links:    [{ label: "→ GitHub", url: "#" }]
      },
      {
        emoji:    "🔬",
        theme:    "t3",
        category: "Research · Domain Randomization",
        title:    "Sim-to-Real Transfer with Domain Randomization",
        desc:     "Investigated domain randomization techniques for robust policy transfer from Isaac Lab simulation to physical hardware.",
        tags:     ["Domain Rand.", "PPO", "Isaac Lab", "TensorBoard"],
        links:    [{ label: "→ GitHub", url: "#" }]
      }
    ]
  },

  // ── EXPERIENCE SECTION ───────────────────────────────────
  experience: {
    label:   "// experience",
    heading: "Where I've Worked",
    desc:    "Professional journey building real-world robotics and automation systems.",
    items: [
      {
        date:    "June 2024 — Present",
        title:   "Working Student — Robotics Engineer",
        company: "Fraunhofer IPA · Stuttgart, Germany",
        desc:    "Developing digital twins for industrial robotic cells, designing dexterous gripper prototypes, and implementing simulation-based validation workflows using Isaac Sim and ROS2.",
        tags:    ["Isaac Sim", "ROS2", "Python", "Digital Twin"],
        side:    "left"
      },
      {
        date:    "2023 — 2024",
        title:   "Research Project — RL for Manipulation",
        company: "University of Stuttgart · IAS Institute",
        desc:    "Investigated deep RL approaches for robotic pick-and-place tasks, implementing PPO and SAC in Isaac Lab with custom reward functions and curriculum learning.",
        tags:    ["Isaac Lab", "PPO/SAC", "PyTorch"],
        side:    "right"
      },
      {
        date:    "2022 — 2023",
        title:   "Academic Research — Power Electronics",
        company: "University of Stuttgart · EE Department",
        desc:    "Designed and simulated power electronic drives for BLDC motors, implementing field-oriented control with hardware-in-the-loop validation in MATLAB/Simulink.",
        tags:    ["MATLAB", "Simulink", "Motor Control"],
        side:    "left"
      }
    ]
  },

  // ── EDUCATION SECTION ────────────────────────────────────
  education: {
    label:   "// education",
    heading: "Academic Background",
    desc:    "Formal education in electrical engineering with deep focus on intelligent systems and robotics.",
    items: [
      {
        icon:   "🎓",
        degree: "M.Sc. Electrical Engineering",
        school: "University of Stuttgart",
        period: "2022 — March 2026 (Expected)",
        desc:   "Specialization: Smart Systems. Focus on reinforcement learning, robotic manipulation, digital twins, and intelligent control. Thesis: Hybrid RL + Classical Control for Dexterous Robot Manipulation."
      },
      {
        icon:   "📚",
        degree: "B.Sc. Electrical Engineering",
        school: "Your Bachelor's University",
        period: "20XX — 20XX",
        desc:   "Foundation in electronics, control systems, signal processing, and embedded systems. [Update with your actual institution, graduation year, and notable coursework.]"
      }
    ]
  },

  // ── CONTACT SECTION ──────────────────────────────────────
  contact: {
    label:   "// contact",
    heading: "Let's Work Together",
    desc:    "Actively looking for robotics engineering roles and research positions. Open to opportunities across Germany and Europe."
  }

};
