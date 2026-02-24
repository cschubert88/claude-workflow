#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const USAGE = `Usage: claude-workflow init [--force]

Install the Claude Code development workflow into the current project.

Options:
  --force    Overwrite existing files`;

const args = process.argv.slice(2);
const command = args.find((a) => !a.startsWith('--'));
const force = args.includes('--force');

if (command !== 'init') {
  console.log(USAGE);
  process.exit(command ? 1 : 0);
}

const templateDir = path.join(__dirname, '..', 'template');
const destDir = process.cwd();

/**
 * Recursively collect all files under dir, returning paths relative to dir.
 */
function walk(dir, base) {
  base = base || '';
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const rel = base ? path.join(base, entry.name) : entry.name;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walk(full, rel));
    } else {
      results.push(rel);
    }
  }
  return results;
}

const files = walk(templateDir);
let installed = 0;
let skipped = 0;

for (const relPath of files) {
  const src = path.join(templateDir, relPath);
  const dest = path.join(destDir, relPath);
  const exists = fs.existsSync(dest);

  if (exists && !force) {
    console.log(`  \x1b[33mskip\x1b[0m  ${relPath} (already exists)`);
    skipped++;
  } else if (exists && force) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`  \x1b[35moverwrite\x1b[0m  ${relPath}`);
    installed++;
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`  \x1b[32mcreate\x1b[0m  ${relPath}`);
    installed++;
  }
}

console.log(`\nDone! ${installed} files installed, ${skipped} files skipped.`);
