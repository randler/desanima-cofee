const express = require('express');
const routes = require('./src/routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use(express.static('./public'));
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);
