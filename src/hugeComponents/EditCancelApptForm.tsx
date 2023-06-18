'use client';

import React, { FC, useContext, useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { FormContext } from '@/context/FormContext';
import { ModalContext } from '@/context/ModalContext';
import { NewApptBtnContext } from '@/context/NewApptBtnContext';
import { CalendarContext } from '@/context/CalendarContext';
import { AppointmentsContext } from '@/context/EditCancelContext';
import ScheduledApptArray from '@/smallComponents/ScheduledApptArray';

interface EditCancelApptFormProps {}

const EditCancelApptForm: FC<EditCancelApptFormProps> = ({}) => {
	const {
		name,
		setname,
		petName,
		setpetName,
		breed,
		setbreed,
		age,
		setage,
		gender,
		setgender,
		date,
		setdate,
		time,
		settime,
		endTime,
		setendTime,
		service,
		setService,
		img,
		setimg,
		veterinarian,
		setVeterinarian,
		allData,
		setAllData,
	} = useContext(FormContext);
	const [editIndex, setEditIndex] = useState();

	// const handleEdit = (i) => {
	// 	setname(allData[i]);
	// 	setEditIndex(i);
	// };

	// const handleUpdate = () => {
	// 	allData.splice(editIndex, 1);
	// 	setAllData([...allData]);
	// 	setname('');
	// };

	const { handleCloseModal } = useContext(ModalContext);
	const { handleCloseNewAppt } = useContext(NewApptBtnContext);
	const { handleCloseCalendar } = useContext(CalendarContext);
	const { handleCloseAppointments } = useContext(AppointmentsContext);

	const onClose = () => {
		handleCloseModal();
		handleCloseNewAppt();
		handleCloseCalendar();
		handleCloseAppointments();
	};

	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='w-[600px] overflow-hidden bg-white rounded-lg shadow-lg font-urbanist py-6'>
				<div className='h-full w-[600px] px-5'>
					<h2>Existing Appointments</h2>
					<ScheduledApptArray />
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
