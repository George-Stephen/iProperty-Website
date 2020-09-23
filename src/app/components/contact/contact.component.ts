import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ContactService } from './contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;

  constructor(private builder: FormBuilder,private contact: ContactService ) { 

  }
  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
    .subscribe(response => {
    location.href = 'https://mailthis.to/confirm'
    console.log(response)
    }, error => {
    console.warn(error.responseText)
    console.log({ error })
    })
    }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname : new FormControl("",[Validators.required]),
      Email : new FormControl("",[Validators.compose([Validators.required,Validators.email])]),
      Comment : new FormControl('',Validators.required)

    })
  }
}
