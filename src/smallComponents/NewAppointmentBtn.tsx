'use client';

import { ModalContext } from '@/context/ModalContext';
import { NewApptBtnContext } from '@/context/NewApptBtnContext';
import { FC, useContext } from 'react';

interface NewAppointmentBtnProps {}

const NewAppointmentBtn: FC<NewAppointmentBtnProps> = ({}) => {
	const { handleOpenModal } = useContext(ModalContext);
	const { handleisNewApptBtnClicked } = useContext(NewApptBtnContext);

	const openNewApptForm = () => {
		handleOpenModal();
		handleisNewApptBtnClicked();
	};

	return (
		<div
			className='cursor-pointer rounded-xl bg-orangered flex flex-row py-[0.75rem] px-[1.25rem] items-start justify-start text-left text-[1rem] text-white font-urbanist'
			onClick={openNewApptForm}>
			<div className='relative tracking-[0.02em] font-medium'>
				New Appointment
			</div>
		</div>
	);
};

export default NewAppointmentBtn;
