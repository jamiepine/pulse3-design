import Dep from './dep';
import Pulse, { State } from './root';

export default class Computed extends State {
  private func: Function;
  constructor(instance: Pulse, deps: Array<State>, func: Function) {
    super(instance, null);

    deps.forEach(state => state.dep.deps.add(state.dep));

    this.func = func;
    this.run();
  }
  public run() {
    const output = this.func();
    this.set(output);
  }
}