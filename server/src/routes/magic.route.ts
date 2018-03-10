import * as express from 'express';
import { MagicController } from '../controllers/magic.controller';

const router = express.Router();
const controller = new MagicController();

// /magic
router.get('/', controller.get);

export default router;
