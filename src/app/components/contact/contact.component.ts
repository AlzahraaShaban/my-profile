// contact.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, NgFor],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = {
    phone: '+201095296159',
    email: 'alzahraashaban702@gmail.com',
    location: 'Minya, Egypt'
  };

  socialLinks = [
    { icon: 'fab fa-github', url: '#', color: 'hover:text-gray-400' },
    { icon: 'fab fa-linkedin', url: '#', color: 'hover:text-blue-400' },
    { icon: 'fab fa-twitter', url: '#', color: 'hover:text-blue-300' },
    { icon: 'fab fa-dribbble', url: '#', color: 'hover:text-pink-400' }
  ];

  formData = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // هنا تضيفي منطق إرسال الفورم
    alert('Message sent successfully!');
    this.formData = { name: '', phone: '', email: '', subject: '', message: '' };
  }
}