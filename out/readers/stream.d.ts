/// <reference types="node" />
import { Readable } from 'stream';
import * as fsStat from '@nodelib/fs.stat';
import * as fsWalk from '@nodelib/fs.walk';
import { Pattern, ReaderOptions } from '../types';
import Reader from './reader';
export default class ReaderStream extends Reader<Readable> {
    protected _walkStream: typeof fsWalk.walkStream;
    protected _stat: typeof fsStat.stat;
    getDynamic(root: string, options: ReaderOptions): Readable;
    getStatic(patterns: Pattern[], options: ReaderOptions): Readable;
    private _getEntry;
    private _getStat;
}
