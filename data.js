const CATEGORIES = {
  mantik: { name: 'İlm-i Mantık', short: 'Mantık' },
  fikih: { name: 'Usul-i Fıkıh', short: 'Usul-i Fıkıh' },
  kelam: { name: 'İlm-i Kelam', short: 'Kelam' },
};

const QA_DATA = [
  // ===================== İLM-İ MANTIK =====================
  {
    id: 'mantik-1', category: 'mantik', number: 1,
    question: `İlmi mantığın ta'rifini, mevzunu, ğayesini, okuduğumuz kitabın ismini ve musannıfını yazınız.`,
    answer: `Tarifi: Hüve âletün kanuniyetün ta'simü muraâtühezzihne anil hatai filfikri
Mevzu: Ma'lumatı tasavvuriyye ve Malumatı tasdigıyyedir
Ğayesi: İsmetüzzihni anilhatai filfikri
Kitabın İsmi: Errisâletüşşemsiyyetü fil kavâidil mantıkıyyeti
Musannıfı: Ali Bin Ömer El Kâtibi'dir.`
  },
  {
    id: 'mantik-2', category: 'mantik', number: 2,
    question: `İlim kaç kısımdır? Tarifleri nelerdir?`,
    answer: `İlim iki kısımdır.
Tasavvur: Husulü suratişşeyi filakli.
Tasdik: Tasavvurun meahü hükmün`
  },
  {
    id: 'mantik-3', category: 'mantik', number: 3,
    question: `Lafzın manaya bilvazı delaletinin kısımları nelerdir izah ediniz.`,
    answer: `Bilmutabaka: Lafzın vazı olunduğu mananın tamamı üzerine delalet etmesidir.
Bittezammün: Lafzın vazı olunduğu mananın bir cüzü üzerine delalet etmesidir.
Bililtizam: Lafzın vazı olunduğu mananın lazımı üzerine delalet etmesidir.`
  },
  {
    id: 'mantik-4', category: 'mantik', number: 4,
    question: `Cüzi hakiki ve küllinin tariflerini yazıp birer misal verin.`,
    answer: `Cüzi Hakiki: Mâ yemneu nefsü tasavvuri mefhumihi an vukuişşirketi fihi
Misal: (Zeyd gibi)
Külli: Mâ lâ yemneu nefsü tasavvuri mefhumihi an vukuişşirketi fihi
Misal: (İnsan gibi)`
  },
  {
    id: 'mantik-5', category: 'mantik', number: 5,
    question: `Nevi hakikiyi tarif edip kısımlarını birer misalle yazın.`,
    answer: `Nevi Hakiki: Külliyyün megulün alâ vâhidin fakat ev alâ kesirine müttefikine bilhagaigi fi cevabi mâ hüve.
Müteaddidül eşhas olur (İnsan gibi)
Ğayrı Müteaddidil eşhas olur (Şems gibi)`
  },
  {
    id: 'mantik-6', category: 'mantik', number: 6,
    question: `Cinsi tarif edip kısımlarını birer misalle yazınız.`,
    answer: `Cins: Külliyyün megulün ala kesirine muhtelifine bi hagaigi fi cevabi mâ hüve
Cinsi Garib: İnsana nisbetle hayvan gibi
Cinsi Baid: İnsana nisbetle cisim gibi`
  },
  {
    id: 'mantik-7', category: 'mantik', number: 7,
    question: `Faslı tarif edip kısımlarını birer misalle yazınız.`,
    answer: `Fasıl: Külliyyün yuhmelü aleşşeyi fi cevabi eyyü şeyin hüve fi cevherihi
Faslı Garib: Natık gibi
Faslı Baid: İnsana nisbetle Hassas gibi`
  },
  {
    id: 'mantik-8', category: 'mantik', number: 8,
    question: `Nisebi erbaayı ta'dad edip birer misal verin.`,
    answer: `Musavaat: İnsan ve Natık gibi
Umum-Husus-Mutlak: İnsan ve Hayvan gibi
Umum-Husus-Minvecih: Hayvan ve Ebyaz gibi
Mubayenat: İnsan ve Feres gibi`
  },
  {
    id: 'mantik-9', category: 'mantik', number: 9,
    question: `Muarrafı (Gavli Şarih) ta'rif edip kısımlarını misalle yazınız.`,
    answer: `Muarraf: Vehüvellezi yestelzimü tasavvuruhu tasavvura zelikeşşeyi evimtiyazehü an külli mâ adahu
Haddı Tam: El insanu hayvanun natıgun gibi
Haddı Nakıs: El insanu natıgun / El insanu cismün natıgun gibi
Resmi Tam: El insanu hayvanun zahikun gibi
Resmi Nakıs: El insanu zahıkun / El insanu cismun zahıkun gibi`
  },
  {
    id: 'mantik-10', category: 'mantik', number: 10,
    question: `Kazıyyeyi ta'rif edip aksamı evveliyyesini yazınız.`,
    answer: `Kazıyye: Gavlün yasıhhu en yugale ligailihi innehu sâdıgun fihi ev kezıbun fihi
Kazıyye; Hamliyye olur, Şartıyye olur. Şartıyye; Muttasıla olur, Munfasıla olur.`
  },
  {
    id: 'mantik-11', category: 'mantik', number: 11,
    question: `Mevzu itibarıyla kazıyyeyi hamliyye kaç kısımdır. Nelerdir izah ediniz.`,
    answer: `Mevzu şahsı muayyen olursa Mahsusa ve Şahsıyye denir.
Mevzu külli olup fertlerin kemmiyyeti beyan olunursa Mahsura ve Müsevvera denir.
Beyan olunmayıp külliyye ve cüziyye olmaya salih olmazsa tabiiyye denir.
Beyan olunmayıp külliyye ve cüziyye olmaya salih olursa mühmele denir.`
  },
  {
    id: 'mantik-12', category: 'mantik', number: 12,
    question: `Şekil neye denir? Eşkali erbaayı beyan ediniz.`,
    answer: `Haddi evsadın haddi esğar ve haddi ekber yanında vazı keyfiyetinden hâsıl olan heyete şekil denir.
Şekli Evvel: Haddi Evsad Suğrada Mahmül, Kübrada Mevzu olursa
Şekli Seni: Haddi Evsad her ikisinde de Mahmül olursa
Şekli Selis: Haddi Evsad her ikisinde de Mevzu olursa
Şekli Rabi: Haddi Evsad Suğrada Mevzu, Kübrada Mahmül olursa.`
  },
  {
    id: 'mantik-13', category: 'mantik', number: 13,
    question: `Yakiniyyat ve gayrı yakiniyyatı tadat ediniz.`,
    answer: `Yakiniyyât: Evveliyyât, Müşahedât, Mücerrebât, Hadsiyyât, Mütevatirât, Kazâyâ Kıyâsâtühâ meahâ
Ğayrı Yakiniyyât: Meşhurât, Müsellemât, Makbulât, Maznunât, Muhayyelât, Vehmiyyât`
  },
  {
    id: 'mantik-14', category: 'mantik', number: 14,
    question: `Burhan neye denir? Kısımlarını izah ediniz.`,
    answer: `Yakiniyyâttan meydana gelen kıyasa denir.
Burhanı Limmi: Müessirden esere istidlaldir.
Burhanı İnni: Eserden müessire istidlaldir.`
  },

  // ===================== USUL-Ü FIKIH =====================
  {
    id: 'fikih-1', category: 'fikih', number: 1,
    question: `Usulü fıkhın ta'rifi, mevzuu, ğayesi, kitabın ismi ve kitabın musannıfını yazınız.`,
    answer: `Ta'rifi: Vehüve ilmün yu'rafü bihi ahvâlül edilleti vel ahkemiş şeriyyeteyni minhaysü enne lehâ dehlan fi isbâtissâniyeti bil ülâ.
Mevzuu: Edille-i Şeriyye ve Ahkâmı Şeriyyedir
Ğayesi: Ma'rifetül ahkamir rabbâniyyeti bihasebid dâgatil insâniyyeti liyünâlebilcereyâni alâ mucebihâ lisseâdetiddiniyyeti veddünyeviyyeti
Kitabın İsmi: Miratül Usul Fi Şerhi Mirgatil Vusul
Kitabın Musannıfı: Molla Hüsrev Hazretleri`
  },
  {
    id: 'fikih-2', category: 'fikih', number: 2,
    question: `Mirat kitabının taksimini yapınız.`,
    answer: `Bir Mugaddime, İki Maksat, bir Hatimeden müteşekkildir.
Mugaddime: İlmi usulü fıkhın tarifi, mevzuu ve ğayesi
İki Maksat: Birinci Maksat: Edillei Şeriyye — İkinci Maksat: Ahkâmı Şeriyye
Hatime: İctihat hakkındadır`
  },
  {
    id: 'fikih-3', category: 'fikih', number: 3,
    question: `Edillei erbaanın zabıt vechini yazınız.`,
    answer: `Delil ya vahiy olur veya ğayrı vahiy olur. Vahiy olan ya metlüv olur, bu kitaptır; veya ğayrı metluv olur, buda sünnettir.
Ğayrı vahiy olan asrın bütün müctehidlerinin kavli olursa bu icmadır. Bir müctehidin gavli olursa bu kıyastır.`
  },
  {
    id: 'fikih-4', category: 'fikih', number: 4,
    question: `Edillei şeriyyei aslıyyeyi sayarak kitabın tağrifini yapınız.`,
    answer: `Edillei şeriyyeyi aslıyye: Kitap, Sünnet, İcma, Kıyas
Kitap: Hüvennazmül münzelü alâ Rasülinâ Muhammedin (Sallallahu aleyhi ve selleme) elmengulü anhü tevâturan`
  },
  {
    id: 'fikih-5', category: 'fikih', number: 5,
    question: `Kuran-ı kerimin hükümleri nelerdir?`,
    answer: `Münkiri kâfir olur.
Namazda okunması caiz olur.
Abdestsiz ve cünüp olarak dokunmak caiz değildir.
Kat-i hüküm ifade eder.`
  },
  {
    id: 'fikih-6', category: 'fikih', number: 6,
    question: `Hassın ta'rifi ve hükmünü yazınız.`,
    answer: `Has: Lafzun vuzia lima'nen vahidin alel infiradi
Hükmü: Has, has olması itibariyle medlülünde katiyyet ifade eder.`
  },
  {
    id: 'fikih-7', category: 'fikih', number: 7,
    question: `Emri ta'rif ederek emir ile muradın ne olduğunu yazınız.`,
    answer: `Emir: Lafzun tulibe bihil fi'lü cezmen bivazihi lehüsti'lâen
Emrin muradı vücubtur. Vücub siğaya mahsustur. Siğa vücuba mahsustur.`
  },
  {
    id: 'fikih-8', category: 'fikih', number: 8,
    question: `Zarf ve miğyarı tağrif edip namaz için nefsi vücub ve vücubu eda ne zaman tehaggug eder?`,
    answer: `Zarf: Ma yefzulü anilmüeddâ
Mi'yar: Ma la yefzulü anilmüeddâ
Nefsi vücub; vaktin girmesiyle, vücubu eda ise; hıtabı ilahinin teveccühü ile tahakkuk eder.`
  },
  {
    id: 'fikih-9', category: 'fikih', number: 9,
    question: `Edayı ta'rif edip birer misalle yazınız.`,
    answer: `Eda: Teslimü aynil vacibi bilemri
Eda üç kısımdır.
Eda-i kâmil: Cemaatle namaz gibi
Eda-i kâsır: Münferiden namaz gibi
Eda şebihün bil kaza: Lahıgın imam namazdan fâriğ olduktan sonraki fiili gibi`
  },
  {
    id: 'fikih-10', category: 'fikih', number: 10,
    question: `Kafirler ne ile me'murdur, ne ile me'mur değildir?`,
    answer: `Kâfirler iman, Muamelât, Ukubât ile ve ibâdâtın vücubuna itikad ile me'murdurlar. Sukuta ihtimali olan ibadetler ile emir olunmazlar.`
  },
  {
    id: 'fikih-11', category: 'fikih', number: 11,
    question: `Mutlak ve mukayyedi ta'rif edip hükümlerini yazınız.`,
    answer: `Mutlak: Hüveşşâyiu fi cinsihi bilâ şumulin velâ ta'yinin
Mukayyed: Hüvelhâricu anişşuyui bi vechimma
Hükümleri: Mutlak ıtlakı üzere, mukayyed takyidi üzere cereyan eder.`
  },
  {
    id: 'fikih-12', category: 'fikih', number: 12,
    question: `Elfazı âm'ı ta'dad ediniz.`,
    answer: `Elfazı Âm: Cemi muarraf ve cemi muarraf manasına olanlar, müfret muarraf ve müfret muarraf manasına olanlar, nekre-i menfiyye, men, mâ, ellezi, eyne, haysü, meta, kül, küllemâ ve cemiun lafzı`
  },
  {
    id: 'fikih-13', category: 'fikih', number: 13,
    question: `Zahirin ta'rifi ve hükmünü yazınız.`,
    answer: `Zahir: Ma urife muradühü bi semai siğatihi
Hükmü: Tevil, tahsis ve nesha ihtimali olmakla beraber kendisi ile amelin vacip olmasıdır.`
  },
  {
    id: 'fikih-14', category: 'fikih', number: 14,
    question: `Muhkemin ta'rifini ve hükmünü yazınız.`,
    answer: `Muhkem: Mezdâde kuvveten alel müfesseri bi huluvvihi an ihtimalinneshi
Hükmü: Tevil, tahsis ve nesha ihtimali olmaksızın kendisi ile amelin ve mucebine itikadın vacip olmasıdır.`
  },
  {
    id: 'fikih-15', category: 'fikih', number: 15,
    question: `Hafinin ta'rifini ve misalini yazınız.`,
    answer: `Hafi: Ma hafiye muradühü bi arızın gayrissiğati
Misal: [Vesserigu vesserigatü fegdau eydiyehüma] Ayeti kerimesinde "Esserigu" lafzının Darrar ve Nebbaş hakkında hafi olması gibi`
  },
  {
    id: 'fikih-16', category: 'fikih', number: 16,
    question: `Müteşabihin tarif ve hükmünü yazınız.`,
    answer: `Müteşabih: Men kataa racâü ma'rifeti muradihi
Hükmü: Murad olunan mananın hakkıyyetine itikat edip, her ne kadar müteahhirun cevaz versede te'vilden kaçınmaktır.`
  },
  {
    id: 'fikih-17', category: 'fikih', number: 17,
    question: `Hakikat ve mecazın tariflerini yazınız.`,
    answer: `Hakikat: Mestu'mile fi mâ vuzia leh
Mecaz: Mestu'mile fi ğayrı mâ vuzia lehü li alâkatin beynehumâ`
  },
  {
    id: 'fikih-18', category: 'fikih', number: 18,
    question: `Dal bil ibare ve del bil işarenin tarif ve hükümleri nelerdir?`,
    answer: `Dal bil ibare: Ma delle bi ihdeddelâlâtisselâsi alâ mâ siga lehü
Dal bil işare: Ma delle bi ihdeddelâlâtisselâsi alâ mâ leyse lehüssiyagu
Hükümleri: Katiyyet ifade ederler.`
  },
  {
    id: 'fikih-19', category: 'fikih', number: 19,
    question: `İstidlalatı fasideler nelerdir?`,
    answer: `Mefhumu muhalefet
Nazımdaki yakınlığın hükümde müsâvâtı icap etmesi
Âmmı sebebine tahsis etmek
Âmmı mütekellimin ğarazına tahsis etmek
Mutlakı mukayyed üzerine mutlak olarak hamletmek`
  },
  {
    id: 'fikih-20', category: 'fikih', number: 20,
    question: `Beyanatı hamsı sayınız.`,
    answer: `Beyanı Takrir, Beyanı Tefsir, Beyanı Tağyir, Beyanı Zaruret, Beyanı Tebdil`
  },
  {
    id: 'fikih-21', category: 'fikih', number: 21,
    question: `Neshin ta'rifini ve cereyan ettiği yerleri yazınız.`,
    answer: `Nesih: Vehüve en yedülle alâ hılafi hükmin şeriyyin delilün şeriyyün müterahin
Dört yerde cereyan eder: Kitap ile kitap, kitap ile sünnet, sünnet ile sünnet, sünnet ile kitap`
  },
  {
    id: 'fikih-22', category: 'fikih', number: 22,
    question: `Kitaptan mensuh olanlar nelerdir?`,
    answer: `Sadece tilavet / sadece hüküm / hükümle beraber tilavet / veya hükmün vasfıdır.`
  },
  {
    id: 'fikih-23', category: 'fikih', number: 23,
    question: `Sünnetin ta'rifini ve kısımlarını yazınız.`,
    answer: `Sünnet: Mâ sadera aninnebiyyi (sallallahu aleyhi ve selleme) min gavlin ev fi'linev takririn
Sünnet üç kısımdır: Sünneti gavliyye, sünneti fi'liyye, sünneti takririyye`
  },
  {
    id: 'fikih-24', category: 'fikih', number: 24,
    question: `Şurutu raviyi ta'dad edip zaptın cem ettiği manaları yazınız.`,
    answer: `Dörttür: Aklı Kamil, İslam, Zabt, Adalet.
Zabıt dört manayı içine alır: Haggussema, fehmülma'na, hıfzullafız, murakabe`
  },
  {
    id: 'fikih-25', category: 'fikih', number: 25,
    question: `Haberi vahidin ameli icap ettiği ne ile sabittir?`,
    answer: `Kitap [Felev lâ nefera min külli firgatin minhüm dâifetün liyetefaggahü fiddini], sünnet, icma ve kıyas ile sabittir.`
  },
  {
    id: 'fikih-26', category: 'fikih', number: 26,
    question: `Mürsel hadisin kısımları nelerdir?`,
    answer: `Sahabenin mürseli
Garni sâni ve sâlisin mürseli
Her asırdaki adil kimselerin mürseli
Min vecih Mürsel min vecih müsned`
  },
  {
    id: 'fikih-27', category: 'fikih', number: 27,
    question: `Nefsi haberin kısımlarını misalleriyle beraber yazınız.`,
    answer: `Dört kısımdır:
Sıdkı malum olan (Rasullerin haberi gibi)
Kizbi malum olan (Firavunun rububiyyet davası gibi)
Bila tercih sıdka ve kizbe ihtimali olan (Fasığın haberi gibi)
Sıdkı kizbi üzerine tercih edilen (Şartlarını câmi adil kimsenin haberi gibi)`
  },
  {
    id: 'fikih-28', category: 'fikih', number: 28,
    question: `Sünneti filiyyeyi izah ediniz.`,
    answer: `(Rasulullah Efendimizin kendisine mahsus fiilleri, mücmeli beyanı, tabii fiilleri ve zellenin haricinde kalan) kasti fiillerinin sıfatı malum olursa o sıfatlarda ümmet Rasulullah gibidir. Sıfatı malum olmazsa o fiil Rasulullah efendimiz için mübah, bizimde ona tabi olmamız caizdir.`
  },
  {
    id: 'fikih-29', category: 'fikih', number: 29,
    question: `İcmanın tarifini ve hükmünü yazınız.`,
    answer: `İcma: İttifagul müctehidine min ümmeti muhammedin sallallahu aleyhi ve selleme fi asrin ala hükmin şeriyyin.
Hükmü: İcma, icma olması haysiyetiyle katiyyet ifade edip hücciyyetini inkar eden kafir olur.`
  },
  {
    id: 'fikih-30', category: 'fikih', number: 30,
    question: `Kıyasın tarifini ve hücciyyetinin ne ile sabit olduğunu beyan ediniz.`,
    answer: `Kıyas: Hüve ibânetü misli hükmi ehadil mezkurayni bi misli illetihi fil âhari birra'yi
Kitap ile (Fa'tebiru ya ülil ebsar), sünnet ile (Muaz bin cebel hadisi gibi) ve icma ile sabittir.`
  },
  {
    id: 'fikih-31', category: 'fikih', number: 31,
    question: `Maksadı sani ne hakkındadır? Rükunlarını yazınız.`,
    answer: `Ahkâmı şeriyye ve ona taalluk eden şeyler hakkındadır.
Dört rüknü vardır: Hüküm / Hâkim / Mahkümun Bih / Mahkümun Aleyh`
  },
  {
    id: 'fikih-32', category: 'fikih', number: 32,
    question: `Azimetin tarifi ve kısımları nelerdir?`,
    answer: `Azimet: Ma şuria ibtidaen ğayra mebniyyin ala a'zeril ibadi
Kısımları: Farz, Vacip, Sünnet, Nafile, Haram, Mekruh, Mübah`
  },
  {
    id: 'fikih-33', category: 'fikih', number: 33,
    question: `Farz, sünnet, mekruh ve haramın kısımlarını beyan ediniz.`,
    answer: `Farz: Farzı Ayın, Farzı Kifaye
Sünnet: Sünneti Hüdâ, Sünneti Zevâid
Haram: Haram Li Aynihi, Haram Li Gayrihi
Mekruh: Tahrimi, Tenzihi`
  },
  {
    id: 'fikih-34', category: 'fikih', number: 34,
    question: `Hükmü vaz'ının kısımlarını yazınız.`,
    answer: `Kısımları: Rükun, İllet, Sebeb, Şart, Alamet`
  },
  {
    id: 'fikih-35', category: 'fikih', number: 35,
    question: `Rüknü tarif edip kısımlarını misalleriyle beraber yazınız.`,
    answer: `Rükün: Ma yetegavvemü bihişşeyü
Kısımları:
Rüknü Asli: İman için tasdik gibi
Rüknü Zâid: İman için ikrar gibi`
  },
  {
    id: 'fikih-36', category: 'fikih', number: 36,
    question: `Mahkumun bih kaç kısımdır? Yazınız.`,
    answer: `Dört kısımdır.
1-Hukukullahi hâlisa
2-Hukukulibâdi hâlisa
3-İkisi ictima edip hukukullah galip olan
4-İkisi ictima edip hukukulibad galip olan`
  },
  {
    id: 'fikih-37', category: 'fikih', number: 37,
    question: `Mahkumu aleyh kimdir? Teklif neye bağlıdır?`,
    answer: `Mahkumu Aleyh mükelleftir. Teklif ehliyete, ehliyet dahi akıl bil melekeye bağlıdır.`
  },
  {
    id: 'fikih-38', category: 'fikih', number: 38,
    question: `Ehliyet kaç kısımdır? Ehliyeti vücub neyle sabit olur?`,
    answer: `İki kısımdır: Ehliyeti vucub / Ehliyeti Eda
Ehliyeti vucub zimmetle sabittir.
Zimmet: İnsanın lehine ve aleyhine olan şeylere kendisiyle ehil olduğu bir vasıftır.`
  },
  {
    id: 'fikih-39', category: 'fikih', number: 39,
    question: `Avarızı semaviyye ve muktesebeleri tadat ediniz.`,
    answer: `Avarızı Semaviyye: Cünün, Sığar, Ateh, Nisyan, Nevm, İğma, Rig, Hayız, Nifas, Maraz, Mevt
Avarızı Müktesebe: Cehl, Sekr, Hezl, Sefeh, Sefer, Hata, İkrah`
  },
  {
    id: 'fikih-40', category: 'fikih', number: 40,
    question: `Terekeyi meyyite taalluk eden haklar nelerdir?`,
    answer: `Techizü Tekfin (Min Küllil Mal) / Kaza-i Duyun (Min Küllil Mal)
Tenfizi Vesâyâ (Min Sülüsil Mal) / Kısmet Beynel verase (Min Bakıyyetil Mal)`
  },

  // ===================== İLM-İ KELAM =====================
  {
    id: 'kelam-1', category: 'kelam', number: 1,
    question: `İlmi kelamın tarifi, mevzu ve gayesini yazınız.`,
    answer: `Tarifi: İlmün yübhasü fihi an zetillehi Teâlâ ve sıfatihi ve ahvelil mümkinati minel mebdei velmeadi ale kanunil islami
Mevzuu: zatullah, sıfatullah, ef'alullah; mebde ve mead itibarıyla mümkinatın ahvalidir.
Gayesi: Ettirakki min hazızıtteglidi ile zirvetilyakıni ve irşedül müsterşidine ve ilzemül müanidine ve hıfzü akaidil müslümine an şübehil mübtıline ve ğayetü ğayetihi elfevzü biseadetid derayni`
  },
  {
    id: 'kelam-2', category: 'kelam', number: 2,
    question: `İlmi kelamın bahislerini ve onu öğrenmenin hükmünü yazınız.`,
    answer: `Bahisler: ilahiyyat, Nebeviyyat, semiyyat
Hükmü: İtigadi meseleleri icmalen öğrenmek farz-ı ayın, tefsılen öğrenmek farzı kifayedir.`
  },
  {
    id: 'kelam-3', category: 'kelam', number: 3,
    question: `İlmi kelamın vaazı, metni akaidin musannıfını ve şarihini yazınız.`,
    answer: `Vaazı: ilk vaazı imam-ı Azam hazretleri, ondan sonra imam-ı eş'ari ve imam-ı maturidi hazretleridir.
Musannıfı: Ömerun nesefi hazretleri
Şarihi: Sadüddin mesud bin ömerul teftezani hazretleridir.`
  },
  {
    id: 'kelam-4', category: 'kelam', number: 4,
    question: `Sahabeyi kiramın ve tabiin devrinde niçin ameli ve itikadla alakalı kitap yazılmamıştır?`,
    answer: `1-Sahabeyi kiramın itikadı, peygamber efendimizin sohbeti sebebiyle temiz olduğu için
2-Tabiınin itikadı da zamanlarının efendimizin zamanına yakın olması sebebiyle temiz olduğu için
3-Vakıa ve ihtilaflar az olduğu için
4-Kendilerine itimat edilen kimselere müracaat imkanı olduğu için yazılmamıştır.`
  },
  {
    id: 'kelam-5', category: 'kelam', number: 5,
    question: `Fırakı islamiyyenin başlıcaları nelerdir?`,
    answer: `Başlıca 2 kısma ayrılır.
1-Fırakı Naciye: ehli sünnet vel cemaat (maturidiyye ve eşariyye)
2-Fırakı Dalle: Mutezile, Şia, Havaric, Mürcie, Neccariyye, Cebriyye, Müşebbihe`
  },
  {
    id: 'kelam-6', category: 'kelam', number: 6,
    question: `İmam Ebul Hasanil Eşari ve İmam-ı Maturidiyye kimselerdir?`,
    answer: `İmamı Eşari: Bağdat'ta yaşayıp ehl-i sünnet akidesini imamı Şafii hazretlerinin görüşleri üzere ihya eden zattır.
İmam-ı maturidiyye: maveraünnehirde yaşayıp ehli sünnet akidesini İmamı Azam hazretlerinin görüşleri üzere ihya eden zattır.`
  },
  {
    id: 'kelam-7', category: 'kelam', number: 7,
    question: `Bu ilmin mevzu zatı ilahi ve sıfatı ilahi olduğu halde musannıf hazretleri niçin hakaikı eşyai ile başladı?`,
    answer: `İlmi kelamın mebnası muhtesatın varlığından Hz Allah'ın varlığına, birliğine, sıfatlarına, fiillerine; buradan da sair semıyyata istidlal etmek olduğu için başladı.`
  },
  {
    id: 'kelam-8', category: 'kelam', number: 8,
    question: `İlmi tarif edip esbab-ı ilmi tadat ediniz.`,
    answer: `İlim: Sıfatün yetecelle bihelmezküru limen gamet hiye bihi
Esbabı ılim: havası Selime, haberi sadık, akıl`
  },
  {
    id: 'kelam-9', category: 'kelam', number: 9,
    question: `Haberi mütevatirin tarifini ve hükmünü bir misal ile yazınız.`,
    answer: `Tarifi: Vehüvel haberus sebitü ale elsineti gavmin le yütesevvaru tevatuühüm alelkizbi
Hükmü: Bizzarura, ilmi zaruriyyi icab eder.
Misal: geçmiş zamanda yaşamış padişahları ve uzak beldeleri bilmek gibi.`
  },
  {
    id: 'kelam-10', category: 'kelam', number: 10,
    question: `Haberi Resul hangi ilmi icap eder? Resul ve mucizeyi tarif ediniz.`,
    answer: `Haberi Resul: ilmi istidlaliyi icap eder.
Resul: İnsanün beasehüllahü Teâlâ ilel halgi litebliğil ehkami
Mucize: Emrun harigun lil âdeti guside bihi izharu sıdkı men iddea ennehü rasülün minellahi Teâlâ.`
  },
  {
    id: 'kelam-11', category: 'kelam', number: 11,
    question: `Harikulade emirleri kaç kısımdır ve nelerdir? Kerameti tarif ediniz.`,
    answer: `Altı kısımdır: İrhas, mucize, keramet, meunet, istidrac ve ihanet
Keramet: Zuhüru emrin harigın liladeti min gıbelilveliyyi ğayra mugarinin lidevennübüvveti.`
  },
  {
    id: 'kelam-12', category: 'kelam', number: 12,
    question: `İlham nedir? Esbabı ilimden midir? İzah ediniz.`,
    answer: `İlham: "ilgaü manen fil kalbi bitarıkılfeyzi" — esbabı ilimden değildir.
Çünkü ilham kendisiyle ammei halk için ilim hasıl olan ve gayrı ilzam etmeye Salih olan bir sebep değildir.`
  },
  {
    id: 'kelam-13', category: 'kelam', number: 13,
    question: `Alem nedir? Niçin muhdesdir?`,
    answer: `Alem: "ma sivellahi Teala minel mevcudati mimme yulemü bihissaniu."
Alem muhtesdir. Çünkü alem, muhdes olan ayan ve araz'dan mürekkeptir.`
  },
  {
    id: 'kelam-14', category: 'kelam', number: 14,
    question: `Ayan ve Arazı tarif edip ayanın kısımlarını izah ediniz.`,
    answer: `Ayan: "ma lehü kıyamün bizatihi"
Araz: "ma la yekumü bizatihi"
Ayan; iki veya daha çok cüzden mürekkep olur ki bu "cisim" gibi; veya mürekkep olmaz "Cevher" gibi.`
  },
  {
    id: 'kelam-15', category: 'kelam', number: 15,
    question: `Muhdis-i alem olan Hz Allah niçin vacibül vücuttur?`,
    answer: `Eğer caizül vücut olsaydı alem cümlesinden olurdu ki o zaman alemin muhdisi olmaya Salih olmazdı.`
  },
  {
    id: 'kelam-16', category: 'kelam', number: 16,
    question: `Sıfatı tenzihiyyeden yedi (7) tanesini yazınız.`,
    answer: `Cenabı hak Araz, cisim, Cevher, musavver, mahdud, müterakkib, mütebaiz, mütecezzi, Metenahi, değildir.
Maiyyet ve keyfiyyet ile vasıflanmaz. Bir mekanla mekanlaşmaz. Cenabı hak üzerine zaman cereyan etmez. Cenabı hakk'a hiçbir şeyi benzemez. Cenabı Hakk'ın ilminden ve kudretinden hiçbir şey çıkmaz.`
  },
  {
    id: 'kelam-17', category: 'kelam', number: 17,
    question: `Akaidi islamiyyenin delilleri nelerdir?`,
    answer: `Edillehi semıyye (kitap ve sünnet), kavaidi mantıkıyye (akli deliller)`
  },
  {
    id: 'kelam-18', category: 'kelam', number: 18,
    question: `Cenab-ı hak nasıl bir kelamla mütekellimdir? Kelam sıfatının sabit olduğuna dair delillerimiz nelerdir?`,
    answer: `Cenabı hak kendi zatıyla kaim, ezeli, ses ve harf cinsinden olmayan, sükut ve afete ve münafi bir kelamla mütekellimdir.
Deliller:
1-İcma-ı ümmet
2-Enbiya-ı aleyhisselatu vesselamdan gelen "Allahu Teala mütekellimdir" şeklindeki mütevater nakiller.`
  },
  {
    id: 'kelam-19', category: 'kelam', number: 19,
    question: `Kur'an'ın mahluk olup olmadığı hususunda ehli sünnetin görüşünü yazınız.`,
    answer: `Kelamullah olan Kur'an 2 manadan müşterekdir.
1-Kelamı nefsi: cenab-ı Hakk'ın zatıyla kaim olup ezelidir, mahluk değildir,
2-Kelamı lafzı: harf ve seslerden müellif nazımdır ve mahluktur.`
  },
  {
    id: 'kelam-20', category: 'kelam', number: 20,
    question: `Ru'yetullah'ın ahirette vacip olduğuna dair nakli delilleri nelerdir? İzah ediniz.`,
    answer: `Kitap, sünnet, icma vardır. Bunlar:
1-Kitap: "vücuhün yevmeizin nazıratün ile rabbihe nazıratün"
2-Sünnet: "innekum seteravne rabbeküm Kema teravnelkamera leyletelbedri"
3-İcma: ahirette ruyetin vuku una dair icma Ümmet vardır.`
  },
  {
    id: 'kelam-21', category: 'kelam', number: 21,
    question: `Ef'al-i ibad hakkında ehli sünnet, mutezile ve cebriyenin görüşleri nelerdir?`,
    answer: `1-Ehli sünnet: küfür-iman, taat-isyan gibi kulun fiillerinin halikı cenabı haktır. Kul ise kasibdir.
2-Mutezile: kul fiilinin haligıdir.
3-Cebriye: kul cemadat gibidir. Fiillerinde hiçbir tesir yoktur.`
  },
  {
    id: 'kelam-22', category: 'kelam', number: 22,
    question: `Kader ve kazayı tarif ederek, ılim mi maluma yoksa malum mu ılme tabiıdir, yazınız.`,
    answer: `Kader: ezelden ebede kadar cereyan edecek hadiseler hakkında cenab-ı Hakk'ın ilminin iktizasınca çizdiği ilahi programdır.
Kaza: cenabı Hak ezelde takdir buyurduğu şeyleri zamanı gelince ilim ve iradesine muvafık olarak halk etmesidir.
İlim maluma tabidir.`
  },
  {
    id: 'kelam-23', category: 'kelam', number: 23,
    question: `Cenabı hak iradesi ve rızası kulların fiillerinden hangilerine taalluk eder?`,
    answer: `İradesi hem Hasan hem de Gabih olanlarına taalluk eder. Rızası ise yalnızca Hasan olanlarına taalluk eder.
Yani cenabı hak kulların güzel ve çirkin bütün fiillerini diler ve yaratır lakin sadece güzel fiillerinden razı olur.`
  },
  {
    id: 'kelam-24', category: 'kelam', number: 24,
    question: `İstitaatın kısımlarını ve bu kısımların meal fiil mi olduğunu yazınız.`,
    answer: `1-Fiilin kendisi ile meydana geldiği kudreti hakikiye manasına ki istitaat, bu meal fiildir.
2-Selametü'l esbap vel âlât manasındaki istitaat, bu ise kablel fiildir.`
  },
  {
    id: 'kelam-25', category: 'kelam', number: 25,
    question: `Eceli tarif edip, maktul eceli ile mi ölmüştür? Bir ayeti kerime ile beyan ediniz.`,
    answer: `Ecel: insanın Mukadder olan ömrünün nihayetine denir. Maktül eceli ile ölmüştür.
Çünkü ayeti kerimede "Feizecee ecelühüm leyestehırune seaten vela yestegdimün" buyurulmuştur.`
  },
  {
    id: 'kelam-26', category: 'kelam', number: 26,
    question: `Ehli sünnet ve mutezileye göre rızık nedir? Haram rızık mıdır?`,
    answer: `Ehli sünnete göre rızık: "İsmün Lima yesüguhüllahü Teala ilelhayeveni feye'külühü". Haram rızıktır.
Mutezileye göre rızık: malikin yediği mülktür veya kendisiyle menfaatlenmek şeran men edilmeyen şeydir. Haram rızık değildir.`
  },
  {
    id: 'kelam-27', category: 'kelam', number: 27,
    question: `"Vallahü Teala yuzillü men yeşâü ve yehdî men yeşâü" ifadesinden maksat nedir?`,
    answer: `Bu ifadeden maksat şudur: cenabı hak hidayeti dileyenler için hidayeti diler ve yaratır, dalaleti dileyenler için de dalaleti diler ve yaratır.`
  },
  {
    id: 'kelam-28', category: 'kelam', number: 28,
    question: `"Eslah Alellah" vacip midir? Kısaca izah ediniz.`,
    answer: `Vacip değildir. Çünkü vacip olsaydı cenab-ı hak dünyada fakir, ahirette muazzeb olan kafirleri yaratmazdı. Yine hazreti Allah'ın Hidayet ve nimetlerine karşı şükür lazım gelmezdi. Zira cenab-ı hak vazifesini yapmış olacaktır.`
  },
  {
    id: 'kelam-29', category: 'kelam', number: 29,
    question: `Kabir azabı kimler içindir? Kabir azabının sübutuna dair bir ayeti kerime ve bir hadis-i Şerif yazınız.`,
    answer: `Kafirler ve bazı asi müminler içindir.
Ayeti kerime: "Enneru yürazune aleyhe ğuduvven ve aşiyyen ve yevme tegumüsseatü edhılü ale firavne eşeddelazebi"
Hadis-i Şerif: "istenzihü anil bevli feinne ammete azebil kabri minhü"`
  },
  {
    id: 'kelam-30', category: 'kelam', number: 30,
    question: `Münker-Nekir ve Kiramen Kâtibin melekleri hakkında kısaca malumat veriniz.`,
    answer: `Münker-Nekir: iki melektir ki kabire dahil olurlar ve kula rabbinden, dininden ve nebisinden sual ederler.
Kiramen-Katibin ise; insanların iyi ve kötü fiillerini kayıt eden meleklerdir.`
  },
  {
    id: 'kelam-31', category: 'kelam', number: 31,
    question: `Beas nedir? Subutuna dair ayet-i Kerime yazınız.`,
    answer: `Beas: hazreti Allah'ın mevtanın asli cüzlerini cem edip ruhlarını iade ederek kabirlerinden diriltmesidir.
Ayeti kerime: "sümme inneküm yevmel kıyameti tübasüne"`
  },
  {
    id: 'kelam-32', category: 'kelam', number: 32,
    question: `Tenasu hakkında malumat veriniz. Ehli sünnete göre hükmü nedir?`,
    answer: `Ruhun insandan insana, insandan hayvana, hayvandan insana geçmesi şeklindeki inanıştır.
Ehli sünnete göre batıldır.`
  },
  {
    id: 'kelam-33', category: 'kelam', number: 33,
    question: `"Vezin" hakkındaki delillerimiz, mutezilenin inkar sebebi ve cevabımızı yazınız.`,
    answer: `Delillerimiz: "Velveznü yevmeizinil haggu" ayet-i kerimesidir.
Mutezile: amelleri hazreti Allah için malumdur. O halde tartılması abestir.
Cevabımız: Hz Allah'ın bütün fiillerinin hikmetleri vardır. Vezin hakkındaki hikmetleri muttali olamamamız, veznin abes olmasını icap etmez.`
  },
  {
    id: 'kelam-34', category: 'kelam', number: 34,
    question: `Kitabın (amel defterinin) hak olduğuna dair delil nedir? Veriliş keyfiyeti nedir?`,
    answer: `Ayet-i kerime: "Feemma men ütiye kitabehu bi yeminihi fesevfe yuhasebu hisaben yesiran"
Müminlere sağ tarafından, kafirlere sol ve arka tarafından verilir.`
  },
  {
    id: 'kelam-35', category: 'kelam', number: 35,
    question: `Havzın hak olduğuna dair bir ayeti kerime ve bir hadis-i Şerif yazınız.`,
    answer: `Ayeti kerime: "Inna etayneke'l Kevser".
Hadisi Şerif: "Havzi mesiratü şehrin, ve zeveyahü seveün, ve maühü ebyazu minellebeni, ve rihuhü etyabü minelmiski, vekizenühü ekseru min nücümissemei, men şeribe minhü fela yezmeü ebeden".`
  },
  {
    id: 'kelam-36', category: 'kelam', number: 36,
    question: `Sırat nedir? Ekser mutezilenin inkâr sebebini ve cevabımızı yazınız.`,
    answer: `Sırat: Cehennem üzerine uzatılmış kıldan ince, kılıçtan keskin, ehli cennetin geçeceği, ehli cehennemin ayağının kayacağı bir köprüdür.
Mutezilenin inkar sebepleri: Böyle bir köprüden geçmek mümkün değildir, mümkün olsa bile müminlere eziyettir.
Cevabımız: cenab-ı hak, müminlere sırattan kolayca geçirmeye kadirdir. Hatta kimi şimşek gibi kimi de rüzgâr gibi geçer.`
  },
  {
    id: 'kelam-37', category: 'kelam', number: 37,
    question: `Cennet ve cehennem şu an mevcut mudur? Delilleri nelerdir?`,
    answer: `Mevcuttur.
Deliller: Âdem aleyhisselam ile Havva validemizin kıssası ve şu ayeti kerimelerdir.
"Üıddet Lil müttegıne.", "ve üıddet Lil kafirine" Ayet-i Kerimesidir.`
  },
  {
    id: 'kelam-38', category: 'kelam', number: 38,
    question: `Günahı kebairi tadat ediniz.`,
    answer: `1-Allahü teala'ya şirk koşmak
2-Haksız yere adam öldürmek
3-Muhsaneye zina iftirasında bulunmak
4-Zina etmek
5-Harpden kaçmak
6-Sihir yapmak ve yaptırmak
7-Yetim malı yemek
8-Müslüman ana babaya asi olmak
9-Harem-i şerif'te günah işlemek
10-Faiz yemek
11-Hırsızlık yapmak
12-Şarap içmek`
  },
  {
    id: 'kelam-39', category: 'kelam', number: 39,
    question: `Mürtekibi kebira hakkında ehli sünnet, havaric ve mutezilenin görüşlerini yazınız.`,
    answer: `Ehli sünnet: Mürtekibi kebira mümindir. Çünkü tasdik bakidir.
Havaric: Mürtekibi kebira kafirdir.
Mutezile: Mürtekibi kebira fasıktır, mümin de değildir kafir de değildir.`
  },
  {
    id: 'kelam-40', category: 'kelam', number: 40,
    question: `Şefaat hakkındaki akli ve nakli deliller nelerdir? İzah ediniz.`,
    answer: `Akli delil: Af ve mağfiret, şefaat olmadan caiz olduğuna göre şefaat ile evleviyetle caizdir.
Nakli delilleri: kitap, sünnet ve icmadır.
1-Kitap: "Fema tenfeuhüm (kafirlere) şefeatüş şafiine." Bu ayeti kerimenin üslubu şefaatin sübutuna delalet eder.
2-Sünnet: "Şefeati liehlilkebe'ri min ümmeti". Bu hadis-i Şerif meşhur olmakla beraber şefaat hakkındaki hadislerin manası mütevaterdir.
3-İcma: Şefaatin sübutuna dair icma-ı Ümmet vardır.`
  },
  {
    id: 'kelam-41', category: 'kelam', number: 41,
    question: `İman lügatte istilahta ne demektir?`,
    answer: `İman lügatte: Bir hükme gönülden boyun eğmek ve onun doğruluğunu kabul etmektir.
İstilahta ise: Peygamber Efendimizin (sallallahu aleyhi ve sellem) hazreti Allah tarafından getirdiği hususların tamamını tasdik ve ikrar etmektir.`
  },
  {
    id: 'kelam-42', category: 'kelam', number: 42,
    question: `"Ene müminün inşaallah" demek münasip midir? İzah ediniz.`,
    answer: `Münasip değildir. Çünkü eğer bu söz şek için olursa şüphesiz küfürdür. Şu kadar var ki edepli hareket etmek, işleri cenab-ı Hakk'ın meşîetine havale etmek, akıbetinden şüphe etmek gibi sebeplerle söylenebilirse de evla olanı terktir.`
  },
  {
    id: 'kelam-43', category: 'kelam', number: 43,
    question: `"Saadet-Şekavet", "isad-işga" hakkında malumat veriniz. Değişiklik hangisindedir?`,
    answer: `Saadet ve şekavet kulun sıfatıdır. İsad ve işga ise cenab-ı Hakk'ın sıfatıdır. Değişiklik kulun sıfatı olan Saadet ve şekavettedir.
Yani Sait, imandan sonra mürtet olmakla şaki olabilir. Şaki de kefaretten sonra iman etmekle said olabilir.`
  },
  {
    id: 'kelam-44', category: 'kelam', number: 44,
    question: `Risalet ne demektir? Cenabı Hakk'ın Resuller göndermesindeki hikmetleri nelerdir?`,
    answer: `Risalet: hazreti Allah'ın bir kulunun, kendisi ile mahluklarından akıl sahipleri arasındaki sefirliğidir.
Hikmetleri:
1-Ehli iman ve ehli taati Cennet ve sevapla tebşir,
2-Ehli küfür ve ehli isyan cehennem ve azap ile inzar,
3-İnsanların muhtaç olduğu dini ve dünyevi şeyleri beyan etmek`
  },
  {
    id: 'kelam-45', category: 'kelam', number: 45,
    question: `Efendimiz (sallallahu aleyhi ve sellem) son peygamber olduğu katı iken ondan sonra İsa Aleyhisselam'ın nuzülü nasıl izah edilebilir?`,
    answer: `İsa Aleyhisselam yeni bir şeriat ile değil, Peygamber efendimizin şeriatine tabi olarak gelecektir.`
  },
  {
    id: 'kelam-46', category: 'kelam', number: 46,
    question: `Peygamberlerin adedi hususunda malumat veriniz.`,
    answer: `Bir rivayete göre yüz yirmi dört bin, diğer bir rivayete göre iki yüz yirmi dört bin peygamber gönderilmiştir. Ancak evla olan bir adet tahsis etmemektir. Nitekim ayeti kerime şöyledir: "minhüm men kasas ne aleyke ve minhüm men lem negsus aleyke"`
  },
  {
    id: 'kelam-47', category: 'kelam', number: 47,
    question: `Peygamberimiz (sallallahu aleyhi ve sellem) efzalül Enbiya olduğuna delil nedir?`,
    answer: `"Küntüm hayra ümmetin ühricet linnesi" ayeti kerimesidir. Şöyle ki: Ümmetin hayırlı olması dinindeki Kemali itibarıyladır. Dinindeki Kemali ise nebisinin kemaline tabidir.`
  },
  {
    id: 'kelam-48', category: 'kelam', number: 48,
    question: `Peygamberlerden bazısının günah işlediğini işar eden nakillerin hükmü nedir?`,
    answer: `Bi tarigıl Ehad mengul ise merduttur. Bitarigıt tevatür mengul ise te'vil olunur. Te'vil mümkün değilse evlayı terk manasına veya bi'setden evvel olduğuna hamil olunur.`
  },
  {
    id: 'kelam-49', category: 'kelam', number: 49,
    question: `Cenab-ı hak enbiyayı niçin mucize ile te'yit etmiştir?`,
    answer: `Mucize olmasaydı enbiyanın kavlini kabul etmek vacip olmazdı. Risalet davasında sadık olan, kazip olandan ayrılmazdı.`
  },
  {
    id: 'kelam-50', category: 'kelam', number: 50,
    question: `Melaike-i kiram hakkında malumat veriniz.`,
    answer: `1-Melaike-i kiram Allahu Teala'nın emri ile amil kullarıdır. Nitekim cenab-ı hak şöyle buyurmuştur: "layesbigunehü bilgavli vehüm bi emrihi ye'melün"
2-Erkeklik ve dişilikle vasıflanmazlar.
3-Bazılarının zan ettiği gibi Allah'ın kızları değildirler.`
  },
  {
    id: 'kelam-51', category: 'kelam', number: 51,
    question: `Miraç kaç safhadır? Bu safhalar ne ile sabittir? Münkirlerinin hükmü nedir?`,
    answer: `Üç safhadır.
1-Mescid-i haram'dan mescid-i aksa'ya kadar olan safha. Buna İsra denir, ayetle sabittir. Münkiri kafir olur.
2-Mescid-i aksa'dan semavata kadar olan safha. Haberi meşhur ile sabittir. Münkiri dal olur.
3-Semavat'dan ilâ maşallah olan safha. Haberi vahit ile sabittir. Münkiri âsim olur.`
  },
  {
    id: 'kelam-52', category: 'kelam', number: 52,
    question: `Enbiyadan sonra beşerin en faziletlilerini hilafet müddetleri ile beraber yazınız.`,
    answer: `Hazreti Ebubekir Sıddık -2-
Sonra Hazreti Ömerul Faruk -10-
Sonra Hazreti Osman Zinnureyn -12-
Sonra Hazreti Ali keremallahu vecheh -6-
Cem'an -30- senedir.`
  },
  {
    id: 'kelam-53', category: 'kelam', number: 53,
    question: `İmamın vazifelerinden yedi (7) tanesini yazınız.`,
    answer: `1-Tenfizi ahkam (hükümleri icra etmek)
2-İkamei Hudut (hadleri tatbik etmek)
3-Setti suğur (hudutları muhafaza etmek)
4-Tecihizi cüyuş (orduyu teçhiz etmek)
5-Ehzi sadakat (vergileri toplamak)
6-Gahrı müteğallibe ve mütelassısa ve guttaı tarik (asileri, hırsızları ve yol kesicileri cezalandırmak)
7-İkame-i Cuma ve a'yad (Cuma ve bayram namazlarını kıldırmak)
8-Kulları arasında vakı olan münazaraları kesmek
9-Hukuk üzerine kaim olan şehadetleri kabul etmek
10-Velisi olmayan erkek ve kız çocukları evlendirmek
11-Ganimetleri Taksim etmek`
  },
  {
    id: 'kelam-54', category: 'kelam', number: 54,
    question: `Ehli sünnetin akdam olan alametlerinden yedi (7) tanesini yazınız.`,
    answer: `1-Tefzılüşşeyhayn (Hazreti Ebubekir ve Hz Ömerin tefzıli)
2-Hubbul hateneyn (Hazreti Osman ve hazreti Ali'ye muhabbet beslemek)
3-Ta'zımül gıbleteyn (Kabe ve mescidi aksayı ta'zim etmek)
4-El meshu alel huffeyn (Mestler üzerine mesh etmek)
5-Es saletü alel cenazeteyn (Ber ve facir herkesin üzerine cenaze namazı kılmak)
6-Es saletü halfel imâmeyn (Ber ve facir iki imamın arkasında da namaz kılmak)
7-El gavlü bil ma'sumeyn (Peygamberler ve meleklerin masum olduğuna hüküm etmek)
8-El îmânü bil cârihateyn (Kalp ve lisan ile iman etmek)
9-El îmânü bil hayateyn (Kabir ve ahiret hayatına iman etmek)
10-İsbâtüş Şefâateyn (Enbiya ve salihlerin şefaatini ispat etmek)`
  },
  {
    id: 'kelam-55', category: 'kelam', number: 55,
    question: `Aşere-i mübeşşerayı tadat ediniz.`,
    answer: `1-Hazreti Ebubekir
2-Hazreti Ömer
3-Hazreti Osman
4-Hazreti Ali
5-Hazreti Zübeyir
6-Hazreti Talha
7-Hazreti Abdurrahman Bin Avf
8-Hazreti Saad Bin Ebi Vakkas
9-Hazreti Said Bin Zeyd
10-Hazreti Ebu Ubeyde Bin Cerrah (rıdvanüllahü Teala aleyhim ecmain)`
  },
  {
    id: 'kelam-56', category: 'kelam', number: 56,
    question: `Ashab-ı kirama delil uzatmanın memnu' olduğuna dair iki hadis-i Şerif yazınız.`,
    answer: `1-"la tesübbü eshabi felev Enne ehadeküm enfega misle ühudin zeheben ma beleğa müdde ehadihim vela nasıfehü".
2-"Allahe Allahe fi ashabi, la tettehızühüm ğarazan min ba'di, femen ehabbehüm febihubbi ehabbehüm ve men ebğazahüm de bibüğzi ebğazahüm, ve men ezahüm fegad ezani, ve men ezani fegad ezallahe Teala ve men azellahe feyüşikü en ye'huzuhü".`
  },
  {
    id: 'kelam-57', category: 'kelam', number: 57,
    question: `Facirin arkasında namaz ve facir üzerine cenaze namazı caiz midir? Delilleriyle beraber izah ediniz.`,
    answer: `Facirin arkasında namaz caizdir, çünkü efendimiz: "sallu halfe külli berrin ve fecirin" buyurmuştur.
Facir üzerine cenaze namazı caizdir. Çünkü bu hususta icma vardır. Ve Peygamberimiz şöyle buyurmuşlardır: "la tedeus salete ale men Mete min ehlil gıbleti".`
  },
  {
    id: 'kelam-58', category: 'kelam', number: 58,
    question: `Veli ne için Nebi derecesine ulaşamaz?`,
    answer: `Çünkü:
1-Nebiler ma'sumdurlar
2-Hatime korkusundan emindir,
3-Vahiy ile ve meleği görmekle ikram olunmuşlardır,
4-Evliyanın kemalatıyla vasıflandıktan sonra ahkam-ı tebliğe insanları irşat ile me'murdurlar. Veli ise böyle değildir.`
  },
  {
    id: 'kelam-59', category: 'kelam', number: 59,
    question: `Küfrü icap eden sebeplerden "5" tanesini yazınız.`,
    answer: `1-Nasları red etmek
2-Nasların zahirinden batıniyenin İddaa ettiği manalara dönmek
3-Masiyeti helal görmek
4-Masiyeti hafife almak
5-Şeriatle alay etmek
6-Allahü Teala'nın rahmetinden ümit kesmek
7-Allahü Teala'nın azabından emin olmak
8-Kahinin gaybdan haber verdiği şeyleri tasdik etmek`
  },
  {
    id: 'kelam-60', category: 'kelam', number: 60,
    question: `Kıyamet alametlerinden "5" tanesini yazınız.`,
    answer: `1-Deccal'in çıkması
2-Dabbetül arzın çıkması
3-Yecüc ve Me'cücün çıkması
4-İsa Aleyhisselam'ın semadan nüzulü
5-Güneşin batıdan doğması`
  },
];
