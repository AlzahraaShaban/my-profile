import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
    skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'fa-code',
      color: 'text-blue-500',
      skills: ['C#', 'C', 'Python']
    },
    {
      title: 'Frontend Development',
      icon: 'fa-palette',
      color: 'text-purple-500',
      skills: ['Angular 17+', 'TypeScript', 'JavaScript', 'ES Next', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design', 'UX Design']
    },
    {
      title: 'Backend Development',
      icon: 'fa-server',
      color: 'text-green-500',
      skills: ['MVC', 'ASP.NET', 'ASP.NET Core', 'WebAPI', 'MS SQL Server', 'Entity Framework', 'LINQ']
    },
    {
      title: 'Computer Science',
      icon: 'fa-laptop-code',
      color: 'text-red-500',
      skills: ['OOP', 'Unit Testing', 'Data Structures', 'Algorithms', 'Design Patterns', 'SOLID Principle', 'Clean Architecture', 'Network', 'Computer Architecture', 'Operating System']
    },
    {
      title: 'Tools',
      icon: 'fa-tools',
      color: 'text-yellow-500',
      skills: ['Visual Studio Code', 'Git', 'GitHub', 'Trello', 'Proteus', 'CodeBlocks', 'Arduino IDE', 'Canva', 'Microsoft Office']
    },
    {
      title: 'Educational Tools',
      icon: 'fa-graduation-cap',
      color: 'text-indigo-500',
      skills: ['Scratch', 'Blocky', 'RoboMind', 'MIT App Inventor', 'PicToBlox']
    },
    {
      title: 'Soft Skills',
      icon: 'fa-users',
      color: 'text-pink-500',
      skills: ['Agile/Scrum', 'Problem Solving', 'Communication', 'Teamwork', 'Adaptability', 'Critical Thinking', 'Fast-learning']
    }
  ];
}
