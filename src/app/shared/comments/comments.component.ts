import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { emailValidator } from "src/app/theme/utils/app-validators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"],
})
export class CommentsComponent implements OnInit {
  @Input("menuItemId") menuItemId = 0;
  public commentForm!: FormGroup;
  public reviews = [
    {
      author: "Aradhya",
      avatar: "assets/images/avatars/avatar-1.png",
      tooltip: "Dissatisfied",
      icon: "sentiment_dissatisfied",
      date: "13 January, 2021 at 7:09",
      text: "Not a very pleasure experience",
    },
    {
      author: "Nitiya Naren",
      avatar: "assets/images/avatars/avatar-2.png",
      tooltip: "Very Satisfied",
      icon: "sentiment_very_satisfied",
      date: "04 February, 2021 at 10:22",
      text: "Very Authentic and good taste.",
    },
    {
      author: "Andy Warhol",
      avatar: "assets/images/avatars/avatar-3.png",
      tooltip: "Neutral",
      icon: "sentiment_neutral",
      date: "14 August, 2021 at 11:10",
      text: "Not bad and satisfied with the food.",
    },
  ];
  public ratings = [
    {
      title: "Very Dissatisfied",
      icon: "sentiment_very_dissatisfied",
      percentage: 20,
      selected: false,
    },
    {
      title: "Dissatisfied",
      icon: "sentiment_dissatisfied",
      percentage: 40,
      selected: false,
    },
    {
      title: "Neutral",
      icon: "sentiment_neutral",
      percentage: 60,
      selected: false,
    },
    {
      title: "Satisfied",
      icon: "sentiment_satisfied",
      percentage: 80,
      selected: false,
    },
    {
      title: "Very Satisfied",
      icon: "sentiment_very_satisfied",
      percentage: 100,
      selected: false,
    },
  ];

  public reviewApi = "http://localhost:8080/savereview";

  constructor(
    public fb: FormBuilder,
    public http: HttpClient,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      review: [null, Validators.required],
      name: [
        null,
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
      email: [null, Validators.compose([Validators.required, emailValidator])],
      rate: null,
      menuItemId: this.menuItemId,
    });
  }

  public onCommentFormSubmit(values: any): void {
    if (this.commentForm.valid) {
      if (values.rate) {
        // Make the API Call form this place to save the reviews.
        //  On success return to home page.
        const comment = {
          rate: values.rate,
          review: values.review,
          name: values.name,
          email: values.email,
        };
        this.saveReview(comment).subscribe((res: any) => {
          console.log(res);
          this.router.navigate(["/"]);
        });
      }
    }
  }

  public saveReview(input: any): any {
    return this.http.post(this.reviewApi, input, { responseType: "text" }).pipe(
      map(
        (response: any) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }

  public rate(rating: any): void {
    this.ratings.filter((r) => (r.selected = false));
    this.ratings.filter((r) => r.percentage === rating.percentage)[0].selected =
      true;
    this.commentForm.controls.rate.setValue(rating.percentage);
  }
}
