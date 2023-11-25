import express from "express";
import createCicle from '../services/cicles.js'
import calcularPosicionDelSol from '../services/signs.js'


const route = express.Router();

route.post("/create", createCicle);
route.get("/signs", calcularPosicionDelSol);


 //CRUD de los juegos
//route.get("/games", gameController.getGames);
// route.get("/games/:idgame", gameController.getGameById);
// route.post("/games",[validateCreateGame] ,gameController.createGame);
// route.patch("/games/:idgame",[validateUpdateGame] ,gameController.updateGame);
// route.delete("/games/:idgame",gameController.deleteGame);

// route.post('/judges', judgeController.createJudge);

// route.post('/votes',[validateCreateVote] , voteController.createVote);
// route.get('/games-points-average/:gameId', gameController.getAverageScoresById);
// route.get('/votes-games/:judgeId', voteController.getVoteGames);
// route.get('/votes-judges/:gameId',voteController.getVoteJudges);
// route.get('/games-by-edition/:edition', gameController.getGamesByEdition)


export default route