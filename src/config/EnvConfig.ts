import * as dotenv from 'dotenv';

dotenv.config();

export class EnvConfig {
    public static readonly WATCH_DIR: string = process.env.WATCH_DIR || './watch';
    public static readonly DB_FILE_PATH: string = process.env.DB_FILE_PATH || './data/appointments.db';
    public static readonly ALLOWED_EXTENSION: string = process.env.ALLOWED_EXTENSION || '.json';
    public static readonly POLL_INTERVAL_MS: number = parseInt(process.env.POLL_INTERVAL_MS || '5000', 10);
}
