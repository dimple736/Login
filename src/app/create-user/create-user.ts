import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UserDataService } from '../services/user-data';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule, NgMultiSelectDropDownModule],
  templateUrl: './create-user.html',
  styleUrls: ['./create-user.css'],
})
export class CreateUserComponent {
  @Output() userCreated = new EventEmitter<any>();
  listData: any;
  user = {
    name: '',
    phone: '',
    email: '',
    country: '',
    gender: '',
    skills: [] as any[],
  };

  dropdownSettings: any = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true,
  };

  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {
    this.listData = [
      { item_id: 1, item_text: 'JavaScript' },
      { item_id: 2, item_text: 'Angular' },
      { item_id: 3, item_text: 'React' },
      { item_id: 4, item_text: 'Node.js' },
      { item_id: 5, item_text: 'Python' },
    ];
  }

  submitUser() {
    if (
      this.user.name &&
      this.user.phone &&
      this.user.email &&
      this.user.country &&
      this.user.gender &&
      this.user.skills.length
    ) {
      this.userDataService.addUser({ ...this.user });
      this.userCreated.emit({ ...this.user });

      this.user = {
        name: '',
        phone: '',
        email: '',
        country: '',
        gender: '',
        skills: [],
      };

      this.router.navigate(['/dashboard/userlist']);
    } else {
      alert('Please fill all fields');
    }
  }
}
