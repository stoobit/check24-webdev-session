import './InputField.css';
import {DetailedHTMLProps, InputHTMLAttributes} from "react";

// The properties that we pass to the input field extend the default HTML input field properties.
// We can thus use all the properties of the input field (e.g. type), but we can also add our own properties.
// Learn more about HTML input fields here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
interface InputFieldProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "placeholder"> {
    /**
     * The placeholder text of the input field.
     */
    placeholder?: string;
}

// The InputField component which we can use in our other components / pages.
// It simply wraps the HTML input field and adds some styling using plain CSS.
// The style is added by giving the input the CSS class "styledInput", which is defined in InputField.css,
// and imported at the top of this file.
export default function InputField({ placeholder, ...props }: InputFieldProps) {
    return (
        <input className="styledInput" placeholder={placeholder} {...props} />
    );
}
