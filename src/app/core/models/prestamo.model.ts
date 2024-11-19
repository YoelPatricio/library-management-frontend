export interface Prestamo {
    id: number;
    libroId: number;
    lector: string;
    fechaPrestamo: string; //formato YYYY-MM-DD
    fechaDevolucion?: string; // formato YYYY-MM-DD
    estado: 'ACTIVO' | 'FINALIZADO'; // Estado del préstamo
  }
  