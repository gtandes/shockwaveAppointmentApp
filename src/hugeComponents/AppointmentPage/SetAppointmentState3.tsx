import Calendar from '@/smallComponents/Calendar';
import NewAppointmentBtn from '@/smallComponents/NewAppointmentBtn';
import { FC } from 'react';

interface SetAppointmentState3Props {}

const SetAppointmentState3: FC<SetAppointmentState3Props> = ({}) => {
	return (
		<div className='self-stretch flex flex-row py-[1.25rem] px-[2.5rem] items-center justify-between text-left text-[1rem] text-darkgray font-urbanist border-r-[1px] border-solid border-lightgray border-b-[1px]'>
			<Calendar />
			<NewAppointmentBtn />
		</div>
	);
};

export default SetAppointmentState3;
