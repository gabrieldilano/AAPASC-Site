import { useEffect } from "react";
import { SmoothScrollHero } from "../Home/SmoothScrollHero";
import CultureFestInfo from "./CultureFestInfo";
import CultureFestPics from "./Culturefestpics";
import Headliners from "./Headliners";
import VintageAlley from "./VintageAlley";
import CultureFestOrgPerformances from "./CultureFestOrgPerformace";

export default function CultureFestPage() {
  return (
    <>
      <CultureFestInfo />
      <CultureFestOrgPerformances />
      {/* <CultureFestPics/> */}
      {/* <Headliners /> */}
    </>
  );
}
