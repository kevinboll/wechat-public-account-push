/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx041fe46ef3522604',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a5b9572a75e0f636ecebd387d9e62ce3',

  PROVINCE: '吉林',
  CITY: '长春',

  USERS: [
    {
      // 想要发送的人的名字
      name: '柒宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o7XM05_o8zJG6DLaidTlp6-RhqGg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'UZbReTt24E7wnaeEehijqkVbKEq6X82uIEkYuQlkIZw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '7-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        //{
          //type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        //},
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '柒柒', year: '2001', date: '07-27',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '04-07',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-04-30' },
        // 相识纪念日
        { keyword: 'meet_day', date: '2023-04-07' },
      ],
      
      /** 你可以在这里写超多的你想显示的内容了！
   * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
   * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
   * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    { keyword: 'encourage_oneself', contents: '你主要的问题在于读书太少而想得太多' },
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: 'love_records',
      contents: [
        '雄：“那你嫁给我好不好”\r柒：“好”',
        '柒：“考研不是要学英语吗”\r“那你应该还行吧”\r雄：“我不行”\r“别找我”\r柒：“那我问问我朋友”\r雄：“那你问吧”\r\r雄：“姐姐还在降重？”\r“等我开完会回去帮你降降重”\r“也帮你降降火”',
        '哟吼~，我们相距约1.2km。\r-------------\r我捡到了你的纸飞机：\r有个可爱的人，正在读我写的字',
        '柒：“吗的那天真想嫁给他啊”\r雄：“我帮你改，你嫁给我”\r柒：“娶我这么简单？”\r ... \r柒：“那我勉为其难的不要他，考虑你吧”'
      ],
    }
    // 你可以不断按格式往下增加
    // ...
  ],
    },{
      // 想要发送的人的名字
      name: '王宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o7XM05weWYftE9b_B7j8_DLTnfTQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'UZbReTt24E7wnaeEehijqkVbKEq6X82uIEkYuQlkIZw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '7-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        //{
          //type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        //},
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '柒柒', year: '2001', date: '07-27',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '04-07',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-04-30' },
        // 相识纪念日
        { keyword: 'meet_day', date: '2023-04-07' },
      ],
       SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    { keyword: 'encourage_oneself', contents: '你主要的问题在于读书太少而想得太多' },
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: 'love_records',
      contents: [
        '雄：“那你嫁给我好不好”%0A%0A柒：“好”',
        '柒：“考研不是要学英语吗”%0A%0A“那你应该还行吧”%0A%0A雄：“我不行”%0A%0A“别找我”%0A%0A柒：“那我问问我朋友”%0A%0A雄：“那你问吧”%0A%0A雄：“姐姐还在降重？”%0A%0A“等我开完会回去帮你降降重”%0A%0A“也帮你降降火”',
        '哟吼~，我们相距约1.2km。%0A%0A -------------%0A%0A我捡到了你的纸飞机：%0A%0A有个可爱的人，正在读我写的字',
        '柒：“吗的那天真想嫁给他啊”%0A%0A雄：“我帮你改，你嫁给我”%0A%0A柒：“娶我这么简单？”%0A%0A...%0A%0A柒：“那我勉为其难的不要他，考虑你吧”'
      ],
    }
    // 你可以不断按格式往下增加
    // ...
  ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Ne6fXui0Bcl95XwWJJnRPx22tavKf79LEuBZ1viONTM',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o7XM05_o8zJG6DLaidTlp6-RhqGg',
    }
  ],

}

module.exports = USER_CONFIG

