import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAQPL6ADK83fkt_7olO4wR0aF0Ai_D3-cg',
      authDomain: 'project-62df1.firebaseapp.com',
    });
  }
}
