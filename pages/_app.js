import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavHeader from "../components/layout/MyNavHeader.js";
import MyFooter from "../components/layout/MyFooter";
import {useState} from "react";

export default function MyApp({Component, pageProps}) {
    const [modalMsg, setModalMsg] = useState("")
    return (
        <>
            <MyNavHeader/>
            <Component {...pageProps} modalMsg={modalMsg} setModalMsg={setModalMsg}/>
            <MyFooter/>
        </>
    )
}

