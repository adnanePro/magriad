import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/config/models/User';
import { UserService } from 'src/app/config/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user:User;
  constructor(private userService:UserService) {
    this.userService.user().subscribe(user=>{
      this.user = user;
    })
   }

  ngOnInit() {
  }

}
