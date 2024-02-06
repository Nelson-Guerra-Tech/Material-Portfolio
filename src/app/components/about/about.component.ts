import { Component, Input, OnInit } from "@angular/core";
import { About } from "./models/about.interfaces";
import { AboutMocks } from "./data/about.mocks";
import { CommonModule } from "@angular/common";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { BadgeDirective } from "../../directives/badge.directive";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule, BadgeDirective],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutComponent implements OnInit {
  @Input() content: About = AboutMocks;

  public safeHtml!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const description = AboutMocks.description;
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(description);
  }
}
