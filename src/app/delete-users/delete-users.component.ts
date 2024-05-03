import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {

  deleteSuccess: boolean = false;
  constructor(private userService: RegistrationServiceService) {}

  onDelete() {
    this.userService.deleteRegisters().subscribe(res =>   {
      console.log('Deleted Successfully', res);
      alert("Registers deleted successfully");
    })
  }

  ngOnInit(): void {

  }
}
