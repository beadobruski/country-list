/* eslint-disable */
import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background: ${(props) => props.theme['blue-500']};
  border-radius: 8px;

  @media (max-width: 1190px) {
    margin: 5rem 2rem;
    height: 100%;
  }

  @media (max-width: 500px) {
    margin: 5rem 0.8rem;
  }
  @media (max-width: 375px) {
    margin: 5rem 0.8rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;

  flex-wrap: wrap;
`;

export const SelectContainer = styled.select`
  background: transparent;
  height: 2.5rem;
  max-width: 100%;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  option {
    background: ${(props) => props.theme['gray-900']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-500']};
  }
`;

export const CountriesInfosContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  margin-top: 5rem;

  color: ${(props) => props.theme['gray-100']};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['yellow-500']};
    padding: 0.3rem;
    border-radius: 8px;

    @media (max-width: 515px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.3rem;
    }
  }
`;

export const CountrySettings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  background: ${(props) => props.theme['gray-900']};
  padding: 1rem;
  border-radius: 8px;
`;

export const SearchButton = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 1rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-100']};

  transition: background 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['gray-800']};
  }
`;
