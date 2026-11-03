export interface Elapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/** The calendar date of an instant in a time zone, as a UTC date at midnight (daylight saving included) */
const calendarDate = (at: Date, timeZone: string) => {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone, year: "numeric", month: "numeric", day: "numeric" })
    .formatToParts(at)
    .reduce<
      Record<string, number>
    >((acc, p) => (p.type === "literal" ? acc : { ...acc, [p.type]: Number(p.value) }), {});
  return new Date(Date.UTC(parts.year, parts.month - 1, parts.day));
};

/** Days in a month. Month is zero-based and may overflow. */
const daysInMonth = (year: number, month: number) => new Date(Date.UTC(year, month + 1, 0)).getUTCDate();

/**
 * Time from start to now, counted on the calendar of `timeZone` (an IANA name such as
 * "America/Toronto") so it reads the same for every visitor. Returns all zeros when now is before start.
 */
export const elapsedSince = (start: Date, now: Date, timeZone: string): Elapsed => {
  const diff = now.getTime() - start.getTime();
  if (!(diff > 0)) return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  const n = calendarDate(now, timeZone);
  const s = calendarDate(start, timeZone);
  let years = n.getUTCFullYear() - s.getUTCFullYear();
  let months = n.getUTCMonth() - s.getUTCMonth();
  let days = n.getUTCDate() - s.getUTCDate();
  if (days < 0) {
    // Borrow the month before now. A start day it lacks counts as its last day.
    months -= 1;
    const prevLen = daysInMonth(n.getUTCFullYear(), n.getUTCMonth() - 1);
    days = n.getUTCDate() + prevLen - Math.min(s.getUTCDate(), prevLen);
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return {
    years,
    months,
    days,
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
};
