import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BoitierdialogComponent } from 'src/app/components/boitierdialog/boitierdialog.component';
import { BoitierService } from 'src/app/services/boitier.service';

@Component({
  selector: 'app-boitier',
  templateUrl: './boitier.component.html',
  styleUrls: ['./boitier.component.scss']
})
export class BoitierComponent implements OnInit {



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

displayedColumns: string[] = ['code','action'];
dataSource!: MatTableDataSource<any>;

constructor(private http:HttpClient,public dialog: MatDialog,private api: BoitierService){}
ngOnInit(): void {
  this.getAllBoitier();
 
}

getAllBoitier(){
  this.api.getBoitier()
  .subscribe({
    next:(res: any[] )=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    error:()=>
    alert("Erreur lors de la récupération de l'enregistrement")

  })
}


openDialog() {
  this.dialog.open(BoitierdialogComponent, {
    width:'30%'
  }).afterClosed().subscribe((val: any)=>{
    if(val==='save'){
      this.getAllBoitier();
    }
  })
}

deleteBoitier(url:string){
  this.api.deleteBoitier(url)
  .subscribe({
    next:(res: any)=>{
      alert("Boitier supprimé avec succès")
      this.getAllBoitier();
    },
    error:()=>{
      alert("Erreur lors de la suppression du produit !");}

  })

}

editBoitier(row: any){
  this.dialog.open(BoitierdialogComponent,{
    width:'30%',
    data :row }).afterClosed().subscribe((val:any)=>{
      if(val==='update'){
        this.getAllBoitier();
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
