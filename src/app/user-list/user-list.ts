
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDataService } from '../services/user-data';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule,NgxPaginationModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  searchTerm: string = '';
  page: number = 1;
  activeView: string = 'userList'; 
  editedUser: any = null;

  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
     this.userDataService.users$.subscribe((data) => {
      this.users = data;});
    if (this.userDataService.getUsers().length === 0){
    const defaultsUsers = [
      { name: 'Sumit Saini', phone: '9876543210', email: 'Sumit123@gmail.com', country: 'India', gender: 'Male' },
      { name: 'Aarti Sharma', phone: '9876543211', email: 'aarti234@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Ravi Verma', phone: '9876543212', email: 'ravi45@gmail.com', country: 'India', gender: 'Male' },
      { name: 'Priya Singh', phone: '9876543213', email: 'priya89@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Suman Saini', phone: '9823784567', email: 'Sumansaini213@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Shivani Saini', phone: '9923767577', email: 'Shivanisaini103@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Anjali Yadav', phone: '9993767243', email: 'anjaliydv106@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Divya Sharma', phone: '9991429434', email: 'divyaydv108@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Karan Sharma', phone: '8670986789', email: 'karansharma345@gmail.com', country: 'India', gender: 'Male' },
      { name: 'Diya Sharma', phone: '8570986267', email: 'diyasharma567@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Bhumika Sharma', phone: '9570986267', email: 'bhumikasharma566@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Ashok Yadav', phone: '9970986267', email: 'Ashokydv587@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Neha Sharma', phone: '8570986288', email: 'nehasharma567@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Ritesh Yadav', phone: '9570983738', email: 'Riteshyd567@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Ashu Sharma', phone: '7570986547', email: 'Ashusharma234@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Riya Sharma', phone: '8573456262', email: 'riyasharma589@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Manju Yadav', phone: '8523486264', email: 'manjuydv879@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Manoj Sharma', phone: '8575686267', email: 'manojshrma123@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Sandeep Saini', phone:'7654894356', email: 'sandeepsaini456@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Kiran Saini', phone: '7654897654', email: 'kiransaini654@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Deepa Yadav', phone: '9993245674', email: 'deepaydv567@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Sushma Saini', phone: '8764963257', email: 'sushmasaini555@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Reet Yadav', phone: '9912347384', email: 'reetyadv345@gmail.com', country: 'India', gender: 'Female' },
      { name: 'Ritu Sharma', phone: '9991429437', email: 'ritusharma879@gmail.com', country: 'India', gender: 'Female' },
    ];

    this.userDataService.setUsers(defaultsUsers); 
    this.userDataService.users$.subscribe((users) => {
      this.users = users || []; 
    });
  }
  }
  show(view: string) {
    this.activeView = view;
  }

  get filteredUsers(): any[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (term.length >= 3) {
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(term)
      );
    }
    return this.users;
  }
   openEdit(user: any) {
    this.editedUser = { ...user }; 
    
  }
  saveEdit() {
    const index = this.users.findIndex(u => u.email === this.editedUser.email);
    if (index !== -1) {
      this.users[index] = { ...this.editedUser };
    }
    this.userDataService.setUsers(this.users);
    this.closeEdit();
  }

  closeEdit() {
    this.editedUser = null;
   
  }
}

