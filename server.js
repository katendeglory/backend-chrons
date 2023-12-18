/* Imports */
const express = require('express');
const cors = require('cors');

/* App settings */
const app = express();

/* Multiple Origins */
let allowedOrigins = ["http://localhost"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      let msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));


app.use(require('morgan')('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Welcome Page */
app.get('/', (req, res) => {
  res.send("Welcome To My App ⭐⭐⭐");
});

app.use("/fire", require('./routes/fire'));

/* App */
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`\n✅ Server running on PORT ${port} \n`));