const app = require('./server');
const { port } = require('./configs');
require('./database');
require('./routes/auth');
require('./routes/urlShortener');
require('./routes/getData');

app.listen(port, () => {
  console.log(`listening in port:${port}`);
});
