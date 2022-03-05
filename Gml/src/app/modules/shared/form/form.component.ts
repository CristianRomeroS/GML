import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  private emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  private phonePattern:RegExp=new RegExp('^(?:6[0-9]{2}|7[1-9][0-9]|9[0-9]{2})(?: ?[0-9]{3}){2}\r?$');
  public formContact:FormGroup=this.fb.group({
    name:['consulta',[Validators.required]],
    email:['consulta@consulta',[Validators.required,Validators.pattern(this.emailPattern)]],
    phone:[,[Validators.required,Validators.pattern(this.phonePattern)]],
    mensaje:[,Validators.required],
    aceptar:[false,[Validators.required]]
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}