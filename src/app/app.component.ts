import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    Aos.init();
  }
  title = 'AnisGhd';
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('hello');
  }
  isVisible: boolean = false;

  closeModal() {
    this.isVisible = false;
  }
  showModal() {
    this.isVisible = true;
  }
}
