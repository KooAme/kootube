import 'dotenv/config';
import './db'; //파일 자체를 Import,내 서버가 mongo에 연결
import './models/Video';
import './models/User';
import app from './server';

const PORT = 4000;

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}⭐️`);
};

app.listen(PORT, handleListening);
