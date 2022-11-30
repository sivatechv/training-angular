import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Settings, AppSettings } from "../../app.settings";

@Component({
  selector: "app-header-image",
  templateUrl: "./header-image.component.html",
  styleUrls: ["./header-image.component.scss"],
})
export class HeaderImageComponent implements OnInit, OnDestroy {
  @Input("backgroundImage") backgroundImage: any;
  @Input("bgImageAnimate") bgImageAnimate: any;
  @Input("contentOffsetToTop") contentOffsetToTop = false;
  @Input("contentMinHeight") contentMinHeight: any;
  @Input("title") title: any;
  @Input("desc") desc: any;
  @Input("isHomePage") isHomePage = false;
  @Input("fullscreen") fullscreen = false;
  public bgImage: any;
  public settings: Settings;
  constructor(
    public appSettings: AppSettings,
    private sanitizer: DomSanitizer
  ) {
    this.settings = this.appSettings.settings;
    setTimeout(() => {
      this.settings.headerBgImage = true;
    });
  }

  ngOnInit(): void {
    if (this.contentOffsetToTop) {
      setTimeout(() => {
        this.settings.contentOffsetToTop = this.contentOffsetToTop;
      });
    }
    if (this.backgroundImage) {
      this.bgImage = this.sanitizer.bypassSecurityTrustStyle(
        "url(" + this.backgroundImage + ")"
      );
    }
  }

  ngOnDestroy(): void {
    setTimeout(() => {
      this.settings.headerBgImage = false;
      this.settings.contentOffsetToTop = false;
    });
  }
}
