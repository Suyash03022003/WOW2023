// here 62 + 15 is the minimum top offset
// and rest will be sum of heights of all the previous texts
export const HeroSectionFloatingTexts = [
    {
        text: "#GDSCNagpur",
        fontSize: 36,
        height: 44,
        right: -40,
        top: 62 + 15 + 0,
    },
    {
        text: "#TechConference",
        fontSize: 36,
        height: 44,
        right: 0,
        top: 62 + 15 + 44,
    },
    {
        text: "#LetsWoW",
        fontSize: 52,
        height: 64,
        right: 0,
        top: 62 + 15 + 44 + 44,
    },
    {
        text: "#WoWNagpur",
        fontSize: 105,
        height: 128,
        right: -320,
        top: 62 + 15 + 44 + 64 + 64,
    },
    {
        text: "#LetsWoW",
        fontSize: 52,
        height: 64,
        right: -60,
        top: 62 + 15 + 44 + 64 + 64 + 128,
    },
    {
        text: "#GDSCNagpur",
        fontSize: 36,
        height: 44,
        right: -0,
        top: 62 + 15 + 44 + 64 + 64 + 128 + 64,
    },
    {
        text: "#TechConference",
        fontSize: 36,
        height: 44,
        right: -60,
        top: 62 + 15 + 44 + 64 + 64 + 128 + 64 + 44,
    },
    // now for all say wow they can be in one line
    // except 1st 4th and 7th
    // also the right offset is different for each
    // so we will have to do some math
    // fonts will be random among 18, 24, 36
    // based on fonts height will be different
    {
        text: 'Say "WoW"',
        fontSize: 18,
        height: 22,
        right: -0,
        top: 62 + 15 + 44 + 64 + 64 + 128 + 64 + 44 + 44,
    },
    {
        text: 'Say "WoW"',
        fontSize: 24,
        height: 28,
        right: 210,
        top: 62 + 15 + 44 + 64 + 64 + 128 + 64 + 44 + 44 + 22,
    },
    {
        text: 'Say "WoW"',
        fontSize: 36,
        height: 44,
        right: 0,
        top: 62 + 15 + 44 + 64 + 64 + 128 + 64 + 44 + 44 + 22,
    },
    {
        text: 'Say "WoW"',
        fontSize: 24,
        height: 28,
        right: 10,
        top: 62 + 15 + 44 + 64 + 64 + 128 + 64 + 44 + 44 + 22 + 44,
    },
    {
        text: 'Say "WoW"',
        fontSize: 18,
        height: 22,
        right: 0,
        top: 62 + 15 + 44 + 64 + 64 + 128 + 64 + 44 + 44 + 22 + 44 + 28,
    },
    {
        text: 'Say "WoW"',
        fontSize: 36,
        height: 44,
        right: 0,
        top: 62 + 15 + 44 + 64 + 64 + 128 + 64 + 44 + 44 + 22 + 44 + 28 + 22,
    },
    {
        text: 'Say "WoW"',
        fontSize: 24,
        height: 28,
        right: 160,
        top: 62 + 15 + 44 + 64 + 64 + 128 + 64 + 44 + 44 + 22 + 44 + 22,
    },
];
