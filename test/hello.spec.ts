import {expect} from "chai";
import {hello} from "../src/hello";

describe("My first mocha test", () => {
    it('test normal behavior', () => {
        expect(hello('Tanya'), 'Hello, Tanya');
    })
})
