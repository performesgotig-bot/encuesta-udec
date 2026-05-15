export const metadata = {
  title: 'Encuesta Institucional',
  description: 'Universidad de Cundinamarca',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
