import fs from "fs"
import path from "path"

export class Logger {
  private static instance: Logger;
  
  private constructor() { }

  public static getInstance(): Logger {
    if (!Logger.instance){
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
  public log(logFile: string, message: string): void {
    const logPath = path.resolve(logFile)
    const time = new Date().toISOString().replace('T', ' ').substring(0, 19)
    const logMessage = `[${time}] - ${message}\n`

    fs.appendFileSync(logPath, logMessage, { encoding: "utf-8" })
  }
}
