import Settings from '../../settings';
import { EntryFilterFunction, MicromatchOptions, Pattern } from '../../types';
export default class DeepFilter {
    private readonly _settings;
    private readonly _micromatchOptions;
    constructor(_settings: Settings, _micromatchOptions: MicromatchOptions);
    getFilter(basePath: string, positive: Pattern[], negative: Pattern[]): EntryFilterFunction;
    private _getMaxPatternDepth;
    private _getNegativePatternsRe;
    private _filter;
    private _getEntryDepth;
    private _isSkippedByDeep;
    private _isSkippedByMaxPatternDepth;
    private _isSkippedSymbolicLink;
    private _isSkippedByNegativePatterns;
}
