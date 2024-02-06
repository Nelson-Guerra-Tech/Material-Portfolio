import { Component, Input } from "@angular/core";
import { ContactData } from "./data/connect.mocks";
import { Contact } from "./models/connect.interfaces";

@Component({
  selector: "app-connect",
  standalone: true,
  imports: [],
  templateUrl: "./connect.component.html",
  styleUrl: "./connect.component.scss",
})
export class ConnectComponent {
  @Input() contact: Contact = ContactData;
}
