import { Component, Input, OnInit } from "@angular/core";
import { Value } from "./models/value.interfaces";
import { ValueDataMocks } from "./data/values.mocks";
import { CommonModule } from "@angular/common";
import { BadgeDirective } from "../../directives/badge.directive";
import AOS from "aos";

@Component({
  selector: "app-value",
  standalone: true,
  imports: [CommonModule, BadgeDirective],
  templateUrl: "./value.component.html",
  styleUrl: "./value.component.scss",
})
export class ValueComponent implements OnInit {
  @Input() content: Value = ValueDataMocks;

  ngOnInit(): void {
    AOS.init();
  }
}
