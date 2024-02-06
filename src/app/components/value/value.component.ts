import { Component, Input } from "@angular/core";
import { Value } from "./models/value.interfaces";
import { ValueDataMocks } from "./data/values.mocks";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-value",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./value.component.html",
  styleUrl: "./value.component.scss",
})
export class ValueComponent {
  @Input() content: Value = ValueDataMocks;
}
