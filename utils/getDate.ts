import { DateCategory } from '@/types/types';

export function getCurrentMonthAndDay(): { month: string; day: number } {
  const now = new Date();

  const month = new Intl.DateTimeFormat('es-ES', { month: 'short' })
    .format(now)
    .toUpperCase(); // 'abr' → 'ABR'

  const day = now.getDate(); // Número del día

  return { month, day };
}

function getDayMonthYear(date: Date) {
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
}


function isSameDay(d1: Date, d2: Date): boolean {
  const a = getDayMonthYear(d1);
  const b = getDayMonthYear(d2);
  return a.day === b.day && a.month === b.month && a.year === b.year;
}

export function getDateCategory(date: Date): DateCategory {
  const currentDate = new Date()
  
  const { day: d0, month: m0, year: y0 } = getDayMonthYear(currentDate);

  const { day: d1, month: m1, year: y1 } = getDayMonthYear(date)

  if (d0 === d1 && m0 === m1 && y0 === y1) return 'today';

  // --- this_week
  const dayOfWeek = currentDate.getDay(); // 0 (Sun) to 6 (Sat)
  const distanceToMonday = (dayOfWeek + 6) % 7; // Convierte domingo=0 a 6, lunes=1 a 0, etc.
  const monday = new Date(currentDate);
  monday.setDate(currentDate.getDate() - distanceToMonday);
  monday.setHours(0, 0, 0, 0);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  if (date >= monday && date <= sunday) return 'this_week';

  else if ( m0 === m1 && y0 === y1) return 'this_month';

  else if (y0 === y1) return 'this_year';

  return 'older'
}