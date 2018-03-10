import * as moment from 'moment-timezone';
import * as Winston from 'winston';

const environment = process.env.NODE_ENV || 'local';
const config = require(`../../config/${environment}`);

const DEFAULT_TIMEZONE = 'America/Sao_Paulo';
moment.tz.setDefault(DEFAULT_TIMEZONE);

export function getEnv(): string {
  return environment;
}

export function getConfig(): any {
  return config;
}

export const winston = new (Winston.Logger)({
  transports: config.logger.transports,
  level: config.logger.level
});
