'use client';

import React, { createContext, useState } from 'react';

// type name = string;
// type setname = React.Dispatch<React.SetStateAction<name>>;
// type petName = string;
// type setpetName = React.Dispatch<React.SetStateAction<petName>>;
// type breed = string;
// type setbreed = React.Dispatch<React.SetStateAction<breed>>;
// type age = string;
// type setage = React.Dispatch<React.SetStateAction<age>>;
// type gender = string;
// type setgender = React.Dispatch<React.SetStateAction<gender>>;
// type date = string;
// type setdate = React.Dispatch<React.SetStateAction<date>>;
// type time = string;
// type settime = React.Dispatch<React.SetStateAction<time>>;
// type endTime = string;
// type setendTime = React.Dispatch<React.SetStateAction<endTime>>;
// type service = string;
// type setService = React.Dispatch<React.SetStateAction<service>>;
// type img = string;
// type setimg = React.Dispatch<React.SetStateAction<img>>;
// type appointmentData = Array<string>;
// type setappointmentData = React.Dispatch<React.SetStateAction<appointmentData>>;

// export type FormContextProps = {
// 	name: name;
// 	setname: setname;
// 	petName: petName;
// 	setpetName: setpetName;
// 	breed: breed;
// 	setbreed: setbreed;
// 	age: age;
// 	setage: setage;
// 	gender: gender;
// 	setgender: setgender;
// 	date: date;
// 	setdate: setdate;
// 	time: time;
// 	settime: settime;
// 	endTime: endTime;
// 	setendTime: setendTime;
// 	service: service;
// 	setService: setService;
// 	img: img;
// 	setimg: setimg;
// 	appointmentData: appointmentData;
// 	setappointmentData: setappointmentData;
// };

export const FormContext = createContext();

// type FormContextProviderProps = {
// 	children: React.ReactNode,
// };

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
