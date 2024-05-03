import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-view-all-register-pagination',
  templateUrl: './view-all-register-pagination.component.html',
  styleUrls: ['./view-all-register-pagination.component.css']
})
export class ViewAllRegisterPaginationComponent implements OnInit {

  registers: any[] = [];
  totalPages: number = 0;
  currentPage: number = 1; 

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private userService: RegistrationServiceService) {

  }

  loadRegisters(pageNumber: number = 1): void{
    this.userService.getAllPagination(pageNumber).subscribe(data => {
      this.registers = data.registers;
      this.totalPages = data.totalPages;
      console.log(data);
    })
  }


  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.loadRegisters(pageNumber);
  }


  totalPagesArray(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  ngOnInit(): void {
    this.loadRegisters();
  }
}