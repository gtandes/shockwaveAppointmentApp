'use client';

import React, { createContext, useState } from 'react';

type openModal = boolean;
type setOpenModal = React.Dispatch<React.SetStateAction<openModal>>;

export type ModalContextProps = {
	handleCloseModal: () => void;
	handleOpenModal: () => setOpenModal | void;
	openModal: openModal;
};

export const ModalContext = createContext<ModalContextProps>(
	{} as ModalContextProps,
);

type ModalContextProviderProps = {
	children: React.ReactNode;
};

export const ModalContextProvider = ({
	children,
}: ModalContextProviderProps) => {
	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);

	return (
		<ModalContext.Provider
			value={{ handleOpenModal, handleCloseModal, openModal }}>
			{children}
		</ModalContext.Provider>
	);
};
