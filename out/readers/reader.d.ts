/// <reference types="node" />
import * as fs from 'fs';
import * as fsStat from '@nodelib/fs.stat';
import Settings from '../settings';
import { Entry, ErrnoException, Pattern, ReaderOptions } from '../types';
export default abstract class Reader<T> {
    protected readonly _settings: Settings;
    protected readonly _fsStatSettings: fsStat.Settings;
    constructor(_settings: Settings);
    abstract getDynamic(root: string, options: ReaderOptions): T;
    abstract getStatic(patterns: Pattern[], options: ReaderOptions): T;
    protected _getFullEntryPath(filepath: string): string;
    protected _makeEntry(stats: fs.Stats, pattern: Pattern): Entry;
    protected _isFatalError(error: ErrnoException): boolean;
}
