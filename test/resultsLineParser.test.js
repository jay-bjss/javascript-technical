import { parseLine } from '../src/helpers/resultsLineParser';

const resultsLine =
    'TimeForTeaParty                    4                 2               5';

describe('Results Line Parser', () => {
    test('parseLine extracts name', () => {
        const name = parseLine(resultsLine).name;
        expect(name).toEqual('TimeForTeaParty');
    });
});
