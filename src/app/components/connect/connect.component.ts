import { Component, Input, OnInit } from "@angular/core";
import { ContactData } from "./data/connect.mocks";
import { Contact } from "./models/connect.interfaces";
import AOS from "aos";

@Component({
  selector: "app-connect",
  standalone: true,
  imports: [],
  templateUrl: "./connect.component.html",
  styleUrl: "./connect.component.scss",
})
export class ConnectComponent implements OnInit {
  @Input() contact: Contact = ContactData;

  ngOnInit(): void {
    AOS.init();
  }
}
