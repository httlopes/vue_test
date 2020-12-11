const express = required('express');
const serverStatic = required('serve-static');
const history = required('connect-history-api-fallback');
const enforce = required('express-sslify');

const app = express();

app.listen(process.env.PORT || 5000);