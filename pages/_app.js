import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Home.module.css'
import '../styles/globals.css'
import MyNavHeader from "../components/layout/MyNavHeader.js";
import MyFooter from "../components/layout/MyFooter";

function MyApp({Component, pageProps}) {
    return (
        <>
            <MyNavHeader></MyNavHeader>
            <Component {...pageProps} />
            <MyFooter></MyFooter>
        </>
    )
}

export default MyApp
