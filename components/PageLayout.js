import { Container } from "react-bootstrap";
import BlogNavbar from "./BlogNavbar"
import Head from 'next/head'

export default function PageLayout(props){
    const {children, className} = props

    return (

        <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet" />
        </Head>

        <Container>
            <BlogNavbar />
            
            <div className = {` page-wrapper ${className}`} >
                {children}
            </div>

            <footer className="page-footer">
                <div>
                <a href="#">courses</a>{' | '}
                <a href="#">github</a>{' | '}
                <a href="#">facebook</a>
                </div>
            </footer>

        </Container>
        </>
    )
}