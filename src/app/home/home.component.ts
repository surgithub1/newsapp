import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { HttpClient } from "@angular/common/http";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[NewsService]
  
})
export class HomeComponent implements OnInit {
  news: any = [];


  constructor(private httpClient: HttpClient, public dialog: MatDialog){}

  ngOnInit() {

    this.httpClient.get("assets/newsfeed.json").subscribe(data =>{
      console.log(data);
      this.news =  data;
    })

    // this.newsService.getTopHeadLines()
  	// 	.subscribe(
  	// 		response => this.news = response.json()
    // );
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
