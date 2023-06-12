'use client';

import { FC, useContext } from 'react';
import { LeftSideNavContext } from '@/context/LeftSidebarContext';
import LeftSidebarItemsContainer from '@/smallComponents/LeftSidebarItemsContainer';
import Image from 'next/image';

interface LeftSidebarProps {}

const LeftSidebar: FC<LeftSidebarProps> = ({}) => {
	const { unFold } = useContext(LeftSideNavContext);

	return (
		<div
			className={`flex-1 flex flex-col py-[2.5rem] px-[0rem] items-center justify-start gap-[2.5rem] z-[0] text-left text-[1rem] text-orangered font-urbanist ${
				unFold
					? 'animate-leftSidebarUnfold w-[240px]'
					: 'animate-leftSidebarFold w-[120px]'
			}`}>
			<div className='self-stretch flex flex-col items-center justify-start gap-[2.5rem]'>
				<div className='flex flex-col py-[0rem] px-[2.5rem] items-start justify-start'>
					<div className='flex flex-row items-center justify-start gap-[0.75rem]'>
						<div className='flex flex-col items-start justify-start overflow-hidden'>
							<Image
								className='relative'
								alt='Appointment Website Logo'
								width={36}
								height={36}
								src='/vector.svg'
							/>
						</div>

						{unFold && (
							<b
								className={`relative tracking-[0.02em] ${
									unFold ? 'animate-fadeIn' : 'animate-fadeOut'
								}`}>
								LOREM
							</b>
						)}
					</div>
				</div>
				<div className='self-stretch relative box-border h-[0.06rem] border-t-[1px] border-solid border-gray-gray-80' />
			</div>

			<LeftSidebarItemsContainer />

			<div className='relative box-border w-[13.81rem] h-[0.06rem] border-t-[1px] border-solid border-gray-gray-80' />

			<div className='flex flex-col items-center justify-center gap-[0.75rem] text-[0.75rem]'>
				<div className='flex flex-col items-start justify-start overflow-hidden'>
					<Image
						className='relative'
						alt=''
						width={20}
						height={20}
						src='/vector1.svg'
					/>
				</div>
				<div className='relative tracking-[0.02em] font-medium bg-gray-gray-100 text-lorem-text'>
					© Lorem 2023
				</div>
			</div>
		</div>
	);
};

export default LeftSidebar;
