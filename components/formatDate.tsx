import { format } from 'date-fns';
import tr from 'date-fns/locale/tr'; // 'tr' dil ayarı yerine 'date-fns/locale/tr' kullanın

export function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  return format(date, 'dd MMMM yyyy', { locale: tr });
}
