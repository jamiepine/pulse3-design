import { ComponentContainer } from './sub';
export default class Dep {
  public deps: Set<Dep> = new Set();
  public subs: Set<ComponentContainer> = new Set();
  constructor(private context: any, initialDeps?: Array<Dep>) {
    if (initialDeps) initialDeps.forEach(dep => this.deps.add(dep));
  }
}
