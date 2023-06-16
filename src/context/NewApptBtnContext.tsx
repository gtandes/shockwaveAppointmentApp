'use client';

import React, { createContext, useState } from 'react';

type isNewApptBtnClicked = boolean;
type setisNewApptBtnClicked = React.Dispatch<
	React.SetStateAction<isNewApptBtnClicked>
>;

export type NewApptBtnContextProps = {
	handleCloseNewAppt: () => setisNewApptBtnClicked | void;
	handleisNewApptBtnClicked: () => setisNewApptBtnClicked | void;
	isNewApptBtnClicked: isNewApptBtnClicked;
};

export const NewApptBtnContext = createContext<NewApptBtnContextProps>(
	{} as NewApptBtnContextProps,
);

type NewApptBtnContextProviderProps = {
	children: React.ReactNode;
};

export const NewApptBtnContextProvider = ({
	children,
}: NewApptBtnContextProviderProps) => {
	const [isNewApptBtnClicked, setisNewApptBtnClicked] = useState(false);
	const handleisNewApptBtnClicked = () => setisNewApptBtnClicked(true);
	const handleCloseNewAppt = () => setisNewApptBtnClicked(false);

	return (
		<NewApptBtnContext.Provider
			value={{
				handleisNewApptBtnClicked,
				handleCloseNewAppt,
				isNewApptBtnClicked,
			}}>
			{children}
		</NewApptBtnContext.Provider>
	);
};
