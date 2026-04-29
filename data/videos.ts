export interface Video {
  id: string;
  title: string;
  episode: string;
  description: string;
  category: string;
}

export const videos: Video[] = [
  {
    id: "yn7qOubI-Y0",
    title: "LET'S CONVERSE GIRLS!!",
    episode: "EP.05",
    category: "Conversations",

    description:
      "What can two guys really know about the female experience? A raw, honest conversation exploring perspectives, misunderstandings, and the bridge between genders.",
  },
  {
    id: "MGHamQUvhoU",
    title: "GEN Z AND PARENTS: HANDLING DISAGREEMENTS",
    episode: "EP.04",
    category: "Family",

    description:
      "Navigating the generational gap. How to maintain honor and boundary when perspectives collide in the modern family dynamic.",
  },
  {
    id: "kZgbo5jvjHc",
    title: "Gen Z & Parents: The Beginning of the Rebellion?",
    episode: "EP.03",
    category: "Family",
    description:
      "Is it rebellion or is it evolution? We look at the roots of conflict and the start of independence within a faith-based household.",
  },
  {
    id: "1vuEqfTtyfo",
    title: "Serving in church as a gen-z Part 2",
    episode: "EP.02",
    category: "Service",
    description:
      "The continuation of our journey through ministry. Finding your place in traditional structures while maintaining a modern soul.",
  },
  {
    id: "MPGF-Vi0c6I",
    title: "Serving in church as a gen-z",
    episode: "EP.01",
    category: "Service",
    description:
      "What does it look like to give your time to a structure that often feels dated? Honest thoughts on the beauty and frustration of local church service.",
  },
];
