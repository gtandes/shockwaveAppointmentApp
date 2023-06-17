'use client';

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { Button, Menu, MenuItem } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { FormContext } from '@/context/FormContext';
import { ModalContext } from '@/context/ModalContext';
import { NewApptBtnContext } from '@/context/NewApptBtnContext';
import { CalendarContext } from '@/context/CalendarContext';
import { AppointmentsContext } from '@/context/EditCancelContext';

const EditCancelApptForm = () => {
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
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleEdit = (i) => {
		setname(allData[i]);
		setEditIndex(i);
	};

	const handleDelete = (index) => {
		allData.splice(index, 1);
		setAllData([...allData]);
	};

	const handleUpdate = () => {
		allData.splice(editIndex, 1);
		setAllData([...allData]);
		setname('');
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const scheduledAppts = (
		// allData.map((data, index) => (
		<div
			// key={index}
			className={`rounded-xl [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#ff9447] box-border w-[67.5rem] flex flex-row p-[1.25rem] items-center text-left text-[1rem] text-gray-gray-100 font-urbanist border-[1px] border-solid border-coral`}>
			<div className='flex flex-row items-start justify-between flex-1'>
				<div className='flex flex-row items-start justify-start gap-[0.75rem]'>
					<div className='rounded-17xl [background:linear-gradient(rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0.8)),_#ff9447] w-[2.25rem] h-[2.25rem] flex flex-row p-[0.63rem] box-border items-center justify-center'>
						<Image
							width={20}
							height={20}
							className='relative overflow-hidden shrink-0'
							alt=''
							src='/ic-parkoutlineinjection.svg'
						/>
					</div>
					<div className='flex flex-col items-start justify-start gap-[0.75rem]'>
						<div className='flex flex-col items-start justify-start gap-[0.5rem]'>
							<b className='relative tracking-[0.02em]'>
								{localStorage.getItem('petName')
									? localStorage.getItem('petName')
									: 'NA'}
								’s{' '}
								{localStorage.getItem('service')
									? localStorage.getItem('service')
									: 'NA'}
							</b>

							<div className='relative text-[0.75rem] tracking-[0.02em] font-medium'>
								{localStorage.getItem('date')
									? localStorage.getItem('date')
									: 'NA'}{' '}
								at{' '}
								{localStorage.getItem('time')
									? localStorage.getItem('time')
									: 'NA'}
								-{' '}
								{localStorage.getItem('endTime')
									? localStorage.getItem('endTime')
									: 'NA'}
							</div>
						</div>
						<div className='flex flex-row items-center justify-start gap-[0.5rem] text-[0.75rem]'>
							<Image
								width={16}
								height={16}
								className='relative overflow-hidden shrink-0'
								alt=''
								src='/ic-user1.svg'
							/>

							<div className='relative tracking-[0.02em] font-medium'>
								{localStorage.getItem('name')
									? localStorage.getItem('name')
									: 'NA'}
								,
								{localStorage.getItem('veterinarian')
									? localStorage.getItem('veterinarian')
									: 'NA'}
							</div>
						</div>
					</div>
				</div>

				<Button
					id='basic-button'
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}>
					<Image
						width={20}
						height={20}
						className='relative overflow-hidden shrink-0'
						alt=''
						src='/ic-dotsvertical.svg'
					/>
				</Button>
				<Menu
					id='basic-menu'
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}>
					<MenuItem onClick={handleClose}>Edit</MenuItem>
					<MenuItem onClick={handleDelete}>Delete</MenuItem>
				</Menu>
			</div>
		</div>
	);
	// ));

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
			<div className='w-[1200px] overflow-hidden bg-white rounded-lg shadow-lg font-urbanist py-6'>
				<div className='h-full w-[600px] px-5'>
					<h2>Existing Appointments</h2>
					{scheduledAppts}
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
