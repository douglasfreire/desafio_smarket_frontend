import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : UserModel[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUserWithFlag('users').subscribe(data => {
      this.users = data.results;
    });

  }


  /**getUsers() {
    this.userService.listUsers().subscribe(users => {
      this.users = users;
      console.log(this.users)
    });
  }
  */
}
