import { Component, OnInit } from '@angular/core';
import { UserInfoModel } from '../models/user-info-model';

@Component({
  selector: 'app-display-user-data',
  templateUrl: './display-user-data.component.html',
  styleUrls: ['./display-user-data.component.css']
})
export class DisplayUserDataComponent implements OnInit {

  user: UserInfoModel = new UserInfoModel({
    guid: 'D21ds12x',
    customerUid: 'cust2dsa12dsa',
    name: 'John Doe',
    email: 'sample@email.com',
    zipcode: 10283,
    password: 'rte12067'
  });

  constructor() { }

  ngOnInit() {
  }

}
