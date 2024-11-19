export interface PrestamoResponse {
    id: number;
    libroId: number;
    libroTitulo: string;
    libroIsbn: string;
    lector: string;
    fechaPrestamo: string; //formato YYYY-MM-DD
    fechaDevolucion?: string; // formato YYYY-MM-DD
    estado: 'ACTIVO' | 'FINALIZADO'; // Estado del préstamo
  }
  