import { FC } from 'react';
import { Metadata } from 'next';
import AppointmentPage from '@/hugeComponents/AppointmentPage/AppointmentPage';

export const metadata: Metadata = {
	title: 'Shockwave Media | Appointment Page',
	description: 'Set your appointment with the veterinarian here.',
};

interface pageProps {}

const page: FC<pageProps> = ({}) => {
	return <AppointmentPage />;
};

export default page;
