import app from "./app";

let port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
// babel-node --extensions \".ts\" index.ts
// webpack --mode=development --config ./webpack.config.js && node ./dist/bundle.js
