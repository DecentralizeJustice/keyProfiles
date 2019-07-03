const camelCase = function functionName (str) {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
    return chr.toUpperCase()
  })
}
const requireModule = require.context('.', false, /\.js$/) // extract js files inside modules folder
const modules = {}

requireModule.keys().forEach(fileName => {
  if (fileName === './index.js') return // reject the index.js file

  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, '')) //

  modules[moduleName] = requireModule(fileName).default
})
export default modules
