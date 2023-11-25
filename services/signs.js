import ephemeris from "ephemeris";

const getPlanetsPosition = (req, res) => {
  const birthdate = req.query.birthdate;
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;
  console.log("query", birthdate);

  console.log("birthdate", birthdate);

  const fecha = new Date(birthdate);
  console.log("fecha", fecha);

  //const dateObj = new Date("2015-08-10T17:09:01.000+08:00");

  // parameters: ephemeris.getAllPlanets(dateObj, longitude, latitude, height);
  var result = ephemeris.getAllPlanets(fecha, longitude, latitude, 0);
  // 10.0014
  // 53.5653
  if (result) {
    // Agrega el signo del zodiaco al objeto result
    Object.keys(result.observed).forEach((planet) => {
      const planetData = result.observed[planet];
      const longitude = planetData.apparentLongitudeDd;
      const zodiacSign = getSignForLongitude(longitude);
      planetData.zodiacSign = zodiacSign;
    });

    res.status(200).json(result);
    console.log(result);
  } else {
    res
      .status(400)
      .json({ msg: "No se pudo obtener la informacion de los planetas" });
  }
};

const getSignForLongitude = (longitude) => {
  const zodiacSigns = [
    { sign: "Aries", start: 0, end: 30 },
    { sign: "Tauro", start: 30, end: 60 },
    { sign: "Géminis", start: 60, end: 90 },
    { sign: "Cáncer", start: 90, end: 120 },
    { sign: "Leo", start: 120, end: 150 },
    { sign: "Virgo", start: 150, end: 210 },
    { sign: "Libra", start: 180, end: 120 },
    { sign: "Escorpio", start: 210, end: 240 },
    { sign: "Sagitario", start: 240, end: 270 },
    { sign: "Capricornio", start: 270, end: 300 },
    { sign: "Acuario", start: 300, end: 330 },
    { sign: "Piscis", start: 330, end: 360 },
  ];

  const sign = zodiacSigns.find(
    (zodiac) => longitude >= zodiac.start && longitude < zodiac.end
  );

  console.log("sign", sign);
  return sign ? sign.sign : "Desconocido";
};




export default getPlanetsPosition;