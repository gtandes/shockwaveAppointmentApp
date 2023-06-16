'use client';

import { FC, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import dayjs from 'dayjs';

interface MUITimePickerProps {}

const MUITimePicker: FC<MUITimePickerProps> = ({}) => {
	const fiveAM = dayjs().set('hour', 5).startOf('hour');
	const onePM = dayjs().set('hour', 13).startOf('hour');
	const [startTime, setstartTime] = useState('');

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<StaticTimePicker
				orientation='portrait'
				defaultValue={fiveAM}
				maxTime={onePM}
				minTime={fiveAM}
			/>
		</LocalizationProvider>
	);
};

export default MUITimePicker;
