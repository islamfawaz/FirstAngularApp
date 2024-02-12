import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Input() darkColor: string = 'dark';
  userName: string = '';
  userAge: null = null;
  userEmail: string = '';
  userPassword: string = '';
}