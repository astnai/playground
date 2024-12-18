export interface Project {
  id: number;
  title: string;
  about: string;
  videoUrl: string;
  projectUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Encrypted Effect",
    about: "An encrypted effect that displays text.",
    videoUrl: "/encrypted-effect.mp4",
    projectUrl: "https://text-encrypted-effect.vercel.app/",
  },
  {
    id: 2,
    title: "ASCII Webcam",
    about: "A webcam that displays ASCII art.",
    videoUrl: "/webcam-ascii.mp4",
    projectUrl: "https://jrd80rp.v0.build/",
  },
  {
    id: 3,
    title: "Hover Footer",
    about: "An interactive footer that reveals more on hover.",
    videoUrl: "/hover-footer.mp4",
    projectUrl: "https://b_rdv3W9iBYeM.v0.build/",
  },
  {
    id: 4,
    title: "Pokemon Battle",
    about: "A Pokémon battle simulator with engaging gameplay.",
    videoUrl: "/pokemon-battle.mp4",
    projectUrl: "https://hecosh5.v0.build/",
  },
  {
    id: 5,
    title: "Ipod Classic",
    about: "A digital replica of the iPod Classic.",
    videoUrl: "/ipod-classic.mp4",
    projectUrl: "https://b_lGHev2NvKKb.v0.build/",
  },
  {
    id: 6,
    title: "Practical Typing",
    about: "A game to improve typing speed and accuracy.",
    videoUrl: "/type.mp4",
    projectUrl: "https://b_jyzi3ug3h6o.v0.build/",
  },
];
