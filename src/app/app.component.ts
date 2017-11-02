import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  peoples = [{email: 'bill@gates.com', importance: true, subject: 'New Windows', content: 'Windows will launch in year 2100'},
            {email: 'ada@lovelace.com', importance: true, subject: 'Programming', content: 'Enchantress of Numbers'},
            {email: 'john@carmack.com', importance: false, subject: 'Updated Algo', content: 'New Algo for graphics stuff'},
            {email: 'gabe@newell.com', importance: false, subject: 'HL3', content: 'Just Kidding!'}
];

}
