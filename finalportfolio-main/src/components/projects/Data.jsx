import churn from "../../assets/churn.png";
import app from "../../assets/app.jpeg";
import lights from "../../assets/lights.png";
import todo from "../../assets/todo.png";
import web1 from "../../assets/web1.png";
import web2 from "../../assets/web2.png";
import sprint from "../../assets/sprint.png";
import bart from "../../assets/bart.png";
import plagiarism from "../../assets/plagiarism.jpg";
import summary from "../../assets/summary.png";
import library from "../../assets/library.png";
import avl from "../../assets/avl.jpg";
import grading from "../../assets/grading.jpeg";

export const projectsData = [
    // App Development Projects
    {
        id: 1,
        image: app,
        title: "Attorney Assistant App",
        category: "App",
        code: " "
    },
    {
        id: 2,
        image: lights,
        title: "University Road Lights Controller App",
        category: "App",
        code: "https://github.com/RiziRajput/URLC-using-Flutter"
    },
    {
        id: 3,
        image: todo,
        title: "To-Do-List App",
        category: "App",
        code: " "
    },

    // Web Development Projects
    {
        id: 4,
        image: web1,
        title: "Blogging Website",
        category: "Web",
        code: " "
    },
    {
        id: 5,
        image: web2,
        title: "Hostel Management System",
        category: "Web",
        code: "https://github.com/RiziRajput/Hostel_Management_System"
    },

    // Data Science & AI Projects
    {
        id: 6,
        image: churn,
        title: "Customer Churn Prediction (Random Forest Model)",
        category: "Data Science & AI Projects",
        code: " "
    },
    {
        id: 7,
        image: sprint,
        title: "Sprint Record Analysis (100m & 200m Sprint Data)",
        category: "Data Science & AI Projects",
        code: " "
    },
    {
        id: 8,
        image: bart,
        title: "BART & BM-25 NLP Experimentation",
        category: "Data Science & AI Projects",
        code: " "
    },
    {
        id: 9,
        image: plagiarism,
        title: "Plagiarism Checker",
        category: "Data Science & AI Projects",
        code: "https://github.com/RiziRajput/plagiarism_checker"
    },
    {
        id: 10,
        image: summary,
        title: "Summary Generator",
        category: "Data Science & AI Projects",
        code: ""
    },

    // Programming Projects
    {
        id: 11,
        image: library,
        title: "Library Management System (Python)",
        category: "Programming Projects",
        code: "https://github.com/RiziRajput/Library-Management-System"
    },
    {
        id: 12,
        image: avl,
        title: "Data Structure Project using AVL and BST (C++)",
        category: "Programming Projects",
        code: "https://github.com/RiziRajput/Data-Structure-project-using-AVL_and_BST"
    },
    {
        id: 13,
        image: grading,
        title: "Multiple-Choice Exam Grading Program (C++)",
        category: "Programming Projects",
        code: "https://github.com/RiziRajput/Multiple-Choice-Exam-Grading-Program"
    },
];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "Programming Projects",
    },
    {
        name: "Web",
    },
    {
        name: "App",
    },
    {
        name: "Data Science & AI Projects"
    }
];
