import HeroSection from "./HeroSection";
import RolesSection from "./RolesSection";
import { SmoothScrollHero } from "./SmoothScrollHero";

export default function Home() {
    return (
        <>
        <SmoothScrollHero/>
        <HeroSection />
        <RolesSection />
        </>
    );
};