'use client';

import { FormContext } from '@/context/FormContext';
import Avatar from '@mui/material/Avatar';
import { FC, useContext } from 'react';

const vetdData = [
	{
		veterinary_name: 'Perry Winkle',
		address: '4517 Washington Avenue, Manchester, Kentucky 39495',
		building: 'Green Bow Vett',
		contact_number: '+63 0123 123',
		vet_image: (
			<Avatar
				alt='Perry Winkle'
				src='https://i.pravatar.cc/150?u=a042581f4e25056704b'
			/>
		),
	},
	{
		veterinary_name: 'Anika Howard',
		address: '4517 Washington Avenue, Manchester, Kentucky 39495',
		building: 'Green Bow Vett',
		contact_number: '+63 0123 123',
		vet_image: (
			<Avatar
				alt='Anika Howard'
				src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
			/>
		),
	},
	{
		veterinary_name: 'Samuel Jackson',
		address: '4517 Washington Avenue, Manchester, Kentucky 39495',
		building: 'Green Bow Vett',
		contact_number: '+63 0123 123',
		vet_image: (
			<Avatar
				alt='Samuel Jackson'
				src='https://i.pravatar.cc/150?u=a048581f4e29026701d'
			/>
		),
	},
	{
		veterinary_name: 'Sara Connor',
		address: '4517 Washington Avenue, Manchester, Kentucky 39495',
		building: 'Green Bow Vett',
		contact_number: '+63 0123 123',
		vet_image: (
			<Avatar
				alt='Sara Conners'
				src='https://i.pravatar.cc/150?u=a04258114e29026702d'
			/>
		),
	},
];

interface VetCardsProps {}

const VetCards: FC<VetCardsProps> = ({}) => {
	const { setvetDetails } = useContext(FormContext);

	const vetCardArray = vetdData.map((vet, index) => {
		return (
			<div
				key={vet.veterinary_name}
				onClick={() => {
					setvetDetails(vet);
				}}
				className={`mb-5 cursor-pointer rounded-xl  box-border w-[30rem] flex flex-row p-[1.25rem] items-center text-left text-[1rem] text-gray-gray-100 font-urbanist border-[1px] border-solid ${
					index % 2 == 0
						? 'border-blueviolet [background:linear-gradient(rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0.8)),_#9747ff]'
						: 'border-coral [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#ff9447]'
				}`}>
				<div className='flex flex-row items-start justify-between flex-1'>
					<div className='flex flex-row items-start justify-start gap-[0.75rem]'>
						<div
							className={`rounded-17xl w-[2.25rem] h-[2.25rem] flex flex-row p-[0.63rem] box-border items-center justify-center ${
								index % 2 == 0
									? '[background:linear-gradient(rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0.8)),_#9747ff]'
									: '[background:linear-gradient(rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0.8)),_#ff9447]'
							}`}>
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
