'use client';

import Image from 'next/image';
import {
	FC,
	JSXElementConstructor,
	Key,
	PromiseLikeOfReactNode,
	ReactElement,
	ReactFragment,
	ReactPortal,
	useContext,
	useState,
} from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { FormContext } from '@/context/FormContext';
import { supabase } from '@/api/createClient';
import { AppointmentsContext } from '@/context/EditCancelContext';
import { ReschedModalContext } from '@/context/ReschedFormModalContext';
import { ModalContext } from '@/context/ModalContext';

export interface ApptType {
	id: Key | null | undefined;
	petName:
		| string
		| number
		| boolean
		| ReactElement<any, string | JSXElementConstructor<any>>
		| ReactFragment
		| ReactPortal
		| PromiseLikeOfReactNode
		| null
		| undefined;
	service:
		| string
		| number
		| boolean
		| ReactElement<any, string | JSXElementConstructor<any>>
		| ReactFragment
		| ReactPortal
		| PromiseLikeOfReactNode
		| null
		| undefined;
	date:
		| string
		| number
		| boolean
		| ReactElement<any, string | JSXElementConstructor<any>>
		| ReactFragment
		| ReactPortal
		| PromiseLikeOfReactNode
		| null
		| undefined;
	time:
		| string
		| number
		| boolean
		| ReactElement<any, string | JSXElementConstructor<any>>
		| ReactFragment
		| ReactPortal
		| PromiseLikeOfReactNode
		| null
		| undefined;
	endTime:
		| string
		| number
		| boolean
		| ReactElement<any, string | JSXElementConstructor<any>>
		| ReactFragment
		| ReactPortal
		| PromiseLikeOfReactNode
		| null
		| undefined;
	name:
		| string
		| number
		| boolean
		| ReactElement<any, string | JSXElementConstructor<any>>
		| ReactFragment
		| ReactPortal
		| PromiseLikeOfReactNode
		| null
		| undefined;
}

interface ScheduledApptArrayProps {
	onClose: () => void;
}

const ScheduledApptArray: FC<ScheduledApptArrayProps> = ({ onClose }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const { allAppointments, setallAppointments } = useContext(FormContext);
	const { openReschedModal } = useContext(ReschedModalContext);
	const { idOfExistingApptToEdit, setidOfExistingApptToEdit } =
		useContext(AppointmentsContext);

	const { handleOpenModal } = useContext(ModalContext);

	const open = Boolean(anchorEl);

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClick = (event: { currentTarget: any }) => {
		setAnchorEl(event.currentTarget);
	};

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

	const deleteAppt = async (userId: any) => {
		const { data, error } = await supabase
			.from('ShockwaveApptFormDetails')
			.delete()
			.eq('id', userId);

		fetchApptDetails();

		if (error) {
			console.log(error);
		}

		if (data) {
			console.log(data);
		}
	};

	return (
		<>
			{allAppointments.map((appt: ApptType, index: number) => (
				<div
					key={appt.id}
					// id={appointmentID++}
					onClick={() => {
						setidOfExistingApptToEdit(appt.id);
						console.log(idOfExistingApptToEdit);
						fetchApptDetails();
					}}
					className={`mb-4 rounded-xl box-border w-[525px] flex flex-row p-[1.25rem] items-center text-left text-[1rem] text-gray-gray-100 font-urbanist border-[1px] border-solid ${
						index % 2 == 0
							? 'border-blueviolet [background:linear-gradient(rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0.8)),_#9747ff]'
							: 'border-coral [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#ff9447]'
					}`}>
					<div className='flex flex-row items-start justify-between flex-1'>
						<div className='flex flex-row items-start justify-start gap-[0.75rem]'>
							<div
								className={`rounded-17xl  w-[2.25rem] h-[2.25rem] flex flex-row p-[0.63rem] box-border items-center justify-center ${
									index % 2 == 0
										? ' [background:linear-gradient(rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0.8)),_#9747ff]'
										: ' [[background:linear-gradient(rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0.8)),_#ff9447]'
								}`}>
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
										{appt.petName}
										{`'s `} {appt.service}
									</b>

									<div className='relative text-[0.75rem] tracking-[0.02em] font-medium'>
										{appt.date} at {appt.time} until {appt.endTime}
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
										{appt.name}
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
							onClose={() => {
								handleClose();
								// setidOfExistingApptToEdit(appt.id);
							}}
							MenuListProps={{
								'aria-labelledby': 'basic-button',
							}}>
							<MenuItem
								onClick={() => {
									onClose();
									openReschedModal();
									handleOpenModal();
									console.log(idOfExistingApptToEdit);

									handleClose();
								}}>
								Edit
							</MenuItem>

							<MenuItem
								onClick={() => {
									handleClose();
									deleteAppt(idOfExistingApptToEdit);
								}}>
								Delete
							</MenuItem>
						</Menu>
					</div>
				</div>
			))}
		</>
	);
};

export default ScheduledApptArray;
