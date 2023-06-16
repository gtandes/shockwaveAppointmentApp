'use client';

import React, { createContext, useState } from 'react';

type isCalendarClicked = boolean;
type setisCalendarClicked = React.Dispatch<
	React.SetStateAction<isCalendarClicked>
>;

export type CalendarContextProps = {
	handleCloseCalendar: () => setisCalendarClicked | void;
	handleisCalendarClicked: () => setisCalendarClicked | void;
	isCalendarClicked: isCalendarClicked;
	setisCalendarClicked: setisCalendarClicked;
};

export const CalendarContext = createContext<CalendarContextProps>(
	{} as CalendarContextProps,
);

type CalendarContextProviderProps = {
	children: React.ReactNode;
};

export const CalendarContextProvider = ({
	children,
}: CalendarContextProviderProps) => {
	const [isCalendarClicked, setisCalendarClicked] = useState(false);
	const handleisCalendarClicked = () => setisCalendarClicked(true);
	const handleCloseCalendar = () => setisCalendarClicked(false);

	return (
		<CalendarContext.Provider
			value={{
				handleisCalendarClicked,
				handleCloseCalendar,
				isCalendarClicked,
				setisCalendarClicked,
			}}>
			{children}
		</CalendarContext.Provider>
	);
};
