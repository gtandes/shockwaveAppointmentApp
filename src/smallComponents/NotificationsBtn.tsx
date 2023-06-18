'use client';

import Image from 'next/image';
import { FC } from 'react';

interface NotificationsBtnProps {}

const NotificationsBtn: FC<NotificationsBtnProps> = ({}) => {
	return (
		<div className='rounded-17xl bg-whitesmoke w-[2.25rem] h-[2.25rem] flex flex-row p-[0.63rem] box-border items-center justify-center'>
			<Image
				width={20}
				height={20}
				className='relative overflow-hidden shrink-0'
				alt=''
				src='/ic-bell.svg'
			/>
		</div>
	);
};

export default NotificationsBtn;
