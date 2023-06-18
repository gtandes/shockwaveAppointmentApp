'use client';

import { LeftSideNavContext } from '@/context/LeftSidebarContext';
import { TextField } from '@mui/material';
import Image from 'next/image';
import { FC, SetStateAction, useContext, useState } from 'react';

interface SearchbarProps {}

const Searchbar: FC<SearchbarProps> = ({}) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleChange = (event: {
		target: { value: SetStateAction<string> };
	}) => {
		setSearchTerm(event.target.value);
	};

	const { unFold } = useContext(LeftSideNavContext);

	return (
		<>
			<input
				placeholder='Search'
				id='search'
				type='search'
				value={searchTerm}
				onChange={handleChange}
				className={`flex-auto rounded-xl [background:linear-gradient(rgba(255,_255,_255,_0.7),_rgba(255,_255,_255,_0.7)),_#d8d3cc] flex flex-row py-[0.75rem] px-[1.25rem] items-start justify-between text-left text-[1rem] text-gray font-urbanist ${
					unFold ? '' : ''
				}`}
			/>

			<Image
				className='absolute cursor-pointer right-96'
				alt='search-icon'
				width={20}
				height={20}
				src='/ic-searchlg.svg'
			/>
		</>
	);
};

export default Searchbar;
