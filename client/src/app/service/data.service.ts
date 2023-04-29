
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

const option = {
  headers: new HttpHeaders()
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http :HttpClient) { }
  register(uname: any, Email: any, psw: any) {
    //  create body data
      const data ={uname,Email,psw}
     return this.http.post("http://localhost:3000/register",data)
    }
  
  login(uname: any, psw: any) {
  
    const data ={uname,psw}
    return this.http.post("http://localhost:3000/login",data)
   
    
  }

  viewHotels(){
    return this.http.get("http://localhost:3000/viewHotels")
  }
  roomDetails(hotelId:any){
    const data={
      hotelId
    }
    return this.http.post("http://localhost:3000/roomDetails",data)

  }
  bookHotel(hotelData:any,Email:any){
    const data ={
      hotelData,
      Email
    }
    return this.http.post("http://localhost:3000/bookHotel",data)
  }

  bookedroom(Email:any){
    const data ={
      Email
    }
    return this.http.post("http://localhost:3000/bookedroom",data)

  }
}

