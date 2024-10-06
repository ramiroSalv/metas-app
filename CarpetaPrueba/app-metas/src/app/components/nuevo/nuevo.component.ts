import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Metas } from '../../core/models/metas';

@Component({
  selector: 'app-nuevo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.scss'
})
export class NuevoComponent {
  metaEnviar!: Metas;
formularioDeMetas = new FormGroup({
  id: new FormControl(),
  detalles: new FormControl(),
  periodo: new FormControl(),
  eventos: new FormControl(),
  icono: new FormControl(),
  meta: new FormControl(),
  plazo: new FormControl(),
  completado: new FormControl(),
})
frecuencias = ["día", "semana", "mes", "año"]
iconos = ["💻","🏃🏻‍♂️", "📚", "✈","💵"]

subirFormulario(){
  this.metaEnviar ={
    "id":Math.random().toString(),
    "detalles": this.formularioDeMetas.value.detalles!,
    "periodo":this.formularioDeMetas.value.periodo!,
    "eventos":this.formularioDeMetas.value.eventos!,
    "icono":this.formularioDeMetas.value.icono!,
    "meta":this.formularioDeMetas.value.meta!,
    "plazo":this.formularioDeMetas.value.plazo!,
    "completado":this.formularioDeMetas.value.completado!

  }
  console.log(this.metaEnviar);
}
}
