import React from "react";

export enum InputType {
	Text = "text",
	Password = "password",
	Email = "email",
	Number = "number",
	Search = "search",
	Tel = "tel",
	Url = "url",
	Date = "date"
}

type InputProps = {
	type: InputType;
	placeholder?: string;
	value?: string;
	extraConfig?: {
		[key: string]: any;
	};
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, placeholder, value, onChange, extraConfig }: InputProps) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			{...extraConfig} // Spread operator to include any additional props
		/>
	);
}

export default Input;
