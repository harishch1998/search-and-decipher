import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { HEROES } from '../mock-heroes';
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
  hero = 'Windstorm';
  heroes = HEROES;
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
  searchUrlLocal = 'http://localhost:4000/search_api'
  searchUrl = '3.86.182.43:4000/search_api';
  searchUrl2 = 'ec2-3-86-182-43.compute-1.amazonaws.com:4000/search_api';
  
  onClickButton(){
    //call api with search input and get result and display as a list of cards
    var formData = new FormData()
    formData.append("query", this.searchField);
    this.clearTweets();
    this.http.post<any>(this.searchUrl2, formData)
    .subscribe(response=>{
      let data = <Tweet[]>response.results;
      data.map(tweet => this.addTweet(tweet))
    })
    console.log("stored R1",this.tweetsFinal);
  }

  
}
