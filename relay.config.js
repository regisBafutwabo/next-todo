module.exports = {
    src: '.',
    schema: 'config/relay/schema.graphql',
    exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**', 'locales/*', '**/api/*'],
    language: 'typescript',
    artifactDirectory: 'config/relay/__generated__',
    customScalars: {
      _text: 'string',
      bigint: 'number',
      date: 'string',
      jsonb: 'any | any[]',
      numeric: 'number',
      smallint: 'number',
      timestamp: 'string',
      timestamptz: 'string',
      uuid: 'string',
    },
  };