import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        
        this.content = data.items.map((el:any)=>{return [el.title,el.soldPrice,el.tags.map((elitem:any)=>{return elitem.name}),el.discription,el.image,el.initialPrice,el.openAt,el.closeAt]})
        console.log("yaw",this.content )
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }
}
