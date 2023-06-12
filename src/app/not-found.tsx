import Link from 'next/link';
import { FC } from 'react';

import { buttonVariants } from '@/smallComponents/Button';
import LargeHeading from '@/smallComponents/LargeHeading';
import Paragraph from '@/smallComponents/Paragraph';
import Icons from '@/smallComponents/Icons';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Page not found',
	description: 'Page not found',
};

const PageNotFound: FC = () => {
	return (
		<section className='container flex flex-col items-center gap-6 pt-32 mx-auto text-center max-w-7xl'>
			<LargeHeading>Page not found!</LargeHeading>
			<Paragraph>
				The page that you&apos;re searching for does not exist.
			</Paragraph>
			<Link
				className={buttonVariants({
					variant: 'authentication',
					className: 'w-fit',
				})}
				href='/'>
				<Icons.ChevronLeft className='w-4 h-4 mr-2' />
				Back to home
			</Link>
		</section>
	);
};

export default PageNotFound;
