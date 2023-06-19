'use client';

import { FC, useContext } from 'react';
import TopBar from './TopBar';
import LeftSidebar from './LeftSidebar';
import SetAppointmentState3 from './SetAppointmentState3';
import HourTableState3 from './HourTableState3';
import MeetingState3 from '@/smallComponents/MeetingState3';
import VaxxState3 from '@/smallComponents/VaxxState3';
import { LeftSideNavContext } from '@/context/LeftSidebarContext';
import Image from 'next/image';
import RightSidebar from './RightSidebar';
import { RightSideBarContext } from '@/context/RightSidebarContext';
import { modalStyle } from '@/lib/muiStyles';
import { Box, Modal } from '@mui/material';
import { ModalContext } from '@/context/ModalContext';
import CalendarHook from '../FullCalendar';
import { NewApptBtnContext } from '@/context/NewApptBtnContext';
import { CalendarContext } from '@/context/CalendarContext';
import { AppointmentsContext } from '@/context/EditCancelContext';
import RegForm2 from '../RegForm2';
import EditCancelApptForm from '../EditCancelApptForm';
import ReschedForm from '../ReschedForm';
import { ReschedModalContext } from '@/context/ReschedFormModalContext';

interface AppointmentPageProps {}

const AppointmentPage: FC<AppointmentPageProps> = ({}) => {
	const { toggleFold, unFold } = useContext(LeftSideNavContext);
	const { isRightSideBarOpen } = useContext(RightSideBarContext);
	const { openModal, handleCloseModal } = useContext(ModalContext);
	const { isNewApptBtnClicked, handleCloseNewAppt } =
		useContext(NewApptBtnContext);

	const { isCalendarClicked, handleCloseCalendar } =
		useContext(CalendarContext);

	const { openAppointments, handleCloseAppointments } =
		useContext(AppointmentsContext);

	const { isReschedModalOpen, closeReschedModal } =
		useContext(ReschedModalContext);

	const onClose = () => {
		handleCloseModal();
		handleCloseNewAppt();
		handleCloseCalendar();
		handleCloseAppointments();
		closeReschedModal();
	};

	return (
		<div className='relative bg-white w-full h-[67.5rem] overflow-hidden text-left text-[1rem] text-gray-gray-100 font-urbanist'>
			<div className='absolute top-[0rem] left-[15rem] self-stretch min-w-[105rem] w-[105rem] max-w-full h-[71.56rem]'>
				<TopBar />

				<div className='absolute top-[7.25rem] left-[0rem] flex flex-row items-start justify-start'>
					<div
						className={`relative flex flex-col items-start
             ${
								unFold
									? 'w-[1280px] justify-start'
									: isRightSideBarOpen
									? 'w-[1400px] justify-between absolute left-[-120px] right-[-400px] animate-fadeIn'
									: 'w-[1800px] justify-between absolute left-[-120px] right-[0px] animate-fadeIn'
							}

              ${
								!isRightSideBarOpen &&
								unFold &&
								'w-[1700px] justify-between absolute left-[0px] right-[0px] animate-fadeIn'
							}
                  
            `}>
						<SetAppointmentState3 />
						<HourTableState3 />
					</div>
				</div>

				<MeetingState3 />
				<VaxxState3 />
			</div>

			<div className='absolute top-[0rem] left-[0rem] bg-gray-gray-100 h-[67.5rem] flex flex-col items-start justify-start'>
				<LeftSidebar />
				<div className='my-0 mx-[!important] absolute top-[calc(50%_-_18px)] right-[-1.12rem] rounded-lg [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#1c1c1e] flex flex-row p-[0.5rem] items-start justify-start z-[2]'>
					<Image
						className={`relative overflow-hidden cursor-pointer shrink-0 ${
							unFold ? '' : 'rotate-180'
						}`}
						alt='toggle left sidebar'
						width={20}
						height={20}
						src='/ic-double-chevron.svg'
						onClick={toggleFold}
					/>
				</div>
			</div>

			<RightSidebar />

			{openModal && (
				<Box sx={modalStyle}>
					<Modal
						sx={{ backdropFilter: 'blur(3px)' }}
						open={openModal}
						onClose={onClose}
						aria-labelledby='calendar-modal-title'
						aria-describedby='calendar-modal-description'>
						<>
							{isNewApptBtnClicked && <RegForm2 />}
							{isReschedModalOpen && <ReschedForm />}
							{isCalendarClicked && <CalendarHook />}
							{openAppointments && <EditCancelApptForm />}
						</>
					</Modal>
				</Box>
			)}
		</div>
	);
};

export default AppointmentPage;
