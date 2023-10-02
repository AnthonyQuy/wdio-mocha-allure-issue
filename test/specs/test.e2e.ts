import { expect } from '@wdio/globals'

suite('Templates Golden Suite', async() => {
    suiteSetup('Suite Setup', async () => {
        console.log("Suite Setup");
    });

    setup('Test Setup', async () => {
        console.log("Test Setup");
        throw new Error("Throw this error on purpose");
    });


    test("test1", async () => {
        console.log("Test 1");
        const some = true;
        expect(some).toBe(true);
    });

    test("test2", async () => {
        console.log("Test 2");
        const some = true;
        expect(some).toBe(true);
    });
});