import { Component, Input } from "@angular/core";
import { Navigation } from "./models/navigation.interface";
import { NavigationData } from "./data/navigation.mocks";
import { Router } from "@angular/router";

@Component({
  selector: "app-navigation",
  standalone: true,
  imports: [],
  templateUrl: "./navigation.component.html",
  styleUrl: "./navigation.component.scss",
})
export class NavigationComponent {
  @Input() content: Navigation = NavigationData;
  // document: Document = document;

  constructor(private router: Router) {}

  navigateToAbout(): void {
    this.router.navigate(["/about"], { fragment: "about" }).then(() => {
      setTimeout(() => {
        const element = document.querySelector("#aboutSection");
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100, // Adjust this value as needed
            behavior: "smooth",
          });
        }
      }, 0);
    });
  }
}
