import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Persona} from '../models/Persona';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  API_URI = 'https://banco-uc.firebaseio.com/';

  constructor(private http: HttpClient) { }

  getPersonas(){
    return this.http.get('https://banco-uc.firebaseio.com/persona.json');
  }

  getPersona(id: string){
    return this.http.get('https://banco-uc.firebaseio.com/persona/${id}.json');
  }

  savePersona(persona: Persona){
    return this.http.post('https://banco-uc.firebaseio.com/persona.json', persona);
  }

}
