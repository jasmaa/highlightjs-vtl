/*
Language: Velocity Template Language
Description: Velocity is a Java-based template engine. It permits anyone to use a simple yet powerful template language to reference objects defined in Java code.
Website: https://velocity.apache.org/
Category: web
*/
module.exports = function (hljs) {
  const ESCAPED_DIRECTIVE = {
    match: /\\#\w+/,
  };

  const ESCAPED_IDENTIFIER = {
    match: /\\\$[\w\-]+\b/,
  };

  const LITERAL = {
    match: /\b(?:true|false)\b/,
    scope: "literal",
  };

  const KEYWORD = {
    match: /\b(?:eq|ne|gt|ge|lt|le|and|or|not|in)\b/,
    scope: "keyword",
  };

  const IDENTIFIER = {
    match: /\$[\w\-]+/,
    scope: "variable",
  };

  const PROPERTY = {
    match: [/\./, /\w+/],
    scope: {
      1: "punctuation",
      2: "property",
    },
  };

  const OPERATOR = {
    match: /(?:=|==|!=|>|<|>=|<=|&&|\|\||!|\+|-|\*|\/|%|\.\.)/,
    scope: "operator",
  };

  const CURLY_BRACE = {
    match: /(?:{|})/,
    scope: "punctuation",
  };

  const PARENTHESIS = {
    match: /(?:\(|\))/,
    scope: "punctuation",
  };

  const PUNCTUATION = {
    match: /(?:,|\.|\[|\])/,
    scope: "punctuation",
  };

  const STRING = {
    begin: /"/,
    end: /"/,
    scope: "string",
    contains: [
      {
        begin: [/\$/, /{/],
        end: /}/,
        beginScope: {
          1: "variable",
          2: "punctuation",
        },
        endScope: "punctuation",
      },
      IDENTIFIER,
    ],
  };

  const SINGLE_LINE_COMMENT = {
    match: /##\s*.+/,
    scope: "comment",
  };

  const MULTI_LINE_COMMENT = {
    scope: "comment",
    begin: /#\*/,
    end: /\*#/,
  };

  const DOC_COMMENT = {
    scope: "comment",
    begin: /(?:#\*\*)/,
    end: /(?:\*#)/,
  };

  const DIRECTIVE = {
    match: /#\w+/,
    scope: "title.function",
  };

  const DIRECTIVE_WITH_CURLIES = {
    begin: [/#/, /{/],
    end: /}/,
    beginScope: {
      1: "title.function",
      2: "punctuation",
    },
    endScope: "punctuation",
  };

  const ARGS = {
    begin: /\(/,
    end: /\)/,
    beginScope: "punctuation",
    endScope: "punctuation",
    contains: [
      ESCAPED_DIRECTIVE,
      ESCAPED_IDENTIFIER,
      KEYWORD,
      LITERAL,
      "self",
      DIRECTIVE,
      DIRECTIVE_WITH_CURLIES,
      IDENTIFIER,
      PROPERTY,
      OPERATOR,
      CURLY_BRACE,
      PUNCTUATION,
      SINGLE_LINE_COMMENT,
      MULTI_LINE_COMMENT,
      DOC_COMMENT,
      STRING,
      hljs.NUMBER_MODE,
    ],
  };

  const IDENTIFIER_WITH_CURLIES = {
    begin: [/\$/, /{/],
    end: /}/,
    beginScope: {
      1: "variable",
      2: "punctuation",
    },
    endScope: "punctuation",
    contains: [
      ESCAPED_DIRECTIVE,
      ESCAPED_IDENTIFIER,
      KEYWORD,
      LITERAL,
      DIRECTIVE,
      DIRECTIVE_WITH_CURLIES,
      IDENTIFIER,
      "self",
      PROPERTY,
      OPERATOR,
      PARENTHESIS,
      PUNCTUATION,
      SINGLE_LINE_COMMENT,
      MULTI_LINE_COMMENT,
      DOC_COMMENT,
      STRING,
      hljs.NUMBER_MODE,
    ],
  };

  return {
    contains: [
      ESCAPED_DIRECTIVE,
      ESCAPED_IDENTIFIER,
      ARGS,
      DIRECTIVE,
      DIRECTIVE_WITH_CURLIES,
      IDENTIFIER,
      IDENTIFIER_WITH_CURLIES,
      PROPERTY,
      SINGLE_LINE_COMMENT,
      MULTI_LINE_COMMENT,
      DOC_COMMENT,
      STRING,
      hljs.NUMBER_MODE,
    ],
  };
};
