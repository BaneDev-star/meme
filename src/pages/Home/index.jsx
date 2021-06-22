import React from 'react'
import PageLayout from "../../components/PageLayout";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";

export default function Home(props) {
    return (
        <PageLayout>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
        </PageLayout>
    )};
