import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { NavBar } from "../components";

function MyApp({ Component, pageProps }) {
  // console.log(store);
  return (
    // <ThemeProvider>
    <Provider store={store}>
      <NavBar />
      <Component {...pageProps} />
    </Provider>
    // </ThemeProvider>
  );
}

export default MyApp;
