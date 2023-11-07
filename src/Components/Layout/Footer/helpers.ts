type SubTitle = {
  id: number;
  title: string;
  link: string;
};

type Title = {
  id?: number;
  title?: string;
  subTitles: SubTitle[];
  subscribe?: string;
};

type SubLigal = {
  subscribe?: string;
  ligal?: string;
};

export const SubLigal: SubLigal[] = [
  {
    subscribe:
      "Subscribe to receive our weekly newsletter including full coverage of new game releases, exclusive game releases and great bonus offers. It doesn’t matter whether you’re a Player, Online Casino Operator or Game Developer, we have something of value for you!",
    ligal:
      "SlotsPilot is an independent source of information about online casinos and online casino games, not controlled by any gambling operator. All our reviews and guides are created honestly, according to the best knowledge and judgement of the members of our independent expert team; however, they are intended for informative purposes only and should not be construed as, nor relied upon as, legal advice. You should always make sure that you meet all regulatory requirements before playing in any selected casino.",
  },
];

export const titles: Title[] = [
  {
    id: 1,
    title: "Search by filters",
    subTitles: [
      {
        id: 1,
        title: "Casino Games",
        link: "#",
      },
      {
        id: 2,
        title: "Online Casinos",
        link: "#",
      },
      {
        id: 3,
        title: "Casino Bonuses",
        link: "#",
      },
      {
        id: 4,
        title: "Payment Methods",
        link: "#",
      },
      {
        id: 5,
        title: "Game Providers",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Additional",
    subTitles: [
      {
        id: 6,
        title: "User Reviews",
        link: "#",
      },
      {
        id: 7,
        title: "Bitcoin Casinos",
        link: "#",
      },
      {
        id: 8,
        title: "Best RTP Casinos",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    title: "About",
    subTitles: [
      {
        id: 9,
        title: "About Us",
        link: "#",
      },
      {
        id: 10,
        title: "Terms & Conditions",
        link: "#",
      },
      {
        id: 11,
        title: "Privacy Policy",
        link: "#",
      },
      {
        id: 12,
        title: "Cookie Policy",
        link: "#",
      },
      {
        id: 13,
        title: "Editorial Policy",
        link: "#",
      },
    ],
  },
];
