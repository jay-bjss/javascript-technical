import readLine from 'readline';
import fs from 'fs';

export async function* readFile(fileName) {
    const file = readLine.createInterface({
        input: fs.createReadStream(fileName),
        crlfDelay: Infinity,
    });

    for await (const line of file) {
        yield line;
    }
}
