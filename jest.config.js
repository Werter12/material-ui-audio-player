module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./src/setupEnzyme.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json']
};
