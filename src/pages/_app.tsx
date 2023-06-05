import GlobalStyle from "@/styles/global-styles";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import MainLayout from "@/components/Layout/MainLayout";

const client = new QueryClient();

function MyApp({Component, pageProps}) {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools/>
      <GlobalStyle/>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </QueryClientProvider>
  )
}

export default MyApp
