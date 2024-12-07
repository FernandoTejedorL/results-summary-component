import styled from 'styled-components';

const StyledScore = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 56px;
	padding: 17px;
	border-radius: 12px;
	background-color: ${({ $background }) => $background};
`;
export { StyledScore };

const StyledTopic = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;
export { StyledTopic };

const StyledArea = styled.span`
	font-size: 16px;
	font-weight: 500;
	color: ${({ $color }) => $color};
`;
export { StyledArea };

const StyledObtained = styled.span`
	font-size: 16px;
	font-weight: 700;
	color: #303b59;
`;
export { StyledObtained };

const StyledOfTotal = styled.span`
	opacity: 50%;
`;
export { StyledOfTotal };
