import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educations = [
        {
      degree : "PG Diploma in Advanced Computing",
      universityName : "Centre for Development of Advanced Computing - Mumbai",
      duration : "2021-2022",
      grade : "A+",
      location : "Mumbai, Maharashtra"
    },
    {
      degree : "Bachelors in Engineering",
      universityName : "Savitribai Phule Pune University",
      duration : "2018-2021",
      cgpa : "8.56/10",
      location : "Pune, Maharashtra"
    },
    {
      degree : "Diploma in Engineering",
      universityName : "Maharashtra State Board of Technical Education",
      duration : "2015-2018",
      percentage : "81.65%",
      location : "Jalgaon, Maharashtra"
    },
    {
      degree : "Secondary School Certificate (SSC)",
      universityName : "Maharashtra State Board",
      duration : "2014-2015",
      percentage : "85.00%",
      location : "Jalgaon, Maharashtra"
    }
  ]
}
