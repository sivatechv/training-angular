import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AppSettings, Settings } from "src/app/app.settings";
import { AppService } from "src/app/app.service";
import { MenuItem } from "src/app/app.models";

@Component({
  selector: "app-menu-single",
  templateUrl: "./menu-single.component.html",
  styleUrls: ["./menu-single.component.scss"],
})
export class MenuSingleComponent implements OnInit, OnDestroy {
  public sub: any;
  public menuItem!: MenuItem;
  public settings: Settings;
  public quantityCount = 1;
  public relatedMenuItems: Array<MenuItem> = [];

  constructor(
    public appSettings: AppSettings,
    public appService: AppService,
    private activatedRoute: ActivatedRoute,
    public fb: FormBuilder
  ) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.getMenuItemById(params.id);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public getMenuItemById(id: number): void {
    const index: number = this.appService.Data.cartList.findIndex(
      (item) => item.id === id
    );
    if (index !== -1) {
      this.menuItem = this.appService.Data.cartList[index];
      this.quantityCount = this.menuItem.cartCount;
    } else {
      this.appService.getMenuItemById(id).subscribe((data) => {
        this.menuItem = data;
      });
    }
  }
}
