'use client';

import { FC } from 'react';

interface NotificationsBtnProps {}

const NotificationsBtn: FC<NotificationsBtnProps> = ({}) => {
	return (
		<div className='rounded-17xl bg-whitesmoke w-[2.25rem] h-[2.25rem] flex flex-row p-[0.63rem] box-border items-center justify-center'>
			<img
				className='relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0'
				alt=''
				src='/ic-bell.svg'
			/>
		</div>
	);
};

export default NotificationsBtn;
