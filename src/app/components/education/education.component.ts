// education.component.ts
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [NgFor],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education = [
    {
      period: '2020-2024',
      institution: 'Minya University',
      degree: 'Bachelor of Computer and Systems Engineering',
      grade: 'Very Good with Honors | 82%',
      projects: [
        {
          title: 'Sign Language Recognition System for Deaf People using AI (Grade: Distinct) – Demo',
          description: 'Developed a real-time Arabic sign language translator using Python, Mediapipe. Built a system to convert spoken Arabic spoken language into sign language using Speech Recognition and MoviePy libraries',
          tools: ['Python', 'Mediapipe', 'Speech Recognition', 'MoviePy']
        },
        {
          title: 'Financial System Project – GitHub',
          description: 'Developed a charity fund management system for salary distribution and expense tracking using Agile Scrum methodology.',
          tools: ['C#', 'Database Server', 'Agile Scrum']
        },
        {
          title: 'ATM Machine Project – GitHub',
          description: 'Created and Implemented an ATM system with features like deposit, withdrawal, balance inquiry, and password change.',
          tools: ['C#', 'Database Server']
        }
      ]
    },
    {
      period: '2024',
      institution: 'Online Diploma',
      degree: 'Frontend Web Development with React',
      grade: '',
      projects: [
        {
          title: 'Web Development Projects',
          description: 'Design web pages using HTML, CSS, JavaScript.',
          tools: ['HTML', 'CSS', 'JavaScript', 'React']
        }
      ]
    }
  ];

  internships = [
    {
      period: '11/2024-4/2025',
      institution: 'ITI (Information Technology Institute)',
      position: 'Full Stack .NET Track',
      projects: [
        {
          title: 'Invest Bekia Project (freelance)',
          description: 'Built a web application for a business that exchanges scrap for land shares. The system allows users to request scrap pickup through a representative, manages share distribution, and sends real-time notifications to the admin for tracking and approvals.',
          tools: ['ASP.NET Core', 'Angular', 'SQL Server']
        },
        {
          title: 'Digital Note Manager – GitHub',
          description: 'Developed a lightweight note management app with user authentication, categorization, reminders, and rich text editing. Implemented Clean Architecture for maintainability.',
          tools: ['C#', 'Windows Forms (WinForms)', 'Entity Framework', 'LINQ']
        },
        {
          title: 'Online Examination System for ITI – GitHub',
          description: 'Built an online exam platform with schedule management, SQL authentication, and optimized queries for fast access. Designed ERD and Database Mapping for efficiency.',
          tools: ['SQL Server', 'Draw.io']
        },
        {
          title: 'E-Commerce Website – GitHub',
          description: 'Created an e-commerce platform with product browsing, search, purchasing, and admin dashboard for product management.',
          tools: ['HTML', 'CSS', 'JavaScript']
        }
      ]
    }
  ];

  researches = [
    {
      period: '2023-2024',
      title: 'Advanced Data Analytics with Big Data Tools',
      description: 'Utilized big data tools for advanced analytics and insights.'
    },
    {
      period: '2021-2023',
      title: 'Cloud-Native Application Architectures',
      description: 'Studied best practices for designing cloud-native applications.'
    },
    {
      period: '2019-2020',
      title: 'AI-Driven User Experience Personalization',
      description: 'Leveraged AI to personalize user experiences based on behavior.'
    }
  ];
}