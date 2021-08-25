import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ng-carousel-cdk';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})


export class CourseListComponent implements OnInit {


  

  config: CarouselConfig<CarouselItem> = {
    items: [ {name: 'physique'},
      {name: 'Mécanique'},
      {name: 'Agir professionel'},],
    
  }

  constructor() { }

  ngOnInit(): void {

    this.config.slideWidth = 30;
    
  }

}

interface CarouselItem {
  name: string;
}
