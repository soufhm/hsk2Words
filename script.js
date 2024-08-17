const hsk2Words = [
  { chinese: "两", pinyin: "liǎng", arabic: "اثنان", image: "liang.jpg", audio: "audio/liang.mp3" },
  { chinese: "也", pinyin: "yě", arabic: "أيضًا", image: "ye.jpg", audio: "audio/ye.mp3" },
  { chinese: "从", pinyin: "cóng", arabic: "من", image: "cong.jpg", audio: "audio/cong.mp3" },
  { chinese: "件", pinyin: "jiàn", arabic: "(عداد للأشياء)", image: "jian.jpg", audio: "audio/jian.mp3" },
  { chinese: "再", pinyin: "zài", arabic: "مرة أخرى", image: "zai.jpg", audio: "audio/zai.mp3" },
  { chinese: "最", pinyin: "zuì", arabic: "الأكثر", image: "zui.jpg", audio: "audio/zui.mp3" },
  { chinese: "出", pinyin: "chū", arabic: "يخرج", image: "chu.jpg", audio: "audio/chu.mp3" },
  { chinese: "别", pinyin: "bié", arabic: "لا", image: "bie.jpg", audio: "audio/bie.mp3" },
  { chinese: "到", pinyin: "dào", arabic: "يصل", image: "dao.jpg", audio: "audio/dao.mp3" },
  { chinese: "千", pinyin: "qiān", arabic: "ألف", image: "qian.jpg", audio: "audio/qian.mp3" },
  { chinese: "吧", pinyin: "ba", arabic: "(للتأكيد)", image: "ba.jpg", audio: "audio/ba.mp3" },
  { chinese: "外", pinyin: "wài", arabic: "خارج", image: "wai.jpg", audio: "audio/wai.mp3" },
  { chinese: "⼥", pinyin: "nǚ", arabic: "أنثى", image: "nv.jpg", audio: "audio/nv.mp3" },
  { chinese: "姓", pinyin: "xìng", arabic: "لقب العائلة", image: "xing.jpg", audio: "audio/xing.mp3" },
  { chinese: "它", pinyin: "tā", arabic: "هو/هي (لشيء)", image: "ta.jpg", audio: "audio/ta.mp3" },
  { chinese: "完", pinyin: "wán", arabic: "ينتهي", image: "wan.jpg", audio: "audio/wan.mp3" },
  { chinese: "对", pinyin: "duì", arabic: "صحيح", image: "dui.jpg", audio: "audio/dui.mp3" },
  { chinese: "就", pinyin: "jiù", arabic: "فقط/ثم", image: "jiu.jpg", audio: "audio/jiu.mp3" },
  { chinese: "往", pinyin: "wǎng", arabic: "إلى/باتجاه", image: "wang.jpg", audio: "audio/wang.mp3" },
  { chinese: "得", pinyin: "de", arabic: "(لإضافة معنى إلى الفعل)", image: "de.jpg", audio: "audio/de.mp3" },
  { chinese: "忙", pinyin: "máng", arabic: "مشغول", image: "mang.jpg", audio: "audio/mang.mp3" },
  { chinese: "快", pinyin: "kuài", arabic: "سريع", image: "kuai.jpg", audio: "audio/kuai.mp3" },
  { chinese: "您", pinyin: "nín", arabic: "أنت (مع احترام)", image: "nin.jpg", audio: "audio/nin.mp3" },
  { chinese: "慢", pinyin: "màn", arabic: "بطيء", image: "man.jpg", audio: "audio/man.mp3" },

  { chinese: "懂", pinyin: "dǒng", arabic: "يفهم", image: "dong.jpg", audio: "audio/dong.mp3" },
  { chinese: "找", pinyin: "zhǎo", arabic: "يبحث", image: "zhao.jpg", audio: "audio/zhao.mp3" },
  { chinese: "新", pinyin: "xīn", arabic: "جديد", image: "xin.jpg", audio: "audio/xin.mp3" },
  { chinese: "⽇", pinyin: "rì", arabic: "يوم", image: "ri.jpg", audio: "audio/ri.mp3" },
  { chinese: "晴", pinyin: "qíng", arabic: "مشمس", image: "qing.jpg", audio: "audio/qing.mp3" },
  { chinese: "次", pinyin: "cì", arabic: "(عداد للمرات)", image: "ci.jpg", audio: "audio/ci.mp3" },
  { chinese: "每", pinyin: "měi", arabic: "كل", image: "mei.jpg", audio: "audio/mei.mp3" },
  { chinese: "⽐", pinyin: "bǐ", arabic: "أكثر", image: "bi.jpg", audio: "audio/bi.mp3" },
  { chinese: "洗", pinyin: "xǐ", arabic: "يغسل", image: "xi.jpg", audio: "audio/xi.mp3" },
  { chinese: "男", pinyin: "nán", arabic: "ذكر", image: "nan.jpg", audio: "audio/nan.mp3" },
  { chinese: "⽩", pinyin: "bái", arabic: "أبيض", image: "bai.jpg", audio: "audio/bai.mp3" },
  { chinese: "百", pinyin: "bǎi", arabic: "مئة", image: "bai2.jpg", audio: "audio/bai2.mp3" },
  { chinese: "真", pinyin: "zhēn", arabic: "حقيقي", image: "zhen.jpg", audio: "audio/zhen.mp3" },
  { chinese: "着", pinyin: "zhe", arabic: "(علامة الاستمرارية)", image: "zhe.jpg", audio: "audio/zhe.mp3" },
  { chinese: "票", pinyin: "piào", arabic: "تذكرة", image: "piao.jpg", audio: "audio/piao.mp3" },
  { chinese: "离", pinyin: "lí", arabic: "يبتعد", image: "li2.jpg", audio: "audio/li2.mp3" },
  { chinese: "穿", pinyin: "chuān", arabic: "يلبس", image: "chuan.jpg", audio: "audio/chuan.mp3" },
  { chinese: "笑", pinyin: "xiào", arabic: "يضحك", image: "xiao.jpg", audio: "audio/xiao.mp3" },
  { chinese: "等", pinyin: "děng", arabic: "ينتظر", image: "deng.jpg", audio: "audio/deng.mp3" },
  { chinese: "红", pinyin: "hóng", arabic: "أحمر", image: "hong.jpg", audio: "audio/hong.mp3" },
  { chinese: "给", pinyin: "gěi", arabic: "يعطي", image: "gei.jpg", audio: "audio/gei.mp3" },
  { chinese: "药", pinyin: "yào", arabic: "دواء", image: "yao.jpg", audio: "audio/yao.mp3" },
  { chinese: "要", pinyin: "yào", arabic: "يريد", image: "yao2.jpg", audio: "audio/yao2.mp3" },
  { chinese: "让", pinyin: "ràng", arabic: "يسمح", image: "rang.jpg", audio: "audio/rang.mp3" },
  { chinese: "课", pinyin: "kè", arabic: "درس", image: "ke.jpg", audio: "audio/ke.mp3" },

  { chinese: "贵", pinyin: "guì", arabic: "غالي", image: "gui.jpg", audio: "audio/gui.mp3" },
  { chinese: "⾛", pinyin: "zǒu", arabic: "يمشي", image: "zou.jpg", audio: "audio/zou.mp3" },
  { chinese: "路", pinyin: "lù", arabic: "طريق", image: "lu.jpg", audio: "audio/lu.mp3" },
  { chinese: "过", pinyin: "guò", arabic: "يمر", image: "guo.jpg", audio: "audio/guo.mp3" },
  { chinese: "近", pinyin: "jìn", arabic: "قريب", image: "jin.jpg", audio: "audio/jin.mp3" },
  { chinese: "还", pinyin: "hái", arabic: "أيضًا/مازال", image: "hai.jpg", audio: "audio/hai.mp3" },
  { chinese: "进", pinyin: "jìn", arabic: "يدخل", image: "jin2.jpg", audio: "audio/jin2.mp3" },
  { chinese: "远", pinyin: "yuǎn", arabic: "بعيد", image: "yuan.jpg", audio: "audio/yuan.mp3" },
  { chinese: "送", pinyin: "sòng", arabic: "يرسل", image: "song.jpg", audio: "audio/song.mp3" },
  { chinese: "错", pinyin: "cuò", arabic: "خطأ", image: "cuo.jpg", audio: "audio/cuo.mp3" },
  { chinese: "⻓", pinyin: "cháng", arabic: "طويل", image: "chang.jpg", audio: "audio/chang.mp3" },
  { chinese: "⻔", pinyin: "mén", arabic: "باب", image: "men.jpg", audio: "audio/men.mp3" },
  { chinese: "问", pinyin: "wèn", arabic: "يسأل", image: "wen.jpg", audio: "audio/wen.mp3" },
  { chinese: "阴", pinyin: "yīn", arabic: "غائم", image: "yin.jpg", audio: "audio/yin.mp3" },
  { chinese: "雪", pinyin: "xuě", arabic: "ثلج", image: "xue.jpg", audio: "audio/xue.mp3" },
  { chinese: "零", pinyin: "líng", arabic: "صفر", image: "ling.jpg", audio: "audio/ling.mp3" },
  { chinese: "题", pinyin: "tí", arabic: "سؤال", image: "ti.jpg", audio: "audio/ti.mp3" },
  { chinese: "⾼", pinyin: "gāo", arabic: "عالي", image: "gao.jpg", audio: "audio/gao.mp3" },
  { chinese: "⻥", pinyin: "yú", arabic: "سمك", image: "yu.jpg", audio: "audio/yu.mp3" },
  { chinese: "⿊", pinyin: "hēi", arabic: "أسود", image: "hei.jpg", audio: "audio/hei.mp3" },
  { chinese: "卖", pinyin: "mài", arabic: "يبيع", image: "mai.jpg", audio: "audio/mai.mp3" },
  { chinese: "玩", pinyin: "wán", arabic: "يلعب", image: "wan2.jpg", audio: "audio/wan2.mp3" },
  { chinese: "累", pinyin: "lèi", arabic: "متعب", image: "lei.jpg", audio: "audio/lei.mp3" },
  { chinese: "⼀下", pinyin: "yīxià", arabic: "قليلًا", image: "yixia.jpg", audio: "audio/yixia.mp3" },
  { chinese: "⼀起", pinyin: "yīqǐ", arabic: "معًا", image: "yiqi.jpg", audio: "audio/yiqi.mp3" },

  { chinese: "丈夫", pinyin: "zhàngfu", arabic: "زوج", image: "zhangfu.jpg", audio: "audio/zhangfu.mp3" },
  { chinese: "上班", pinyin: "shàngbān", arabic: "يذهب إلى العمل", image: "shangban.jpg", audio: "audio/shangban.mp3" },
  { chinese: "事情", pinyin: "shìqing", arabic: "أمر/شيء", image: "shiqing.jpg", audio: "audio/shiqing.mp3" },
  { chinese: "介绍", pinyin: "jièshào", arabic: "يقدم/يشرح", image: "jieshao.jpg", audio: "audio/jieshao.mp3" },
  { chinese: "休息", pinyin: "xiūxi", arabic: "يستريح", image: "xiuxi.jpg", audio: "audio/xiuxi.mp3" },
  { chinese: "便宜", pinyin: "piányi", arabic: "رخيص", image: "pianyi.jpg", audio: "audio/pianyi.mp3" },
  { chinese: "公司", pinyin: "gōngsī", arabic: "شركة", image: "gongsi.jpg", audio: "audio/gongsi.mp3" },
  { chinese: "准备", pinyin: "zhǔnbèi", arabic: "يستعد", image: "zhunbei.jpg", audio: "audio/zhunbei.mp3" },
  { chinese: "去年", pinyin: "qùnián", arabic: "العام الماضي", image: "qunian.jpg", audio: "audio/qunian.mp3" },
  { chinese: "可以", pinyin: "kěyǐ", arabic: "يمكن", image: "keyi.jpg", audio: "audio/keyi.mp3" },
  { chinese: "可能", pinyin: "kěnéng", arabic: "ربما", image: "keneng.jpg", audio: "audio/keneng.mp3" },
  { chinese: "右边", pinyin: "yòubiān", arabic: "الجانب الأيمن", image: "youbian.jpg", audio: "audio/youbian.mp3" },
  { chinese: "告诉", pinyin: "gàosu", arabic: "يخبر", image: "gaosu.jpg", audio: "audio/gaosu.mp3" },
  { chinese: "咖啡", pinyin: "kāfēi", arabic: "قهوة", image: "kafei.jpg", audio: "audio/kafei.mp3" },
  { chinese: "哥哥", pinyin: "gēge", arabic: "أخ كبير", image: "gege.jpg", audio: "audio/gege.mp3" },
  { chinese: "唱歌", pinyin: "chànggē", arabic: "يغني", image: "changge.jpg", audio: "audio/changge.mp3" },
  { chinese: "⼤家", pinyin: "dàjiā", arabic: "الجميع", image: "dajia.jpg", audio: "audio/dajia.mp3" },
  { chinese: "好吃", pinyin: "hǎochī", arabic: "لذيذ", image: "haoshi.jpg", audio: "audio/haoshi.mp3" },
  { chinese: "妹妹", pinyin: "mèimei", arabic: "أخت صغيرة", image: "meimei.jpg", audio: "audio/meimei.mp3" },
  { chinese: "妻⼦", pinyin: "qīzi", arabic: "زوجة", image: "qizi.jpg", audio: "audio/qizi.mp3" },
  { chinese: "姐姐", pinyin: "jiějie", arabic: "أخت كبيرة", image: "jiejie.jpg", audio: "audio/jiejie.mp3" },
  { chinese: "孩⼦", pinyin: "háizi", arabic: "طفل", image: "haizi.jpg", audio: "audio/haizi.mp3" },
  { chinese: "宾馆", pinyin: "bīnguǎn", arabic: "فندق", image: "binguan.jpg", audio: "audio/binguan.mp3" },
  { chinese: "⼩时", pinyin: "xiǎoshí", arabic: "ساعة", image: "xiaoshi.jpg", audio: "audio/xiaoshi.mp3" },
  { chinese: "左边", pinyin: "zuǒbiān", arabic: "الجانب الأيسر", image: "zuobian.jpg", audio: "audio/zuobian.mp3" },

  { chinese: "已经", pinyin: "yǐjīng", arabic: "مُسبقًا/حاليا", image: "yijing.jpg", audio: "audio/yijing.mp3" },
  { chinese: "希望", pinyin: "xīwàng", arabic: "يرغب/يتمنى", image: "xiwang.jpg", audio: "audio/xiwang.mp3" },
  { chinese: "帮助", pinyin: "bāngzhù", arabic: "يساعد", image: "bangzhu.jpg", audio: "audio/bangzhu.mp3" },
  { chinese: "开始", pinyin: "kāishǐ", arabic: "يبدأ", image: "kaishi.jpg", audio: "audio/kaishi.mp3" },
  { chinese: "弟弟", pinyin: "dìdi", arabic: "أخ صغير", image: "didi.jpg", audio: "audio/didi.mp3" },
  { chinese: "快乐", pinyin: "kuàilè", arabic: "سعيد", image: "kuai.jpg", audio: "audio/kuaile.mp3" },
  { chinese: "意思", pinyin: "yìsi", arabic: "معنى", image: "yisi.jpg", audio: "audio/yisi.mp3" },
  { chinese: "房间", pinyin: "fángjiān", arabic: "غرفة", image: "fangjian.jpg", audio: "audio/fangjian.mp3" },
  { chinese: "⼿机", pinyin: "shǒujī", arabic: "هاتف", image: "shouji.jpg", audio: "audio/shouji.mp3" },
  { chinese: "⼿表", pinyin: "shǒubiǎo", arabic: "ساعة يد", image: "shoubia.jpg", audio: "audio/shoubiao.mp3" },
  { chinese: "报纸", pinyin: "bàozhǐ", arabic: "صحيفة", image: "baozhi.jpg", audio: "audio/baozhi.mp3" },
  { chinese: "教室", pinyin: "jiàoshì", arabic: "فصل دراسي", image: "jiaoshi.jpg", audio: "audio/jiaoshi.mp3" },
  { chinese: "旁边", pinyin: "pángbiān", arabic: "بجانب", image: "pangbian.jpg", audio: "audio/pangbian.mp3" },
  { chinese: "旅游", pinyin: "lǚyóu", arabic: "يسافر", image: "lvyou.jpg", audio: "audio/lvyou.mp3" },
  { chinese: "早上", pinyin: "zǎoshang", arabic: "صباحًا", image: "zaoshang.jpg", audio: "audio/zaoshang.mp3" },
  { chinese: "时间", pinyin: "shíjiān", arabic: "وقت", image: "shijian.jpg", audio: "audio/shijian.mp3" },
  { chinese: "晚上", pinyin: "wǎnshang", arabic: "مساءًا", image: "wanshang.jpg", audio: "audio/wanshang.mp3" },
  { chinese: "机场", pinyin: "jīchǎng", arabic: "مطار", image: "jichang.jpg", audio: "audio/jichang.mp3" },
  { chinese: "正在", pinyin: "zhèngzài", arabic: "يقوم بـ", image: "zhengzai.jpg", audio: "audio/zhengzai.mp3" },
  { chinese: "游泳", pinyin: "yóuyǒng", arabic: "يسبح", image: "youyong.jpg", audio: "audio/youyong.mp3" },
  { chinese: "⽜奶", pinyin: "niúnǎi", arabic: "حليب البقر", image: "niunai.jpg", audio: "audio/niunai.mp3" },
  { chinese: "⽣⽇", pinyin: "shēngrì", arabic: "عيد ميلاد", image: "shengri.jpg", audio: "audio/shengri.mp3" },
  { chinese: "⽣病", pinyin: "shēngbìng", arabic: "مريض", image: "shengbing.jpg", audio: "audio/shengbing.mp3" },
  { chinese: "眼睛", pinyin: "yǎnjīng", arabic: "عين", image: "yanjing.jpg", audio: "audio/yanjing.mp3" },
  { chinese: "知道", pinyin: "zhīdào", arabic: "يعرف", image: "zhidao.jpg", audio: "audio/zhidao.mp3" },

  { chinese: "第⼀", pinyin: "dìyī", arabic: "الأول", image: "diyi.jpg", audio: "audio/diyi.mp3" },
  { chinese: "⽺⾁", pinyin: "yángròu", arabic: "لحم الضأن", image: "yangrou.jpg", audio: "audio/yangrou.mp3" },
  { chinese: "考试", pinyin: "kǎoshì", arabic: "امتحان", image: "kaoshi.jpg", audio: "audio/kaoshi.mp3" },
  { chinese: "⻄⽠", pinyin: "xīguā", arabic: "بطيخ", image: "xigua.jpg", audio: "audio/xigua.mp3" },
  { chinese: "觉得", pinyin: "juéde", arabic: "يشعر/يعتقد", image: "jueder.jpg", audio: "audio/juede.mp3" },
  { chinese: "说话", pinyin: "shuōhuà", arabic: "يتحدث", image: "shuohua.jpg", audio: "audio/shuohua.mp3" },
  { chinese: "起床", pinyin: "qǐchuáng", arabic: "يستيقظ", image: "qichuang.jpg", audio: "audio/qichuang.mp3" },
  { chinese: "跑步", pinyin: "pǎobù", arabic: "يركض", image: "paob.jpg", audio: "audio/paobu.mp3" },
  { chinese: "跳舞", pinyin: "tiàowǔ", arabic: "يرقص", image: "tiaowu.jpg", audio: "audio/tiaowu.mp3" },
  { chinese: "身体", pinyin: "shēntǐ", arabic: "جسم", image: "shen.jpg", audio: "audio/shen.mp3" },
  { chinese: "运动", pinyin: "yùndòng", arabic: "رياضة", image: "yundong.jpg", audio: "audio/yundong.mp3" },
  { chinese: "铅笔", pinyin: "qiānbǐ", arabic: "قلم رصاص", image: "qianbi.jpg", audio: "audio/qianbi.mp3" },
  { chinese: "问题", pinyin: "wèntí", arabic: "مشكلة", image: "wenti.jpg", audio: "audio/wenti.mp3" },
  { chinese: "⾮常", pinyin: "fēicháng", arabic: "جداً", image: "feichang.jpg", audio: "audio/feichang.mp3" },
  { chinese: "⾯条", pinyin: "miàntiáo", arabic: "نودلز", image: "mian.jpg", audio: "audio/mian.mp3" },
  { chinese: "颜⾊", pinyin: "yánsè", arabic: "لون", image: "yanse.jpg", audio: "audio/yanse.mp3" },
  { chinese: "鸡蛋", pinyin: "jīdàn", arabic: "بيض", image: "jidan.jpg", audio: "audio/jidan.mp3" },
  { chinese: "为什么", pinyin: "wèishénme", arabic: "لماذا", image: "weishenme.jpg", audio: "audio/weishenme.mp3" },
  { chinese: "打篮球", pinyin: "dǎ lánqiú", arabic: "يلعب كرة السلة", image: "dalanqiu.jpg", audio: "audio/dalanqiu.mp3" },
  { chinese: "服务", pinyin: "fúwù", arabic: "خدمة", image: "fuwu.jpg", audio: "audio/fuwu.mp3" },
  { chinese: "⽕⻋站", pinyin: "huǒchēzhàn", arabic: "محطة القطار", image: "huochezhan.jpg", audio: "audio/huochezhan.mp3" },
  { chinese: "踢⾜球", pinyin: "tī zúqiú", arabic: "يلعب كرة القدم", image: "tizouqiu.jpg", audio: "audio/tizouqiu.mp3" },
  { chinese: "公共汽⻋", pinyin: "gōnggòng qìchē", arabic: "حافلة", image: "gonggongqiche.jpg", audio: "audio/gonggongqiche.mp3" },
  { chinese: "因为所以", pinyin: "yīnwéi suǒyǐ", arabic: "لأن/لذلك", image: "yinweisuoyi.jpg", audio: "audio/yinweisuoyi.mp3" },
  { chinese: "虽然但是", pinyin: "suīrán dànshì", arabic: "على الرغم من أن/لكن", image: "suirandanshi.jpg", audio: "audio/suirandanshi.mp3" }
];

// ... باقي الكود ...
  
  // ... باقي الكود ...
  
  const wordList = document.getElementById("word-list");
  
  hsk2Words.forEach((word, index) => { 
    const listItem = document.createElement("li");
    //  إضافة عنصر  <audio>   لتشغيل الصوت  
    listItem.innerHTML = `
      <span class="word-number">${index + 1}. </span> <span class="chinese">${word.chinese}</span>
      <span class="pinyin">${word.pinyin}</span>
      <audio src="${word.audio}"></audio> 
    `;
  
    listItem.addEventListener('click', () => {
      const pinyinSpan = listItem.querySelector('.pinyin');
      pinyinSpan.classList.toggle('show');
  
      // تشغيل الصوت عند النقر على الكلمة
      const audio = listItem.querySelector('audio');
      audio.currentTime = 0; // إعادة تشغيل الصوت من البداية
      audio.play(); 
    });
  
    wordList.appendChild(listItem);
  });
  
  // كود إخفاء البينيين بعد الظهور
  
  const wordElements = document.querySelectorAll('#word-list li');
  
  wordElements.forEach(word => {
    word.addEventListener('click', () => {
      const pinyin = word.querySelector('.pinyin');
      pinyin.classList.add('show');
  
      setTimeout(() => {
        pinyin.classList.remove('show');
      }, 1000); // نخفي البينيين بعد ثانية واحدة (1000 ميلي ثانية)
    });
  });
  
  
  // ... أكواد JavaScript  السابقة ...
  
  
  
  const timerElement = document.getElementById('timer');
  const minutesInput = document.getElementById('minutes');
  const startButton = document.getElementById('startTimer');
  const timeoutSound = document.getElementById('timeoutSound');
  
  let startTime; // لتخزين الوقت المتبقي
  let timerInterval; // لتخزين معرّف فترة زمنية لتشغيل المؤقت
  
  function startTimer() {
    const minutes = parseInt(minutesInput.value);
    if (isNaN(minutes) || minutes < 1 || minutes > 10) {
      alert('Please enter a number between 1 and 10.');
      return;
    }
  
    startTime = minutes * 60; 
    timerElement.innerText = `${minutes.toString().padStart(2, '0')}:00`;
  
    timerInterval = setInterval(updateTimer, 1000); 
  }
  
  function updateTimer() {
    if (startTime > 0) {
      const minutes = Math.floor(startTime / 60);
      const seconds = startTime % 60;
      timerElement.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      startTime--;
    } else {
      clearInterval(timerInterval);
      timerElement.innerText = "Stop, time is up!"; 
      timeoutSound.play(); 
    }
  }
  
  startButton.addEventListener('click', startTimer);
  
  
  
  // ... بقية الكود JavaScript ...
  
  const showPinyinButton = document.getElementById('showPinyin');
  
  // دالة لإظهار/إخفاء البينيين وتغيير نص الزر 
  function togglePinyin() {
    const pinyinElements = document.querySelectorAll('.pinyin');
    pinyinElements.forEach(pinyin => {
      pinyin.classList.toggle('show');
    });
  
    //  تغيير نص الزر 
    if (showPinyinButton.innerText === 'Show Pinyin') {
      showPinyinButton.innerText = 'Hide Pinyin';
    } else {
      showPinyinButton.innerText = 'Show Pinyin';
    }
  }
  
  // أضف حدث النقر للزر
  showPinyinButton.addEventListener('click', togglePinyin);
