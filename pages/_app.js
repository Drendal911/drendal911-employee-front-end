import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavHeader from "../components/layout/MyNavHeader.js";
import MyFooter from "../components/layout/MyFooter";
import {useState} from "react";

export default function MyApp({Component, pageProps}) {
    const [monthlyTotals, setMonthlyTotals] = useState([])
    const [modalMsg, setModalMsg] = useState("")
    const [modalShow, setModalShow] = useState(false);
    const [employeeState, setEmployeeState] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        position: "",
        birthDate: ""
    })
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date()
    })

    return (
        <>
            <MyNavHeader/>
            <Component {...pageProps}
                       modalMsg={modalMsg}
                       setModalMsg={setModalMsg}
                       modalShow={modalShow}
                       setModalShow={setModalShow}
                       employeeState={employeeState}
                       setEmployeeState={setEmployeeState}
                       monthlyTotals={monthlyTotals}
                       setMonthlyTotals={setMonthlyTotals}
                       dateRange={dateRange}
                       setDateRange={setDateRange}
            />
            <MyFooter/>
        </>
    )
}