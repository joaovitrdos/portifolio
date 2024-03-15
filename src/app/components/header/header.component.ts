import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  hamb = document.querySelector(".hamb");
  hamb.onclick = function() {
navBar = document.querySelector(".nav-bar");
navBar.classiList.toogle("active");
}

}
