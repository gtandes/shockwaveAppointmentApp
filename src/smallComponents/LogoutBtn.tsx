'use client';

import { RightSideBarContext } from '@/context/RightSidebarContext';
import Image from 'next/image';
import { FC, useContext } from 'react';

interface LogoutBtnProps {}

const LogoutBtn: FC<LogoutBtnProps> = ({}) => {
	const { isRightSideBarOpen, toggleRightSidebar } =
		useContext(RightSideBarContext);

	return (
		<button
			aria-label='logout'
			type='button'
			className={`cursor-pointer rounded-17xl bg-whitesmoke w-[2.25rem] h-[2.25rem] flex flex-row p-[0.63rem] box-border items-center justify-center hover:bg-coral active:text-coral ${
				!isRightSideBarOpen && 'rotate-180'
			}`}
			onClick={toggleRightSidebar}>
			<Image
				width={20}
				height={20}
				className='relative overflow-hidden shrink-0'
				alt=''
				src='/ic-sign-out.svg'
			/>
		</button>
	);
};

export default LogoutBtn;
