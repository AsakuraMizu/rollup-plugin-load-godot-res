const test = require('ava');
const { rollup } = require('rollup');

const loadGodotRes = require('../dist/index.js');

test('test', async t => {
  const options = {
    input: 'test/sample.js',
    plugins: [
      loadGodotRes()
    ]
  };

  const bundle = await rollup(options);
  const code = await bundle.generate({ format: 'esm' });
  if (code.output[0].code === `import ICON from 'res://icon.png';\n\nfunc(ICON);\n`)
    t.pass();
  else
    t.fail();
})