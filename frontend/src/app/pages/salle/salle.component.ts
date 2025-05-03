import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map, mergeMap, Observable, of } from 'rxjs';
import { SalledialogComponent } from 'src/app/components/salledialog/salledialog.component';
import { Salle } from 'src/app/models/Salle';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})



export class SalleComponent  implements OnInit{
  
  
  columnsToDisplay = ['nom', 'action'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Salle | any;


  Raionage: any  ;
  Boitier :  any;
  Documents : any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

displayedColumns: string[] = ['nom','action'];
dataSource!: MatTableDataSource<any>;

dataSource2!: Observable<any>;

detailsdata : Observable<any> | any;

salles : Observable<any>| any;


constructor(private http:HttpClient,public dialog: MatDialog,private api: SalleService){}


ngOnInit(): void {

  this.getAllSalle()
  
}

public detailsB(url:string){

  this.Boitier = []
  
  this.http.get(url).pipe(mergeMap((val:any)=>{ 


  return of(val.boities)
  }),
  
  mergeMap(val=>{
  
    return val
  })
  
  ).subscribe((l:any)=>{
    this.http.get(l).pipe(map((vaaal:any)=>{

  
    return vaaal
  })).subscribe((v:any)=>{
    console.log(v.code)
    this.Boitier.push(v) 
  })
  
  })
  return this.Boitier
}



public detailsR(url:string){
  this.Raionage = []
  this.http.get(url).pipe(mergeMap((val:any)=>{ 
    return of(val.raionages)
  }),mergeMap(val=>{
    return val
  })
  ).subscribe((l:any)=>{
    this.http.get(l).pipe(map((vaaal:any)=>{
      return vaaal
    })).subscribe((v:any)=>{
      console.log(v)
      this.Raionage.push(v)
      console.log(v)
    })
  })
}

getAllSalle(){
  this.api.getSalle()
  .subscribe({
    next:(res)=>{
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    
    },
    error:()=>
    alert("Erreur lors de la récupération de l'enregistrement")

  })
}


openDialog() {
  this.dialog.open(SalledialogComponent, {
    width:'30%'
  }).afterClosed().subscribe((val: any)=>{
    if(val==='save'){
    this.getAllSalle();
    }
  })
}

deleteSalle(url:string){
  this.api.deleteSalle(url)
  .subscribe({
    next:(res: any)=>{
    alert("Salle supprimé avec succès")
    this.getAllSalle();
    },
    error:()=>{
    alert("Erreur lors de la suppression du salle !");}

  })

}

editSalle(row: any){
  this.dialog.open(SalledialogComponent,{
    width:'30%',
    data :row }).afterClosed().subscribe((val)=>{
    if(val==='update'){
      this.getAllSalle();
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