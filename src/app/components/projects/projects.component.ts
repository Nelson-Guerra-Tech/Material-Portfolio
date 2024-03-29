import { Component, Input, OnInit } from "@angular/core";
import { ProjectDataMocks } from "./data/projects.mocks";
import { Projects } from "./models/projects.interface";
import { CommonModule } from "@angular/common";
import { BadgeDirective } from "../../directives/badge.directive";
import AOS from "aos";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule, BadgeDirective],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent implements OnInit {
  @Input() content: Projects = ProjectDataMocks;

  ngOnInit(): void {
    AOS.init();
  }
}
