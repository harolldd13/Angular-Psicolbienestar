import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Categoria } from '@categorias/models/categoria.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaservicesService } from '@categorias/services/categoriaservices.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  selectedImage: string | ArrayBuffer | null = null;
  file=File;
  fotoURL: string | ArrayBuffer | null = null;
  isNewCategory: boolean = true; 
  editar: boolean = false;// Indica si se está editando una categoría existente
  
  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Categoria,
    private categoriaservicesService:CategoriaservicesService,
    private snackBar: MatSnackBar 
  ) {}
  ngOnInit(): void {
    this.editar = this.data.id_categoria !== undefined; // Asignar valor en el constructor

    if (this.editar) {
      // Si se está editando, cargar los datos de la categoría existente
      this.isNewCategory = false;
    }
  }
   
  
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.selectedImage = reader.result;
            // No asignar this.selectedImage directamente a this.data.imagen,
            // sino crear un nuevo objeto File a partir del archivo seleccionado
            const imageFile = new File([file], file.name);
            this.data.imagen = imageFile;
        };
    }
}
//segmento de edicion de categoria
guardarCategoria() {
  if (this.editar) {
    // Verificar si id_categoria no es undefined antes de enviar la solicitud PUT
    if (this.data.id_categoria !== undefined) {
      this.categoriaservicesService.putCategoria(this.data.id_categoria, this.data).subscribe(
        (response) => {
          console.log('Categoría actualizada con éxito:', response);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error al actualizar la categoría:', error);
          // Manejar el error
        }
      );
    } else {
      console.error('El ID de la categoría es undefined.');
    }
  } else {
    // Si se está creando, enviar una solicitud para crear la categoría
    this.categoriaservicesService.postCategoria(this.data).subscribe(
      (response) => {
        console.log('Nueva categoría creada con éxito:', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error al crear la nueva categoría:', error);
        // Manejar el error
      }
    );
  }
}

  
//segmento de creacion de categoria
  guardarNuevaCategoria() {
    if (this.selectedImage) {
      // Si se seleccionó una imagen, asignarla a la categoría
  
    }

    this.categoriaservicesService.postCategoria(this.data).subscribe(
      (response) => {
        console.log('Nueva categoría guardada con éxito:', response);
        this.mostrarSnackbar('Nueva categoría guardada con éxito');
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error al guardar la nueva categoría:', error);
        this.mostrarSnackbar('Error al guardar la nueva categoría. Por favor, inténtalo de nuevo más tarde.');
      }
    );
  }

  cancelarEdicion() {
    this.dialogRef.close(); // Cierra el modal sin cambios
  }

  mostrarSnackbar(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000
    });
  }
  cerrarModal() {
    this.dialogRef.close();
  }
}