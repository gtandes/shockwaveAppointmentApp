'use client';

import React, { createContext, useState } from 'react';

type openAppointments = boolean;
type setOpenAppointments = React.Dispatch<
	React.SetStateAction<openAppointments>
>;

export type AppointmentsContextProps = {
	handleCloseAppointments: () => void;
	handleOpenAppointments: () => setOpenAppointments | void;
	openAppointments: openAppointments;
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
	const [openAppointments, setOpenAppointments] = useState(false);
	const handleOpenAppointments = () => setOpenAppointments(true);
	const handleCloseAppointments = () => setOpenAppointments(false);

	return (
		<AppointmentsContext.Provider
			value={{
				handleOpenAppointments,
				handleCloseAppointments,
				openAppointments,
			}}>
			{children}
		</AppointmentsContext.Provider>
	);
};
