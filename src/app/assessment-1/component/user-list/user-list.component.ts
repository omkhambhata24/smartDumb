import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserDept } from '../../model/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  UserList= [] as User[];
  depts: UserDept[];
  searchString: string;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.getuserList();
    this.getdepartment();
  }

  getdepartment() {
    this.userService.getDeptList().subscribe((data) => {
      this.depts = data;
    });
  }

  getuserList() {
    this.userService.getuserList().subscribe((data) => {
      this.UserList = data;
    }, errors => {
      alert("!Something went wrong!" + errors);
    });
  }
 
  editUser(user: User) {
    this.userService.sendusertoEdit(user);
    this.route.navigate([`/User/edit/${user.id}`]);
  }

  deleteUser(id : number){
    this.userService.deleteuser(id).subscribe((data) => {
      console.log("Deleted successfully: ", data);
      this.getuserList();
    }, errors => {
      alert("Wrong" + errors);
    });

  }

  userTrack(index: number, user: User ) {
    return user.id;
  }
}
