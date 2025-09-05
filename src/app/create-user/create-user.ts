import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule,NgSelectModule  ],
  templateUrl: './create-user.html',
  styleUrls: ['./create-user.css'],
})
export class CreateUserComponent  {
  
  listData: any;
  user = {
    name: '',
    phone: '',
    email: '',
    country: '',
    gender: '', 
    skills: [] as string[],
  };
  skillList = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Angular' },
    { id: 3, name: 'React' },
    { id: 4, name: 'Node.js' },
    { id: 5, name: 'Python' }
  ];

  constructor(private toastr: ToastrService,
    private userDataService: UserDataService,
    private router: Router
  ) {}
  
  submitUser() {
    if (
      this.user.name &&
      this.user.phone &&
      this.user.email &&
      this.user.country &&
      this.user.gender &&
      this.user.skills.length > 0 
    ) 
    {
      this.userDataService.addUser({ ...this.user });
      this.user = {
        name: '',
        phone: '',
        email: '',
        country: '',
        gender: '',
         skills: []
      };

      this.router.navigate(['/dashboard/userlist']);
    } else {
      this.toastr.error('Hey!! Not so fast, please fill all fields☹️', 'Error');  
      return;
    }
    
     this.toastr.success('A new user has been added😃', 'Success');  
  }
    }
  

