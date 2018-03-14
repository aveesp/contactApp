import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContactService } from './shared/contact.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService, private tostr: ToastrService) { }

  //this is called whenever this component is ready
  ngOnInit() {
    this.resetContactForm();
  }
  

  submitContact(contactForm?: NgForm) {
    if (contactForm.value.$key == null){
      this.contactService.insertContact(contactForm.value);
      this.resetContactForm(contactForm);
      this.tostr.success('Succcessfully', 'Contact Inserted!');
    }
    else{
      this.contactService.updateContact(contactForm.value);
      this.resetContactForm(contactForm);
      this.tostr.success('Succcessfully', 'Contact Updated!');
    }
  }
  
  resetContactForm(contactForm?: NgForm) {
    debugger;
    console.log('reset');
    if (contactForm != null)
    contactForm.reset();
    this.contactService.currentContact = {
      $key: null,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      status: ''
    }
  }

}
