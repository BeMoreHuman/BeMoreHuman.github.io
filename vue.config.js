module.exports = {
  css: {
    loaderOptions: {
      // передача настроек в sass-loader
      sass: {
        // @/ это псевдоним к каталогу src/ поэтому предполагается,
        // что у вас в проекте есть файл `src/assets/styles/variables.scss`
        data: `@import "@/assets/styles/variables.scss";`
      }
    }
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
      ]
    }
  }
};
