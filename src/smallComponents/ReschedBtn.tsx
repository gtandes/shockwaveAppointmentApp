'use client';

import { AppointmentsContext } from '@/context/EditCancelContext';
import { ModalContext } from '@/context/ModalContext';
import { FC, useContext } from 'react';

interface ReschedBtnProps {}

const ReschedBtn: FC<ReschedBtnProps> = ({}) => {
	const { handleOpenAppointments } = useContext(AppointmentsContext);
	const { handleOpenModal } = useContext(ModalContext);
	const handleClick = () => {
		handleOpenModal();
		handleOpenAppointments();
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
