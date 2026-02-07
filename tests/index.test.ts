import { test } from 'node:test';
import assert from 'node:assert';
import { Routine } from '../src/index';

test('Routine class should initialize correctly', () => {
  const routine = new Routine();
  assert.strictEqual(typeof routine, 'object');
});

test('Routine.hello() should return the correct string', () => {
  const routine = new Routine();
  const message = routine.hello();

  assert.strictEqual(message, 'Hello from Routine.js! The environment is ready for multi-threading.');
});

test('Routine should be an instance of Routine', () => {
  const routine = new Routine();
  assert.ok(routine instanceof Routine);
});