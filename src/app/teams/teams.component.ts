import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  private APP_URL : string = "http://localhost:3000/api/";
  public response: any;

  ngOnInit(): void {
    this.http.get(this.APP_URL + '/teams/').subscribe(
      data => {
        this.response = data;
        console.log(data);
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

}
