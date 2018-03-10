import * as express from 'express';
import routerMagic from './magic.route';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/magic', routerMagic);

export default router;
