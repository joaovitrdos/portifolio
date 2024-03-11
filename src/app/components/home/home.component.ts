import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
