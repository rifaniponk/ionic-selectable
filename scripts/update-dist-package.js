#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the main package.json to get the current version
const mainPackagePath = path.join(__dirname, '..', 'package.json');
const mainPackage = JSON.parse(fs.readFileSync(mainPackagePath, 'utf8'));

// Read the dist package.json
const distPackagePath = path.join(__dirname, '..', 'dist', 'package.json');
const distPackage = JSON.parse(fs.readFileSync(distPackagePath, 'utf8'));

// Update the dist package.json with correct bundle references and version
const updatedDistPackage = {
  ...distPackage,
  version: mainPackage.version,
  main: "bundles/ionic-selectable.umd.js",
  module: "fesm2015/ionic-selectable.js",
  es2015: "esm2015/ionic-selectable.js",
  esm2015: "esm2015/ionic-selectable.js",
  fesm2015: "fesm2015/ionic-selectable.js",
  types: "index.d.ts"
};

// Write the updated package.json
fs.writeFileSync(distPackagePath, JSON.stringify(updatedDistPackage, null, 2));

console.log(`✅ Updated dist/package.json with version ${mainPackage.version} and correct bundle references`);
