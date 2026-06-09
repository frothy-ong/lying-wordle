import { useEffect, useReducer, useRef } from "react";

// ─────────────────────────────────────────────────────────────────
//  WORD POOL
//  All valid 5-letter words used as both answers and valid guesses.
// ─────────────────────────────────────────────────────────────────
const POOL = `words noles melas waist ohias mummy shakt plume azurn aiyee rewth linum jembe porch moron vaute wahoo raile gimpy linac gyoza sword cooey knurs safes mites eathe easle zeals bunjy claes alkos boxed lammy braks begem ghyll unbid taxus sigil crepy emove sists beany kants cardy tiros octas sowne simis chons rhyta bases bitsy grrls innit reefs trant hushy grill vexer posed treat rello kutch yahoo sibbs annul vertu unsew tatou dewed stour gamut vlogs lemme cheth parrs sclim genty input boppy lefte broch stroy cauls ribby auger urena belly suite crops pedal decor grovy kynde hydro fusil curli chasm dotal matts blain wadds tares koori fleam linin lifer zoril tyres brane galea gored tuktu serre roded dress seven files thumb yites lazes heads oyers shirk nudie tondo glace snath fetts psalm piccy towze cajon teels wenny clews penne goose spook spugs warms mouse sasin foyer stilb oaths kayle tules whata ursae dinge inker mutes breem chins carat arvos sarus revet paver timid treen backs buffs repot ackee heedy solos rurus coxib luach calms lipin gripe gauss lurid ninon enfix miler earns crees pratt retax fuzzy spado douar daven axiom briki metif lolls jager sprad slubb lames cacao dawah titch tamal lilts kiddy civvy aswim raser sippy hires defog gungy grass igloo tatty hards suits pyral stoic foray tronk trews peavy ponts fundy hefty wince zippy wyled imply smelt slime lande caums cunei nimps folky palmy fraud kloof girns divos erevs blade llama levis tride adunc excel prill bogey micht gaita trugs suave bizes whows pauls swang atmas krais paren chile polts aumil akees byded skatt hynde lyted spang tills recap krunk phage gnows dizen churl ramus maire tholi teaed lingy gadjo fount tumid glike syver jocky wingy empts laics deair bores perky blend thump roker dally avion lucre scuba berth rooty lapis hoved teach scatt yelks bania oncet cills sorda pomps milty ronin lamps derig ulnae domic arepa kores cuish bonus hexed sling shoji gushy avert poets spane coset venue wrapt purse shewn yetts twite camis dural canns kofta mucro perdu stond capon magot crake neive socas metol dynes gemmy lanks dales slake quail fades lakin chado roger eclat redry ranga fores wagon dobro atigi sutra mangy bundu briks judos gynos cocas deeve nurrs coomy dolci blahs dobie barye mosed craps coupe aroba donna imshi brill niefs milko cutty wairs kuris deash named snabs homme vibes profs bussu ovoid houts mamma swept yuans aggri hence calif skelf price hokes unsod rarer clegs jutty field fanny ledgy dandy saids nided timps chott mohua pudic extol toffy axone benty quipo kaiks darga goops guyse perdy cloke alews proke pized fazed hulky mends savey gazer paals wigga nyssa rimer vehme glebe milfs burly roves ranee koaps wawls addio gothy hygge cryer borel strap keirs korus mizen upsey resty liens leech skite charr bourd trill scapa agape ohmic somas ligge turps yirrs demos bevel linen scyes wizes oshac chola furth weeks doffs sound sided wedgy crena login apode poted dikas horny nexts copes frees ureal honor flock chaos moils puces dauts avers aroid rover fauts quops leare ratio laika daals velds sides crusy almes berms daker crout kaing shews furls hardy skail hider choon giber favel stubs eerie potoo kayak dills satis trape miaow rotte aedes amove grege liths nanna shock troth pardy yummo pukes doups bezil munga myxos leafs mvule thowl haars kinas clits pulao yawps fehme krans murra serer ramal graip stock claut danks knubs stunt dreck begum reign cable trims fices cloys odism elder upled minny bodge ecrus actor totes rhumb gleed ukase maneb tices ouija yufts houff owned pokie yirds kavas alert gents ahing lurgy mates llano maras saice lytta gunge chits huffy tenno bitty cigar fussy avast poxed oggin redia jinne routs pongo moory mooch spicy rater snowy ratas ephas sight cymol gaffe tumpy media apers gnawn opahs pants gucky cyano hollo hotly flood limbs axmen rusty scraw famed spine smith spick basil vades geats loved clomp burro grubs pecan aredd welly mylar bubal shire liber hadji mongo flits carrs dawed dregs sowed prost purls kulan udder dhikr trock chams drift yfere tiges richt piper jolly nemns undue onion gaols fatty loser duffs vants peace podia ripes swain suber fraus banda tared rines sards chowk ettin shtum sirih dicot mafic teind yucks frise relay oaker daube torsk reist emirs winey linga daunt towse imide jiggy unwed rushy dupes firms isles praos tenes rahui execs sadly quays kalpa ligne wheel hafiz runts dowse datto smout yawny proso pronk twilt bends buppy mirky queys heron wedge yodhs cornu appui crass adept minas hayed prise pruta manky meres weepy sleet visas noxal total liana gists punga hurts dooly fleys ainga ryals tense talcy zizel korun tears coirs nicol bedel bayle kebar aspen illth gouty honda tapet mawky pheon sease mechs yabas delfs biner hamed korma embog arere sprue loppy beins mumus thrip catty blatt grouf slash aurei voted alowe ahull haiku icily muntu aboma hexes tumps foody kelpy decry tores mount cheep creek vouge birse coxes moyle wiped heuch twank kames taler chivs biggs loins fouds dooce imari poral hoyed stows resus gowls dense ruers aesir bezes vetch geums babel swing dunts kotos vireo amiga gowan thole basal looie ovate oribi tenne tongs fusty chunk yobby blaws vises bunks trait candy flees iodid texts teals carps roral chops arums heres brave epode poler crump flary creak spays coopt egret hapax zilas blues mardy amuck evert kinda burin abuts detox ixias syrah silds prink cabre nests doomy sepal hemps flown ricer ejido aback onely aglus knaur sires musit drubs hodad where peter orlop folia halms fears dhole certs jocos pirai karns arcus amids giver krabs bribe hoaed walks whomp grove masse apods comby poind unpin tiler kanji penis doors fudgy plump ousel burke coups sinus shelf kwela tabla evoke aloof evils cohab abrim admix brugh krait loner terry vuggy peece takky musky galvo canto yedes wowee valid vends kbars meths pushy pleat urbex leaks skody mimer fatso soupy stipa rifty mooli odyls coria budos saver kitul fayed mauve quair bizzo bilby parer basse filks rowme soles newts plaza caret bombe topaz taint riems louis badly luxer justs shuck fauve cooly chota herbs avine rigid bream costs bemud guqin cleck sport covet arris zymic ealed livor yeuks queue falaj goier jokol draws cinqs whids kipps remex dojos filar cries spill forgo wrawl clung cycas would byrls butut coyed spurt jeeps morse wrick pashm sokol hunts blush appal haint unpen vesta bulse ocrea galls chant blown cease quids yerds users pions mozed toddy aleck lotte fumer poles dangs cadee talar sized shams hoers kylin nabla orcin downa bants tempt pares loxes micos gowfs faver grace yerba limbi gilet shlub claps foids ahuru mulie daine obang bundy pyats curet baste denar tight phuts chaya acnes gibli buxom perts ariot tsade saiga shots hists arses sokah libra tufas cased tahrs cedes cutin crool beaus ictic shard pasha mouls rants shrow tynde shoed poake india bible rises shmek jasey taxol proud boner weeps boast cycad pelts moble mimeo scalp beaks squeg typos torse pance celeb ceaze tires faros snafu lakes poopy regar botts blaes noily chocs yelps vents bivia stull trins tress yogas mucic holes droll adult mirvs sweys swear rates botch roosa varix osmol bucku feist puker heben beaut araba machs bings ahead synth gaspy qualm reate order hasks dobby dolts expat dicts abbes ruana kails roupy soras tench lepra ebons kabab testa goles focus tapas baton poboy denay palpi malwa muxes uncut gater moons mauds mated squib oleos awarn lamer kicky jacal kirks mawrs wowed zowee quake snots hinky skull dhuti bhang trees ennog dunny recit thoft poaka dotes beano poofy proul laddy totem flaps dykes jawed equip cried wilts bolus fetal jomos pacos blins staph remet vairs romeo smirk twill spank wards tween repeg pinky petri impro leges lorry furzy stria seels diner defer coude withs etude pareo duked ruled squab towel pyins dozen pyres rouen alibi shrub palki pints khaki awful siris stunk junky caked hylas thrid almeh yoked dutch umpie holms airth qophs tuque rieve felch stiff stoop baken snort houri coney flyte munch boozy paean jaded garbe gaudy dirge jubes teeny ceded perai weans swags halid bahut carny terns dealt hylic pheer rehab slaty tides mania kiwis blist basts belie swiss qursh dirty gilpy yeahs ulvas oxlip couch urned bumbo aglet niton bulks miltz tasty pucan gummi fadge voids bavin henge punky abask thaim rille burks lofty diddy marah looms nabis sesey scowp zeros jello vughs solve puris parka rewan agist javas lawer cours fanks knarl proxy salvo brith walie quoll monty pyned erred hokum gazar highs kylie woker bloop damns syped tatie kerve bobos canon aging dulia think slump yogin scorn rucks tulle ribas whelm alter wynns cames beigy limby lumpy thali labor foxed chere aread discs ambos yucas baulk skimo dikey caves scaup ihram wants blame hawed raffs showy treys aboil cabby broad ricks those pacts djins abysm dolly britt combo swoop trapt donne kamis oxers lardy imbed leets baldy alloy bally taxon sores posse byssi drees disci flote surgy bassi bazar flocs links emery hoove ngaio liken atone rapid paire vakas annas mirks motet degas group gutta trest fella crown calmy mikva cobia whizz blear negro rhime joeys tatar codon nowls prays kreng bunde laded panni mases nebel fucks sneck ogeed fyces acmes oleum spiff smarm azlon amman chips ketes hears twain foxes skoff sizel cuifs goffs fusel caman terfs klieg holme happi reify gross feeze scrim magus linos kiefs semie froze stent terne visor ramie sauba abbas roved liner volae chess sithe rasps sajou warbs saddo bales vinyl sient erven crawl mangs shins edges clump bleed zooty joles noise speak sijos pukus knosp tamer amped agons chizz exfil kvass acold grump eaves fayre gleek brock sours gonzo grams facta secco buroo hexyl taigs daily radix akkas lists stown exile tosas manas stoup vegie tapis brisk sharn wight tammy oater glaik palsy sorns inner logon galed irate zizit shyer oakum paste titan irked bouks kadis hoied cakey shiai gurns acted togas erned geeky divas goals pinon tarot aches labis porer hoods trick risks rowed gives novas sunis skein saxes noose hules ayaya likes usure conns madge clags lirot wasps heart mosts grown gally jaaps emeer upend close yummy lobby tolas conia curly drama intra halve rahed albas chest guppy loggy unlaw thigh gurge gelds stump bawks bubas denis ratha oxide vasts weeny pomos mesas quire hones cerne muddy gudes sunup cursi deary black wonts evade worse ottos chirt niche apaid drats vales regos baffy pujas kojis sonce hades cisco masts cells glues studs ruddy jerky irons staun deray tuath caups lobos begar lowts rifle twerp theme apart nuddy raver modge denim inarm trugo auxin trads enols arett whump horde ethne culty tewed older booai yarak nicks creme lidos hohed bergs raths largo minim traik gnaws axial jours aquas kiddo crony bluid vegos bleat aceta spurn tyiyn sunny banks dwell zimbi tosed sited inept oddly pined emong abort hying bludy stobs frock poohs viced awols moups roods narks ulema lucky lownd mondo wacky adhan fecht manus trust stupe ycled ramis surat dover homed towns zebus certy doted hoked pries leuco coqui smaik gayer prods teade mecks hyens welkt husky sunna bogue nidus oches dicky exits kalis mazed gambo logos humus bedad frigs julep gools laxes hejab kight moles pyets pervy shoyu basta rebit honan iller micky liker urban gavel prees felty noahs anole faith nonis iodin ragas campy halva leben groks sybow tidal resay alkyd unket faggy booze sibyl swede apery nixie marse baith empty playa ombus rauns smeik lyses acock brach bongo hubby apian quick perog kinks beers offed buras saine ymolt potty wists fujis lusts brans payee munts shoos adzed witan gooky fleck wooer crank flirs vagal lidar yarfa qibla mahua tooms binge murex lycra rabat telos ataps drool cyclo kakis brats basto acyls favor lipos amort drips issue weids baloo motif almas semes emics kidge kawed spumy recta knees mahoe speed hanks doobs mugga giddy bunko kulas debur rotos smaze coure folly scarp noria bunts argle soman doody skits kaama lassi shoon paten envoy nifes clems fakir arias musth jafas cream eggar roust cosec mints lawny penal faxes caulk seifs ganef ayahs foods tyned benet cauld pulli reorg suing pedro hithe goory ragus putto coley duxes antis cuffo tecta tulpa daubs maxes saman amies pians first waive steen hooks bovid waspy eyras unces clies grues sulky naped jeers mammy jowed jaffa panga spide spilt bisks kibbe hoots basic ginzo pully plink gurly nards darks twine tower egads neums uhlan stope moust orbed vints toric petti blobs brash alifs boars apayd chads natty shoot blook ceroc fight eight mieve gulag outgo faiks pervo added arame index pilot kirby puffa moses neuks zouks loure prems lengs taras cissy gamba typal guilt finds notes goths toker saute ekkas onium wonga miked muses roman delay alecs dryad brute dooms mento krone biffy spool waney rynds gulet ochry sapor yearn shame fecit souks meiny kumis trace edger cupid mover stipe refed royal duple sieth shirs crans vodun lanch toked slits redds amuse jugum gular pened sants djinn clang panko crows voila babka acker flute crias aweel sloid acres coram pilar panic heast anlas binds laver fauna flogs moldy skyer hesps vulva tawie glume sords biota lowse cupel pyoid hetes arear salep culch winos newsy forth crith amoks calls crone cangs twirp coste snash dread motto flims purpy shale spule arars mneme sodas rarks argol fugie jenny tawse macas bushy rinse doddy wifie clons senvy divan gifts hyped carbs benga flues slojd cacks lubed styte mucus tunas owche rares weirs oaten docos means sieve nippy ephor curry gaitt chape bulbs prims whins dorrs brays pizza grapy feebs handy massa rutty rorie tonus pingo duomi fossa karks skols balds becks urger seers level leish twink lurer steak liked sprod sedgy hatha eejit gnars bayts ewest surds musse peare brens laden rosti dings eject steek bevor jinni grope wrote mihas talaq preys dukas scree binks loans zorro bubba irids toaze fyrds kinky koban preon sefer craal igapo musty sloyd udals mimic frize frank duads cuter craft faffy yager ureic lazed zonks stept exeem terfe relet aioli pilau dench boing prong matai lunar skort pooks loves goxes silen moits stens bliny bhels fiked pudus tibia deave mimed schmo nonet croon manat alula ariki rumbo skens ataxy naira apoop fados pucer march crazy inkle nocks haven wades halon dwelt pinto onkus iches chevy eikon sukhs treck heame organ opine silks pynes leers harem wilds thrum doled naris flitt elate noter guild sulus teads tushy dolor oners dyads owres boxla peags peens creps ankle girds ragis sabot olden esile carvy lipas wears barky erhus rokes assai salut veals nisei ducal dumka miggs longe durgy bifid yacks glued copsy agued honey muset asked kasha perch trois matzo corno gofer wager lipid snook omers kulfi mulch culpa lefty coala rayah slims tasks beads wines gitch venae reink bacha vrouw siles swage crash fleet whims podal pesky meses aitus pulps bassy jarps clays beeps quina awash keefs shako tepid rueda evite poyse hotel thill scaur milpa coped merde coxae tousy genal pulpy cerge mohos redip urase ditas syren ciggy damme sired honed sidha catch limns dying powin skimp whoof tokay syphs tepee caner refly pitot crewe urson camel aleft soths sculs vines coked uplit margs solid pards worts aside yuzus tiara synds taffy gites gambe gorge chump haled train frogs clade vowed patch coats argil noted koans inula slobs oxbow oller every emmas fewer abbey lassu exude pogos sexed crura rodeo skeen rosin belts slimy homes pitta finca waugh milks tried unrig croup caboc lauds abuna sexto nixed rouls booay readd codex agami rezes tiyns smile yauds bosun amban obiit agoge rewet leads paxes segue snogs waqfs wroot roomy bills serks rears spaul shite overs resto thars diode spitz adrad dates feals valve meuse algor ohone drows soyuz bairn fiefs sperm boffo rocks dotty hakim sybil moves chavs idols sneds gemot batts dikes pipet ludic tanas sizer ridgy scant riads flung lochs albee cloot omovs chias safed keels unjam golly rones kadai obeli perns unban tache ammon saola gades badge snits muffs cooee fenny butes wimpy jolls vowel moist leggy scots tases aleph yechs blawn mille teils repin raped barfs bewig gonna boygs kahal mazey bungy deism lited cedar dzhos larnt phyle asyla ratos harls misgo stuns axoid trend voars clues clops balus sudds bound tumor elemi spaer leams telco doula mesne dauds tiddy hided bonce dogie sades chows stamp iched gibus dizzy harks shogs civil sizes phpht canty kalam boyla clock gooly cyans bliss chore unked rotan wrist soyle docht strim emyds hawks stabs buffo fists plack annat chirp sinky wazir fikes covin jewel fundi units neume rymme johns flout often tours wojus hyoid swine phase akela chefs boral mango gaits comix capri sidas stood track raids sayer yomim ishes guimp tonic hoord storm redan never nonyl sable towsy polka owsen naves newer genus dippy shris borer glide blate jeons flurr odour ancon dhobi snubs moody dolls shaps meous gamer maile nacho jigot creed icker ickle store earnt oasis yorks piezo huhus plats lamby yamen tharm iring kemps fatly lemma punka clepe xoana thoro meter sanko clied seils inned kelim banal sherd saris chems spell quale powan maerl peeps nerol wroth stain liege faugh sells roach adaws great bivvy papes maars sowar bukes reede hooky seism shott murly pills ngati tocos cosey rubai urnal seres atoll aloud prigs cluey beech dazer aerie spoof hoten murri third credo hurds fonds mopus wedel lamas flint begad fritz prion tyros bohea clubs smits blots balsa putti seepy kiore saick trist giant adzes soler donor daffs faxed thebe bluer pekan parol vexil forty madid lanas trams snoep hymen rabis pells eches mulls putid terms lords corgi berks fests sloom feels parma yules ayins viler gravy corse juvie pissy gursh rejon moans googs power sairs mares godet hoons doven dirts gripy powny shiva minks hosel wodge boors algin ontic thorp grain wryly zerda bunje ruths holks girly penes gibed cubed fever borne flubs kente ticed frays sugan straw gugas scone signs whale crome murks umber whelk churr oubit queer alkie kilts pombe towny titis samen plait spica wiver bract toner vogie bunia swoon tehrs sowfs value drake fauld cobby gogos psion rider treed dazed swamy nides reded pipes fakie dodge volks hyena zincs pious hells coaly yirks oldie apace lotas leger umiac colon jades rebus wasts choco assez touzy coate flype tauon crios babul nakfa zoeas rores jirga lowly folds gyppo palis lweis doeks murls salve razes curbs rally asana thirl cholo menta weets hangi gosse calfs quiet ankhs scale bitch fuggy reams donga sessa cites pooja paled soral calla airns tsuba bools belay kneel tauld sooms goety kaphs yowls flabs carta dinar weize artic shere jesse anima incur audio rathe deems glair topee seats nyala ogler zanja zacks kilps outed forby heros corey hucks stoma works rondo drice sybbe agora ragee khazi volta immit vealy votes bongs ardeb sprew patus rowel clonk marts pines drouk snoot quich bites golps emmew ulnad snies pawns eales milia cates dined maill minor hansa sapan tapen eched cymar under toots sensi biali porgy zoist flump doabs feens noser torrs weamb glens yukos bebop theta chang these reeds buyer tsubo skell scats fiers effed faurd tyler strop sazes plunk toras ingot gowds mousy merry imino susus papas lobed torts gighe laura ergos dicta axled hopak talas rinks farse drily cavas knead caese pique gerne zincy amahs gaged scags raced vixen leery orris flaws kyloe shivs monic whups heald bibes winge hawse payor stere stich rural mache tipis appay green obied genas sewel wicca parki piert wolly huzza tofus telic hands shear coapt asdic poppy cubby stumm tangs psora pulmo fouat roric fully kelps indew furry sklim avian objet seamy ludos veils nikah pavin lowan grogs theic corps saunt wrens glute lakhs plaid hosey corns zambo succi meved pricy pansy ameer bravo kaika luger mixup hoosh reedy slipe pupae slues hauls meals idant quins putty tamis latch enews passe mayas eupad cromb realo scows tohos fains poult glans leats prams unmew erupt gatch pagle xenia leman class tryma harts glime galah wacko woofs fecal holly pseud uplay loopy chics ridge gilds sooty boofy knuts nikab vills facts lytic myope quate riyal zibet holey perms undug foyne croak comal gusle genet indow voxel terai bused areae sheer nidor hable renga scrat abies taroc flesh bluds wussy yawls crimp octad talus probs cusps ablet rutin ginch yrneh genro doura paddy sewer radio duets grand pepos rayon sloan cress bento ojime stire spods idiom tozed ganch ozzie thana gigot padis snebs freet senza quoth skaws crims goors faena lease fasti preed bothy dents swies young fitts rohes razoo gamme cleft shoer mulse medii reaks porin caber skunk brawl snush drack bravi based jibed cymas toped didst outro horse estop harry prate inlay manty kippa quoif gonif fiest scare cures tenty geese stats faddy chemo greet tails loath oxter crudy choil daisy stand tools clart swail rumpo eagle abeam ghees choky kulak zills laten popsy yoofs alang bully ebbed macks lawks arise smoko texes metes gorsy truck curst citer wefte baels loose nobly budas twals jutes cylix gyppy hiems folie miaul canst lasts yapok gussy claws casks slyer pikis afara cacti ctene cuppa seems matin tians rosts coded malus mowed jaggs embow swots lotsa kaury thans ganof opter small pacer lehua hudud chaff beals scamp digit dulse notal drole posey ajuga civic nidal yexed chuck girls atlas piety psoae ither fumet velum globs sudor usher lived mealy epact deeps tupek agaze civie obeys lanky tulsi drove pawls dicey taiga pules biers kenaf atuas diwan wifes situs boats totty yaars warks clime lunes outdo nerts sadhu beams heats ketol trial doxes koura query commo bangs xeric cadgy omens hulas slate darbs ruffe joins dosha nappa reens okras scute boney forbs caaed peals algid chomp limit kypes fonda craic focal sarin expos mesel bawls novel samba janty sammy balmy forel paler saith satay uraos lower trats winch looey forts fixit asura bawrs etuis horst dulls monad hedge yards garum perea whips molly scuts amity title ledes bocks veldt greve malas wolfs meris spoke poncy manta docus flory quern evens seyen kains gecko jingo wiels soops yrapt bleep budis hykes masty smeke alant stane skats oncer droke macle brere cepes fract ethal cowps nomes lehrs toran trigo khats gulpy stoas xebec veles strum rhone tilts sonly leeze zitis boked slogs radii boose klick glazy fatwa draps sarks lifes fasci rafts wadts hauns malts shunt washy roids zabra nowts motus celom weave whort oidia subah beady shalt scapi haick wring mumms dhaks sigla arras mifty aspro genie gerle soils accas eards ichor annal rojis sweat scudo feuds hosts howff ginge rhody ferns rheme duded gompa mauls hippo gulfy rowdy septa cimex ehing swans doily rigol pelas roums rurps madre cozey dully hajji akita yorps place idyll naiks skene defis bilks bowes gismo viewy ditts gadis makis clips arsis khuds navar stets frail sengi croci ummas firry yales gulph flyer waxen dingy fichu hairy blite adsum tonks water gawps fayer coyau ricin skiey brool enarm umami wanky legal peats brier vista sissy doxed heles icier waide debts irone overt eevns sheel rioja aspic pyots proas aflaj faint prism igged crest light sorbs roven maare tanto spuds odist pusle magic swizz huers queyn tweer shiur haole mutha sowps birls simas noisy abled ideas pocky lalls fired homer swabs clash synch quass doilt frosh triol befog gaths bibbs pawas gutty kerbs aught paved slurs ulzie years oints batta rexes japes vinal surra hythe gusli libel hakea chafe flawy teaze phyla apert jougs thema acrid haoma taish blued ready palla cezve basho crocs goary keets hours kiths kesar perry reply conge dunno doggy napas glove crook graff gyron ranks sieur brule preop thymi brack dirke spawl salty sager wools grips oorie soole sophs lasso hauds jirre motte iotas speug hosed nying buffy tubed capul garms gourd bunns fenks anime revie gwine cagot anent mossy leuds unapt broke favas eosin camps naggy shoes tryps buran snift osier treif bawty resee slang laked besti crogs naams mayor mower owner cruds nonny scudi bialy norks devis whiff crick table tired monte dahls lairs kiers vinic leaps wrest baser sypes mekka barer morat dunsh batch taggy ample loamy unlid kabar sidhe youse soldi monal slums atilt madam sault wersh offer hillo clach bomas biked whirr confs ditty belle yupon dobes piend snore beige award renin amine odals dozes garth punty rajas stray grees arcos crags hoyas slaws liart smews toged qubit wanks pours umphs idees fiche refit japed slack holla erugo villi flued yucko trigs swire borms cumec tanga nukes axils arked paven troad cooze beryl diact leirs whorl socko grody asset hoghs skyfs smell stove obias otaku daric gorms loges simar puggy sorts frith ledum konbu toppy abray varna elogy bokeh cahow lyric campi sacra mohur slugs hewer about pudsy cocky kanga hated tawed bajus becke snail hames salts abbed prunt coxed cadre colic cages milky caged fitly mongs laids avyze chaco pixie kudus ports moral coyer prent bonze douse sotol guest oaves quoit friar nonce scabs groat wisps dwile rabbi lions pipul awave imbar briss funks homey foule bijou ebbet stied dusts broos winks proto fouet decoy topes laced dwine otary argan gemel wolds bubby hasta repel odyle capex eisel rorty mened durum cital beats rends snout prone pilaw farro murry platy potto fazes coeds trump ascot dwams edema podge sitka cooch wetly charm movie zoris yuppy prana larch bluey thewy picra mochs gages caved adieu knelt demes algal marle getup lezza bones porny joint bight cored flags snary agave caput qorma imaum elven pored sneed namer wases janes taped mules nappy indie primp kheda fuses bemas decan tikes ceili huger gully moira filum weeke segar heels sadis blank ollas glyph rozet slots rudas grans niffs disco fifer boomy padma sopor pocks crues dobra pawaw odder cakes wadge heave paise durzi sorer dishy hwyls yetis cotan camus decko hypes girsh stend flied ficos amice conne edify arrow summa steep sadza wared misos gotta shent limba feted koras daggy whift flays rebop sighs lycea yitie stout pepsi mewed prowl carpi kerky vives hurls scurf floor baghs herry poupt jibba bider poori blowy kaiak their pulus canoe jails clame cynic aware fonts hives dekko navvy cirri recto twerk belon kibbi puree drear amber prime azide cheap rodes ofays yaffs kauru reses odahs helio daffy tetra docks varas plums viold slopy galop gleet kukus zones apays gramp funny vaped rabic fifes octyl drank lacet kecks slebs words exurb evhoe tamed spard blogs orlon grama souce koppa lerps quits drest suras ilium intis aruhe cleik tutty taira heals diazo dipso duett prahu cides haufs solas karoo islet unsex kembs mothy redon hurst muzzy quirk scrob tusks spare video medal gault gonof pungs smerk beaux almug boart lynes stoae gumma acros extra grisy gains gilly levin mixen krubi youks mucho oucht float smore froth vatus wecht serac surer bisom audad khafs boyfs audit sposh casts cully noggs grids pogge tozes fards sower tolar fawns verso blaff felon spiel fakes props fined unzip lying scops moted crock piker wrier mange weens battu eidos neifs mayos bonds rowts skosh vinas scary crape prude decad chirl cutie koker cocco fuzil split ninja chook fangs bonny spazz beaty acari dagos grebe cited chich keeps glint alapa burds cozed seles yippy joker zayin fines lacer vices burrs stung roary dells rooks gasps nival shrug beaky grize axels abash thelf weals dribs iambs dawds douts copal absit mopsy altos barde tweak crwth rebec clots joked bells octan abide sylis jotas owrie huffs lozen teams since azans murky lungi dured canna zooms wayed lymes leaze plonk autos voles urent luser runic skrik stoss rebbe luges sweet trayf slick sully natal scoup again ghazi bouns rebut breme umrah saheb spiky mungs causa scaly sylph vibey frizz payed lotic barge ollav resin teeth banya smash hilly pyros urped trash marcs aptly thigs hoxed stash rubli kudos birle solar libri scaws picot ympes nutty sayon chuff maids amiss ybore unwon style whiny abhor noels abram tegua mobby doved sowth caron imago burqa touch lenes thaws moten mebos grigs muons pinas mouth shags vinew schav skank cooer gants gandy scarf tabid neper cleek maiks zinco weete fuddy nobby busts kindy gobby tolus marka sooks bides nicer torsi goony maund sakes stivy dolia quell titer pouty heyed unmet dozed tunny final ethos phizz hunch dowds duits stoit upped tanhs scout soars moony match anode basis sabra flite presa drier spics aport trone poney aping frist champ simps fisks askew spoor dynel scoff locos quips music junto rekey tacan trier tepas sages loipe calps embed peeks nouny techy lepid pygal axons gorse forge yarns phese skims finer sados sowce enmew drive clean latah lowry wires unrid infra sabal burns condo comfy coles guyot praty boaks brank wuxia kydst glede piste grots reeve graal which chals wulls bubbe dowie blent carse tunds eyass defat stewy suses turds pozzy hyles poley mizzy nandu kevil tunes sodom nepit eyrie tragi buiks scrum vaire kophs ponce palas jobes roked curls howso agars acmic urubu torte mauri upsee perps raias petal ngana lippy deedy haika reges picks civet trets choke swees thiol nevus bilge speel dusty strip solah wizen conky bulgy embox reney basij tolan volar zygal gyros shone splog piing colza stean lured lurry warty vired melds hyphy chica syrup tuned reamy bousy wound diary watts tunic mandi boyos yaups kreep abaya crudo outre garda helos strae cerci armed chara rands jongs adust saugh paths carte spean plaps shiny rides fours laxed aider taxes pinna musts crams betes caple frond linty batty newly crons theek kufis burry scars reset tenia whios zymes cabal faced sythe casus inurn merel clued baler paiks nowty breis dowry bizzy muids phlox phono shawn kaugh tucks sluff swirl woose cutup glare taker shies golpe dorsa quark riata sewan joled toses plesh pilae trunk frits wongi fiars mabes lopes burfi sheik shist joist pases zupas goofy olive metho nadas cuits ought weils peins surly weeds silky fendy mayst vison conte twirl biter ranid swims umbel cuvee raved agile exult toffs swung cabob blows unlit moult fugal posho oozed thees plook beamy suent veers morne oktas yocks meane orles mikes nazes yield ranas hyrax tyees bogus femmy snoop spots flamy cheat yarks toled sirra trawl ashed jolts might sabir cruet amias tarts kayos write hoist urite howdy utile neral grufe fogie comae gauds minds gated sikes pukas bines whack coppy yuked speer carve orate kerma china vicar gleds sicht scrod reech buteo karsy drave arles auloi oaken jirds frere teats guffs waltz herby braza bigly exact beths flake retch gaups scugs stint hotch trods shuts aduki kacks laved linky tappa naunt marsh touse ragde yince wiggy lycee rivel vegas bouge roans bhuna rusts maxed samfu twist beery borax ripps cesti geste smack scrip nelly ormer nancy tabby quite spasm pyxes rifts lurex meaty zoppo verts malic malty pisco qapik wells hiree purda giros ludes blare shote motza deist boobs nosey slaps talea unpay tetes jalap beray courd flare tratt lemur crare rails yeesh perks jambu berme yakka wilco saims tocks naled stilt kiter eases feers yrent slams chaft todde local minty ingle laufs jagas gloat kyrie shill yacca ghaut epees fille arose spall awdls heaps fetta woald monos toted nouls kappa lanai hicks sedge didie glitz armil xylol chiel pauas imbue boets faqir braky unget kawas malva humfs danio heare regna aglow ardri hoven yonis chimp alans thurl kurta embar dungs texas dauby halos ozeki pesty stirk crane walty agues waacs pents abamp doner muggy lungs skyte moola yente botel socle lapel tocky humph gusty besat saury waddy plate duans azoic memos tardy abode tazza trine wisha louie daint liars alamo dital asper aight deals buggy ploye ikans sniff leant liven cowal coted palsa mered pampa carap leccy emacs peaky tawas rangi fakey cuzes loads litas barfi skool wrast laund ceder guiro shore inset aidos lupin adder thraw daraf balun longs socks koffs volte mills rawer sakti pinch pawks sowms hants seeds surge ashen wauls vimen ratan rouge flora toing copen treyf rimes manly fiery nodal axile danny nirly whaps kyles scart nomoi faked capiz neeld jnana lexes fezes meare gusto parts dozer felly etwee fires peggy scaud warns umpty kylix mercy tewit buret rakes crate morro gonef mythi sneer wirer genoa ulans siree nould duomo rolfs teddy tweel golfs satem wasms uvula pudor gnarr blurb nonas tempi torcs aisle geest ayelp dashi quoad enorm slept sices tifos womby laldy gammy panto shlep bumpy nitty trots minos pouks quods dowts moxas moray dusky panim nerds whews agama faery linds opera noxes blabs laigh dadas vault hirer minge risky pared ghest thein antsy least yoker gamps lered toned nopal dekes snibs plims dorad lahal whore auras verry mails icers fugio wafer stylo spyal deify kagus dimbo sises shash lotta ratch kerel gajos gamed braxy nazis cesta clote dicht berko cozen sonic gumps durst raspy riled buats numbs frame penny wests phots nenes farci eaved nitid whats angst coths sownd fermi cared rance anana retia choof husks prole alcos mulga furan snigs sluse deens flush roped runes lirks giron crowd larky altho groan prang quirt macer gamey wamed demob salpa globe fugue goeth booby basks barbs dosas maist gleby hypos bajra crave inapt trues warby murid spray lased phoca jurat dogan vaper sneap drain vapid lipes blads enurn bedim color splat caddy commy sates belee sabha sekos chogs fluty weels schwa griot turms angle zuppa whose zooea psoai bunds alarm merer pyric ducks cowan wents cists topos dorps envoi swaly whamo skuas aland dusks zoism liefs craze egmas mamie carex plugs wites fiver punto wooed salmi cheka aryls waler shady peepe dorks apsis array ambry turks stews gippo doyly peril fumes sitar mozes porno abuzz sleys inbye maces death mungo gumbo jebel hough soots mutis tauts pight karts proyn sowff tread ruses sored negus dungy ablow coves sulfa tarre biker jambo adred anvil brigs vocab chino mauby warts droid wicks lough keyer yeard scrap boche gauze vasty gunks koels ugged vrils porae umbra flexo moose lousy cowry duply pechs merks noyes forza barms wreck salet rupee tyred opted dulce sanga plumb deign swift dorty knell allow absey loupe yelms polyp dancy stead lumen curny jeffs pimps burgs fouth nooky safer umiaq yerks copse sanes xrays styed iambi piled odeum canny wills hoast delos dogma slink yugas peage cusum holos month jills drown konks meows vaunt swoun ocean vegan ingan netts swash gauch bided cover spume zulus fling skied donny spelt allee pekin kutas sozin mayed cards potsy unfed banak antas verbs ricey swami praus dairy heeds howbe rotas torus dines arval virga twice hefts cusks bogie pryer lomes ganev litho sinhs poker subas panax algae podex mecca genii maned scuse sewar forte fetus jehad baron latex meint diram desks rimus arsey banes ennui pengo trued ponga braai teaks yarto undid turnt motis lants knaps xerus waite bouse garis fykes lusty taser gravs mezzo lines clefs billy whaur erase synes wally ceiba gapos poems zooey riser tizes mense warst tsars rooky unpeg drupe oboes squit swats piler cronk olpes dudes neath kolos zesty coach gulls cowed sared arene nills glums kerfs bowse navel bents panel deled boras bambi acute feeds dopey grist poses lenti renne eyots hijab gooby bandh pawed torso dhols seaze tufty cocks rosed rakus silos nones grape hasps hutch vagus lieus jugal toyed spink sepoy yeves bauks etens sorra hoars tiled stern muser shaly gesse emmys trike rudie kopje bombs genre sware gawds tryke thine ulmin fubsy wheft silty reest leone smear fraps ileal chyme poove ruing blocs rheas etics taxed wives petit monas weird brake buhrs jocko dawns psych zezes ogles rebid taths woxen raird route fails dript sassy liras fomes quest davit salto daled known kanae duped filer noses hawms waxed plasm bacca smalt saggy lichi menge three botas gelid atopy flair paeon mingy slews untin anata patin cares vigas jowar noils rishi essay pilaf nanua delly hovel gynny celts ossia logan dixit scups repla bajri scath lavra slunk junco phial lathi setae groof semis edged money imine parvo miffy skegg mewls rudis resod showd toper cloam askos iliac leves prial darre cires artel pecks layin pagod derms wushu harps zarfs mopey barns cruse colog urman birch boong evict lards geist seral yolky mensh eland sauch kasme omasa wawas diked mythy obeah lifts fibre nylon ahint savvy razer pinny deely fondu sural dumpy swits astun pisos stimy antes meant tacos brume ogive messy scand homie tamps jolty busty ruggy mason decay sughs sushi lokes moped agree skios knops manos kythe coign dowls urdee mynah bezzy crise pussy ryper bouts conic queen cocos kogal mowas wirra tripe bauds mures licks cower whops tonga idiot other grise boxer fetes wawes drone kembo namma yolks satin bower malax prima spark unwit gusla cocoa proem snips ogham bandy heigh alive exams fifth virid hiois marms racer kilos nymph kipes aroma pater agger antic barny wazoo nasal rites atoms howre abbot boult kabob flows kanas laity escot jacky whine aking okehs cubes ancle drams lusks biffo vroom parti salol kraut twixt hudna blest manor devas pyran hunky pails jetty foggy mains verse tuner wrung mooly hooly nabks perse locum frisk troat jatos eaten oozes gadid leafy zaris whoso miles ictal sumos chugs deros fetwa equal apres dyked fugly leavy orals simul raged vivda bodle elops jefes wangs snobs mengs tinks coden beard kotch culti synod donko punas rukhs dearn gnome intil ombre plots sayed liang myths raked caneh genom purer tempo bears inrun cruel mawns colas bitte rasse bufty sulks biome hault swarf duros manse steam gleis cusso croze brogh souse tough itchy dumky scion soote jupon laari coven nazir basen blady lathe leach senas ogled salon sloes goner vague lunks lowps grabs henny hewed nashi durry fulls cella corso elite infos watch aahed kokas steed eagre slive gnats niner unify rapes gunny flick ogres segni mairs crumb gayly pekoe kempt bingo smart fifty nervy opens hayer resat xylem grypt yacka redos nudes scuta fuels bapus afear sauls phish hejra glaur chirk pimas tinny fanal arpas pygmy moops dives stile rasta unred ferly ureas zoppa hazel lythe aggro corny mamee fytte polos peaty taces huggy skeed yaird volti bedew pures henna breve draft nauch sider pilea toles adore pukka marae currs event divvy unarm easel hived haffs styes combe masks thymy vital sweal lumbi tinas lysol mitis sauna scene vacua pudge memes score porty clove foams snood abune spart roost bhoot puhas yowie brief resow aures slank rivet ycond czars hiker ducat prats ikons pilis raggy kelep hains egers prexy tacks dules gawky decos deffo steil egger plank click epopt relic elude agria naive spree bares fells comic stulm hoiks motor bumph abate lated liane arede flexi ochre fouer buffi neats horns euked mensa pharm orach hemal jalop stoln cocci roars blini foley janns anker sorbo grana sined swive yates mambo maser thane reked riffs recco yipes roate loops diota gases eking spain wrath ardor being sugos dryly spams skins sofar anura given quart loast fjeld kinin hurly timon ponks raven trite inked nurdy roast ester shaws fluor oared fixed daych humpy mochy cogue mokos drill fitch soree yoick patty risps poots macon lummy amino undee peach rials punts melon swamp repro choir seity begun sinds rappe revel syces wonky cains swads cohos laxly bidon girrs error stedd dexie smirr yukes downy assam frust vespa adays solde prore bluff prior tombs nawab fowls braes wembs chare nanas bevvy cives mamas oriel syncs donah pervs talak bawds steno flops avoid swarm satyr reads cider septs gosht tranq bancs solei tests layer caste denes funds ajies coomb proms allis gurls quare stone nadir nares mikra luffs hooka ropey bored rente lambs slyly ramee chary flier shtup elvan bowls cundy smoky crabs gypsy hurry dicer rales varus brame shown luaus rewax limes woful brown shout hecks scold pulas venal sicky exies pluff hyson lunas viver rimae carbo typey dares curie zinky sabin jarls anoas remix fishy heils prief afire tenny merle lobes spawn eques hokey frape skier fogey aidoi toges sedan loxed smees agate coady uptak fidos pikul grews fuzes jivey qanat futon aweto burps burgh taluk vawte regie fungs pirog waste pesos snags karas breys pumas finch knurl masus labra junta lenis netes mushy puppy naeve chelp serow wifey yrivd gambs wames fibro wages sumps mages typed patsy lacey ergon jelly chalk diffs mirid winds coffs tondi skivy spalt verge swipe aroha calix unset leany aloed unkid hills creds gazal weros guano raker lysin gawks ering tikka tapir diane sagas seiza brios board toile tenth tings comet homos azoth brows egest doucs holds joyed eensy deshi flame triac apron stirs barre finos wikis wakfs wefts bemad aband welsh gurus foram rupia ixnay blurs apses kapas bolts oxies debus jhala hared toyos tanka swayl faded rayed noble eater turrs shift azury noops ronts namus iglus smugs lests taels cubic kroon genip teloi mochi hyper hakes softs dinky honer jawan shtik beses seeks lysis surfs auric debar stink rowan rotis devos oppos aidas cruck corby artsy paged rotch welch stogy pulks aurum chaps jiaos unrip teend cirls pause mooed froes juicy lepta knars turns loris agony tichy width betty villa wined gluer germy spaed looby cumin atocs cutch boyau teers worms napoo appel taxis curfs woads huias folks poilu guyle ceric spoon chack thing tabus samas terts nikau domal babus duppy bronc ripen pongy hacks twaes gojis rhino treks harpy elect quonk fents bundh echos ibrik briar hiked acing conus hutia gyans pargo irade loofa paans sucre tokes dinos klong pareu limax noups lears ships kests resid quaky zilch sumis expel cloze molys tolls zooid downs besee maxis kugel noule thorn soily linns spale beets khaya resew acorn peres plays tubes rifer kacha uncus spait apnea wield clipe sward prase draff mitts meads penie stick muist stade farad heapy casky vakil rests cokes oases ewhow rival troll burse gesso stage gobbo devil oflag skear savoy tajes dados nimbi widdy gemma kapok clank keros bloom raxes yampy spout guans scopa yesks maggs boite suids skive unled klaps bosks soces ooped specs sakis kurus doves nihil cooks tawny frory exalt frena pouts parly enure rotls wised whist octal dayan sield ament pairs doped spore toeas varve molal poise smolt sones lulls keeks haggs adapt mausy bezel hefte eskar mirly hound fairy avale dryer issei caffs pwned bagie qajaq twyer gobos viper youth lucks pubis chiro hexer dough elain kohen feres telex quack zerks glial haros makes neddy jakey dinic bohos mujik hates lomed raita nines ordos togue cosie bosky judgy awork cytes wises pilch fasts airts klang petto redly pryse hests noons scody cuspy peery taiko skeer augur myopy rices comas priss flimp flobs scams reman yecch miner almud basin human waver beans noyed amide bardo marge roset hamal molto souts xysts seric spars promo steer pownd dummy boree fetch bombo hakam zocco spewy venus percs boabs bubus coved barry brast zineb hahas coper gayal horah archi brize exons bikes hench weest sumph swish coxal doeth azido wanna amass hunks watap cadie vodka eloin coled tarsi aurar swole bries taver niqab dited pluto byway ziram yelts mobey pucks garbs torch house pasts agios crine ulcer lytes baurs tanty rummy elmen swoln sheet orgia gleam nempt riped thong nanny dsobo erses mashy dowly deuce berob unfit desse booth poule kliks sokes earth pured nulls crude geits pedes flews urged serve nicht boord poesy takis shuns soapy ebony cukes kirns piles hallo jives dervs sulfo iliad selle divna lotos typps grail hobos sansa argal supra sabes achar moyls elegy nacre cabin begat stymy muton brosy snark mosso worst spire apted aalii redub hexad debit ensky noint prosy skeps vifda ravey elves glaum taunt quats mased ketas brush utter brond kybos pubco preen meith gloom lends pitch greed kevel funky dolos sowse glade pains demon batik jauks artis deres rings sprug chiao pelma trode wuddy image ouphs gilas maror flank haler orpin kaifs uveal pinot embay mamba smorg roule saned feyed peise sleep kales dogey unbar forks kinds gazoo rugae frill scull ember sangs barro ollie cuddy rykes toyon drawl anger gyves pandy ceorl gymps besaw modus urvas marly knack goofs setup lorel polly leeks bayed jiffs grunt writs mohrs redye gutsy leary cided patly soave stagy slurp kapow sacks derat dores kivas tutti trems diels sojus duels taits amble arils butte sakia eruvs thuds peony stale notum agila mazes pilus arsed lotah jumby slosh colds wived macaw sooey sordo glary adown awake mists hempy yappy quiff kirri loped sawah porns stele zippo doorn cobza sowle unsaw allel shaky educe tithe glass ajwan mavin bruts fares frabs today raphe mirin choom solon madly byres resaw boxen lyams bahus pouff jinns budge pujah bobac crunk paned idola pasta irony imshy chard rivas fenis cohen stalk dicks agrin yurta arefy large codec belch trull reoil mesto visne lahar mells yoghs wicky onned poach wails tipsy dewan ruler kvell fable yages ileac false gurry debag until hongs nulla domes chats dosed vomer cuppy haems tymps boost wharf crost losed aspis sadhe zinke razor saist khaph wanze kerry teras yeans shiel twire nomos moods sweed kents sputa halal clary baisa tamin smeek ileum tuber skulk purin wigan graze staid jamon fovea chank yukky gippy axman paolo puler hangs tzars slide palea teins cinch roper liard modii neems marra coast dimes glams jammy thews linch bimas ambit vasal party fiscs horal roshi beare hoxes sills siled atomy tarty grike hokas jakes duras kolas campo topis mould terek tiyin prese blond leave rudes muirs droob gerbe tease mixer leady vrous kedgy muted mocha alaps arroz pools seams thack kaput juror creep rungs zobus reals hoick logia bayes spied fitte saran durns solds fanum dunam staff roguy educt cadet limen magma fills bosie polls point bendy piths mirza whets ethic cliff nugae starn cotta fated jumpy willy tabun wides bason indri japan dimps melee salue odeon winze squiz naras spear eliad padre gybed aigas slane orbit angry otter acred busks winns caned clans diyas grume karst jokes blips hails aulas dempt usque fubar courb gonks zests birrs doits bowie lazzi ovine hilch tizzy festy cleat ruffs lomas runds ghoul alack songs uncos bruin craig avail veery nuffs toons kooky waked papaw bitou rewin decks donas brins jewie tronc nomic twoer fancy siler aguna uhuru fleme flawn photo apiol maims loper etats momes brees husos skags serai cline ahind loued upbow felts scrab colts frown hullo rybat bruit tates reins crime gliff geyan spahi fluyt racks tuart kazis repos chief curia fezzy fifed direr jazzy slats rubby toman zines razee yores sewed olpae dazes sonse loses bedes wavey reffo doris valor faker rawin tilde ayont drook murrs emerg trior tuxes inust gyral padle rejig shave elint missy suint khoja farts fungo erica loche gowks weise barbe bacon debes cozes voips chivy gibel idyls kheth vraic gings giust bowed herms exeat sapid waits muzak elope strag swelt lynch sales stuff hogan whelp sheep rizas above owlet curve bunas trabs conga kimbo poofs kaval sonne veney doers hecht poeps scrog jujus saags nomad rumpy salse rainy plues butyl jiffy argue muggs jedis nance cense chimb lapse glits japer gates ravin ology eider puton yacht manul midge peyse nabob sturt mesic fiats smalm pecky outby kenos pores heeze beget paoli paint miche panes rhyne kench waved loury deere attap rerig bulge derma keyed lyase annoy blays nerka stall kubie gloop atmos feods stoep parra unlay heugh sorus cibol primo kneed jones bicep dimly woody poods roted dyers waifs feyly ungod pings clift sheal copra epris bagel noobs doona motts booky hocks brads gaucy caeca duars sorta trove flaky tonne kuzus wudus ranis dilly tomos thegn newbs geeps tooth ayres gaumy yclad loord drums lisle heady lives gotch laich selfs birks amnia vizor leuch ender regal louma kurre baned evets ottar tyers gigue dwaal hissy touts taber soaks peels deked khets wombs malmy crems sudsy upran towts blitz kaneh senor dykey taken glode cowks bolos unaus emule grads pewit forms olein quyte tikas lense sauts eldin binal piano piani ladle asker skews cadis salle throe dures eigne crame crush matey dewar sagos rakia lawin spifs cines allay junks rinds jeton spoil kapus caxon braze minke graph fleur pipal women mimes aizle lotes corni stool holts wroke jowls oasts lusus jural arnut zatis ayrie relie biogs mitch early niece truly knags geyer galax vails aimer gormy divis leaky windy fetid optic invar airer cameo scope moobs cunts stems rogue xerox knurr retro woven numen antae shads mined shade intel lemes droil gazon wands urine prune sorel frags gills taxor amido silva mound nisse predy pukey pests shape bonie remen gebur fremd pises shero shyly wried swaps ivied gyeld bloat toshy tafia hayle herns riles sense aster dimer biles sloot puddy udons norma offal barby meany knowe alure pacas bonne carer bowne skogs sails lills bunya porge gummy punny nohow avise slave gamas unais sulci flosh bwana blaer ridic bunco lapin moyas nifty anomy mazer aline kusso imido yucch zanze compt cloak sleds faves mease atony thale aviso lyart siped awing pride manet berry saree befit ratus urges bulls troys oncus doper tapus ronte dukes soldo coost wiled eughs drays darer scray ailed poppa vleis phene xenic ounce midst still pshaw omlah hooty pubic durra parge lacks santo ruins dawks shack wyles gorps toyer gonch afoul shily choko izars nolos kafir infer agast drail kissy selva dumbo liney broth stede cions swobs gamic flegs vinca rules redid hebes carks slubs lager breed auris sicks hulls kiaat barra evohe hanap tined looky seize night wider warre imped peers shahs holed mohel fides lites unman recks maker avels fused rolag sekts mafia litre snuff peppy races roops nurse ansae poops toney lezzy delph dered shays basso yauld lauch plies folio dacks falls stops sayid caper hammy ables skiff lindy bazoo scent disks coofs fyles balms indol borak lawns wrong zendo jotty snaps maced debel poynt yawns ensew cogie malik booty degum sedum ratty could theow conin duchy toxin bodhi lingo betta hoped bobak outta sharp techs kiley apism manga guise knout daiko dwang ervil skean menus wales fiere jupes rebel ahold filed caird witty zimbs yowed smoor turfs fetas hevea cades dowps haves ourie capos ouens hijra shrew congo pirns apeek hashy longa cyder stein tippy birsy cyber reans pecke tabes union tirrs prier sukuk gassy woosh drunk vitex melba soppy claro repps hewgh elver moats fique dykon quint genua chuts galut unbag shope gluey yours unica fried nirls hoves joual bever yokul lawed roist huzzy ornis album locks herds rubel tahas leear amaze cohoe podgy howls skets deity soken quine hazed chawk ditsy waken cauda oracy limos elfin temse yarco blude seare flams scads guile wacks cloop speir pavan umbos zings enzym fence glias bevue pappy cager polks elans dumps boils upbye amate lined feria ritzy clavi sixte zazen bingy nduja hadst idler yonic tayra grift disme donee opepe spunk howfs kited frack bokos jambe wenge aloos pinko glisk recur derth gamin frass vouch liman serge depot cubit rower koala apeak logie acton terce kexes linux godly palps louse tusky flyby dared misdo laers rubes unbed singe borks musar thief zanza cilia whisk slart plied skelm adopt bowrs adeem neeze kopek allod erick degus heder fohns letup tophe ramin capes kelty shogi stack vampy typic hanch cimar gadge sheol tolyl butle fumed filth clour pleas wacke coarb renay desex vitro cello frorn fifis aitch uncia plans poort lazzo vibex crepe rough banjo moner bikie ramen ragga rudds larks boles boohs boded scail brood meted rowie pikas zakat gipon feral ergot lazar haute lenos serum topek poked hauld dopas kempy wilga rared sycon timer grith parev biled stime tardo nagor ummed wheat ameba jeans humid loyal fords likin cargo adits penna jucos cotts nevel exuls newel speal pally mobes talpa probe blert creel taros coits toque volts gazes kibei nudzh reive spiry scena isbas glugs luces zaire serfs teens vaded jeune yiked cripe araks humps enows ryked moove proin scans jests pyxie steel bosom sites alate okays parae lexis cluck lores okapi flail fritt cetyl vodou trooz aquae sappy mater snoek camos force vauts snell mudir await chink sambo voled laris roily aloin stars motel amowt tuyer plotz stook undos temps birds chili kumys gecks bigha fagin hoops pooka kieve douce omits picas moggy ranke ended goons perce louts pager baked mumsy undam amour locis adbot doums doses baggy yewen loons misty breid supes esnes welks colby parry souct tract comms sargo snirt liers deeds doubt laevo venom spims knive ixtle stork yenta dorba moria visie coils eyrir jukus voddy flota roons hoofs males skelp runty ebook kanes lauan fends slily yesty bhats flane tawai strew aspie tigon blats parle vardy hinds kiosk muils malar cruft dhals carry fauns melic seeld neons rerun roups beedi brine pendu nelis genes venin emeus bowet ileus peghs tweep blaze aways izzat abaft edile naval jaxie tufts enema grype yobbo kauri deare gnash baiza vulns pioye yests scoop ropes dreys titup zhomo ewked tryst voces sofas tines kalif unsay fagot pands jarta clous wifty amene runny nagas brick virls codas appuy curds pelon roofy uncle raper peeve reran paska miffs deets stude farcy calve dowar isled cross petre footy comps ghats salat fizzy arbas slaid bumfs nerks sizar nails cores aguti sawed veale varan tenge honky weber bogle axite wiles kyang breer orgic busti virus carol endew ankus surah siege pacha taube skugs jabot gaurs halls napes sused telly weedy blams firns feart gundy arnas thins farls lurgi sheds kilns zingy orzos balls moong naans dweeb ravel piums shawl sonar fleer mured baffs solus busky achoo skegs skers tendu bilgy whens acais waled farer spect dingo jaunt ovels occur culex raxed roopy micks demur taupe fluff bhaji tegus karma duals kangs ploat braws gores riley seedy twits douks kelts swerf fusts shola limey umble spurs mufti fresh nolls suety renig bunch zebec mahwa sures yills avant faces tupik halse kluge fanga camas glory kyack gares toxic mommy ghast topic refis latte elchi filos aiery dials mores gimme cabas theed roins devel filmi leash trema sebum blunt maron orcas prick curat borde havoc altar radge turfy anile tewel rojak ciels speck weigh blunk voile neese bungs clunk reeks yabby tinea nahal gibes beefs pipas mucid visit voter bimbo fraim areas duper pelau banco lyssa queme fyked waxer satai brant ilial macho emyde wauff hamba gyres kudzu wreak vying lubes crust redox stell haets menes quino throb thanx lover hoppy story cogon minis geals ficin enate skeos hocus risus nappe gasts gulas hight symar reeky pooed wagga gawsy bhuts gouch react vilde ryots spail sexts morph doole urare space wordy yakow zoeal sexer dorts manes emure wends tonka frats exeme uneth lings yokel morts books tuism unlet krang yechy hilts bunty bling malis dowle tanti angel abear arret gules foehn zombi wurst meshy nache brail rumba views vivid grout vaxes amole spiny delft gavot hoing meers radar cough talma zappy sylva grein trave brava jumbo along spyre pluot snoke mbira nerdy waker hapus asway ahigh mocks scrag loony ohing skint turme feoff wafts inure doggo speil dalis dongs layed boxes gryce avows lapje fixer karzy pacta droog timed torah plash corky lagan tasar shmoe hopes radon zoaea tiers nubby ootid realm pelta filch psoas lovat laksa vangs smoot whiss judge moxie crays foyle nexus enrol favus zebra dobla compo russe skill frump iftar tabis foals eiked nasty lunge mussy chill azine epics slabs whigs cases calpa sarge twiny ponds subha labda tozie wries rehem lares hully shier vozhd sexes mitre naffs grame towie wader cants chock lowed demoi tided thang boons bugle snarl impot sifts skyed bilbo jiber chaws slung nubia potts goura malls clapt sorry whilk tying abcee kilty milor break doest psyop gived armer primy folic marri prows takhi fogle afore racon potae shoat pasty mirex bigot arete veily sahib myoma squid oonts poyou netop clows games darts strep tweet occam clink slays wanly argot apply poovy xysti torot tikis feese bydes waffs bolls inane naifs kells hoard patka chart coops serrs samel canid tryer valis molls tacet tenon homas louns theca rumly oiled bursa mulla debut bonks hypha premy aarti hasty kamik mooks milos beefy smuts sabed toast patte logic hazes wormy bayer pikau jeely salsa aloha snake cruor iodic mises wuses cunit baric basti spued tepoy snipe bigos cones yexes mezes soddy untie buchu toter grego dashy tasso miens icing osmic bland piets goyim pears jasps staps doree ceria abord boxty morns datos grows shojo sough roble owled puked leans admin booms email selah sixty slipt comma sycee thens hoagy hydra decaf jilts turbo mokes culls bords neals gaffs gimps hemic lurve goopy culet peize punch birth colly wakas nurls harsh wired dreks scuzz foxie flans aphid there tenet biggy gaper weary quilt snide enlit noyau ponzu quais rhyme hayey burnt norms qadis ticky vapes azuki scuff piggy heath woops locus wares tommy piney demit clear tutus oohed kisan alcid jarks dunks halts menad cauks scape sting gombo comer kades quena druse steys bared pikey abohm tokos rebuy gaped wanle shwas dhaba jelab matlo kamme moire sepic lases ousts primi diets escar sculp miaou moers pumps sends dhows fiend wings musks moras swath whams progs yeses grese jibbs immix femur shand jaups rosit dorse tomia temes spiks amici musca dumas clamp abris soyas sears schul helix alway pried super uraei tarps bathe scuds pagan flaks adman kiang veeps calks felid slurb gobis curio awner trans tales shaft lumps telia thawy bobby botty paspy acers kists kefir jorum inter coons ramet glaze joule unsee abets surfy hired figos zaman shake galas wipes bucks crews vinos woons hajes wagyu types tanks whang oomph lumas chais carns lucid tabor guard grade bundt appro vezir sodic ovolo chubs fleek goers mayan alaap bands dadah spags amnic impel keema feaze poufs tavah spork afrit girth logoi ruder haste bumps sloth upset baboo sdein brook deers ghost omrah geoid nomen forme putts derby saser douma geeks bindi potin filly newie slade naker fared vughy biffs pogey fates wilis nitre sewen proof swart frati basan muled shorn nyaff dodgy bulla outer zuzim snowk bokes plebs poser leese oscar widow gadje halfa snuck vuggs azure muras chark mused nutso whipt guide mamey jagir names suhur bhais paris plena daman antar brusk mawks spits zooks staig jemmy tasse jouks meves mixes muley lound trons sixer leper deevs thugs ivory biccy vitta cloud suete lassy taper vapor atman pizes fetor laree becap zigan bajan boule tiger debug brunt atoks picky monks hadal lemed yogis minae upper annex paces yamun octet joust vests among armor rearm hoise cooms plebe riots awoke skyrs germs rugal merch north tofts shama nighs cagey glout disas silex sools court onces lowne fands spite labia buses nitro pupus blind stuck kyars gyred frons payer goldy shank gawcy dwaum glims doozy perve pzazz howes nooks vised yomps oread arets fidge built elsin fabby guaco blive tirls vanda dawen spelk admen xylyl burls fowth filii foins jeats threw glads fawny nimbs rusks anglo gager chave gelee murre abacs scrow amlas senti sepad inerm using jesus tuffe fease luvvy minus finis trank circs syens roque inlet jeeze remit dagga cloff casco hepar blast sonde hyleg honks lurks pyxed henry gyved quipu mirth wryer soums buddy blype agism lilac rhies stela cesse centu guava fault dropt ovals vamps rubus femme lathy grasp meets rajes topoi hoser mapau mihis smurs tubby neaps prawn aulic fouls roots robin haded jiver ching coses frore gopak tubal saber tachs lilos hajis tains sixth cramp freak ungot dooks firks attar share flips apsos tummy dampy pleon dorky snods blits tarns aural mezze palay lamia mulsh haiks feces later moile clack noirs trout farle attic fisty apter nongs oupas clogs raree begin betas naevi mumps pinup oiler reels gland luxes tacit rorid vanes sorex ictus golds spald aurae yeven belga woopy anted chert habus purty bolds losen estro troke moste rager feint peans stoat roses nitry yogic hinau voema dries foots cauri snaky metro fusee sheaf rumor sweel veins lezes vauch tweed helps nizam swopt askoi knits scogs mercs zaxes jobed beset bewet coifs saker anise urali gypos torii yowza purrs pouke celli didos aired strow coyly ticca verra sensa rigor rorts bests trild dexes razed opium sprog quote kakas letch avgas sandy ouphe rangs twier hilum tiles jotun ducky mesal venge kaons yodel kyats roils boson south bimah lento pugil drops areic vitae signa withy lysed azygy waged duroc ixora shirt metic furze flack bourn roton mixed oleic maven bocca narcs lewis adobe usnea mulct ocher habit keeve brews testy petty tythe byked takas waxes ephod jimmy craws robot wamus umras gamma feyer chout scoog styli furrs reach flaff ditto wispy cleep sewin broom rotes dsomo taals pitas ralph mutts laith matza twigs amend solum smote tames erect limed salal goods bluet picul amyls flash woods losel weems calid blaud ninth wocks enter rindy reave ditch yokes jowly acini swore nummy gript leugh urial sents nouns parks cetes jerid luter lushy pates eying stays herse sture kraal lints dewax mutch donut rayle sweir gloze franc yikes sujee unary loams chays jurel plong balky easer dreer maybe frate spaes pelfs sauce ceres krays unfix copay boric dowel whear coder naric trade odium ether tutor lodes liger coins drusy quill palms capot dixie swank yourt abore fluky heard accoy imids tazze piked pilao sceat tepal salad retie spans cribs delis fixes eruct blart thesp opsin sykes holon yabba yarer prize jisms pirls vexed paves soger spode vairy mowra boots incog beted hints drugs keens yurts miasm kutus dross munge fonly luffa tints barks gabba corbe rooms erics gruff dater loach slows study uredo touns helve pated wheys hales hause alpha manna cwtch lovey laxer rangy widen umped flirt snaws ouzel rouse glady gobbi sista screw ofter oinks rumen paras meeds ahent snars ivies trays jocks short toise shell fries metre waves moues amigo teiid draco ysame macro kebab mosks tyran stoun virge lovie demic daynt kuias roose deads towed eager jetes bonza canes zonal duvet axion smock admit yumps raine loden muxed grief almah swill clave odors codes moved sehri plods oundy chase rotor hings bortz steem abmho ferer lolog gyrus rimed cutis worth serry sinks deaws puled maths gimel royst drere privy polys rakee tarry terra unbox slish motes neist maiko sials whare syned sheen juked suets blebs chiks cobra chyle theft enjoy hacek plage himbo motey herma pumie viral gests trios allot skald resit finny feued major drome avens moled peons stong myall tuina natch butts canso kondo usage pucka heist drent entia sneak faine myops mauzy metal addle sunns zoons state peaks ceils blood mhorr cippi babas paysd boogy glibs embus gloam doter haafs kohas fusks hongi ascus bulky posit gappy pongs inert gopik print frush scoot dowdy piece stopt cohog carby oulks misch awmry dived trips qaids blurt stony bards growl tical tones punce cacas ampul staws hooey purge jambs sopra quayd petar semen phony touks sepia gairs aloes elfed retry jures atimy dream druxy waulk minar tanna mozos laval delve caver brust convo clams kutis serra rains fient fruit gryde dunce genic flunk curdy jells pyrex afald zetas skirt softy daris sways doing artal debye walls ooses bedye haram ogams cuing souls rases mokis ylems brawn lades slued breds grave umbre livid girts loave noddy lisks broil ostia knife dibbs going khans molla aheap togae soups vatic kokra phons hoary tynes derro ephah musos debby pawky sorgo agent blash triad parky tinty polje niffy wauks hilar zloty yucca rajah retox foils palls aphis ortho krewe ezine pubes mysid riven hosta kagos besot jived mimsy krona duddy sweer aulos mucks plica barca urate feign elpee yawed oxims skart voice kazoo livre miros frier woold incut subby puzel anele circa garbo sangh hatch greek cuber neigh aldol licht cecal grebo pawer riper etage seise fuffy prove goats ronne tansy pupal sutta tacts rawly talon derns tuile kaies sampi gryke meats hertz sabre jumar unhat tolly obole linny yonks aeros hemin depth adios plops padri gonys steps ylike learn gurdy crisp eloge tugra spirt mojos tries powre slorm toady scums indue brogs laugh repay inbox botes duces luxed thick chums slomo segos ranch pikes samey rolls baths pibal fluey beath chapt morra fosse stonk gelts vaned emits simba segno rekes rabid brags vendu bogan toits pokes loups horis algas binit roofs coypu shims rents hizen flisk wetas hedgy greys devon ploys wynds hanse shuls paseo abuse viols rozit vells guess skies tubar zedas ultra doric pudgy rakis typto duing sysop river bawns hokis sames benny bocce zoner grone sipes milds suers nites wonks senes preps furol trass nodes jaggy ovary blags feuar facer whaup cusec tells oaked pewee bitts jubas throw oxids cults bobol pupas dreed raupo haily bacco sucky guana fjord renew recut yojan soggy recon howks vogue canal vutty manic gaids preif cyton cosed hemes cheek alefs tolts amply riggs nuked dorms hilus haunt imams roues squaw sheas lisps agmas strig tubae eaned deman fudge plain terga femal doxie debud nunny delta wrang kikes aglee bread gaums clomb niger khadi bidis liver scend isnae rotal whyda shuln curch fucus ashet sayne sobas knish smogs swith cents eased tents piony glent abyes peris happy miser seine buffa impis sarod polis vexes ugali sever earst lavvy grued fugus leses freon tulip ytost kaims inorb sixes bison jerry juice sicko round medle blech ionic scran plews hides sands iroko wootz cured astir laker ydrad sleek pulka goyle coact hoors pekes zaidy fiber smite legit porta snugs steal cavil klett sunks segol benne truer glops ginny urari leeps garni chace incle porky gusts lours abers dicty zonda cheer skink hoses easts seeps ulnas jooks zante ajiva sprit gucks stirp kikoi wilja bachs goafs reird nooit beret gaddi spred reddy eyers pales humic trail latus knock chine stims femes esker unity tenor grimy lofts arrah robed pluck malms curvy faffs cinct firth agers tagma slags tophs apple laser azyms firie houfs tally acerb crore flour haith marvy raiks siroc conch waift narky facet wrate medic alley wakes preve quims azons stowp solan aggie heths right amins morae forky ticks anyon frost tased nerve sucks recal tends lands flaxy trope quads blore block dolma nuder adorn skeet stark gyals geans zamia pommy monie sasse dault softa tatus volet cedis delts helms yowes cozie lotto spues crack targe goras azole bossy winna yells caids starr drony hover squad zilla adobo rocky butch pigmy atria abase drawn eyres yoops hoper dunch bails vlies festa bield goral onset glift cafes prads sisal atrip tenue humor dorbs chiru groma wanes cling loofs pagri crier gable gnarl brise tilak stags womyn sugar griff mouch exome model whole bipod whish naiad teary weald molts stots mobie diced fluke paisa nemas nudge necks vomit lohan hovea sango notch semee redux knots lithe praam trogs mavie gobar scour loirs towzy izard lupus pedis ketch chose genny gears chico bwazi combs bayou randy aunty ideal stonn khors judas usurp levas fuffs cycle pioys woozy enoki sojas styre usury jonty exine flies gunky alias rumal shiso korai pence wench burbs pebas aldea hafts smowt tuple cuffs waldo mynas golem baccy litai yucky anils oobit mosey paedo pulse molds mixte peart ydred tetri chute spake lutes arbor hater dhoti boyed beres orgue matte neeps cooed talcs fairs gouts romps nkosi ikats chibs hiver juves beton valse rives hotty globi doats cysts addax brung lobar narco bocci potes clone mawed wexes tawer seely spend tiffs gauge haply timbo truce muter sowls hobby plast boink wooly boeps sakai lefts dalts chufa gloms kraft dwalm benis whirs bodes regur baddy slope karos thunk bises latke tifts bitos harim filmy bring herye shish nowed ummah walla churn flong acned manis motty shows balas coble welds cooky barps skyey revue dohyo fanes poons raits durrs patio sedes rammy jodel vares virtu goris wheep glost cadge pieta volva punji shalm reggo eniac ylkes trice parve quasi scowl olios buhls derny abrin kaids unhip reaps stive xenon culms hulks kiack moper pixes lavas zowie skees gulch urbia flats sweep aiver sonny mucor haver poled limbo pipit masas verve gonad quags hents hogen heavy alods farce corms tinds clerk fiqhs acids gonia teuch packs quash devot slove scoug decal diver amrit lutea pinta tawts cloth seals alvar gadso quean eeven larva scala opals boffs pomes papal murva hikes gazed spats biros herls colls samps makos eorls foamy droop infix sculk karat dwale crips baize equid scald porks gapes panda istle diols fuzee sered sirup penni temed yodle vrows deles worry dolce zygon spaws tacky setal dholl tutee popes limas tuffs blimp groin salop sagum curns leggo besit stang siens tykes lubra looed botte clype tavas cords curer bahts lethe routh fubby musha janny ammos dunes glows caped baker aecia kawau vower swile muhly viner ewers bekah wekas nomas shred bated count ettle kedge swapt fones teffs mofos speld apage arvee axles nairu emote combi bardy katti cache knobs costa deter viffs geres chain mince nates limpa marid cymes ancho shoal intro sties geode punks refel riels ninny chair swigs sella cause zexes duroy mings monde triff fural jewed cajun quaff ainee tripy mazut dools jaspe rusas kines spews dites reame abyss usual ficus boody moder bidet rowen kilim hello saros refix savor awato joram darzi ceros seans gizmo servo proll gouge ovist pends splay facia hoody orfes raves ascon touze samek stott enact cater onlay kanzu boggy acidy fanon snool renal yirth orang wytes rheum bolas targa aboon comes immew soled takes alane aegis snack tsked tangi reccy uncap melik rumes jacks baits mavis amnio buzzy katis items goold wyted stoai mudra zebub kendo javel drabs sluts webby neves saner smaak ethyl lairy plier milch borts loids hippy volve inion nipas chive oxeye parse spins bless marls yapps sings aargh rewed titre wheen fames brand deans fader floes sprat ulama spier scurs getas inwit elbow layup shute swell saint cutey kokum affix goest stank brers vulgo check sured burst reifs besom steme egged blume vitas needs gynae grind chide olent cleve calyx sutor bafts gauzy dacha balks pease frows brose bleak tways tonal skips guyed guids endue thilk darcy doser neele flume geare found gluts furor boned dumbs daddy sooth wisht ronde needy esses lesbo pound boyar edict pipis gulfs rubin trona newed adyta koses aunts calos jokey stare horks plush salic wiper hazer chode ovule vigil dawts kibes milts bench miter noris seirs nalas stair meath aggry dirls stole borna onery press goody dilli snows belar droit diker smirs plows grime swink grece puers chirr harms kinos capas traps scall goban risen lunts moors brits coned shchi viand maize runch trefa pavis rownd ulpan nixes yeast taata forze waurs suede abaca ferny cered teres ocker gouks doyen epoxy clown zoned lieve lazos novae yourn piton gabby carom retag domed grosz hussy cymae ident coral emmer sally sdayn sayst makar cutto loafs pokal myoid ritts skyre blink aided earls ratel pages mzees uncoy divot jerks guars ducts films anear deice dints nucha couth spade twats gruel etape lobus fecks stupa shark rifte bowat zlote hamza conks shops lowes rills kooks pyxis robes reais carob oumas kithe teggs swops blubs areal recce hance syker helot fives frugs gauje cawed uveas murti kerns gaily swack meynt manto clipt blimy alary benni grate horas slice verst grrrl momma wheal ratoo torta nears ogmic stums laiks lanes klutz ursid spies yulan amaut lordy slush whits ensue owing massy spaza laces jimpy tarok feast novum entry nieve cotes lemel erose blets gogga setts chars abaci pooch mopes pippy katal corer xylan toads dubbo naked fungi haulm chick snyes hitch mpret navew crypt range nicad meril adage mogul assot crapy natis hokku lowns valet areca riced morel gales bakra pohed skirr comus apgar ruche sworn begot horme coati viola karri deids ksars donsy sulph clint fugle drape drant apish thuja agita relax wited horsy reefy lunch scuft waded ozone shura obits cebid heirs after bunny pulik spoot pylon banns biped bunce titty andro james chewy velar lodge pardi alist limps paper sprig booed chord zonae nurds omber chime tinct quota orixa drags pivot wifed daces ashes argus sente dryas anigh dalle damps skeef panty spoom kohls untax dildo yanks frowy kotow pithy haugh belah zupan senna bykes idled anion graft knows aghas pursy figgy aimed euros poulp etyma brain pross nutsy gerah agley antra maple pilow vined sober finks thous tatts shush meffs buoys halfs tubas oxime rebar dedal renos nertz estoc unite midgy farms jarul leapt mucky chynd knave biddy rayas grins raise yeeds brede bowel fedex snare idles stoor fluid bobas dower prank spina roneo wexed pavid neemb uptie emcee snick dance eared styme pacey dormy tesla tater twins mines shend ziffs meson forex cools veiny troop maxim amain baaed aeons sooky grund aides rages akene hiply rumps globy telae spate taboo clads blase halma yeuky angas abaka slops doles dufus reata polar ruble locie gaunt mourn koine tomes gluon dears kranz scram wrack exode banty tilth hakas ungag snipy warez wadis shirr fogou harns aunes snead quist whoop gigas platt butty laths cushy woman shine legge floss sophy raggs jumps smush lemon modal brome doges ponty slant malam toils shaul sechs rugby clout seame chirm vigor biont luted scaff khoum sumac yealm whirl pesto sloop hairs rhomb gooks pilei maneh exert bolar sawer pupil savin world groom situp rased lance sinew melts boysy brass soare brods baals midis plouk couta spayd borgo fiord knoll bints burka arled alays colin brent cruve shets pouch bakes veges loots babes feare jukes shorl cubeb amens strak orval dosai afars skate pakka loral whity grens align reast sleer plumy loric momus cnida buaze phang twang knawe choli dried gleba gipsy azyme awned hanky gloss melty arson sects shove atoke ngoma skran luged oping deoxy lolly grice hiant teene hazan abler argon reiki maqui derry erode shule hinny conto tilly larns walds tungs dirks peaze vocal began dopes bolix mucin piers metis kibla spets dated sigma gride uprun fitna thagi uteri dargs yogee unmix cloye stear saved stake taxer kokam arena fleas sated flics prose shall spile sidle jomon filet fayne bices bufos welts freer tassa krill glean umiak terse fatal spuer agene tuans refry yangs gulps white ogees redes feats coots phare zoeae rived kebob garre plant katas clats alike romal scrub talky alone drink agone denet myrrh agood spice xylic gongs pical looks dabba ariel tango spacy ngwee grits laves plane dinna asses gangs cacky humas bytes netty bigae riant pepla witch kepis moots ditzy smoke shaya gynie sluit assay corks mools while eusol goads cowls glogg covey slips loran panne clods goels seron carle shied dowed lulus hakus erbia arish oboli axing stave vires dukka pappi jehus spivs exing shans bylaw incus peeoy ferry narre hoggs polio shive omega shool beach coals grays ledge kitty fools trows refer afros grant furca epoch bride vivas dovie wiser lyard sohur vases climb pisky shook vials yeads thrae serin fango puffy owies tophi offie arhat salps saves kandy antre bozos ulyie siver mudge roles seton ovoli therm strut talls clept salix voulu siker vichy icons rowth piped ganja larum zurfs daurs chews loess kehua brink advew kelly cento teems tsadi ovens reiks aliya etnas takin jeels tribe pulls strad start front pokey veena arpen sarky enemy benes firer maria toros merit hoyle pangs cutes palet tacho viers fanos wimps puffs nosed boeuf pixel allyl mincy tapes afoot obese animi goosy missa jagra gator neafe korat squat nanos pulis seder rayne briny alums licit heled curse visto keeno token lader pilum yapon levee remap chela niter truss spent retem micra label slain elute gooey skirl relit thuya chana crits edits emend bourg spike maise borty jibes modem phone merse fryer speos prest tramp yawey lever varia plaas yarta saics tinge betid lotus fillo liter hikoi gleys gybes aleye kamas slaes fordo blees withe potch incel alfas tanky hodja bawdy gamay druid jaker ramps bucko sikas shawm bemix troak build kukri pearl kyaks flamm lamed penks steds taste wraps pones cairn fribs limma cawks perst freit machi kings parps scrae brace poddy teles obols whoot zobos updos datal gowns choux mired datum barmy bromo rache ippon busby alkyl azote nixer recti poxes freed ernes quant moppy sines dodos darky swale updry gytes tossy tromp skids noway wanty boron emmet shits elide ached spial kombu bloke cavel gomer ribes gilts kytes puses peles rusma hymns powns saucy kills middy endow welke slype lurch amirs bepat lumme frets nodus munis merls sains kievs chimo snarf parch kites upter carts skoal poupe fesse jihad diebs armet abele micas yarrs lures hinge hurra talks zaida lyres speks pinks nalla halwa upjet slier ferms actin balti sonsy hends siren aloft plyer betel kerne ouzos sixmo rawns ulnar truth avize godso deils teugh tiars lunet ouped thete hosen thank dants syboe buist meins woken zeins chuse ligan wolve dames baled adoze aorta kicks skeds roads beast rated silly flors croft hares nisus sheva kynds orant kidel walis nebek ginks waned cavie oculi bleys fuzed aygre laird goaty marry snees maaed dight darns forum stoke micro wokka eilds lossy koros royne dices butoh ratal marks speat inspo leres owler times tangy alder moths molas pling hooch arced mural comte yagis cardi woofy keech quoin plead caphs lymph foist clasp desis soaps silts serif ungum mires cecum emoji bates roams heids rhine brims modes carls merge vivat bantu sprag vigia buffe stomp cobbs biach agloo damar glees reuse runed gelly nabes ecads casas gisms posts jinks warps dwarf teths algum exist diene honds flava child deawy below thyme clast agros paced rewon teste unwet kobos mauts dinks claim bough molar varec yeggs flask alien fuero crept braid wains doseh vizir regma`;

const WORDS = [...new Set(POOL.trim().split(/\s+/).filter(w => w.length === 5).map(w => w.toUpperCase()))];

// ─────────────────────────────────────────────────────────────────
//  CONSTANTS
// ─────────────────────────────────────────────────────────────────
const WL          = 5;     // Word length
const ROWS        = 7;     // Maximum number of guess rows
const LP          = 0.25;  // Probability of a *second* lie on any guess (first is always guaranteed)
const TIMER_INIT  = 90;   // Starting countdown in seconds
const LIE_REVEAL  = 45;    // Seconds of real time before a lie auto-corrects

// Hints are NOT given upfront — they unlock one at a time as the timer
// crosses these thresholds (seconds remaining on the countdown).
// 1:10 → first hint,  0:45 → second hint,  0:20 → third hint
const HINT_THRESHOLDS = [70, 45, 20];

// ── Tile colour-state codes ──────────────────────────────────────
//  These tag each tile so we can style it independently of the letter.
const CC = "c";  // Correct  — right letter, right position  (green)
const CP = "p";  // Present  — right letter, wrong position  (amber)
const CA = "a";  // Absent   — letter not in the word        (grey)
const CF = "f";  // Filled   — typed but not yet submitted   (neutral border)
const CE = "e";  // Empty    — nothing typed here            (dim border)
const CH = "h";  // Hint     — auto-filled correct letter    (blue glow)

// Priority used when updating the keyboard colour map.
// Higher = more informative, so we never downgrade a key's colour.
const PRI = { [CC]: 3, [CP]: 2, [CA]: 1 };

// On-screen keyboard layout
const KB = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["ENTER","Z","X","C","V","B","N","M","DEL"],
];

// ─────────────────────────────────────────────────────────────────
//  AUDIO ENGINE
//  The AudioContext is module-level so it persists across re-renders.
// ─────────────────────────────────────────────────────────────────
let _ctx = null;
function getCtx() {
  if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (_ctx.state === "suspended") _ctx.resume();
  return _ctx;
}

/** Schedule a single oscillator tone via the Web Audio API. */
function tone(freq, type = "sine", dur = 0.08, vol = 0.05, delay = 0) {
  try {
    const ctx = getCtx(), osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = type; osc.frequency.value = freq;
    const t = ctx.currentTime + delay;
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.start(t); osc.stop(t + dur + 0.05);
  } catch (_) {}
}

/** All named sound effects used by the game. */
const sfx = {
  // Key tap
  click  : ()  => tone(1100, "square",   0.028, 0.022),
  // Invalid guess (shake)
  error  : ()  => { tone(160, "sawtooth", 0.13, 0.09); tone(120, "sawtooth", 0.13, 0.09, 0.12); },
  // Guess submitted
  submit : ()  => { tone(440, "sine", 0.09, 0.055); tone(554, "sine", 0.09, 0.055, 0.1); },
  // Win jingle
  win    : ()  => [523,659,784,1046].forEach((f,i) => tone(f, "sine", 0.28, 0.08, i*0.13)),
  // Countdown ticks (urgent = higher pitch)
  tick   : (u) => tone(u ? 1100 : 760, "square", 0.038, u ? 0.09 : 0.05),
  // Timer alarm on expiry
  alarm  : ()  => [880,660,880,550,440,330,220,110].forEach((f,i) =>
                    tone(f, "sawtooth", 0.24, 0.22, i * 0.17)),
  // Hint used — two ascending pings
  hint   : ()  => { tone(880, "sine", 0.06, 0.04); tone(1100, "sine", 0.06, 0.04, 0.07); },
  // Hint slot unlocked — three rising tones (reward chime)
  unlock : ()  => { tone(660,"sine",0.09,0.05); tone(880,"sine",0.1,0.06,0.1); tone(1100,"sine",0.09,0.04,0.2); },
  // Lie corrected — ascending chord sweep
  reveal : ()  => { tone(220,"sine",0.12,0.06); tone(330,"sine",0.12,0.06,0.1); tone(440,"sine",0.12,0.06,0.2); },
};

// ─────────────────────────────────────────────────────────────────
//  GAME LOGIC
// ─────────────────────────────────────────────────────────────────

/**
 * Score a guess against the target word.
 * Returns an array of 5 tile-state codes (CC / CP / CA).
 *
 * Uses the standard Wordle two-pass algorithm:
 *   Pass 1 — mark exact matches (CC)
 *   Pass 2 — mark letters present but misplaced (CP), consuming each
 *            target letter at most once
 */
function score(guess, target) {
  const out  = Array(WL).fill(CA);
  const tc   = target.split(""), gc = guess.split("");
  const used = Array(WL).fill(false);  // tracks which target positions have been "consumed"

  // Pass 1: exact positions
  for (let i = 0; i < WL; i++) {
    if (gc[i] === tc[i]) { out[i] = CC; used[i] = true; }
  }
  // Pass 2: present-but-wrong-place
  for (let i = 0; i < WL; i++) {
    if (out[i] === CC) continue;
    for (let j = 0; j < WL; j++) {
      if (!used[j] && gc[i] === tc[j]) { out[i] = CP; used[j] = true; break; }
    }
  }
  return out;
}

/** Returns a clean initial game state (used on first load and on reset). */
function freshState() {
  const target = WORDS[Math.floor(Math.random() * WORDS.length)];
  
  // 15% chance for the correct target, 85% chance for a random word
  const flavorWord = Math.random() < 0.15 
    ? target 
    : WORDS[Math.floor(Math.random() * WORDS.length)];

  return {
    target          : target,
    flavorText      : `IT'S ${flavorWord}, TRUST ME`,
    guesses         : [],      
    input           : Array(WL).fill(""),  
    over            : false,
    won             : false,
    timedOut        : false,
    message         : "",
    persist         : false,   
    km              : {},      
    shakeRow        : -1,      
    timeLeft        : TIMER_INIT,
    timerStarted    : false,
    hintsLeft       : 0,              
    hintsUnlocked   : 0,              
    hintedPositions : [],             
  };
}

// ─────────────────────────────────────────────────────────────────
//  REDUCER
//  All state transitions live here; the component just dispatches.
// ─────────────────────────────────────────────────────────────────
function reducer(s, a) {
  switch (a.type) {

    // ── Player types a letter ──────────────────────────────────────
    case "TYPE": {
      if (s.over) return s;
      const pos = s.input.findIndex(c => c === "");
      if (pos === -1) return s;
      const newInput = [...s.input];
      newInput[pos] = a.k;
      return { ...s, input: newInput };
    }

    // ── Player deletes the last letter ─────────────────────────────
    // Hints are permanent — only typed (non-hinted) letters can be deleted.
    // Scans right-to-left for the last non-empty, non-hinted position.
    case "DEL": {
      if (s.over) return s;
      let delPos = -1;
      for (let i = WL - 1; i >= 0; i--) {
        if (s.input[i] !== "" && !s.hintedPositions.includes(i)) {
          delPos = i;
          break;
        }
      }
      if (delPos === -1) return s;
      const newInput = [...s.input];
      newInput[delPos] = "";
      return { ...s, input: newInput };
    }

    // ── Player submits a guess ─────────────────────────────────────
case "SUBMIT": {
      if (s.over) return s;

      if (s.input.some(c => c === ""))
        return { ...s, shakeRow: s.guesses.length, message: "NOT ENOUGH LETTERS", persist: false };
      const word = s.input.join("");
      if (!WORDS.includes(word))
        return { ...s, shakeRow: s.guesses.length, message: "NOT IN WORD LIST",   persist: false };

      const trueS = score(word, s.target);
      const won   = trueS.every(x => x === CC);

      let disp = [...trueS], lies = 0;
      const lieRevealAt = Array(WL).fill(null);

      const getLieColor = (trueColor) => {
        if (trueColor === CC) return CA; // Correct to Gray
        if (trueColor === CP) return CA; // Wrong Place to Gray
        if (trueColor === CA) return CP; // Wrong to Yellow
        return CA;
      };

      if (!won) {
        // roll determines lie count, r1 and r2 pick the target indices
        const [roll, r1, r2] = a.rand;
        let numLies = 0;

        if (roll < 0.40) {
          numLies = 0; // 40% chance: 0 lies
        } else if (roll < 0.84) {
          numLies = 1; // 44% chance: 1 lie
        } else if (roll < 0.99) {
          numLies = 2; // 15% chance: 2 lies
        } else {
          numLies = 5; // 1% chance: 5 lies
        }

        if (numLies > 0) {
          if (numLies === 5) {
            // Apply lies to all 5 tiles
            for (let i = 0; i < WL; i++) {
              disp[i] = getLieColor(trueS[i]);
              lieRevealAt[i] = Date.now() + LIE_REVEAL * 1000;
            }
            lies = 5;
          } else {
            // Pool of valid indices to lie about
            const availableIndices = [0, 1, 2, 3, 4];
            const randPicks = [r1, r2];

            // Apply lies to 1 or 2 unique tiles
            for (let i = 0; i < numLies; i++) {
              const pickIdx = Math.floor(randPicks[i] * availableIndices.length);
              const targetIdx = availableIndices[pickIdx];
              
              // Remove the used index so it cannot be selected twice
              availableIndices.splice(pickIdx, 1);

              disp[targetIdx] = getLieColor(trueS[targetIdx]);
              lieRevealAt[targetIdx] = Date.now() + LIE_REVEAL * 1000;
              lies++;
            }
          }
        }
      }

      const ng = [...s.guesses, {
        w           : word,
        disp,
        trueDisp    : trueS,
        lies,
        lieRevealAt,
      }];

      const km = { ...s.km };
      word.split("").forEach((ch, i) => {
        if ((PRI[disp[i]] ?? 0) > (PRI[km[ch]] ?? 0)) km[ch] = disp[i];
      });

      const over = won || ng.length >= ROWS;
      const msg  = won ? "CORRECT" : over ? `WORD: ${s.target}` : "";
      return {
        ...s,
        guesses         : ng,
        input           : Array(WL).fill(""),
        km,
        over,
        won,
        message         : msg,
        persist         : over,
        shakeRow        : -1,
        timerStarted    : true,
        hintedPositions : [],
      };
    }

    // ── Countdown tick (called every 1 000 ms) ─────────────────────
    case "TICK": {
      if (!s.timerStarted || s.over) return s;
      const t = s.timeLeft - 1;
      if (t <= 0)
        return { ...s, timeLeft: 0, over: true, won: false,
                 timedOut: true, message: `WORD: ${s.target}`, persist: true };

      // Check if the timer just crossed the next hint unlock threshold.
      // hintsUnlocked is the index of the next threshold to check.
      // Example: if hintsUnlocked === 1, the next unlock is at HINT_THRESHOLDS[1] = 45.
      let hintsLeft     = s.hintsLeft;
      let hintsUnlocked = s.hintsUnlocked;
      let hintJustUnlocked = false;

      if (hintsUnlocked < HINT_THRESHOLDS.length && t <= HINT_THRESHOLDS[hintsUnlocked]) {
        hintsLeft++;
        hintsUnlocked++;
        hintJustUnlocked = true;
      }

      return {
        ...s,
        timeLeft      : t,
        hintsLeft,
        hintsUnlocked,
        // "HINT UNLOCKED" overrides any non-persistent message
        message : hintJustUnlocked ? "HINT UNLOCKED" : s.message,
        persist : hintJustUnlocked ? false : s.persist,
      };
    }

    // ── Lie auto-reversal ──────────────────────────────────────────
    // Called on a ~750 ms interval while any pending lie exists.
    // For each guess whose lieRevealAt has passed, swap disp → trueDisp
    // and rebuild the keyboard map to reflect the corrected colours.
case "REVEAL_LIES": {
      const now = Date.now();
      let anyRevealed = false;

      const updatedGuesses = s.guesses.map(g => {
        if (!g.lieRevealAt || !g.lieRevealAt.some(time => time && time <= now)) {
          return g;
        }

        anyRevealed = true;
        const newDisp = [...g.disp];
        const newLieRevealAt = [...g.lieRevealAt];
        let remainingLies = g.lies;

        newLieRevealAt.forEach((time, index) => {
          if (time && time <= now) {
            newDisp[index] = g.trueDisp[index]; 
            newLieRevealAt[index] = null;       
            remainingLies--;
          }
        });

        return { 
          ...g, 
          disp: newDisp, 
          lies: remainingLies, 
          lieRevealAt: newLieRevealAt.every(t => t === null) ? null : newLieRevealAt 
        };
      });

      if (!anyRevealed) return s;

      const km = {};
      updatedGuesses.forEach(g => {
        g.w.split("").forEach((ch, i) => {
          if ((PRI[g.disp[i]] ?? 0) > (PRI[km[ch]] ?? 0)) km[ch] = g.disp[i];
        });
      });

      return { ...s, guesses: updatedGuesses, km, message: "SIGNAL CORRECTED", persist: false };
    }
	
    // ── Clear the error shake and its transient message ────────────
    case "UNSHAKE":
      return { ...s, shakeRow: -1, message: s.persist ? s.message : "" };

    // ── Clear any non-persistent message (e.g. "SIGNAL CORRECTED") ─
    case "CLEAR_MSG":
      return s.persist ? s : { ...s, message: "" };

    // ── Use a hint ─────────────────────────────────────────────────
    // Fills a RANDOM empty position in the current row with the correct
    // letter from the target word. Hints are permanent (DEL won't remove them).
    case "HINT": {
      if (s.over || s.hintsLeft <= 0) return s;
      const emptyPositions = s.input
        .map((c, i) => (c === "" ? i : -1))
        .filter(i => i >= 0);
      if (emptyPositions.length === 0) return s;
      const pos = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
      const newInput = [...s.input];
      newInput[pos] = s.target[pos];
      return {
        ...s,
        input           : newInput,
        hintsLeft       : s.hintsLeft - 1,
        hintedPositions : [...s.hintedPositions, pos],
        message         : `HINT — POSITION ${pos + 1}: ${s.target[pos]}`,
        persist         : false,
      };
    }

    // ── Reset to a fresh game ──────────────────────────────────────
    case "RESET":
      return freshState();

    default:
      return s;
  }
}

// ─────────────────────────────────────────────────────────────────
//  THEME
//  Centralised colour tokens so every styled element stays in sync.
// ─────────────────────────────────────────────────────────────────
const T = {
  bg      : "#0D0D0E",
  brd     : "#292934",
  txt     : "#E4E2DC",
  sub     : "#5E5E6E",
  dim     : "#3D3D4D",
  cor     : "#3E7847",   // green  — correct
  pre     : "#B8851E",   // amber  — present
  abs     : "#323240",   // grey   — absent
  kAbs    : "#1E1E28",   // darker grey for keyboard absent keys
  lieText : "#C04040",   // red    — errors / timer panic / timeout
  hint    : "#2A5A8A",   // blue   — hint tile border
  hintBg  : "#0D2035",   // dark blue — hint tile background
  hintTxt : "#7ABCF0",   // light blue — hint tile letter
  sigCor  : "#4A90D9",   // signal-corrected message colour
};

/** Generate 5 independent random floats for use in the lie roll. */
const rand5 = () => [
  Math.random(), Math.random(), Math.random(), Math.random(), Math.random(),
];

// ─────────────────────────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────────────────────────
export default function LyingWordle() {
  const [s, dispatch] = useReducer(reducer, null, freshState);

  // Ref used to detect when hintsUnlocked increments (so we can play the unlock chime)
  const prevUnlocked = useRef(0);

  // ── Physical / on-screen keyboard input ───────────────────────────
  useEffect(() => {
    const h = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if      (e.key === "Enter")              { sfx.submit(); dispatch({ type: "SUBMIT", rand: rand5() }); }
      else if (e.key === "Backspace")          { dispatch({ type: "DEL" }); }
      else if (/^[a-zA-Z]$/.test(e.key))      { sfx.click();  dispatch({ type: "TYPE", k: e.key.toUpperCase() }); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  // ── Shake animation + error sound ─────────────────────────────────
  useEffect(() => {
    if (s.shakeRow < 0) return;
    sfx.error();
    const t = setTimeout(() => dispatch({ type: "UNSHAKE" }), 550);
    return () => clearTimeout(t);
  }, [s.shakeRow]);

  // ── Countdown timer (1-second interval) ───────────────────────────
  useEffect(() => {
    if (!s.timerStarted || s.over) return;
    const id = setInterval(() => dispatch({ type: "TICK" }), 1000);
    return () => clearInterval(id);
  }, [s.timerStarted, s.over]);

  // ── Tick sound effects for the final 20 seconds ───────────────────
  useEffect(() => {
    if (s.timerStarted && !s.over && s.timeLeft > 0 && s.timeLeft <= 20)
      sfx.tick(s.timeLeft <= 8);
  }, [s.timeLeft]);

  // ── Lie auto-reversal polling ──────────────────────────────────────
  // Runs every 750 ms whenever at least one pending lie exists.
  // When a lie's lieRevealAt timestamp has passed, REVEAL_LIES swaps
  // the lying disp back to the true score. The interval self-destructs
  // once all lies in the guesses array have been resolved.
  useEffect(() => {
    if (s.over) return;
    const hasPending = s.guesses.some(g => g.lieRevealAt);
    if (!hasPending) return;
    const id = setInterval(() => dispatch({ type: "REVEAL_LIES" }), 750);
    return () => clearInterval(id);
  }, [s.guesses, s.over]);

  // ── Hint unlock chime ─────────────────────────────────────────────
  // Fires whenever a new hint slot becomes available (hintsUnlocked ticks up).
  useEffect(() => {
    if (s.hintsUnlocked > prevUnlocked.current) {
      sfx.unlock();
      prevUnlocked.current = s.hintsUnlocked;
    }
  }, [s.hintsUnlocked]);

  // ── "HINT UNLOCKED" notification auto-clear ───────────────────────
  useEffect(() => {
    if (s.message !== "HINT UNLOCKED") return;
    const t = setTimeout(() => dispatch({ type: "CLEAR_MSG" }), 2000);
    return () => clearTimeout(t);
  }, [s.message]);
  useEffect(() => {
    if (s.message !== "SIGNAL CORRECTED") return;
    sfx.reveal();
    // Auto-dismiss the notification after 2.5 s
    const t = setTimeout(() => dispatch({ type: "CLEAR_MSG" }), 2500);
    return () => clearTimeout(t);
  }, [s.message]);

  // ── Special outcome sounds ─────────────────────────────────────────
  useEffect(() => { if (s.timedOut) sfx.alarm(); }, [s.timedOut]);
  useEffect(() => { if (s.won)      sfx.win();   }, [s.won]);

  // ── On-screen keyboard handler ─────────────────────────────────────
  const press = (k) => {
    if      (k === "ENTER") { sfx.submit(); dispatch({ type: "SUBMIT", rand: rand5() }); }
    else if (k === "DEL")   { dispatch({ type: "DEL" }); }
    else                    { sfx.click();  dispatch({ type: "TYPE", k }); }
  };

  // ── Derived display values ─────────────────────────────────────────
  const critical  = s.timerStarted && !s.over && s.timeLeft <= 25;
  const urgent    = s.timerStarted && !s.over && s.timeLeft <= 10;
  const fmt       = (t) => `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
  const timerDisp = s.over
    ? (s.won ? "✓" : "· · ·")
    : fmt(s.timerStarted ? s.timeLeft : TIMER_INIT);
  const timerCol  = urgent ? T.lieText : critical ? T.pre : T.sub;
  const msgColor  = s.won              ? T.cor
                  : s.message === "SIGNAL CORRECTED" ? T.sigCor
                  : (s.over && !s.won) ? T.lieText
                  : T.pre;

  // ── Tile style factory ─────────────────────────────────────────────
  // Returns a CSS-in-JS object for one grid tile.
  // forceRed: true when the timer has expired — overrides all colours.
  const tileSt = (st, forceRed) => ({
    width: 54, height: 54,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "1.4rem", fontWeight: 900,
    fontFamily: "'Courier New', Courier, monospace",
    border: "2px solid",
    borderColor: forceRed ? "#7C1C1C"
      : st === CC ? T.cor
      : st === CP ? T.pre
      : st === CA ? T.abs
      : st === CH ? T.hint       // hint: blue border
      : st === CF ? "#5A5A6A"
      : T.brd,
    background: forceRed
      ? ((st === CC || st === CP || st === CA) ? "#3D0808" : "transparent")
      : st === CC ? T.cor
      : st === CP ? T.pre
      : st === CA ? T.abs
      : st === CH ? T.hintBg     // hint: dark-blue fill
      : "transparent",
    color: forceRed ? "#CC3333"
      : st === CH  ? T.hintTxt   // hint: light-blue letter
      : [CC, CP, CA].includes(st) ? "#F0EEE8"
      : T.txt,
    // Soft blue glow on hint tiles so they're clearly distinguishable
    boxShadow: st === CH ? "0 0 7px 1px rgba(74,144,217,0.35)" : "none",
    userSelect: "none", flexShrink: 0,
    transition: "background 0.3s, border-color 0.3s, color 0.3s",
  });

  // ── Keyboard key style factory ─────────────────────────────────────
  const keySt = (k) => {
    const ks = s.km[k];
    return {
      cursor       : "pointer",
      fontFamily   : "'Courier New', Courier, monospace",
      fontSize     : k.length > 1 ? "0.58rem" : "0.82rem",
      fontWeight   : "bold",
      borderRadius : "3px",
      border       : "none",
      padding      : k.length > 1 ? "13px 6px" : "13px 11px",
      minWidth     : k.length > 1 ? "46px" : "30px",
      background   : ks === CC ? T.cor : ks === CP ? T.pre : ks === CA ? T.kAbs : T.abs,
      color        : ks === CA ? T.dim : T.txt,
      letterSpacing: "0.04em",
      transition   : "background 0.12s",
    };
  };

  // ─────────────────────────────────────────────────────────────────
  //  RENDER
  // ─────────────────────────────────────────────────────────────────
  return (
    <div style={{
      minHeight   : "100vh",
      background  : T.bg,
      color       : T.txt,
      fontFamily  : "'Courier New', Courier, monospace",
      display     : "flex",
      flexDirection: "column",
      alignItems  : "center",
      paddingBottom: 36,
      position    : "relative",
      // Whole-screen shudder in the final 10 seconds
      animation   : urgent ? "screenShudder 0.7s ease-in-out infinite" : "none",
    }}>

      {/* ── CRT scanline overlay ─────────────────────────────────────
          Renders as a repeating gradient on top of everything.
          Lines become denser and darker when the timer is urgent. */}
      <div style={{
        position    : "fixed", inset: 0,
        pointerEvents: "none", zIndex: 9999,
        background  : urgent
          ? "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.22) 2px,rgba(0,0,0,0.22) 3px)"
          : "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.06) 3px,rgba(0,0,0,0.06) 4px)",
        transition  : "background 1s",
      }} />

      {/* ── Timeout flash + strobe overlays ──────────────────────────
          Mounted only once when timedOut becomes true; they self-remove
          via CSS animation (both animate to opacity 0 and stop). */}
      {s.timedOut && <div className="to-flash" />}
      {s.timedOut && <div className="to-strobe" />}

      {/* ── HEADER ───────────────────────────────────────────────────*/}
      <header style={{
        width: "100%", maxWidth: 450,
        borderBottom: `1px solid ${T.brd}`,
        padding: "16px 0", textAlign: "center",
      }}>
        <div style={{
          fontSize: "0.5rem", letterSpacing: "0.38em",
          color: T.sub, marginBottom: 5, textTransform: "uppercase",
        }}>
          {s.flavorText}
        </div>
        <h1 style={{
          margin: 0, fontSize: "2rem", letterSpacing: "0.14em",
          fontWeight: 900, color: T.txt,
          animation: s.timedOut ? "glitch 0.18s steps(2) 7" : "none",
        }}>
          WORDLE<span style={{ color: T.lieText }}>?</span>
        </h1>

        {/* Countdown display */}
        <div style={{
          marginTop       : 12,
          fontSize        : urgent ? "1.85rem" : critical ? "1.35rem" : "1.05rem",
          fontWeight      : 900,
          letterSpacing   : "0.22em",
          color           : timerCol,
          fontVariantNumeric: "tabular-nums",
          transition      : "font-size 0.5s, color 0.5s",
          animation       : s.timedOut ? "glitch 0.15s steps(2) 6"
                          : urgent     ? "timerPanic 0.5s ease-in-out infinite"
                          : critical   ? "timerPulse 1s ease-in-out infinite"
                          : "none",
        }}>
          {timerDisp}
        </div>
      </header>

      {/* ── Message bar ──────────────────────────────────────────────
          Height is fixed so layout never shifts; opacity fades content
          in/out rather than inserting/removing the element. */}
      <div style={{
        height    : 36,
        display   : "flex", alignItems: "center", justifyContent: "center",
        fontSize  : "0.68rem", letterSpacing: "0.14em", fontWeight: "bold",
        color     : msgColor,
        opacity   : s.message ? 1 : 0,
        transition: "opacity 0.25s",
        animation : s.timedOut ? "glitch 0.2s steps(2) 5" : "none",
      }}>
        {s.message || " "}
      </div>

      {/* ── GRID ─────────────────────────────────────────────────────*/}
      <div style={{
        display      : "flex", flexDirection: "column", gap: 8, paddingBottom: 16,
        animation    : s.timedOut ? "gridPanic 0.14s steps(1) 9 forwards" : "none",
      }}>
        {Array(ROWS).fill(null).map((_, ri) => {
          const g       = s.guesses[ri];                         // submitted guess, or undefined
          const cur     = ri === s.guesses.length && !s.over;   // is this the active input row?
          const shk     = s.shakeRow === ri;
          const letters = g ? g.w.split("") : cur ? s.input : Array(WL).fill("");

          // Determine per-tile colour state:
          //  • Submitted row  → use the (possibly lying) disp array from the guess
          //  • Active input   → CF for typed tiles; CH if that position was hint-filled; CE otherwise
          //  • Future rows    → all CE (empty)
          const states = g
            ? g.disp
            : Array(WL).fill(null).map((_, ci) =>
                letters[ci]
                  ? (cur && s.hintedPositions.includes(ci) ? CH : CF)
                  : CE
              );

          // After timeout, force all submitted tiles to the red "alarm" palette
          const forceRed = s.timedOut && !!g;

          return (
            <div key={ri} style={{
              display  : "flex", gap: 6,
              animation: shk ? "shake 0.45s ease" : "none",
            }}>
              {Array(WL).fill(null).map((_, ci) => (
                <div key={ci} style={{
                  ...tileSt(states[ci], forceRed),
                  animation:
                    forceRed
                      // Staggered red flash on each tile when timer expires
                      ? `tileAlert ${0.12 + ci * 0.06}s ease forwards`
                    : g?.lies > 0
                      // Lying rows get a very subtle, slow flicker:
                      //   • Period: 18–28 s (each tile slightly offset)
                      //   • Opacity dip: only ~12% (barely perceptible)
                      //   • Each tile starts at a different point in the cycle
                      //   This is intentionally hard to notice consciously.
                      ? `subtleFlicker ${45 + ci * 6}s ${ci * 3.5 + 4}s infinite`
                    : "none",
                }}>
                  {letters[ci] || ""}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* ── HINT BUTTON ──────────────────────────────────────────────
          Shown only while the game is active.
          Fills the *next* empty position in the current row with the
          correct letter from the target word and styles it with a
          blue glow (CH state) so you can tell it was hinted.
          Disabled when: no hints left, or row is already full. */}
      {!s.over && (
        <div style={{
          marginBottom: 10, display: "flex", alignItems: "center", gap: 10,
        }}>
          <button
            type="button"
            onClick={() => { sfx.hint(); dispatch({ type: "HINT" }); }}
            disabled={s.hintsLeft <= 0 || s.input.every(c => c !== "")}
            style={{
              background   : "transparent",
              border       : `1px solid ${s.hintsLeft > 0 ? T.hint : T.dim}`,
              color        : s.hintsLeft > 0 ? T.hintTxt : T.sub,
              fontFamily   : "'Courier New', Courier, monospace",
              fontSize     : "0.62rem",
              letterSpacing: "0.18em",
              padding      : "7px 16px",
              cursor       : s.hintsLeft > 0 && s.input.some(c => c === "") ? "pointer" : "not-allowed",
              textTransform: "uppercase",
              opacity      : s.hintsLeft > 0 && s.input.some(c => c === "") ? 1 : 0.38,
              transition   : "opacity 0.2s, color 0.2s, border-color 0.2s",
              borderRadius : "2px",
            }}
          >
            hint [{s.hintsLeft} left]
          </button>
          <span style={{ fontSize: "0.53rem", color: T.sub, letterSpacing: "0.1em" }}>
            fills next position
          </span>
        </div>
      )}

      {/* ── KEYBOARD ─────────────────────────────────────────────────*/}
      <div style={{
        display      : "flex", flexDirection: "column", gap: 6,
        width        : "100%", maxWidth: 450, padding: "0 8px",
      }}>
        {KB.map((row, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "center", gap: 5 }}>
            {row.map(k => (
              <button key={k} type="button" onClick={() => press(k)} style={keySt(k)}>
                {k}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* ── NEW GAME button (only after game over) ────────────────────*/}
      {s.over && (
        <button
          type="button"
          onClick={() => dispatch({ type: "RESET" })}
          style={{
            marginTop  : 22, padding: "10px 30px",
            background : "transparent", border: `1px solid ${T.brd}`,
            color      : T.sub, fontFamily: "'Courier New', Courier, monospace",
            fontSize   : "0.66rem", letterSpacing: "0.22em",
            cursor     : "pointer", textTransform: "uppercase",
          }}
        >
          New Game
        </button>
      )}

      {/* ── KEYFRAME ANIMATIONS ──────────────────────────────────────*/}
      <style>{`
        /* Row shake on invalid guess */
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          15%     { transform: translateX(-8px); }
          35%     { transform: translateX(8px); }
          55%     { transform: translateX(-5px); }
          75%     { transform: translateX(4px); }
          90%     { transform: translateX(-2px); }
        }

        /*
         * subtleFlicker
         * Applied to tiles in lying rows. Very long period (45–69 s per tile,
         * each offset differently) with only a 6% opacity dip squeezed into
         * 1% of the cycle. Completely subliminal — plants unease without
         * screaming "I'M LYING". Stops automatically once lies are corrected.
         */
        @keyframes subtleFlicker {
          0%, 98%, 100% { opacity: 1; }
          99%           { opacity: 0.94; }
        }

        /* Timer pulses slowly in the critical zone (≤25 s) */
        @keyframes timerPulse {
          0%,100% { opacity: 1; }
          50%     { opacity: 0.45; }
        }

        /* Timer panics with scale + opacity in the urgent zone (≤10 s) */
        @keyframes timerPanic {
          0%,100% { opacity: 1;   transform: scale(1); }
          50%     { opacity: 0.2; transform: scale(1.12); }
        }

        /* Staggered red flash applied per-tile on timeout */
        @keyframes tileAlert {
          0%   { filter: none; }
          20%  { filter: brightness(5) sepia(1) hue-rotate(-50deg); }
          45%  { filter: none; }
          65%  { filter: brightness(3) sepia(1) hue-rotate(-40deg); }
          85%  { filter: none; }
          100% { filter: brightness(0.5) sepia(1) hue-rotate(-50deg); }
        }

        /* Grid shudder on timeout */
        @keyframes gridPanic {
          0%   { transform: translate(0, 0); }
          11%  { transform: translate(-10px, 5px); }
          22%  { transform: translate(10px, -5px); }
          33%  { transform: translate(-7px, 7px); }
          44%  { transform: translate(8px, -4px); }
          55%  { transform: translate(-4px, 4px); }
          66%  { transform: translate(5px, -2px); }
          77%  { transform: translate(-2px, 3px); }
          88%  { transform: translate(2px, -1px); }
          100% { transform: translate(0, 0); }
        }

        /* Glitch skew — used on header and message bar on timeout */
        @keyframes glitch {
          0%   { transform: skewX(0deg);    filter: none; }
          25%  { transform: skewX(-14deg);  filter: hue-rotate(90deg) brightness(2); }
          50%  { transform: skewX(9deg);    filter: hue-rotate(190deg); }
          75%  { transform: skewX(-5deg);   filter: brightness(3); }
          100% { transform: skewX(0deg);    filter: none; }
        }

        /* Whole-screen micro-jitter in urgent mode */
        @keyframes screenShudder {
          0%,100% { transform: translate(0, 0); }
          25%     { transform: translate(-1px, 1px); }
          50%     { transform: translate(1px, 0); }
          75%     { transform: translate(-1px, -1px); }
        }

        /* Timeout: red overlay fades out over 1.8 s */
        @keyframes flashOut {
          0%   { opacity: 0.95; }
          20%  { opacity: 0.75; }
          45%  { opacity: 0.45; }
          70%  { opacity: 0.18; }
          100% { opacity: 0; }
        }

        /* Timeout: secondary rapid strobe over 0.9 s */
        @keyframes strobeOut {
          0%,15%,30%,45%,60%,75%,90% { opacity: 0.6; }
          7%,22%,37%,52%,67%,82%,97% { opacity: 0; }
          100% { opacity: 0; }
        }

        .to-flash {
          position: fixed; inset: 0;
          background: rgba(200, 0, 0, 0.9);
          z-index: 9997;
          animation: flashOut 1.8s ease-out forwards;
          pointer-events: none;
        }
        .to-strobe {
          position: fixed; inset: 0;
          background: rgba(255, 80, 80, 0.7);
          z-index: 9996;
          animation: strobeOut 0.9s steps(1) forwards;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}