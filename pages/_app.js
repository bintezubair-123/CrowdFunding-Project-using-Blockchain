import "@/styles/globals.css";

import { Footer,NavBar } from "../Components";

export default function App({ Component, pageProps }) {
  return(
    <>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
    </>
  );
}
