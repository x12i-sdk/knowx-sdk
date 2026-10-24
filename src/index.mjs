import assert from 'node:assert/strict';
import { createKnowxClient } from '@x12i/knowx-sdk';

const calls = [];
const client = createKnowxClient({ orgId: 'demo', caller: 'usage-example', knowxUrl: 'https://knowx.example.invalid', fetch: async (url, init) => {
  calls.push({ url: String(url), method: init.method });
  assert.equal(new Headers(init.headers).get('x-memorix-org-id'), 'demo');
  assert.equal(new URL(url).pathname, '/api/knowx/v1/libraries/ensure-default');
  return Response.json({ library: { id: 'library-1', rootFolderId: 'root', name: 'Demo library' } });
} });
const library = await client.drive.ensureLibrary();
assert.equal(library.id, 'library-1');
assert.equal(calls[0].method, 'POST');
console.log({ library, calls });
