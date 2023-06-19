'use client';

import { supabase } from '@/api/createClient';
import { AppointmentsContext } from '@/context/EditCancelContext';
import { FormContext } from '@/context/FormContext';
import { ModalContext } from '@/context/ModalContext';
import { FC, useContext } from 'react';

interface CancelApptBtnProps {}

const CancelApptBtn: FC<CancelApptBtnProps> = ({}) => {
	const { handleOpenAppointments } = useContext(AppointmentsContext);
	const { handleOpenModal } = useContext(ModalContext);
	const { allAppointments, setallAppointments } = useContext(FormContext);

	const fetchApptDetails = async () => {
		try {
			const { data } = await supabase
				.from('ShockwaveApptFormDetails')
				.select('*');

			if (data) setallAppointments(data);

			console.log(allAppointments);
		} catch (error) {
			console.log(error);
		}
	};

	const handleClick = () => {
		handleOpenModal();
		handleOpenAppointments();
		fetchApptDetails();
	};

	return (
		<div
			className='cursor-pointer self-stretch rounded-xl bg-white flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-center text-left text-[1rem] text-darkgray font-urbanist border-[1px] border-solid border-lightgray'
			onClick={handleClick}>
			<div className='relative tracking-[0.02em] font-medium'>
				Cancel Appointment
			</div>
		</div>
	);
};

export default CancelApptBtn;
