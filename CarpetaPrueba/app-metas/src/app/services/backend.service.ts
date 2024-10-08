import { Injectable } from '@angular/core';
import { Metas } from '../core/models/metas';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private readonly archivoLocalMetas = 'metas.json'
  private readonly archivoLocalMeta = 'meta.json'


  constructor() { }
  async leerMetas():Promise<Metas[]>{
    const response = await fetch(this.archivoLocalMetas)
    const metas:Metas[]=await response.json()
    return metas
  }
  async pedirMetaPorId(id:number):Promise<Metas>{
    const response = await fetch(this.archivoLocalMeta)
    const meta:Metas=await response.json()
    return meta
  }
}
