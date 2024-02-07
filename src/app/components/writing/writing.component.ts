import { Component, Input, OnInit } from "@angular/core";
import { WritingDataMocks } from "./data/writing.mocks";
import { Writing } from "./models/writing.interfaces";
import { CommonModule } from "@angular/common";
import { BadgeDirective } from "../../directives/badge.directive";
import AOS from "aos";

@Component({
  selector: "app-writing",
  standalone: true,
  imports: [CommonModule, BadgeDirective],
  templateUrl: "./writing.component.html",
  styleUrl: "./writing.component.scss",
})
export class WritingComponent implements OnInit {
  @Input() content: Writing = WritingDataMocks;

  ngOnInit(): void {
    AOS.init();
  }
}
