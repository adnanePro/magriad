import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../config/models/User';
import { UserService } from '../config/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User()
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  authenticate(){
    this.userService.authenticate(this.user).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }

}
