import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserDept } from '../../model/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  Adr: FormGroup;
  UserList= [] as User[];
  depts: UserDept[];
  searchStr: string;
  searchStr1: string;
  searchStr2: string;
  Address: FormArray;

  constructor(private userService: UserService, private route: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getuserList();
    this.getdepartment();
    this.addAddress();
  }

  buildForm() {
    this.Adr = this.fb.group({
      address: this.fb.array([
        this.dynamicField()
      ])
    })
  }
  
  dynamicField(): FormGroup {
    return this.fb.group({
      Address: [''],
    })
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

  detailsUser(user: User) {
    /*this.userService.sendusertoEdit(user);
    this.route.navigate([`/User/edit/${user.id}`]);*/
  }

  userTrack(index: number, user: User ) {
    return user.id;
  }

  addAddress() {
    this.Address = this.Adr.get('Address') as FormArray;
    this.Address.push(this.dynamicField())
  }
   
  deleteAddress(index:number){
    if(this.Address.length !=1){
      this.Address = this.Adr.get('Address') as FormArray;
      this.Address.removeAt(index)
    }
    console.log(this.Address.length)
  }


}
