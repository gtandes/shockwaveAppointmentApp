import { FC } from 'react';

interface ContactInfoProps {}

const ContactInfo: FC<ContactInfoProps> = ({}) => {
	return (
		<div className='self-stretch flex flex-col py-[0rem] px-[2.5rem] items-start justify-start gap-[1.25rem] text-left text-[0.88rem] text-darkgray font-urbanist'>
			<div className='relative tracking-[0.02em] font-extrabold'>
				CONTACT INFORMATION
			</div>
			<div className='self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[1rem]'>
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
					<div className='relative tracking-[0.02em] font-medium text-gray-gray-100'>
						chrissielee@gmail.com
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
						<p className='m-0'>
							1st Avenue, Golden Street,Springville Village,
						</p>
						<p className='m-0'>San Diego, California</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
