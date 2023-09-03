import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/service/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  persona = {
    nombre: '',
    apellido: '',
    email: '',
    pais: ''
  };
  paises : any[]=[];
  constructor(private PaisService: PaisService){
    
  }

  ngOnInit(): void {
    this.PaisService.getPaises()
    .subscribe(pais =>{
      this.paises=pais;
      this.paises.unshift({
      nombre:'[Seleccione un pais]',
      codigo:''
      })
      console.log(pais);
    });    
  }

  mensajeConfirmacion = ''; // Variable para almacenar el mensaje de confirmación

  guardar(forma:NgForm){ 
 
    if(forma.invalid){ 
      Object.values(forma.controls).forEach(control=> 
        control.markAsTouched()); 
    }else{ 
      console.log(forma); 
      console.log(forma.value); 
      console.log(forma.status); 
    } 
  }
}
