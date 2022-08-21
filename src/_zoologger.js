import pino from 'pino';
import pino_pretty from 'pino-pretty';

const logger = pino({
    level: 'debug',
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            ignore: 'pid,hostname,module',
        },
    },
});

logger.info("Logging set up (INFO)");
logger.debug("Logging set up (DEBUG)");

export default logger;
