const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let crc = n;
    for (let k = 0; k < 8; k += 1) {
      crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
    }
    table[n] = crc >>> 0;
  }
  return table;
})();

function crc32(data: Uint8Array): number {
  let crc = 0xffffffff;
  for (let index = 0; index < data.length; index += 1) {
    crc = CRC_TABLE[(crc ^ data[index]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function writeUint16(view: DataView, offset: number, value: number) {
  view.setUint16(offset, value, true);
}

function writeUint32(view: DataView, offset: number, value: number) {
  view.setUint32(offset, value, true);
}

/** Zip files with the store method so a generation run can download without a library. */
export async function zipFiles(files: { name: string; blob: Blob }[]): Promise<Blob> {
  const encoded = await Promise.all(
    files.map(async (file) => ({
      name: new TextEncoder().encode(file.name.replace(/[\\/]/g, '-')),
      data: new Uint8Array(await file.blob.arrayBuffer()),
    }))
  );

  let payload = 0;
  for (const file of encoded) {
    payload += 30 + file.name.length + file.data.length;
    payload += 46 + file.name.length;
  }
  const buffer = new Uint8Array(payload + 22);
  const view = new DataView(buffer.buffer);
  let offset = 0;
  const localOffsets: number[] = [];

  for (const file of encoded) {
    localOffsets.push(offset);
    const crc = crc32(file.data);
    writeUint32(view, offset, 0x04034b50);
    writeUint16(view, offset + 4, 20);
    writeUint16(view, offset + 6, 0x0800);
    writeUint16(view, offset + 8, 0);
    writeUint16(view, offset + 10, 0);
    writeUint16(view, offset + 12, 0);
    writeUint32(view, offset + 14, crc);
    writeUint32(view, offset + 18, file.data.length);
    writeUint32(view, offset + 22, file.data.length);
    writeUint16(view, offset + 26, file.name.length);
    writeUint16(view, offset + 28, 0);
    buffer.set(file.name, offset + 30);
    buffer.set(file.data, offset + 30 + file.name.length);
    offset += 30 + file.name.length + file.data.length;
  }

  const centralStart = offset;
  encoded.forEach((file, index) => {
    const crc = crc32(file.data);
    writeUint32(view, offset, 0x02014b50);
    writeUint16(view, offset + 4, 20);
    writeUint16(view, offset + 6, 20);
    writeUint16(view, offset + 8, 0x0800);
    writeUint16(view, offset + 10, 0);
    writeUint16(view, offset + 12, 0);
    writeUint16(view, offset + 14, 0);
    writeUint32(view, offset + 16, crc);
    writeUint32(view, offset + 20, file.data.length);
    writeUint32(view, offset + 24, file.data.length);
    writeUint16(view, offset + 28, file.name.length);
    writeUint16(view, offset + 30, 0);
    writeUint16(view, offset + 32, 0);
    writeUint16(view, offset + 34, 0);
    writeUint16(view, offset + 36, 0);
    writeUint32(view, offset + 38, 0);
    writeUint32(view, offset + 42, localOffsets[index]);
    buffer.set(file.name, offset + 46);
    offset += 46 + file.name.length;
  });

  writeUint32(view, offset, 0x06054b50);
  writeUint16(view, offset + 4, 0);
  writeUint16(view, offset + 6, 0);
  writeUint16(view, offset + 8, encoded.length);
  writeUint16(view, offset + 10, encoded.length);
  writeUint32(view, offset + 12, offset - centralStart);
  writeUint32(view, offset + 16, centralStart);
  writeUint16(view, offset + 20, 0);
  return new Blob([buffer], { type: 'application/zip' });
}
