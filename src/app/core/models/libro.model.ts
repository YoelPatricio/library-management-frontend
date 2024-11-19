export interface Libro {
    id: number;
    titulo: string;
    autorId: number;
    isbn: string;
    fechaPublicacion: string; //formato YYYY-MM-DD
    estado: 'DISPONIBLE' | 'NO_DISPONIBLE';
  }
  