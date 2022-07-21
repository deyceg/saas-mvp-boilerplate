import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import { Environment } from './environment';

const YAML_CONFIG_FILENAME = `config.${
  process.env.NODE_ENV || Environment.DEV.toString()
}.yaml`;

export default () => {
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};
