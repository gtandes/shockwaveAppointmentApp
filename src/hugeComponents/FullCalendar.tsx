import React, { FC, useState } from 'react';

import {
	EventApi,
	DateSelectArg,
	EventClickArg,
	EventContentArg,
} from '@fullcalendar/core';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, businessHours, createEventId } from '@/lib/utils';
import {
	dayHeaderClassNames,
	slotLaneClassNames,
} from '@/styles/fullCalendarStyles';

interface CalendarHookProps {}

const CalendarHook: FC<CalendarHookProps> = ({}) => {
	const [weekendsVisible, setweekendsVisible] = useState<boolean>(true);
	const [currentEvents, setcurrentEvents] = useState<EventApi[]>([]);

	// const RenderSidebar: FC = () => {
	// 	function renderSidebarEvent(event: EventApi) {
	// 		return (
	// 			<li key={event.id}>
	// 				<b>
	// 					{formatDate(event.start!, {
	// 						year: 'numeric',
	// 						month: 'short',
	// 						day: 'numeric',
	// 					})}
	// 				</b>
	// 				<i>{event.title}</i>
	// 			</li>
	// 		);
	// 	}

	// 	return (
	// 		<div className='calendar-sidebar'>
	// 			<div className='calendar-sidebar-section'>
	// 				<h2>Instructions</h2>
	// 				<ul>
	// 					<li>Select dates and you will be prompted to create a new event</li>
	// 					<li>Drag, drop, and resize events</li>
	// 					<li>Click an event to delete it</li>
	// 				</ul>
	// 			</div>
	// 			<div className='calendar-sidebar-section'>
	// 				<label>
	// 					<input
	// 						type='checkbox'
	// 						checked={weekendsVisible}
	// 						onChange={handleWeekendsToggle}></input>
	// 					toggle weekends
	// 				</label>
	// 			</div>
	// 			<div className='calendar-sidebar-section'>
	// 				<h2>All Events ({currentEvents.length})</h2>
	// 				<ul>{currentEvents.map(renderSidebarEvent)}</ul>
	// 			</div>
	// 		</div>
	// 	);
	// };

	const handleWeekendsToggle = () =>
		setweekendsVisible((prevState) => !prevState);

	const handleDateSelect = (selectInfo: DateSelectArg) => {
		let title = prompt('Please enter a new title for your event');
		let calendarApi = selectInfo.view.calendar;

		calendarApi.unselect(); // clear date selection

		if (title) {
			calendarApi.addEvent({
				id: createEventId(),
				title,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
			});
		}
	};

	const handleEventClick = (clickInfo: EventClickArg) => {
		if (
			confirm(
				`Are you sure you want to delete the event '${clickInfo.event.title}'`,
			)
		) {
			clickInfo.event.remove();
		}
	};

	const handleEvents = (events: EventApi[]) => setcurrentEvents(events);

	function renderEventContent(eventContent: EventContentArg) {
		return (
			<>
				<b>{eventContent.timeText}</b>
				<i>{eventContent.event.title}</i>
			</>
		);
	}

	return (
		<div className='absolute left-[33%] w-[80vh] flex items-center justify-center calendar font-urbanist'>
			{/* <RenderSidebar /> */}
			<div className='calendar-main w-[80vh] bg-white/90 p-5 rounded-lg'>
				<FullCalendar
					height={'80vh'}
					plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
					headerToolbar={{
						left: 'prev,next today',
						center: 'title',
						right: 'timeGridDay,timeGridWeek,dayGridMonth',
					}}
					initialView='timeGridDay'
					editable={true}
					selectable={true}
					selectMirror={true}
					dayMaxEvents={true}
					weekends={weekendsVisible}
					showNonCurrentDates={false}
					initialEvents={INITIAL_EVENTS}
					select={handleDateSelect}
					eventContent={renderEventContent}
					eventClick={handleEventClick}
					eventsSet={handleEvents}
					eventBackgroundColor='#f5edff'
					eventBorderColor='#9747ff'
					eventTextColor='#1c1c1e'
					// eventDisplay=''
					// eventAdd={function () {}}
					// eventChange={function () {}}
					// eventRemove={function () {}}
					timeZone='local'
					businessHours={businessHours}
					slotMinTime={'08:00:00'}
					slotMaxTime={'18:00:00'}
					slotLabelFormat={{
						hour: 'numeric',
						minute: '2-digit',
						omitZeroMinute: false,
					}}
					slotDuration={'00:15:00'}
					// slotLabelClassNames={'h-[99px]'}
					slotLaneClassNames={slotLaneClassNames}
					dayHeaderClassNames={dayHeaderClassNames}
					// dayCellClassNames={'h-[99px]'}
					navLinks={true}
					nowIndicator={true}
				/>
			</div>
		</div>
	);
};

export default CalendarHook;
