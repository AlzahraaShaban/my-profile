// projects.component.ts
import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface Project {
  title: string;
  desc: string;
  tech: string;
  image: string;
  repo?: string;
  demo?: string;
  client?: string;
  completionTime?: string;
  technologies?: string[];
}

@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  currentProjectIndex = 0;
  
  projects: Project[] = [
    { 
      title: 'Build voice AI into your apps', 
      desc: 'Integrate AI into the ecommerce system', 
      tech: 'AI Integration', 
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      client: 'Conceptual JSC',
      completionTime: '6 months',
      technologies: ['Node.js', 'React', 'MongoDB', 'Stripe']
    },
    { 
      title: 'Toy Deeggram API', 
      desc: 'Developed an online learning platform with course management, quizzes, and progress tracking.', 
      tech: 'API Development', 
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      client: 'Education Tech Inc',
      completionTime: '4 months',
      technologies: ['Python', 'Django', 'PostgreSQL', 'REST API']
    },
    { 
      title: 'E-commerce AI System', 
      desc: 'Build voice AI into your apps with advanced machine learning capabilities.', 
      tech: 'Machine Learning', 
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      client: 'Retail Solutions Ltd',
      completionTime: '8 months',
      technologies: ['TensorFlow', 'Python', 'FastAPI', 'AWS']
    }
  ];

  get currentProject(): Project {
    return this.projects[this.currentProjectIndex];
  }

  nextProject(): void {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
  }

  prevProject(): void {
    this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
  }

  goToProject(index: number): void {
    this.currentProjectIndex = index;
  }
}