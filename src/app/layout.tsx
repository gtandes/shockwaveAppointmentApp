import { Inter } from 'next/font/google';

import { LeftSideNavContextProvider } from '@/context/LeftSidebarContext';
import { RightSidebarContextProvider } from '@/context/RightSidebarContext';
import { ModalContextProvider } from '@/context/ModalContext';
import { cn } from '@/lib/utils';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={(cn('bg-white antialiased'), inter.className)}>
			<body className='flex flex-col items-center justify-center min-h-screen antialiased'>
				<LeftSideNavContextProvider>
					<RightSidebarContextProvider>
						<ModalContextProvider>{children}</ModalContextProvider>
					</RightSidebarContextProvider>
				</LeftSideNavContextProvider>
			</body>
		</html>
	);
}
