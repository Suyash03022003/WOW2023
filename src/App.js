import "./App.css";

import "./App.css";
import Header from './Components/Header/Header';
import Hero from "./Components/Hero/Hero";
import WhatisGDSC from "./Components/WhatIsGDSC/WhatIsGDSC.js";
import AllAccessPass from "./Components/allAccessPass/allAccessPass";
import WeAreSpeakingLouderMain from "./Components/weAreSpeakingLouderSection/WeAreSpeakingLouderMain";
import ThingsYouDontWantToMissMain from "./Components/thingsYouDontWantToMissSection/ThingsYouDontWantToMissMain";
import CommunityPartner from "./Components/communityPartner/CommunityPartner";

import { ThemeProvider } from "./hooks/useTheme";
// import { useContext, useEffect } from "react";
// import { themeContext } from "./context/theme";

function App() {

    // const { theme } = useContext(themeContext);
    // useEffect(() => {
    //     var style = getComputedStyle(document.documentElement).getPropertyValue('--bg-dark')
    //     if (style === '#fff' || style === 'white' || style === '#ffffff') {
    //         document.documentElement.style.setProperty('--bg-dark', "#212224")
    //     } else {
    //         document.documentElement.style.setProperty('--bg-dark', "#fff")
    //     }
    // }, [theme])
    return (
        <ThemeProvider>
            <Header />
            <Hero />
            <WhatisGDSC />
            <AllAccessPass />
            <WeAreSpeakingLouderMain />
            <ThingsYouDontWantToMissMain />
            <CommunityPartner />
        </ThemeProvider>
    );
}

export default App;
