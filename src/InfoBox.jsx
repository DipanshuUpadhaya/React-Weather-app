import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1661897016268-b77ad5186d02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NhdHRlcmVkJTIwY2xvdWRzfGVufDB8fDB8fHww";

  const HOT_URL =
    "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card className="weatherCard">
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>

            {/* <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <div>Temperature={info.temp}&deg;C</div>
                    <p>Humidity={info.humidity}</p>
                    <p>Min Temp={info.tempMin}&deg;C</p>
                    <p>Max Temp={info.tempMax}&deg;C</p>
                    <p>The weather can be described as <i>{info.weather}</i> and feels like={info.feelsLike}&deg;C</p>
                    </Typography> */}

            <div className="weatherDetails">
              <h1 className="temp">{info.temp}&deg;C</h1>

              <p className="condition">{info.weather}</p>

              <div className="stats">
                <div className="stat">
                  <span>💧</span>
                  <h4>{info.humidity}%</h4>
                  <p>Humidity</p>
                </div>

                <div className="stat">
                  <span>🌡</span>
                  <h4>{info.feelsLike}&deg;C</h4>
                  <p>Feels Like</p>
                </div>

                <div className="stat">
                  <span>⬆</span>
                  <h4>{info.tempMax}&deg;C</h4>
                  <p>Max Temp</p>
                </div>

                <div className="stat">
                  <span>⬇</span>
                  <h4>{info.tempMin}&deg;C</h4>
                  <p>Min Temp</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
