import { Logger } from "./Logger"

const logger = Logger.getInstance()


logger.log('logs/app.log', 'Primeira mensagem');
logger.log('logs/app.log', 'Segunda mensagem');