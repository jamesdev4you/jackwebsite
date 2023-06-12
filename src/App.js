import Menu from "./primary_components/Menu";
import Home from "./primary_components/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  shape: {
    pillRadius: 50,
  },
  palette: {
    primary: { main: "#000000" },
    secondary: {
      main: "#fff",
    },
    error: { main: "#ffd700" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Home />
    </ThemeProvider>
  );
}

export default App;
