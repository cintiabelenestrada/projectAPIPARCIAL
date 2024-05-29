import { Component } from '@angular/core';
import { RecetasPopuService } from '../../services/recetasPopu.service';
import { ModelApi } from '../../models/model-api';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css',
})
export class ApiComponent {
  datosRecetas!: ModelApi[];
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
}
