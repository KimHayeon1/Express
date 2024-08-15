import { swaggerUi, swaggerSpec } from './swagger/swagger';
import e from 'express';
const app = e();
app.set('port', 3000);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));
app.listen(app.get('port'), () => {
    console.log(app.get('port'));
});
