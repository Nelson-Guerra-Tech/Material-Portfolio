import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ConnectComponent } from "./components/connect/connect.component";
import { ValueComponent } from "./components/value/value.component";
import { WritingComponent } from "./components/writing/writing.component";
import { AboutComponent } from "./components/about/about.component";
import { BadgeDirective } from "./directives/badge.directive";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [
    CommonModule,
    AboutComponent,
    RouterOutlet,
    NavigationComponent,
    LandingPageComponent,
    ProjectsComponent,
    FooterComponent,
    SkillsComponent,
    ConnectComponent,
    ValueComponent,
    WritingComponent,
    BadgeDirective,
  ],
})
export class AppComponent {
  title = "ios";
}
