import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Autocomplete, TextField, Button } from "@mui/material";
import allCountries from "./assets/allCountries.json";
import { useState } from "react";
import CountryInfo from "./components/CountryInfo";

const countryNameList = allCountries.map((country) => {
  return country.name;
});

countryNameList.sort();

const darkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#e68fec",
    },
  },
});

function App() {
  const [currentSelection, setCurrentSelection] = useState("");
  const [countryToGetInfoFrom, setCountryToGetInfoFrom] = useState("");

  function handleAutocompleteChange(_event, value) {
    console.log(value);
    setCurrentSelection(value);
  }

  function handleGetInfo() {
    setCountryToGetInfoFrom(currentSelection);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <h1>Learn About Countries!</h1>

        <Autocomplete
          onChange={handleAutocompleteChange}
          disablePortal
          options={countryNameList}
          renderInput={(params) => <TextField {...params} label="Country" />}
        />

        <Button
          onClick={handleGetInfo}
          id="get-info-button"
          variant="contained"
        >
          get info
        </Button>

        <CountryInfo countryName={countryToGetInfoFrom} />

        <h2>About this project</h2>
        <p className="link-text">Find the source code here</p>
        <Button variant="contained">
          <a
            href="https://github.com/Yolande0713/LearnAboutCountries"
            target="_blank"
            className="link"
          >
            Source Code
          </a>
        </Button>
        <p className="link-text">Check out my other projects and find out more about me</p>
        <Button variant="contained">
          <a
            href="https://yolande0713.github.io/"
            target="_blank"
            className="link"
          >
            Portfolio Site
          </a>
        </Button>
      </main>
    </ThemeProvider>
  );
}

export default App;
