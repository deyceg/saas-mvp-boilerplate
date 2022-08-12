module.exports = {
  api: {
    input: './swagger.json',
    output: {
      workspace: '/out/api',
      mode: 'tags-split',
      schemas: 'model',
      target: 'endpoints',
      client: 'react-query',
      mock: true,
      prettier: true,
    },
  },
};
