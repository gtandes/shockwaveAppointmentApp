'use client';

import { Button } from '@/smallComponents/Button';
import Paragraph from '@/smallComponents/Paragraph';

export default function Error({ reset }: { error: Error; reset: () => void }) {
	return (
		<div className='flex flex-col items-center gap-4 pt-40'>
			<Paragraph>Something went wrong while loading this page.</Paragraph>
			<Button
				size='lg'
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}>
				Try again
			</Button>
		</div>
	);
}
