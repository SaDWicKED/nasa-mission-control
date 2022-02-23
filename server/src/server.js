const http = require('http');
const {mongoConnect} = require('./services/mongo');

const app = require('./app');

const {loadPlanetsData} = require('./models/planets.model')

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;


async function startServer() {
  await mongoConnect();
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
  });
}

startServer();




