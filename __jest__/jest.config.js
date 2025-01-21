const path = require('path');
const rootDirector = path.join(__dirname,'../');

module.exports = {
    roots: [`${rootDirector}/src`],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileMock.js",
        "^@/(.*)": `${rootDirector}/src/$1`
    },
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.tsx?$": "ts-jest",
      ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
    },
    testMatch: ["**/?(*.)(spec|test).[jt]s?(x)"],
    testEnvironment: "jsdom",
  };