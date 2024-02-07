import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FooterDate } from "./data/footer.mocks";
import { Footer } from "./models/footer.interfaces";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import AOS from "aos";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent implements OnInit {
  @Input() content: Footer = FooterDate;
  faMedium = faMedium;
  faLinkedin = faLinkedin;
  faDribbble = faDribbble;
  faXTwitter = faXTwitter;

  ngOnInit(): void {
    AOS.init();
  }
}
