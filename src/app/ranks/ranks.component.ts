import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { TWEETS } from '../mock-tweets';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.scss']
})
export class RanksComponent implements OnInit {

  tweetsFinal : Tweet[] = [];

  constructor(private http: HttpClient) {

  }
  tweets = TWEETS;

  ngOnInit(): void {

  }

  addTweet(tweet: Tweet) {
    this.tweetsFinal.push(tweet);
  }
  clearTweets() {
    this.tweetsFinal = [];
  }
  searchField = '';
  input: string = ""
  
  onClickButton(){
    //call api with search input and get result and display as a list of cards
    var formData = new FormData()
    formData.append("query", this.searchField);
    this.clearTweets();
    this.http.post<any>("/api/search_api", formData)
    .subscribe(response=>{
      let data = <Tweet[]>response.results;
      data.map(tweet => this.addTweet(tweet))
    })
    console.log("stored R1",this.tweetsFinal);
  }

  
}
