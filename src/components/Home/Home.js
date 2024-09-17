import HeroSection from "./HeroSection";
import RolesSection from "./RolesSection";
import { SmoothScrollHero } from "./SmoothScrollHero";
import LandingSection from "./LandingSection";
import GetInvolvedSection from "./GetInvolvedSection";

export default function Home() {
    return (
        <>
        <LandingSection/>
        <SmoothScrollHero/>
        <HeroSection />
        <RolesSection />
        <GetInvolvedSection />
        </>
    );
};