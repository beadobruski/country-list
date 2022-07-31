import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

import { FormContainer, SelectContainer } from '../../Home/styles';
import { CountriesInfos } from '../CountriesInfos';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com',
});

const LIST_COUNTRIES = gql`
  query {
    countries {
      name
      code
      capital
      emoji
      currency
      languages {
        name
      }
    }
  }
`;

export interface CountriesDataProps {
  name: string;
  code: string;
  capital: string;
  emoji: string;
  currency: string;
  languages: {
    name: string;
  }[];
}

export function CountrySelect() {
  const [country, setCountry] = useState('AD');
  const [currentCountry, setCurrentCountry] = useState<CountriesDataProps>(
    {} as CountriesDataProps
  );

  useEffect(() => {
    const result = data?.countries.filter(
      (item: any) => item?.code === country
    );

    if (result) {
      setCurrentCountry(result[0]);
    }
  }, [country, setCurrentCountry]);

  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });
  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <>
      <FormContainer>
        <SelectContainer
          onChange={(event) => setCountry(event.target.value)}
          value={country}
        >
          {data.countries.map((country: any) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </SelectContainer>
      </FormContainer>

      <CountriesInfos currentCountry={currentCountry} />
    </>
  );
}
