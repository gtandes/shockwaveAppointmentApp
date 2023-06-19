'use client';

import React, { FC, useContext } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ModalContext } from '@/context/ModalContext';
import { NewApptBtnContext } from '@/context/NewApptBtnContext';
import { CalendarContext } from '@/context/CalendarContext';
import { AppointmentsContext } from '@/context/EditCancelContext';
import ScheduledApptArray from '@/smallComponents/ScheduledApptArray';
import { ReschedModalContext } from '@/context/ReschedFormModalContext';

interface EditCancelApptFormProps {}

const EditCancelApptForm: FC<EditCancelApptFormProps> = ({}) => {
	const { handleCloseModal } = useContext(ModalContext);
	const { handleCloseNewAppt } = useContext(NewApptBtnContext);
	const { handleCloseCalendar } = useContext(CalendarContext);
	const { handleCloseAppointments } = useContext(AppointmentsContext);
	const { closeReschedModal } = useContext(ReschedModalContext);

	const onClose = () => {
		handleCloseModal();
		handleCloseNewAppt();
		handleCloseCalendar();
		handleCloseAppointments();
		closeReschedModal();
	};

	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='w-[600px] overflow-hidden bg-white rounded-lg shadow-lg font-urbanist py-6'>
				<div className='h-full w-[600px] px-5'>
					<h2>Existing Appointments</h2>
					<ScheduledApptArray onClose={onClose} />
				</div>
			</div>

			<HighlightOffIcon
				sx={{ m: -5, width: 30, height: 30, cursor: 'pointer' }}
				onClick={onClose}
			/>
		</div>
	);
};

export default EditCancelApptForm;
