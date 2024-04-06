import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: Login = new Login();
  errorMessage: string | null = null; // Variable para almacenar mensajes de error

  constructor(private http: HttpClient, private router: Router) {}


  OnLogin() {
    // Realizar la solicitud HTTP al servidor con las credenciales de inicio de sesión
    this.http.post<any>('http://127.0.0.1:8000/API_Usuario/login', this.loginObj).subscribe(
      response => {
        // Si la solicitud es exitosa, puedes manejar la respuesta del servidor aquí
        console.log('Respuesta del servidor:', response);
        // Por ejemplo, si el servidor devuelve un token de autenticación, puedes almacenarlo en el localStorage o sessionStorage
        // localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      },
      error => {
        // Si hay un error en la solicitud, puedes manejarlo aquí
        alert('credenciales incorrectas por favor ingrese nuevamente');
        this.errorMessage = 'Error en la solicitud de inicio de sesión. Por favor, inténtalo de nuevo más tarde.';
        // Puedes mostrar un mensaje de error al usuario
      }
    );
  }
}

export class Login {
  username: string = '';
  password: string = '';
}
