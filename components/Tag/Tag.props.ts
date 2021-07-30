import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	size?: 'S' | 'M';
	children: ReactNode;
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
}