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
      (detalles: any) => {
        console.log('path ',path);
        
        this.detallesRecetas = detalles;
        console.log('detalles.Detalles Recetas: ', JSON.stringify(this.detallesRecetas));

        this.openModal()
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  openModal(): void {
    const modelDiv = document.getElementById('myModal')
    if (modelDiv!=null) {
      modelDiv.style.display = 'block';
    }
  }
  closeModal(): void {
    const modelDiv = document.getElementById('myModal')
    if (modelDiv!=null) {
      modelDiv.style.display = 'none';
    }
  }
}
