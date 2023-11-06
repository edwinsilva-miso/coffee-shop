export class Coffee {
  id: number;
  nombre: string;
  tipo: string;
  region: string;
  sabor: string;
  altura: string;
  imagen: string;

  constructor(
    id: number,
    nombre: string,
    tipo: string,
    region: string,
    sabor: string,
    altura: string,
    imagen: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;
    this.sabor = sabor;
    this.altura = altura;
    this.imagen = imagen;
  }
}
