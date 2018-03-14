import { Component, OnInit } from '@angular/core';

import { ContactService } from './contact/shared/contact.service';
@Component({
  selector: 'app-contact-book',
  templateUrl: './contact-book.component.html',
  styleUrls: ['./contact-book.component.css'],
  providers:[ContactService]
})
export class ContactBookComponent implements OnInit {

  constructor(private contactService : ContactService) { }

  ngOnInit() {
  }

}
