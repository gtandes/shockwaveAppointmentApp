'use client';

import { supabase } from '@/api/createClient';
import { AppointmentsContext } from '@/context/EditCancelContext';
import { FormContext } from '@/context/FormContext';
import { ModalContext } from '@/context/ModalContext';
import { FC, useContext } from 'react';

interface ReschedBtnProps {}

const ReschedBtn: FC<ReschedBtnProps> = ({}) => {
	const { handleOpenAppointments } = useContext(AppointmentsContext);
	const { handleOpenModal } = useContext(ModalContext);
	const { setallAppointments } = useContext(FormContext);

	const fetchApptDetails = async () => {
		const { data } = await supabase
			.from('ShockwaveApptFormDetails')
			.select('*');

		setallAppointments(data);

		console.log(data);
	};

	const handleClick = () => {
		handleOpenModal();
		handleOpenAppointments();
		fetchApptDetails();
	};

	return (
		<div
			className='cursor-pointer self-stretch rounded-xl bg-orangered flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-center text-left text-[1rem] text-white font-urbanist'
			onClick={handleClick}>
			<div className='relative tracking-[0.02em] font-medium'>
				Reschedule Appointment
			</div>
		</div>
	);
};

export default ReschedBtn;
