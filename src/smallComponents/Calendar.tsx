'use client';

import { ModalContext } from '@/context/ModalContext';
import { FC, useContext, useState } from 'react';
import dayjs from 'dayjs';
import { generateDate, months } from '@/lib/calendar';
import Image from 'next/image';
import { CalendarContext } from '@/context/CalendarContext';

interface CalendarProps {}

const Calendar: FC<CalendarProps> = ({}) => {
	const { handleOpenModal } = useContext(ModalContext);
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
	const { handleisCalendarClicked } = useContext(CalendarContext);

	const openFullCalendar = () => {
		handleOpenModal();
		handleisCalendarClicked();
	};

	return (
		<div className='flex flex-col items-start justify-start gap-[0.75rem] text-left text-[1rem] text-darkgray font-urbanist'>
			<div className='relative tracking-[0.02em] font-medium'>Appointments</div>

			<div className='flex flex-row items-center w-[220px] justify-between gap-[0.75rem] text-[1.5rem] text-gray-gray-100'>
				<b
					className='cursor-pointer relative tracking-[0.02em]'
					onClick={openFullCalendar}>
					{months[today.month()]}
				</b>

				<div className='flex flex-row items-start justify-start gap-[0.75rem]'>
					<div
						onClick={() => {
							setToday(today.month(today.month() - 1));
						}}
						className='cursor-pointer rounded-17xl bg-whitesmoke w-[2.25rem] h-[2.25rem] flex flex-row p-[0.63rem] box-border items-center justify-center'>
						<Image
							width={20}
							height={20}
							className='relative overflow-hidden shrink-0'
							alt=''
							src='/ic-l-chevron.svg'
						/>
					</div>

					<div
						onClick={() => {
							setToday(today.month(today.month() + 1));
						}}
						className='cursor-pointer rounded-17xl bg-whitesmoke w-[2.25rem] h-[2.25rem] flex flex-row p-[0.63rem] box-border items-center justify-center'>
						<Image
							width={20}
							height={20}
							className='relative overflow-hidden shrink-0'
							alt=''
							src='/ic-r-chevron.svg'
						/>
					</div>
				</div>
			</div>

			<div className='relative tracking-[0.02em] font-medium'>{`Today is ${selectDate
				.toDate()
				.toDateString()}`}</div>
		</div>
	);
};

export default Calendar;
