export interface LibroResponse {
    id: number;
    titulo: string;
    autorId: number;
    autorNombre: string;
    isbn: string;
    fechaPublicacion: string; //formato YYYY-MM-DD
    estado: 'DISPONIBLE' | 'NO_DISPONIBLE';
  }
  