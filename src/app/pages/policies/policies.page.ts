import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Policy } from './policy.model';
@Component({
  selector: 'app-policies',
  templateUrl: './policies.page.html',
  styleUrls: ['./policies.page.scss'],
})
export class PoliciesPage implements OnInit {
  public policies: Policy[];
  public labels;
  public shared;
  constructor(
    public translate: TranslateService
  ) {
    translate.get('my-policies').subscribe((myPolicies: any) => {
      this.policies = myPolicies.policies;
      this.labels = myPolicies.labels;
    });
    translate.get('shared').subscribe((shared: any) => {
      this.shared = shared;
    });
  }

  ngOnInit() {
  }

}
