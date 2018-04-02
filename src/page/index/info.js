const news = [
    {
      title: '自动挡上的P、R、N、D、S、L是啥意思？还有多少人不知道？',
      image: ['http://p9.pstatp.com/list/pgc-image/15211645993182f7326a904','http://p9.pstatp.com/list/pgc-image/15211645987482c44bcd8e8', 'http://p1.pstatp.com/list/pgc-image/15211645990130e12453d4e']},
    {
      title: '交警提醒：这10种行为千万别学容易被查甚至扣12分',
      image: ['http://p3.pstatp.com/list/pgc-image/1521466324907183fefc64c', 'http://p3.pstatp.com/list/pgc-image/152146632507734a79de3e5', 'http://p9.pstatp.com/list/pgc-image/152146632508226f60d68e2']
    },
    {
      title: '提问：刹车时要不要踩离合呢？',
      image: ['http://p1.pstatp.com/list/6c2b00089d1f38a5310d',
      'http://p1.pstatp.com/list/6ef100030f3c2c65c444','http://p1.pstatp.com/list/6ef300030d4922684112']
    },
    {
      title: '自动挡上的P、R、N、D、S、L是什么意思？',
      image: ['http://p3.pstatp.com/list/53f6000102bfb769a75c','http://p3.pstatp.com/list/53f9000088593e8a912e','http://p3.pstatp.com/list/53f80000959f170a0258']
    },
    {
      title: '刹车失灵怎么办，这招教给你，关键时刻能救命！',
      image: ['http://p3.pstatp.com/list/568d000384619ffd8efa','http://p3.pstatp.com/list/56880005ab0ee8ff2c5b','http://p3.pstatp.com/list/568e000305ed5ab6aa36']
    },
    {
      title: '这几招都不会，别说自己会倒车',
      image: ['http://p1.pstatp.com/list/39ff000011699216e1e4','http://p3.pstatp.com/list/1bf600140daf80002dfa','http://p1.pstatp.com/list/46ff0001b5d7eacecac3']
    },
    {
      title: '解答：大灯“闪一下”、“闪两下”、“闪三下”是什么意思？',
      image: ['http://p1.pstatp.com/list/1bf500010d1c3a835979','http://p3.pstatp.com/list/1a6b001e729c9f5adab7','http://p3.pstatp.com/list/1bf400010d520144d672']
    },
    {
      title: '手动挡起步，是先给油抬离合，还是先抬离合给油呢？',
      image: ['http://p3.pstatp.com/list/pgc-image/15212621403243605cdb888','http://p1.pstatp.com/list/pgc-image/15212621463275e02cca337','http://p1.pstatp.com/list/pgc-image/15212621522991fcf697c79']
    },
    {
      title: '高速上，这5种驾驶行为直接扣12分',
      image: ['http://p1.pstatp.com/list/594b0002cf7d644002f7','http://p1.pstatp.com/list/594c0002b9ffec444a22', 'http://p9.pstatp.com/list/594b0002cf7e1ca727d2']
    },
    {
      title: '你的开车技术行不行, 就看你敢不敢走这些路!',
      image: ['http://p1.pstatp.com/list/pgc-image/15195265720852b9cc788d9','http://p3.pstatp.com/list/pgc-image/1519526583349241e09a770','http://p3.pstatp.com/list/pgc-image/1519526594814da829bf35d']
    },
    {
      title: '提车时，销售最怕你检查这6个地方，很多人都会忽视！',
      image: ['http://p9.pstatp.com/list/pgc-image/1520319028757a8480f9e56','http://p3.pstatp.com/list/pgc-image/1520319028619b7a3bbe4b7','http://p3.pstatp.com/list/pgc-image/1520319028686def961dd23']
    },
    {
      title: '如何正确使用离合器踏板？',
      image: ['http://p3.pstatp.com/list/66ba00051c86e61e5db4','http://p9.pstatp.com/list/66b800063a9631a84cb5','http://p3.pstatp.com/list/66bd00003c9b171fd16d']
    },
    {
      title:'上坡辅助怎样才能激活？',
      image: ['http://p1.pstatp.com/list/5683000118edf3396de0','http://p1.pstatp.com/list/56800004532d82d1b7b6','http://p1.pstatp.com/list/56800004532ef6d25161']
    },
    {
      title:'自动挡都快要开到报废了，很多车主都没有用过这个按键！',
      image: ['http://p3.pstatp.com/list/12dc00012c677bd32f70','http://p3.pstatp.com/list/12dc00012d568c6d9a60','http://p3.pstatp.com/list/12d900024270a37222ef']
    },
    {
      title:'汽车仪表盘这几个指示灯亮起，马上采取措施，否则半路坑你没商量',
      image: ['http://p3.pstatp.com/list/pgc-image/15214665021027099037a33','http://p3.pstatp.com/list/pgc-image/15214665019398a20b27f93','http://p3.pstatp.com/list/pgc-image/1521466501942a4a483ded1']
    },
    {
      title:'丰田质量好，日产舒适性强，那么大众的优势在哪里',
      image: ['http://p1.pstatp.com/list/5b5800052c43331fed9d','http://p1.pstatp.com/list/5b5800052c447874dbb3','http://p3.pstatp.com/list/5b5b0001fe51cf30ea00']
    },
    {
      title:'老司机总结出的侧方位停车和倒车入库技巧！只需一分钟',
      image: ['http://p3.pstatp.com/list/pgc-image/152202469470224f0a01292','http://p9.pstatp.com/list/pgc-image/1522024694701d5c41af864','http://p1.pstatp.com/list/pgc-image/15220246947317e5d46ad61']
    },
    {
      title:'科目二、科目三中，如何能找准30公分距离？',
      image: ['http://p9.pstatp.com/list/5b580001d84cb40ffd93','http://p3.pstatp.com/list/5b5200048883e0c7a71d','http://p3.pstatp.com/list/5b5600040fb2c7dc5dae']
    },
    {
      title:'2018最新驾校考试，快看吧！不用去驾校你也可以学会倒车入库',
      image: ['http://p1.pstatp.com/list/5b44000518821a1bff3b','http://p1.pstatp.com/list/5b450004e7e371a5eb99','http://p1.pstatp.com/list/5b4a00022161219cbc77']
    },
    {
      title:'谁说“马路杀手”属于女司机，这几款车倒挡你可能不知道挂！',
      image: ['http://p1.pstatp.com/list/569100023898ed64b023','http://p1.pstatp.com/list/5693000239f4b10643b5','http://p1.pstatp.com/list/568f0002d42156d8236d']
    }]

export default news