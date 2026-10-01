import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  @Input() filtroCategoria: string = 'todos';

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Smartphone TecnoMax Pro',
      imagen: 'https://via.placeholder.com/300x200?text=Celular',
      precio: 3500,
      categoria: 'celulares',
      enOferta: false,
      precioOferta: 0,
      resenas: [{ cliente: 'Maria L.', comentario: 'Excelente camara y velocidad.', valoracion: 5 }]
    },
    {
      id: 2,
      nombre: 'Laptop Gamer TecnoMax',
      imagen: 'https://via.placeholder.com/300x200?text=Laptop',
      precio: 5200,
      categoria: 'laptops',
      enOferta: true,
      precioOferta: 4800,
      resenas: [{ cliente: 'Carlos R.', comentario: 'Excelente rendimiento para trabajo.', valoracion: 5 }]
    },
    {
      id: 3,
      nombre: 'Audifonos Bluetooth',
      imagen: 'https://via.placeholder.com/300x200?text=Audifonos',
      precio: 800,
      categoria: 'accesorios',
      enOferta: true,
      precioOferta: 650,
      resenas: [{ cliente: 'Ana G.', comentario: 'Cancelacion de ruido eficiente.', valoracion: 4 }]
    },
    {
      id: 4,
      nombre: 'Asistente de Voz Inteligente',
      imagen: 'https://via.placeholder.com/300x200?text=Smart+Home',
      precio: 250,
      categoria: 'dispositivos inteligentes',
      enOferta: false,
      precioOferta: 0,
      resenas: [{ cliente: 'Juan P.', comentario: 'Facil configuracion en el hogar.', valoracion: 4 }]
    }
  ];

  get productosMostrados(): Producto[] {
    if (this.filtroCategoria === 'ofertas') {
      return this.productos.filter(p => p.enOferta);
    }
    if (this.filtroCategoria !== 'todos') {
      return this.productos.filter(p => p.categoria === this.filtroCategoria);
    }
    return this.productos;
  }
}