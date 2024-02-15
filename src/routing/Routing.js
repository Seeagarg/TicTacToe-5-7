import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GameMultiplayerPage from "../pages/GameMultiplayerPage";
import HomePage from "../pages/HomePage";
import SinglePlayerEasyMode from "../pages/SinglePlayerEasyMode";
import SinglePlayerMediumMode from "../pages/SinglePlayerMediumMode";
import LevelsPage from "../pages/LevelsPage";
import SinglePlayerHardMode from "../pages/SinglePlayerHardMode";
import Grid4 from "../pages/Grid4";
import Grid7 from "../pages/Grid7";

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/single-player/levels",
      element: <LevelsPage />,
    },
    {
      path: "/game-mode-multiplayer",
      element: <GameMultiplayerPage />,
    },
    {
      path: "/single-player/game-mode-easy",
      element: <SinglePlayerEasyMode />,
    },
    {
      path: "/single-player/game-mode-medium",
      element: <SinglePlayerMediumMode />,
    },
    {
      path: "/single-player/game-mode-hard",
      element: <SinglePlayerHardMode />,
    },
    {
      path: "/grid4",
      element: <Grid4/>,
    },
    {
      path: "/grid7",
      element: <Grid7/>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routing;
