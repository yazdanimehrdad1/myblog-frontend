import { Container } from "react-bootstrap";
import BlogNavbar from "./BlogNavbar"
import Head from 'next/head'
import {useTheme} from 'providers/ThemeProvider'
export default function PageLayout(props){
    const {children, className} = props
    const {theme, toggleTheme} = useTheme()
    return (

        <div className={theme.type}>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet" />
        </Head>

        <Container>
            <BlogNavbar 
            theme={theme}
            toggleTheme = {toggleTheme}
            />
            
            <div className = {` page-wrapper ${className}`} >
                {children}
            </div>

            <footer className="page-footer">
                <div>
                <a href="https://twitter.com/mdadyaz">Twitter</a>{' | '}
                <a href="https://github.com/yazdanimehrdad1">github</a>{' | '}
                <a href="https://www.linkedin.com/in/mehrdad-yazdani/">LinkedIn</a>
                </div>
            </footer>

        </Container>

        <style jsx global>{`
            html, body {
            background: ${theme.background};
            color: ${theme.fontColor};
            transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
            }
            `}
        </style>



        </div>
    )
}