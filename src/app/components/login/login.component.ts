import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  userName: string = "";
  password: string = "";
  isCliked: Boolean = false;

  constructor() { }

  ngOnInit() {

  }
  login() {
    
    return "hi"

  }

}
