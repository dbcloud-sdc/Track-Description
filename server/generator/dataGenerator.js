const moment = require('moment');
const { Readable } = require('stream');
const { createWriteStream } = require('fs');

class DataGenerator {
  constructor(generator, filepath, limit, chunk_size) {
    this.readable = new ReadableStream(generator, filepath, limit, chunk_size);
    this.writable = createWriteStream(filepath);
    this.filepath = filepath;
    this.limit = limit;
    this.chunk_size = chunk_size;
  }

  generate () {
    this.readable.pipe(this.writable);
    this._writeInitialLogs();
  }

  _writeInitialLogs() {
    console.log('------------------------------');
    console.log(`Data Generation Script`);
    console.log(`Starting generator at ${moment().format('HH:mm:ss')}`);
    console.log(`CHUNK_SIZE: ${this.chunk_size}`);
    console.log(`LIMIT: ${this.limit}`);
    console.log(`Output filepath: ${this.filepath}`);
    console.log('------------------------------');
  }
}

class ReadableStream extends Readable {
  constructor(generator, filepath, limit, chunk_size) {
    super();
    this.generator = generator;
    this.filepath = filepath;
    this.limit = limit;
    this.chunk_size = chunk_size;
    this.id = 0;
    this.progressBar = 25;
    this.startTime = moment();
  }
  
  _read() {
    if (this.id === this.limit) {
      this.push(null);
    } else {
      let buffer = '';
      for (let i = 0; i < this.chunk_size; i++) {
        buffer += `${this.id}|${this.generator()}\n`;
        this.id++;
      }
      this.push(buffer);
      this._logPercentComplete();
    }
  }

  _logPercentComplete() {
    const currPercent = ((this.id / this.limit) * 100).toFixed(2);
    const hashes = this._getHashes(currPercent);
    const spaces = this._getEmptySpaces(hashes);
    const timestamp = moment().format('HH:mm:ss');
    const meta = `${timestamp} : ${this.filepath}`;
    const progressBar = `Data generation: |${hashes}${spaces}| ${currPercent}% Complete`;
    
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    if (currPercent === '100.00') {
      process.stdout.write(`${meta} : ${progressBar}\n`);
      console.log(`Success. Elapsed time since ${this.startTime.format('HH:mm:ss')}: ${moment().diff(this.startTime, 'seconds')} seconds\n`);
    } else {
      process.stdout.write(`${timestamp} : ${progressBar}`);
    }
  }

  _getHashes(currPercent) {
    return '#'.repeat(Math.floor(currPercent / (100 / this.progressBarLength)));
  }

  _getEmptySpaces(hashes) {
    return ' '.repeat(this.progressBarLength - hashes.length);
  }
}

module.exports = DataGenerator;
