type gym = {number: 1, train: () => void} & ({hallway: 'A', pass?: 'Guest'} | {hallway: 'C'});
type restaurant = {number: 2, dine: () => void} & ({hallway: 'A', pass?: 'Guest'} | {hallway: 'C'});
type hotel = {number: 3, sleep: () => void,hallway: 'A' | 'C' };

type simplified = gym | restaurant | hotel;

function visitFloor(floor: simplified){
    switch(floor.number){
        case 1: floor.train(); return;
        case 2: floor.dine(); return;
        case 3: floor.sleep(); return;
    }
}