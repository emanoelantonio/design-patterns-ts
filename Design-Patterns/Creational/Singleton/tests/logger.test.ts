import * as fs from 'fs'
import { assert, describe, it } from 'node:test'
import * as path from 'path'
import { Logger } from '../src/Logger'

const logFile = path.resolve('logs/test.log')

describe('Logger test', async () => {
  it('Write logger message on the file ', () => {
    if (fs.existsSync(logFile)) {
      fs.unlinkSync(logFile)
    }
    const logger = Logger.getInstance()
    logger.log(logFile, 'Test message')

    const logContent = fs.readFileSync(logFile, { encoding: 'utf-8' })
    assert.match(content, /Test message/);
  });

});