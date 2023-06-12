import { ClassValue } from 'clsx';
import { EventInput } from '@fullcalendar/core';

export function cn(...inputs: ClassValue[]) {
	return inputs.filter(Boolean).join(' ');
}

// import type { categories } from '@/constants/calendarConfig';

// type DateTime = {
// 	justDate: Date | null;
// 	dateTime: Date | null;
// };

// type Categories = (typeof categories)[number];

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
	{
		id: createEventId(),
		title: 'All-day event',
		start: todayStr,
	},
	{
		id: createEventId(),
		title: 'Timed event',
		start: todayStr + 'T12:00:00',
	},
];

export function createEventId() {
	return String(eventGuid++);
}

export const businessHours = {
	startTime: '8:00',
	endTime: '17:00',
};
