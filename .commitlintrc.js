module.exports = {
  extends: ['@commitlint/config-conventional'],
  /**
   * rule config description：rule are composed of name and config array，
   * eg：'name: [0, 'always', 72]'，
   * first param is level，optional 0,1,2，0 is disable，1 is warning，2 is error，
   * second param optional always|never，
   * thirs param is value of rule
   */
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // primary purpose is change build system of project(like glup，webpack，rollup and so on)
        'chore', // not belonging to other type
        'ci', // primary change the process of ci (like Travis，Jenkins，GitLab CI，Circle)
        'docs', // document update
        'feat', // add new feature
        'fix', // bug fix
        'perf', // performance update
        'refactor', // refactor code
        'revert', // revert version
        'style', // style change
        'test', // test change
      ],
    ],
    'type-case': [2, 'always', 'lowerCase'],
    'type-empty': [2, 'never'],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0],
    'subject-case': [0],
    'header-max-length': [2, 'always', 100],
  },
};
