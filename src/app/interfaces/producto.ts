import { Resena } from './resena';

export interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  precio: number;
  categoria: string;
  enOferta: boolean;
  precioOferta: number;
  resenas: Resena[];
}