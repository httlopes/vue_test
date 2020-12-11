const express = required('express');
const serverStatic = required('serve-static');
const history = required('connect-history-api-fallback');
//const enforce = required('express-sslify');

const app = express();

//app.use(enforce.HTTPS({ trustProtoHeader: true}));
app.use(serverStatic(__dirname + '/dist'));
app.use(history());

app.listen(process.env.PORT || 5000);

