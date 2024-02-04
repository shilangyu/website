type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: Date, dateStyle: DateStyle = 'medium') {
  const dateFormatter = new Intl.DateTimeFormat('en', { dateStyle });
  return dateFormatter.format(date);
}
