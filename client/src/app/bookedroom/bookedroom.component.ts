import { Component ,OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-bookedroom',
  templateUrl: './bookedroom.component.html',
  styleUrls: ['./bookedroom.component.css']
})
export class BookedroomComponent implements OnInit {


  bookings:any
  Email: any
  constructor(private ds:DataService) { }

  
 

  ngOnInit(): void {
    this.Email=JSON.parse(localStorage.getItem('currentEmail') || " ")
    this.ds.bookedroom(this.Email).subscribe((data:any)=>{
      this.bookings=data["data"]
      console.log(this.bookings);
      
    })    
      
}
// bookedroom(){


// }

}

// bookHotel(){
//   this.Email=JSON.parse(localStorage.getItem('currentEmail') || " ")
//   this.ds.bookHotel(this.hotelData,this.Email).subscribe((result:any)=>{
//     alert(result.message)
//   },
//   result=>{alert(result.error.message)})
// }

// }
