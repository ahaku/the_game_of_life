import React from "react";
import Card from "@material-ui/core/Card";
import ButtonMD from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { GreetingPageReferenceText } from "./Text";
import "./GreetingPage.css";

const daytimeStyles = {
  Day: {
    backgroundColor: "lightgreen",
    color: "white",
    background:
      'url("https://www.tokkoro.com/picsup/2889456-digital-art-minimalism-nature-hill-trees-sun-birds-house___mixed-wallpapers.jpg") no-repeat center center fixed'
  },
  Evening: {
    backgroundColor: "lightblue",
    color: "black",
    background:
      'url("https://static.vecteezy.com/system/resources/previews/000/359/502/original/vector-purple-landscape-illustration.png") no-repeat center center fixed'
  },
  Morning: {
    backgroundColor: "lightgray",
    color: "black",
    background:
      'url("https://pbs.twimg.com/media/EAsH8GjUEAA1NRv.jpg:large") no-repeat center center fixed'
  },
  Night: {
    color: "white",
    background:
      'url("https://img1.goodfon.ru/original/1920x1080/1/c6/gory-les-noch-firewatch.jpg") no-repeat center center fixed'
  }
};

function GreetingPage() {
  const [style] = React.useState(daytimeStyles[timeOfTheDay()]);
  const [open, setOpen] = React.useState(false);

  function timeOfTheDay() {
    const hours = new Date().getHours();
    if (hours >= 0 && hours < 5) {
      return "Night";
    } else if (hours >= 5 && hours < 12) {
      return "Morning";
    } else if (hours >= 12 && hours < 17) {
      return "Day";
    } else {
      return "Evening";
    }
  }

  const greetingText = timeOfDay => {
    if (timeOfDay === "Night") {
      return "Доброй ночи, дорогой друг!";
    } else if (timeOfDay === "Morning") {
      return "Доброе утро, дорогой друг!";
    } else if (timeOfDay === "Evening") {
      return "Добрый вечер, дорогой друг!";
    } else {
      return "Добрый день, дорогой друг!";
    }
  };

  const clickHandler = () => {
    setOpen(true);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <div className="GreetingPageWrapper" style={style}>
      <Card>
        <h1>"Игра Жизни"</h1>
        <h2>{greetingText(timeOfTheDay())}</h2>
        <div className="GreetingPageButtonRow">
          <ButtonMD href="/mainpage" variant="contained" color="primary">
            Играть
          </ButtonMD>
          <ButtonMD onClick={clickHandler} variant="contained">
            Узнать правила
          </ButtonMD>
        </div>
        <Dialog open={open} onClose={closeHandler}>
          {" "}
          {GreetingPageReferenceText}{" "}
        </Dialog>
      </Card>
    </div>
  );
}

export default GreetingPage;
