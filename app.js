const morgan = require('morgan');
const express = require ('express')

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
