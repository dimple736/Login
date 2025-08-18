import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserDataService } from '../services/user-data';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    
    
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  activeView: string = 'user-list'; 
  page: number = 1;  

  constructor(private userDataService: UserDataService,
    private router: Router )
   {}

  ngOnInit(): void {}
logout() {
    localStorage.clear(); 
    this.router.navigate(['/']);
  }}
