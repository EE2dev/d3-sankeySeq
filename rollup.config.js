// rollup.config.js
// import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.js',
  dest: 'build/d3-sankeySeq.js',
  format: 'umd',
  moduleName: 'd3',
  globals: {
    'd3-interpolate': 'd3',
    'd3-array': 'd3',
    'd3-scale': 'd3'
  },
  plugins: [
    /*
    nodeResolve({ 
      jsnext: true, main: true}),
      */
    babel({
      exclude: 'node_modules/**'})
  ]
};