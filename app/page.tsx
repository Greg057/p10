'use client';

// 🎯 PORTFOLIO PAGE USING ACTUAL PORTFOLIOLAYOUT SYSTEM
// This ensures 100% visual parity with the SaaS version
import PortfolioLayout from '@/components/PortfolioLayout'

// User data embedded at build time (no server-side dependencies)
// NOTE: File URLs include GitHub Pages basePath (e.g., /repo-name/user-files/...)
const userData = {
  "userInfo": {
    "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
    "full_name": "Jane Doe",
    "title": "Software Engineer",
    "email": "jane.doe@email.com",
    "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, and cloud DevOps tools.",
    "location": "San Francisco, CA",
    "avatarUrl": null,
    "cvUrl": "/p10/user-files/5598697c-b642-4e0e-899f-c10d269321b6/cv.pdf",
    "custom_links": [
      {
        "id": "linkedin",
        "url": "https://linkedin.com/in/janedoe",
        "icon": "linkedin",
        "title": "LinkedIn"
      },
      {
        "id": "github",
        "url": "https://github.com/janedoe",
        "icon": "github",
        "title": "GitHub"
      }
    ]
  },
  "educations": [
    {
      "id": "bc8f69ad-663b-4a2b-8f0c-ad8cd3e2772e",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "degree": "Bachelor of Computer Science",
      "university": "University of California, Berkeley",
      "start_year": "2015",
      "end_year": "2019",
      "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
      "logoUrl": null,
      "order_index": 0,
      "custom_links": [],
      "location": "Berkeley, CA"
    }
  ],
  "experiences": [
    {
      "id": "1e482b89-b196-4563-b2f5-7d34d53adb4c",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "company": "TechWave Solutions",
      "position": "Software Engineer",
      "start_date": "Jan 2021",
      "end_date": "Present",
      "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
      "logoUrl": null,
      "order_index": 0,
      "custom_links": [],
      "location": "San Francisco, CA"
    },
    {
      "id": "18ac1585-8984-454f-a59f-c31f34864a52",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "company": "BrightApps Inc.",
      "position": "Junior Software Engineer",
      "start_date": "Jun 2019",
      "end_date": "Dec 2020",
      "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
      "logoUrl": null,
      "order_index": 1,
      "custom_links": [],
      "location": "San Jose, CA"
    }
  ],
  "projects": [
    {
      "id": "ca5b30d6-d13e-441f-bcbc-3e10d635c043",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "name": "Portfolio Builder Web App",
      "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
      "picUrl": null,
      "order_index": 0,
      "technology_names": [
        "Next.js",
        "Supabase",
        "Vercel"
      ],
      "technology_details": [],
      "custom_links": [],
      "technologyNames": [
        "Next.js",
        "Supabase",
        "Vercel"
      ],
      "technologyDetails": []
    },
    {
      "id": "c4a28d13-5bd5-40c5-a637-e330e8b80a1a",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "name": "Movie Recommendation System",
      "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
      "picUrl": null,
      "order_index": 1,
      "technology_names": [
        "Python",
        "scikit-learn",
        "Flask",
        "React"
      ],
      "technology_details": [],
      "custom_links": [],
      "technologyNames": [
        "Python",
        "scikit-learn",
        "Flask",
        "React"
      ],
      "technologyDetails": []
    },
    {
      "id": "3fca51c9-2518-4ec8-97f1-90e462ab0021",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "name": "Task Manager Mobile App",
      "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
      "picUrl": null,
      "order_index": 2,
      "technology_names": [
        "React Native",
        "SQLite"
      ],
      "technology_details": [],
      "custom_links": [],
      "technologyNames": [
        "React Native",
        "SQLite"
      ],
      "technologyDetails": []
    }
  ],
  "userTechnologies": [
    {
      "id": "cf0830c3-44b8-4148-827d-c38f02438878",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Java",
      "technology_name": "Java",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 0,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "443269f2-d9c5-452f-866c-fa7e9f207d98",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Python",
      "technology_name": "Python",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 1,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "c241267a-a148-47b9-ab70-55b32c221da3",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "JavaScript",
      "technology_name": "JavaScript",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 2,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "0d32238b-c0f4-4332-850e-c4fe3bc5e969",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "React",
      "technology_name": "React",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 3,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "defe58bc-14d7-4595-96d7-d6e80ea3abce",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Node.js",
      "technology_name": "Node.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 4,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "544cd045-60d9-4a21-a417-e012aa865b98",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "TypeScript",
      "technology_name": "TypeScript",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 5,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "1108b8b7-7863-471c-9d19-bab069afb8e7",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "C++",
      "technology_name": "C++",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 6,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "f20749d0-54bf-44e3-a6c2-773fd955e5c7",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Next.js",
      "technology_name": "Next.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 7,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "63811e08-f9ee-428e-b812-d3ed2c1816a5",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Spring Boot",
      "technology_name": "Spring Boot",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 8,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "710c0004-12f6-41b7-813e-35b1857c09bb",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Express.js",
      "technology_name": "Express.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 9,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "5cd1efbd-f647-49ae-bc44-c85a5e36b76b",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Django",
      "technology_name": "Django",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 10,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "4808b4d5-9c58-4a8d-a345-918de17e041e",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "PostgreSQL",
      "technology_name": "PostgreSQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 11,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "35db9e1a-1e5a-420f-b3c9-ef051309e5f0",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "MongoDB",
      "technology_name": "MongoDB",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 12,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "8f0f9f73-bdc2-409b-b164-7ce68503c18a",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "MySQL",
      "technology_name": "MySQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 13,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "3c41d06d-7408-4255-8951-8de5a5400ed5",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Redis",
      "technology_name": "Redis",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 14,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "a7dc3218-5ff5-4e66-bc7b-6bb03b8eac66",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "AWS",
      "technology_name": "AWS",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 15,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "30f530b5-5502-41b0-80b6-f884b19a4cc2",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Docker",
      "technology_name": "Docker",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 16,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "94e750b4-8097-4e33-b2ea-cdd7a032ef22",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Kubernetes",
      "technology_name": "Kubernetes",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 17,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "c3ade35e-9905-416d-bb09-039356ecd66b",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Git",
      "technology_name": "Git",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 18,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "9e374aa9-dc3b-4b53-af58-22a62c0e8657",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Jenkins",
      "technology_name": "Jenkins",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 19,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "75949a5b-aef8-4bc9-add0-a59d2f744050",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "CI/CD pipelines",
      "technology_name": "CI/CD pipelines",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 20,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "76290e33-6545-4692-9bc0-def39e3584a5",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "REST APIs",
      "technology_name": "REST APIs",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 21,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "c385a68a-bb02-428a-9d31-2396913457c4",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "GraphQL",
      "technology_name": "GraphQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 22,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "fd41129c-d30d-48f4-948c-7ba64228cd18",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Unit Testing",
      "technology_name": "Unit Testing",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 23,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "4c55a8f1-cf41-410f-8076-5f54c6be2548",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Agile/Scrum",
      "technology_name": "Agile/Scrum",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 24,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "15f23cd7-1613-44e4-9a04-3f341de1e3e5",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Test-Driven Development (TDD)",
      "technology_name": "Test-Driven Development (TDD)",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 25,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "5d069161-1189-445c-a0ad-eda42369a8e4",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Supabase",
      "technology_name": "Supabase",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 26,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "046deaff-c978-483a-b627-ac49db2b67e2",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Vercel",
      "technology_name": "Vercel",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 27,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "ef0dad15-8aa3-46d9-b0fb-a447b609ba8a",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "scikit-learn",
      "technology_name": "scikit-learn",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 28,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "e03d8e46-9b25-4e86-9da6-4665e49d3f94",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "Flask",
      "technology_name": "Flask",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 29,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "31ba6fb6-dc8e-4b8e-9afc-af5e412049fc",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "React Native",
      "technology_name": "React Native",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 30,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "d0632254-5589-4cb8-b9b1-e3f61d3e0d04",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "SQLite",
      "technology_name": "SQLite",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 31,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    },
    {
      "id": "77b98f52-db82-4519-9bf9-20f2b2dcf304",
      "user_id": "5598697c-b642-4e0e-899f-c10d269321b6",
      "display_name": "GitHub Actions",
      "technology_name": "GitHub Actions",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 32,
      "created_at": "2025-09-12T12:26:06.322+00:00",
      "updated_at": "2025-09-12T12:26:06.322+00:00"
    }
  ],
  "customSections": [],
  "sectionOrder": [
    "personal",
    "experience",
    "education",
    "projects",
    "skills"
  ]
}

// Component layout preferences
const portfolioConfig = {
  "user_info_layout_type": "userInfo1",
  "projects_layout_type": "projects1",
  "skills_layout_type": "skills1",
  "education_layout_type": "card",
  "work_layout_type": "card",
  "github_repo_name": null,
  "github_username": null,
  "github_repo_url": null
}

export default function Portfolio() {
  return (
    <PortfolioLayout
      personalInfo={userData.userInfo}
      educations={userData.educations || []}
      experiences={userData.experiences || []}
      projects={userData.projects || []}
      userTechnologies={userData.userTechnologies || []}
      customSections={userData.customSections || []}
      userInfoLayoutType={portfolioConfig?.user_info_layout_type || 'userInfo1'}
      projectsLayoutType={portfolioConfig?.projects_layout_type || 'projects1'}
      skillsLayoutType={portfolioConfig?.skills_layout_type || 'skills1'}
      educationLayoutType={portfolioConfig?.education_layout_type || 'card'}
      workLayoutType={portfolioConfig?.work_layout_type || 'card'}
      sectionOrder={userData.sectionOrder || undefined}
    />
  )
}