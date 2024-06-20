import styled from "styled-components";

export const HeaderSC = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 5vh;
	padding: 10px;
	
	display: flex;
	justify-content: right;
	align-items: center;
	gap: 30px;

	list-style-type: none;

	.switchCenter{
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;

		p {
			font-family: 'Poppins', sans-serif;
			font-weight: 700;
		}
	}

	#language-center {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 7px;

		img {
			height: 35px;
		}
	}
`