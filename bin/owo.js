#!/usr/bin/env node

const OwO = require('../');
const snekparse = require('snekparse');
const fs = require('fs');
const { LocalStorage } = require('node-localstorage');

(function main() {
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
      owo.shorten(args[0])
      .then(code => {
        const url = buildOwOURL(ls.getItem('shorten'), code);
        process.stdout.write(url);
      });
      break;
    }
    case 'upload': {
      owo.upload(args[0])
      .then(response => {
        const path = response.files[0].url;
        const url = buildOwOURL(ls.getItem('upload'), path);
        process.stdout.write(url);
      });
      break;
    }
    default:
      break;
  }
}());

function init() {
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
  
  q('OwO API Key').then(key => ls.setItem('key', key))
    .then(() => q('Shortening Domain'))
    .then(short => ls.setItem('shorten', short))
    .then(() => q('File uploading domain'))
    .then(file => ls.setItem('upload', file))
    .then(() => {;
      console.log('Success!');
      prompt.stop();
    });
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
