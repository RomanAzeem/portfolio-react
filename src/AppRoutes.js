import * as React from "react";

const Navbar = React.lazy(() => import("components/Navbar"));
const Home = React.lazy(() => import("components/Home"));
const About = React.lazy(() => import("components/About"));
const Skills = React.lazy(() => import("components/Skills"));
const Work = React.lazy(() => import("components/Work"));
const Contact = React.lazy(() => import("components/Contact"));
const Routes = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Work />
            <Contact />
        </React.Fragment>
    )
}

export default Routes