'use client';

import { ModalContext } from '@/context/ModalContext';
import { FC, useContext } from 'react';

interface ReschedBtnProps {}

const ReschedBtn: FC<ReschedBtnProps> = ({}) => {
	const { handleOpenModal } = useContext(ModalContext);

	return (
		<div
			className='cursor-pointer self-stretch rounded-xl bg-orangered flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-center text-left text-[1rem] text-white font-urbanist'
			onClick={handleOpenModal}>
			<div className='relative tracking-[0.02em] font-medium'>
				Reschedule Appointment
			</div>
		</div>
	);
};

export default ReschedBtn;
