import { FormContainer } from '../../Home/styles';
import { CountrySelect } from './CountrySelect';

export function SearchCountry() {
  return (
    <FormContainer>
      <label htmlFor="country">Selecione um país</label>
      <CountrySelect />
    </FormContainer>
  );
}
