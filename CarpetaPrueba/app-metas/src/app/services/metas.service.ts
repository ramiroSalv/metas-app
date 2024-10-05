import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Metas } from '../core/models/metas';


@Injectable({
  providedIn: 'root'
})
export class MetasService {
  metasMock: Metas[] =[
    {
      "id":"1",
      "detalles":"Correr  por 30 minutos",
      "periodo":"dia",
      "eventos":1,
      "icono":"🏃🏻‍♂️",
      "meta":365,
      "plazo":"2030-01-01",
      "completado":5
    },
    {
      "id":"2",
      "detalles":"Leer libros",
      "periodo":"año",
      "eventos":6,
      "icono":"📚",
      "meta":12,
      "plazo":"2030-01-01",
      "completado":3
    },
    {
      "id":"3",
      "detalles":"Viajar a Parques Nacionales",
      "periodo":"mes",
      "eventos":1,
      "icono":"✈",
      "meta":60,
      "plazo":"2030-01-01",
      "completado":40
    }

  ]

  constructor() { }
  obtenerMetas():Metas[]{
    return this.metasMock;
  }
}
