/* eslint-disable */
const USER_CONFIG = {
  /**
   * 基本配置
   */
  
  // 使用的推送通道：['push-deer', 'wechat-test', 'server-chan', 'push-plus']
  // 默认使用 【微信测试号】
  // 使用【pushDeer】请填写 push-deer
  // 使用【微信测试号】请填写 wechat-test
  // 使用【方糖服务号】请填写 server-chan
  // 使用【pushplus推送加服务号】请填写 push-plus
  USE_PASSAGE: 'wechat-test',
  
  // 使用微信测试号时才需要填写：公众号APP_ID
  APP_ID: 'wx1d6df526b0f62406',

  // 使用微信测试号时才需要填写：公众号APP_SECRET
  APP_SECRET: '66ee28bb9411e233bcedfd5323239811',
  
  /** 是否给文字设置多彩颜色, 和emoji不兼容 */
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: '程程',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // 使用其他通道时，请严格按照各个通道的教程进行填写
      id: 'oo66g6UgPTD_cSeJE-z69a3NPiKI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      // 使用其他通道时，请填写 config/template-config.cjs 中某个想要使用的模板的id
      useTemplateId: 'r5l0JQ1-ldZFxq0cYXClwimfDp4g4a0xwH5cUUDAViE',
      // 所在省份或城市，也可以不填
      province: '北京',
      // 所在城市或县区
      city: '海淀',

      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 第一次见面的日子
        { keyword: 'earthy_love_words', date: '2023-11-15' },
      ],
}

module.exports = USER_CONFIG

