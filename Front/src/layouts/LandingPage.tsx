import React, { useState } from "react";
import Input, { InputType } from "../components/input";
import Button from "../components/Button";
import btnStyles from "../assets/components/Button.module.css";

const LandingPage = () => {
	const [dateInput, setDateInput] = useState("");
	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDateInput(event.target.value);
	};
	const handleReset = () => {
		setDateInput("");
	};
	console.log({ dateInput, btnStyles });

	return (
		<form
			className="flex flex-row gap-4 p-4 bg-gray-100 rounded-lg shadow-md"
			action={""}
		>
			<Input
				type={InputType.Date}
				value={dateInput}
				onChange={handleDateChange}
				extraConfig={{
					pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}",
					title: "Please enter a date in the format YYYY-MM-DD",
				}}
			/>
			<Input type={InputType.Number} extraConfig={{ min: 0 }}></Input>
			<Input type={InputType.Number} extraConfig={{ min: 0 }}></Input>
			<Button type="reset" onClick={handleReset} enabled={!!dateInput}>
				Reset
			</Button>
			<Button type="button" enabled={!!dateInput}>
				Add register
			</Button>
		</form>
	);
};

export default LandingPage;
