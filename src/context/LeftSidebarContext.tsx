'use client';

import React, { createContext, useState } from 'react';

type unfold = boolean;
type setUnfold = React.Dispatch<React.SetStateAction<unfold>>;

export type LeftSideNavContextProps = {
	// handleFold: () => setUnfold | void;
	toggleFold: () => setUnfold | void;
	unFold: unfold;
};

export const LeftSideNavContext = createContext<LeftSideNavContextProps>(
	{} as LeftSideNavContextProps,
);

type LeftSideNavContextProviderProps = {
	children: React.ReactNode;
};

export const LeftSideNavContextProvider = ({
	children,
}: LeftSideNavContextProviderProps) => {
	const [unFold, setUnfold] = useState(true);
	const toggleFold = () => setUnfold((prevState) => !prevState);

	return (
		<LeftSideNavContext.Provider value={{ toggleFold, unFold }}>
			{children}
		</LeftSideNavContext.Provider>
	);
};
