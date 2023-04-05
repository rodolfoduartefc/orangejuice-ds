import { InputHTMLAttributes } from "react";
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
export default function TextField(props: Props): JSX.Element;
