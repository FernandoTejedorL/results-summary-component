import {
	StyledArea,
	StyledObtained,
	StyledOfTotal,
	StyledScore,
	StyledTopic
} from './scores.styles';

const Scores = ({ url, type, points, $background, $color }) => {
	return (
		<StyledScore $background={$background}>
			<StyledTopic>
				<img src={url} alt='icon' />
				<StyledArea $color={$color}>{type}</StyledArea>
			</StyledTopic>
			<StyledObtained>
				{points} <StyledOfTotal>/ 100</StyledOfTotal>
			</StyledObtained>
		</StyledScore>
	);
};
export default Scores;
