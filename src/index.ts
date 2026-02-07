/**
 * Routine.js - Parallelism made easy.
 * Hello World Version 0.0.1
 */
export class Routine {
  constructor() {
    console.log('Routine.js: Ready to run in parallel!');
  }

  public hello(): string {
    return 'Hello from Routine.js! The environment is ready for multi-threading.';
  }
}