import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { landingPageMock } from "./data/landing-page.mocks";
import { LandingPage } from "./models/landing-page.interfaces";
import AOS from "aos";

@Component({
  selector: "app-landing-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./landing-page.component.html",
  styleUrl: "./landing-page.component.scss",
})
export class LandingPageComponent implements OnInit {
  @Input() content: LandingPage = landingPageMock;

  ngOnInit(): void {
    AOS.init();
  }
}
