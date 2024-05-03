import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewALLComponent implements OnInit{
registers: any[] = [];

constructor(private userService: RegistrationServiceService) {
}
  fetchAllRegisters(): void {
    this.userService.getAllRegs().subscribe(
      (data: any[]) => {
        this.registers = data;
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  ngOnInit(): void {
    this.fetchAllRegisters();
  }
}
