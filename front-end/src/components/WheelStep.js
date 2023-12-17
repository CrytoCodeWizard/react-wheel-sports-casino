import React, { useState } from 'react';

const WheelStep = ({ selectedEvent, onResult }) => {
	const [result, setResult] = useState(null);

	const { team_red, team_black } = selectedEvent;

	const spinWheel = () => {
		const predictionWinner = Math.random() < 0.5 ? team_red : team_black;
		setResult(predictionWinner);
		onResult(predictionWinner);
	}

	return (
		<div>
			<h2>
				Roulette Wheel
			</h2>
			<button onClick={spinWheel}>
				Spin the wheel
			</button>
			{
				result && (
					<div>
						<h3>
							{result} won!
						</h3>
					</div>
				)
			}
		</div>
	)
}

export default WheelStep;