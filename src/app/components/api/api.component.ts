import { Component } from '@angular/core';
import { RecetasPopuService } from '../../services/recetasPopu.service';
import { DetallesReceta, ModelApi, } from '../../models/model-api';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css',
})
export class ApiComponent {
  datosRecetas!: ModelApi[];
  detallesRecetas!: DetallesReceta[];
  constructor(private recetasPopuService: RecetasPopuService) {}
  mostrarDatosDeApi() {
    this.recetasPopuService.getObtenerRecetas().subscribe(
      (data: any) => {
        this.datosRecetas = data;
        console.log('data.recetaspopu: ', JSON.stringify(this.datosRecetas));
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  mostrarDetalle(path:string) {
    this.recetasPopuService.getDetallesRecetas(path).subscribe(
      (data: any) => {
        console.log('path ',path);
        
        this.detallesRecetas = data;
        console.log('data.Detalles Recetas: ', JSON.stringify(this.detallesRecetas));
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
