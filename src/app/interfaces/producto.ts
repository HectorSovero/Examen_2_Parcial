export interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  precio: number;
  categoria: 'celulares' | 'laptops' | 'accesorios' | 'dispositivos inteligentes';
  enOferta: boolean;
  precioOferta?: number;
  descuento?: number;
  descripcion: string;
}
