'use client';

import { LeftSideNavContext } from '@/context/LeftSidebarContext';
import Image from 'next/image';
import { FC, useContext } from 'react';

interface SearchbarProps {}

const Searchbar: FC<SearchbarProps> = ({}) => {
	const { unFold } = useContext(LeftSideNavContext);

	return (
		<div
			className={` flex-auto rounded-xl [background:linear-gradient(rgba(255,_255,_255,_0.7),_rgba(255,_255,_255,_0.7)),_#d8d3cc] flex flex-row py-[0.75rem] px-[1.25rem] items-start justify-between text-left text-[1rem] text-gray font-urbanist ${
				unFold ? '' : ''
			}`}>
			<div className='relative tracking-[0.02em] font-medium'>Search</div>
			<Image
				className='relative'
				alt='search-icon'
				width={20}
				height={20}
				src='/ic-searchlg.svg'
			/>
		</div>
	);
};

export default Searchbar;
