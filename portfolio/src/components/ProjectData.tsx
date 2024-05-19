import { MovieListIcon } from "../assets/icons/MovieListIcon";
import { PlaneIcon } from "../assets/icons/PlaneIcon";
import { SpaceIcon } from "../assets/icons/SpaceIcon";
import movieListImage from "../assets/images/myMovieListSS.png";
import beyondImage from "../assets/images/beyondSS.png";
import flightAppImage from "../assets/images/flightAppSS.png";
export const ProjectData = [
  {
    name: "MyMovieList",
    imageURL: movieListImage,
    description: [
      "A web app designed for users to save movies to their list that they have watched or want to watch later. Users can also rate movies that they have added to their watched list.",
      "User authentication and authorization is handled using bcrypt and JWT tokens.",
      "Movies are fetched from the TMDB movie API which allows the retrieval of popular movies, trending movies, and movie search. Google AI Gemini handles movie recommendations based on movie genre or the users own personalized list.",
    ],
    tools: ["JavaScript", "React", "Node", "MongoDB", "Gemini AI", "Git"],
    siteLink: "https://google-hack-deploy-frontend.vercel.app/",
    sourceCode: "https://github.com/hackathon-team-ajgk/google-hack-deploy",
    icon: <MovieListIcon />,
  },
  {
    name: "Beyond",
    imageURL: beyondImage,
    description: [
      "A sky catalog web app for users to browse hundreds of sky objects and save their favourites to their collection. Users can also create new sky objects to add to the database.",
      "When launching the site users can login or register either through the site itself or using Google. Profiles can be edited including a profile picture.",
      "The website contains a sky map that displays the stars in space and stars, or groups of stars (constellations) can be selected",
    ],
    tools: ["TypeScript", "React", "Python", "Terraform", "AWS", "API", "Git"],
    siteLink: "https://beyond-the-stars.netlify.app/",
    sourceCode: "https://github.com/ensf401-beyond/beyond-fe",
    icon: <SpaceIcon />,
  },
  {
    name: "Flight Reservation App",
    imageURL: flightAppImage,
    description: [
      "An app made purely using java for the front-end and the back-end. When running the app users can login or register as different roles including admin, airline agent, passenger, and guest.",
      "Passengers can book flights and select seats through a graphical seat map. Airline agents can see list of passengers on assigned flights. Admins can add new flights, delete flights, modify flights, and much more. Guests can only view the app.",
      "The focus of this project was the actual design so a plethora of diagrams can be found in the repository which demonstrate the structure and flow of the system.",
    ],
    tools: ["Java", "MySQL", "Git", "Design Patterns"],
    sourceCode: "https://github.com/AarshShah9/Airplane-System",
    icon: <PlaneIcon />,
  },
];
