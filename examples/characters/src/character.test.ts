import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

const firstName = 'Ada';
const lastName = 'Lovelace';
const role = 'Computer Scientest';
const character = new Character(firstName, lastName, role);
describe('Character', () => {
  it('should create a character with a first name, last name, and role', () => {
    expect(character).toEqual(
      expect.objectContaining({
        firstName,
        lastName,
        role,
      }),
    );
  });

  it('should allow you to increase the level', () => {
    character.levelUp();
    expect(character.level).toBe(2);
  });

  it.todo('should update the last modified date when leveling up', () => {
    character.levelUp();
    const initialLastModified = character.lastModified;

    expect(character.lastModified).not.toBe(initialLastModified);
  });
});
