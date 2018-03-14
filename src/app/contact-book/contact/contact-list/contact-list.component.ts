import { Component, OnInit } from '@angular/core';

import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList : Contact[];
  showBtn:boolean = false;
  constructor(private contactService : ContactService, private toastr: ToastrService) { }

  ngOnInit() {
    let tmp = this.contactService.getData();
    tmp.snapshotChanges().subscribe(contact => {
      this.contactList = [];
      contact.forEach(ele => {
        let data = ele.payload.toJSON();
        data["$key"] = ele.key;
        this.contactList.push(data as Contact);
      })
    })
  }

  updateContact(contact: Contact){
    this.contactService.currentContact = Object.assign({}, contact);
  }

  //show popup
  showPopup(contact, key){
    let index = key;
    this.contactService.currentContact = Object.assign({}, contact);
    this.showBtn=true;
    return index;
  }
  
  deleteContact(key : string, NgForm){
    this.showBtn= !this.showBtn;
    this.contactService.deleteContact(key);
    this.toastr.warning("Deleted Successfully", "Contact");
    // document.getElementById('contactForm').reset();
  }
  cancel(){
    this.showBtn= !this.showBtn;
    // document.getElementById('contactForm').reset();
  }
}
