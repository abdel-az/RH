import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { BoitierService } from 'src/app/services/boitier.service';
import { RaionageService } from 'src/app/services/raionage.service';
import { SalledialogComponent } from '../salledialog/salledialog.component';

@Component({
  selector: 'app-boitierdialog',
  templateUrl: './boitierdialog.component.html',
  styleUrls: ['./boitierdialog.component.scss']
})
export class BoitierdialogComponent implements OnInit {


  Form! :FormGroup
  optionBtn: string ='Save';

  constructor(private formBuilder:FormBuilder,
              private api :  BoitierService ,private apiraionage :RaionageService, 
              @Inject(MAT_DIALOG_DATA) public editData:any,
              private dialogRef:MatDialogRef<SalledialogComponent>) { }
              raionages:Observable<any> | any;

  ngOnInit(): void {
    this.getRaionage();
    this.Form = this.formBuilder.group(

      {
        code:['', Validators.required],
        raionage:['',Validators.required]

      }
    );
    if(this.editData){
      this.optionBtn = "Update";
      this.Form.controls['code'].setValue(this.editData.code);
      this.Form.controls['raionage'].setValue(this.editData.raionage);
  
    }
  }
  getRaionage() {
    this.raionages = this.apiraionage.getRaionage()
    
  }
  
  addBoitier(){
    if(!this.editData){
      if(this.Form.valid){
        this.api.postboitier(this.Form.value)
        .subscribe({
          next:(res: any)=>{
            alert("boitier ajouté avec succès")
            this.Form.reset();
            this.dialogRef.close('Save');
            
          },
          error:()=>{
            alert("Error while adding the product")
          }
        })
      }
    }
    else{
      this.updateBoitier() 
    } 
  }

  updateBoitier(){

    this.api.putBoitier(this.Form.value,this.editData.url)
    .subscribe({
      next:(res: any)=>{
        alert("Product updated Successfully");
        this.Form.reset();
        this.dialogRef.close('update');
      }, error:()=>{
        alert("Error while updating the record !");
      }
    })

  }

}
