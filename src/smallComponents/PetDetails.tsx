import { FC } from 'react';

interface PetDetailsProps {}

const PetDetails: FC<PetDetailsProps> = ({}) => {
	return (
		<div className='self-stretch flex flex-col py-[0rem] px-[2.5rem] items-start justify-center gap-[1.25rem] text-left text-[1rem] text-darkgray font-urbanist'>
			<div className='relative text-[0.88rem] tracking-[0.02em] font-extrabold'>
				PET DETAILS
			</div>
			<div className='flex flex-row items-center justify-start gap-[1.5rem] text-gray-gray-100'>
				<img
					className='relative rounded-81xl w-[3.25rem] h-[3.25rem] overflow-hidden shrink-0 object-cover'
					alt=''
					src='/frame-132@2x.png'
				/>
				<div className='flex flex-col items-start justify-center gap-[0.25rem]'>
					<b className='relative tracking-[0.02em]'>Brownie</b>
					<div className='relative tracking-[0.02em] font-medium text-darkgray'>
						Dog
					</div>
				</div>
			</div>
			<div className='flex flex-col items-start justify-start gap-[1.25rem]'>
				<div className='flex flex-row items-start justify-start gap-[1.25rem]'>
					<div className='flex flex-row items-start justify-start gap-[0.5rem]'>
						<img
							className='relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0'
							alt=''
							src='/ic-breed.svg'
						/>
						<div className='relative tracking-[0.02em] font-medium inline-block w-[4.38rem] shrink-0'>
							Breed
						</div>
					</div>
					<div className='relative tracking-[0.02em] font-medium text-gray-gray-100'>
						French Bulldog
					</div>
				</div>
				<div className='flex flex-row items-start justify-start gap-[1.25rem]'>
					<div className='flex flex-row items-start justify-start gap-[0.5rem]'>
						<img
							className='relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0'
							alt=''
							src='/ic-sex.svg'
						/>
						<div className='relative tracking-[0.02em] font-medium inline-block w-[4.38rem] shrink-0'>
							Sex
						</div>
					</div>
					<div className='relative tracking-[0.02em] font-medium text-gray-gray-100'>
						Male
					</div>
				</div>
				<div className='flex flex-row items-start justify-start gap-[1.25rem]'>
					<div className='flex flex-row items-start justify-start gap-[0.5rem]'>
						<img
							className='relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0'
							alt=''
							src='/ic-age.svg'
						/>
						<div className='relative tracking-[0.02em] font-medium inline-block w-[4.38rem] shrink-0'>
							Age
						</div>
					</div>
					<div className='relative tracking-[0.02em] font-medium text-gray-gray-100'>
						10 months
					</div>
				</div>
				<div className='flex flex-row items-start justify-start gap-[1.25rem]'>
					<div className='flex flex-row items-start justify-start gap-[0.5rem]'>
						<img
							className='relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0'
							alt=''
							src='/ic-calendar.svg'
						/>
						<div className='relative tracking-[0.02em] font-medium inline-block w-[4.38rem] shrink-0'>
							Birthday
						</div>
					</div>
					<div className='relative tracking-[0.02em] font-medium text-gray-gray-100'>
						January 12, 2023
					</div>
				</div>
			</div>
		</div>
	);
};

export default PetDetails;
