import { ClassValue } from 'clsx';
import { EventInput } from '@fullcalendar/core';

export function cn(...inputs: ClassValue[]) {
	return inputs.filter(Boolean).join(' ');
}

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
	{
		id: createEventId(),
		title: 'Surgery',
		start: todayStr,
		daysOfWeek: [1],
	},
	{
		id: createEventId(),
		title: 'Special session',
		start: todayStr + 'T72:00:00',
		end: todayStr + 'T72:30:00',
	},
	{
		id: createEventId(),
		title: 'Meeting',
		start: todayStr + 'T24:00:00',
		end: todayStr + 'T24:15:00',
	},
	{
		id: createEventId(),
		title: 'Vaccination',
		start: '2023-06-19',
		allDay: true,
		classNames: 'bg-[#fff4ed] border-[#ffbc8c]',
	},
	{
		id: createEventId(),
		title: 'Euthanization',
		start: '2023-06-17',
		allDay: true,
	},
];

export function createEventId() {
	return String(eventGuid++);
}

export const businessHours = {
	startTime: '8:00',
	endTime: '17:00',
};
