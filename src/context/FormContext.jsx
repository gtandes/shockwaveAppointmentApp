'use client';

import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
	const [name, setname] = useState('');
	const [petName, setpetName] = useState('');
	const [breed, setbreed] = useState('');
	const [age, setage] = useState('');
	const [gender, setgender] = useState('');
	const [date, setdate] = useState('');
	const [time, settime] = useState('');
	const [endTime, setendTime] = useState('');
	const [service, setService] = useState('');
	const [veterinarian, setVeterinarian] = useState('');
	const [vetDetails, setvetDetails] = useState({});
	const [img, setimg] = useState();
	const [allAppointments, setallAppointments] = useState([]);
	const [individualApptDetails, setindividualApptDetails] = useState({
		name: '',
		petName: '',
		breed: '',
		age: '',
		gender: '',
		date: '',
		time: '',
		endTime: '',
		service: '',
		vetDetails: {},
	});

	return (
		<FormContext.Provider
			value={{
				name,
				setname,
				petName,
				setpetName,
				breed,
				setbreed,
				age,
				setage,
				gender,
				setgender,
				date,
				setdate,
				time,
				settime,
				endTime,
				setendTime,
				service,
				setService,
				img,
				setimg,
				veterinarian,
				setVeterinarian,
				vetDetails,
				setvetDetails,
				allAppointments,
				setallAppointments,
				individualApptDetails,
				setindividualApptDetails,
			}}>
			{children}
		</FormContext.Provider>
	);
};
