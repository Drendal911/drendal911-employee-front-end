import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Home.module.css'
import '../styles/globals.css'
import MyNavHeader from "../components/layout/MyNavHeader.js";
import MyFooter from "../components/layout/MyFooter";
import {Container} from "react-bootstrap";

function MyApp({Component, pageProps}) {
    return (
        <>
            <MyNavHeader/>
            <Component {...pageProps} />
            <MyFooter/>
        </>
    )
}

export default MyApp
