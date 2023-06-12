import { FC } from 'react';

interface ClientDetailsProps {}

const ClientDetails: FC<ClientDetailsProps> = ({}) => {
	return (
		<div className='self-stretch flex flex-row py-[0rem] px-[2.5rem] items-center justify-between text-left text-[1.5rem] text-gray-gray-100 font-urbanist'>
			<div className='flex flex-row items-center justify-start gap-[1.5rem]'>
				<img
					className='relative rounded-81xl w-[5rem] h-[5rem] overflow-hidden shrink-0 object-cover'
					alt=''
					src='/frame-13@2x.png'
				/>
				<div className='flex flex-col items-start justify-center gap-[0.25rem]'>
					<b className='relative tracking-[0.02em]'>Chrissie Lee</b>
					<div className='relative text-[1rem] tracking-[0.02em] font-medium text-darkgray'>
						Client
					</div>
				</div>
			</div>
			<img
				className='relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0'
				alt=''
				src='/ic-dotsvertical.svg'
			/>
		</div>
	);
};

export default ClientDetails;
