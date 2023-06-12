import { Loader2 } from 'lucide-react';
import Paragraph from '@/smallComponents/Paragraph';

const Loading = async () => {
	return (
		<div className='absolute inset-0 flex flex-col items-center justify-center'>
			<Paragraph>Preparing the page</Paragraph>
			<Loader2 className='w-10 h-10 animate-spin dark:text-slate-200' />
		</div>
	);
};

export default Loading;
