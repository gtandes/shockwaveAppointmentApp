'use client';

import { LeftSideNavContext } from '@/context/LeftSidebarContext';
import LogoutBtn from '@/smallComponents/LogoutBtn';
import NotificationsBtn from '@/smallComponents/NotificationsBtn';
import ProfileDropdown from '@/smallComponents/ProfileDropdown';
import Searchbar from '@/smallComponents/Searchbar';
import SettingsBtn from '@/smallComponents/SettingsBtn';
import { FC, useContext } from 'react';

interface TopBarProps {}

const TopBar: FC<TopBarProps> = ({}) => {
	const { unFold } = useContext(LeftSideNavContext);

	return (
		<div
			className={`self-stretch box-border h-[7.25rem] flex flex-row p-[2.5rem] items-center  gap-[2.5rem] z-[0] text-left text-[1rem] text-gray font-urbanist border-b-[1px] border-solid border-lightgray ${
				unFold
					? 'w-[105rem] justify-start'
					: 'w-[112.5rem] justify-between absolute left-[-120px]'
			}`}>
			<Searchbar />
			<div className='flex flex-row items-start justify-start gap-[0.75rem] text-gray-gray-100'>
				<ProfileDropdown />
				<NotificationsBtn />
				<SettingsBtn />
				<LogoutBtn />
			</div>
		</div>
	);
};

export default TopBar;
