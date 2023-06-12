'use client';

import React, { createContext, useState } from 'react';

type open = boolean;
type setOpenRightSidebar = React.Dispatch<React.SetStateAction<open>>;

export type RightSidebarContextProps = {
	toggleRightSidebar: () => setOpenRightSidebar | void;
	isRightSideBarOpen: open;
};

export const RightSideBarContext = createContext<RightSidebarContextProps>(
	{} as RightSidebarContextProps,
);

type RightSideBarContextProviderProps = {
	children: React.ReactNode;
};

export const RightSidebarContextProvider = ({
	children,
}: RightSideBarContextProviderProps) => {
	const [isRightSideBarOpen, setOpenRightSidebar] = useState(true);
	const toggleRightSidebar = () =>
		setOpenRightSidebar((prevState) => !prevState);

	return (
		<RightSideBarContext.Provider
			value={{ toggleRightSidebar, isRightSideBarOpen }}>
			{children}
		</RightSideBarContext.Provider>
	);
};
