import AggregationType from './model/AggregationType';
import ApiEndpoint from './model/ApiEndpoint';
import TextValue from './model/TextValue';

/**
 * The default limit.
 */
export const DEFAULT_LIMIT: number = 100;

/**
 * The default limit for aggregation queries.
 */
export const DEFAULT_AGGREGATION_LIMIT: number = 0;

/**
 * Supported aggregation functions.
 */
export const AGGREGATION_TYPES = <AggregationType[]>[
  {
    value: 'count',
    text: 'Count',
    requiresTarget: false,
  },
  {
    value: 'sum',
    text: 'Sum',
    requiresTarget: true,
  },
];

/**
 * Sensu API endpoints.
 */
export const API_ENDPOINTS = <ApiEndpoint[]>[
  {
    text: 'Entity API',
    value: 'entity',
    url: '/entities',
  },
  {
    text: 'Events API',
    value: 'events',
    url: '/events',
  }, {
    text: 'Namespaces API',
    value: 'namespaces',
    url: '/namespaces',
  }
];

/**
 * Supported query types.
 */
export const QUERY_TYPES = <TextValue[]>[
  {
    value: 'field',
    text: 'Field Selection',
  },
  {
    value: 'aggregation',
    text: 'Aggregation',
  },
];

/**
 * Supported result data formats.
 */
export const FORMATS = <TextValue[]>[
  {
    value: 'table',
    text: 'Table',
  },
  {
    value: 'series',
    text: 'Time Series',
  },
];
