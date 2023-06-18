'use client';

import Image from 'next/image';
import { FC } from 'react';

interface ProfileDropdownProps {}

const ProfileDropdown: FC<ProfileDropdownProps> = ({}) => {
	return (
		<div className='flex flex-row items-center justify-start gap-[0.75rem] text-left text-[1rem] text-gray-gray-100 font-urbanist'>
			<Image
				width={36}
				height={36}
				className='relative object-cover overflow-hidden rounded-17xl shrink-0'
				alt=''
				src='/frame-9@2x.png'
			/>
			<div className='flex flex-row items-start justify-start gap-[0.25rem]'>
				<div className='relative tracking-[0.02em] font-semibold'>Jane Dee</div>
				<Image
					width={20}
					height={20}
					className='relative overflow-hidden shrink-0'
					alt=''
					src='/ic-d-chevron.svg'
				/>
			</div>
		</div>
	);
};

export default ProfileDropdown;
