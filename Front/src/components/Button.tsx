import React from "react";

type ButtonProps = {
	children?: React.ReactNode;
	enabled?: boolean;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	extraConfig?: {
		[key: string]: any;
	};
};

const Button = ({children, enabled = true, onClick, type, extraConfig}: ButtonProps) => {
	return (
		<button
			disabled={!enabled}
			onClick={onClick}
			type={type}
			{...extraConfig}
		>
			{children}
		</button>
	);
};

export default Button;
