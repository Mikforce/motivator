var quotes = [
  [
    "Благородные люди, друг друга любя,      \
        Видят горе других, забывают себя.        \
        Если чести и блеска зеркал ты желаешь, — \
        Не завидуй другим, — и возлюбят тебя.",

    "Омар Хайям"
  ],

  [
    "Добродетель мудрецов напоминает собой путешествие в дальннюю страну \
        и восхождение на вершину: идущие                                     \
        в дальнюю страну начинают свой путь с первого шага;                  \
        восходящие на вершину начинают с подножия горы.",

    "Конфуций"
  ],

  [
    "Если вы хотите успеха, а готовитесь к поражению, то вы получите как раз то, к чему готовитесь.",

    "Флоренс Шин"
  ],

  [
    "Мы – рабы своих привычек. измени свои привычки, изменится твоя жизнь.",

    "Роберт Кийосаки"
  ]
];

document.getElementById("next-quote").addEventListener("click", function() {

  // выбираем случайную фразу из массива
  // данные в массив могут попадать и через api
  var quote = quotes[Math.floor(Math.random() * quotes.length)];

  // цитата
  var phrase = document.querySelector("#phrase");

  // автор
  var author = document.querySelector("#author");

  phrase.innerHTML = quote[0];
  author.innerHTML = quote[1];
});





function copyToClipboard() {
    const str = document.getElementById('phrase').innerText;
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};





var urls = [
    "https://www.b17.ru/forum/",
    "https://psysovet.ru/",
    "https://psysovet.ru/",
    "http://perepiska.pomogaya-drugim.ru/",

];
document.getElementById("random-link").addEventListener("click", function(){
    var url = urls[Math.floor(Math.random()*urls.length)]
  alert("вы собираетесь перейти по ссылке: " + url);
  this.href = url;
});
