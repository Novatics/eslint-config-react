// constants to config
const OFF = 0;
const WARNING = 1;
const ERROR = 2;

const react = {
  "prettier/prettier": ["error"],
  "react/jsx-filename-extension": [
    WARNING,
    {
      extensions: [".ts", ".tsx", "js", "jsx"],
    },
  ],
  "react/prop-types": OFF,
  "import/named": OFF,
  "react/destructuring-assignment": OFF,
  "no-restricted-exports": OFF,
  "react/no-unstable-nested-components": OFF,
  // This option enforces a specific function type for `function components.
  "react/function-component-definition": OFF,
  // Arquivos que podem usar o conceito de JSX
  "react/jsx-props-no-spreading": OFF,
  // Desabilita a regra de não fazer spread em props exemplo: <div {...props} /> agora é aceito.
  "react/react-in-jsx-scope": OFF,
  // React 17 não precisamos mais ter a React importado no arquivo.
  "space-infix-ops": ERROR,
  // Embora as preferências de formatação sejam muito pessoais, vários guias de estilo exigem espaços ao redor dos operadores, como: let sum = 1 + 2;
  "prefer-spread": ERROR,
  // No ES2015, pode-se usar a sintaxe de propagação para chamar funções variáveis. Math.max(...args);
  "no-multi-spaces": ERROR,
  // Esta regra visa proibir vários espaços em branco em torno de expressões lógicas, expressões condicionais, declarações, elementos de array, propriedades de objeto, sequências e parâmetros de função.
  "class-methods-use-this": WARNING,
  // Se um método de classe não usar this, às vezes pode ser transformado em uma função estática.
  "import/prefer-default-export": OFF,
  // Quando houver apenas uma exportação de um módulo, prefira usar a exportação padrão em vez da exportação nomeada.
  "import/no-unresolved": ERROR,
  // Por padrão, apenas as importações ES6 serão resolvidas
  "consistent-return": OFF,
  // Remove obrigatoriedade de sempre ter um retorno nas funções
  "no-var": "error",
  // Não é possível usar var
  quotes: [ERROR, "single"],
  // Aspas simples
  semi: [ERROR, "never"],
  // Ponto e virgular sempre
  complexity: ["error", 5],
  // Máximo de complexidade em uma função ou arquivo
  camelcase: OFF,
  "semi-spacing": [
    "error",
    {
      before: false,
      after: true,
    },
  ],
  "import/extensions": [
    "error",
    "ignorePackages",
    {
      js: "never",
      jsx: "never",
      ts: "never",
      tsx: "never",
    },
  ],
  "react/forbid-prop-types": "off",
  "arrow-parens": [ERROR, "as-needed"],
  // Esta regra impõe o uso consistente de parênteses nas arrow functions.
  "import/order": [
    "error",
    {
      alphabetize: {
        caseInsensitive: true,
        order: "asc",
      },
      groups: [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling",
        "index",
        "type",
      ],
      "newlines-between": "never",
      pathGroups: [
        {
          group: "external",
          pattern: "react",
          position: "before",
        },
      ],
      pathGroupsExcludedImportTypes: ["react"],
    },
  ],
  // Proíbe a importação com a extensão exemplo: home.jsx
  "max-lines": [
    "error",
    {
      max: 200,
      skipBlankLines: true,
      skipComments: true,
    },
  ],
  // Máximo de 200 linhas por arquivo
  "func-style": [
    "error",
    "declaration",
    {
      allowArrowFunctions: true,
    },
  ], // Obriga sempre usar arrow function
  // Liberar o uso de pacotes de desenvolvimento nos arquivos de testes
  "import/no-extraneous-dependencies": [
    ERROR,
    {
      devDependencies: [
        "src/setupTests.ts",
        "src/__mocks__/mock.ts",
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.test.jsx",
        "**/*.spec.ts",
        "**/*.spec.tsx",
        "**/*.spec.jsx",
      ],
    },
  ],
};

module.exports = react;
