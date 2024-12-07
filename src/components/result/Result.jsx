import {
	StyledCaption,
	StyledCard,
	StyledCircle,
	StyledGreat,
	StyledMainScore,
	StyledOfTotal,
	StyledResultHText
} from './results.styles';

const Result = () => {
	return (
		<StyledCard>
			<StyledResultHText>Your Result</StyledResultHText>
			<StyledCircle>
				<StyledMainScore>76</StyledMainScore>
				<StyledOfTotal>of 100</StyledOfTotal>
			</StyledCircle>
			<StyledGreat>Great</StyledGreat>
			<StyledCaption>
				Your performance exceed 65% of the people conducting the test here!
			</StyledCaption>
		</StyledCard>
	);
};
export default Result;
