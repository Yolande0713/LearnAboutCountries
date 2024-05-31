import allCountries from "../assets/allCountries.json";

export default function CountryInfo({ countryName }) {
  const foundCountry = allCountries.find(
    (country) => country.name === countryName
  );

  if (!foundCountry) {
    return <p>please search for a country...</p>;
  }

  return (
    <div>
      <h2>{foundCountry.name}</h2>
      <img src={foundCountry.flag.image} alt={foundCountry.flag.alt} />
      <p>Capital: {foundCountry.capital || "N/A"}</p>
      <h3>Languages</h3>
      {foundCountry.languages.length > 0 ? (
        <ul>
          {foundCountry.languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      ) : (
        <p>N/A</p>
      )}
    </div>
  );
}
