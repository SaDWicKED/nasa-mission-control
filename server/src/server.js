const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const {loadPlanetsData} = require('./models/planets.model')

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

const MONGO_URL='mongodb+srv://sadwicked:DreamS*26@cluster0.qxa5v.mongodb.net/nasa?retryWrites=true&w=majority'

mongoose.connection.once('open', ()=>{
  console.log('MongoDB connection ready!');
});

mongoose.connection.once('error', (error)=>{
  console.error(error);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
  });
}

startServer();




