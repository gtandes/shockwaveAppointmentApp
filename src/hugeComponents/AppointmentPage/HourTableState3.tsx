import { FC } from 'react';

interface HourTableState3Props {}

const HourTableState3: FC<HourTableState3Props> = ({}) => {
	const hours = [
		{ time: '5:00 AM' },
		{ time: '6:00 AM' },
		{ time: '7:00 AM' },
		{ time: '8:00 AM' },
		{ time: '9:00 AM' },
		{ time: '10:00 AM' },
		{ time: '11:00 AM' },
		{ time: '12:00 PM' },
		{ time: '1:00 PM' },
	];

	const hourDivs = hours.map((hour) => (
		<div
			key={hour.time}
			className='self-stretch flex flex-row py-[0rem] pr-[2.5rem] pl-[0rem] items-start justify-start border-b-[1px] border-solid border-lightgray'>
			<div className='self-stretch box-border w-[8.75rem] flex flex-row py-[2.5rem] px-[0rem] items-center justify-center border-r-[1px] border-solid border-lightgray'>
				<div className='relative tracking-[0.02em] font-medium'>
					{hour.time}
				</div>
			</div>
		</div>
	));

	return (
		<div className='overflow-y-auto shrink-0 self-stretch flex flex-col items-start justify-start border-r-[1px] border-solid border-lightgray'>
			{hourDivs}
		</div>
	);
};

export default HourTableState3;
