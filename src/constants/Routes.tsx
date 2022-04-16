import Home from "views/Home";

export default [
  {
    id: "home",
    label: "HOME",
    link: "/",
    component: (params: any) => <Home {...params} />,
  },
  {
    id: "roadmap",
    label: "ROADMAP",
    link: "/roadmap",
  },
  // {
  //   id: "trade",
  //   label: "Trade",
  //   link: "/trade/exchange",
  //   children: [
  //     {
  //       id: "exchange",
  //       label: "Exchange",
  //       link: "/trade/exchange",
  //     },
  //     {
  //       id: "liquidity",
  //       label: "Liquidity",
  //       link: "/trade/liquidity",
  //     },
  //   ],
  // },
  {
    id: "team",
    label: "TEAM",
    link: "/team",
  },
  {
    id: "fag",
    label: "FAG",
    link: "/fag",
  },
  {
    id: "nfts",
    label: "NFTS",
    link: "/nfts",
  },
];
