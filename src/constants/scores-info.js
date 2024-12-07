import { v4 } from 'uuid';

export const SCORES_INFO = [
	{
		id: v4(),
		url: './assets/images/icon-reaction.svg',
		type: 'Reaction',
		points: '80',
		$color: '#FF5555',
		$background: 'rgba(255, 85, 85, 0.05)'
	},
	{
		id: v4(),
		url: './assets/images/icon-memory.svg',
		type: 'Memory',
		points: '92',
		$color: '#FFB21E',
		$background: 'rgba(255, 176, 30, 0.05)'
	},
	{
		id: v4(),
		url: './assets/images/icon-verbal.svg',
		type: 'Verbal',
		points: '61',
		$color: '#00BB8F',
		$background: 'rgba(0, 187, 143, 0.05)'
	},
	{
		id: v4(),
		url: './assets/images/icon-visual.svg',
		type: 'Visual',
		points: '73',
		$color: '#1125D6',
		$background: 'rgba(17, 37, 214, 0.05)'
	}
];
