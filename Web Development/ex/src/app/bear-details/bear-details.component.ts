
import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { mockUser} from '../mock-users';

@Component({
  selector: 'app-bear-details',
  templateUrl: './bear-details.component.html',
  styleUrls: ['./bear-details.component.css']
})
export class BearDetailsComponent implements OnInit {
  liked:boolean = false;
  selectedItem = List[0];
  foundBear;
  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.findBear();
  }

  findBear() {
    let id = this.route.snapshot.paramMap.get('bearId');
    id = id.substr(1);
    this.selectedItem = List.find(bear => bear.id.toString() === id);
  }
  like():void{
  this.foundBear = mockUser.saved_bears.filter(obj => obj == this.selectedItem)[0];
    if(!this.liked && this.foundBear == null){
      
      
      this.selectedItem.likes = this.selectedItem.likes+1;
      this.liked = true;
      mockUser.saved_bears.push(this.selectedItem);
    

    }
    else{
      this.selectedItem.likes = this.selectedItem.likes-1;
      this.liked = false;
      mockUser.saved_bears = mockUser.saved_bears.filter(obj => obj !== this.selectedItem);
    }
  }
  back(): void {
    this.location.back();
  }
  purchase():void{
    mockUser.user_bears.push(this.selectedItem);
  }

  save() {
    alert('saved');
  }
}
