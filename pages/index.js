import Head from "next/head";
import {Container, Button, Card} from "react-bootstrap";
import MyTable from "../components/layout/MyTable";
import MyOffCanvas from "../components/layout/MyOffCanvas";
import {useEffect, useState} from "react";
import {getAllEmployees} from "../http/dbMethods";

export default function Home(props) {
    const employeeState = props.employeeState
    const setEmployeeState = props.setEmployeeState
    const [employeeList, setEmployeeList] = useState([])




    useEffect(function () {
        getAllEmployees().then((result) => {
            setEmployeeList([...result])
        })
    }, [])

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/glass-monitor.ico"/>
                <title>Emp Mgr</title>
            </Head>
            <Container>
                <div>
                    <h1 className="text-center">Employee Manager System</h1>
                    <p>
                        The Employee Manager System is a platform where all important personal details of an employee
                        are stored and managed securely. Using this system, employee management and other administrative
                        activities become quicker and easier.

                    </p>
                    <p>Employees are the pillar of any organization and an ideal employee management tool makes a big
                        difference to an organization.Our HR software solution offers an intelligent module that keeps
                        you organized all the time by providing all data of employees at your fingertips.</p>
                    <MyTable employeeList={employeeList}/>
                    <MyOffCanvas
                        employeeState={employeeState}
                        setEmployeeState={setEmployeeState}
                    />
                </div>
            </Container>
        </>
    );
}