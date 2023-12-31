// 'use client';

import { Inter } from 'next/font/google';

import { LeftSideNavContextProvider } from '@/context/LeftSidebarContext';
import { RightSidebarContextProvider } from '@/context/RightSidebarContext';
import { ModalContextProvider } from '@/context/ModalContext';
import { cn } from '@/lib/utils';

import '@/styles/globals.css';
import { NewApptBtnContextProvider } from '@/context/NewApptBtnContext';
import { CalendarContextProvider } from '@/context/CalendarContext';
import { FormContextProvider } from '@/context/FormContext';
import { ToastContainer } from 'react-toastify';
import { AppointmentsContextProvider } from '@/context/EditCancelContext';
import { ReschedModalContextProvider } from '@/context/ReschedFormModalContext';
import { EditFormContextProvider } from '@/context/EditFormContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={(cn('bg-white antialiased'), inter.className)}>
			<body className='flex flex-col items-center justify-center min-h-screen antialiased'>
				<ModalContextProvider>
					<ReschedModalContextProvider>
						<NewApptBtnContextProvider>
							<AppointmentsContextProvider>
								<FormContextProvider>
									<EditFormContextProvider>
										<CalendarContextProvider>
											<LeftSideNavContextProvider>
												<RightSidebarContextProvider>
													<ToastContainer
														position='top-center'
														autoClose={2000}
														hideProgressBar={false}
														newestOnTop={false}
														closeOnClick
														rtl={false}
														pauseOnFocusLoss
														draggable
														pauseOnHover
													/>
													{children}
												</RightSidebarContextProvider>
											</LeftSideNavContextProvider>
										</CalendarContextProvider>
									</EditFormContextProvider>
								</FormContextProvider>
							</AppointmentsContextProvider>
						</NewApptBtnContextProvider>
					</ReschedModalContextProvider>
				</ModalContextProvider>
			</body>
		</html>
	);
}
