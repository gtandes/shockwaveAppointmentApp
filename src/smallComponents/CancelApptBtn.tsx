'use client';

import { AppointmentsContext } from '@/context/EditCancelContext';
import { ModalContext } from '@/context/ModalContext';
import { FC, useContext } from 'react';

interface CancelApptBtnProps {}

const CancelApptBtn: FC<CancelApptBtnProps> = ({}) => {
	const { handleOpenAppointments } = useContext(AppointmentsContext);
	const { handleOpenModal } = useContext(ModalContext);
	const handleClick = () => {
		handleOpenModal();
		handleOpenAppointments();
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
