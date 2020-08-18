import { Component, OnInit } from '@angular/core';
import { PersonagensService } from '../../serveces/personagens.service';


@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {

  personagens = [];

  constructor(personagensServ: PersonagensService) {
    this.personagens = personagensServ.getTodos()
   }

  ngOnInit(): void {
  }

}
