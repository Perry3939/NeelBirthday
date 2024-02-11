// eslint-disable-next-line no-undef
const fileContext = require.context(
  "./imageFolder/",
  false,
  /\.(jpg|jpeg|png|JPG)$/
);

const fileList = fileContext.keys().map((filePath) => fileContext(filePath));

export default fileList;
