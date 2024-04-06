import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { CategoriaservicesService } from '@categorias/services/categoriaservices.service';
import { Categoria } from '@categorias/models/categoria.model';
import { FormsModule } from '@angular/forms'; 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from '../modal/modal.component';
import { HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, FormsModule, ReactiveFormsModule],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  @Input({required:true}) categoria!: Categoria;
  categoriaApi: Categoria[] = [];

  constructor(
    private categoriaservicesService: CategoriaservicesService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getCategoria();
    this.actualizarListaCategorias();

  }
  actualizarListaCategorias() {
    this.categoriaservicesService.obtenerCategorias().subscribe(
      (categorias: Categoria[]) => {
        this.categoriaApi = categorias;
      },
      error => {
        console.error('Error al obtener las categorías:', error);
        this.mostrarError('No se pudieron obtener las categorías. Por favor, inténtalo de nuevo más tarde.');
      }
    );
  }
  mostrarError(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 5000 // Duración del mensaje de error en milisegundos
    });
  }

  getCategoria() {
    this.categoriaservicesService.getCategoria().subscribe({
      next: (response) => {
        console.log(response);
        this.categoriaApi = response;
      },
    });
  }

  postCategoria(categoriaApi: Categoria) {
    this.categoriaservicesService.postCategoria(categoriaApi).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }

  putCategoria(id_categoria: number, categoriaApi: Categoria) {
    this.categoriaservicesService.putCategoria(id_categoria, categoriaApi).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }

  patchCategoria(id_categoria: number, categoriaApi: Categoria) {
    this.categoriaservicesService.patchCategoria(id_categoria, categoriaApi).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }

  deleteCategoria(id_categoria: number, nombre: string, descripcion: string, imagen: string) {
    this.categoriaservicesService.deleteCategoria(id_categoria).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }


// inicia el apartado para la edicion d ela categoria 
  editarCategoria(categoria: Categoria) {
    this.abrirModalEditarCategoria(categoria);
  }

  abrirModalEditarCategoria(categoria: Categoria) {
    const nuevaCategoria: Categoria = { ...categoria }; // Copia de la categoría
    const dialogRef = this.dialog.open(ModalComponent, {
      data: nuevaCategoria
    });

    dialogRef.afterClosed().subscribe((categoriaEditada: Categoria) => {
      if (categoriaEditada && categoriaEditada.id_categoria !== undefined) {
        console.log('Categoría editada:', categoriaEditada);
        // Llama al método correspondiente en tu servicio para actualizar la categoría
        this.putCategoria(categoriaEditada.id_categoria, categoriaEditada);
      } else {
        console.error('ID de categoría no válido');
      }
    });
}
  
  
  
  // Función para obtener la URL de una imagen
  getImageURL(image: File): string {
    // Creamos un objeto URL para la imagen y obtenemos su URL
    const imageURL = URL.createObjectURL(image);
    return imageURL;
  }
  
  

  mostrarSnackbar(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000
    });
  }

  // termina  el apartado para la edicion d ela categoria 
// ________________________________________________________________________-

  // inicia el apartado para la creacion  d ela categoria 
  agregarCategoria() {
    const dialogRef = this.dialog.open(ModalComponent, {
     
      data: { nombre: '', descripcion: '', imagen: '' } // Campos vacíos para una nueva categoría
    });
  
    dialogRef.afterClosed().subscribe((nuevaCategoria: Categoria) => {
      if (nuevaCategoria) {
        // Guarda la nueva categoría utilizando tu servicio
        this.categoriaservicesService.postCategoria(nuevaCategoria).subscribe(
          response => {
            console.log('Respuesta del servidor:', response); // Agrega este console.log para verificar la respuesta del servidor
            console.log('Nueva categoría guardada:', response);
            // Actualiza la lista de categorías después de agregar una nueva
            this.actualizarListaCategorias();
          },
          error => {
            console.error('Error al guardar la nueva categoría:', error);
            this.mostrarError('Error al guardar la nueva categoría. Por favor, inténtalo de nuevo más tarde.');
          }
        );
      }
    });
  }
// ________________________________________________________________________-

  // inicia el apartado para la ELIMINAR  d ela categoria 

  eliminarCategoria(idCategoria: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
      this.categoriaservicesService.deleteCategoria(idCategoria).subscribe(
        () => {
          console.log('Categoría eliminada con éxito');
          // Actualiza la lista de categorías después de eliminar
          this.actualizarListaCategorias();
        },
        error => {
          console.error('Error al eliminar la categoría:', error);
          // Manejar el error si es necesario
        }
      );
    }
  }
}
