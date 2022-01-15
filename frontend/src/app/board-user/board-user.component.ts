import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ItemService } from '../_services/item.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  content?: string;

  form: any = {
    title : null, 
    discription : null, 
    image : null, 
    initialPrice : null, 
    author : null, 
    openAt : null, 
    closeAt : null
  };

  constructor(private userService: UserService, private itemService: ItemService , private token: TokenStorageService) { }

  ngOnInit(): void {
    this.form.author = this.token.getUser().id;

    this.userService.getUserBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }

  onSubmit(): void {
    const { title, discription, image, initialPrice, author, openAt, closeAt } = this.form;

    this.itemService.addItem(title, discription, image, initialPrice, author, openAt, closeAt).subscribe({
      next: data => {
        console.log(data);

      },
      error: err => {
        console.log(err);
      }
    });
  }
}
