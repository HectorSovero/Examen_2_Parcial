import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside',
  standalone: true,
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside {
  @Output() categoriaSeleccionada = new EventEmitter<string>();

  filtrar(categoria: string) {
    this.categoriaSeleccionada.emit(categoria);
  }
}