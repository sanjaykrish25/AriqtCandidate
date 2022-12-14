import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ApiService } from '../services/api.service';
import{ MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  productForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private api:ApiService,private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      Name:["",Validators.required],
      MobileNo:["",Validators.required],
      Emailid:["",Validators.required],
      Designation:["",Validators.required],
      date:["",Validators.required]

    })

  }
  addproduct(){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:()=> {
          alert("product added sucessfully")
          this.productForm.reset();
          this.dialogRef.close();
          
        },
        error:()=> {
          alert("error while adding the product")
        }

      })
    }
  }



}
