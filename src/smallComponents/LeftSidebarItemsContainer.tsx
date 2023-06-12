'use client';

import { LeftSideNavContext } from '@/context/LeftSidebarContext';
import Image from 'next/image';
import { FC, useContext } from 'react';

interface LeftSidebarItemsContainerProps {}

const LeftSidebarItemsContainer: FC<LeftSidebarItemsContainerProps> = ({}) => {
	const buttonData = [
		{ title: 'Home', icon: 'home02' },
		{ title: 'Appointments', icon: 'appointments' },
		{ title: 'Messages', icon: 'messages' },
		{ title: 'Contacts', icon: 'contacts' },
		{ title: 'Data Analytics', icon: 'data-analytics' },
		{ title: 'Subscription', icon: 'subscription' },
		{ title: 'Help Center', icon: 'help-center' },
		{ title: 'Settings', icon: 'settings1' },
	];

	const { unFold } = useContext(LeftSideNavContext);

	const leftSideBarBtns = buttonData.map((btn) => {
		return (
			<button
				key={btn.icon}
				className={`font-urbanist text-base text-white focus:border-r-4 focus:border-orangered  hover:border-r-4 hover:border-orangered hover:text-orangered focus:text-orangered hover:fill-orangered hover:bg-gray-gray-80/5 cursor-pointer bg-gray-gray-100 flex flex-row py-[1.25rem] px-[2.5rem] box-border items-center ${
					unFold
						? 'justify-start animate-leftSidebarUnfold w-[15rem]'
						: 'justify-center animate-leftSidebarFold w-[7.5rem]'
				}`}>
				<div
					className={`flex flex-row items-center hover:fill-orangered ${
						unFold ? 'justify-start' : 'justify-center'
					} gap-[0.75rem]`}>
					<Image
						className='relative overflow-hidden shrink-0'
						alt={btn.title}
						width={20}
						height={20}
						src={`/ic-${btn.icon}.svg`}
						// fill={true}
					/>

					{unFold && (
						<div
							className={`relative tracking-[0.02em] font-medium ${
								unFold ? 'animate-fadeIn' : 'animate-fadeOut'
							}`}>
							{btn.title}
						</div>
					)}
				</div>
			</button>
		);
	});

	return (
		<div className='flex-1 overflow-y-auto flex flex-col items-start justify-start text-left text-[1rem] text-white font-urbanist'>
			{leftSideBarBtns}
		</div>
	);
};

export default LeftSidebarItemsContainer;
