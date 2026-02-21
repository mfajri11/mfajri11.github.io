export type ExtendedConfig<A, B> = Omit<A, keyof B> & B
