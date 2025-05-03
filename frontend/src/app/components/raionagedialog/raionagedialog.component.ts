import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { RaionageService } from 'src/app/services/raionage.service';
import { SalleService } from 'src/app/services/salle.service';
import { SalledialogComponent } from '../salledialog/salledialog.component';

@Component({
  selector: 'app-raionagedialog',
  templateUrl: './raionagedialog.component.html',
  styleUrls: ['./raionagedialog.component.scss']
})
export class RaionagedialogComponent implements OnInit {




  Form! :FormGroup
  optionBtn: string ='Save';

  constructor(private formBuilder:FormBuilder,
              private api : RaionageService,private apisalle :SalleService, 
              @Inject(MAT_DIALOG_DATA) public editData:any,
              private dialogRef:MatDialogRef<SalledialogComponent>) { }
              salles:Observable<any> | any;

  ngOnInit(): void {
    this.getSalle();
    this.Form = this.formBuilder.group(

      {
        code:['', Validators.required],
        salle:['',Validators.required]

      }
    );
    if(this.editData){
      this.optionBtn = "Update";
      this.Form.controls['code'].setValue(this.editData.code);
      this.Form.controls['salle'].setValue(this.editData.salle);
  
    }
  }
  getSalle() {
    this.salles = this.apisalle.getSalle()
    
  }
  
  addRaionage(){
    if(!this.editData){
      if(this.Form.valid){
        this.api.postRaionage(this.Form.value)
        .subscribe({
          next:(res)=>{
            alert("Raionage ajouté avec succès")
            this.Form.reset();
            this.dialogRef.close('save');
            location.reload()
          },
          error:()=>{
            alert("Erreur lors de l'ajout du Raionage")
          }
        })
      }
    }
    else{
      this.updateRaionage() 
    } 
  }

  updateRaionage(){

    this.api.putRaionage(this.Form.value,this.editData.url)
    .subscribe({
      next:(res)=>{
        alert("raionage mis à jour avec succès");


        this.Form.reset();
        this.dialogRef.close('update');
      }, error:()=>{
        alert("Erreur lors de la mise à jour de l'enregistrement !");
      }
    })

  }

}
