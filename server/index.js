import config from './config.js';
import server from './server.js';
import { logger } from './util.js';

// porta 3000 está sendo usada por outro projeto da rocket!!
server.listen(config.port)
    .on('listening', () => logger.info(`rodando lisinho!! ${config.port}`))