import { Component , OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  HotelList : any

  constructor(private ds:DataService , private router:Router ){ }

  ngOnInit(): void {
    this.ds.viewHotels().subscribe((data : any)=>{
      this.HotelList=data["data"]
    })
  }
  logout(){
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentEmail')
    
    this.router.navigateByUrl("")
  }

}
