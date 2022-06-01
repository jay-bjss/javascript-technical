import { readFile } from '../src/helpers/resultsFileReader';

const path = 'src/data/results.txt';

describe('Results File Reader', () => {
    test('should read header line', async () => {
        const expectedHeaderLine =
            'PartyName                 Candidates          VotesFor    VotesAgainst';

        const readFileGenerator = await readFile(path);

        const line = await readFileGenerator.next();

        expect(line.value).toEqual(expectedHeaderLine);
    });

    test('should read first data line', async () => {
        const expectedDataLine =
            'TimeForTeaParty                    4                 2               5';

        const readFileGenerator = await readFile(path);

        // First call
        await readFileGenerator.next();
        // Second call
        const line1 = await readFileGenerator.next();

        expect(line1.value).toEqual(expectedDataLine);
    });

    test('should read the whole file', async () => {
        let linesRead = 0;

        for await (let line of readFile(path)) {
            linesRead++;
        }

        expect(linesRead).toEqual(7);
    });
});
