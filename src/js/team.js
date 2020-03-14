export default class Team {
  constructor() {
    this.members = [
      {
        name: 'Legolas', health: 50, level: 1, type: 'Bowman', attack: 25, defence: 25, damage: 12,
      },
      {
        name: 'Петр', health: 50, level: 1, type: 'Swordsman', attack: 30, defence: 10, damage: 15,
      },
      {
        name: 'Pendalf', health: 50, level: 1, type: 'Magician', attack: 20, defence: 25, damage: 10,
      },
      {
        name: 'Кощей', health: 50, level: 1, type: 'Undead', attack: 15, defence: 40, damage: 7,
      },
      {
        name: 'Шон', health: 50, level: 1, type: 'Zombie', attack: 40, defence: 10, damage: 18,
      },
      {
        name: 'Димон', health: 50, level: 1, type: 'Daemon', attack: 20, defence: 20, damage: 8,
      },
    ];
  }

  [Symbol.iterator]() {
    const sorted = (a, b) => {
      const healDefA = a.health + a.defence;
      const healDefB = b.health + b.defence;
      const attDamA = a.attack + a.damage;
      const attDamB = b.attack + b.damage;
      if (healDefA === healDefB) {
        return attDamB - attDamA;
      }
      return healDefA - healDefB;
    };
    const members = this.members.sort(sorted);
    let current = 0;
    const last = members.length;
    return {
      next() {
        if (current < last) {
          const prop = members[current];
          current += 1;
          return {
            done: false,
            value: prop,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
