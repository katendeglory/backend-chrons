const express = require('express');
const router = express.Router();
const axios = require("axios").default;

const backends = [
  "https://academiepotentiel.onrender.com",
  "https://base30.onrender.com",
  "https://motasystem.onrender.com",
  "https://nextgenbuilders.onrender.com",
  "https://fridhacours.onrender.com",
  "https://jonathanisaack.onrender.com",
  "https://paulzozo.onrender.com",
  "https://semeron.onrender.com",
  "https://tymapp.onrender.com",
  "https://church-app-vlhe.onrender.com",
  "https://generationjoel.onrender.com",
  "https://kenmuyaya.onrender.com",
  "https://pledge-manager.onrender.com",
]

router.get('/', async (req, res) => {
  try {
    console.log(`\n\n\n\n🔥 Firing up backends\n`);

    const runJobs = () => {
      backends.forEach(URL => {
        axios
          .get(`${URL}?from=node-job-runner`)
          .then(resURL => console.log(`✅ ${URL} : ${resURL.data}`))
          .catch(err => console.log(`❌ ${URL} : ${err.message}`))
      })
    }

    runJobs();

    res.send({ message: "Firing up backends..." });
  } catch (err) {
    console.log(`\n☹ An error occured:\n`);
    console.log(JSON.stringify(err, null, 4));
    res.send(({ err }))
  }
});

module.exports = router;