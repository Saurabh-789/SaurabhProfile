import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences = [
    {
      name: 'Saurabh Patil',
      role: 'Full Stack Java Developer',
      company: {
        companyName: 'Labcorp Ltd',
        designation: 'Software Engineer',
        duration: 'July 2025 - Present',
        location: 'Pune, Maharashtra',
        status: 'Present',
      },
      skills: [
        'Java',
        'SpringBoot',
        'Spring Microservices',
        'MySql',
        'Kafka',
        'Angular',
      ],
      contributions: {
        dataProcessingBoost: 'Integrated Apache Kafka to enable asynchronous communication between microservices, improving application performance, scalability, and system responsiveness.',
        queryOptimization:
          'Rewrote bottlenecked SQL procedures for patient and sample data retrieval, bringing average query response time down from 6s to 3.3s — a 45% throughput improvement',
        leadership: 'Led a 3-member team to improve productivity by 15%',
        apiDevelopment:
          'Built and maintained 80+ RESTful API integrations consumed by Angular-based lab portals, tightening the feedback loop between backend services and clinical UI by 35%',
      },
    },
    {
      name: 'Saurabh Patil',
      role: 'Full Stack Java Developer',
      company: {
        companyName: 'Crisil Ltd',
        designation:  'Software Engineer',
        duration: 'Nov 2022 - July 2025',
        location: 'Pune, Maharashtra',
        status: 'Completed',
      },
      skills: [
        'Java',
        'SpringBoot',
        'Spring Microservices',
        'Spring Scheduler',
        'Html',
        'Typescript',
        'Angular',
        'MySql',
      ],
      contributions: {
        dataProcessingBoost: 'Implemented a scheduler triggering 1,000+ automated emails and UI alerts daily for ESG score updates.',
        queryOptimization:
          'Reduced DB query time by 25% using indexing and Redis',
        leadership: 'Led a 3-member team to improve productivity by 15%',
        apiDevelopment:
          'Designed and secured RESTful APIs with session management',
      },
    },
  ];

  constructor(private dialog: MatDialog) {}

  openDetails(exp: any) {
    this.dialog.open(ExperienceDetailsComponent, {
      data: exp,
      width: '80%',
      height: '90%',
      maxWidth: '796px',
    });
  }
}
