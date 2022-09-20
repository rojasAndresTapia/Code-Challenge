import { config } from 'dotenv';
config();

import { history, baseRoutes } from './core/router';
history.push(baseRoutes.home);
