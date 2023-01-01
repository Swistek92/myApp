"use client";
import { ReactQueryDevtools } from "react-query/devtools";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
// import { Provider } from "react-redux";
// import store from "../../store/index";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

{
  /* <Provider store={store}> */
}
// </Provider>
const Wrappers = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <ThemeProvider enableSystem={true} defaultTheme='dark'>
          {children}
        </ThemeProvider>
      </SessionProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default Wrappers;
