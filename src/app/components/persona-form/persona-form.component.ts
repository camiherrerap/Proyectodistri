import { Component, OnInit, HostBinding } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import {PersonasService} from '../../Services/personas.service';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  persona: Persona ={
    cedula: 0,
    clave: '',
    direccion: '',
    id_persona: 0,
    nombre: '',
    telefono: '',
    tipo_rol: 0,
    tipo_usuario: 0,
    usuario: '',
  };

  constructor(private personasService: PersonasService) { }

  ngOnInit() {
  }

  GuardarNuevaPersona(){
    delete this.persona.id_persona;
    delete this.persona.clave;
    delete this.persona.tipo_rol;
    delete this.persona.tipo_usuario

    this.personasService.savePersona(this.persona).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }

}
