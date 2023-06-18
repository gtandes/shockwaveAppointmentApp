'use client';

import Image from 'next/image';
import { FC } from 'react';

interface SettingsBtnProps {}

const SettingsBtn: FC<SettingsBtnProps> = ({}) => {
	return (
		<div className='rounded-17xl bg-whitesmoke w-[2.25rem] h-[2.25rem] flex flex-row p-[0.63rem] box-border items-center justify-center'>
			<Image
				width={20}
				height={20}
				className='relative overflow-hidden shrink-0'
				alt=''
				src='/ic-settings.svg'
			/>
		</div>
	);
};

export default SettingsBtn;
