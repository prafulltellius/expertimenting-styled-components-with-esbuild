import babel from '@babel/core'
import styled from 'babel-plugin-styled-components'
import fs from 'node:fs'

const esbuildPluginStyledComponents = ({
	filter = "\\.[tj]sx$",
	ssr = false,
	displayName = false,
	fileName = false,
	meaninglessFileNames = [],
	minify = true,
	transpileTemplateLiterals = false,
	pure = false,
	topLevelImportPaths = [],
}) => ( {
  name: "styled-components",
  setup({ onLoad ,initialOptions}) {
    const root = process.cwd();
    onLoad({ filter: /\.[tj]sx$/ }, async (args) => {
      let code = await fs.promises.readFile(args.path, "utf8");
      let plugins = [
        "importMeta",
        "topLevelAwait",
        "classProperties",
        "classPrivateProperties",
        "classPrivateMethods",
        "jsx"
      ];
      let loader = "jsx";
      if (args.path.endsWith(".tsx")) {
        plugins.push("typescript");
        loader = "tsx";
      }
      const map = initialOptions.sourcemap !== false;
      const result = await babel.transformAsync(code, {
        babelrc: false,
        configFile: false,
        ast: false,
        root,
        filename: args.path,
        parserOpts: {
          sourceType: "module",
          allowAwaitOutsideFunction: true,
          plugins
        },
        generatorOpts: {
          decoratorsBeforeExport: true
        },
        plugins: [
         [ styled,{
            filter,
            ssr,
            displayName,
            fileName ,
            meaninglessFileNames,
            minify ,
            transpileTemplateLiterals ,
            pure ,
            topLevelImportPaths
         }]
        ],
        sourceMaps: map,
        inputSourceMap: false
      });
      return { contents: result.code + `//# sourceMappingURL=data:application/json;base64,` + Buffer.from(JSON.stringify(result.map)).toString("base64"), loader };
    });
  }
});

export default esbuildPluginStyledComponents;