import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  onPost(data: any): Observable<any> {
    return this.http.post(`${this.url}/RegisterForm`, data)
  }

  getAllRegs(): Observable<any> {
    return this.http.get(`${this.url}/View-All-Registersss`);
  }

  getAllPagination(pageNumber: number): Observable<any> {
    return this.http.get(`${this.url}/View-All-Registers?pageNumber=${pageNumber}`);
  }

  getRegisters(pageNumber: number, pageSize: number): Observable<any> {
    const url = `${this.url}/View-All-Registers?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.http.get<any>(url);
  }

  deleteRegisters():Observable<any>{
    return this.http.delete(`${this.url}/Delete-Registers`)
  }
}
