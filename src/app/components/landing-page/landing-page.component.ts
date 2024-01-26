import { CommonModule } from "@angular/common";
import { Component, Input, input } from "@angular/core";
import { landingPageMock } from "./data/landing-page.mocks";
import { LandingPage } from "./models/landing-page.interfaces";

@Component({
  selector: "app-landing-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./landing-page.component.html",
  styleUrl: "./landing-page.component.scss",
})
export class LandingPageComponent {
  @Input() content: LandingPage = landingPageMock;
}
