'use client';

import React, { createContext, useState } from 'react';

export const EditFormContext = createContext();

export const EditFormContextProvider = ({ children }) => {
	const [editName, seteditName] = useState();
	const [editPetName, seteditPetName] = useState();
	const [editBreed, seteditBreed] = useState();
	const [editAge, seteditAge] = useState();
	const [editGender, seteditGender] = useState();
	const [editDate, seteditDate] = useState();
	const [editTime, seteditTime] = useState();
	const [editEndTime, seteditEndTime] = useState();
	const [editService, seteditService] = useState();
	const [editVetDetails, seteditVetDetails] = useState();

	return (
		<EditFormContext.Provider
			value={{
				editName,
				seteditName,
				editPetName,
				seteditPetName,
				editBreed,
				seteditBreed,
				editAge,
				seteditAge,
				editGender,
				seteditGender,
				editDate,
				seteditDate,
				editTime,
				seteditTime,
				editEndTime,
				seteditEndTime,
				editService,
				seteditService,
				editVetDetails,
				seteditVetDetails,
			}}>
			{children}
		</EditFormContext.Provider>
	);
};
