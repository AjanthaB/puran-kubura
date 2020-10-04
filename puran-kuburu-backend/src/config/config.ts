/**
 * @author Ajantha Bandara
 */

import Joi from 'joi';

import defaultEnv from './env/default';
import devEnv from './env/development';
import prodEnv from './env/prod';

const envSchema = Joi.object({
  env: Joi.string()
    .allow(['dev', 'development', 'default'])
    .default('default'),
  port: Joi.number()
    .default(8080),
  host: Joi.string()
    .default("127.0.0.1"),
  mongoose: {
    debug: Joi.boolean()
      .when('env', {
        is: Joi.string().equal('development') || Joi.string().equal('dev'),
        then: Joi.boolean().default(true),
        otherwise: Joi.boolean().default(false)
      }),
    host: Joi.string().required()
      .description('Mongo DB host url'),
    port: Joi.number()
      .default(27017),
    db: Joi.string().required(),
    user: Joi.string(),
    pass: Joi.string()
  }
}).unknown()
  .required();

export const configs = (env: any) => {
  let config;
  switch (env) {
    case 'dev':
    case 'development':
      config = devEnv;
      break;
    
    case 'prod':
    case 'production':
      config = prodEnv;
      break;
  
    default:
      config = defaultEnv;
      break;
  }

  const { error, value: envVars } = Joi.validate(Object.assign({}, config, { env: env }), envSchema);

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  } else {
    return envVars;
  }
}
