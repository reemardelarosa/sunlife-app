import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public view: 'claims' | 'funds' | 'policy' | 'default' = 'default';
  public servicesGroups;
  public shared;
  public dashboard;

  constructor(
    private menu: MenuController,
    public translate: TranslateService
  ) {
    translate.get('policy-services').subscribe((servicesGroups: any) => {
      this.servicesGroups = servicesGroups;
    });
    translate.get('shared').subscribe((shared: any) => {
      this.shared = shared;
    });
    translate.get('dashboard').subscribe((dashboard: any) => {
      this.dashboard = dashboard;
    });
  }

  ngOnInit() {
  }

  openMenu() {
    this.menu.open();
  }

  changeView(view) {
    this.view = view;
    console.log(`Viewing ${view} page 🚀`);
  }
}
