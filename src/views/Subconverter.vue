<template>
  <div>
    <el-row style="margin-top: 10px">
      <el-col>
        <el-card>
          <div slot="header">
            <div style="text-align:center;font-size:15px">Subscription Converter</div>
          </div>
          <el-container>
            <el-form :model="form" label-width="80px" label-position="left" style="width: 100%">
        this.$message.error("Operation failed");
                <el-input
                    v-model="form.sourceSubUrl"
                    type="textarea"
                    rows="3"
                    placeholder="闂傚倸鍊搁崐宄懊归崶顒€违闁逞屽墴閺屾稓鈧綆鍋呯亸浼存煏閸パ冾伃鐎殿喕绮欐俊姝岊槷婵℃彃鐗撳鐑樺濞嗗繒妲ｉ梺闈╃秶缂嶄礁顕ｇ拠娴嬫婵妫欓崓闈涱渻閵堝棗鍧婇柛瀣尰閵囧嫯绠涢敐鍛凹闂侀潧娲ょ€氫即銆侀弴銏℃櫜闁告侗鍨奸崕宀勬⒒娴ｇ儤鍤€闁搞垺鐓￠、鏍ㄥ緞鐎ｎ偄寮块梺閫炲苯澧撮柡灞炬礋瀹曠厧鈹戦崶椋庣婵犵數鍋涢崥瀣礉濞嗗浚娼栫紓浣股戞刊瀵哥磼鐎ｎ亞姘ㄩ柟绋垮暣濮婅櫣绮欏▎鎯у壉闂佽鎮傜粻鏍ь嚕椤愶富鏁嬮柍褜鍓熼悰顔碱潨閳ь剟銆佸▎鎾村殐闁冲搫锕ら幃鍫ユ⒒閸屾瑧顦﹂柟纰卞亞閹风娀鎮欓崫鍕槰濡炪倕绻愮粔鍨櫏闂傚倸鍊搁崐鐑芥嚄閸洖鍌ㄧ憸鏃堢嵁閺嶎収鏁冮柨鏇楀亾缁惧墽鎳撻埞鎴︽偐鐎圭姴顥濈紒鐐劤椤兘寮婚妸銉㈡斀闁糕檧鏅滄晥闂備胶绮幖顐ょ礊娓氣偓瀵鏁愭径濠勭杸闂傚倸鐗婄粙鎴︼綖閳哄倻绡€闁靛骏绲剧涵鍓х磼婢跺﹦绉虹€殿喖顭锋俊鎼佸Ψ閵忊槅娼旀繝纰樻閸ㄤ即鎮樺┑瀣垫晜妞ゆ挾鍎愬〒濠氭煏閸繄绠绘俊缁㈠櫍閹绮☉妯诲櫧闁活厽鐟ラ…鍧楁嚋闂堟稑袝闂佽桨绀侀崐鍧楀蓟濞戙埄鏁冮柕鍫濇噺閻庨箖姊洪幖鐐测偓鏍垂閸噮娼栭柧蹇氼潐閸犲棝鏌涢弴銊ゆ捣闁糕晛鎳樺铏圭矙閸噮鍔夐梺缁樻惈缁绘繈鐛崱妯肩懝闁逞屽墴瀵偄顓兼径濠勵槹濡炪倖宸婚崑鎾趁归悩鍐叉诞闁哄矉缍€缁犳盯寮撮悙鏉挎憢闂備胶顭堥鍡涘礉濞嗘挶鈧線寮崼婵堫攨闂佺粯鍔忛弲婊堬綖瀹ュ鈷戦柣鐔稿娴犮垽鏌涢悢鍙夋珖闁奸缚椴哥缓浠嬪川婵犲嫬骞堥梻渚€娼ч…顓犲緤閼恒儲鍙忛柛宀€鍋為悡?| 闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁嶉崟顒佹闂佸湱鍎ら崵锕€鈽夊Ο閿嬫杸闂佺硶鈧磭绠查柣?
                />
              </el-form-item>
              <el-form-item label="闂傚倸鍊搁崐鐑芥倿閿曞倹鍎戠憸鐗堝笒閸ㄥ倸鈹戦悩瀹犲缂佹劖顨婇弻鐔兼偋閸喓鍑￠梺鎼炲妼閸婂綊骞堥妸銉庣喐寰勭粙鎸庡創闂佽绻愮换鎺楀极婵犳艾绠栫憸鐗堝笒閻愬﹥銇勮箛鎾愁伀婵絻鍨藉?">
                <el-select v-model="form.clientType" style="width: 100%">
                  <el-option v-for="(v, k) in options.clientTypes" :key="k" :label="k" :value="v"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁撻悩鍐叉疄闂佽鍨奸悘鎰亹閹烘挸鈧崵绱掑☉姗嗗剱闁哄懏绮岄—鍐Χ閸℃鐟ㄩ柣搴㈠嚬閸撶喖鐛幋锕€閱囬柡鍥╁枔閸樺憡绻濋姀锝嗙【妞ゆ垵鎳橀、姘煥閸涱垳锛?">
                <el-select
                    v-model="form.customBackend"
                    allow-create
                    filterable
                    @change="selectChanged"
                    placeholder="闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁撻悩鍐蹭画濡炪倖鐗滈崑娑㈠垂閸岀偞鐓熼柕蹇曞Х娴犳稒銇勯幇顖毿撻柕鍥у楠炴﹢宕￠悙鍏告偅缂傚倷璁查崑鎾绘煕瀹€鈧崑鐐烘偂韫囨搩鐔嗛悹楦挎婢ф洖鈹戦垾鍐叉倯缂佺粯鐩畷濂告偄婵傚顥嬮梻渚€鈧偛鑻晶鍙夈亜椤愩埄妯€闁诡喗妞藉鎾偄娓氼垱閿ゆ俊鐐€栧濠氬磻閹剧粯鐓冪紓浣股戝畷灞绢殽閻愬樊鍎旈柡浣稿暣閸┾偓妞ゆ帒鍊归崰鍡涙煥閺囩偛鈧摜绮昏ぐ鎺戠骇闁割偅绻傞埛鏃傜磼婢舵劖娑ч棁?
                    style="width: 100%"
                >
                  <el-option v-for="(v, k) in options.customBackend" :key="k" :label="k" :value="v"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="闂傚倸鍊搁崐鐑芥倿閿曗偓椤啴宕稿Δ鈧惌妤呭箹濞ｎ剙濡奸柣顓燁殜閺屾盯骞囬棃娑欑亪缂備胶濮撮幖顐﹀煘閹达箑纾兼慨姗嗗幖閺嗗牓姊虹紒妯虹妞ゆ泦鍥ｂ偓锔炬崉閵婏箑纾繛鎾村嚬閸ㄤ即宕滈弶娆炬富?">
                <el-select
                    v-model="form.shortType"
                    allow-create
                    filterable
                    placeholder="闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁撻悩鍐蹭画濡炪倖鐗滈崑娑㈠垂閸岀偞鐓熼柕蹇曞Х娴犳稒銇勯幇顖毿撻柕鍥у楠炴﹢宕￠悙鍏告偅缂傚倷璁查崑鎾绘煕瀹€鈧崑鐐烘偂韫囨搩鐔嗛悹楦挎婢ф洟鏌涢弮鈧銊╁焵椤掑倹鏆╁褎顨婇獮鎰板箹娴ｅ湱鐣抽梻鍌欒兌缁垶鏁嬬紒鍓ц檸閸樹粙寮查崼鏇ㄦ晜闁糕剝锚閺嬫垿姊虹紒姗嗘當闁绘绻樺畷锝夊焵椤掑嫭鈷戦悹鍥ｂ偓铏亞缂備緡鍠楅悷锔界┍婵犲偆娼扮€光偓婵犲唭顒勬⒒娴ｅ憡鍟為柣鐕傜畱閻ｆ繄绮欏▎鐐稁濠电偛妯婃禍婊呯矆閸垺鍠愰煫鍥ㄧ☉杩濋梺鍦暯閸?
                    style="width: 100%"
                >
                  <el-option v-for="(v, k) in options.shortTypes" :key="k" :label="k" :value="v"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="闂傚倸鍊风粈渚€骞栭位鍥敃閿曗偓閻ょ偓绻濇繝鍌涘櫣闁搞劍绻堥獮鏍庨鈧俊濂告煟閹惧绠撻柍瑙勫灴瀹曟帒顫濋鐐存畼闂備胶绮幐鎾磻閹剧粯鐓熼幖杈剧磿閻ｎ參鏌涙惔鈥宠埞閻撱倝鏌曟繛鐐珔闁?">
                <el-select
                    v-model="form.remoteConfig"
                    allow-create
                    filterable
                    placeholder="闂傚倸鍊峰ù鍥х暦閸偅鍙忛柡澶嬪殮濞差亜惟闁宠桨鑳堕ˇ褍鈹戦濮愪粶闁稿鎹囬弻娑㈠煘閹傚濠碉紕鍋戦崐鏍ь啅婵犳艾纾婚柟鐐暘娴滄粓鏌ㄩ弮鍥棄妞ゃ儱顑夐弻?
                    style="width: 100%"
                >
                  <el-option-group
                      v-for="group in options.remoteConfig"
                      :key="group.label"
                      :label="group.label"
                  >
                    <el-option
                        v-for="item in group.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                  </el-option-group>
                </el-select>
              </el-form-item>
              <el-form-item label-width="0px">
                <el-collapse>
                  <el-collapse-item>
                    <template slot="title">
                      <el-form-item label="婵犵數濮撮惀澶愬级鎼存挸浜鹃柡鍥ュ灩绾惧湱鎲搁悧鍫濆潑闁逞屽墾缁犳挸鐣烽崼鏇椻偓锕傚箣閻戝棗鏅梻鍌欑劍閹爼宕曞ú顏勭婵炲棙鍨归惌鍡楊熆閼搁潧濮堥柣鎾跺枛閺岋繝宕橀妸锔俱偐闂佹悶鍊栭悷鈺呭蓟?" style="width: 100%;">
                        <el-button
                            type="limr"
                            style="width: 100%;"
                            icon="el-icon-more-outline"
                        >闂傚倸鍊搁崐鐑芥嚄閸撲礁鍨濇い鏍仜缁€澶嬩繆閵堝懏鍣圭紒鐘靛█閺岀喖骞戦幇闈涙闂佸憡淇洪～澶愬Φ閸曨垰鍗虫俊銈傚亾濞存粓绠栭幃妤€鈻撻崹顔界亞闂佸憡顨呴崯鍧楁偩瀹勯偊鐓ラ柛鈾€鏅滄晥婵?闂傚倸鍊搁崐鎼佸磹閹间礁纾归柟闂寸缁犵娀鐓崶銊р槈缂佲偓婢跺绻嗘い鏍ㄧ懅缁?
                        </el-button>
                      </el-form-item>
                    </template>
            this.$message.error("Operation failed");
                      <el-input v-model="form.diyua" placeholder="闂傚倸鍊峰ù鍥х暦閸偅鍙忕€规洖娲ㄩ惌鍡椕归敐鍫綈婵炲懐濮撮湁闁绘ê妯婇崕鎰版煕鐎ｅ吀閭柡灞剧洴閸╁嫰宕橀浣诡潔闂佽崵鍠愰悷杈╃不閹捐崵宓侀柡宥冨妽缂嶅洭鏌涢幘妤€鎲涢敐鍡欑閻庣數顭堢敮鍫曟煕婵犲倹鍋ョ€殿喖顭锋俊鑸靛緞婵犲嫮鏆伴柣鐔哥矊缁夋潙宓勯梺鐓庮潟閸婃牠宕伴幇鐗堢厸濠㈣泛顑呴婊呪偓鐟版啞缁诲牓寮婚悢椋庢殝闂侇叏绠戦崜鑸电節濞堝灝鏋撻柛瀣崌濮婃椽妫冨☉姘暫濠碘槅鍋掗崢濂糕€﹂崶顒€绠涢柣妤€鐗冮幏缁樼箾鏉堝墽鎮兼い顓炵墦閸╂盯寮崼鐔哄幈闁诲函缍嗛崑鍛焊閻㈠憡鐓涘〒姘搐濞呭秵顨ラ悙杈捐€挎い銏＄懇閹虫牠鍩￠崘鈺冪М闂傚倸鍊风粈渚€宕ョ€ｎ喖绠栭柛灞惧嚬閻掔晫鎲搁弮鍫澪ラ柛宀€鍋涢拑鐔兼煏婢舵稑顩柛妯挎椤啴濡舵惔鈥茶埅闂佸憡鎸婚悷锔界┍婵犲洤绠伴幖杈剧悼椤旀洟姊洪崜鎻掍簽闁哥姴閰ｉ幃姗€骞橀鐣屽幍闂佹儳娴氶崑鍡椕虹€涙ǜ浜滈柕蹇婂墲椤ュ牏鈧娲滈崰鏍€佸鈧幃銏ゅ传閵壪€鏂库攽閻樺灚鏆╅柛瀣仱瀹曞綊宕奸弴鐐舵憰闂侀潧艌閺傚倿鍩€椤戣法绐旈柟顔筋殜閹鐣?Agent"/>
                    </el-form-item>
                    <el-form-item label="闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁撻悩鍐蹭罕闂佸搫娲㈤崹鍦不閻樿绠规繛锝庡墮婵¤偐绱掗悩鍐插摵闁哄本鐩、鏇㈡偐閹绘帒顫氶梻浣规偠閸婃洜绮旇ぐ鎺戣摕婵炴垶鐭▽顏堟煕閹炬鎳愰崢鎰攽?">
                      <el-input v-model="form.includeRemarks" placeholder="闂傚倸鍊峰ù鍥х暦閻㈢绐楅柟閭﹀劒濞差亜绠ｆ繝鍨姈鐎靛矂姊洪崷顓炲妺婵﹦鎳撻悾鐑藉矗婢跺寮垮┑鈽嗗灠閻忔繈鎮￠幇鐗堢厱閻庯急鍕彆缂備胶绮惄顖氱暦閸楃倣鐔兼惞闁稒顢橀梻鍌欐缁鳖喚绱炴担鍦洸闁割偅娲栭拑鐔兼煏閸繍妲稿ù鑲╁█閺屾盯寮撮妸銉ょ爱闂佺顑嗛幐鑽ゆ崲濠靛棭娼╂い鎺戝亰缁遍亶姊绘担鐟邦嚋缂佽鍊胯棟濞村吋娼欓悿鐐亜閹烘垵顏柛濠傜埣閺岋綁骞囬悧鍫熼敪婵炲瓨绮撶粻鏍蓟閿熺姴骞㈡俊顖濆亹閻撳姊洪崫鍕伇闁哥姵鐗曢～蹇氥亹閹烘垹鐤€濡炪倖姊婚崢褔鈥栨径瀣╃箚闁绘劦浜滈埀顒佺墱閺侇喖螖閸愩劌鐏婇梺瑙勫劤绾绢參寮?/>
                    </el-form-item>
                    <el-form-item label="闂傚倸鍊搁崐椋庣矆娴ｉ潻鑰块梺顒€绉寸壕鍧楁煏閸繃澶勯柡鍡樼矒閺屽秹濡烽敂鐣屼紘闂佸搫顑呯粔褰掔嵁閺嶎灔搴敆閳ь剚淇婃禒瀣厱闁靛牆鎳愭晥闂佸搫鏈粙鎾寸閿曞倸绀堢憸蹇涙偂閳ь剙鈹?">
                      <el-input v-model="form.excludeRemarks" placeholder="闂傚倸鍊峰ù鍥х暦閻㈢绐楅柟閭﹀劒濞差亜绠ｉ柨鏃囨閳ь剙娼￠弻銊╁籍閸屾矮澹曢梺鍝勬缁捇寮婚悢鐓庣鐟滃繒鏁☉銏＄厓闂佸灝顑嗛ˉ鍫ユ煛鐏炵偓绀嬬€规洜鍘ч埞鎴﹀炊瑜滃Σ閬嶆⒒娴ｉ涓茬紓宥勭劍缁傚秹宕奸弴鐐舵憰闂侀潧鐗嗛ˇ顖涘閻樼粯鐓曢柡鍥ュ妼娴滄劙鏌涚€ｎ偅灏扮紒缁樼箓椤繈顢楅崒锔惧耿闂傚倷鐒︾€笛呮崲閸岀倛鍥ㄥ閺夋垹鏌у銈嗗笒鐎氼參宕愰崼鏇熺厽闁规壆澧楀☉褍霉濠婂牏鐣洪柡宀嬬節瀹曞崬螣閼测晝鍘滈梻浣告惈閻ジ宕伴弽褜娼栫憸鐗堝笒缁犳稒銇勯弮鍌氬付妞ゎ剙顦版穱濠囨倷椤忓嫧鍋撻弽顐ｆ殰婵°倕鍟崹婵嬫煙閹咃紞闁?/>
                    </el-form-item>
                    <el-form-item label="闂傚倸鍊搁崐鐑芥嚄閸洖鍌ㄧ憸鏃堢嵁閺嶎収鏁冮柨鏇楀亾缁惧墽鎳撻埞鎴︽偐鐎圭姴顥濈紒鐐劤椤兘寮婚妸銉㈡斀闁糕檧鏅滅瑧闁诲海鎳撻幉锛勬崲閸儱钃熼柨鏇楀亾閾伙絽銆掑鐓庣仭閺佸牓姊?">
                      <el-input v-model="form.rename" placeholder="婵犵數濮烽弫鎼佸磻閻愬搫鍨傞柛顐ｆ礀缁犵増鎱ㄥ┑鍡氼潶濞存粌缍婇弻锝夊箛椤掑倷绮靛銈嗗姃缁瑩寮婚弴鐔风窞闁糕剝蓱閻濇洟姊洪崫鍕闁告挻宀搁獮鍫ュΩ閵夈垺鏂€闂佹悶鍎弲婊堝箠閳х徃b``1@2`闂傚倸鍊搁崐鐑芥倿閿旈敮鍋撶粭娑樻噽閻瑩鏌熸潏楣冩闁稿骸锕ョ换婵嬫濞戞艾鈪辩紒鐐劤閸氬绌辨繝鍥ч柛婊€绀侀崜鎶芥⒑娴兼瑧绉ù婊庡墴楠炲骞栨担鐟颁罕闂佸壊鍋侀崹鐟邦嚕閵娾晜鈷戦悹鍥ｂ偓铏亞缂備緡鍠楅悷鈺佺暦濞差亜鐏虫繝銏犲閸犳挾妲愰幒鎳崇喐绗熼娑滄嫬婵犵绱曢崑鎴﹀磹閺嶎厼鍨傞柣鎾崇岸閺嬫牠鏌￠崶銉ョ仾闁?/>
                    </el-form-item>
                    <el-form-item label="闂傚倸鍊风粈渚€骞栭位鍥敃閿曗偓閻ょ偓绻濇繝鍌涘櫣闁搞劍绻堥獮鏍庨鈧俊濂告煟閹惧绠為柡灞诲€曢湁閻庯綆鍋呴悵鏇熺節濞堝灝鐏犻柕鍫熸倐瀵鎮㈢喊杈ㄦ櫖闂佺硶鍓濋〃鍡楋耿娴兼潙鍐€?">
                      <el-input v-model="form.devid" placeholder="闂傚倸鍊搁崐鐑芥倿閿曗偓椤啴宕归鍛姺闂佺鍕垫當缂佲偓婢舵劖鍊甸柨婵嗛婢ф彃鈹戦鎸庣彧闁靛洤瀚伴獮鎺楀箣濠靛啫浜鹃悷娆忓閸ㄦ柨鈹戦崒姘暈闁绘挻娲熼弻鐔兼倷椤掑鐣堕梺鐟板暱缁绘﹢骞冨Δ鍛仯闁衡偓濮婃仒tumultX闂傚倸鍊搁崐鐑芥倿閿曞倹鍎戠憸鐗堝笒缁€澶屸偓鍏夊亾闁逞屽墴閸┾偓妞ゆ帊绀侀崵顒勬煕閵婏箑鈻曟鐐村灴婵偓闁绘﹩鍋呴悗濠氭⒑閻熼偊鍤熷┑顔惧厴閹繝骞樼紒妯煎幗闁瑰吋鎯岄崹宕囩矓閻㈠憡鐓曟繛鍡楃箻閸欏嫮鈧娲﹂崹閬嶅箚閺冨牆鐓￠柛鈩冪懃閺佹悂姊洪懡銈呅繛鍜冪秮瀹曟洟濡舵径娑氱◤濠?/>
                    </el-form-item>
                    <el-form-item label="闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢埛姘そ婵¤埖寰勭€ｎ亙妲愰梻渚€娼ц墝闁哄懏鐩幏鎴︽偄鐏忎焦鏂€闂佺粯锚瀵埖寰勯崟顖涚厓闂佸灝顑呭ù顕€鏌″畝鈧崰鎾舵閹烘顫呴柣妯虹－娴滆埖淇?">
                      <el-input v-model="form.interval" placeholder="闂傚倸鍊风粈渚€骞栭位鍥敃閿曗偓閻ょ偓绻濇繝鍌氭灓婵炲吋鐗曢埞鎴︽偐鐎圭姴顥濋梺鍝勵儎缁舵岸寮婚弴銏犻唶婵犻潧娴傚Λ銈咁渻閵堝倹娅嗛柣鎿勭節閻涱噣寮介‖銉ラ叄椤㈡鍩€椤掑嫬鐒垫い鎴炲劤閳ь剚绻傞悾鐑筋敍濞戞瑥鍔呴梺鎸庣箓濞层劑鏁嶅┑瀣拺闁告稑锕ゆ慨鍫ユ煕鎼淬垹鈻曠€殿喗鎮傞幃銏＄附婢跺苯鏁搁柣鐔哥矋缁挸鐣烽姀銈呯鐟滃秹宕瑰┑鍡忔斀闁绘ê纾。鏌ユ煛閸涱喗鍊愰柡宀嬬到铻ｉ悹鍥皺缁佺兘鏌ｉ悩娆忓枤閸庢垹绱掓潏銊﹀磳鐎规洘甯掗～婵嬵敆娴ｈ桨澹曢梻鍌欑閹芥粍鎱ㄩ悽鎼炩偓鍐川椤栨艾鐤鹃梻鍌欒兌椤宕熼崹顐ゆ殽婵犵妲呴崑鍛存晪闂傚洤顦甸弻锝夊箻閾忣偅宕抽梺鍦櫕婵炩偓闁哄被鍔岄埥澶婎潩椤掍胶浜繝娈垮枛閿曘倝鈥﹀畡鎵殾闁靛ň鏅╅弫濠勭磼濞戞﹩鍎愭い銉︾〒缁辨捇宕掑▎鎰偘婵＄偞娼欓幗婊堝箲閵忋倕閱囨繝闈涚墛濞堥箖姊虹捄銊ユ灁濠殿喗鎸冲畷锟犳惞椤愶絽寮垮┑鈽嗗灠閵囨﹢宕ラ銈傚亾濞戞瑧绠撻柍瑙勫灴閹瑩寮堕幋鐘辨闂備胶鎳撻幉锟犲箖閸岀偟宓侀柡宥庡弾閺佸啴鏌ㄩ弴妤€浜炬俊?/>
                    </el-form-item>
                    <el-form-item label="闂傚倸鍊峰ù鍥х暦閸偅鍙忛柟鎯板Г閳锋梻鈧箍鍎遍ˇ顖炲垂閸岀偞鐓㈡俊顖滃皑缁辨岸鏌ㄥ┑鍡╂Ц缂佲偓鐎ｎ偁浜滈柡宥冨姀婢规绱掗幇顓犳创婵﹥妞介幊鐐哄Ψ閸愬彞閭挊婵喢归崗鍏肩稇缁?">
                      <el-input v-model="form.filename"
                                placeholder="闂傚倸鍊风粈渚€骞栭位鍥敃閿曗偓閻ょ偓绻濇繝鍌滃闁藉啰鍠栭弻鏇熺箾閸喖澹勫┑鐐叉▕娴滄粓宕橀埀顒€顪冮妶鍡樺暗闁哥姴閰ｅ畷婊堫敇閵忊檧鎷洪梺鍛婄☉閿曘儲寰勯崟顖涚厱闁挎繂楠稿▍宥団偓瑙勬磸閸庨潧鐣烽幒妤佸€风紒顔款潐鐎氫粙姊绘担鍛婂暈闁告梹鍨垮畷婵嗩吋婢跺﹪妫峰┑鐐叉▕娴滄繈鎮″☉銏″€甸柨婵嗙凹缁ㄥ鏌￠崱娆忎户缂佽鲸甯″畷鎺戔槈濡⒈鍎岄梻浣告贡閹虫挾鈧矮鍗抽獮鍐煥閸忓墽鍠撻幃浼村灳閸忓懎顥氶梻浣筋潐閸庡吋鎱ㄩ妶澶嬪亗闁靛濡囩粻楣冩煙鐎电鍓遍柣鎺楃畺閹顫濋鐑嗘闂佺懓寮堕幃鍌氼嚕閸洖鍨傛い鏃堢畺閻涙挾绱撻崒娆戭槮闁稿﹤婀遍弫顕€鍩勯崘褏绠氶梺缁樺灱濡嫬鏁梻浣瑰濞叉垹绮堟笟鈧獮鍡涘醇閵夛腹鎷绘繛杈剧到椤洟鍩€椤戣棄浜鹃梻浣侯焾椤戝棝骞愭繝姘﹂柛鏇ㄥ灠閸愨偓闂侀潧臎閳ь剙危閸儲鈷戝ù鍏肩懃閻︽粓鏌涢敐蹇曠М鐎殿喖顭烽弫鎾绘偐閼碱剨绱叉繝娈垮枟閿曗晠宕㈡ィ鍐╁亗闁瑰瓨绺鹃弨浠嬫煟閹邦剙绾фい銉︽崌閺屾盯濡搁妸锔绘闂佷紮绲块崗妯讳繆閻戣棄唯妞ゆ柨鍚嬮崐顖炴⒒娴ｈ鍋犻柛搴灦瀹曟繃鎯旈妸銉﹁緢闂佺粯顭囩划顖炴偂閻旂厧绠归弶鍫濆⒔绾惧潡鏌ｉ敐搴″籍闁哄本鐩俊鎼佹晜婵劒铏庨柣搴ゎ潐濞叉牠骞栭锕€鐓″璺侯煬濞尖晠鏌涘Δ鍐ㄤ粶閻熸瑱闄勬穱濠囨倷椤忓嫧鍋撻弽顓熷亱婵°倕鎳忛崑锟犳煏婵炵偓娅呴柛灞诲妽閵囧嫰骞掗幋婵愪痪闂佺粯鎸婚惄顖炲蓟濞戙垹鍗抽柕濞垮劙缁ㄥ姊洪幎鑺ユ暠婵☆偄鍟村濠氬即閵忕姷鍊為梺闈涱焾閸庨亶骞楅悽鍛婂€甸悷娆忓缁€鍐煟閻斿弶娅婃鐐插暙椤劑宕楅崜褍鏋戠紒缁樼箓椤繈顢樿閸?/>
                    </el-form-item>
                    <el-form-item class="eldiy" label-width="0px">
                      <el-row type="flex">
                        <el-col>
                          <el-checkbox v-model="form.nodeList" label="婵犵數濮烽弫鎼佸磻濞戙埄鏁嬫い鎾跺枑閸欏繘鏌熺紒銏犳灈缂佺姷濞€閺岀喖骞戦幇顒傚帿濡炪倖鍔樻慨銈夊Φ閸曨垰绠婚柛妤冨仧娴犺偐绱撴担鎻掍壕闂佸憡娲﹂崐鐘诲籍閸喐娅囬梺閫炲苯澧撮柟顔矫埞鎴炵節閸曨亝鐫忛梻鍌氬€搁崐鐑芥嚄閸撲礁鍨濇い鏍仜缁€澶嬬箾閸℃ɑ灏柣鎺戠仛閵囧嫰骞掑鍫濆帯闂佸磭顑曢崕宕囨閹烘梹瀚氶柛娆忣樈濡箓姊? border></el-checkbox>
                        </el-col>
                        <el-popover placement="bottom" v-model="form.extraset">
                          <el-row :gutter="10">
                            <el-col :span="12">
                              <el-checkbox v-model="form.emoji" label="Emoji"></el-checkbox>
                            </el-col>
                            <el-col :span="12">
                              <el-checkbox v-model="form.insert" label="闂傚倸鍊搁崐椋庣矆娴ｉ潻鑰块弶鍫氭櫅閸ㄦ繃銇勯弽銊х煁闁哄棙绮撻弻鐔兼倻濮楀棙鐣堕梺娲诲幗椤ㄥ﹪寮诲☉銏犵労闁告劕銇樼欢闈涒攽閻愬瓨宕勯柛鈺傜墬缁岃鲸绻濋崶鑸垫櫖濠电偞鍨靛畷顒勫礉瀹€鍕拺闁告稑锕ㄦ竟妯荤箾瀹割喖寮€殿喖顭锋俊鑸靛緞婵犱胶鐐婇梻浣告啞濞诧箓宕戦埀顒勬煕鐎ｎ偅灏扮紒缁樼箓椤繈顢楅崒锔惧耿?></el-checkbox>
                            </el-col>
                          </el-row>
                          <el-row :gutter="10">
                            <el-col :span="12">
                              <el-checkbox v-model="form.udp" label="闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁撻悩鑼槱閻熸粎澧楃敮鎺楀垂閸岀偞鐓欓柟顖滃椤ュ鏌?UDP"></el-checkbox>
                            </el-col>
                            <el-col :span="12">
                              <el-checkbox v-model="form.xudp" label="闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁撻悩鑼槱閻熸粎澧楃敮鎺楀垂閸岀偞鐓欓柟顖滃椤ュ鏌?XUDP"></el-checkbox>
                            </el-col>
                          </el-row>
                          <el-row :gutter="10">
                            <el-col :span="12">
                              <el-checkbox v-model="form.tfo" label="闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁撻悩鑼槱閻熸粎澧楃敮鎺楀垂閸岀偞鐓欓柟顖滃椤ュ鏌?TFO"></el-checkbox>
                            </el-col>
                            <el-col :span="12">
                              <el-checkbox v-model="form.sort" label="闂傚倸鍊搁崐鐑芥嚄閸撲焦鍏滈柛顐ｆ礀閻ら箖鏌ｉ幇顓犮偞闁哄绉归弻銊モ攽閸♀晜肖闂侀€炲苯鍘哥紒鑸佃壘閻ｇ兘濡歌閸嬫挸鈽夊▍顓т簻閳绘捇鎮㈤崗灏栨嫼缂備礁顑嗙€笛冿耿閹殿喚纾兼い鏂垮悑濠€鎵磼閸屾稑娴い銏＄洴閹瑧鈧數顭堥獮宥夋⒒娴ｈ櫣甯涢柛銊ョ埣閺佸绱撴担璇℃畷閻㈩垳鍋熷Σ?></el-checkbox>
                            </el-col>
                          </el-row>
                          <el-row :gutter="10">
                            <el-col :span="12">
                              <el-checkbox v-model="form.tpl.clash.doh" label="Clash.DoH"></el-checkbox>
                            </el-col>
                            <el-col :span="12">
                              <el-checkbox v-model="form.appendType" label="闂傚倸鍊搁崐椋庣矆娴ｉ潻鑰块弶鍫氭櫅閸ㄦ繃銇勯弽銊х煁闁哄棙绮撻弻鐔兼倻濮楀棙鐣堕梺娲诲幗椤ㄥ﹪寮诲☉銏犵労闁告劦浜栨慨鍥⒑閹肩偛鈧洜绮旇ぐ鎺戣摕婵炴垶鐭▽顏堟煕閹炬鎳愰崢鎰攽閻愬樊鍤熷┑顖ｅ弮瀹曠懓鐣烽崶顭戞綗闂佸湱鍎ら〃蹇涘极閸愵喗鐓忓鑸得弸娑欑箾閸偄寮慨?></el-checkbox>
                            </el-col>
                          </el-row>
                          <el-row :gutter="10">
                            <el-col :span="12">
                              <el-checkbox v-model="form.tpl.surge.doh" label="Surge.DoH"></el-checkbox>
                            </el-col>
                            <el-col :span="12">
                              <el-checkbox v-model="form.tls13" label="闂傚倷娴囬褏鈧稈鏅犻、娆撳冀椤撶偟鐛ラ梺鍦劋椤ㄥ懐澹曟繝姘厵闁告挆鍛闂佺粯鎸诲ú姗€骞堥妸銉庣喖宕稿Δ鈧幗鐢告⒑缂佹ɑ灏伴柍褜鍓﹂弫绯?.3"></el-checkbox>
                            </el-col>
                          </el-row>
                          <el-row :gutter="10">
                            <el-col :span="12">
                              <el-checkbox v-model="form.expand" label="闂傚倸鍊峰ù鍥敋瑜忛幑銏ゅ箳濡も偓绾惧鏌ｉ幇顖ｆ⒖婵炲樊浜滈崘鈧銈嗗姧缂嶅棗顭囬悢鍏尖拺闁荤喖鍋婇崵鐔封攽椤旂偓鏆€规洑鍗冲畷鍗炩槈濞嗘垵骞堥梻浣告惈濞层垽宕濈仦鍓ь洸婵犲﹤鐗婇悡鐔肩叓閸ャ劍绀€闁哄鐩弻锛勪沪閸撗岀伇缂備胶濮电粙鎾诲焵椤掑﹦绉靛ù婊勭矒閳ユ牗寰勯幇顓涙嫼?></el-checkbox>
                            </el-col>
                            <el-col :span="12">
                              <el-checkbox v-model="form.new_name" label="Clash闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢敃鈧壕褰掓煟閻旂厧浜伴柣鏂挎閹便劌顪冪拠韫闂備浇顕栭崳锝囩磽濮樼鍥蓟閵夛妇鍘撶紓鍌欑劍钃辩€规洖鏈穱濠囶敃閵忕姵娈梺瀹犳椤︻垶鍩㈡惔銈囩杸濠电姴鍊锋竟?></el-checkbox>
                            </el-col>
                          </el-row>
                          <el-row :gutter="10">
                            <el-col :span="12">
                              <el-checkbox v-model="form.scv" label="闂傚倸鍊峰ù鍥х暦閸偅鍙忛柟缁㈠枛缁犺銇勯幇鍫曟闁稿浜弻娑㈠Ψ閵忊剝鐝曢悗瑙勬礃閻擄繝寮诲☉銏犵疀闁稿繐鎽滈崙褰掓煟鎼淬垻顣查柤褰掔畺濠€渚€姊洪幐搴ｇ畵闁瑰啿楠稿嵄閻犲洦绁撮弨鑺ャ亜閺冨倹娅曢柍钘夘樀閹藉爼寮介鐔哄幗濠碘槅鍨伴悘婵嬫儍濞差亝鐓熼柟鐑樻煥閸樻挳鏌?></el-checkbox>
                            </el-col>
                            <el-col :span="12">
                              <el-checkbox v-model="form.fdn" label="闂傚倸鍊风粈渚€骞栭位鍥敃閿曗偓閻ょ偓绻涢幋鐐╂（婵炲樊浜濋弲婵嬫煕鐏炵偓鐨戞い鏂挎嚇濮婃椽妫冨☉姘暫濠碘槅鍋呴惄顖炲春閵忋倕绫嶉柛灞绢殔娴滅偓顨ラ悙鑼虎闁告梹纰嶆穱濠囶敃閿濆洦鍣伴悗娈垮枛閸熷潡鈥﹂妸鈺侀唶闁绘柨鎼獮宥夋⒒閸屾艾鈧敻宕戦幘缁樼厵闂侇叏绠戦獮姗€鏌曢崼銏狀暭缂佺粯绻勯崰濠偽熷ú缁樼秹闂備礁鎲￠悷銉╁疮閹绢喚宓?></el-checkbox>
                            </el-col>
                          </el-row>
                          <el-row :gutter="10">
                            <el-col :span="12">
                              <div style="margin-left: 35%">
                                <el-checkbox v-model="form.tpl.singbox.ipv6" label="Sing-Box闂傚倸鍊搁崐宄懊归崶顒€违闁逞屽墴閺屾稓鈧綆鍋呯亸浼存煏閸パ冾伃鐎殿喕绮欐俊姝岊槷婵℃彃鐗撳鐑樺濞嗗浚娲梺琛″亾妞ゃ垻螞6"></el-checkbox>
                              </div>
                            </el-col>
                          </el-row>
                          <el-button slot="reference">闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢埛姘そ閺佸啴鍩€椤掑嫧鈧箓宕惰閺嬪酣鏌熼幆褏孝婵炲樊鍘奸悾椋庣矙鐠囩偓姊归幏鍛村传閸曨倣銉︾節閻㈤潧袨闁搞劌銈稿畷娲冀椤撶偟顦梺纭呮彧缁犳垿鎮?/el-button>
                        </el-popover>
                      </el-row>
                    </el-form-item>
                  </el-collapse-item>
                </el-collapse>
              </el-form-item>
              <div style="margin-top: 30px"></div>
              <el-divider content-position="center">
                <el-button
                    type="zhuti"
                    @click="change">
                  <i id="rijian" class="el-icon-sunny"></i>
                  <i id="yejian" class="el-icon-moon"></i>
                </el-button>
              </el-divider>
              <el-form-item label="闂傚倸鍊峰ù鍥敋瑜嶉～婵嬫晝閸岋妇绋忔繝銏ｅ煐閸旀牠宕电仦杞挎棃鏁愰崨顓熸闂佸搫瀚ㄩ崕鍙夌┍婵犲洤围闁告侗鍘藉▓鍙夌節濞堝灝鐏犻柕鍫熸倐瀵寮撮敍鍕澑闁诲函缍嗘禍鏍磻閹捐鍐€妞ゆ挶鍔庣粙?">
                <el-input class="copy-content" disabled v-model="customSubUrl">
                  <el-button
                      slot="append"
                      v-clipboard:copy="customSubUrl"
                      v-clipboard:success="onCopy"
                      ref="copy-btn"
                      icon="el-icon-document-copy"
                  >婵犵數濮烽弫鍛婃叏娴兼潙鍨傞柣鎾崇岸閺嬫牗绻涢幋鐐寸殤闁活厽鎹囬弻鐔虹磼閵忕姵鐏堥梺?
                  </el-button>
                </el-input>
              </el-form-item>
              <el-form-item label="闂傚倸鍊峰ù鍥х暦閸偅鍙忛柟鎯板Г閳锋梻鈧箍鍎遍ˇ顖炲垂閸岀偞鐓㈡俊顖滃皑缁辨岸鏌ㄥ┑鍡╂Ц缂佲偓鐎ｎ偁浜滈柡宥冨妿閳藉鏌涢幘鑸靛殌妞ゎ亜鍟存俊鍫曞幢濡缚鏁块梻浣规偠閸斿秴顪冩禒瀣祦?">
                <el-input class="copy-content" v-model="customShortSubUrl"
                          placeholder="闂傚倸鍊风粈渚€骞栭位鍥敍閻愭潙浜辨繝鐢靛Т濞层倗绮绘导瀛樼厵闂傚倸顕ˇ锕傛煟椤撶噥娈滈柡灞剧洴閸╁嫰宕橀浣割潓闂備焦鎮堕崐鏇㈡晝閵夆晛桅闁告洦鍠氶悿鈧梺鍦亾閸撴碍瀵奸埀顒勬⒒娴ｅ憡鎯堟俊顐ｇ懃椤灝顫滈埀顒勫春閵夛箑绶為柟閭﹀墯椤ユ繂鈹戦悙鍙夘棤闁稿鎸婚〃娆撴⒒閸屾瑨鍏岀紒顕呭灦楠炴牠鍩￠崨顓犵厬闂佸憡鍔﹂崰鏍嫅閻旂儤鍠愰柡鍐ㄧ墕缁犳牗绻涢崱妯绘儎闁轰礁妫濋弻宥堫檨闁告挻鑹鹃銉╁礋椤愵偄鎮戞繝銏ｆ硾椤戝洭宕㈤崡鐐╂斀妞ゆ梹鏋绘笟娑㈡煕閹炬潙鍝烘鐐村灴閺佹劙宕堕埡鍐跨床闂佸搫顦悧鍕礉瀹€鍕€堕柟缁㈠枟閻撴稑霉閿濆懏鎲哥€涙繈姊烘导娆戠ɑ缂佽鐗撳畷娲焵椤掍降浜滈柟鐑樺灥椤忊晝鐥幆褜鐓奸柡灞诲妼閳规垿宕遍埡鍌傦妇绱撴担鎻掍壕闂佸憡娲﹂崹閬嶆偂閻樻祴鏀芥い鏃囨婵洭鏌嶈閸撴岸鎮ч悩宸殨闁哄被鍎辩粻鐟懊归敐鍛础闁告鏁婚弻锝嗘償閵忊懇濮囬梺鎸庤壘閳规垿顢欑喊杈ㄢ枅闂佸搫鐭夌紞渚€鐛▎鎾崇闁靛鍎抽惈鍕⒒娴ｅ憡鎯堥柣顐ｇ懇瀹曞爼濡搁妷銏犱壕闂佸灝顑冩禍婊堟煙閸濆嫭顥滃ù婊呭亾缁绘繈濮€閿濆棛銆愮紓浣割槸缂嶅﹤顕ｇ拠娴嬫婵☆垶鏀遍悗璇测攽閳藉棗鐏ユ繛鍜冪稻缁傛帡鍩￠崨顔尖偓鍨箾閸繄浠㈤柡瀣剁畱閳规垿顢欓崫鍕ㄥ亾閺囥埄鏁嬮柕澶嗘櫅缁€瀣亜閹伴潧浜滈柟顔藉灴濮婃椽骞栭悙鎻掑闂佸憡鏌ㄧ粔鎾煝瀹ュ顫呴柕鍫濇閹?>
                  <el-button
                      slot="append"
                      v-clipboard:copy="customShortSubUrl"
                      v-clipboard:success="onCopy"
                      ref="copy-btn"
                      icon="el-icon-document-copy"
                  >婵犵數濮烽弫鍛婃叏娴兼潙鍨傞柣鎾崇岸閺嬫牗绻涢幋鐐寸殤闁活厽鎹囬弻鐔虹磼閵忕姵鐏堥梺?
                  </el-button>
                </el-input>
              </el-form-item>
              <el-form-item label-width="0px" style="margin-top: 40px; text-align: center">
                <el-button
                    style="width: 120px"
                    type="danger"
                    @click="makeUrl"
                    :disabled="form.sourceSubUrl.length === 0 || btnBoolean"
                >闂傚倸鍊搁崐鐑芥倿閿曞倹鍎戠憸鐗堝笒閸ㄥ倸鈹戦悩瀹犲缂佹劖顨婇弻鐔兼偋閸喓鍑￠梺鎼炲妼閸婂綊骞堥妸銉庣喖宕稿Δ鈧幗鍨節濞堝灝鐏犻柕鍫熸倐瀵寮撮敍鍕澑闁诲函缍嗘禍鏍磻閹捐鍐€妞ゆ挶鍔庣粙蹇旂節閵忥絽鐓愰柛鏃€鐗犻崺娑㈠箣閿旂晫鍘遍梺鍦亾椤ㄥ懘宕埡鍌滅彾闁哄洢鍨洪悡?
                </el-button>
                <el-button
                    style="width: 120px"
                    type="danger"
                    @click="makeShortUrl"
                    :loading="loading1"
                    :disabled="customSubUrl.length === 0"
                >闂傚倸鍊搁崐鐑芥倿閿曞倹鍎戠憸鐗堝笒閸ㄥ倸鈹戦悩瀹犲缂佹劖顨婇弻鐔兼偋閸喓鍑￠梺鎼炲妼閸婂綊骞堥妸銉庣喖宕归鎯у缚闂備胶顭堢€涒晠銆冮崱娑樜﹂柛鏇ㄥ灠缁犲鏌涘Δ鍐ㄤ户濞寸娀绠栧娲偡閹殿噯绱炴繝鐢靛亹閸嬫捇姊?
                </el-button>
              </el-form-item>
              <el-form-item label-width="0px" style="text-align: center">
                <el-button
                    style="width: 120px"
                    type="primary"
                    @click="dialogUploadConfigVisible = true"
                    icon="el-icon-upload"
                    :loading="loading2"
            this.$message.error("Operation failed");
                </el-button>
                <el-button
                    style="width: 120px"
                    type="primary"
                    @click="dialogLoadConfigVisible = true"
                    icon="el-icon-copy-document"
                    :loading="loading3"
                >婵犵數濮烽弫鎼佸磻濞戙埄鏁嬫い鎾跺枑閸欏繘鏌熺紒銏犳灈缂佺媭鍣ｉ弻锟犲醇椤愶絾娈洪梻鍌氬€峰ù鍥х暦閻㈢绐楅柟鎵閸嬶繝寮堕崼姘珔缂佽翰鍊曡灃闁挎繂鎳庨弳鐐烘煕?
                </el-button>
              </el-form-item>
            </el-form>
          </el-container>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog
        :visible.sync="dialogUploadConfigVisible"
        :show-close="false"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        width="80%"
    >
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="闂傚倸鍊风粈渚€骞栭位鍥敃閿曗偓閻ょ偓绻濇繝鍌涘櫣闁搞劍绻堥獮鏍庨鈧俊濂告煟閹惧绠撻柍瑙勫灴瀹曟帒顫濋鐐存畼闂備胶绮幐鎾磻閹剧粯鐓熼幖杈剧磿閻ｎ參鏌涙惔鈥宠埞閻撱倝鏌曟繛鐐珔闁告垹濞€閺屾稓浠﹂幆褏鍔板┑鈩冨絻閻楁捇寮婚悢鐓庣鐟滄粓宕濆鍕弿濠电姴鍠氬▓妯肩磼? name="first">
          <el-form label-position="left">
            <el-form-item prop="uploadConfig">
              <el-input
                  v-model="uploadConfig"
                  type="textarea"
                  :autosize="{ minRows: 15, maxRows: 15}"
                  maxlength="50000"
                  show-word-limit
              ></el-input>
            </el-form-item>
          </el-form>
          <div style="float: right">
            <el-button type="primary" @click="uploadConfig = ''; dialogUploadConfigVisible = false">闂?濠?/el-button>
            <el-button
                type="primary"
                @click="confirmUploadConfig"
                :disabled="uploadConfig.length === 0"
            >缂?闂?
            </el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="JS闂傚倸鍊搁崐椋庣矆娴ｉ潻鑰块梺顒€绉寸壕鍧楁煏閸繃澶勯柡鍡樼矒閺岀喖鎮滃Ο娲绘⒖婵犳鍠涘▍鏇㈠Φ閸曨垰绠婚柛妤冨仧娴犻箖姊洪幖鐐测偓鏇犵矓瑜版帒钃熸繛鎴炵煯濞岊亪鏌涢幘妤€鎳愰崢鎰攽? name="second">
          <el-form label-position="left">
            <el-form-item prop="uploadScript">
              <el-input
                  v-model="uploadScript"
                  placeholder="This feature is disabled by default. Deploy a compatible upload API to enable it."
                  type="textarea"
                  :autosize="{ minRows: 15, maxRows: 15}"
                  maxlength="50000"
                  show-word-limit
              ></el-input>
            </el-form-item>
          </el-form>
          <div style="float: right">
            <el-button type="primary" @click="uploadScript = ''; dialogUploadConfigVisible = false">闂?濠?/el-button>
            <el-button
                type="primary"
                @click="confirmUploadScript"
                :disabled="uploadScript.length === 0"
            >缂?闂?
            </el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="JS缂傚倸鍊搁崐鎼佸磹閻戣姤鍊块柨鏂垮⒔閻瑩鏌熼悜姗嗘畷闁稿骸瀛╅妵鍕冀椤愵澀绮堕梺缁樺笒閻忔岸濡甸崟顖氱闁糕剝銇炴竟鏇熶繆閻愵亜鈧呯不閹烘垟鏋嶉柡鍥╁枔閳瑰秴鈹戦悩鍙夌ォ闁轰礁娲弻鏇＄疀婵炴儳浜鹃柡鍌樺劚娴? name="third">
          <el-form label-position="left">
            <el-form-item prop="uploadFilter">
              <el-input
                  v-model="uploadFilter"
                  placeholder="This feature is disabled by default. Deploy a compatible upload API to enable it."
                  type="textarea"
                  :autosize="{ minRows: 15, maxRows: 15}"
                  maxlength="50000"
                  show-word-limit
              ></el-input>
            </el-form-item>
          </el-form>
          <div style="float: right">
            <el-button type="primary" @click="uploadFilter = ''; dialogUploadConfigVisible = false">闂?濠?/el-button>
            <el-button
                type="primary"
                @click="confirmUploadScript"
                :disabled="uploadFilter.length === 0"
            >缂?闂?
            </el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
    <el-dialog
        :visible.sync="dialogLoadConfigVisible"
        :show-close="false"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        width="80%"
    >
      <div slot="title">
        闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁撻悩鍐蹭画濡炪倖鐗滈崑娑㈠垂閸屾稏浜滈柡宥冨妿閵嗘帗銇勯埡鍌滃弨闁哄瞼鍠栭幃婊兾熺拠鍙夋婵＄偑鍊愰弲婵嬪礂濮椻偓閻涱噣寮介妸锔剧Ф闂佸憡鎸嗛崥閿嬪灴濮婃椽宕崟顒€娅ら梺璇″枛閸婂灝顕ｆ繝姘亜閻炴稈鈧厖澹曞┑鐐村灦椤忣亪顢旈崨顔煎伎婵犮垼娉涢鍥╃不妤ｅ啯鐓曟い鎰╁€曢弸搴ㄦ煟韫囨挾鎽犻柟?闂傚倸鍊搁崐鐑芥倿閿曗偓椤啴宕稿Δ鈧惌妤呭箹濞ｎ剙濡奸柣顓燁殜閺屾盯骞囬棃娑欑亪缂備胶濮撮幖顐﹀煘閹达箑纾兼繝濠傛捣閸斿摜绱撴担鍝勑ｅ┑鐐诧躬瀵寮撮悢椋庣獮闂佸壊鍋呯缓楣冨磻閹炬枼妲堥柕蹇曞Т閸嬪秴顪冮妶鍡楃瑨閻庢凹鍙冨畷鎴﹀焺閸愵亞顔曢梺绯曞墲椤洭骞婇崨顖滅＜閻庯綆浜堕悡濂告煛瀹€瀣ɑ闁诡垱妫冩俊鍫曞川閸涱喗灏电紒杈ㄥ笒閻ｆ繈宕熼鍛灓闂備胶纭堕弲娑氣偓姘緲閻ｅ嘲螣濞嗙偓鞋缂傚倷璁查崑鎾绘煃?婵犵數濮烽弫鍛婄箾閳ь剚绻涙担鍐叉硽閸ャ劎顩烽悗锝庝簽閿涙盯姊洪崨濠冨闁搞劋鍗抽幆灞轿旈崨顔惧幈闂佹枼鏅涢崣鍥ь煥閸曨収娲稿┑鐘诧工閻楀﹪鎮￠悢鍏肩厪闊洦娲栨牎闂佸摜鍠撻崑鐐寸┍婵犲偆娓婚柣鎾抽椤牓姊虹€圭姵顥夋い锔炬暬閻涱喖鈻庨幘宕囶槰闂侀潧顭堥崕鎶筋敊閹邦厺绻?
      </div>
      <el-form label-position="left">
        <el-form-item prop="uploadConfig">
          <el-input
              v-model="loadConfig"
              type="textarea"
              :autosize="{ minRows: 15, maxRows: 15}"
              maxlength="5000"
              show-word-limit
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="loadConfig = ''; dialogLoadConfigVisible = false">闂?濠?/el-button>
        <el-button
            type="primary"
            @click="confirmLoadConfig"
            :disabled="loadConfig.length === 0"
        >缂?闂?
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
const configScriptBackend = process.env.VUE_APP_CONFIG_UPLOAD_BACKEND + '/api.php'
const defaultBackend = process.env.VUE_APP_SUBCONVERTER_DEFAULT_BACKEND
const shortUrlBackend = process.env.VUE_APP_MYURLS_DEFAULT_BACKEND + '/short'
const configUploadBackend = process.env.VUE_APP_CONFIG_UPLOAD_BACKEND + '/sub.php'
export default {
  data() {
    return {
      backendVersion: "",
      activeName: 'first',
      // 闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢妶鍌氫壕婵ê宕崢瀵糕偓瑙勬礉椤鈧潧銈稿鍫曞箣閻樺灚姣庢繝鐢靛仩閹活亞寰婇挊澶涜€块梺顒€绉撮悡?PC 缂?
      isPC: true,
      btnBoolean: false,
      options: {
        clientTypes: {
          Clash: "clash",
          ShadowRocket: "shadowrocket",
          "Surge4/5": "surge&ver=4",
          "Sing-Box": "singbox",
          V2Ray: "v2ray",
          Trojan: "trojan",
          ShadowsocksR: "ssr",
          "濠电姷鏁告慨鐑藉极閹间礁纾块柟瀵稿Т缁躲倕霉閻樺樊鍎忛幖鏉戯躬閺岋紕浠︾拠鎻掑缂備胶濮甸悧鐘荤嵁閺嶃劍缍囬柛鎾楀惙鎴炵節濞堝灝鐏犻柕鍫熸倐瀵寮撮敍鍕澑闁诲函缍嗘禍鏍磻閹捐鍐€妞ゆ挶鍔庣粙蹇旂節閵忥絽鐓愰柛鏃€鐗犻幃锟犲Ψ閿斿墽顔曢梺鐟邦嚟閸婃牠骞嬪┑鎰闂佸厖璀﹀▍鈺闂?": "mixed",
          Surfboard: "surfboard",
          Quantumult: "quan",
          "Quantumult X": "quanx",
          Loon: "loon",
          Mellow: "mellow",
          Surge3: "surge&ver=3",
          Surge2: "surge&ver=2",
          ClashR: "clashr",
          "Shadowsocks(SIP002)": "ss",
          "Shadowsocks Android(SIP008)": "sssub",
          ShadowsocksD: "ssd",
          "闂傚倸鍊搁崐鐑芥嚄閸洖鍌ㄧ憸鏃堝Υ閸愨晜鍎熼柕蹇嬪焺濞茬鈹戦悩璇у伐閻庢凹鍙冨畷锝堢疀濞戞瑧鍘撻梺鍛婄箓鐎氼參宕抽崷顓犵＜闁逞屽墴瀹曞崬鈽夊▎鎴濆妇闂備礁澹婇崑鍛崲閸愵啟澶愭倷閻戞鍘介梺鐟版惈缁夊爼鎯屽▎鎾寸厵妞ゆ梻鐡斿▓婊堟煟濞戝崬娅嶇€规洖缍婇、娆撳矗閵壯勶紡闂傚倸鍊烽懗鍓佹兜閸洖鐤炬繝濠傛噽閻瑩鏌熼幑鎰【闁?": "auto",
        },
        shortTypes: {
          "Short Link 1": "https://v1.mk/short",
          "Short Link 2": "https://d1.mk/short",
          "Short Link 3": "https://dlj.tf/short",
          "Short Link 4": "https://suo.yt/short",
          "Short Link 5": "https://sub.cm/short",
        },
        customBackend: {
          "Primary Backend": "https://api.v1.mk",
          "Fallback Backend": "https://url.v1.mk",
        },
        remoteConfig: [
          {
            label: "闂傚倸鍊搁崐鎼佸磹妞嬪孩顐介柨鐔哄Т绾惧鏌涘☉鍗炲季婵炲皷鏅犻弻鏇熺箾閻愵剚鐝旈梺?",
            options: [
              {
                label: "Clash AdGuard DNS",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"
              },
              {
                label: "Clash AdGuard DNS",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"
              },
              {
                label: "Clash AdGuard DNS",
                value: "https://raw.githubusercontent.com/youshandefeiyang/webcdn/main/SONY.ini"
              },
              {
                label: "Clash AdGuard DNS",
                value: "https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/default_with_clash_adg.yml"
              },
              {
                label: "ACL_闂傚倸鍊搁崐鐑芥嚄閸洍鈧箓宕奸姀鈥冲簥闂佸壊鍋侀崕杈╃矆婢跺备鍋撻崗澶婁壕闂佸憡娲﹂崑鍕倵椤撱垺鐓欓柤鍦瑜把呯磼閼艰埖纭跺?Dream婵犵數濮烽弫鎼佸磿閹寸姴绶ら柦妯侯棦瑜版帒纾奸柣鎰皺閻涖儱鈹戞幊閸婃洟骞婃惔銊ュ嚑濞达絿纭堕弨浠嬫煕鐏炲墽顣查柛鐔哄仱閺?",
                value: "https://raw.githubusercontent.com/WC-Dream/ACL4SSR/WD/Clash/config/ACL4SSR_Online_Full_Dream.ini"
              },
              {
                label: "ACL_缂傚倸鍊搁崐鎼佸磹妞嬪孩顐介柨鐔哄Т缁愭鏌″鍐ㄥ婵炲懐濮撮湁闁绘ê妯婇崕鎰版煕鐎Ｑ勬珕缂佺粯绻堝Λ鍐ㄢ槈閸楃偛澹堢紓鍌欒閸嬫捇鏌涢埄鍐姇闁绘挻娲熼弻宥夊煛娴ｅ憡娈堕梺鐟板暱閹虫﹢寮?Dream婵犵數濮烽弫鎼佸磿閹寸姴绶ら柦妯侯棦瑜版帒纾奸柣鎰皺閻涖儱鈹戞幊閸婃洟骞婃惔銊ュ嚑濞达絿纭堕弨浠嬫煕鐏炲墽顣查柛鐔哄仱閺?",
                value: "https://raw.githubusercontent.com/WC-Dream/ACL4SSR/WD/Clash/config/ACL4SSR_Mini_Dream.ini"
              },
              {
                label: "emby-TikTok-濠电姷鏁告慨鐑藉极閹间礁纾婚柣鏃傚劋瀹曞弶绻濋棃娑氬ⅱ闁活厼妫楅妴鎺戭潩閿濆懍澹曢梻浣筋嚃閸犳洟宕￠幎钘夌畺闁靛繈鍊曞婵嗏攽閻樻彃浜為柍褜鍓氶幑鍥ь潖閾忚鍠嗛柛鏇ㄥ亜婵垽姊洪崫銉ユ瀻婵炵》绻濋獮鍐ㄎ旈崨顔兼闂侀潧鐗嗗ú銊╂晬?闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁撻悩顐熷亾閿曞倸閱囬柕澶樺枟閺咁亪鎮峰鍐闁告帗甯為幏鐘差啅椤斿吋鍊┑鐘灱濞夋盯鏁冮妶鍥╃幓婵炴垶鐟х弧鈧梺姹囧灲濞佳冪摥闂備胶顭堥敃銉╁箖閸岀偞鏅查柣鎰劋閺呮煡鏌涢妷顖滃埌濞存粎鍋撶换娑㈠醇濠靛牅铏庨梺鍝勵儜闂勫嫮鎹㈠☉銏犳そ闁告劦浜炶摫闂?",
                value: "https://raw.githubusercontent.com/justdoiting/ClashRule/main/GeneralClashRule.ini"
              },
              {
                label: "濠电姷鏁告慨鐑藉极閹间礁纾婚柣鏃傚劋瀹曞弶绻濋棃娑氬ⅱ闁活厼妫楅妴鎺戭潩閿濆懍澹曢梻浣筋嚃閸犳洟宕￠幎钘夌畺闁靛繈鍊曞婵嗏攽閻樻彃浜為柍褜鍓氶幑鍥ь潖濞差亝鍋￠柡澶婄氨閹稿啴姊虹粙鎸庢崳闁轰浇顕ч悾鐑藉箣閿曗偓缁犲鏌熸０浣哄妽闁稿秶鏁婚弻鈩冨緞婵犲嫬顣堕梺鍛婃煥缁夋挳鍩㈤幘璇差潊闁靛牆妫岄幏娲⒑閸涘﹦鈽夐柨鏇樺€楃划顓㈠箳閹捐尙绠氬銈嗗姧缁插潡濡撮幒妤佺厱?",
                value: "https://raw.githubusercontent.com/cutethotw/ClashRule/main/GeneralClashRule.ini"
              }
            ]
          },
          {
            label: "ACL闂傚倸鍊峰ù鍥х暦閻㈢绐楅柟鎵閸嬶繝鏌曟竟顖楀亾闁稿鎸搁～婵嬫偂鎼粹檧鎷柣?",
            options: [
              {
                label: "Clash AdGuard DNS",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"
              },
              {
                label: "ACL_NoAuto",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"
              },
              {
                label: "ACL_Adblock",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"
              },
              {
                label: "ACL_婵犵數濮烽弫鍛婃叏娴兼潙鍨傚┑鍌滎焾閺勩儵鏌″搴″箺闁搞倕鐭傞弻鐔碱敍閿濆洣姹楅梺鑽ゅ枑鐎氬牓寮崼婵堫槰闂佹寧绻傞幊宥嗙珶閺囥垺鈷戦柤濮愬€曢弸鎴炵節閵忊槄鑰块柕鍡楀€垮畷妯侯啅椤旀儳鏁?",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_MultiCountry.ini"
              },
              {
                label: "ACL_闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢敃鈧悿顔济归崗鍏肩稇闁告俺顫夌换婵嬪即閻橆偄浜鹃柟鑽ゎ嚝t闂?",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"
              },
              {
                label: "ACL_闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢敃鈧悿顕€鏌ｅΔ鈧悧濠囧矗韫囨稒鐓熼柕蹇嬪灪閺嗏晠鏌ｉ鐐靛ⅵ闁哄瞼鍠撶槐鎺楀閻樺磭浜堕梻浣虹帛鐢帡鈥﹂悜钘夎摕闁挎繂顦猾宥夋煕閵夘喚鍘涘ù鐘櫇缁辨捇宕掑鍗炩叢婵炲瓨绮犻崜娑樜ｉ幇鏉跨婵°倓绀佹禍鐟邦渻閵堝棗濮︽繝鈶╁亾婵犮垼顫夊ú鐔奉潖?",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"
              },
              {
                label: "ACL_Mini_NoAuto",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"
              },
              {
                label: "ACL_闂傚倸鍊搁崐鐑芥嚄閸洍鈧箓宕奸姀鈥冲簥闂佸壊鍋侀崕杈╃矆婢跺备鍋撻崗澶婁壕闂佸憡娲﹂崑鍕倵椤撱垺鐓欓柤鍦瑜把呯磼閼艰埖纭跺瑙勬礃缁轰粙宕ㄦ繝鍕箞闂備礁鎼ú銏ゅ礉瀹€鍕嚑闁挎洖鍊归悡鏇㈢叓閸ャ劍鐓ョ紒妤佸哺閺岀喐绗熼崹顔碱瀳闂佸疇顫夐崹鍨暦閸楃偐鏋庨柟瀛樼矌缁€鍐╃節?",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Google.ini"
              },
              {
                label: "ACL_闂傚倸鍊搁崐鐑芥嚄閸洍鈧箓宕奸姀鈥冲簥闂佸壊鍋侀崕杈╃矆婢跺备鍋撻崗澶婁壕闂佸憡娲﹂崑鍕倵椤撱垺鐓欓柤鍦瑜把呯磼閼艰埖纭跺瑙勬礃缁轰粙宕ㄦ繝鍕箞闂備礁鎼ú銏ゅ礉鐏炲墽顩查柤鎭掑劙缁诲棙銇勯弽銊ュ毈闁稿孩鍔曡彁闁搞儜宥堝惈濡炪們鍨虹粙鎴︹€旈崘顏呭珰闂婎偒鍘奸ˉ姘舵煟鎼淬値娼愭繛鍙夌墪鐓ら柕濞炬杺閳ь兛绶氬畷銊р偓娑櫱氶幏?",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"
              },
              {
                label: "ACL_闂傚倸鍊搁崐鐑芥嚄閸洍鈧箓宕奸姀鈥冲簥闂佸壊鍋侀崕杈╃矆婢跺备鍋撻崗澶婁壕闂佸憡娲﹂崑鍕倵椤撱垺鐓欓柤鍦瑜把呯磼閼艰埖纭跺瑙勬礃缁轰粙宕ㄦ繝鍕箞闂備礁鎼ú銏ゅ礉鐏炲墽顩查柤鎭掑劤缁犻箖鏌涢鐘茬仼闁哄瀛╅妵鍕敂閸曨偅娈堕梺閫炲苯澧剧紓宥呮瀹曟粌鈻庨幇顕呮祫閻熸粌绉归垾?",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"
              },
              {
                label: "ACL_缂傚倸鍊搁崐鎼佸磹妞嬪孩顐介柨鐔哄Т缁愭鏌″鍐ㄥ婵炲懐濮撮湁闁绘ê妯婇崕鎰版煕鐎Ｑ勬珕缂佺粯绻堝Λ鍐ㄢ槈閸楃偛澹夐梻?",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"
              },
              {
                label: "ACL_闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁撻悩顐熷亾閿曞倸閱囬柕澶樺枟閺咁亪鎮峰鍐闁告帗甯為幏鐘差啅椤斿吋鍊┑鐘灱濞夋盯鏁冮妶鍥╃幓婵炴垶鐟х弧鈧梺姹囧灲濞佳冪摥闂佽瀛╅崙褰掑窗濮樿鲸顫曟繛鍡樺姈缂嶅洭鏌嶉崫鍕殶闁挎稒绮撳铏圭磼濮楀牅绶甸梺绋款儏鐎氼厾绮嬪鍡愬亝闁告劏鏂侀幏?",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"
              },
              {
                label: "ACL_Fallback缂傚倸鍊搁崐鎼佸磹妞嬪孩顐介柨鐔哄Т缁愭鏌″鍐ㄥ婵炲懐濮撮湁闁绘ê妯婇崕鎰版煕鐎Ｑ勬珕缂佺粯绻堝Λ鍐ㄢ槈閸楃偛澹夐梻?",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"
              },
              {
                label: "ACL_婵犵數濮烽弫鍛婃叏娴兼潙鍨傚┑鍌滎焾閺勩儵鏌″搴″箺闁搞倕鐭傞弻鐔碱敍閿濆洣姹楅梺鑽ゅ枑鐎氬牓寮崼婵堫槰闂佹寧绻傞幊宥嗙珶閺囥垺鈷戦柤濮愬€曢弸鎴炵節閵忊槄鑰块柕鍡楀€搁悾鐑藉炊閳哄喛绱查梻渚€娼ч…鍫ュ礉瀹ュ洦鍏滈柛鎾茶兌绾惧吋銇勯弮鍌楁嫛闁绘挸銈搁弻娑㈠煘閹傚濠碉紕鍋戦崐鏍暜閹烘柡鍋撳鐓庡籍鐎?",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini"
              },
              {
                label: "ACL_婵犵數濮烽弫鍛婃叏娴兼潙鍨傚┑鍌滎焾閺勩儵鏌″搴′簻闁哄鐗忛埀顒€绠嶉崕閬嶆偋閸℃稑姹查柣鎰劋閻撶喖骞栧ǎ顒€鐒洪柛鐔风箻閺屾盯鎮╁畷鍥р拡闂佺懓绠嶉崹浠嬬嵁閹烘绫嶉柛銉仢閿熺姵鐓熼柣妯哄帠閼割亪鏌涢弬鍨劉缂佸顦鍏煎緞鐎ｎ剙甯楅柣鐔哥矋缁挸鐣峰鍫熷亜闁绘挸娴烽悾?",
                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"
              }
            ]
          },
          {
            label: "闂傚倸鍊搁崐鐑芥嚄閸洍鈧箓宕奸姀鈥冲簥闂佸壊鍋侀崕杈╃矆婢舵劕绠归弶鍫濆⒔閹偐绱掗埀顒佺節閸屻倗鍞甸梺鍏兼倐濞佳勬叏閸モ晝纾奸柣妯硅濞兼劗绱掔紒妯肩畺缂佺粯绻堝畷鎺戭煥閸愮偓婢戦梻鍌欐祰婢瑰牏浜稿▎鎰闁逞屽墴閺岀喖顢欓悡搴⑿╅梺瀹狀嚙濮橈妇绮诲☉銏犵闁告剬鍕簼闂?",
            options: [
              {
                label: "ZHANG",
                value: "https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG.ini"
              },
              {
                label: "Complex",
                value: "https://raw.githubusercontent.com/xiaoshenxian233/cool/rule/complex.ini"
              },
              {
                label: "PharosPro闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢敃鈧悿顕€鏌ｅΔ鈧悧濠囧矗韫囨稒鐓熼柕蹇嬪灪閺嗏晠鏌ｉ鐐靛ⅵ闁哄瞼鍠撶槐鎺楀閻樺磭浜堕梻?",
                value:
                    "https://subweb.s3.fr-par.scw.cloud/RemoteConfig/special/phaors.ini"
              },
              {
                label: "闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁嶉崟顒佹闂佸湱鍎ら崵锕€鈽夊Ο婊勬瀹曟顦撮柛鎾卞妼椤啴濡堕崱娆忊拡闂佺顑嗛惄顖氼嚕娴兼潙唯闁冲搫鍊婚崢浠嬫⒑閸濆嫬鈧湱鈧瑳鍥х柈闁绘劕顕粻楣冩煕濞戝崬寮块棅顒夊墯閹便劍绻濋崒銈囧悑閻庤娲忛崝鎴︺€佸▎鎾崇鐟滃繘宕㈤弮鈧换婵嬫偨闂堟稐娌┑鐐插悑閻熴儴鐏嬪┑鐐村灦閼归箖宕?",
                value: "https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_Fallback.ini"
              },
              {
                label: "闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁嶉崟顒佹闂佸湱鍎ら崵锕€鈽夊Ο婊勬瀹曟顦撮柛鎾卞妼椤啴濡堕崱娆忊拡闂佺顑嗛惄顖氼嚕娴兼潙唯闁冲搫鍊婚崢浠嬫⒑閸濆嫬鏆欐繛鏉戝€垮畷闈涒枎閹邦喚顔曢梺鍓插亝缁苯鐣甸崱娑欑厸閻忕偛澧藉ú瀵糕偓娈垮櫘閸撴盯骞忛悩璇茬闁圭儤绻勯埀顒€顕槐鎾诲磼濞嗘劦妯傞梺缁樺釜缁犳捇鐛幇鏉跨闁芥ê顦抽幗?",
                value: "https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_Urltest.ini"
              },
              {
                label: "闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁嶉崟顒佹闂佸湱鍎ら崵锕€鈽夊Ο婊勬瀹曟顦撮柛鎾卞妼椤啴濡堕崱娆忊拡闂佺顑嗛惄顖氼嚕娴兼潙唯闁冲搫鍊婚崢浠嬫⒑閸濆嫬鈧湱鈧瑳鍥х柈闁绘劗鍎ら悡銉╂煟閺冣偓濞兼瑩宕濋敃鍌涚厸閻忕偠顕ч埀顒佺墱缂傛捇鎳為妷銉х獮婵犮垼娉涢惉鐓庘枖閸喒鏀介柣妯诲墯閸熷繘鏌涢悩鍐叉诞鐎殿喗褰冮埥澶愬閿涘嫮鏆㈤梻鍌欐祰椤曆囧礄閻ｅ瞼绀婇柛鈩冪☉缁愭鏌熼悜姗嗘當缁?",
                value: "https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_NoAuto.ini"
              },
              {
                label: "OoHHHHHHH",
                value: "https://raw.githubusercontent.com/OoHHHHHHH/ini/master/config.ini"
              },
              {
                label: "CFW-TAP",
                value: "https://raw.githubusercontent.com/OoHHHHHHH/ini/master/cfw-tap.ini"
              },
              {
                label: "lhl77闂傚倸鍊搁崐鐑芥嚄閸洍鈧箓宕奸姀鈥冲簥闂佸壊鍋侀崕杈╃矆婢跺备鍋撻崗澶婁壕闂佸憡娲﹂崑鍕倵椤撱垺鐓欓柤鍦瑜把呯磼閼艰埖纭跺瑙勬礃缁轰粙宕ㄦ繝鍕箞闂備礁鎼ú銊╁磻濞戭潿鈧倸鐣烽崶鈺冿紲闂侀€炲苯澧寸€规洜鍠栭、娑樷槈濡嘲浜鹃柣銏犳啞閸嬧剝绻涢崱妤冪妞ゅ浚鍋呴妵鍕晲閸涱厾楠囩紓浣虹帛缁诲牓宕洪埀顒併亜閹烘垵顏柡鍛倐閺岋絽螣鐠囪尙绁烽悗瑙勬尭濡繈寮婚敐鍡樺劅闁靛繆鎳囨慨鍥煢閸愵喕鎲鹃柡宀嬬秮楠炴﹢顢涘顐㈩棜闂?",
                value: "https://raw.githubusercontent.com/lhl77/sub-ini/main/tsutsu-full.ini"
              },
              {
                label: "lhl77 Full",
                value: "https://raw.githubusercontent.com/lhl77/sub-ini/main/tsutsu-mini-gfw.ini"
              },
              {
                label: "ConnersHua Inbound",
                value: "https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/connershua_new.ini"
              },
              {
                label: "ConnersHua Inbound",
                value: "https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/connershua_backtocn.ini"
              },
              {
                label: "lhie1 濠电姷鏁告慨鐑藉极閹间礁纾婚柣妯哄悁閻掑﹥绻涢崱妯诲碍缁惧墽绮穱濠囶敍濮樿鲸鐧侀梺绋款儐閹瑰洤螞閸愩劉妲堟慨妯哄綁缁辨﹢姊绘担鐑樺殌鐎殿喖鐖奸獮鎰板礃閼碱剚娈鹃梺缁樻⒒閳峰牓寮崘顔界厪闊浄绲剧欢姘舵煙鐎电鍘存慨濠勭帛閹峰懘鎮烽柇锕€娈濈紓鍌欑椤戝棝宕归崸妤€绠栫憸鏂跨暦閵娾晩鏁婇柛鎾楀苯鏅梻鍌欑劍閹爼宕曞ú顏勭婵娉涚壕?Clash 闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁嶉崟顒佹闂佸湱鍎ら崵锕€鈽夊Ο閿嬵潔濠殿喗锕╅崜娆撴倶婵犲洦鍊垫鐐茬仢閸旀碍绻涚拠褏鐣电€规洑鍗冲畷鍗炩槈濞嗘垵骞堥梻浣告惈濞层垽宕濈仦鍓ь洸婵犲﹤鐗婇悡鐔肩叓閸ャ劍绀€闁哄鐩弻?",
                value: "https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/lhie1_clash.ini"
              },
              {
                label: "lhie1 濠电姷鏁告慨鐑藉极閹间礁纾婚柣妯哄悁閻掑﹥绻涢崱妯诲碍缁惧墽绮穱濠囶敍濮樿鲸鐧侀梺绋款儐閹瑰洤螞閸愩劉妲堟慨妯哄綁缁辨﹢姊绘担鐑樺殌鐎殿喖鐖奸獮鎰板礃閼碱剚娈鹃梺缁樻⒒閳峰牓寮崘顔界厪闊浄绲剧欢姘舵煙鐎电鍘存慨濠呮閹风娀宕ｆ径瀣棷闂備胶顢婂▍鏇㈠箲閸パ屽殨闁汇垹澹婇弫鍡涙煕閺囥劌浜濋弶鍫濈墦濮婃椽骞愭惔锝囩暤濡炪倧缂氶崡鍐茬暦?",
                value: "https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/lhie1_dler.ini"
              },
              {
                label: "eHpo1 闂傚倸鍊峰ù鍥х暦閻㈢绐楅柟鎵閸嬶繝鏌曟竟顖楀亾闁稿鎸搁～婵嬫偂鎼粹檧鎷柣?",
                value: "https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/ehpo1_main.ini"
              },
              {
                label: "婵犵數濮烽弫鍛婃叏娴兼潙鍨傚┑鍌滎焾閺勩儵鏌″畵顔兼湰閸嶇敻姊洪棃娴ュ牓寮插鍫濈；闁靛牆顦伴悡蹇擃熆鐠虹儤顥炴繛鍛閺屾稓鈧急鍕彋闂佸搫鏈ú妯肩博閻旂⒈鏁嶆慨姗嗗幖濞呇囨⒑缂佹ɑ灏柣鎺炵畵楠炲牓濡搁埡浣侯唺闂佽鍎抽悘鍫熸叏閸パ屾富闁靛牆楠搁獮鏍煟濡や焦宕岄柕鍡曠铻ｉ柤濮愬€楅惁鍫濃攽椤旀枻渚涢柛妯恒偢瀹曟粓顢楅崟顑芥嫼闂佸吋浜介崕宥夘敂閸╄泛娲︾€靛ジ寮堕幋鐙呯串闂備浇顫夐崕鍏兼叏閵堝鍋傞柡鍥╁枍缁诲棝鏌曢崼婵嗩伀闁告柨绉剁槐鎺楀焵椤掑嫬绀冩い鏃囨濞堟瑩姊洪崘鍙夋儓闁哥喓濞€瀹?",
                value: "https://raw.nameless13.com/api/public/dl/ROzQqi2S/white.ini"
              },
              {
                label: "婵犵數濮烽弫鍛婃叏娴兼潙鍨傚┑鍌滎焾閺勩儵鏌″畵顔兼湰閸嶇敻姊洪棃娴ュ牓寮插鍫濈；闁靛牆顦伴悡蹇擃熆鐠虹儤顥炴繛鍛閺屾稓鈧急鍕彋闂佸搫鏈ú妯肩博閻旂⒈鏁嶆慨姗嗗幖濞呇囨⒑缂佹ɑ灏紒鑸佃壘椤繐煤椤忓嫬绐涙繝鐢靛Т鐎氼參宕虫禒瀣拺闁告捁灏欓崢娑㈡煕閵娿劋鍚紒顔碱儏椤撳吋寰勬繝鍕靛敽婵犲痉鏉库偓鎰板磻閹剧粯鍊垫慨姗嗗墻濡插憡銇勯鈩冪《闁圭懓瀚粭鐔碱敍濮橆剙顥庡┑鐘垫暩閸嬫盯骞婃惔锝嗗床婵せ鍋撶€殿喛顕ч埥澶愬閻樻鍚呮繝鐢靛█濞佳囨偋韫囨侗鏁婇柛銉墯閳锋垶绻涢懠璺哄惞闁告ɑ鐩弻娑㈠Ω閿曗偓閳绘洟鏌涢埞鎯т壕婵＄偑鍊栧濠氬磻閹炬番浜滈柟鐑樻尵缁犵偛鈹戦檱閸╂牠骞嗛弮鍫濈労闁告劑鍔夐崑鎾存償閵婏腹鎷洪梺鐓庮潟閸婃洟寮搁幋锔界厽闁绘棁顔婇崥顐ょ磼椤旂⒈鐓兼鐐差儔閺佹劙宕樿閻?",
                value: "https://raw.nameless13.com/api/public/dl/ptLeiO3S/mayinggfw.ini"
              },
              {
                label: "缂傚倸鍊搁崐鎼佸磹妞嬪孩顐介柨鐔哄Т缁愭鏌″鍐ㄥ婵炲懐濮撮湁闁绘ê妯婇崕鎰版煕鐎Ｑ勬珕缂佺粯绻堝Λ鍐ㄢ槈濮橆兘鍙″┑锛勫仩椤绻涙繝鍥ц摕闁炽儲鍓氶崥瀣箹缁厜鍋撻懠顒€鍤┑鐘垫暩閸嬫盯鎮ч悙闈涚筏濞寸姴顑戠紞鏍ㄤ繆閵堝倸浜鹃梺瀹犳椤︻垶鍩㈡惔鈭ョ喖鎮℃惔鈱掝亜鈹戦敍鍕杭闁稿﹥鐗犻獮鎰板箹娴ｆ祴鍋撻敃鍌涘€婚柦妯侯槺閻ｉ箖姊虹粙璺ㄧ伇闁稿鍋熼埀顒傛暩婵挳鈥︾捄銊﹀磯濞撴凹鍨伴崜浼存⒑闁偛鑻晶顖氣攽閻愯韬€?",
                value: "https://raw.nameless13.com/api/public/dl/FWSh3dXz/easy3.ini"
              },
              {
                label: "婵犵數濮烽弫鍛婃叏娴兼潙鍨傚┑鍌滎焾閺勩儵鏌″畵顔兼湰閸嶇敻姊洪棃娴ュ牓寮插鍫濈；闁靛牆顦伴悡蹇擃熆鐠虹儤顥炴繛鍛閺屾稓鈧急鍕彋闂佸搫鏈ú妯侯嚗閸曨垰閱囨繝闈涙鑲栭梻鍌欑閹碱偊藝椤栫偐鈧箓鎮滈挊澶庢憰濠电偞鍨崹鍦尵瀹ュ鐓曢悘鐐插⒔椤ｅ弶銇勯弬娆炬晛TP缂傚倸鍊搁崐鎼佸磹閻戣姤鍊块柨鏂垮⒔閻瑩鏌熼悜姗嗘畷闁稿顑嗙换婵囩節閸屾粌顣哄┑?",
                value: "https://raw.nameless13.com/api/public/dl/L_-vxO7I/youtube.ini"
              },
              {
                label: "闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢敃鈧悿顕€鏌ｅΔ鈧悧濠囧矗韫囨稒鐓熼柟杈剧到琚氶梺绋款儍閸婃繈寮婚弴鐔风窞闁糕剝蓱閻濇洟姊虹粙娆惧剬闁哄懐濞€瀵寮撮悢椋庣獮闂佸壊鍋呯换鍌涙叏鎼淬劍鍊垫繛鍫濈仢閺嬬喎鈹戦悙璇у伐妞ゎ偄绻戠换婵嗩潩椤掑偊绱叉繝纰樻閸ㄤ即骞栭锔光偓鏍ㄥ緞閹邦厾鍘介梺闈涚箚閺呮盯鎮橀悩鐢电＝鐎广儱鎷戦煬顒侇殽?",
                value: "https://raw.nameless13.com/api/public/dl/zKF9vFbb/easy.ini"
              },
              {
                label: "闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢敃鈧悿顕€鏌ｅΔ鈧悧濠囧矗韫囨稒鐓熼柟杈剧到琚氶梺绋款儍閸婃繈寮婚弴鐔风窞闁糕剝蓱閻濇洟姊虹粙娆惧剬闁哄懐濞€瀵寮撮悢椋庣獮闂佸壊鍋呯换鍌涙叏鎼淬劍鍊垫繛鍫濈仢閺嬬喎鈹戦悙璇у伐妞ゎ偄绻戠换婵嗩潩椤掑偊绱叉繝纰樻閸ㄤ即骞栭锔光偓鏍ㄥ緞閹邦厾鍘介梺闈涚箚閺呮盯鎮橀悩鐢电＝鐎广儱鎷戦煬顒侇殽閻愯韬柡浣规崌閹晠鎳犻鍌涙緫濠碉紕鍋戦崐鏍暜婵犲洦鍤勯柛顐ｆ磸閳ь剙鎳橀、妤呭礋椤掑倸骞楅梺纭呭閹活亞绱為崱娑樼哗闁绘鐗忕粻鎯ь熆鐠轰警鍎戞繛鎻掝嚟閳ь剝顫夊ú婵嬶綖婢舵劕绠氶柡鍐ㄧ墛閺呮煡鏌涢妷銏℃珨缂?",
                value: "https://raw.nameless13.com/api/public/dl/E69bzCaE/easy2.ini"
              },
              {
                label: "闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢敃鈧悿顕€鏌ｅΔ鈧悧濠囧矗韫囨稒鐓熼柟杈剧到琚氶梺绋款儍閸婃繈寮婚弴鐔风窞闁糕剝蓱閻濇洟姊虹粙娆惧剬闁哄懐濞€瀵寮撮悢椋庣獮闂佸壊鍋呯缓楣冨磻閹炬緞鏃堝川椤旂厧澹掗梺璇插缁嬫帒锕㈤、鐤?CN + Final",
                value: "https://raw.nameless13.com/api/public/dl/XHr0miMg/ipip.ini"
              },
              {
                label: "闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢敃鈧悿顕€鏌ｅΔ鈧悧濠囧矗韫囨稒鐓熼柟杈剧到琚氶梺绋款儍閸婃繈寮婚弴鐔风窞闁糕剝蓱閻濇洟姊虹粙娆惧剬闁哄懐濞€瀵寮撮悢椋庣獮闂佺硶鍓濊摫闁绘繃鐗犲娲偡閼割剙浠銈冨劜閹瑰洭鐛径鎰濞达絽鎽滈鐓庮渻閵堝棙鈷掗柡鍜佸亰閹焦鍒婇弨鎴︽⒒閸屾艾鈧绮堟笟鈧獮澶愭晬閸曨剚娈伴梺鍦劋閸わ箑鈽夊Ο閿嬵潔濠殿喗锕╅崜娆撴倶?",
                value: "https://raw.nameless13.com/api/public/dl/BBnfb5lD/MAYINGVIP.ini"
              },
              {
                label: "闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁嶉崟顒€搴婇梺閫炲苯澧ǎ鍥э躬閹瑩寮堕幋鐙€鍎岄梻浣稿悑濡炶姤绂嶉崼鏇樷偓浣糕槈濡攱顫嶅┑顔斤公缁查箖鎮橀崘顔解拻濞达絿鐡斿鎰版煕鎼达紕锛嶅瑙勬礋椤㈡﹢鎮滈崱娆忓Ш闂備焦瀵х换鍌炈囨导鏉戠厱闁硅揪闄勯悡娑橆熆鐠哄搫顒㈢痪顓炵埣閹虫牠寮介鐔叉嫼濠殿喚鎳撳ú銈夊焵椤掍焦绀€閾荤偞绻濋棃娑卞剰闁哄鑳堕埀顒€绠嶉崕閬嵥囬鐐寸厑闁搞儯鍔庣弧鈧繝鐢靛Т閸婂綊宕虫禒瀣厽闁规儳鍟块埀顒冾潐缁岃鲸绻濋崶鑸垫櫇濡炪倖甯掗崐鏄忔懌闂傚倷娴囧畷鐢稿闯閿斿墽涓嶉柟鎹愵嚙缁犵姵绻涢崱妯诲碍缂佺姵鐩弻鈩冨緞鎼淬垻銆婂銈忕畵娴滆泛顫忓ú顏勫窛濠电姴瀚悾鐢告煟鎼淬垹鍤柛锝忕到閻ｇ兘濮€閵堝棗浠洪梺鍛婄☉閿曪箓宕㈤柆宥嗏拺闁革富鍘奸崝瀣煕閵娿儳鍩ｉ挊鐔兼煟濡吋鏆╃痪鎯у悑閵囧嫰寮崶褌姹楅柡浣哥墦濮?",
                value: "https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Examine.ini"
              },
              {
                label: "闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁嶉崟顒€搴婇梺閫炲苯澧ǎ鍥э躬閹瑩寮堕幋鐙€鍎岄梻浣稿悑濡炶姤绂嶉崼鏇樷偓浣糕槈濡攱顫嶅┑顔斤公缁查箖鎮橀崘顔解拻濞达絿鐡斿鎰版煕鎼达紕锛嶅瑙勬礋椤㈡﹢鎮滈崱娆忓Ш闂備焦瀵х换鍌炈囨导鏉戠厱闁硅揪闄勯悡娑橆熆鐠哄搫顒㈢痪顓炵埣閹虫牠寮介鐔叉嫼濠殿喚鎳撳ú銈夊焵椤掍焦绀€閾荤偞绻濋棃娑卞剰闁哄鑳堕埀顒€绠嶉崕閬嵥囬鐐寸厑闁搞儯鍔庣弧鈧梻鍌氱墛缁嬫帡藟濠婂厾褰掓偂鎼淬劌寮板┑顔硷攻濡炶棄螞閸愵喖鐓涢柛娑卞櫘閳ь剙绉撮埞鎴︽偐椤旇偐浠鹃梺鎸庢磸閸ㄤ粙鐛崘顔肩伋闁哄倶鍎查悗濠氭⒑鐟欏嫬鍔ょ痪缁㈠弮钘濇い鎰堕檮閳锋垹绱掗娑欑濠⒀勭叀閺岋綁鎮㈠┑鍡樺闁稿孩顨婇幃妤呮晲鎼粹剝鐏嶉梺?",
                value: "https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Examine_Full.ini"
              },
              {
                label: "nzw9314 闂傚倸鍊峰ù鍥х暦閻㈢绐楅柟鎵閸嬶繝鏌曟竟顖楀亾闁稿鎸搁～婵嬫偂鎼粹檧鎷柣?",
                value: "https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/nzw9314_custom.ini"
              },
              {
                label: "maicoo-l 闂傚倸鍊峰ù鍥х暦閻㈢绐楅柟鎵閸嬶繝鏌曟竟顖楀亾闁稿鎸搁～婵嬫偂鎼粹檧鎷柣?",
                value: "https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/maicoo-l_custom.ini"
              },
              {
                label: "DlerCloud Platinum",
                value: "https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/dlercloud_lige_platinum.ini"
              },
              {
                label: "DlerCloud Gold",
                value: "https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/dlercloud_lige_gold.ini"
              },
              {
                label: "DlerCloud Silver",
                value: "https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/dlercloud_lige_silver.ini"
              },
              {
                label: "ProxyStorage闂傚倸鍊搁崐鐑芥嚄閸洖鍌ㄧ憸鏃堝Υ閸愨晜鍎熼柕蹇嬪焺濞叉悂姊虹紒妯哄闁圭⒈鍋婂?",
                value: "https://unpkg.com/proxy-script/config/Clash/clash.ini"
              },
              {
                label: "ShellClash婵犵數濮烽弫鎼佸磿閹寸姴绶ら柦妯侯棦瑜版帒纾奸柣鎰皺閻涖儱鈹戞幊閸婃洟骞婃惔銊ュ嚑濞达絿纭堕弨浠嬫煕鐏炲墽顣查柛鐔哄仱閺屾稓鈧綆浜堕崕鏃堟煛鐏炲墽娲存い銏℃礋椤㈡宕掑┃鐑囩到閳规垿鎮欓幓鎺撳€梺鍛婃⒐閻熲晛顕?(by UlinoyaPed)",
                value: "https://github.com/UlinoyaPed/ShellClash/raw/master/rules/ShellClash.ini"
              }
            ]
          },
          {
            label: "闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁撻悩鍐叉疄闂佸憡鎸嗛埀顒勫磻閹炬剚娼╅柣鎾抽閳峰绻濈喊澶岀？闁轰浇顕ч悾鐑藉醇閺囥劍鏅㈤梺閫炲苯澧伴柍褜鍓氶懝楣兯囬悽绋胯摕婵炴垶菤閺€浠嬫煕閳╁喚娈㈠ù鐘插⒔缁辨挻鎷呴棃娑橆瀴閻庡厜鍋撻柟闂寸缁犳牜鈧懓瀚竟瀣几鎼淬劎鍙撻柛銉ｅ妽閹嫬霉閻樺眰鍋㈡慨?",
            options: [
              {
                label: "EXFLUX",
                value:
                    "https://gist.github.com/jklolixxs/16964c46bad1821c70fa97109fd6faa2/raw/EXFLUX.ini"
              },
              {
                label: "NaNoport",
                value:
                    "https://gist.github.com/jklolixxs/32d4e9a1a5d18a92beccf3be434f7966/raw/NaNoport.ini"
              },
              {
                label: "CordCloud",
                value:
                    "https://gist.github.com/jklolixxs/dfbe0cf71ffc547557395c772836d9a8/raw/CordCloud.ini"
              },
              {
                label: "BigAirport",
                value:
                    "https://gist.github.com/jklolixxs/e2b0105c8be6023f3941816509a4c453/raw/BigAirport.ini"
              },
              {
                label: "闂傚倸鍊峰ù鍥х暦閸偅鍙忛柣鎴ｆ绾惧潡鏌曢崼婵愭Ц闁搞劌鍊搁埞鎴﹀磼濮橆厼鏆堥梺绋垮椤ㄥ﹪寮婚敐澶婄疀闂傚牊绋戦～顐㈩渻?",
                value:
                    "https://gist.github.com/jklolixxs/9f6989137a2cfcc138c6da4bd4e4cbfc/raw/PaoLuCloud.ini"
              },
              {
                label: "WaveCloud",
                value:
                    "https://gist.github.com/jklolixxs/fccb74b6c0018b3ad7b9ed6d327035b3/raw/WaveCloud.ini"
              },
              {
                label: "闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁撻悩鎻掔€柣鐔哥懃鐎氼喚绮绘ィ鍐╃厓鐟滄粓宕滃杈ㄥ床?",
                value:
                    "https://gist.github.com/jklolixxs/bfd5061dceeef85e84401482f5c92e42/raw/JiJi.ini"
              },
              {
                label: "闂傚倸鍊搁崐鐑芥倿閿曞倸绠栭柛顐ｆ礀绾惧潡鏌ょ喊鍗炲闁活厽鐟╅弻鐔告綇閹呮В闂佽桨绀佸Λ娆戞崲濠靛洨绡€闁稿本绮岄。铏圭磽娴ｆ彃浜炬繝銏ｅ煐閸旀牠鎮￠悢闀愮箚妞ゆ牗绮岀敮鍫曟煕閺冩挾鐣甸柡?",
                value:
                    "https://gist.github.com/jklolixxs/6ff6e7658033e9b535e24ade072cf374/raw/SJ.ini"
              },
              {
                label: "ImmTelecom",
                value:
                    "https://gist.github.com/jklolixxs/24f4f58bb646ee2c625803eb916fe36d/raw/ImmTelecom.ini"
              },
              {
                label: "AmyTelecom",
                value:
                    "https://gist.github.com/jklolixxs/b53d315cd1cede23af83322c26ce34ec/raw/AmyTelecom.ini"
              },
              {
                label: "LinkCube",
                value:
                    "https://subweb.s3.fr-par.scw.cloud/RemoteConfig/customized/convenience.ini"
              },
              {
                label: "Miaona",
                value:
                    "https://gist.github.com/jklolixxs/ff8ddbf2526cafa568d064006a7008e7/raw/Miaona.ini"
              },
              {
                label: "Foo&Friends",
                value:
                    "https://gist.github.com/jklolixxs/df8fda1aa225db44e70c8ac0978a3da4/raw/Foo&Friends.ini"
              },
              {
                label: "ABCloud",
                value:
                    "https://gist.github.com/jklolixxs/b1f91606165b1df82e5481b08fd02e00/raw/ABCloud.ini"
              },
              {
                label: "闂傚倸鍊搁崐椋庣矆娓氣偓楠炲鏁嶉崟顐㈢亰閻庡箍鍎遍ˇ顖滅不閺嶎厽鐓曢悘鐐插⒔閵嗘帡姊?",
                value: "https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/customized/xianyu.ini"
              },
              {
                label: "婵犵數濮烽弫鎼佸磻閻愬搫绠板┑鐘崇閸ゅ苯螖閿濆懎鏆為柛濠呭煐缁绘繈妫冨☉鍗炲壈闂佸搫瀚ㄩ崕鐢稿蓟濞戙垹鍗抽柕濞垮劚椤亪姊?",
                value: "https://subweb.oss-cn-hongkong.aliyuncs.com/RemoteConfig/customized/convenience.ini"
              },
              {
                label: "CNIX",
                value: "https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/SSRcloud.ini"
              },
              {
                label: "Nirvana",
                value: "https://raw.githubusercontent.com/Mazetsz/ACL4SSR/master/Clash/config/V2rayPro.ini"
              },
              {
                label: "V2Pro",
                value: "https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/V2Pro.ini"
              },
              {
                label: "PaoLuCloud",
                value: "https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Stitch.ini"
              },
              {
                label: "PaoLuCloud",
                value: "https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Stitch-Balance.ini"
              },
              {
                label: "Maying",
                value: "https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/customized/maying.ini"
              },
              {
                label: "Ytoo",
                value: "https://subweb.s3.fr-par.scw.cloud/RemoteConfig/customized/ytoo.ini"
              },
              {
                label: "w8ves",
                value: "https://raw.nameless13.com/api/public/dl/M-We_Fn7/w8ves.ini"
              },
              {
                label: "NyanCAT",
                value: "https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/customized/nyancat.ini"
              },
              {
                label: "Nexitally",
                value: "https://subweb.s3.fr-par.scw.cloud/RemoteConfig/customized/nexitally.ini"
              },
              {
                label: "SoCloud",
                value: "https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/customized/socloud.ini"
              },
              {
                label: "ARK",
                value: "https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/customized/ark.ini"
              },
              {
                label: "N3RO",
                value: "https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/n3ro_optimized.ini"
              },
              {
                label: "Scholar",
                value: "https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/scholar_optimized.ini"
              },
              {
                label: "Flowercloud",
                value: "https://subweb.s3.fr-par.scw.cloud/RemoteConfig/customized/flower.ini"
              }
            ]
          },
          {
            label: "闂傚倸鍊搁崐鐑芥嚄閸撲礁鍨濇い鏍亼閳ь剙鍟鍕箛閸撲胶鈼ゅ┑鐘灱閸╂牠宕濋弽顓炵；?",
            options: [
              {
                label: "NeteaseUnblock",
                value: "https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/special/netease.ini"
              },
              {
                label: "Basic",
                value: "https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/special/basic.ini"
              }
            ]
          }
        ]
      },
      form: {
        sourceSubUrl: "",
        clientType: "",
        customBackend: this.getUrlParam() == "" ? defaultBackend : this.getUrlParam(),
        shortType: shortUrlBackend,
        remoteConfig: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini",
        excludeRemarks: "",
        includeRemarks: "",
        filename: "",
        rename: "",
        devid: "",
        interval: "",
        diyua: "ShadowRocket",
        emoji: true,
        nodeList: false,
        extraset: false,
        tls13: false,
        udp: false,
        xudp: false,
        tfo: false,
        sort: false,
        expand: true,
        scv: false,
        fdn: false,
        appendType: false,
                label: "Clash AdGuard DNS",
        new_name: true, // 闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢妶鍌氫壕婵ê宕崢瀵糕偓瑙勬礉椤鈧潧銈稿鍫曞箣閻樺灚姣庢繝鐢靛仩閹活亞绱為埀顒併亜椤愩埄妲归柛鎺戯躬楠炴﹢顢欓挊澶夊寲闂備浇顕栭崢鐣屾暜閹烘挷绻嗗ù鐘差儐閻?Clash 闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢敃鈧壕褰掓煟閻旂厧浜伴柣鏂挎閹便劌顪冪拠韫闂備浇顕栭崳锝囩磽濮樼鍥蓟閵夛妇鍘?
        tpl: {
          surge: {
            doh: false // dns 闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢妶鍡椾粡濡炪倖鍔х粻鎴犲閸ф鐓欑紓浣靛灩濞呮﹢鏌℃担鍓插剱濞ｅ洤锕俊鍫曞川椤斿吋顏犻梻浣告啞閻熴儵鏁冮妷鈺佄﹂柛鏇ㄥ灠閸愨偓闂侀潧臎鐏炵偓顔愰梻鍌欒兌椤牊顨ラ幖浣规櫇闁靛牆顦扮粻鎺楁⒒娴ｇ懓顕滅紒璇插€块幃褎绻濋崟顒€鍘归梺鍓插亝濞叉﹢鎮?DoH
          },
          clash: {
            doh: false
          },
          singbox: {
            ipv6: false
          }
        }
      },
      loading1: false,
      loading2: false,
      loading3: false,
      customSubUrl: "",
      customShortSubUrl: "",
      dialogUploadConfigVisible: false,
      loadConfig: "",
      dialogLoadConfigVisible: false,
      uploadFilter: "",
      uploadScript: "",
      uploadConfig: ""
    };
  },
  created() {
    document.title = "Subscription Converter";
    this.isPC = this.$getOS().isPc;
  },
  mounted() {
    this.form.clientType = "clash";
    this.getBackendVersion();
    this.anhei();
    let lightMedia = window.matchMedia('(prefers-color-scheme: light)');
    let darkMedia = window.matchMedia('(prefers-color-scheme: dark)');
    let callback = (e) => {
      if (e.matches) {
        this.anhei();
      }
    };
    if (typeof darkMedia.addEventListener === 'function' || typeof lightMedia.addEventListener === 'function') {
      lightMedia.addEventListener('change', callback);
      darkMedia.addEventListener('change', callback);
    } //闂傚倸鍊搁崐鐑芥嚄閸洖纾块柣銏㈩焾閻ょ偓绻濇繝鍌滃闁搞劌鍊块弻锝夊閵忊晝鍔哥紓浣哄У閼归箖鈥︾捄銊﹀磯濡わ箑鐏濋顓㈡煟鎼达紕浠涢柣鎿勭節瀵濡堕崱妯哄伎闂佸綊鍋婇崗姗€宕戦幘婢勬棃宕ㄩ鐔感氶梻浣虹帛钃辩紒浣规綑鍗遍柛顐犲劜閻撴瑩鏌ｉ幇闈涘濠⒀屽灦閺岋綁骞橀崘鍙夊€梺闈涙搐鐎氫即寮幇鏉跨妞ゆ挾濮烽崢顖炴⒒娴ｈ姤銆冪紒鈧担铏圭煋闁圭虎鍠楅崑鈺傜節闂堟侗鍎忕紒鈧崘顔界厪濠电姴绻愰惁婊堟煕閻愯尙鍩ｆ慨濠勭帛閹峰懘宕ㄦ繝鍌涙畼闂備礁鎼惌澶岀礊娴ｅ摜鏆︽繝闈涙閺嗗棝鏌涢弴銊ヤ簻闁诲寒鍙冨Λ鍛搭敃閵忊€愁槱缂備礁顑嗛崹鍦垝婵犳艾鐭楀璺虹墔缁ㄨ顪冮妶鍡楀Е闁稿瀚板鎼佸Χ閸モ晜锛?
  },
  methods: {
    selectChanged() {
      this.getBackendVersion();
    },
    getUrlParam() {
      let query = window.location.search.substring(1);
      let vars = query.split('&');
      for (let i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] == "backend") {
          return decodeURIComponent(pair[1]);
        }
      }
      return "";
    },
    anhei() {
      const getLocalTheme = window.localStorage.getItem("localTheme");
      const lightMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)');
      const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
      if (getLocalTheme) {
        document.getElementsByTagName('body')[0].className = getLocalTheme;
      } //闂傚倸鍊峰ù鍥х暦閸偅鍙忛柡澶嬪殮濞差亜鐓涢柛婊€鐒﹂弲顏堟偡濠婂嫬鐏村┑锛勬暬楠炲洭寮堕崸妤侊紬闂備線娼荤徊浠嬪Χ缁€鐪憇torage闂傚倸鍊搁崐鐑芥倿閿旈敮鍋撶粭娑樻噽閻瑩鏌熺€电浠ч梻鍕閺岋繝宕橀妸銉㈠亾瑜版帪缍栭柡鍥╁枂娴滄粓鏌熼幆褍鑸归柣蹇婃櫇缁辨帡鍩€椤掑嫬纾奸柣鎰嚟閸樺崬顪冮妶鍡楀濠殿喗鎸抽幃姗€寮婚妷锔惧幗濠电偞鍨堕悷锕€鐣峰畝鍕厸鐎光偓鐎ｎ剛鐦堥悗瑙勬礈閸樠囷綖濠靛鏁勯柛顭戝櫘濡粌鈹戦悩鑼闁哄绨遍崑鎾诲即閵忕姷锛欓悷婊呭鐢寮插┑鍥ヤ簻闁规壋鏅涢埀顒佺墵閿?
      else if (getLocalTheme == null || getLocalTheme == "undefined" || getLocalTheme == "") {
        if (new Date().getHours() >= 19 || new Date().getHours() < 7) {
          document.getElementsByTagName('body')[0].setAttribute('class', 'dark-mode');
        } else {
          document.getElementsByTagName('body')[0].setAttribute('class', 'light-mode');
        } //闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢妶鍥╃厠闂佺粯鍨堕弸鑽ょ礊閺嵮岀唵閻犺櫣灏ㄩ崝鐔兼煛閸℃劕鈧洟婀侀梺鎸庣箓閹峰顭囬悢璁跨懓顭ㄩ崘顏喰ㄩ梺鍝勭灱閸犳牠鐛崱姘兼Щ闂佸搫妫滄ご鎼佸Φ閸曨垰围闁告侗鍠栧▓妤呮⒑閸濆嫮鐒跨紒缁樼箓閻ｅ嘲顫滈埀顒佷繆濮濆矈妲婚梺缁樻尵閸犲酣鍩為幋锕€鐓￠柛鈩冦仦缁ㄨ鈹戦悙鑼癁闁逞屽墯閸撴岸宕甸弴銏＄厱妞ゆ劧绲剧粈鈧柛鐑嗗灦濮婃椽妫冨☉杈ㄐら梺绋挎唉濞呮洜鈧潧銈稿畷濂稿Ψ閿旇瀚奸梻浣告啞缁诲倻鈧凹鍓氱粋宥夋倷閻戞鍘卞┑鐐叉缁绘帞绮婚搹顐＄箚闁告瑥顦慨鍥煃鐟欏嫬鐏╅柍褜鍓ㄧ紞鍡涘磻閸曨剛顩锋繛宸簼閳锋垿姊婚崼鐔剁繁闁绘搩鍙冨濠氬礋椤愩埄浼冨┑顔硷龚濡嫰顢橀崗鐓庣窞閻庯綆浜栭崑鎾绘偨閸涘﹦鍘介梺闈涚箞閸ㄥ濡存繝鍥ㄧ厱閻庯綆鍋呯亸顓㈡煃閽樺妲告い顐ｇ箞椤㈡宕掗妶鍛繕QQ缂傚倸鍊搁崐鎼佸磹閻戣姤鍊块柨鏂垮⒔閻瑩鏌熷▎陇顕уú顓€佸▎鎾崇鐟滃繘鎮鹃懜鐢电瘈闁靛骏绲介悡鎰版煕閺冣偓濞叉粎妲愰幒妤€鐓涢柛灞久肩花濠氭⒑閸濆嫮袪闁告柨閰ｉ崺銉﹀緞閹邦厾鍘介梺鎸庢椤曆囧几濞戙垺鐓冮悷娆忓閻忓瓨銇勯姀锛勨槈闁宠棄顦灒闁兼祴鏅滈崯鎵磽閸屾艾鈧悂宕愰崫銉х煋闁圭虎鍣弫鍕熆鐠虹尨鍔熼柡鍡畵閺屻劌鈹戦崱妯侯€涘┑鐐殿儠閸旀垿寮诲鍫闂佸憡鎸鹃崰搴ㄦ偩閻戣棄绀冮悷浣风劍濡炰粙銆侀弮鍫濈妞ゆ棁濮ら崯娲⒒閸屾瑧绐旀繛浣冲泚鍥ㄧ鐎ｎ偄浜楅梺鍓插亖閸庨亶宕ヨぐ鎺撶厱闁哄洢鍔岄悘锟犳煟閹捐泛鏋涢柡灞炬礃缁绘盯宕归鐓庮潛婵＄偑鍊曞ù姘閻愬灚顫曢柟鐑樻尰婵挳鏌﹀Ο渚Ц闁诡垳鍋ゅ娲偡閺夎法楠囬梺鍦焾閸熷潡鎮鹃悜鑺ュ亗閹煎瓨蓱閺傗偓闂備焦鎮堕崕顕€寮插☉姘辩?
        if (lightMode && lightMode.matches) {
          document.getElementsByTagName('body')[0].setAttribute('class', 'light-mode');
        }
        if (darkMode && darkMode.matches) {
          document.getElementsByTagName('body')[0].setAttribute('class', 'dark-mode');
        } //闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢妶鍥╃厠闂佺粯鍨堕弸鑽ょ礊閺嵮岀唵閻犺櫣灏ㄩ崝鐔兼煛閸℃劕鈧洟婀侀梺鎸庣箓閻楀﹪顢旈悩缁樼厽婵犲﹤鎳愮敮娑樓庨崶褝韬┑鈥崇埣瀹曟帒顫濋銏╂闂備浇宕甸崰鎰垝鎼淬垺娅犳俊銈呭暟閻瑩鏌熼悜妯烩拻闁活厽鐟ラ…璺ㄦ崉娓氼垰鍓崇紓浣叉閸嬫挻绻濆▓鍨灍闁挎岸鏌涘顒夊剰鐞氭瑧鈧厜鍋撻柛鏇ㄥ厴閹锋椽姊洪崨濠勭畵閻庢艾鍢插嵄闁割偅娲橀悡鏇㈠箹濞ｎ剙濡洪柟鎻掑⒔閳ь剝顫夊ú婵嬶綖婢跺瞼鐭夐柟鐑樻煛閸嬫捇鏁愭惔婵堝嚬濡炪們鍎茬换鍌炩€旈崘顔嘉ч柛鈩兠弳妤呮⒑缁嬫鍎戦柛鐘虫尵閸掓帡寮埀顒傜紦娴犲宸濆┑鐘插楠炲牓姊绘担绛嬫綈闁稿骸纾竟鏇㈩敇閻愬灚鐦撻梻鍌欐祰椤曆囨煀閿濆拋鐒界憸鏂款嚕閻㈠壊鏁嗛柛鏇ㄥ墯濞呮牠姊鸿ぐ鎺戜喊闁告搫绠戦…鍥Ω閳哄倻鍘卞銈嗗姉婵挳鎮橀鈧弻?
      }
    },
    change() {
      var zhuti = document.getElementsByTagName('body')[0].className;
      if (zhuti === 'light-mode') {
        document.getElementsByTagName('body')[0].setAttribute('class', 'dark-mode');
        window.localStorage.setItem('localTheme', 'dark-mode');
      }
      if (zhuti === 'dark-mode') {
        document.getElementsByTagName('body')[0].setAttribute('class', 'light-mode');
        window.localStorage.setItem('localTheme', 'light-mode');
      }
    },
    onCopy() {
      this.$message.success("Success");
    },
    makeUrl() {
      if (this.form.sourceSubUrl === "" || this.form.clientType === "") {
        this.$message.error("Operation failed");
        return false;
      }
      let backend =
          this.form.customBackend === ""
              ? defaultBackend
              : this.form.customBackend;
      let sourceSub = this.form.sourceSubUrl;
      sourceSub = sourceSub.replace(/(\n|\r|\n\r)/g, "|");
      this.customSubUrl =
          backend +
          "/sub?target=" +
          this.form.clientType +
          "&url=" +
          encodeURIComponent(sourceSub) +
          "&insert=" +
          this.form.insert;
      if (this.form.remoteConfig !== "") {
        this.customSubUrl +=
            "&config=" + encodeURIComponent(this.form.remoteConfig);
      }
      if (this.form.excludeRemarks !== "") {
        this.customSubUrl +=
            "&exclude=" + encodeURIComponent(this.form.excludeRemarks);
      }
      if (this.form.includeRemarks !== "") {
        this.customSubUrl +=
            "&include=" + encodeURIComponent(this.form.includeRemarks);
      }
      if (this.form.filename !== "") {
        this.customSubUrl +=
            "&filename=" + encodeURIComponent(this.form.filename);
      }
      if (this.form.rename !== "") {
        this.customSubUrl +=
            "&rename=" + encodeURIComponent(this.form.rename);
      }
      if (this.form.interval !== "") {
        this.customSubUrl +=
            "&interval=" + encodeURIComponent(this.form.interval * 86400);
      }
      if (this.form.devid !== "") {
        this.customSubUrl +=
            "&dev_id=" + encodeURIComponent(this.form.devid);
      }
      if (this.form.appendType) {
        this.customSubUrl +=
            "&append_type=" + this.form.appendType.toString();
      }
      if (this.form.tls13) {
        this.customSubUrl +=
            "&tls13=" + this.form.tls13.toString();
      }
      if (this.form.sort) {
        this.customSubUrl +=
            "&sort=" + this.form.sort.toString();
      }
      this.customSubUrl +=
          "&emoji=" +
          this.form.emoji.toString() +
          "&list=" +
          this.form.nodeList.toString() +
          "&xudp=" +
          this.form.xudp.toString() +
          "&udp=" +
          this.form.udp.toString() +
          "&tfo=" +
          this.form.tfo.toString() +
          "&expand=" +
          this.form.expand.toString() +
          "&scv=" +
          this.form.scv.toString() +
          "&fdn=" +
          this.form.fdn.toString();    
      if (this.form.clientType.includes("surge")) {
        if (this.form.tpl.surge.doh === true) {
          this.customSubUrl += "&surge.doh=true";
        }
      }
      if (this.form.clientType === "clash") {
        if (this.form.tpl.clash.doh === true) {
          this.customSubUrl += "&clash.doh=true";
        }
        this.customSubUrl += "&new_name=" + this.form.new_name.toString();
      }
      if (this.form.clientType === "singbox") {
        if (this.form.tpl.singbox.ipv6 === true) {
          this.customSubUrl += "&singbox.ipv6=1";
        }
      }
      if (this.form.diyua.trim() !== "") {
        this.customSubUrl +=
            "&diyua=" + encodeURIComponent(this.form.diyua);
      }
      this.$copyText(this.customSubUrl);
      this.$message.success("Success");
    },
    makeShortUrl() {
      let duan =
          this.form.shortType === ""
              ? shortUrlBackend
              : this.form.shortType;
      this.loading1 = true;
      let data = new FormData();
      data.append("longUrl", this.$btoa(this.customSubUrl));
      if (this.customShortSubUrl.trim() != "") {
        data.append("shortKey", this.customShortSubUrl.trim().indexOf("http") < 0 ? this.customShortSubUrl.trim() : "");
      }
      this.$axios
          .post(duan, data, {
            header: {
              "Content-Type": "application/form-data; charset=utf-8"
            }
          })
          .then(res => {
            if (res.data.Code === 1 && res.data.ShortUrl !== "") {
              this.customShortSubUrl = res.data.ShortUrl;
              this.$copyText(res.data.ShortUrl);
              this.$message.success("Success");
            } else {
              this.$message.error("Operation failed: " + res.data.Message);
            }
          })
          .catch(() => {
            this.$message.error("Operation failed");
          })
          .finally(() => {
            this.loading1 = false;
          });
    },
    confirmUploadConfig() {
      this.loading2 = true;
      let data = new FormData();
      data.append("config", encodeURIComponent(this.uploadConfig));
      this.$axios
          .post(configUploadBackend, data, {
            header: {
              "Content-Type": "application/form-data; charset=utf-8"
            }
          })
          .then(res => {
            if (res.data.code === 0 && res.data.data !== "") {
              this.$message.success("Success");
              this.form.remoteConfig = res.data.data;
              this.$copyText(this.form.remoteConfig);
              this.dialogUploadConfigVisible = false;
            } else {
            this.$message.error("Operation failed");
            }
          })
          .catch(() => {
            this.$message.error("Operation failed");
          })
          .finally(() => {
            this.loading2 = false;
          });
    },
    analyzeUrl() {
      if (this.loadConfig.indexOf("target") !== -1) {
        return this.loadConfig;
      } else {
        this.loading3 = true;
        return (async () => {
          try {
            let response = await fetch(this.loadConfig, {
              method: "GET",
              redirect: "follow",
            });
            return response.url;
          } catch (e) {
            this.$message.error("Short link parse failed: " + e)
          } finally {
            this.loading3 = false;
          }
        })();
      }
    },
    confirmLoadConfig() {
      if (this.loadConfig.trim() === "" || !this.loadConfig.trim().includes("http")) {
        this.$message.error("Operation failed");
        return false;
      }
      (async () => {
        let url
        try {
          url = new URL(await this.analyzeUrl())
        } catch (error) {
          this.$message.error("Operation failed");
          return;
        }
        this.form.customBackend = url.origin
        let param = new URLSearchParams(url.search);
        if (param.get("target")) {
          let target = param.get("target");
          if (target === 'surge' && param.get("ver")) {
            // 缂傚倸鍊搁崐鎼佸磹妞嬪孩顐介柨鐔哄Т绾捐顭块懜闈涘Е闁轰礁顑囬幉鎼佸籍閸繄鐣哄┑掳鍊曢幊蹇涙偂閵夆晜鍊甸柨婵嗛閸樻挳鏌＄€ｎ偆澧辩紒杈ㄦ尰閹峰懘妫冨☉姗嗙€虫俊鐐€愰弲婵嬪籍椤╁碁,闂傚倸鍊搁崐椋庣矆娓氣偓楠炴牠顢曢敂钘変罕闂佺硶鍓濈粙鎴ｇ箽闂備胶顢婃禍顒勬偩?
            this.form.clientType = target + "&ver=" + param.get("ver");
          } else if (target === 'surge') {
            //缂傚倸鍊搁崐鎼佸磹妞嬪孩顐介柨鐔哄Т绾捐顭块懜闈涘Е闁轰礁顑囬幉鎼佸籍閸繄鐣哄┑掳鍊曢幊蹇涙偂閵夆晜鍊甸柨婵嗛閸樻挳鏌＄€ｎ偆澧辩紒杈ㄦ尰閹峰懘妫冨☉姗嗙€虫俊鐐€愰弲婵嬪籍椤╁碁,濠电姷鏁告慨鐑藉极閹间礁纾绘繛鎴炵懃缁剁偤鏌涢妷顔煎缂佲偓閸喓绡€闂傚牊绋掗敍鏃堟煠閺夎法浠㈤柍钘夘樀瀵噣宕掑搴″壍r
            this.form.clientType = target + "&ver=4"
          } else {
            //缂傚倸鍊搁崐鎼佸磹妞嬪孩顐介柨鐔哄Т绾捐顭块懜闈涘Е闁轰礁顑囬幉鎼佸籍閸繄鐣哄┑掳鍊曢幊蹇涙偂閵夆晜鍊甸柨婵嗛閸樻挳鏌＄€ｎ偆澧垫慨濠冩そ瀹曘劍绻濋崟顓犳殼闂佽瀛╅崙褰掑礈濞嗘搩鏁嬮柕澶嗘櫅缁犲鎮?
            this.form.clientType = target;
          }
        }
        if (param.get("url")) {
          this.form.sourceSubUrl = param.get("url");
        }
        if (param.get("insert")) {
          this.form.insert = param.get("insert") === 'true';
        }
        if (param.get("config")) {
          this.form.remoteConfig = param.get("config");
        }
        if (param.get("exclude")) {
          this.form.excludeRemarks = param.get("exclude");
        }
        if (param.get("include")) {
          this.form.includeRemarks = param.get("include");
        }
        if (param.get("filename")) {
          this.form.filename = param.get("filename");
        }
        if (param.get("rename")) {
          this.form.rename = param.get("rename");
        }
        if (param.get("interval")) {
          this.form.interval = Math.ceil(param.get("interval") / 86400);
        }
        if (param.get("dev_id")) {
          this.form.devid = param.get("dev_id");
        }
        if (param.get("append_type")) {
          this.form.appendType = param.get("append_type") === 'true';
        }
        if (param.get("tls13")) {
          this.form.tls13 = param.get("tls13");
        }
        if (param.get("xudp")) {
          this.form.xudp = param.get("xudp") === 'true';
        }
        if (param.get("sort")) {
          this.form.sort = param.get("sort") === 'true';
        }
        if (param.get("emoji")) {
          this.form.emoji = param.get("emoji") === 'true';
        }
        if (param.get("list")) {
          this.form.nodeList = param.get("list") === 'true';
        }
        if (param.get("udp")) {
          this.form.udp = param.get("udp") === 'true';
        }
        if (param.get("tfo")) {
          this.form.tfo = param.get("tfo") === 'true';
        }
        if (param.get("expand")) {
          this.form.expand = param.get("expand") === 'true';
        }
        if (param.get("scv")) {
          this.form.scv = param.get("scv") === 'true';
        }
        if (param.get("fdn")) {
          this.form.fdn = param.get("fdn") === 'true';
        }
        if (param.get("surge.doh")) {
          this.form.tpl.surge.doh = param.get("surge.doh") === 'true';
        }
        if (param.get("clash.doh")) {
          this.form.tpl.clash.doh = param.get("clash.doh") === 'true';
        }
        if (param.get("new_name")) {
          this.form.new_name = param.get("new_name") === 'true';
        }
        if (param.get("singbox.ipv6")) {
          this.form.tpl.singbox.ipv6 = param.get("singbox.ipv6") === '1';
        }
        if (param.get("diyua")) {
          this.form.diyua = param.get("diyua");
        }
        this.dialogLoadConfigVisible = false;
        this.$message.success("Success");
      })();
    },
    renderPost() {
      let data = new FormData();
      data.append("target", encodeURIComponent(this.form.clientType));
      data.append("url", encodeURIComponent(this.form.sourceSubUrl));
      data.append("config", encodeURIComponent(this.form.remoteConfig));
      data.append("exclude", encodeURIComponent(this.form.excludeRemarks));
      data.append("include", encodeURIComponent(this.form.includeRemarks));
      data.append("rename", encodeURIComponent(this.form.rename));
      data.append("tls13", encodeURIComponent(this.form.tls13.toString()));
      data.append("xudp", encodeURIComponent(this.form.xudp.toString()));
      data.append("emoji", encodeURIComponent(this.form.emoji.toString()));
      data.append("list", encodeURIComponent(this.form.nodeList.toString()));
      data.append("udp", encodeURIComponent(this.form.udp.toString()));
      data.append("tfo", encodeURIComponent(this.form.tfo.toString()));
      data.append("expand", encodeURIComponent(this.form.expand.toString()));
      data.append("scv", encodeURIComponent(this.form.scv.toString()));
      data.append("fdn", encodeURIComponent(this.form.fdn.toString()));
      data.append("sdoh", encodeURIComponent(this.form.tpl.surge.doh.toString()));
      data.append("cdoh", encodeURIComponent(this.form.tpl.clash.doh.toString()));
      data.append("newname", encodeURIComponent(this.form.new_name.toString()));
      data.append("diyua", encodeURIComponent(this.form.diyua.toString()));
      return data;
    },
    confirmUploadScript() {
      if (this.form.sourceSubUrl.trim() === "") {
        this.$message.error("Operation failed");
        return false;
      }
      this.loading2 = true;
      let data = this.renderPost();
      data.append("sortscript", encodeURIComponent(this.uploadScript));
      data.append("filterscript", encodeURIComponent(this.uploadFilter));
      this.$axios
          .post(configScriptBackend, data, {
            header: {
              "Content-Type": "application/form-data; charset=utf-8"
            }
          })
          .then(res => {
            if (res.data.code === 0 && res.data.data !== "") {
              this.$message.success("Success");
              this.customSubUrl = res.data.data;
              this.$copyText(res.data.data);
              this.dialogUploadConfigVisible = false;
              this.btnBoolean = true;
            } else {
              this.$message.error("Operation failed");
            }
          })
          .catch(() => {
            this.$message.error("Operation failed");
          })
          .finally(() => {
            this.loading2 = false;
          })
    },
    getBackendVersion() {
      this.$axios
          .get(
              this.form.customBackend + "/version"
          )
          .then(res => {
            this.backendVersion = res.data.replace(/backend\n$/gm, "");
            this.backendVersion = this.backendVersion.replace("subconverter", "SubConverter");
            this.$message.success(`Backend available: ${this.backendVersion}`);
          })
          .catch(() => {
            this.$message.error("Operation failed");
          });
    }
  }
};
</script>






