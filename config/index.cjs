/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx1d6df526b0f62406',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '66ee28bb9411e233bcedfd5323239811',

  PROVINCE: '北京',
  CITY: '海淀',

  USERS: [
    {
      // 想要发送的人的名字
      name: '程程',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oo66g6UgPTD_cSeJE-z69a3NPiKI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'DUErBdH5PHY0p_X0IcUbh8fDk5jSEwFSvhlqG3OxqC8',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '程程', year: '1997', date: '03-20',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '程程', year: '1997', date: '04-25',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'earthy_love_words', date: '2023-11-15' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'DUErBdH5PHY0p_X0IcUbh8fDk5jSEwFSvhlqG3OxqC8',

  CALLBACK_USERS: [
    {
      name: 'self',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oo66g6UgPTD_cSeJE-z69a3NPiKI',
    }
  ],

}

module.exports = USER_CONFIG
