declare module '*.svg' {
  const url: string;
  export default url;
}

declare module '*.png' {
  const url: string;
  export default url;
}

declare module 'pako' {
  export function inflate(data: Uint8Array): Uint8Array;
}
