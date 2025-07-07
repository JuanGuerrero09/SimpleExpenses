export default function getCurrentMonthAndDay(): { month: string; day: number } {
  const now = new Date();

  const month = new Intl.DateTimeFormat('es-ES', { month: 'short' })
    .format(now)
    .toUpperCase(); // 'abr' → 'ABR'

  const day = now.getDate(); // Número del día

  return { month, day };
}