// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { AzureKeyCredential } from "@azure/core-auth";
export {
  AutocompleteItem,
  AutocompleteMode,
  AutocompleteResult,
  FacetResult,
  IndexActionType,
  IndexDocumentsResult,
  IndexingResult,
  KnownQueryDebugMode,
  KnownQueryLanguage,
  KnownQuerySpellerType,
  KnownSemanticErrorMode,
  KnownSemanticErrorReason,
  KnownSemanticFieldState,
  KnownSemanticSearchResultsType,
  KnownSpeller,
  KnownVectorQueryKind,
  QueryAnswerResult,
  QueryCaptionResult,
  QueryDebugMode,
  QueryLanguage,
  QueryResultDocumentRerankerInput,
  QuerySpellerType,
  QueryType,
  ScoringStatistics,
  SearchMode,
  SemanticFieldState,
  Speller,
} from "./generated/data/models";
export {
  AnalyzedTokenInfo,
  AnalyzeResult,
  AsciiFoldingTokenFilter,
  AzureActiveDirectoryApplicationCredentials,
  AzureMachineLearningSkill,
  BM25Similarity,
  CharFilter as BaseCharFilter,
  CharFilterName,
  CjkBigramTokenFilter,
  CjkBigramTokenFilterScripts,
  ClassicSimilarity,
  ClassicTokenizer,
  CognitiveServicesAccount as BaseCognitiveServicesAccount,
  CognitiveServicesAccountKey,
  CommonGramTokenFilter,
  ConditionalSkill,
  CorsOptions,
  CustomEntity,
  CustomEntityAlias,
  CustomNormalizer,
  DataChangeDetectionPolicy as BaseDataChangeDetectionPolicy,
  DataDeletionDetectionPolicy as BaseDataDeletionDetectionPolicy,
  DefaultCognitiveServicesAccount,
  DictionaryDecompounderTokenFilter,
  DistanceScoringFunction,
  DistanceScoringParameters,
  DocumentExtractionSkill,
  EdgeNGramTokenFilterSide,
  EdgeNGramTokenizer,
  ElisionTokenFilter,
  EntityLinkingSkill,
  EntityRecognitionSkillV3,
  FieldMapping,
  FieldMappingFunction,
  FreshnessScoringFunction,
  FreshnessScoringParameters,
  HighWaterMarkChangeDetectionPolicy,
  IndexerExecutionResult,
  IndexerExecutionStatus,
  IndexerExecutionStatusDetail,
  IndexerState,
  IndexerStatus,
  IndexingMode,
  IndexingSchedule,
  IndexProjectionMode,
  InputFieldMappingEntry,
  KeepTokenFilter,
  KeywordMarkerTokenFilter,
  KnownBlobIndexerDataToExtract,
  KnownBlobIndexerImageAction,
  KnownBlobIndexerParsingMode,
  KnownBlobIndexerPDFTextRotationAlgorithm,
  KnownCharFilterName,
  KnownCustomEntityLookupSkillLanguage,
  KnownEntityCategory,
  KnownEntityRecognitionSkillLanguage,
  KnownImageAnalysisSkillLanguage,
  KnownImageDetail,
  KnownIndexerExecutionEnvironment,
  KnownIndexerExecutionStatusDetail,
  KnownIndexingMode,
  KnownIndexProjectionMode,
  KnownKeyPhraseExtractionSkillLanguage,
  KnownLexicalAnalyzerName,
  KnownLexicalNormalizerName,
  KnownLexicalNormalizerName as KnownNormalizerNames,
  KnownLexicalTokenizerName,
  KnownLineEnding,
  KnownOcrSkillLanguage,
  KnownPIIDetectionSkillMaskingMode,
  KnownRegexFlags,
  KnownSearchIndexerDataSourceType,
  KnownSentimentSkillLanguage,
  KnownSplitSkillLanguage,
  KnownTextSplitMode,
  KnownTextTranslationSkillLanguage,
  KnownTokenFilterName,
  KnownVectorSearchVectorizerKind,
  KnownVisualFeature,
  LanguageDetectionSkill,
  LengthTokenFilter,
  LexicalAnalyzer as BaseLexicalAnalyzer,
  LexicalAnalyzerName,
  LexicalNormalizer as BaseLexicalNormalizer,
  LexicalNormalizerName,
  LexicalTokenizer as BaseLexicalTokenizer,
  LexicalTokenizerName,
  LimitTokenFilter,
  LineEnding,
  LuceneStandardAnalyzer,
  MagnitudeScoringFunction,
  MagnitudeScoringParameters,
  MappingCharFilter,
  MergeSkill,
  MicrosoftLanguageStemmingTokenizer,
  MicrosoftLanguageTokenizer,
  MicrosoftStemmingTokenizerLanguage,
  MicrosoftTokenizerLanguage,
  NativeBlobSoftDeleteDeletionDetectionPolicy,
  NGramTokenizer,
  OutputFieldMappingEntry,
  PathHierarchyTokenizerV2 as PathHierarchyTokenizer,
  PatternCaptureTokenFilter,
  PatternReplaceCharFilter,
  PatternReplaceTokenFilter,
  PhoneticEncoder,
  PhoneticTokenFilter,
  ResourceCounter,
  ScoringFunction as BaseScoringFunction,
  ScoringFunctionAggregation,
  ScoringFunctionInterpolation,
  SearchAlias,
  SearchIndexerDataContainer,
  SearchIndexerDataIdentity as BaseSearchIndexerDataIdentity,
  SearchIndexerDataNoneIdentity,
  SearchIndexerDataUserAssignedIdentity,
  SearchIndexerError,
  SearchIndexerIndexProjectionSelector,
  SearchIndexerKnowledgeStoreBlobProjectionSelector,
  SearchIndexerKnowledgeStoreFileProjectionSelector,
  SearchIndexerKnowledgeStoreObjectProjectionSelector,
  SearchIndexerKnowledgeStoreProjection,
  SearchIndexerKnowledgeStoreProjectionSelector,
  SearchIndexerKnowledgeStoreTableProjectionSelector,
  SearchIndexerLimits,
  SearchIndexerSkill as BaseSearchIndexerSkill,
  SearchIndexerStatus,
  SearchIndexerWarning,
  SemanticConfiguration,
  SemanticField,
  SemanticPrioritizedFields,
  SemanticSearch,
  SentimentSkillV3,
  ServiceCounters,
  ServiceLimits,
  ShaperSkill,
  ShingleTokenFilter,
  Similarity,
  SnowballTokenFilter,
  SnowballTokenFilterLanguage,
  SoftDeleteColumnDeletionDetectionPolicy,
  SqlIntegratedChangeTrackingPolicy,
  StemmerOverrideTokenFilter,
  StemmerTokenFilter,
  StemmerTokenFilterLanguage,
  StopAnalyzer,
  StopwordsList,
  StopwordsTokenFilter,
  Suggester as SearchSuggester,
  SynonymTokenFilter,
  TagScoringFunction,
  TagScoringParameters,
  TextWeights,
  TokenCharacterKind,
  TokenFilter as BaseTokenFilter,
  TokenFilterName,
  TruncateTokenFilter,
  UaxUrlEmailTokenizer,
  UniqueTokenFilter,
  VectorSearchProfile,
  WordDelimiterTokenFilter,
} from "./generated/service/models";
export {
  BlobIndexerDataToExtract,
  BlobIndexerImageAction,
  BlobIndexerParsingMode,
  BlobIndexerPDFTextRotationAlgorithm,
  CustomEntityLookupSkillLanguage,
  EntityCategory,
  EntityRecognitionSkillLanguage,
  ImageAnalysisSkillLanguage,
  ImageDetail,
  IndexerExecutionEnvironment,
  KeyPhraseExtractionSkillLanguage,
  OcrSkillLanguage,
  PIIDetectionSkillMaskingMode,
  RegexFlags,
  SearchIndexerDataSourceType,
  SemanticErrorMode,
  SemanticErrorReason,
  SemanticSearchResultsType,
  SentimentSkillLanguage,
  SplitSkillLanguage,
  TextSplitMode,
  TextTranslationSkillLanguage,
  VectorFilterMode,
  VectorQueryKind,
  VectorSearchAlgorithmKind,
  VectorSearchAlgorithmMetric,
  VectorSearchVectorizerKind,
  VisualFeature,
} from "./generatedStringLiteralUnions";
export { default as GeographyPoint } from "./geographyPoint";
export { IndexDocumentsBatch } from "./indexDocumentsBatch";
export {
  AutocompleteOptions,
  AutocompleteRequest,
  BaseSearchRequestOptions,
  BaseVectorQuery,
  CountDocumentsOptions,
  DeleteDocumentsOptions,
  DocumentDebugInfo,
  ExcludedODataTypes,
  ExtractDocumentKey,
  ExtractiveQueryAnswer,
  ExtractiveQueryCaption,
  GetDocumentOptions,
  IndexDocumentsAction,
  IndexDocumentsOptions,
  ListSearchResultsPageSettings,
  MergeDocumentsOptions,
  MergeOrUploadDocumentsOptions,
  NarrowedModel,
  QueryAnswer,
  QueryCaption,
  QueryResultDocumentSemanticField,
  SearchDocumentsPageResult,
  SearchDocumentsResult,
  SearchDocumentsResultBase,
  SearchFieldArray,
  SearchIndexingBufferedSenderDeleteDocumentsOptions,
  SearchIndexingBufferedSenderFlushDocumentsOptions,
  SearchIndexingBufferedSenderMergeDocumentsOptions,
  SearchIndexingBufferedSenderMergeOrUploadDocumentsOptions,
  SearchIndexingBufferedSenderOptions,
  SearchIndexingBufferedSenderUploadDocumentsOptions,
  SearchIterator,
  SearchOptions,
  SearchPick,
  SearchRequestOptions,
  SearchRequestQueryTypeOptions,
  SearchResult,
  SelectArray,
  SelectFields,
  SemanticDebugInfo,
  SemanticSearchOptions,
  SuggestDocumentsResult,
  SuggestNarrowedModel,
  SuggestOptions,
  SuggestRequest,
  SuggestResult,
  UnionToIntersection,
  UploadDocumentsOptions,
  VectorizableTextQuery,
  VectorizedQuery,
  VectorQuery,
  VectorSearchOptions,
} from "./indexModels";
export { odata } from "./odata";
export { KnownSearchAudience } from "./searchAudience";
export { SearchClient, SearchClientOptions } from "./searchClient";
export { SearchIndexClient, SearchIndexClientOptions } from "./searchIndexClient";
export { SearchIndexerClient, SearchIndexerClientOptions } from "./searchIndexerClient";
export {
  DEFAULT_BATCH_SIZE,
  DEFAULT_FLUSH_WINDOW,
  DEFAULT_RETRY_COUNT,
  IndexDocumentsClient,
  SearchIndexingBufferedSender,
} from "./searchIndexingBufferedSender";
export {
  AliasIterator,
  AnalyzeRequest,
  AnalyzeTextOptions,
  AzureOpenAIEmbeddingSkill,
  AzureOpenAIParameters,
  AzureOpenAIVectorizer,
  BaseVectorSearchAlgorithmConfiguration,
  BaseVectorSearchVectorizer,
  CharFilter,
  CognitiveServicesAccount,
  ComplexDataType,
  ComplexField,
  CreateAliasOptions,
  CreateDataSourceConnectionOptions,
  CreateIndexerOptions,
  CreateIndexOptions,
  CreateOrUpdateAliasOptions,
  CreateorUpdateDataSourceConnectionOptions,
  CreateorUpdateIndexerOptions,
  CreateOrUpdateIndexOptions,
  CreateOrUpdateSkillsetOptions,
  CreateOrUpdateSynonymMapOptions,
  CreateSkillsetOptions,
  CreateSynonymMapOptions,
  CustomAnalyzer,
  CustomEntityLookupSkill,
  CustomVectorizer,
  CustomVectorizerParameters,
  DataChangeDetectionPolicy,
  DataDeletionDetectionPolicy,
  DeleteAliasOptions,
  DeleteDataSourceConnectionOptions,
  DeleteIndexerOptions,
  DeleteIndexOptions,
  DeleteSkillsetOptions,
  DeleteSynonymMapOptions,
  EdgeNGramTokenFilter,
  EntityRecognitionSkill,
  ExhaustiveKnnAlgorithmConfiguration,
  ExhaustiveKnnParameters,
  GetAliasOptions,
  GetDataSourceConnectionOptions,
  GetIndexerOptions,
  GetIndexerStatusOptions,
  GetIndexOptions,
  GetIndexStatisticsOptions,
  GetServiceStatisticsOptions,
  GetSkillSetOptions,
  GetSynonymMapsOptions,
  HnswAlgorithmConfiguration,
  HnswParameters,
  ImageAnalysisSkill,
  IndexingParameters,
  IndexingParametersConfiguration,
  IndexIterator,
  IndexNameIterator,
  KeyPhraseExtractionSkill,
  KeywordTokenizer,
  KnownAnalyzerNames,
  KnownCharFilterNames,
  KnownTokenFilterNames,
  KnownTokenizerNames,
  LexicalAnalyzer,
  LexicalNormalizer,
  LexicalTokenizer,
  ListAliasesOptions,
  ListDataSourceConnectionsOptions,
  ListIndexersOptions,
  ListIndexesOptions,
  ListSkillsetsOptions,
  ListSynonymMapsOptions,
  LuceneStandardTokenizer,
  NGramTokenFilter,
  OcrSkill,
  PatternAnalyzer,
  PatternTokenizer,
  PIIDetectionSkill,
  ResetDocumentsOptions,
  ResetIndexerOptions,
  ResetSkillsOptions,
  RunIndexerOptions,
  ScoringFunction,
  ScoringProfile,
  SearchField,
  SearchFieldDataType,
  SearchIndex,
  SearchIndexAlias,
  SearchIndexer,
  SearchIndexerCache,
  SearchIndexerDataIdentity,
  SearchIndexerDataSourceConnection,
  SearchIndexerIndexProjections,
  SearchIndexerIndexProjectionsParameters,
  SearchIndexerKnowledgeStore,
  SearchIndexerKnowledgeStoreParameters,
  SearchIndexerSkill,
  SearchIndexerSkillset,
  SearchIndexStatistics,
  SearchResourceEncryptionKey,
  SearchServiceStatistics,
  SentimentSkill,
  SimilarityAlgorithm,
  SimpleField,
  SplitSkill,
  SynonymMap,
  TextTranslationSkill,
  TokenFilter,
  VectorSearch,
  VectorSearchAlgorithmConfiguration,
  VectorSearchVectorizer,
  WebApiSkill,
} from "./serviceModels";
export { createSynonymMapFromFile } from "./synonymMapHelper";
