'use client';

import { FormContext } from '@/context/FormContext';
import Avatar from '@mui/material/Avatar';
import { FC, useContext } from 'react';

interface VetCardsProps {}

const VetCards: FC<VetCardsProps> = ({}) => {
	const { veterinarian, setVeterinarian, setAllData } = useContext(FormContext);

	// const handleClick = (vet: any) => {
	// 	setVeterinarian(vet);
	// 	setAllData((prevData: any) => [...prevData, veterinarian]);
	// };

	const vetdData = [
		{
			veterinary_name: 'Perry Winkle',
			address: '4517 Washington Avenue, Manchester, Kentucky 39495',
			building: 'Green Bow Vett',
			contact_number: '+63 0123 123',
			vet_image: (
				<Avatar alt='Perry Winkle' src='/static/images/avatar/3.jpg' />
			),
		},
		{
			veterinary_name: 'Anika Howard',
			address: '4517 Washington Avenue, Manchester, Kentucky 39495',
			building: 'Green Bow Vett',
			contact_number: '+63 0123 123',
			vet_image: (
				<Avatar alt='Anika Howard' src='/static/images/avatar/2.jpg' />
			),
		},
		{
			veterinary_name: 'Samuel Jackson',
			address: '4517 Washington Avenue, Manchester, Kentucky 39495',
			building: 'Green Bow Vett',
			contact_number: '+63 0123 123',
			vet_image: (
				<Avatar alt='Samuel Jackson' src='/static/images/avatar/1.jpg' />
			),
		},
		{
			veterinary_name: 'Sara Conners',
			address: '4517 Washington Avenue, Manchester, Kentucky 39495',
			building: 'Green Bow Vett',
			contact_number: '+63 0123 123',
			vet_image: (
				<Avatar alt='Sara Conners' src='/static/images/avatar/4.jpg' />
			),
		},
	];

	const vetCardArray = vetdData.map((vet) => {
		return (
			<div
				key={vet.veterinary_name}
				onClick={() => {
					setVeterinarian(vet);
					localStorage.setItem('veterinarian', veterinarian);
					setAllData((prevData: any) => [...prevData, veterinarian]);
				}}
				className={`mb-5 cursor-pointer rounded-xl [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#ff9447] box-border w-[30rem] flex flex-row p-[1.25rem] items-center text-left text-[1rem] text-gray-gray-100 font-urbanist border-[1px] border-solid border-coral`}>
				<div className='flex flex-row items-start justify-between flex-1'>
					<div className='flex flex-row items-start justify-start gap-[0.75rem]'>
						<div className='rounded-17xl [background:linear-gradient(rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0.8)),_#ff9447] w-[2.25rem] h-[2.25rem] flex flex-row p-[0.63rem] box-border items-center justify-center'>
							{vet.vet_image}
						</div>
						<div className='flex flex-col items-start justify-start gap-[0.75rem]'>
							<div className='flex flex-col items-start justify-start gap-[0.5rem]'>
								<b className='relative tracking-[0.02em]'>
									{vet.veterinary_name}
								</b>
								<div className='relative text-[0.75rem] tracking-[0.02em] font-medium'>
									{vet.contact_number}
								</div>
							</div>
							<div className='flex flex-row items-center justify-start gap-[0.5rem] text-[0.75rem]'>
								<div className='relative tracking-[0.02em] font-medium'>
									{vet.building} {', '} {vet.address}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className='flex flex-col items-center justify-center'>
			<label className='block mb-2 font-bold text-gray-700'>
				Choose your Veterinarian
			</label>
			{vetCardArray}
		</div>
	);
};

export default VetCards;
