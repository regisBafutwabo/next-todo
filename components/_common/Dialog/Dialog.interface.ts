import { ReactNode } from 'react';

export type DialogComponentProps = {
    title: string;
    open: boolean;
    onClose?: () => void;
    children: ReactNode;
}