import { app } from './app.js';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
