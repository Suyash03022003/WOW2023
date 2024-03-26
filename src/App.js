import "./App.css";
import aos from "aos";

import "aos/dist/aos.css";

import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import WhatisGDSC from "./Components/WhatIsGDSC/WhatIsGDSC.js";
import AllAccessPass from "./Components/allAccessPass/AllAccessPass";
import WeAreSpeakingLouderMain from "./Components/weAreSpeakingLouderSection/WeAreSpeakingLouderMain";
import ThingsYouDontWantToMissMain from "./Components/thingsYouDontWantToMissSection/ThingsYouDontWantToMissMain";
import RegionalGDSCs from "./Components/regionalGDSCs/CommunityPartner";
// import Agenda from "./Components/agenda/Schedule";
import { Schedule } from "./Components/agenda/Schedule";
import CommunityPartner from "./Components/communityPartners/CommunityPartner";
import { ThemeProvider } from "./hooks/useTheme";
import { useEffect } from "react";
import FAQs from "./Components/FAQs/FAQs";
import Footer from "./Components/footer/Footer";
import Venue from './Components/venue/Venue';
// import CommunityPartner from './Components/communityPartner/CommunityPartner';


function App() {
    useEffect(() => {
        aos.init({
            duration: 1828.3268, // birthday digits (everybody?) :)...
            // initClassName: "sb-initial-anim",
            // once: true,
            // mirror: true,
            // offset: 50,
            // debounceDelay: 100,
            // throttleDelay: 100,
        });
    }, []);

    return (
        <ThemeProvider>
            <Header location={"Home"}/>
            <Hero />
            <WhatisGDSC />
            <AllAccessPass />
            <WeAreSpeakingLouderMain />
            <ThingsYouDontWantToMissMain />
            <Venue/>
            <Schedule/>
            <RegionalGDSCs />
            {/* <CommunityPartner /> */}
            <FAQs />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
