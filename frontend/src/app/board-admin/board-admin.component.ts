import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content =data.users.map((el:any)=>{return [el.username,el.email,el.roles.map((elitem:any)=>{return elitem.name})]});
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }
}
