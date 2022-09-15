import '../styles/globals.css'
import dynamic from "next/dynamic";
const ChakraUI = dynamic(() => import("../styles/ChakraUI"), {
    ssr: true
});
function MyApp({ Component, pageProps }) {
  return <ChakraUI><Component {...pageProps} /></ChakraUI>
}

export default MyApp
