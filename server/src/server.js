const http = require('http');

const app = require('./app');

const {mongoConnect} = require('./services/mongo');
const {loadPlanetsData} = require('./models/planets.model');
const {loadLaunchesData} = require('./models/launches.model');

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;


async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchesData();

  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
  });
}

startServer();




