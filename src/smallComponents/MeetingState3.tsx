'use client';

import { LeftSideNavContext } from '@/context/LeftSidebarContext';
import { RightSideBarContext } from '@/context/RightSidebarContext';
import Image from 'next/image';
import { FC, useContext } from 'react';

interface MeetingState3Props {}

const MeetingState3: FC<MeetingState3Props> = ({}) => {
	const { unFold } = useContext(LeftSideNavContext);
	const { toggleRightSidebar, isRightSideBarOpen } =
		useContext(RightSideBarContext);

	return (
		<div
			className={`cursor-pointer absolute top-[35.69rem] left-[10rem] rounded-xl [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#9747ff] box-border h-[8.06rem] flex flex-row p-[1.25rem] items-center text-left text-[1rem] text-gray-gray-100 font-urbanist border-[1px] border-solid border-blueviolet
      
      ${
				unFold
					? 'w-[1080px] justify-start'
					: 'w-[1200px] justify-between absolute left-[50px]'
			}
      
      ${
				isRightSideBarOpen
					? 'w-[1080px] justify-start'
					: 'w-[1480px] justify-between absolute right-[-1680px]'
			}

      ${
				!unFold &&
				!isRightSideBarOpen &&
				'w-[1600px] justify-between absolute right-[-1680px]'
			}
      
      `}
			onClick={toggleRightSidebar}>
			<div className='flex flex-row items-start justify-between flex-1'>
				<div className='flex flex-row items-start justify-start gap-[0.75rem]'>
					<div className='rounded-17xl [background:linear-gradient(rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0.8)),_#9747ff] w-[2.25rem] h-[2.25rem] flex flex-row p-[0.63rem] box-border items-center justify-center'>
						<Image
							className='relative overflow-hidden shrink-0'
							width={20}
							height={20}
							alt='consultation'
							src='/ic-consultation.svg'
						/>
					</div>
					<div className='flex flex-col items-start justify-start gap-[0.75rem]'>
						<div className='flex flex-col items-start justify-start gap-[0.5rem]'>
							<b className='relative tracking-[0.02em]'>Meeting</b>
							<div className='relative text-[0.75rem] tracking-[0.02em] font-medium'>
								8:00 AM - 9:30 AM
							</div>
						</div>
						<div className='flex flex-row items-center justify-start gap-[0.5rem] text-[0.75rem]'>
							<Image
								className='relative overflow-hidden shrink-0'
								alt='user'
								width={20}
								height={20}
								src='/ic-user.svg'
							/>
							<div className='relative tracking-[0.02em] font-medium'>
								Chrissie Lee, Kurt Browne, Anthony dela Cruz
							</div>
						</div>
					</div>
				</div>

				<Image
					className='relative overflow-hidden shrink-0'
					width={20}
					height={20}
					alt='dots icon'
					src='/ic-dotsvertical.svg'
				/>
			</div>
		</div>
	);
};

export default MeetingState3;
