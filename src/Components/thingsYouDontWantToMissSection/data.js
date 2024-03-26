import { ReactComponent as Codelabs } from "../../assets/thingsYouDontWantToMiss/codelabs.svg";
import { ReactComponent as ESports } from "../../assets/thingsYouDontWantToMiss/esports.svg";
import { ReactComponent as Food } from "../../assets/thingsYouDontWantToMiss/food.svg";
import { ReactComponent as Keynote } from "../../assets/thingsYouDontWantToMiss/keynote.svg";
import { ReactComponent as Networking } from "../../assets/thingsYouDontWantToMiss/networking.svg";
import { ReactComponent as Panel } from "../../assets/thingsYouDontWantToMiss/panel.svg";

const thingsYouDontWantToMissData = [
  {
    id: 1,
    title: "Workshops & Codelabs",
    svg: <Codelabs></Codelabs>,
    text: `Workshops offer hands-on experience with new technologies and techniques. You can learn about new tools and get practical tips for applying them in your work.`,
  }, {
    id: 2,
    title: "Keynote speeches",
    svg: <Keynote></Keynote>,
    text: `Keynote speeches are typically given by industry leaders and experts who can provide valuable insights into the latest trends and innovations in your field.`,
  }, {
    id: 3,
    title: "Panel Discussions",
    svg: <Panel></Panel>,
    text: `Panels bring together experts to discuss hot topics and share their insights. You can gain new perspectives and learn from the experiences of others in your field.`,
  }, {
    id: 4,
    title: "Food & Swags",
    svg: <Food></Food>,
    text: `Who doesn't wants the exciting Swags and the food? That's why we're happy to announce that we'll be providing exciting swags to commemorate this special event. And because we want our guests to have a great time from start to finish, we'll also be offering delicious food.`,
  }, {
    id: 5,
    title: "Networking",
    svg: <Networking></Networking>,
    text: `Networking is a key aspect of any technical event. It provides an opportunity to meet and connect with other professionals in your industry, exchange ideas, and build relationships that can help advance your career.`,
  } ,{
    id: 6,
    title: "E-Sports",
    svg: <ESports></ESports>,
    text: `The Esports event is a perfect chance to show off your gaming prowess and compete in popular games, win prizes and bragging rights up for grabs.`,
  }
  // {
  //   id: 1,
  //   title: "Technical content",
  //   svg: <PersonalComputerSvg></PersonalComputerSvg>,
  //   text: `Unlocking the best part of the most awaited intercontinental Google developer community, gdg Nagpur gives you a full package of knowledge and one on one interaction with global experts and technologies.`,
  // },
  // {
  //   id: 2,
  //   title: "Workshops & Codelabs",
  //   svg: <ToolsSvg></ToolsSvg>,
  //   text: `A coding rendezvous with your friends plus hands-on experience for a 2 day long workshop! What else could we ask for? Initiate your journey towards a new technology and get to learn it from experts.`,
  // },
  // {
  //   id: 3,
  //   title: "Networking",
  //   svg: <GlobeSvg></GlobeSvg>,
  //   text: `Expand your branches of knowledge and indentity further. Connect and collaborate with developers and tech enthusiasts on a single platform to create a new and exciting chapter in your and our timeline because our network is your networth.`,
  // },
  // {
  //   id: 4,
  //   title: "Swags",
  //   svg: <SliceOfPizza></SliceOfPizza>,
  //   text: `A long conference with empty stomach is just not fun! GDG Nagpur is making sure that your visit will surely leave a taste of orange city on your mind. As a souvenir for our great journey, you'll also be getting some cool goodies and google badges.`,
  // },
];

export default thingsYouDontWantToMissData;
