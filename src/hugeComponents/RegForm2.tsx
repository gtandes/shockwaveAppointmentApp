'use client';

import { FC, useContext } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { toast } from 'react-toastify';

import { FormContext } from '@/context/FormContext';
import { ModalContext } from '@/context/ModalContext';
import { NewApptBtnContext } from '@/context/NewApptBtnContext';
import { CalendarContext } from '@/context/CalendarContext';
import { AppointmentsContext } from '@/context/EditCancelContext';
import VetCards from './VetCards';
import { supabase } from '@/api/createClient';

interface RegForm2Props {}

const RegForm2: FC<RegForm2Props> = ({}) => {
	const { handleCloseModal } = useContext(ModalContext);
	const { handleCloseNewAppt } = useContext(NewApptBtnContext);
	const { handleCloseCalendar } = useContext(CalendarContext);
	const { handleCloseAppointments } = useContext(AppointmentsContext);

	const onClose = () => {
		handleCloseModal();
		handleCloseNewAppt();
		handleCloseCalendar();
		handleCloseAppointments();
	};

	const {
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
		allAppointments,
		setallAppointments,
		individualApptDetails,
		setindividualApptDetails,
		vetDetails,
	} = useContext(FormContext);

	const fetchApptDetails = async () => {
		const { data } = await supabase
			.from('ShockwaveApptFormDetails')
			.select('*');

		setallAppointments(data);

		console.log(data);
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

	//handle img
	const handleImg = (e: any) => {
		const file = e.target.files[0];
		getBase64(file).then((base64) => {
			localStorage['img'] = base64;
			console.debug('File Store', base64);
		});
	};

	//form submit handler
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		if (name === '') {
			toast.error('Name Is Required');
		} else if (breed === '') {
			toast.error('Breed Is Required');
		} else if (petName === '') {
			toast.error('Pet Name is Required');
		} else {
			setindividualApptDetails((prevData: any) => [
				{
					...prevData,
					name: name,
					petName: petName,
					breed: breed,
					age: age,
					gender: gender,
					date: date,
					time: time,
					endTime: endTime,
					service: service,
				},
			]);

			setallAppointments(individualApptDetails);

			// console.log(
			// 	'Appointment date is ' +
			// 		date +
			// 		' starting at ' +
			// 		time +
			// 		' and ending at ' +
			// 		endTime,
			// );

			createSupabaseAppt();

			console.log('====================================');
			console.log(individualApptDetails);
			console.log('====================================');
			console.log(allAppointments);
			toast.success('Appointment Booked!');
		}
	};

	const createSupabaseAppt = async () => {
		const { error } = await supabase.from('ShockwaveApptFormDetails').insert({
			name: name,
			petName: petName,
			breed: breed,
			age: age,
			gender: gender,
			date: date,
			time: time,
			endTime: endTime,
			service: service,
			vetDetails: vetDetails,
		});

		fetchApptDetails();

		console.log('====================================');
		console.log(error);
		console.log('====================================');
	};

	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='w-[1200px] overflow-hidden bg-white rounded-lg shadow-lg font-urbanist py-6'>
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
								onChange={(e) => setname(e.target.value)}
								placeholder='Enter your name'
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
								onChange={(e) => setpetName(e.target.value)}
								placeholder={`Enter your pet's name`}
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
									onChange={(e) => setbreed(e.target.value)}
									placeholder={`Pet's breed`}
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
									onChange={(e) => setage(e.target.value)}
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
										onChange={(e) => setgender(e.target.value)}
									/>
									<p className='pl-2'>Male</p>
								</label>

								<label className='w-[100px] flex bg-gray-100 text-gray-700 rounded-md hover:bg-indigo-300 cursor-pointer '>
									<input
										type='radio'
										id='gender'
										name='gender'
										value='Female'
										onChange={(e) => setgender(e.target.value)}
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
								onChange={(e) => setdate(e.target.value)}
								placeholder='Select a date'
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
								onChange={(e) => settime(e.target.value)}
								placeholder='Select a start time'
								min='09:00:00'
								max='18:00:00'
								step='900'
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
								onChange={(e) => setendTime(e.target.value)}
								placeholder='Select an end time'
								min='09:00:00'
								max='18:00:00'
								step='900'
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
								onChange={(e) => setService(e.target.value)}
								className='bg-white w-[200px] px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
								id='service'
								name='service'
								required>
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

					<HighlightOffIcon
						sx={{ m: -1, width: 30, height: 30, cursor: 'pointer' }}
						onClick={onClose}
					/>
				</form>
			</div>
		</div>
	);
};

export default RegForm2;
