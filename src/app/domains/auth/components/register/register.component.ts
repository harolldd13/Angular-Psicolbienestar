import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerObj: Register = new Register();
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onRegister() {
    if (this.registerObj.password !== this.registerObj.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    this.http.post<any>('http://127.0.0.1:8000/API_Usuario/Usuarios/', this.registerObj).subscribe(
      response => {
        console.log('Respuesta del servidor:', response);
        alert('Registro exitoso. Por favor inicia sesión.');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error en la solicitud:', error);
        alert('Ha ocurrido un error durante el registro. Por favor, inténtalo de nuevo más tarde.');
        this.errorMessage = 'Ha ocurrido un error durante el registro. Por favor, inténtalo de nuevo más tarde.';
      }
    );
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}

export class Register {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  password: string = '';
  confirmPassword: string = '';
}
