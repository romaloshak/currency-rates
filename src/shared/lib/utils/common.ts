export const isNil = (value: unknown) => value == null;

export const formattedPairToLink = (pair: string) => pair.toLowerCase().replace('/', '-');
export const formattedPairToRate = (pair: string) => pair.toLocaleUpperCase().replace('-', '/');
