import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { JobsService } from 'src/app/services/jobs.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-jobs',
   imports: [MatTableModule],

  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})

export class JobsComponent implements OnInit{

  displayedColumns = ['url','name'];
  dataSource: MatTableDataSource<any>;

  constructor(private http: HttpClient, private api: JobsService) { }


  ngOnInit(){
    this.getALLjob()
    }

  getALLjob() {


    this.api.getjobs().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        console.log(this.dataSource)
      },
      error: () =>
        alert("Erreur lors de la récupération de l'enregistrement")

    })
  }


  
 
}





