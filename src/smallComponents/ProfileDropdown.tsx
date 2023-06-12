'use client';

import { FC } from 'react';

interface ProfileDropdownProps {}

const ProfileDropdown: FC<ProfileDropdownProps> = ({}) => {
	return (
		<div className='flex flex-row items-center justify-start gap-[0.75rem] text-left text-[1rem] text-gray-gray-100 font-urbanist'>
			<img
				className='relative rounded-17xl w-[2.25rem] h-[2.25rem] overflow-hidden shrink-0 object-cover'
				alt=''
				src='/frame-9@2x.png'
			/>
			<div className='flex flex-row items-start justify-start gap-[0.25rem]'>
				<div className='relative tracking-[0.02em] font-semibold'>Jane Dee</div>
				<img
					className='relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0'
					alt=''
					src='/ic-d-chevron.svg'
				/>
			</div>
		</div>
	);
};

export default ProfileDropdown;
