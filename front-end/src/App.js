import React from "react";
import { Container, Typography, Box, Paper } from '@mui/material';
import RouletteStepper from "./components/RouletteStepper";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#556cd6', // You can choose your color
		},
		secondary: {
			main: '#19857b', // You can choose your color
		},
		error: {
			main: '#f44336',
		},
		background: {
			default: '#fff',
		},
	},
	typography: {
		h4: {
			fontWeight: 700, // You can adjust the weight of the font
		},
	},
});

const App = () => {

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="80%" sx={{ mt: 4 }}>
				<Paper
					elevation={3}
					sx={{ p: 3, height: '90vh', borderRadius: "20px", backgroundImage: 'url(../assets/image/background.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
					<Box display="flex" justifyContent="center" alignItems="center" marginBottom={2}>
						<Typography variant="h4" component="h1" gutterBottom>
							Roulette Stepper
						</Typography>
					</Box>
					<RouletteStepper />
				</Paper>
			</Container>
		</ThemeProvider>
	)
}

export default App;