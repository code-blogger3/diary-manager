import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/theme-utils";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.js";

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.100", "#101010")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors = {
  gray: {
    light: "#616161",
    dark: "#1e1e1e",
  },
};

const theme = extendTheme({ config, styles, colors });

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
          </ChakraProvider>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
