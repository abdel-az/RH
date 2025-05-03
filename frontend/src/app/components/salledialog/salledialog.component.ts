import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-salledialog',
  templateUrl: './salledialog.component.html',
  styleUrls: ['./salledialog.component.scss']
})
export class SalledialogComponent implements OnInit {



  salleForm! :FormGroup;
  optionBtn: string ='Save';

  constructor(private formBuilder:FormBuilder,
              private api : SalleService, 
              @Inject(MAT_DIALOG_DATA) public editData:any,
              private dialogRef:MatDialogRef<SalledialogComponent>) { }


  ngOnInit(): void {
    this.salleForm = this.formBuilder.group(

      {
        nom:['', Validators.required],

      }
    );
    if(this.editData){
      this.optionBtn = "Update";
      this.salleForm.controls['nom'].setValue(this.editData.nom);
  
    }
  }
  
  addSalle(){
    if(!this.editData){
      if(this.salleForm.valid){
        this.api.postSalle(this.salleForm.value)
        .subscribe({
          next:(res: any)=>{
            alert("salle à été  ajouté avec sucess")
            this.salleForm.reset();
            this.dialogRef.close('save');
            
          },
          error:()=>{
            alert("Erreur lors de l’ajout de la salle")
          }
        })
      }
    }
    else{
      this.updateSalle() 
    } 
  }

  updateSalle(){

    this.api.putSalle(this.salleForm.value,this.editData.url)
    .subscribe({
      next:(res: any)=>{
        alert("Salle mis à jour avec succès");
        this.salleForm.reset();
        this.dialogRef.close('update');
      }, error:()=>{
        alert("Erreur lors de la mise à jour de l'enregistrement !");
      }
    })

  }

}
