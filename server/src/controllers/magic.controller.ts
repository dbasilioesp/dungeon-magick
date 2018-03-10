import { Response, Request } from 'express';
import { Magic } from '../models/magic.model';

export class MagicController {

  public async get(req: Request, res: Response) {
    const result = await Magic.findOne({});
    res.jsonp(result);
  }

}
