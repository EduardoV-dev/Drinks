export const pipe = (...fns: Array<any>) => (x: any) =>
  fns.reduce((y, f) => f(y), x);