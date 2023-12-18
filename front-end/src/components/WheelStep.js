import React, { useEffect, useState } from 'react';
import { Wheel } from "react-custom-roulette";
import "../assets/css/wheel.css";

const WheelStep = ({ selectedEvent, onResult }) => {
	const [data, setData] = useState([{}]);
	const [mustSpin, setMustSpin] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);
	const [winner, setWinner] = useState(null);

	const { team_red, team_black } = selectedEvent;

	useEffect(() => {
		let numbers = Array.from({ length: 38 }).map((_, index) => index + 1);
		numbers = shuffleArray(numbers);

		const wheelData = numbers.map((number, index) => {
			if(index === 18) {
				return { option: '0', style: { backgroundColor: 'green', textColor: 'white' } }
			} else if(index === 37) {
				return { option: '00', style: { backgroundColor: 'green', textColor: 'white' }}
			} else
				return {
					option: number.toString(),
					style: {
						backgroundColor: index % 2 === 0 ? "red" : "black",
						textColor: "white",
					}
				}
		});

		setData(wheelData);
	}, [selectedEvent]);

	const spinWheel = () => {
		setMustSpin(true);
		setWinner(null);
		const randomPrizeIndex = Math.floor(Math.random() * data.length);

		setPrizeNumber(randomPrizeIndex);
	}

	const shuffleArray = (data) => {
		for (let i = data.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[data[i], data[j]] = [data[j], data[i]];
		}
		return data;
	}

	return (
		<div className='roulette-wheel-container'>
			<h2>
				Roulette Wheel
			</h2>
			<div>
				<span> {team_red} </span>
				<span style={{
					display: 'inline-block',
					width: '100px',
					height: '100px',
					backgroundColor: 'red',
					borderRadius: '50%',
					marginLeft: '10px',
					marginTop: '10px',
					border: '1px solid black',
				}}></span>
				<span> {team_black} </span>
				<span style={{
					display: 'inline-block',
					width: '100px',
					height: '100px',
					backgroundColor: 'black',
					borderRadius: '50%',
					marginLeft: '10px',
					marginTop: '10px',
					border: '1px solid black',
				}}></span>
			</div>
			<button onClick={spinWheel}>
				Spin the wheel
			</button>
			{
				winner && (
					<div>
						<span> {`Winner : ${winner} !`} </span>
					</div>
				)
			}

			<Wheel
				mustStartSpinning={mustSpin}
				prizeNumber={prizeNumber}
				textColors={['#ffffff']}
				textDistance={90}
				perpendicularText={true}
				innerRadius={60}
				disableInitialAnimation={true}
				onStopSpinning={() => {
					setMustSpin(false);
					console.log("prize Number : ", prizeNumber);
					setWinner(prizeNumber % 2 === 0 ? team_red : team_black);
				}}
				data={data} />

		</div>
	)
}

export default WheelStep;