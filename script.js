const categories = [
 {name:"Сетевой этикет",questions:[
  {points:100,q:"Как называется совокупность правил вежливого поведения и общения в Интернете?",a:"Сетевой этикет (нетикет).",e:"Он помогает поддерживать уважительное и понятное общение в сети."},
  {points:200,q:"Участник чата отправляет множество одинаковых сообщений подряд. Как называется такое нарушение?",a:"Флуд — засорение чата повторяющимися или бессодержательными сообщениями.",e:"Такие сообщения мешают другим участникам находить важную информацию."},
  {points:300,q:"Во время обсуждения пользователь переходит на оскорбления и провоцирует ссору. Как называется такое поведение?",a:"Флейм — эмоциональная сетевая ссора, переходящая на личности.",e:"Несогласие лучше выражать аргументами, не переходя на личности."},
  {points:400,q:"Вставка в страницу изображений или файлов с чужого сервера напрямую, ведущая к расходу чужого трафика. Что это?",a:"Хотлинк (hotlink).",e:"Использование чужих файлов без переноса на свой сервер тратит чужие ресурсы."},
  {points:500,q:"Какой совет по использованию CAPS LOCK и смайликов дает сетевой этикет?",a:"Использовать умеренно; CAPS LOCK воспринимается как агрессивный крик.",e:"Чрезмерное использование ухудшает читаемость и культуру общения."}
 ]},
 {name:"Интернет-угрозы",questions:[
  {points:100,q:"Как называется обман, при котором пытаются получить пароль или другие данные через поддельные сайты и сообщения?",a:"Фишинг.",e:"Проверяйте адрес сайта и не вводите данные после перехода по сомнительной ссылке."},
  {points:200,q:"Злоумышленник пытается подобрать пароль, автоматически проверяя множество вариантов. Как называется этот способ?",a:"Брутфорс — автоматический перебор вариантов пароля.",e:"Уникальные длинные пароли и дополнительные способы подтверждения входа повышают защиту."},
  {points:300,q:"Как называется набор программных средств, с помощью которого могут скрывать присутствие вредоносного ПО в системе?",a:"Руткит.",e:"Это один из видов вредоносных программных средств, упомянутых в конспекте."},
  {points:400,q:"Скрытое автоматическое перенаправление на поддельный IP-адрес через изменение DNS-запросов. Как называется эта угроза?",a:"Фарминг (pharming).",e:"Это продвинутая разновидность фишинга, атакующая навигационные механизмы сети."},
  {points:500,q:"Регистрация доменных имен с чужими брендами ради их дальнейшей перепродажи. Что это за явление?",a:"Киберсквоттинг (cybersquatting).",e:"Блокирует честное использование адресов и нарушает права владельцев брендов."}
 ]},
 {name:"Цифровая защита",questions:[
  {points:100,q:"Стоит ли использовать один пароль для всех своих аккаунтов?",a:"Нет. Для разных сервисов следует использовать разные пароли.",e:"Если один пароль станет известен посторонним, остальные аккаунты не окажутся автоматически под угрозой."},
  {points:200,q:"Почему не следует публиковать чужой номер телефона или адрес без разрешения?",a:"Это личные данные. Их публикация без согласия нарушает приватность и может навредить человеку.",e:"Перед публикацией личной информации необходимо получить разрешение её владельца."},
  {points:300,q:"Друг пишет в мессенджере и срочно просит перевести деньги. Как безопаснее всего проверить просьбу?",a:"Связаться с другом другим способом, например позвонить по известному номеру.",e:"Аккаунт мог быть взломан. Не переводите деньги, пока не убедитесь, что просьба настоящая."},
  {points:400,q:"Какой статус надежности у пароля «qS8+njiPh» согласно материалам конспекта?",a:"Безопасный.",e:"Высокая сложность: комбинация букв разного регистра, цифр и спецсимволов."},
  {points:500,q:"Назовите хотя бы два признака безопасного сайта при проверке в браузере.",a:"Использование протокола HTTPS (значок замка) и правильное доменное имя в адресной строке.",e:"Защищенное соединение и бдительность — основы цифровой гигиены."}
 ]},
 {name:"Ситуации",questions:[
  {points:100,q:"В общий чат прислали рекламу, на которую никто не подписывался. Как называется такая рассылка?",a:"Спам.",e:"Спамом называют массовую рассылку нежелательных сообщений."},
  {points:200,q:"В тематическом чате обсуждают домашнее задание, но один участник постоянно пишет о фильмах. Как называется уход от темы?",a:"Оффтоп — сообщения, не относящиеся к теме обсуждения.",e:"Для посторонних тем обычно существуют отдельные чаты или разделы."},
  {points:300,q:"В переписке участник копирует целиком длинные предыдущие сообщения, хотя для ответа нужна одна фраза. Как называется это нарушение?",a:"Оверквотинг — избыточное цитирование.",e:"Цитируйте только ту часть сообщения, на которую действительно отвечаете."},
  {points:400,q:"Механизм обмана, когда скрытые элементы интерфейса накладываются на видимые для получения кликов пользователя без его ведома. Что это?",a:"Кликджекинг (clickjacking).",e:"Пользователь думает, что нажимает на одну кнопку, а кликает по скрытой ссылке злоумышленника."},
  {points:500,q:"Вид мошенничества, при котором совершаются финансовые операции с использованием чужих реквизитов платежных карт. Как это называется?",a:"Кардинг (carding).",e:"Прямое воровство денег с банковских карт путем кражи их данных."}
 ]},
 {name:"Закон и Интернет",questions:[
  {points:100,q:"Можно ли считать, что в Интернете разрешено абсолютно всё, потому что общение происходит онлайн?",a:"Нет. В Интернете также действуют нормы права и ответственность за противоправные действия.",e:"Цифровая среда не отменяет законодательство."},
  {points:200,q:"В конспекте упомянута статья 349 УК Республики Беларусь. С каким деянием она связана?",a:"С несанкционированным доступом к компьютерной информации.",e:"Это формулировка из предоставленного плана-конспекта."},
  {points:300,q:"Какая статья УК Республики Беларусь указана в конспекте в связи с разработкой, использованием или распространением вредоносных программ?",a:"Статья 354 УК Республики Беларусь.",e:"Вопрос воспроизводит содержание конспекта; перед использованием номеров статей в учебном материале стоит сверить действующую редакцию закона."},
  {points:400,q:"С каким преступлением связана статья 212 УК Республики Беларусь, упомянутая в конспекте?",a:"Хищение имущества путем модификации компьютерной информации.",e:"Данная статья регулирует кражу денежных средств и ценностей через компьютерные системы."},
  {points:500,q:"За какое деяние предусмотрена ответственность согласно статье 351 УК Республики Беларусь?",a:"Компьютерный саботаж.",e:"Умышленное уничтожение, блокирование или вывод из строя компьютерных систем и сетей."}
 ]},
 {name:"Детектив",questions:[
  {points:100,q:"Заголовок обещает невероятное открытие, но сама статья рассказывает о совершенно обычном событии. Как называется такой заголовок?",a:"Кликбейт.",e:"Кликбейт — завлекающий заголовок, который искажает содержание ради перехода по ссылке."},
  {points:200,q:"Человек обманом получает у пользователя деньги или игровые предметы. Как одним современным словом называют такой обман?",a:"Скам — интернет-мошенничество.",e:"Тот, кто занимается таким обманом, называется скамером."},
  {points:300,q:"Кто-то без согласия человека собирает и публикует его личные сведения в Интернете. Как называется это явление?",a:"Доксинг.",e:"Публикация личных данных без согласия может подвергнуть человека риску."},
  {points:400,q:"Отправка ложных сообщений об опасности или минировании по адресу жертвы для вызова экстренных служб. Как называется этот опасный сленговый термин?",a:"Сватинг (Swatting).",e:"Это грубое и опасное правонарушение, влекущее суровую ответственность."},
  {points:500,q:"Провокационное поведение в сети, публикация гневных или глупых сообщений для разжигания конфликтов. Как это называется?",a:"Троллинг (Trolling).",e:"Цель тролля — вывести участников дискуссии из равновесия и нарушить общение."}
 ]}
];

let teams = [];
let used = new Set();
let current = null;
const $ = id => document.getElementById(id);
function show(id){["startScreen","gameScreen","resultScreen"].forEach(x=>$(x).classList.toggle("hidden",x!==id));}
function startGame(){
 const count=Number($("teamCount").value);
 teams=Array.from({length:count},(_,i)=>({name:`Команда ${i+1}`,score:0}));
 used=new Set(); renderTeams(); renderBoard(); show("gameScreen");
}
function renderTeams(){
 $("teamsPanel").innerHTML="";
 teams.forEach((t,i)=>{
  const card=document.createElement("div");card.className="team-card";
  card.innerHTML=`<span class="team-name"></span><span class="team-score"></span>`;
  card.querySelector(".team-name").textContent=t.name;
  card.querySelector(".team-score").textContent=t.score;
  $("teamsPanel").appendChild(card);
 });
}
function renderBoard(){
 const board=$("board");board.innerHTML="";
 categories.forEach((cat,ci)=>{
  const h=document.createElement("div");h.className="board-head";h.textContent=cat.name;board.appendChild(h);
 });
 [100,200,300,400,500].forEach(points=>{
  categories.forEach((cat,ci)=>{
   const qi=cat.questions.findIndex(q=>q.points===points),key=`${ci}-${qi}`;
   const b=document.createElement("button");b.className="question-cell";b.textContent=points;b.disabled=used.has(key);
   b.setAttribute("aria-label",`${cat.name}, ${points} баллов`);
   b.addEventListener("click",()=>openQuestion(ci,qi,key));board.appendChild(b);
  });
 });
}
function openQuestion(ci,qi,key){
 current={ci,qi,key,q:categories[ci].questions[qi]};
 $("questionCategory").textContent=categories[ci].name;
 $("questionPoints").textContent=current.q.points+" баллов";
 $("questionTitle").textContent=current.q.q;
 $("answerText").textContent=current.q.a;
 $("explanationText").textContent=current.q.e;
 $("answerBox").classList.add("hidden");$("markControls").classList.add("hidden");
 $("showAnswerBtn").classList.remove("hidden");
 $("teamSelect").innerHTML="";
 teams.forEach((t,i)=>{const o=document.createElement("option");o.value=i;o.textContent=t.name;$("teamSelect").appendChild(o)});
 $("questionModal").classList.remove("hidden");
}
function closeQuestion(){ $("questionModal").classList.add("hidden"); current=null; }
function mark(correct){
if(!current)return;
if(correct){const i=Number($("teamSelect").value);teams[i].score+=current.q.points;}
used.add(current.key);renderTeams();renderBoard();closeQuestion();
}
function finish(){
const sorted=[...teams].sort((a,b)=>b.score-a.score);
$("finalScores").innerHTML="";
sorted.forEach((t,i)=>{
const row=document.createElement("div");row.className="final-row";
const name=document.createElement("span");name.textContent=(i===0?"✦ ":"")+t.name;
const score=document.createElement("strong");score.textContent=t.score+" баллов";
row.append(name,score);$("finalScores").appendChild(row);
});
show("resultScreen");
}
$("startBtn").addEventListener("click",startGame);
$("restartBtn").addEventListener("click",()=>{show("startScreen")});
$("finishBtn").addEventListener("click",finish);
$("homeLink").addEventListener("click",e=>{e.preventDefault();if(! $("gameScreen").classList.contains("hidden")){if(confirm("Вернуться на главную? Текущий счёт будет сброшен.")){show("startScreen");}}else show("startScreen")});
$("showAnswerBtn").addEventListener("click",()=>{$("answerBox").classList.remove("hidden");$("showAnswerBtn").classList.add("hidden");$("markControls").classList.remove("hidden")});
$("correctBtn").addEventListener("click",()=>mark(true));
$("wrongBtn").addEventListener("click",()=>mark(false));
$("closeQuestion").addEventListener("click",closeQuestion);
$("questionModal").addEventListener("click",e=>{if(e.target.dataset.close)closeQuestion()});
$("rulesBtn").addEventListener("click",()=>$("rulesModal").classList.remove("hidden"));
$("closeRules").addEventListener("click",()=>$("rulesModal").classList.add("hidden"));
$("rulesModal").addEventListener("click",e=>{if(e.target.dataset.rulesClose)$("rulesModal").classList.add("hidden")});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeQuestion();$("rulesModal").classList.add("hidden")}});
