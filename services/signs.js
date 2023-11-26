import ephemeris from "ephemeris";
import pkg from "astrologyjs";
const { Person, ChartFactory } = pkg;

const getPlanetsPosition = (req, res) => {
  const birthdate = req.query.birthdate;
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;
  console.log("query", birthdate);

  console.log("birthdate", birthdate);

  const date = new Date(birthdate);
  console.log("date", date);

  var result = ephemeris.getAllPlanets(date, longitude, latitude, 0);

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
    { sign: "Libra", start: 180, end: 210 },
    { sign: "Escorpio", start: 210, end: 240 },
    { sign: "Sagitario", start: 240, end: 270 },
    { sign: "Capricornio", start: 270, end: 300 },
    { sign: "Acuario", start: 300, end: 330 },
    { sign: "Piscis", start: 330, end: 360 },
  ];

  const sign = zodiacSigns.find(
    (zodiac) => longitude >= zodiac.start && longitude < zodiac.end
  );

  return sign ? sign.sign : "Desconocido";
};

// const createPerson = async (date, longitude, latitude) => {
//   try {
//     person = await Person.create("Kenji", "1974-02-17T23:30Z", {lat: 37.4381927, lng: -79.18932});
//     return person;
//   } catch (err) {
//     console.error("Error al crear la persona:", err);
//     throw err;
//   }
// };

// const createChart = async (date, longitude, latitude) => {
//   try {
//     const person = await createPerson(date, longitude, latitude);

//     const natalChart = await ChartFactory.create("User's Natal Chart", person);

//     console.log("Natal Chart:", natalChart);
//   } catch (err) {
//     console.error("Error al crear el gráfico:", err);
//   }
// };

export default getPlanetsPosition;
