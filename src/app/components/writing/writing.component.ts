import { Component, Input } from "@angular/core";
import { WritingDataMocks } from "./mocks/writing.mocks";
import { Writing } from "./models/writing.interfaces";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-writing",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./writing.component.html",
  styleUrl: "./writing.component.scss",
})
export class WritingComponent {
  @Input() content: Writing = WritingDataMocks;
}
