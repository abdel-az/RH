import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { map, mergeMap, Observable, of } from 'rxjs';
import { RaionagedialogComponent } from 'src/app/components/raionagedialog/raionagedialog.component';
import { Raionage } from 'src/app/models/Raionage';
import { Salle } from 'src/app/models/Salle';
import { RaionageService } from 'src/app/services/raionage.service';

@Component({
  selector: 'app-raionage',
  templateUrl: './raionage.component.html',
  styleUrls: ['./raionage.component.scss']
})
export class RaionageComponent implements OnInit {

  raionage$: Observable<Raionage []> | any;
  salles$:Observable<Salle[]> | any;

  dataSource !:MatTableDataSource<any>;
  displayedColumns: string[] = ['code','action'];
  Boitier$: any;

  constructor(private apiservice:RaionageService,private http: HttpClient,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getRaionage();
  }

  getRaionage() {
    this.raionage$ = this.apiservice.getRaionage()

    .subscribe({
      next:(res: any)=>{
        this.dataSource = new MatTableDataSource(res);

      },
      error:()=>
      alert("Erreur lors de l'archivage de l'enregistrement")
  
    })
  }


 public detailsB(url:string){

  this.Boitier$ = []
  
  this.http.get(url).pipe(mergeMap((val:any)=>{ 


  return of(val.boities)
  }),
  
  mergeMap((val:any)=>{
  
    return val
  })
  
  ).subscribe((l:any)=>{
   this.http.get(l).pipe(map((vaaal:any)=>{
 
  
     
    return vaaal
   })).subscribe((v:any)=>{
   
  
  this.Boitier$.push(v) 
   })
  
  })

 }

  opendialog(){
    this.dialog.open(RaionagedialogComponent, {
      width:'30%'
    });
 
}

deleteRaionage(url:string){
  this.apiservice.deleteRaionage(url)
  .subscribe({
    next:(res: any)=>{
      alert("Raionage supprimé avec succès")
      this.getRaionage();
    
    },
    error:()=>{
      alert("Erreur lors de la suppression du produit !");}

  })

}

editRaionage(row: any){
  this.dialog.open(RaionagedialogComponent,{
    width:'30%',
    data :row }).afterClosed().subscribe((val: any)=>{
      if(val==='update'){
        this.getRaionage();
      }
    })
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}
