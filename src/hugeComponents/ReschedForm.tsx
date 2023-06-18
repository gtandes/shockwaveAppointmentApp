'use client';

import { FC, useContext, useState } from 'react';
import { FormContext } from '@/context/FormContext';
import VetCards from './VetCards';
import { AppointmentsContext } from '@/context/EditCancelContext';
import { ApptType } from '@/smallComponents/ScheduledApptArray';
import { toast } from 'react-toastify';
import { supabase } from '@/api/createClient';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ModalContext } from '@/context/ModalContext';
import { NewApptBtnContext } from '@/context/NewApptBtnContext';
import { CalendarContext } from '@/context/CalendarContext';
import { ReschedModalContext } from '@/context/ReschedFormModalContext';
import { EditFormContext } from '@/context/EditFormContext';

interface ReschedFormProps {}

const ReschedForm: FC<ReschedFormProps> = ({}) => {
	const {
		name,
		// setname,
		petName,
		// setpetName,
		breed,
		// setbreed,
		age,
		// setage,
		gender,
		// setgender,
		date,
		// setdate,
		time,
		// settime,
		endTime,
		// setendTime,
		service,
		// setService,
		allAppointments,
		setallAppointments,
		vetDetails,
	} = useContext(FormContext);

	const {
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
	} = useContext(EditFormContext);

	const { handleCloseModal } = useContext(ModalContext);
	const { handleCloseNewAppt } = useContext(NewApptBtnContext);
	const { handleCloseCalendar } = useContext(CalendarContext);
	const { idOfExistingApptToEdit, handleCloseAppointments } =
		useContext(AppointmentsContext);

	const { closeReschedModal } = useContext(ReschedModalContext);

	const handleSubmit = () => {
		if (name === '') {
			toast.error('Name Is Required');
		} else if (breed === '') {
			toast.error('Breed Is Required');
		} else if (petName === '') {
			toast.error('Pet Name is Required');
		} else {
			console.log(
				'Appointment date is ' +
					editDate +
					' starting at ' +
					editTime +
					' and ending at ' +
					editEndTime,
			);

			updateSupabaseAppt();

			toast.success('Appointment Booked!');
		}
	};

	const onClose = () => {
		handleCloseModal();
		handleCloseNewAppt();
		handleCloseCalendar();
		handleCloseAppointments();
		closeReschedModal();
	};

	//convert img
	const getBase64 = (file: Blob) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.onabort = (error) => reject(error);
			reader.readAsDataURL(file);
		});
	};

	const handleImg = (e: any) => {
		const file = e.target.files[0];
		getBase64(file).then((base64) => {
			localStorage['img'] = base64;
			console.debug('File Store', base64);
		});
	};

	const updateSupabaseAppt = async () => {
		const { error } = await supabase
			.from('ShockwaveApptFormDetails')
			.update({
				name: editName,
				petName: editPetName,
				breed: editBreed,
				age: editAge,
				gender: editGender,
				date: editDate,
				time: editTime,
				endTime: editEndTime,
				service: editService,
				vetDetails: editVetDetails,
			})
			.eq('id', idOfExistingApptToEdit);

		fetchApptDetails();

		console.log('====================================');
		console.log(error);
		console.log('====================================');
	};

	const fetchApptDetails = async () => {
		const { data } = await supabase
			.from('ShockwaveApptFormDetails')
			.select('*');

		setallAppointments(data);

		console.log(data);
	};

	const apptToEdit = allAppointments.filter(
		(appt: ApptType) => appt.id === idOfExistingApptToEdit,
	);

	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='w-[1200px] overflow-hidden bg-white rounded-lg shadow-lg font-urbanist py-6'>
				<h1 className='flex items-center justify-center'>EDIT APPOINTMENT</h1>

				<form className='flex px-6 py-4' action='' method='POST'>
					{/* 1st column */}
					<div className='h-full w-[300px] px-5'>
						{/* owner name */}
						<div className='mb-4 w-[200px]'>
							<label
								className='block mb-2 font-bold text-gray-700'
								htmlFor='name'>
								Owner Name
							</label>
							<input
								className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
								id='name'
								type='text'
								onChange={(e) => seteditName(e.target.value)}
								placeholder='Enter your name'
								value={apptToEdit[0].name}
								aria-describedby='name'
								required
							/>
						</div>

						{/* pet name */}
						<div className='mb-4 w-[200px]'>
							<label
								className='block mb-2 font-bold text-gray-700'
								htmlFor='petName'>
								Pet Name
							</label>
							<input
								className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
								id='petName'
								type='text'
								onChange={(e) => seteditPetName(e.target.value)}
								placeholder={`Enter your pet's name`}
								defaultValue={apptToEdit[0].petName}
								aria-describedby='petName'
								required
							/>
						</div>

						{/* breed + age */}
						<div className='flex w-[200px] items-center justify-between'>
							<div className='mb-4 w-[120px]'>
								<label
									className='block mb-2 font-bold text-gray-700'
									htmlFor='breed'>
									Breed
								</label>
								<input
									className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
									id='breed'
									type='text'
									onChange={(e) => seteditBreed(e.target.value)}
									placeholder={`Pet's breed`}
									defaultValue={apptToEdit[0].breed}
									aria-describedby='petBreed'
									required
								/>
							</div>

							<div className='mb-4 w-[30px]'>
								<label
									className='block mb-2 font-bold text-gray-700'
									htmlFor='age'>
									Age
								</label>
								<input
									className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
									id='age'
									type='number'
									defaultValue={apptToEdit[0].age}
									onChange={(e) => seteditAge(e.target.value)}
								/>
							</div>
						</div>

						{/* gender */}
						<div className='w-full max-w-2xl py-4 mx-auto border rounded-md'>
							<label
								className='block mb-2 font-bold text-gray-700'
								htmlFor='gender'>
								Gender
							</label>

							<div className='flex w-[250px]'>
								<label className='w-[100px] flex bg-gray-100 text-gray-700 rounded-md hover:bg-indigo-300 cursor-pointer '>
									<input
										type='radio'
										id='gender'
										name='gender'
										value='Male'
										checked={apptToEdit[0].gender == 'Male'}
										onChange={(e) => seteditGender(e.target.value)}
									/>
									<p className='pl-2'>Male</p>
								</label>

								<label className='w-[100px] flex bg-gray-100 text-gray-700 rounded-md hover:bg-indigo-300 cursor-pointer '>
									<input
										type='radio'
										id='gender'
										name='gender'
										value='Female'
										checked={apptToEdit[0].gender == 'Female'}
										onChange={(e) => seteditGender(e.target.value)}
									/>
									<p className='pl-2'>Female</p>
								</label>
							</div>
						</div>

						{/* date picker */}
						<div className='mb-4 w-[200px]'>
							<label
								className='block mb-2 font-bold text-gray-700'
								htmlFor='date'>
								Date
							</label>
							<input
								className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
								id='date'
								type='date'
								onChange={(e) => seteditDate(e.target.value)}
								placeholder='Select a date'
								defaultValue={apptToEdit[0].date}
								required
							/>
						</div>

						{/* start time picker */}
						<div className='mb-4 w-[200px]'>
							<label
								className='block mb-2 font-bold text-gray-700'
								htmlFor='time'>
								Start Time
							</label>
							<input
								className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
								id='time'
								type='time'
								onChange={(e) => seteditTime(e.target.value)}
								placeholder='Select a start time'
								defaultValue={apptToEdit[0].time}
								min='09:00:00'
								max='18:00:00'
								// step='900'
								required
							/>
						</div>
						{/* end time picker */}
						<div className='mb-4 w-[200px]'>
							<label
								className='block mb-2 font-bold text-gray-700'
								htmlFor='time'>
								End Time
							</label>
							<input
								className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
								id='endTime'
								type='time'
								onChange={(e) => seteditEndTime(e.target.value)}
								placeholder='Select an end time'
								defaultValue={apptToEdit[0].endTime}
								min='09:00:00'
								max='18:00:00'
								// step='900'
								required
							/>
						</div>
					</div>

					{/* 2nd column */}
					<div className='h-full w-[500px] px-5'>
						<VetCards />
					</div>

					{/* 3rd column */}
					<div className='h-full w-[300px] pl-5 flex flex-col items-center justify-center'>
						{/* choose service */}
						<div className='mb-4 w-[200px]'>
							<label
								className='block mb-2 font-bold text-gray-700'
								htmlFor='service'>
								Select a Service
							</label>

							<select
								onChange={(e) => seteditService(e.target.value)}
								className='cursor-pointer bg-white w-[200px] px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
								id='service'
								name='service'
								value={apptToEdit[0].service}
								required>
								<option value='' disabled>
									Choices:
								</option>
								<option value='Consultation'>Consultation</option>
								<option value='Vaccination'>Vaccination</option>
								<option value='Surgery'>Surgery</option>
								<option value='Euthanization'>Euthanization</option>
							</select>
						</div>

						{/* upload image */}
						<div className='flex items-center justify-center '>
							<div className='mx-auto w-full max-w-[550px] bg-white'>
								<div className='py-4 px-9'>
									<div className='pt-4 mb-6'>
										<label
											className='block mb-2 font-bold text-gray-700'
											htmlFor='service'>
											Upload a photo of your pet
										</label>

										<div className='mb-8 cursor-pointer'>
											<input
												type='file'
												name='file'
												id='file'
												className='sr-only'
												onChange={handleImg}
											/>
											<label
												htmlFor='file'
												className='relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center'>
												<div>
													<span className='block mb-2 text-xl font-semibold text-lorem-text'>
														Drop files here
													</span>
													<span className='mb-2 block text-base font-medium text-[#6B7280]'>
														Or
													</span>
													<span className='inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-lorem-text cursor-pointer'>
														Browse
													</span>
												</div>
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* submit button */}
						<button
							type='submit'
							onClick={handleSubmit}
							className='cursor-pointer rounded-xl bg-orangered flex flex-row py-[0.75rem] px-[1.25rem] items-start justify-start text-left text-[1rem] text-white font-urbanist'>
							<div className='relative tracking-[0.02em] font-medium'>
								Set Appointment
							</div>
						</button>
					</div>
				</form>
			</div>
			<HighlightOffIcon
				sx={{ m: -5, width: 30, height: 30, cursor: 'pointer' }}
				onClick={onClose}
			/>
		</div>
	);
};

export default ReschedForm;
