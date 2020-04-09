import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WelcomeDataService } from "../service/data/welcome-data.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  username: string;
  welomeMessageFromService: string;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit() {
    this.username = this.route.snapshot.params["name"];
    // console.log(this.route.snapshot.params["name"]);
  }

  getWelcomeMessage() {
    // console.log(this.service.executeHellowWorldService());
    this.service.executeHellowWorldService().subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (err) => this.handleErrorResponse(err)
    );
  }

  handleSuccessfulResponse(response) {
    // console.log(response.message);
    this.welomeMessageFromService = response.message;
  }

  handleErrorResponse(err) {
    this.errorMessage = err.error.message;
  }
}
