import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
	Box,
	Typography,
	useTheme,
	useMediaQuery,
	TextField,
	Button,
	Alert,
	Collapse,
	Card,
} from "@mui/material";
const ScifiImage = () => {
	const theme = useTheme();

	const isNotMobile = useMediaQuery("(min-width:1000px)");

	const [text, setText] = useState("");
	const [image, setImage] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(
				"https://gpt-5-api.onrender.com/api/v1/openai/scifi-image",
				{
					text,
				}
			);
			setImage(data);
		} catch (error) {
			console.log(error);
			if (error.response.data.error) {
				setError(error.response.data.error);
			} else if (error.message) {
				setError(error.message);
			}
			setTimeout(() => {
				setError("");
			}, 5000);
		}
	};

	return (
		<Box
			width={isNotMobile ? "40%" : "80%"}
			p={"2rem"}
			m={"2rem auto"}
			borderRadius={5}
			sx={{ boxShadow: 5 }}
			backgroundColor={theme.palette.background.alt}
		>
			<Collapse in={error}>
				<Alert severity="error" sx={{ mb: 2 }}>
					{error}
				</Alert>
			</Collapse>
			<form onSubmit={handleSubmit}>
				<Typography variant="h3">Scifi Image</Typography>
				<TextField
					placeholder="Add your text"
					type="text"
					multiline={true}
					required
					margin="normal"
					fullWidth
					value={text}
					onChange={(e) => {
						setText(e.target.value);
					}}
				/>

				<Button
					type="submit"
					fullWidth
					variant="contained"
					size="large"
					sx={{ color: "white", mt: 2 }}
				>
					Generate
				</Button>
				<Typography mt={2}>
					Not this tool ? <Link to="/">Go back</Link>
				</Typography>
			</form>
			{image ? (
				<Card
					sx={{
						mt: 4,
						border: 1,
						boxShadow: 0,
						height: "500px",
						borderRadius: 5,
						borderColor: "natural.medium",
						bgcolor: "background,default",
					}}
				>
					<Box sx={{display:'flex',justifyContent:'center',my:5}}>
            <img src={image} alt='scifiImage'/>
          </Box>
				</Card>
			) : (
				<Card
					sx={{
						mt: 4,
						border: 1,
						boxShadow: 0,
						height: "500px",
						borderRadius: 5,
						borderColor: "natural.medium",
						bgcolor: "background.default",
					}}
				>
					<Typography
						variant="h5"
						color="natural.main"
						sx={{
							textAlign: "center",
							verticalAlign: "middle",
							lineHeight: "450px",
						}}
					>
						Image will appear here
					</Typography>
				</Card>
			)}
		</Box>
	);
};

export default ScifiImage;
