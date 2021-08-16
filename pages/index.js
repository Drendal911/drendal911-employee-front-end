import Head from "next/head";
import {Container, Table} from "react-bootstrap";
import MyTable from "../components/layout/MyTable";

export default function Home() {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/glass-monitor.ico"></link>
                <title>Emp Mgr</title>
            </Head>
            <Container>
                <div className={"testing"}>
                    <h1>Welcome to the Employee Manager System!</h1>
                    <p>
                        Irure tempor ut incididunt exercitation sint eu voluptate ad duis
                        voluptate. In mollit culpa eiusmod irure magna incididunt minim.
                        Elit aliquip ut ullamco aute ipsum nisi pariatur aute dolor quis
                        duis. In deserunt fugiat culpa velit aliqua deserunt ullamco anim
                        adipisicing ullamco magna quis elit veniam. Reprehenderit duis duis
                        mollit ea deserunt. Commodo proident in adipisicing do velit duis
                        commodo labore occaecat minim officia.
                    </p>
                    <MyTable></MyTable>
                </div>
            </Container>
        </>
    );
}