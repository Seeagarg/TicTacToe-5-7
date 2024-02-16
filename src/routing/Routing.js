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
import LevelsPageMultiplePlayer from "../pages/LevelsPageMultiplePlayer";
import Grid5Multiplayer from "../pages/Grid5Multiplayer";
import Grid7Multiplayer from "../pages/Grid7Multiplayer";

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
      path: "/multi-player/levels",
      element: <LevelsPageMultiplePlayer />,
    },
    {
      path: "/game-mode-multiplayer",
      element: <GameMultiplayerPage />,
    },
    {
      path: "/game-mode-multiplayer/5*5",
      element: <Grid5Multiplayer />,
    },
    {
      path: "/game-mode-multiplayer/7*7",
      element: <Grid7Multiplayer />,
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
      path: "/single-player/game-mode-5*5",
      element: <Grid4/>,
    },
    {
      path: "/single-player/game-mode-7*7",
      element: <Grid7/>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routing;
