import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppService } from "src/app/app.service";
import { AppSettings, Settings } from "src/app/app.settings";
import { emailValidator } from "src/app/theme/utils/app-validators";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  public contactForm!: FormGroup;
  public contactBackgroundImmage = "../../../assets/images/others/contact.jpg";
  public contactTitle = "Contact Us";
  public contactDesc = "GOT A QUESTION? WE'LL GIVE YOU STRAIGHT ANSWER";
  public settings: Settings;
  constructor(
    public appSettings: AppSettings,
    public formBuilder: FormBuilder,
    public appService: AppService
  ) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, emailValidator])],
      phone: ["", Validators.required],
      message: ["", Validators.required],
    });
  }

  public onContactFormSubmit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      const contact = this.contactForm.value;
      const data = {
        Fullname: contact.name,
        Email: contact.email,
        Comment: contact.message,
      };
      this.appService.postMessage(data).subscribe(
        (response: any) => {
          console.log(response);
          location.href = "";
        },
        (error: { responseText: any; error: any }) => {
          console.warn(error.responseText);
          console.log({ error });
          if (error.error) {
            // this.snackBar.open(error.error, '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
          }
        }
      );
    }
  }
}
