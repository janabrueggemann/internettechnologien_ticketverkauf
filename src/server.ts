import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {createConnection } from "mysql2";



const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();


 app.get('/api/test', (req, res) => {
    console.log("Anfrage angekommen");
    var con = createConnection({
        host: "192.168.110.94",
      database: "Ticketverkaufdb",
      user: "yourusername",
      password: "yourpassword",
      ssl:{
            rejectUnauthorized: false
      }
 });

 
    con.connect(function(err){
      if(err) throw err;
      console.log("Connected to DB");
     // con.query("SELECT * FROM kunden", function(error,result,fields){
     //   console.log(result);
       // res.send(result);
       // Beispielabfrage (kannst du auskommentieren, wenn du willst)
    con.query("SELECT 1 + 1 AS solution", function(error, result, fields) {
      if (error) {
        res.status(500).send({ error: "Abfrage fehlgeschlagen" });
      } else {
        res.send({ answer: "Hat geklappt", dbResult: result });
      }
      con.end(function(err) {
        if (err) console.error("Fehler beim Schließen:", err);
        else console.log("Connection closed to DB");
      });
    });
  });
});
        
      
    // res.send({answer: "Hat geklappt"});


/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ts
 app.get('/api/test', (req, res) => {
 *   // Handle API request
 * });
 * 
 */

/**
 * Serve static files from /browser
 */

 app.get('/api/test', (req, res) => {
 });

app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the PORT environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log('Node Express server listening on http://localhost:${port}');
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);