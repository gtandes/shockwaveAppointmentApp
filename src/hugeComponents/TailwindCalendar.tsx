'use client';

import dayjs from 'dayjs';
import React, { FC, useContext, useState } from 'react';
import { generateDate, months } from '@/lib/calendar';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { cn } from '@/lib/utils';
import MUITimePicker from './AppointmentPage/MUITimePicker';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ModalContext } from '@/context/ModalContext';

interface TailwindCalendarProps {}

const TailwindCalendar: FC<TailwindCalendarProps> = ({}) => {
	const { handleCloseModal } = useContext(ModalContext);

	const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);

	return (
		<div className=' absolute translate-x-1/2 translate-y-1/4 rounded-3xl bg-background-bg-light-01 shadow-[0px_4px_8px_rgba(96,_96,_96,_0.1)] bg-white flex flex-col items-center justify-center gap-10 mx-auto w-[600px] h-[600px] py-3 sm:divide-x sm:w-1/2 sm:flex-row font-urbanist z-[5]'>
			<div className='h-full w-[480px]'>
				<div className='flex items-center justify-between'>
					<h1 className='font-semibold select-none'>
						{months[today.month()]}, {today.year()}
					</h1>

					<div className='flex items-center gap-10 '>
						<GrFormPrevious
							className='w-5 h-5 transition-all cursor-pointer hover:scale-105'
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
						<h1
							className='transition-all cursor-pointer hover:scale-105'
							onClick={() => {
								setToday(currentDate);
							}}>
							Today
						</h1>
						<GrFormNext
							className='w-5 h-5 transition-all cursor-pointer hover:scale-105'
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>
				<div className='grid grid-cols-7 '>
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className='grid text-base text-center text-gray-500 select-none h-14 w-14 place-content-center'>
								{day}
							</h1>
						);
					})}
				</div>

				<div className='grid grid-cols-7 '>
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className='grid p-2 text-center border-t border-gray text-2xs h-14 place-content-center'>
									<h1
										className={cn(
											currentMonth ? '' : 'text-gray',
											today ? 'bg-orangered text-white' : '',
											selectDate.toDate().toDateString() ===
												date.toDate().toDateString()
												? 'bg-black text-white'
												: '',
											'h-10 w-10 rounded-full grid place-content-center hover:bg-coral hover:text-white transition-all cursor-pointer select-none',
										)}
										onClick={() => {
											setSelectDate(date);
										}}>
										{date.date()}
									</h1>
								</div>
							);
						},
					)}
				</div>
			</div>

			<div className='h-full w-[300px] px-5'>
				<h1 className='pt-4 text-2xl font-semibold'>
					Schedule for {selectDate.toDate().toDateString()}
				</h1>
				<p className='pb-10 text-gray-400'>No meetings for today.</p>

				<MUITimePicker />
			</div>

			<HighlightOffIcon
				sx={{ m: -2, width: 40, height: 40, cursor: 'pointer' }}
				onClick={handleCloseModal}
			/>
		</div>
	);
};

export default TailwindCalendar;
