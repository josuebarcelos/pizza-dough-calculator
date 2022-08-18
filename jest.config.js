module.exports = {
    testEnvironment: "jsdom",
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(jsx?|tsx?)$',
    setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
    moduleNameMapper: {
        // Mocks out all these file formats when tests are run
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less|scss|sass)$':
            '<rootDir>/tests/setup/moduleNameMapper.js',
    },
}