import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import * as React from 'react';

const buttonVariants = cva(
	'active:scale-100 inline-flex active:text-background-bg-light-01 items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900',
	{
		variants: {
			variant: {
				default: '',

				authentication:
					'rounded-21xl box-border w-28 flex flex-row py-3.5 px-4 items-center justify-center gap-[12px] text-accent-blue-primary border-[2px] border-solid border-accent-blue-primary bg-none no-underline',

				navbarLinks:
					'text-greyscale-text-secondary hover:bg-slate-200 no-underline w-fit h-fit',

				sidebarLinks: 'text-greyscale-text-tertiary',
			},
			size: {
				default: 'h-10 text-lgi-2 py-2 px-4',
				sm: 'h-9 px-2 rounded-md',
				lg: 'h-11 px-8 rounded-md',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, variant, isLoading, size, ...props }, ref) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				disabled={isLoading}
				{...props}>
				{isLoading ? <Loader2 className='w-4 h-4 mr-2 animate-spin' /> : null}
				{children}
			</button>
		);
	},
);
Button.displayName = 'Button';

export { Button, buttonVariants };
