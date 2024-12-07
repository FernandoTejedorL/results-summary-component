import styled from 'styled-components';

const StyledMain = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;

	@media screen and (width>=768px) {
		padding-top: 20vh;
	}
`;
export { StyledMain };
