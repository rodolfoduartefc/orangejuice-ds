import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
declare function TextField(props: Props): JSX.Element;

export { TextField };
