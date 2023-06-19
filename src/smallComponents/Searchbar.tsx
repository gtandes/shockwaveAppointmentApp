'use client';

import { supabase } from '@/api/createClient';
import { AppointmentsContext } from '@/context/EditCancelContext';
import { LeftSideNavContext } from '@/context/LeftSidebarContext';
import { ModalContext } from '@/context/ModalContext';
import Image from 'next/image';
import { FC, SetStateAction, useContext, useState } from 'react';

interface SearchbarProps {}

const Searchbar: FC<SearchbarProps> = ({}) => {
	const [searchTerm, setSearchTerm] = useState('');
	const { handleOpenModal } = useContext(ModalContext);
	const { handleOpenAppointments } = useContext(AppointmentsContext);

	const handleChange = (event: {
		target: { value: SetStateAction<string> };
	}) => {
		setSearchTerm(event.target.value);
	};

	const { unFold } = useContext(LeftSideNavContext);

	const fetchExistingAppts = async () => {
		try {
			const { data, error } = await supabase
				.from('ShockwaveApptFormDetails')
				.select('*');
			// .eq('id', idOfExistingApptToEdit);

			// setallAppointments(data);

			console.log(data);
			console.log('====================================');
			console.log(error);
			console.log('====================================');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<input
				placeholder='Search'
				id='search'
				type='search'
				value={searchTerm}
				onChange={handleChange}
				onClick={() => {
					handleOpenModal();
					handleOpenAppointments();
					fetchExistingAppts();
				}}
				className={`flex-auto rounded-xl [background:linear-gradient(rgba(255,_255,_255,_0.7),_rgba(255,_255,_255,_0.7)),_#d8d3cc] flex flex-row py-[0.75rem] px-[1.25rem] items-start justify-between text-left text-[1rem] text-gray font-urbanist ${
					unFold ? '' : ''
				}`}
			/>

			<div
				className='absolute cursor-pointer right-96'
				onClick={() => {
					handleOpenModal();
					handleOpenAppointments();
					fetchExistingAppts();
				}}>
				<Image
					alt='search-icon'
					width={20}
					height={20}
					src='/ic-searchlg.svg'
				/>
			</div>
		</>
	);
};

export default Searchbar;
