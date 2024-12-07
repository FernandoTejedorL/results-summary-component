import {
	StyledButton,
	StyledSummary,
	StyledSummaryCard,
	StyledSummaryContainer
} from './summary.styles';

const Summary = ({ children }) => {
	return (
		<StyledSummaryCard>
			<StyledSummary>Summary</StyledSummary>
			<StyledSummaryContainer>{children}</StyledSummaryContainer>
			<StyledButton href='#'>Continue</StyledButton>
		</StyledSummaryCard>
	);
};

export default Summary;
