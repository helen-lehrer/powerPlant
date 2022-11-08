import { changeState } from './../src/powerPlant.js';
import { storeState } from './../src/powerPlant.js';
import { stateControl } from './../src/powerPlant.js';
import { feed } from './../src/powerPlant.js';
import { megaFeed } from './../src/powerPlant.js';
import { megaHydrate } from './../src/powerPlant.js';
import { imbuePsychic } from './../src/powerPlant.js';

describe ('changeState', () => {
  test ('This should take a property as a first argument.', () => {
		const storePlant = storeState({soil: 0, water: 0, light: 0});
		const fedPlant = storePlant(changeState("soil")(11));
		expect(fedPlant.soil).toEqual(11);
  })
})

describe ('feed', () => {
  test ('This should increment a plant soil property by 2', () => {
    const plant2 = { soil: 0, water: 0, light: 0};
    const storePlant2 = storeState(plant2);
    const fedplant2 = storePlant2(feed);
    expect(fedplant2.soil).toEqual(2);
  })
})

describe ('megaFood', () => {
  test ('This should increment a plant soil property by 5', () => {
    const plant2 = { soil: 2, water: 0, light: 0};
    const storePlant2 = storeState(plant2);
    const fedplant2 = storePlant2(megaFeed);
    expect(fedplant2.soil).toEqual(7);
  })
})

describe ('megaHydrate', () => {
  test ('This should increment a plant water property by 10', () => {
    const plant2 = { soil: 2, water: 0, light: 0};
    const storePlant2 = storeState(plant2);
    const fedplant2 = storePlant2(megaHydrate);
    expect(fedplant2.water).toEqual(10);
  })
})

describe ('imbuePsychic', () => {
  test ('This should add a new property called psychicAbility with a value of 100', () => {
    const plant = { soil: 0, water: 0, light: 0};
    const storePlant = storeState(plant);
    const psychicPlant = storePlant(imbuePsychic(100));
    expect(psychicPlant.psychicAbility).toEqual(100);
  })
})