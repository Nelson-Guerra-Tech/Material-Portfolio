import { Component, Input } from "@angular/core";
import { ProjectDataMocks } from "./data/projects.mocks";
import { Projects } from "./models/projects.interface";
import { CommonModule } from "@angular/common";
import { Title } from "@angular/platform-browser";
import { BadgeDirective } from "../../directives/badge.directive";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule, BadgeDirective],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  @Input() content: Projects = ProjectDataMocks;
}
