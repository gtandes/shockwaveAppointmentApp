import { FC } from 'react';

interface ClinicDetailsProps {}

const ClinicDetails: FC<ClinicDetailsProps> = ({}) => {
	return (
		<div className='self-stretch flex flex-col py-[0rem] px-[2.5rem] items-start justify-start gap-[1.25rem] text-left text-[1rem] text-darkgray font-urbanist'>
			<div className='relative text-[0.88rem] tracking-[0.02em] font-extrabold'>
				CLINIC DETAILS
			</div>
			<div className='flex flex-row items-center justify-start gap-[1.5rem] text-gray-gray-100'>
				<img
					className='relative rounded-81xl w-[3.25rem] h-[3.25rem] overflow-hidden shrink-0 object-cover'
					alt=''
					src='/frame-131@2x.png'
				/>
				<div className='flex flex-col items-start justify-center gap-[0.25rem]'>
					<b className='relative tracking-[0.02em]'>Silvervale Towers</b>
					<div className='relative tracking-[0.02em] font-medium text-darkgray'>
						Los Angeles
					</div>
				</div>
			</div>
			<div className='self-stretch flex flex-col items-start justify-start gap-[1.25rem]'>
				<div className='flex flex-row items-start justify-start gap-[1.25rem]'>
					<div className='flex flex-row items-start justify-start gap-[0.5rem]'>
						<img
							className='relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0'
							alt=''
							src='/ic-messages.svg'
						/>
						<div className='relative tracking-[0.02em] font-medium inline-block w-[4.38rem] shrink-0'>
							Email
						</div>
					</div>
					<div className='relative tracking-[0.02em] font-medium text-gray-gray-100 inline-block w-[10.44rem] shrink-0'>
						branch1@gmail.com
					</div>
				</div>
				<div className='flex flex-row items-start justify-start gap-[1.25rem]'>
					<div className='flex flex-row items-start justify-start gap-[0.5rem]'>
						<img
							className='relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0'
							alt=''
							src='/ic-phone.svg'
						/>
						<div className='relative tracking-[0.02em] font-medium inline-block w-[4.38rem] shrink-0'>
							Phone
						</div>
					</div>
					<div className='relative tracking-[0.02em] font-medium text-gray-gray-100'>
						+01 234 567 8910
					</div>
				</div>
				<div className='flex flex-row items-start justify-start gap-[1.25rem]'>
					<div className='flex flex-row items-start justify-start gap-[0.5rem]'>
						<img
							className='relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0'
							alt=''
							src='/ic-pin.svg'
						/>
						<div className='relative tracking-[0.02em] font-medium inline-block w-[4.38rem] shrink-0'>
							Address
						</div>
					</div>
					<div className='relative tracking-[0.02em] font-medium text-gray-gray-100'>
						<p className='m-0'>4th Floor, RM 402, Blk 2, 13 Johnson Street,</p>
						<p className='m-0'>Silvervale Towers,</p>
						<p className='m-0'>{`Los Angeles, California `}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClinicDetails;
