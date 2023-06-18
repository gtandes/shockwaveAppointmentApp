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

interface ApptType {
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

interface ScheduledApptArrayProps {}

const ScheduledApptArray: FC<ScheduledApptArrayProps> = ({}) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const { allAppointments, setallAppointments } = useContext(FormContext);
	const open = Boolean(anchorEl);

	// const handleDelete = (index) => {
	// 	allData.splice(index, 1);
	// 	setAllData([...allData]);
	// };

	const handleClose = () => {
		setAnchorEl(null);
		// deleteAppt();
	};

	const handleClick = (event: { currentTarget: any }) => {
		setAnchorEl(event.currentTarget);
	};

	const fetchApptDetails = async () => {
		const { data } = await supabase
			.from('ShockwaveApptFormDetails')
			.select('*');

		setallAppointments(data);

		console.log(data);
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
			{allAppointments.map((appt: ApptType) => (
				<div
					key={appt.id}
					onClick={fetchApptDetails}
					className={`mb-4 rounded-xl [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#ff9447] box-border w-[525px] flex flex-row p-[1.25rem] items-center text-left text-[1rem] text-gray-gray-100 font-urbanist border-[1px] border-solid border-coral`}>
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
										{/* {localStorage.getItem('petName')
									? localStorage.getItem('petName')
									: 'NA'}
								’s{' '}

								{localStorage.getItem('service')
									? localStorage.getItem('service')
									: 'NA'} */}
										{appt.petName}
										{`'s `} {appt.service}
									</b>

									<div className='relative text-[0.75rem] tracking-[0.02em] font-medium'>
										{/* {localStorage.getItem('date')
									? localStorage.getItem('date')
									: 'NA'}{' '}
								at{' '}
								{localStorage.getItem('time')
									? localStorage.getItem('time')
									: 'NA'}
								-{' '}
								{localStorage.getItem('endTime')
									? localStorage.getItem('endTime')
									: 'NA'} */}
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
										{/* {localStorage.getItem('name')
									? localStorage.getItem('name')
									: 'NA'}
								,
								{localStorage.getItem('veterinarian')
									? localStorage.getItem('veterinarian')
									: 'NA'} */}
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
							onClose={handleClose}
							MenuListProps={{
								'aria-labelledby': 'basic-button',
							}}>
							<MenuItem onClick={handleClose}>Edit</MenuItem>
							<MenuItem
								onClick={() => {
									handleClose();
									deleteAppt(appt.id);
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
