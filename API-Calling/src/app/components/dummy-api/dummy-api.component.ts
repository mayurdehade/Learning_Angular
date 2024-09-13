import { Component } from '@angular/core';
import { DummyApiService } from 'src/app/services/dummy-api.service';

@Component({
  selector: 'app-dummy-api',
  templateUrl: './dummy-api.component.html',
  styleUrls: ['./dummy-api.component.css'],
})
export class DummyApiComponent {
  //global variable
  data: any;
  isData = false;
  username:string = '';
  //creating constructor
  constructor(private service: DummyApiService) {}
  getData() {
    // calling service (api always called in service )
    // service used for seperate bussiness login and api calling
    // creating service
    this.service.getDummyData(this.username).subscribe((response) => {
      console.log(response);
      this.data = response;
      this.isData = true;
    });
  }

  getAllData() {
    alert('Get All Data Clicked');
  }
}
