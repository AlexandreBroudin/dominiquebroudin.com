// styleguide.js

var Styleguide = require('node-styleguide');

var styleguide = new Styleguide({

  /* Folder where your .md files are located
  * Default: 'example/assets/css/' */
  srcFolder: 'public/stylesheets/',

  /* Folder where your styleguide is located
  * Default: 'example/styleguide/' */
  distFolder: 'app/views/pages/',

  /* Layout path
  * Default: 'example/styleguide/layout.html' */
  layout: 'app/views/pages/styleguide.liquid.haml',

  components : {

    /* Folder where your components files will be generated
    * Can be blank
    * Default :'components/' */
    folder: '../snippets/sg-components/',

    /* Specify your compnents files extension
    * Can be what you want (.html, .hbs...)
    * But files will only be compiled in .html
    * Default: '.html' */
    filesExtension: 'liquid.haml',

    /* Modify each Markdown file content before compilation
    * Default: return MardowknStr */
    beforeCompilation: function( MardowknStr ) {
      return MardowknStr + 'data appended on each file';
    },

    /* Modify each Markdown file before compilation
    * Default: return HtmlStr */
    afterCompilation:  function( HtmlStr ) {
      return 'data prepend on each file' + HtmlStr;
    }
  },

  onePage: {

    /* If you don't want to generate a file per component
     * set active to true
     * Default: false */
    active: true,

    /* String to replace in the layout
     * It will be replace by the components' Html generated
    * Default: '<!-- %onePage-data% -->' */
    contentStr: '<!-- %onePage-data% -->'
  }
});

styleguide.generate();