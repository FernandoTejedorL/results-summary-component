import BothCards from './components/bothcards/BothCards';
import Main from './components/main/Main';
import Result from './components/result/Result';
import Scores from './components/scores/Scores';
import Summary from './components/summary/Summary';
import { SCORES_INFO } from './constants/scores-info';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Main>
				<BothCards>
					<Result />
					<Summary>
						{SCORES_INFO.map(scores => (
							<Scores key={scores.id} {...scores} />
						))}
					</Summary>
				</BothCards>
			</Main>
		</>
	);
};

export default App;
