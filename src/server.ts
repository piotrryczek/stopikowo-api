import 'config/env';
import app from './app';

app.listen(5000, () => {
  console.log('Aplikacja wystartowała');
  console.log(process.env.JWT_SECRET);
});
