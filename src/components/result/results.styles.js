import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	height: 356px;
	width: 375px;
	border-radius: 0 0 32px 32px;
	background-image: linear-gradient(to bottom, #7755ff, #6943ff, #2f2ce9);
	padding: 24px 57px 40px 57px;
	text-align: center;

	@media screen and (width>=768px) {
		height: 512px;
		border-radius: 32px;
		justify-content: space-between;
		padding: 38px 54px 46px 54px;
	}
`;
export { StyledCard };

const StyledResultHText = styled.span`
	font-size: 18px;
	color: #cac9ff;
	font-weight: 700;

	@media screen and (width>=768px) {
		font-size: 24px;
	}
`;
export { StyledResultHText };

const StyledCircle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 140px;
	width: 140px;
	border-radius: 50%;
	background-image: linear-gradient(to bottom, #2521c9, #4d21c9);

	@media screen and (width>=768px) {
		height: 200px;
		width: 200px;
	}
`;
export { StyledCircle };

const StyledMainScore = styled.span`
	font-size: 56px;
	line-height: 72px;
	font-weight: 800;
	color: #fff;

	@media screen and (width>=768px) {
		font-size: 72px;
	}
`;
export { StyledMainScore };

const StyledOfTotal = styled.span`
	font-size: 16px;
	font-weight: 700;
	color: #cac9ff;
	opacity: 52%;

	@media screen and (width>=768px) {
		font-size: 18px;
	}
`;
export { StyledOfTotal };

const StyledGreat = styled.span`
	font-size: 24px;
	font-weight: 700;
	color: #fff;

	@media screen and (width>=768px) {
		font-size: 32px;
	}
`;
export { StyledGreat };

const StyledCaption = styled.span`
	font-size: 16px;
	font-weight: 500;
	color: #cac9ff;

	@media screen and (width>=768px) {
		font-size: 18px;
	}
`;
export { StyledCaption };
