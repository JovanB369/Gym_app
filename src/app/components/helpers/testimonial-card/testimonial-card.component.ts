import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit{

  testimonials:any;

  constructor(private HttpClient:HttpClient){}

  ngOnInit(): void {
    const url:string = "../../../../assets/testimonials.json";
    this.HttpClient.get(url).subscribe((response)=>{
      this.testimonials = response;
      console.log(this.testimonials);
    })
    
  }
}
