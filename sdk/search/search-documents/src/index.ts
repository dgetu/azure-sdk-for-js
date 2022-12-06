// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { SearchClient, SearchClientOptions } from "./searchClient";
export {
  DEFAULT_BATCH_SIZE,
  DEFAULT_FLUSH_WINDOW,
  DEFAULT_RETRY_COUNT,
} from "./searchIndexingBufferedSender";
export {
  AutocompleteRequest,
  AutocompleteOptions,
  CountDocumentsOptions,
  DeleteDocumentsOptions,
  GetDocumentOptions,
  IndexDocumentsAction,
  ListSearchResultsPageSettings,
  IndexDocumentsOptions,
  SearchDocumentsResultBase,
  SearchDocumentsResult,
  SearchDocumentsPageResult,
  SearchIterator,
  SearchOptions,
  SearchRequestOptions,
  SearchRequest,
  SearchResult,
  SuggestDocumentsResult,
  SuggestRequest,
  SuggestResult,
  SuggestOptions,
  MergeDocumentsOptions,
  MergeOrUploadDocumentsOptions,
  UploadDocumentsOptions,
  SearchIndexingBufferedSenderOptions,
  SearchIndexingBufferedSenderDeleteDocumentsOptions,
  SearchIndexingBufferedSenderFlushDocumentsOptions,
  SearchIndexingBufferedSenderMergeDocumentsOptions,
  SearchIndexingBufferedSenderMergeOrUploadDocumentsOptions,
  SearchIndexingBufferedSenderUploadDocumentsOptions,
} from "./indexModels";
export { SearchIndexingBufferedSender, IndexDocumentsClient } from "./searchIndexingBufferedSender";
export { SearchIndexClient, SearchIndexClientOptions } from "./searchIndexClient";
export { SearchIndexerClient, SearchIndexerClientOptions } from "./searchIndexerClient";
export {
  SearchIndex,
  LexicalAnalyzer,
  TokenFilter,
  LexicalTokenizer,
  CharFilter,
  ListIndexesOptions,
  CreateIndexOptions,
  CreateOrUpdateIndexOptions,
  CreateOrUpdateSkillsetOptions,
  CreateOrUpdateSynonymMapOptions,
  CreateSkillsetOptions,
  CreateSynonymMapOptions,
  DeleteSkillsetOptions,
  DeleteSynonymMapOptions,
  GetSkillSetOptions,
  GetSynonymMapsOptions,
  ListSkillsetsOptions,
  SearchIndexerSkillset,
  ListSynonymMapsOptions,
  DeleteIndexOptions,
  AnalyzeTextOptions,
  GetIndexOptions,
  GetIndexStatisticsOptions,
  KnownAnalyzerNames,
  KnownCharFilterNames,
  KnownTokenFilterNames,
  KnownTokenizerNames,
  ScoringFunction,
  ScoringProfile,
  CustomAnalyzer,
  PatternAnalyzer,
  PatternTokenizer,
  SearchField,
  SimpleField,
  ComplexField,
  SearchFieldDataType,
  ComplexDataType,
  CognitiveServicesAccount,
  SearchIndexerSkill,
  SynonymMap,
  ListIndexersOptions,
  CreateIndexerOptions,
  GetIndexerOptions,
  CreateorUpdateIndexerOptions,
  DeleteIndexerOptions,
  GetIndexerStatusOptions,
  ResetIndexerOptions,
  RunIndexerOptions,
  CreateDataSourceConnectionOptions,
  CreateorUpdateDataSourceConnectionOptions,
  DeleteDataSourceConnectionOptions,
  GetDataSourceConnectionOptions,
  ListDataSourceConnectionsOptions,
  SearchIndexerDataSourceConnection,
  DataChangeDetectionPolicy,
  DataDeletionDetectionPolicy,
  GetServiceStatisticsOptions,
  IndexIterator,
  IndexNameIterator,
  SimilarityAlgorithm,
  NGramTokenFilter,
  LuceneStandardTokenizer,
  EdgeNGramTokenFilter,
  KeywordTokenizer,
  AnalyzeRequest,
  SearchResourceEncryptionKey,
  SearchIndexStatistics,
  SearchServiceStatistics,
  SearchIndexer,
  //@beta
  LexicalNormalizer,
  //@beta
  SearchIndexerDataIdentity,
  ResetDocumentsOptions,
  ResetSkillsOptions,
  //@beta
  SearchIndexAlias,
  //@beta
  CreateAliasOptions,
  //@beta
  CreateOrUpdateAliasOptions,
  //@beta
  DeleteAliasOptions,
  //@beta
  GetAliasOptions,
  //@beta
  ListAliasesOptions,
  //@beta
  AliasIterator,
} from "./serviceModels";
export { default as GeographyPoint } from "./geographyPoint";
export { odata } from "./odata";
export { IndexDocumentsBatch } from "./indexDocumentsBatch";
export {
  AutocompleteResult,
  AutocompleteMode,
  AutocompleteItem,
  FacetResult,
  IndexActionType,
  IndexDocumentsResult,
  IndexingResult,
  QueryType,
  SearchMode,
  ScoringStatistics,
  //@beta
  Answers,
  //@beta
  KnownAnswers,
  //@beta
  QueryLanguage,
  //@beta
  KnownQueryLanguage,
  //@beta
  Speller,
  //@beta
  KnownSpeller,
  //@beta
  CaptionResult,
  //@beta
  AnswerResult,
  //@beta
  Captions,
  //@beta
  QueryAnswerType,
  //@beta
  QueryCaptionType,
  //@beta
  QuerySpellerType,
  //@beta
  KnownQuerySpellerType,
  //@beta
  KnownQueryAnswerType,
  //@beta
  KnownQueryCaptionType,
} from "./generated/data/models";
export {
  RegexFlags,
  KnownRegexFlags,
  LuceneStandardAnalyzer,
  StopAnalyzer,
  MappingCharFilter,
  PatternReplaceCharFilter,
  CorsOptions,
  AzureActiveDirectoryApplicationCredentials,
  ScoringFunctionAggregation,
  ScoringFunctionInterpolation,
  DistanceScoringParameters,
  DistanceScoringFunction,
  FreshnessScoringParameters,
  FreshnessScoringFunction,
  MagnitudeScoringParameters,
  MagnitudeScoringFunction,
  TagScoringParameters,
  TagScoringFunction,
  TextWeights,
  AsciiFoldingTokenFilter,
  CjkBigramTokenFilterScripts,
  CjkBigramTokenFilter,
  CommonGramTokenFilter,
  DictionaryDecompounderTokenFilter,
  EdgeNGramTokenFilterSide,
  ElisionTokenFilter,
  KeepTokenFilter,
  KeywordMarkerTokenFilter,
  LengthTokenFilter,
  LimitTokenFilter,
  PatternCaptureTokenFilter,
  PatternReplaceTokenFilter,
  PhoneticEncoder,
  PhoneticTokenFilter,
  ShingleTokenFilter,
  SnowballTokenFilterLanguage,
  SnowballTokenFilter,
  StemmerTokenFilterLanguage,
  StemmerTokenFilter,
  StemmerOverrideTokenFilter,
  StopwordsList,
  StopwordsTokenFilter,
  SynonymTokenFilter,
  TruncateTokenFilter,
  UniqueTokenFilter,
  WordDelimiterTokenFilter,
  ClassicTokenizer,
  TokenCharacterKind,
  EdgeNGramTokenizer,
  MicrosoftTokenizerLanguage,
  MicrosoftLanguageTokenizer,
  MicrosoftStemmingTokenizerLanguage,
  MicrosoftLanguageStemmingTokenizer,
  NGramTokenizer,
  PathHierarchyTokenizerV2 as PathHierarchyTokenizer,
  UaxUrlEmailTokenizer,
  Suggester as SearchSuggester,
  AnalyzeResult,
  AnalyzedTokenInfo,
  ConditionalSkill,
  KeyPhraseExtractionSkill,
  OcrSkill,
  ImageAnalysisSkill,
  LanguageDetectionSkill,
  ShaperSkill,
  MergeSkill,
  EntityRecognitionSkill,
  SentimentSkill,
  CustomEntityLookupSkill,
  CustomEntityLookupSkillLanguage,
  KnownCustomEntityLookupSkillLanguage,
  DocumentExtractionSkill,
  CustomEntity,
  CustomEntityAlias,
  SplitSkill,
  //@beta
  PIIDetectionSkill,
  //@beta
  EntityRecognitionSkillV3,
  //@beta
  EntityLinkingSkill,
  //@beta
  SentimentSkillV3,
  TextTranslationSkill,
  WebApiSkill,
  //@beta
  AzureMachineLearningSkill,
  SentimentSkillLanguage,
  KnownSentimentSkillLanguage,
  SplitSkillLanguage,
  KnownSplitSkillLanguage,
  TextSplitMode,
  KnownTextSplitMode,
  TextTranslationSkillLanguage,
  KnownTextTranslationSkillLanguage,
  DefaultCognitiveServicesAccount,
  CognitiveServicesAccountKey,
  InputFieldMappingEntry,
  OutputFieldMappingEntry,
  EntityCategory,
  KnownEntityCategory,
  EntityRecognitionSkillLanguage,
  KnownEntityRecognitionSkillLanguage,
  ImageAnalysisSkillLanguage,
  KnownImageAnalysisSkillLanguage,
  ImageDetail,
  KnownImageDetail,
  VisualFeature,
  KnownVisualFeature,
  KeyPhraseExtractionSkillLanguage,
  KnownKeyPhraseExtractionSkillLanguage,
  OcrSkillLanguage,
  KnownOcrSkillLanguage,
  FieldMapping,
  IndexingParameters,
  IndexingSchedule,
  FieldMappingFunction,
  SearchIndexerStatus,
  IndexerExecutionResult,
  SearchIndexerLimits,
  IndexerStatus,
  SearchIndexerError,
  IndexerExecutionStatus,
  SearchIndexerWarning,
  SearchIndexerDataContainer,
  SearchIndexerDataSourceType,
  KnownSearchIndexerDataSourceType,
  SoftDeleteColumnDeletionDetectionPolicy,
  SqlIntegratedChangeTrackingPolicy,
  HighWaterMarkChangeDetectionPolicy,
  //@beta
  SearchIndexerDataUserAssignedIdentity,
  //@beta
  SearchIndexerDataNoneIdentity,
  ServiceCounters,
  ServiceLimits,
  ResourceCounter,
  LexicalAnalyzerName,
  KnownLexicalAnalyzerName,
  ClassicSimilarity,
  BM25Similarity,
  IndexingParametersConfiguration,
  BlobIndexerDataToExtract,
  KnownBlobIndexerDataToExtract,
  IndexerExecutionEnvironment,
  BlobIndexerImageAction,
  KnownBlobIndexerImageAction,
  BlobIndexerParsingMode,
  KnownBlobIndexerParsingMode,
  BlobIndexerPDFTextRotationAlgorithm,
  KnownBlobIndexerPDFTextRotationAlgorithm,
  TokenFilter as BaseTokenFilter,
  Similarity,
  LexicalTokenizer as BaseLexicalTokenizer,
  CognitiveServicesAccount as BaseCognitiveServicesAccount,
  SearchIndexerSkill as BaseSearchIndexerSkill,
  ScoringFunction as BaseScoringFunction,
  DataChangeDetectionPolicy as BaseDataChangeDetectionPolicy,
  LexicalAnalyzer as BaseLexicalAnalyzer,
  CharFilter as BaseCharFilter,
  DataDeletionDetectionPolicy as BaseDataDeletionDetectionPolicy,
  //@beta
  LexicalNormalizerName,
  //@beta
  KnownLexicalNormalizerName,
  //@beta
  CustomNormalizer,
  TokenFilterName,
  KnownTokenFilterName,
  CharFilterName,
  KnownCharFilterName,
  //@beta
  LexicalNormalizer as BaseLexicalNormalizer,
  SearchIndexerKnowledgeStore,
  SearchIndexerKnowledgeStoreProjection,
  SearchIndexerKnowledgeStoreFileProjectionSelector,
  SearchIndexerKnowledgeStoreBlobProjectionSelector,
  SearchIndexerKnowledgeStoreProjectionSelector,
  SearchIndexerKnowledgeStoreObjectProjectionSelector,
  SearchIndexerKnowledgeStoreTableProjectionSelector,
  //@beta
  PIIDetectionSkillMaskingMode,
  //@beta
  KnownPIIDetectionSkillMaskingMode,
  //@beta
  LineEnding,
  //@beta
  KnownLineEnding,
  //@beta
  SearchIndexerDataIdentity as BaseSearchIndexerDataIdentity,
  //@beta
  SearchIndexerCache,
  //@beta
  IndexerState,
  //@beta
  IndexerExecutionStatusDetail,
  //@beta
  KnownIndexerExecutionStatusDetail,
  //@beta
  IndexingMode,
  //@beta
  KnownIndexingMode,
  //@beta
  SemanticSettings,
  //@beta
  SemanticConfiguration,
  //@beta
  PrioritizedFields,
  //@beta
  SemanticField,
  //@beta
  SearchAlias,
} from "./generated/service/models";
export { AzureKeyCredential } from "@azure/core-auth";
export { createSynonymMapFromFile } from "./synonymMapHelper";
export { KnownSearchAudience } from "./searchAudience";
