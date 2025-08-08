import { Component } from '@angular/core';

const HomeComponent = Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})(
  class {
    message = 'Bienvenue dans le composant Home !';
  }
);

export default HomeComponent;
