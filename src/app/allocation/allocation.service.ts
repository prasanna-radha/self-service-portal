import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Allocation } from './allocation.model';

@Injectable({
  providedIn: 'root'
})
export class AllocationService {

  baseUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getAllocations(){
    return this.http.get<Allocation[]>(this.baseUrl + "allocations");
  }
}
