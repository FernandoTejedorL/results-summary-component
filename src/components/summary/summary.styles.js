import styled from 'styled-components';

const StyledSummaryCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 24px 32px;
	width: 375px;

	@media screen and (width>=768px) {
		padding: 38px 40px;
		gap: 28px;
	}
`;
export { StyledSummaryCard };

const StyledSummary = styled.span`
	font-size: 18px;
	font-weight: 700;
	color: #303b59;

	@media screen and (width>=768px) {
		font-size: 24px;
	}
`;
export { StyledSummary };

const StyledButton = styled.a`
	height: 56px;
	width: 315px;
	text-align: center;
	padding: 17px;
	color: #fff;
	font-size: 18px;
	font-weight: 700;
	border-radius: 128px;
	background-color: #303b59;

	@media (hover: hover) {
		&:hover {
			background-image: linear-gradient(to bottom, #7755ff, #6943ff, #2f2ce9);
		}
	}

	@media screen and (width>=768px) {
		width: 288px;
		margin-top: 13px;
	}
`;
export { StyledButton };

const StyledSummaryContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
export { StyledSummaryContainer };
