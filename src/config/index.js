import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env')});


export const BOOK_CONFIG = {
    PAGINATION: {
        LIMIT: 10,
        PAGE: 1
    }
};