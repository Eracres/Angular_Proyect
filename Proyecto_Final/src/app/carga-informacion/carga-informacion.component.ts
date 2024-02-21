import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-carga-informacion',
  standalone: true,
  imports: [],
  templateUrl: './carga-informacion.component.html',
  styleUrl: './carga-informacion.component.css'
})
export class CargaInformacionComponent {
  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      const headers = new HttpHeaders({
        'security-token': 'tu-token-de-seguridad'
      });

      this.http.post('tu-url-backend/carga', formData, { headers: headers })
        .subscribe(response => {
          console.log('Respuesta del servidor', response);
        }, error => {
          console.error('Error al cargar el archivo', error);
        });
    }
  }
}
