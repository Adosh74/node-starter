import os from 'node:os';

import { app } from './app';
import { serverEnv } from './config';
import { LOGGER } from './logging';

const port = serverEnv.port;
const hostname = os.hostname();

app.listen(port, () => {
  LOGGER.info(`Hostname: ${hostname}`);

  LOGGER.info(`server running on port ${port} in ${serverEnv.nodeEnv} mode`);
});
