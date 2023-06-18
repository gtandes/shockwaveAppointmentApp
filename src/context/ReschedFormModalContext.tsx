'use client';

import React, { createContext, useState } from 'react';

type open = boolean;
type setOpenReschedModal = React.Dispatch<React.SetStateAction<open>>;

export type ReschedModalContextProps = {
	openReschedModal: () => setOpenReschedModal | void;
	closeReschedModal: () => setOpenReschedModal | void;
	isReschedModalOpen: open;
};

export const ReschedModalContext = createContext<ReschedModalContextProps>(
	{} as ReschedModalContextProps,
);

type ReschedModalContextProviderProps = {
	children: React.ReactNode;
};

export const ReschedModalContextProvider = ({
	children,
}: ReschedModalContextProviderProps) => {
	const [isReschedModalOpen, setOpenReschedModal] = useState(false);
	const openReschedModal = () => setOpenReschedModal(true);
	const closeReschedModal = () => setOpenReschedModal(false);

	return (
		<ReschedModalContext.Provider
			value={{ openReschedModal, closeReschedModal, isReschedModalOpen }}>
			{children}
		</ReschedModalContext.Provider>
	);
};
