import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserDept } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userToEdit: BehaviorSubject<User> = new BehaviorSubject<User>({
    
    "name": "" ,
    "city": "",
    "Email": "", 
    "mobile": "",
    "department": 0,
    "gender": "",
    "employment": "",
    "hired": "",
    "id" : 0,
      
  });

  apiCall = {} as string;

  constructor(private http: HttpClient) {
    this.apiCall = environment.baseURL;
  }

  saveuser(user: User): Observable<User> {
    console.log(user);
    return user.id ? this.edituser(user) : this.adduser(user);
  }

  private adduser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiCall}/user/`, user);
  }

  private edituser(user: User): Observable<User> {
    console.log('Edit');
    return this.http.put<User>(`${this.apiCall}/user/${user.id}`,user);
  }

  getuserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiCall}/user`);
  }

  getuserDetail(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiCall}/employees/${id}`);
  }

  getDeptList(): Observable<UserDept[]> {
    return this.http.get<UserDept[]>(`${this.apiCall}/departmentlist`);
  }

  sendusertoEdit(user: User): void {
    this.userToEdit.next(user)
  }

  getuserToEdit(): BehaviorSubject<User> {
    return this.userToEdit;
  }

  deleteuser(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiCall}/user/${id}`);
  }
}  

  
