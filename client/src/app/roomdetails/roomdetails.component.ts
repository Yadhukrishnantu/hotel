import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-roomdetails',
  templateUrl: './roomdetails.component.html',
  styleUrls: ['./roomdetails.component.css']
})
export class RoomdetailsComponent implements OnInit {
  hotelId:any
  hotelData : any
  Email: any
  constructor(private ds:DataService , private ar:ActivatedRoute) { }


  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.hotelId=data["id"]

      this.ds.roomDetails(this.hotelId).subscribe((data:any)=>{
        this.hotelData=data["data"]
        console.log(this.hotelData);
        
      })
    })
  }
  bookHotel(){
    this.Email=JSON.parse(localStorage.getItem('currentEmail') || " ")
    this.ds.bookHotel(this.hotelData,this.Email).subscribe((result:any)=>{
      alert(result.message)
    },
    result=>{alert(result.error.message)})
  }

}
