import { MovieListIcon } from "../assets/icons/MovieListIcon";
import { PlaneIcon } from "../assets/icons/PlaneIcon";
import { SpaceIcon } from "../assets/icons/SpaceIcon";
import movieListImage from "../assets/images/myMovieListSS.png";
import beyondImage from "../assets/images/beyondSS.png";
import flightAppImage from "../assets/images/flightAppSS.png";
import { RoughNotation } from "react-rough-notation";

export const ProjectData = [
  {
    name: "MyMovieList",
    imageURL: movieListImage,
    description: (
      <>
        <p className="description-text">
          A web app designed for users to{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            save movies
          </RoughNotation>{" "}
          to their list that they have watched or want to watch later. Users can
          also{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            rate movies
          </RoughNotation>{" "}
          that they have added to their watched list.
        </p>
        <p className="description-text">
          User{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            authentication
          </RoughNotation>{" "}
          and{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            authorization
          </RoughNotation>{" "}
          is handled using{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            bcrypt and JWT tokens
          </RoughNotation>{" "}
          .
        </p>
        <p className="description-text">
          Movies are fetched from the{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            TMDB movie API
          </RoughNotation>{" "}
          which allows the retrieval of popular movies, trending movies, and
          movie search.{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            Google AI Gemini
          </RoughNotation>{" "}
          handles movie recommendations based on movie genre or the users own
          personalized list.
        </p>
      </>
    ),
    tools: ["JavaScript", "React", "Node", "MongoDB", "Gemini AI", "Git"],
    siteLink: "https://google-hack-deploy-frontend.vercel.app/",
    sourceCode: "https://github.com/hackathon-team-ajgk/google-hack-deploy",
    icon: <MovieListIcon />,
  },
  {
    name: "Beyond",
    imageURL: beyondImage,
    description: (
      <>
        <p className="description-text">
          A{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            sky catalog web app
          </RoughNotation>{" "}
          for users to{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            browse hundreds
          </RoughNotation>{" "}
          of sky objects and{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            save their favourites
          </RoughNotation>{" "}
          to their collection. Users can also{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            create new sky objects
          </RoughNotation>{" "}
          to add to the database.
        </p>
        <p className="description-text">
          When launching the site users can{" "}
          <RoughNotation
            type="underline"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            login
          </RoughNotation>{" "}
          or{" "}
          <RoughNotation
            type="underline"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            register
          </RoughNotation>{" "}
          either through the site itself or{" "}
          <RoughNotation
            type="circle"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            using Google
          </RoughNotation>{" "}
          .Profiles can be{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            edited
          </RoughNotation>{" "}
          including a profile picture.
        </p>
        <p className="description-text">
          The website contains a{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            sky map
          </RoughNotation>{" "}
          that displays the stars in space and stars, or groups of stars
          (constellations){" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            can be selected.
          </RoughNotation>
        </p>
      </>
    ),
    tools: ["TypeScript", "React", "Python", "Terraform", "AWS", "API", "Git"],
    siteLink: "https://beyond-the-stars.netlify.app/",
    sourceCode: "https://github.com/ensf401-beyond/beyond-fe",
    icon: <SpaceIcon />,
  },
  {
    name: "Flight Reservation App",
    imageURL: flightAppImage,
    description: (
      <>
        <p className="description-text">
          A java app for users to{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            book or manage flights
          </RoughNotation>{" "}
          based on{" "}
          <RoughNotation
            type="circle"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            role.
          </RoughNotation>{" "}
          Roles include{" "}
          <RoughNotation
            type="underline"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            admin
          </RoughNotation>
          ,{" "}
          <RoughNotation
            type="underline"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            airline agent,
          </RoughNotation>{" "}
          <RoughNotation
            type="underline"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            passenger
          </RoughNotation>
          , and{" "}
          <RoughNotation
            type="underline"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            guest
          </RoughNotation>
          .
        </p>
        <p className="description-text">
          Passengers can{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            book flights
          </RoughNotation>{" "}
          and select seats through a graphical seat map. Airline agents can see{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            list of passengers on assigned flights
          </RoughNotation>
          . Admins can{" "}
          <RoughNotation
            type="underline"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            add new flights
          </RoughNotation>
          ,{" "}
          <RoughNotation
            type="underline"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            delete flights
          </RoughNotation>
          ,{" "}
          <RoughNotation
            type="underline"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            modify flights
          </RoughNotation>
          , and{" "}
          <RoughNotation
            type="box"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            much more.
          </RoughNotation>{" "}
          Guests can only view the app.
        </p>
        <p className="description-text">
          The focus was system design so a{" "}
          <RoughNotation
            type="highlight"
            color="#d9c6e5"
            show={true}
            multiline={true}
          >
            plethora of system diagrams
          </RoughNotation>
          , such as{" "}
          <RoughNotation
            type="underline"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            sequence diagrams
          </RoughNotation>{" "}
          and{" "}
          <RoughNotation
            type="underline"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            state transition diagrams
          </RoughNotation>
          , can be found in the repository which demonstrate the{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#d9c6e5"
            multiline={true}
          >
            structure and flow of the system.
          </RoughNotation>
        </p>
      </>
    ),
    tools: ["Java", "MySQL", "Git", "Design Patterns"],
    sourceCode: "https://github.com/AarshShah9/Airplane-System",
    icon: <PlaneIcon />,
  },
];
