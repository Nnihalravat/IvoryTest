import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-see',
  templateUrl: './see.component.html',
  styleUrls: ['./see.component.css']
})
export class SeeComponent implements OnInit {
  registers!: any[];
  totalPages!: number;
  currentPage: number = 1;
  pageSize: number = 8;

  constructor(private registersService: RegistrationServiceService) { }

  ngOnInit(): void {
    this.loadRegisters();
  }

  loadRegisters(): void {
    this.registersService.getRegisters(this.currentPage, this.pageSize)
      .subscribe(data => {
        this.registers = data.registers;
        this.totalPages = data.totalPages;
      });
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.loadRegisters();
  }

  
}
