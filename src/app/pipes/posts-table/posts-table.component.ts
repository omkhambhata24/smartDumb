import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { posts } from '../Data';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss']
})
export class PostsTableComponent implements OnInit {

  allPosts: Post[] = posts;
  selectedPostTitle: string = "Title";

  constructor() { }

  ngOnInit(): void {
  }

  selectPost(i:number):void {
    this.selectedPostTitle = this.allPosts[i].title;
  }

  postById(index:number, post:Post) {
    return post.id;
  }

  addPost(userid:string, pid:string, ptitle:string, pbody:string){
    posts.push({
      "userId": parseInt(userid),
      "id": parseInt(pid),
      "title": ptitle,
      "body": pbody
    })

  }
}
