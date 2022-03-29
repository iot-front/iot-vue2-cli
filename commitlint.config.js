module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    commit => {
      return commit.slice(0, 1).includes(':')
    }
  ],
  // 检测规则
  // rule由name和配置数组组成，如：'name:[0, 'always', 72]'，数组中第一位为level，可选0,1,2，0为disable，1为warning，2为error，第二位为应用与否，可选always|never，第三位该rule的值
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 仅仅修改了文档，如README
        'style', // 仅修改了空格、格式缩进等，不改变代码逻辑
        'refactor', // 代码重构，没有加新功能或修改bug
        'perf', // 优化相关，如提升性能、体验
        'test', // 测试用例
        'chore', // 改变构建流程或更新、增加依赖库等
        'revert', // 回滚到之前版本
        'build' // 打包
      ]
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}
// scope 指 commit 的范围（哪些模块进行了修改）
// subject 指 commit 的简短描述
// body 指 commit 主体内容（长描述）
// footer 指 commit footer 信息
// type 指当前 commit 类型
// https://commitlint.js.org/#/reference-rules
