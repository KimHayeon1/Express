import { swaggerUi, swaggerSpec } from '@swagger/swagger';
import e from 'express';

const app = e();
app.set('port', 3000);
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'));
});
