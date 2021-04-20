import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  endPoint: string = 'https://nettuts.hu/jms/Fatrai1/customers';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.endPoint);
  }

  get(id: number): Observable<Customer>{
    return this.http.get<Customer>(`${this.endPoint}/${id}`);
  }
  
  create(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.endPoint, customer);
  }
  
  update(customer: Customer): Observable<Customer>{
    return this.http.patch<Customer>(`${this.endPoint}/${customer.id}`, customer);
  }
  
  delete(id: number): Observable<Customer>{
    return this.http.delete<Customer>(`${this.endPoint}/${id}`);
  }
  

}
