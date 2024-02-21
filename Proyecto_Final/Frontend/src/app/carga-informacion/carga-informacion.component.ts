import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carga-informacion',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './carga-informacion.component.html',
  styleUrls: ['./carga-informacion.component.css']
})
export class CargaInformacionComponent implements OnInit {
  datosCargados: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.http.get('/assets/data.json').subscribe(
      (data: any) => {
        this.datosCargados = data;
        console.log('Datos cargados:', data);
      },
      (error) => {
        console.error('Error al cargar los datos', error);
      }
    );
  }
}


