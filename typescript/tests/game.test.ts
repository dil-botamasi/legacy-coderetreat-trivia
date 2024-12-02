import {expect} from 'chai';
import {describe, it, beforeEach, afterEach} from 'mocha';
import {GameRunner} from '../src/game-runner';
import { Game } from '../src/game';
import { verify } from 'approvals';
import * as sinon from 'sinon';

describe('The test environment', () => {
    let consoleStub: sinon.SinonStub;

    beforeEach(() => {
        consoleStub = sinon.stub(console, 'log');
    });

    afterEach(() => {
        consoleStub.restore();
    });

    it("should run the game", () => {
        const game = new Game()

        game.add("Chet");
        game.add("Pat");
        game.add("Sue");
        
        game.roll(3)
        game.roll(3)


        const output = consoleStub.getCalls().join('\n')
        verify('tests','approval', output)
    })

    it("should run the game", () => {
        const game = new Game()

        game.add("Chet");
        game.add("Pat");
        game.add("Sue");
        game.add("Pali");
        game.add("Bali");
        game.add("Suzey");
        game.add("Mali");
        
        game.roll(3)
        game.roll(3)


        const output = consoleStub.getCalls().join('\n')
        verify('tests','7players', output)
    })
});
