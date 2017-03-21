#!/usr/bin/env node

const OwO = require('../');
const snekparse = require('snekparse');
const fs = require('fs');
const { LocalStorage } = require('node-localstorage');

(async function main() {
  const argv = snekparse(process.argv.slice(2));
  if (argv.help || argv.h) return help();
  if (argv.init) return init();

  const ls = getLS();
  const owo = new OwO(ls.getItem('key'));

  const command = argv['🐍'].shift();
  const args = argv['🐍'];
  if (command === 'init') return init();
  switch (command) {
    case 'shorten': {
      const code = await owo.shorten(args[0]);
      const url = buildOwOURL(ls.getItem('shorten'), code);
      process.stdout.write(url);
      break;
    }
    case 'upload': {
      const response = await owo.upload(args[0]);
      const path = response.files[0].url;
      const url = buildOwOURL(ls.getItem('upload'), path);
      process.stdout.write(url);
      break;
    }
    default:
      break;
  }
}());

async function init() {
  function q(question) {
    return new Promise((resolve, reject) => {
      prompt.get(question, (err, res) => {
        if (err) reject(err);
        else resolve(res[question]);
      });
    });
  }
  const prompt = require('prompt');
  prompt.start();
  prompt.message = '\u001b[32mOwO CLI\u001b[39m';

  const ls = getLS();

  const key = await q('OwO API Key');
  const short = await q('Shortening Domain');
  const file = await q('File uploading domain');
  ls.setItem('key', key);
  ls.setItem('shorten', short);
  ls.setItem('upload', file);
  console.log('Success!');
  prompt.stop();
}

function help() {
  process.stdout.write(`
Usage: owo <command> [args...]
Options:
    --init   Initialize the client
Commands:
    init     Initialize the client
    shorten  Shorten a url
    upload   Upload a file
`.trimLeft());
}

function getLS() {
  function getOSStoragePath() {
    switch (process.platform) {
      case 'darwin':
        return `${process.env.HOME}/Library/Application Support/owo-cli`;
      case 'win32':
        return `${process.env.APPDATA}\\owo-cli`;
      case 'linux':
        return `${process.env.HOME}/.owo-cli`;
      default:
        return '.';
    }
  }

  const OS_STORAGE_PATH = getOSStoragePath();

  if (!fs.existsSync(OS_STORAGE_PATH)) fs.mkdirSync(OS_STORAGE_PATH);
  const LOCALSTORAGE_PATH = require('path').join(OS_STORAGE_PATH, 'cache');
  if (!fs.existsSync(LOCALSTORAGE_PATH)) fs.mkdirSync(LOCALSTORAGE_PATH);

  return new LocalStorage(LOCALSTORAGE_PATH);
}

function buildOwOURL(domain, code) {
  return require('url').format({
    protocol: 'https:',
    slashes: true,
    host: domain,
    pathname: `/${code}`,
  });
}
