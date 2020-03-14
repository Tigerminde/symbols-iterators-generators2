import Team from '../team';

const team = new Team();
const iterator = team[Symbol.iterator]();

test('1', () => {
  const expected = {
    name: 'Шон', health: 50, level: 1, type: 'Zombie', attack: 40, defence: 10, damage: 18,
  };
  const character = iterator.next();
  const received = character.value;
  expect(received).toEqual(expected);
});

test('2', () => {
  const expected = {
    name: 'Петр', health: 50, level: 1, type: 'Swordsman', attack: 30, defence: 10, damage: 15,
  };
  const character = iterator.next();
  const received = character.value;
  expect(received).toEqual(expected);
});

test('3', () => {
  const expected = {
    name: 'Димон', health: 50, level: 1, type: 'Daemon', attack: 20, defence: 20, damage: 8,
  };
  const character = iterator.next();
  const received = character.value;
  expect(received).toEqual(expected);
});

test('4', () => {
  const expected = {
    name: 'Legolas', health: 50, level: 1, type: 'Bowman', attack: 25, defence: 25, damage: 12,
  };
  const character = iterator.next();
  const received = character.value;
  expect(received).toEqual(expected);
});

test('5', () => {
  const expected = {
    name: 'Pendalf', health: 50, level: 1, type: 'Magician', attack: 20, defence: 25, damage: 10,
  };
  const character = iterator.next();
  const received = character.value;
  expect(received).toEqual(expected);
});

test('6', () => {
  const expected = {
    name: 'Кощей', health: 50, level: 1, type: 'Undead', attack: 15, defence: 40, damage: 7,
  };
  const character = iterator.next();
  const received = character.value;
  expect(received).toEqual(expected);
});

test('End', () => {
  const expected = true;
  const character = iterator.next();
  const received = character.done;
  expect(received).toEqual(expected);
});
