const fs = require('fs');
const path = require('path');

async function run() {
	const response = await fetch('https://cms.heyyczer.com/items/config_presets?sort=base');
	const configs = await response.json();

	for (const c of configs.data) {
		fs.writeFileSync(path.join(__dirname, `_snippets/${c.resource}_configs.mdx`), "");
	}

	for (const c of configs.data) {
		const content = `- [${c.base}](https://cms.heyyczer.com/assets/${c.file})\n`;
		fs.appendFileSync(path.join(__dirname, `_snippets/${c.resource}_configs.mdx`), content);
	}
}

run();