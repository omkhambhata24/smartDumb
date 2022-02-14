import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserDept } from '../../model/user.model';
import { UserService } from "../../services/user.service"

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm={} as FormGroup;
  userdepartment?: UserDept[];
  isEditMode: boolean = false;
  currentUserId: number;
  

  constructor(private fb: FormBuilder, private route: Router, private userService: UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.buildUserForm();
    this.getUserDepartment();
    if (this.activeRoute.snapshot.params['id']) {
      this.isEditMode = true;
      this.userService.getuserToEdit().subscribe(data => {
        this.currentUserId = data.id;
        this.userForm.patchValue(data);
      });
    }
  }


  buildUserForm() {
    this.userForm = this.fb.group({

      name: ['',Validators.required],
      city: ['',Validators.required],
      Email: ['',[Validators.email]],
      mobile:['',[Validators.pattern(/\([0-9]{3}\)-\([0-9]{3}\)-[0-9]{4}$/),Validators.required]],
      department: [''],
      gender: ['',Validators.required],
      employment: ['', Validators.required],
      hired: [''],
      
    });
}  

saveUser(){

  console.log(this.userForm
    );
  if (this.userForm.status === 'VALID') {
    this.saveuserData();
    this.route.navigate(['/User']);
  }

}

saveuserData() {
  let usr: User;
  if (this.isEditMode) {
    usr = {...this.userForm.value, id:this.currentUserId};
    console.log("hello");
  } else {
    usr = this.userForm.value;
  }
  console.log(usr);
  this.userService.saveuser(usr).subscribe((data) => {
    console.log("User Data");
    this.getUserDepartment();
  });
}


  getUserDepartment() {
    this.userService.getDeptList().subscribe((data) => {
     this.userdepartment = data;
      });
  }

    clearForm(){
      this.userForm.reset();
    };
  
}
