'use client';

import { ApptType } from '@/smallComponents/ScheduledApptArray';
import React, { createContext, useState } from 'react';

type openAppointments = boolean;
type setOpenAppointments = React.Dispatch<
	React.SetStateAction<openAppointments>
>;

export type AppointmentsContextProps = {
	handleCloseAppointments: () => void;
	handleOpenAppointments: () => setOpenAppointments | void;
	openAppointments: openAppointments;
	idOfExistingApptToEdit: ApptType['id'];
	setidOfExistingApptToEdit: React.Dispatch<
		React.SetStateAction<ApptType['id']>
	>;
};

export const AppointmentsContext = createContext<AppointmentsContextProps>(
	{} as AppointmentsContextProps,
);

type AppointmentsContextProviderProps = {
	children: React.ReactNode;
};

export const AppointmentsContextProvider = ({
	children,
}: AppointmentsContextProviderProps) => {
	const [idOfExistingApptToEdit, setidOfExistingApptToEdit] =
		useState<ApptType['id']>();
	const [openAppointments, setOpenAppointments] = useState(false);
	const handleOpenAppointments = () => setOpenAppointments(true);
	const handleCloseAppointments = () => setOpenAppointments(false);

	return (
		<AppointmentsContext.Provider
			value={{
				idOfExistingApptToEdit,
				setidOfExistingApptToEdit,
				handleOpenAppointments,
				handleCloseAppointments,
				openAppointments,
			}}>
			{children}
		</AppointmentsContext.Provider>
	);
};
