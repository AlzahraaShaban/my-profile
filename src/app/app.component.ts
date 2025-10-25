import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FooterComponent,HeroComponent,NavbarComponent,ContactComponent
    ,SkillsComponent,ProjectsComponent,AboutComponent,EducationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-profile';
}
