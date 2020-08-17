import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators ,NgForm} from '@angular/forms';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  disuser;
  userRegForm: FormGroup;
  res;
  // emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(private formBuilder: FormBuilder,private serv:GlobalService ) { }

  ngOnInit() {
    this.userRegForm = this.formBuilder.group({
     // username: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
     username: [null, [Validators.required]],
      phonenumber: [null, Validators.required]
    });
    this.userdata()
    this.alldata()
  }

  submit() {
    console.log(this.userRegForm.value);
  }
  alldata(){
    this.serv.masterData$.subscribe(result=>{
      this.res  = result;
    })
  }
  userdata(){
    this.serv.userBasicData$.subscribe(result=>{
        this.disuser = result;
        console.log(this.disuser)
    })
  } 

}
