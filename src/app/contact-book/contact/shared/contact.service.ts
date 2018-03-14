import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Contact } from './contact.model';
@Injectable()
export class ContactService {
  contactList: AngularFireList<any>;
  currentContact: Contact = new Contact();
  //to interact with databse i have injected "AngularFireDatabase" to ContactService
  constructor(private firebase: AngularFireDatabase ) { }

  getData(){
    this.contactList = this.firebase.list('contactBooks');
    return this.contactList;
  }

  insertContact(contact: Contact){
    this.contactList.push({
      firstname: contact.firstname,
      lastname: contact.lastname,
      email: contact.email,
      phone: contact.email,
      status: contact.status
    })
  }

  updateContact(contact: Contact){
    this.contactList.update(contact.$key,
    {
      firstname: contact.firstname,
      lastname: contact.lastname,
      email: contact.email,
      phone: contact.email,
      status: contact.status
    })
  }

  deleteContact(key: string){
    this.contactList.remove(key)
  }

}
