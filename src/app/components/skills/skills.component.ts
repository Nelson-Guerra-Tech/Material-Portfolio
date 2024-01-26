import { Component, Input } from "@angular/core";
import { Skills } from "./models/skills.interface";
import { SkillsDataMocks } from "./data/skills.data.mocks";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.scss",
})
export class SkillsComponent {
  @Input() content: Skills = SkillsDataMocks;
}
