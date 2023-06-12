'use client';

import { LeftSideNavContext } from '@/context/LeftSidebarContext';
import { RightSideBarContext } from '@/context/RightSidebarContext';
import { FC, useContext } from 'react';

interface VaxxState3Props {}

const VaxxState3: FC<VaxxState3Props> = ({}) => {
	const { unFold } = useContext(LeftSideNavContext);
	const { toggleRightSidebar, isRightSideBarOpen } =
		useContext(RightSideBarContext);

	return (
		<div
			className={`cursor-pointer absolute top-[49.56rem] left-[10rem] rounded-xl [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#ff9447] box-border w-[67.5rem] flex flex-row p-[1.25rem] items-center text-left text-[1rem] text-gray-gray-100 font-urbanist border-[1px] border-solid border-coral ${
				unFold
					? 'w-[67.5rem] justify-start'
					: 'w-[75rem] justify-between absolute left-[50px]'
			}
      
        ${
					isRightSideBarOpen
						? 'w-[67.5rem] justify-start'
						: 'w-[92.5rem] justify-between absolute right-[-1680px]'
				}`}
			onClick={toggleRightSidebar}>
			<div className='flex flex-row items-start justify-between flex-1'>
				<div className='flex flex-row items-start justify-start gap-[0.75rem]'>
					<div className='rounded-17xl [background:linear-gradient(rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0.8)),_#ff9447] w-[2.25rem] h-[2.25rem] flex flex-row p-[0.63rem] box-border items-center justify-center'>
						<img
							className='relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0'
							alt=''
							src='/ic-parkoutlineinjection.svg'
						/>
					</div>
					<div className='flex flex-col items-start justify-start gap-[0.75rem]'>
						<div className='flex flex-col items-start justify-start gap-[0.5rem]'>
							<b className='relative tracking-[0.02em]'>
								Brownie’s Vaccination
							</b>
							<div className='relative text-[0.75rem] tracking-[0.02em] font-medium'>
								10:30 AM - 11:30 AM
							</div>
						</div>
						<div className='flex flex-row items-center justify-start gap-[0.5rem] text-[0.75rem]'>
							<img
								className='relative w-[1rem] h-[1rem] overflow-hidden shrink-0'
								alt=''
								src='/ic-user1.svg'
							/>
							<div className='relative tracking-[0.02em] font-medium'>
								John Doe
							</div>
						</div>
					</div>
				</div>
				<img
					className='relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0'
					alt=''
					src='/ic-dotsvertical.svg'
				/>
			</div>
		</div>
	);
};

export default VaxxState3;
