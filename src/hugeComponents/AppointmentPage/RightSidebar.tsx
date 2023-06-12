'use client';

import { RightSideBarContext } from '@/context/RightSidebarContext';
import CancelApptBtn from '@/smallComponents/CancelApptBtn';
import ClientDetails from '@/smallComponents/ClientDetails';
import ClinicDetails from '@/smallComponents/ClinicDetails';
import ContactInfo from '@/smallComponents/ContactInfo';
import PetDetails from '@/smallComponents/PetDetails';
import ReschedBtn from '@/smallComponents/ReschedBtn';
import { FC, useContext } from 'react';

interface RightSidebarProps {}

const RightSidebar: FC<RightSidebarProps> = ({}) => {
	const { isRightSideBarOpen } = useContext(RightSideBarContext);
	return (
		<div
			className={`absolute top-[7.5rem] right-0 bottom-0 h-[60.25rem] overflow-y-auto shrink-0 text-left text-[1rem] text-darkgray font-urbanist z-1 ${
				isRightSideBarOpen ? 'w-[400px] animate-fadeIn' : 'w-0'
			}`}>
			{/* boxes */}
			<div className='absolute top-[0rem] left-[0rem] bg-white box-border w-[25rem] flex flex-col py-[1.25rem] px-[0rem] items-center justify-start gap-[1.25rem] border-b-[1px] border-solid border-lightgray'>
				<ClientDetails />
				<div className='self-stretch relative box-border h-[0.06rem] border-t-[1px] border-solid border-lightgray' />
				<ContactInfo />
				<div className='self-stretch relative box-border h-[0.06rem] border-t-[1px] border-solid border-lightgray' />
				<ClinicDetails />
				<div className='self-stretch relative box-border h-[0.06rem] border-t-[1px] border-solid border-lightgray' />
				<PetDetails />
				<div className='self-stretch relative box-border h-[0.06rem] border-t-[1px] border-solid border-lightgray' />

				{/* btns */}
				<div className='self-stretch flex flex-col py-[0rem] px-[2.5rem] items-start justify-start text-white'>
					<ReschedBtn />
				</div>
				<div className='self-stretch flex flex-col py-[0rem] px-[2.5rem] items-start justify-start'>
					<CancelApptBtn />
				</div>
			</div>
		</div>
	);
};

export default RightSidebar;
