import 'dotenv/config';
import * as joi from 'joi';

interface IEnvVars {
  PORT: number;
  STRIPE_SECRET: string;
}

const envVarsSchema = joi
  .object({
    PORT: joi.number().required(),
    STRIPE_SECRET: joi.string().required(),
  })
  .unknown(true); // Allow unknown properties

const { error, value } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: IEnvVars = value;

export const envs = {
  port: envVars.PORT,
  stripeSecretKey: envVars.STRIPE_SECRET,
};
