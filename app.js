const lessons = [
  {
    title: "Что такое программа",
    module: "Раздел 1. Первый запуск",
    time: "5 минут",
    subtitle: "Начинаем с самой простой команды: вывод текста в консоль.",
    goals: ["Понять, зачем нужна команда print()", "Запустить первый Python-код", "Увидеть результат в консоли"],
    theory: [
      "Программа — это набор команд, которые компьютер выполняет по порядку. В Python команды записываются простым текстом.",
      "Команда <code>print()</code> выводит информацию в консоль. В скобках указывают то, что нужно показать пользователю.",
      "Текст в Python записывают в кавычках. Можно использовать двойные или одинарные кавычки, главное — закрыть строку тем же символом.",
    ],
    example: 'print("Привет!")\nprint("Я запускаю Python")',
    task: 'Выведите в консоль две строки: "Привет, Python!" и "Я учусь программировать".',
    hint: "Нужно написать два отдельных вызова print(). Готовый код в редактор не вставлен специально: попробуйте набрать его сами.",
    placeholder: 'Напишите здесь свой код, например начните с print("...")',
    validate(output) {
      const normalized = normalize(output);
      return normalized.includes("привет") && normalized.includes("python") && normalized.includes("учусь");
    },
    success: "Первый запуск готов: вы вывели несколько строк в консоль.",
    retry: 'В выводе должны быть две мысли: приветствие Python и фраза "Я учусь программировать".',
  },
  {
    title: "Комментарии и строки",
    module: "Раздел 1. Первый запуск",
    time: "7 минут",
    subtitle: "Учимся оставлять пояснения в коде и работать со строками.",
    goals: ["Отличать код от комментария", "Использовать строки", "Писать понятный учебный код"],
    theory: [
      "Комментарий начинается с символа <code>#</code>. Python не выполняет комментарии, они нужны для пояснений человеку.",
      "Строка — это текстовое значение. Строки можно выводить через <code>print()</code>, хранить в переменных и объединять.",
      "Комментарии особенно полезны в учебных задачах: они помогают коротко записать, что должна сделать программа.",
    ],
    example: '# Это комментарий\nprint("Строка выводится, комментарий нет")',
    task: 'Добавьте комментарий к программе и выведите строку "Я изучаю Python".',
    hint: "В коде должен быть символ #, а в консоли должна появиться только строка с текстом.",
    placeholder: "# Напишите комментарий\n# Ниже выведите нужную строку",
    validate(output, code) {
      return code.includes("#") && normalize(output).includes("я изучаю python");
    },
    success: "Отлично: комментарий есть, а строка выводится корректно.",
    retry: 'Проверьте, что в коде есть комментарий с # и выводится фраза "Я изучаю Python".',
  },
  {
    title: "Числа и арифметика",
    module: "Раздел 2. Данные",
    time: "8 минут",
    subtitle: "Python умеет считать: складывать, вычитать, умножать и делить.",
    goals: ["Использовать арифметические операторы", "Выводить результат выражения", "Понимать порядок вычислений"],
    theory: [
      "В Python можно записывать математические выражения почти так же, как в тетради: <code>2 + 3</code>, <code>10 - 4</code>, <code>6 * 7</code>.",
      "Умножение обозначается звездочкой <code>*</code>, деление — знаком <code>/</code>. Скобки помогают явно задать порядок действий.",
      "Если передать выражение в <code>print()</code>, Python сначала выполнит вычисление, а затем выведет результат.",
    ],
    example: 'print(2 + 3)\nprint(6 * 7)\nprint((10 + 5) / 3)',
    task: "Посчитайте и выведите результат выражения 15 + 27.",
    hint: "Передайте арифметическое выражение прямо в print().",
    placeholder: "Введите команду print() с выражением 15 + 27",
    validate(output) {
      return numbersFrom(output).includes(42);
    },
    success: "Верно: Python посчитал выражение и вывел 42.",
    retry: "В консоли должно появиться число 42.",
  },
  {
    title: "Переменные",
    module: "Раздел 2. Данные",
    time: "10 минут",
    subtitle: "Переменные позволяют хранить значения под понятными именами.",
    goals: ["Создавать переменные", "Использовать имена в выражениях", "Делать код читаемым"],
    theory: [
      "Переменная — это имя, за которым хранится значение. Например, <code>age = 16</code> создает переменную <code>age</code>.",
      "Имя переменной лучше делать понятным: <code>price</code>, <code>count</code>, <code>area</code>. Тогда код проще читать.",
      "Переменные можно использовать в вычислениях. Если значение переменной изменится, результат выражения тоже изменится.",
    ],
    example: 'width = 4\nheight = 3\narea = width * height\nprint(area)',
    task: "Создайте переменные width = 8 и height = 5. Посчитайте площадь прямоугольника и выведите результат.",
    hint: "Площадь прямоугольника равна width * height.",
    placeholder: "Создайте width и height, затем выведите площадь",
    validate(output, code) {
      return /width\s*=/.test(code) && /height\s*=/.test(code) && numbersFrom(output).includes(40);
    },
    success: "Площадь рассчитана правильно: переменные использованы по назначению.",
    retry: "Нужно создать width и height, перемножить их и вывести число 40.",
  },
  {
    title: "Строки и f-строки",
    module: "Раздел 2. Данные",
    time: "11 минут",
    subtitle: "Собираем текст из обычных строк и значений переменных.",
    goals: ["Хранить текст в переменной", "Подставлять значения в строку", "Использовать f-строки"],
    theory: [
      "Строки можно хранить в переменных так же, как числа: <code>name = \"Аня\"</code>.",
      "f-строка начинается с буквы <code>f</code> перед кавычками. Внутри такой строки можно вставлять значения переменных через фигурные скобки.",
      "Например, <code>f\"Привет, {name}\"</code> подставит значение переменной <code>name</code> прямо в текст.",
    ],
    example: 'name = "Аня"\ncourse = "Python"\nprint(f"{name} изучает {course}")',
    task: 'Создайте переменные name и age. Выведите строку вида "Меня зовут Тимур, мне 16".',
    hint: "Используйте f-строку и подставьте в нее обе переменные.",
    placeholder: 'name = "Тимур"\nage = 16\n# Ниже выведите f-строку',
    validate(output, code) {
      const normalized = normalize(output);
      return /f["']/.test(code) && normalized.includes("меня зовут") && normalized.includes("16");
    },
    success: "Готово: f-строка собрала текст из переменных.",
    retry: "Нужно использовать f-строку, вывести имя и возраст 16.",
  },
  {
    title: "Ввод данных",
    module: "Раздел 3. Взаимодействие",
    time: "12 минут",
    subtitle: "Программа может спрашивать данные у пользователя через input().",
    goals: ["Использовать input()", "Сохранять введенное значение", "Выводить ответ пользователю"],
    theory: [
      "Функция <code>input()</code> открывает окно ввода и возвращает текст, который ввел пользователь.",
      "Результат <code>input()</code> обычно сохраняют в переменную: <code>name = input(\"Ваше имя: \")</code>.",
      "Важно помнить: <code>input()</code> всегда возвращает строку, даже если пользователь ввел число.",
    ],
    example: 'city = input("Ваш город: ")\nprint(f"Город: {city}")',
    task: "Спросите имя пользователя и выведите приветствие с этим именем.",
    hint: "Создайте переменную через input(), затем используйте ее в print(). При запуске браузер покажет окно ввода.",
    placeholder: 'name = input("Ваше имя: ")\n# Ниже выведите приветствие',
    validate(output, code) {
      return /input\s*\(/.test(code) && normalize(output).includes("привет");
    },
    success: "Программа получает данные от пользователя и отвечает ему.",
    retry: "В коде должен быть input(), а в выводе должно появиться приветствие.",
  },
  {
    title: "Преобразование типов",
    module: "Раздел 3. Взаимодействие",
    time: "12 минут",
    subtitle: "Преобразуем текст в число, чтобы выполнять расчеты.",
    goals: ["Понять разницу между строкой и числом", "Использовать int()", "Выполнять расчет после преобразования"],
    theory: [
      "Если число записано в кавычках, для Python это строка. Например, <code>\"120\"</code> — текст, а <code>120</code> — число.",
      "Функция <code>int()</code> преобразует подходящую строку в целое число. После этого значение можно складывать, умножать и сравнивать.",
      "Преобразование типов часто используют после <code>input()</code>, потому что пользовательский ввод приходит в программу как строка.",
    ],
    example: 'price_text = "120"\nprice = int(price_text)\nprint(price + 30)',
    task: 'Создайте переменную count_text = "7". Преобразуйте ее в число и выведите результат умножения на 6.',
    hint: "Сначала получите count = int(count_text), затем выведите count * 6.",
    placeholder: 'count_text = "7"\n# Преобразуйте строку в число и выполните расчет',
    validate(output, code) {
      return /int\s*\(/.test(code) && numbersFrom(output).includes(42);
    },
    success: "Отлично: строка преобразована в число, расчет выполнен.",
    retry: "В коде должен быть int(), а в выводе должно появиться число 42.",
  },
  {
    title: "Сравнения",
    module: "Раздел 4. Логика",
    time: "9 минут",
    subtitle: "Сравнения возвращают логические значения True или False.",
    goals: ["Использовать операторы сравнения", "Получать True или False", "Готовиться к условиям"],
    theory: [
      "Операторы сравнения помогают задавать вопросы программе: больше ли число, равно ли значение, выполнено ли условие.",
      "Частые операторы: <code>></code>, <code><</code>, <code>>=</code>, <code><=</code>, <code>==</code>, <code>!=</code>.",
      "Результат сравнения — логическое значение <code>True</code> или <code>False</code>.",
    ],
    example: 'score = 75\nprint(score >= 60)\nprint(score == 100)',
    task: "Создайте переменную score = 70 и выведите результат проверки: score >= 60.",
    hint: "В консоли должно появиться логическое значение True.",
    placeholder: "Создайте score и выведите результат сравнения",
    validate(output, code) {
      return />=/.test(code) && /true/i.test(output);
    },
    success: "Сравнение выполнено: программа получила True.",
    retry: "Проверьте, что score равен 70 и используется сравнение score >= 60.",
  },
  {
    title: "Условия if/else",
    module: "Раздел 4. Логика",
    time: "14 минут",
    subtitle: "Условия позволяют программе выбирать разные действия.",
    goals: ["Писать if и else", "Соблюдать отступы", "Выбирать ветку выполнения"],
    theory: [
      "Конструкция <code>if</code> проверяет условие. Если условие истинно, выполняется блок команд с отступом.",
      "<code>else</code> задает действие на случай, если условие ложно. После <code>if</code> и <code>else</code> ставится двоеточие.",
      "Отступы в Python обязательны: именно по ним язык понимает, какие команды относятся к условию.",
    ],
    example: 'temperature = 28\n\nif temperature > 25:\n    print("Жарко")\nelse:\n    print("Комфортно")',
    task: 'Создайте переменную number = -3. Если число меньше 0, выведите "Отрицательное", иначе выведите "Не отрицательное".',
    hint: "Используйте условие number < 0 и не забудьте отступы внутри if и else.",
    placeholder: "number = -3\n# Ниже напишите условие if/else",
    validate(output, code) {
      return /if\s+number\s*</.test(code) && normalize(output).includes("отрицательное");
    },
    success: "Условие выбрало правильную ветку.",
    retry: 'Для number = -3 программа должна вывести "Отрицательное".',
  },
  {
    title: "Цикл for",
    module: "Раздел 5. Повторения",
    time: "13 минут",
    subtitle: "Цикл for повторяет команды заданное количество раз.",
    goals: ["Использовать for", "Работать с range()", "Повторять вывод в цикле"],
    theory: [
      "Цикл <code>for</code> удобен, когда нужно выполнить действие несколько раз или пройти по последовательности значений.",
      "<code>range(1, 6)</code> создает числа от 1 до 5. Правая граница не включается.",
      "Команды внутри цикла пишутся с отступом, как и команды внутри условия.",
    ],
    example: 'for number in range(1, 4):\n    print("Шаг", number)',
    task: "Выведите числа от 1 до 5 включительно, каждое число с новой строки.",
    hint: "Подойдет цикл for number in range(1, 6).",
    placeholder: "Напишите цикл for с range()",
    validate(output, code) {
      const values = numbersFrom(output);
      return /for\s+/.test(code) && [1, 2, 3, 4, 5].every((value, index) => values[index] === value);
    },
    success: "Цикл вывел все числа в правильном порядке.",
    retry: "Нужно получить последовательность 1, 2, 3, 4, 5.",
  },
  {
    title: "Цикл while",
    module: "Раздел 5. Повторения",
    time: "14 минут",
    subtitle: "Цикл while повторяется, пока условие остается истинным.",
    goals: ["Писать while", "Обновлять переменную внутри цикла", "Избегать бесконечного цикла"],
    theory: [
      "Цикл <code>while</code> работает, пока условие дает <code>True</code>. Его используют, когда заранее не всегда известно количество повторений.",
      "Внутри <code>while</code> важно менять значение, от которого зависит условие. Иначе цикл может стать бесконечным.",
      "Например, счетчик можно уменьшать командой <code>count = count - 1</code> или короткой записью <code>count -= 1</code>.",
    ],
    example: 'count = 3\nwhile count > 0:\n    print(count)\n    count -= 1\nprint("Готово")',
    task: 'Сделайте обратный отсчет: выведите 3, 2, 1, а затем строку "Старт".',
    hint: "Начните со счетчика 3, в цикле уменьшайте его на 1, после цикла выведите текст.",
    placeholder: "count = 3\n# Напишите цикл while",
    validate(output, code) {
      const values = numbersFrom(output);
      return /while\s+/.test(code) && values[0] === 3 && values[1] === 2 && values[2] === 1 && normalize(output).includes("старт");
    },
    success: "Обратный отсчет работает и завершается.",
    retry: 'В выводе должны быть 3, 2, 1 и слово "Старт".',
  },
  {
    title: "Списки",
    module: "Раздел 6. Коллекции",
    time: "13 минут",
    subtitle: "Список хранит несколько значений в одной переменной.",
    goals: ["Создавать список", "Получать элемент по индексу", "Узнавать длину списка"],
    theory: [
      "Список записывается в квадратных скобках: <code>items = [\"чай\", \"кофе\", \"сок\"]</code>.",
      "Индексация начинается с нуля. Первый элемент списка — это <code>items[0]</code>, второй — <code>items[1]</code>.",
      "Функция <code>len()</code> возвращает количество элементов в списке.",
    ],
    example: 'fruits = ["яблоко", "банан", "апельсин"]\nprint(fruits[0])\nprint(len(fruits))',
    task: 'Создайте список fruits из трех фруктов. Выведите первый фрукт и количество элементов списка.',
    hint: "Первый элемент имеет индекс 0, количество элементов считает len().",
    placeholder: 'fruits = ["яблоко", "банан", "апельсин"]\n# Выведите первый элемент и длину списка',
    validate(output, code) {
      return /\[.*\]/s.test(code) && /len\s*\(/.test(code) && numbersFrom(output).includes(3);
    },
    success: "Список создан, первый элемент и длина выводятся.",
    retry: "Нужно создать список из трех элементов и вывести длину 3.",
  },
  {
    title: "Списки и цикл",
    module: "Раздел 6. Коллекции",
    time: "15 минут",
    subtitle: "Обрабатываем несколько значений с помощью цикла.",
    goals: ["Перебирать список", "Накапливать сумму", "Использовать переменную total"],
    theory: [
      "Цикл <code>for</code> может проходить не только по <code>range()</code>, но и по списку.",
      "Чтобы посчитать сумму вручную, создают переменную <code>total = 0</code>, а затем прибавляют к ней каждый элемент.",
      "Такая схема встречается очень часто: подготовить переменную, пройти по данным, обновить результат.",
    ],
    example: 'numbers = [1, 2, 3]\ntotal = 0\nfor number in numbers:\n    total += number\nprint(total)',
    task: "Для списка numbers = [2, 4, 6] посчитайте сумму через цикл и выведите результат.",
    hint: "Создайте total = 0, затем внутри цикла прибавляйте number к total.",
    placeholder: "numbers = [2, 4, 6]\ntotal = 0\n# Ниже напишите цикл",
    validate(output, code) {
      return /for\s+/.test(code) && /total/.test(code) && numbersFrom(output).includes(12);
    },
    success: "Сумма списка посчитана через цикл.",
    retry: "В выводе должно появиться число 12, полученное через цикл.",
  },
  {
    title: "Функции",
    module: "Раздел 7. Свой код",
    time: "16 минут",
    subtitle: "Функция объединяет команды под одним именем и возвращает результат.",
    goals: ["Объявлять функцию через def", "Передавать параметр", "Возвращать значение через return"],
    theory: [
      "Функция помогает не повторять код и называть действие понятным именем.",
      "Функция объявляется через <code>def</code>. В скобках указывают параметры, а результат можно вернуть через <code>return</code>.",
      "После объявления функцию нужно вызвать, иначе код внутри нее не выполнится.",
    ],
    example: 'def double(number):\n    return number * 2\n\nprint(double(5))',
    task: "Создайте функцию square(number), которая возвращает квадрат числа. Вызовите ее для 9 и выведите результат.",
    hint: "Квадрат можно получить выражением number * number.",
    placeholder: "def square(number):\n    # верните квадрат числа\n\n# вызовите функцию и выведите результат",
    validate(output, code) {
      return /def\s+square\s*\(/.test(code) && /return/.test(code) && numbersFrom(output).includes(81);
    },
    success: "Функция создана и возвращает правильный результат.",
    retry: "Нужно объявить square(number), вернуть квадрат и вывести 81.",
  },
];

const storageKeys = {
  activeLesson: "python-course-v2-active-lesson",
  completed: "python-course-v2-completed-lessons",
  codePrefix: "python-course-v2-code-",
  users: "python-course-v2-users",
  currentUser: "python-course-v2-current-user",
};

const state = {
  activeLesson: clampLessonIndex(Number(localStorage.getItem(storageKeys.activeLesson)) || 0),
  completed: loadCompletedLessons(),
  currentUser: loadCurrentUser(),
  pendingAuthAction: null,
  autoAdvanceTimer: null,
  running: false,
};

const elements = {
  homeLink: document.querySelector("#homeLink"),
  homePage: document.querySelector("#homePage"),
  courseView: document.querySelector("#courseView"),
  startCourse: document.querySelector("#startCourse"),
  continueCourse: document.querySelector("#continueCourse"),
  homeProgressPanel: document.querySelector(".home-progress-panel"),
  homeProgressTitle: document.querySelector("#homeProgressTitle"),
  homeProgressText: document.querySelector("#homeProgressText"),
  homeProgressFill: document.querySelector("#homeProgressFill"),
  toggleHomeTopics: document.querySelector("#toggleHomeTopics"),
  homeTopicList: document.querySelector("#homeTopicList"),
  lessonNav: document.querySelector("#lessonNav"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonSubtitle: document.querySelector("#lessonSubtitle"),
  moduleLabel: document.querySelector("#moduleLabel"),
  goalList: document.querySelector("#goalList"),
  lessonContent: document.querySelector("#lessonContent"),
  exampleCode: document.querySelector("#exampleCode"),
  taskText: document.querySelector("#taskText"),
  codeEditor: document.querySelector("#codeEditor"),
  lineNumbers: document.querySelector("#lineNumbers"),
  output: document.querySelector("#output"),
  feedback: document.querySelector("#feedback"),
  runStatus: document.querySelector("#runStatus"),
  runCode: document.querySelector("#runCode"),
  resetCode: document.querySelector("#resetCode"),
  clearOutput: document.querySelector("#clearOutput"),
  progressText: document.querySelector("#progressText"),
  progressFill: document.querySelector("#progressFill"),
  toggleLessons: document.querySelector("#toggleLessons"),
  authActions: document.querySelector("#authActions"),
  userPanel: document.querySelector("#userPanel"),
  userNameLabel: document.querySelector("#userNameLabel"),
  openLogin: document.querySelector("#openLogin"),
  openRegister: document.querySelector("#openRegister"),
  logoutButton: document.querySelector("#logoutButton"),
  authOverlay: document.querySelector("#authOverlay"),
  closeAuth: document.querySelector("#closeAuth"),
  authTitle: document.querySelector("#authTitle"),
  authIntro: document.querySelector("#authIntro"),
  showRegister: document.querySelector("#showRegister"),
  showLogin: document.querySelector("#showLogin"),
  registerForm: document.querySelector("#registerForm"),
  loginForm: document.querySelector("#loginForm"),
  registerName: document.querySelector("#registerName"),
  registerEmail: document.querySelector("#registerEmail"),
  registerPassword: document.querySelector("#registerPassword"),
  registerPasswordConfirm: document.querySelector("#registerPasswordConfirm"),
  passwordMatchMessage: document.querySelector("#passwordMatchMessage"),
  loginEmail: document.querySelector("#loginEmail"),
  loginPassword: document.querySelector("#loginPassword"),
  authMessage: document.querySelector("#authMessage"),
};

function init() {
  renderNavigation();
  renderLesson(state.activeLesson);
  showHome();
  bindEvents();
  updateAuthUi();
  refreshIcons();
}

function bindEvents() {
  elements.runCode.addEventListener("click", runCode);
  elements.resetCode.addEventListener("click", clearCurrentCode);
  elements.clearOutput.addEventListener("click", clearConsole);
  elements.toggleLessons.addEventListener("click", toggleLessonMenu);
  elements.homeLink.addEventListener("click", goHome);
  elements.toggleHomeTopics.addEventListener("click", toggleHomeTopics);
  elements.startCourse.addEventListener("click", () => {
    requireAuth(() => {
      renderLesson(0);
      showCourse();
    });
  });
  elements.continueCourse.addEventListener("click", () => {
    requireAuth(() => showCourse());
  });
  elements.openRegister.addEventListener("click", () => openAuth("register"));
  elements.openLogin.addEventListener("click", () => openAuth("login"));
  elements.closeAuth.addEventListener("click", closeAuth);
  elements.showRegister.addEventListener("click", () => setAuthMode("register"));
  elements.showLogin.addEventListener("click", () => setAuthMode("login"));
  elements.registerForm.addEventListener("submit", handleRegister);
  elements.loginForm.addEventListener("submit", handleLogin);
  elements.registerPassword.addEventListener("input", () => validatePasswordMatch());
  elements.registerPasswordConfirm.addEventListener("input", () => validatePasswordMatch(true));
  elements.logoutButton.addEventListener("click", logout);
  elements.codeEditor.addEventListener("input", () => {
    updateLineNumbers();
    persistCode();
  });

  elements.codeEditor.addEventListener("scroll", () => {
    elements.lineNumbers.scrollTop = elements.codeEditor.scrollTop;
  });

  elements.codeEditor.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      insertAtCursor("    ");
    }

    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      runCode();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeLessonMenu();
    }
  });
}

function renderNavigation() {
  elements.lessonNav.innerHTML = lessons
    .map((lesson, index) => {
      const complete = state.completed.has(index);
      return `
        <button class="lesson-button ${index === state.activeLesson ? "is-active" : ""}" type="button" data-lesson="${index}">
          <span class="lesson-number">${index + 1}</span>
          <span>
            <strong>${escapeHtml(lesson.title)}</strong>
            <span>${escapeHtml(lesson.time)}</span>
          </span>
          <i data-lucide="${complete ? "check-circle-2" : "circle"}"></i>
        </button>
      `;
    })
    .join("");

  elements.lessonNav.querySelectorAll(".lesson-button").forEach((button) => {
    button.addEventListener("click", () => changeLesson(Number(button.dataset.lesson)));
  });

  updateProgress();
  renderHomeTopicList();
  refreshIcons();
}

function renderHomeTopicList() {
  elements.homeTopicList.innerHTML = lessons
    .map((lesson, index) => {
      return `
        <div class="home-topic-item">
          <span class="home-topic-number">${index + 1}</span>
          <span class="home-topic-title">${escapeHtml(lesson.title)}</span>
        </div>
      `;
    })
    .join("");
}

function renderLesson(index) {
  const lesson = lessons[index];
  clearAutoAdvance();
  state.activeLesson = index;
  localStorage.setItem(storageKeys.activeLesson, String(index));

  elements.lessonTitle.textContent = lesson.title;
  elements.lessonSubtitle.textContent = lesson.subtitle;
  elements.moduleLabel.textContent = lesson.module;
  elements.goalList.innerHTML = lesson.goals
    .map((goal) => `<div class="goal-item"><i data-lucide="check"></i><span>${escapeHtml(goal)}</span></div>`)
    .join("");
  elements.lessonContent.innerHTML = lesson.theory.map(renderTheoryBlock).join("");
  elements.exampleCode.textContent = lesson.example;
  elements.taskText.textContent = lesson.task;
  elements.codeEditor.placeholder = lesson.placeholder || "Напишите свое решение здесь";
  elements.codeEditor.value = getStoredCode(index) || "";
  elements.output.textContent = "";
  elements.output.classList.remove("is-error");
  setFeedback("info", "Введите решение и запустите код, чтобы получить обратную связь.");
  elements.runStatus.textContent = isPythonReady() ? "Готово к запуску" : "Загрузка Python-движка";

  updateLineNumbers();
  renderNavigation();
  refreshIcons();
}

function changeLesson(nextIndex) {
  if (nextIndex < 0 || nextIndex >= lessons.length || nextIndex === state.activeLesson) {
    return;
  }

  if (!isAuthenticated()) {
    state.pendingAuthAction = () => changeLesson(nextIndex);
    showHome();
    openAuth("register", "Для доступа к урокам нужна регистрация или вход.");
    return;
  }

  renderLesson(nextIndex);
  showCourse();
  closeLessonMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleLessonMenu() {
  const isOpen = document.body.classList.toggle("lessons-open");
  elements.toggleLessons.setAttribute("aria-expanded", String(isOpen));
}

function closeLessonMenu() {
  document.body.classList.remove("lessons-open");
  elements.toggleLessons.setAttribute("aria-expanded", "false");
}

function toggleHomeTopics() {
  const isOpen = elements.homeProgressPanel.classList.toggle("is-open");
  elements.homeTopicList.hidden = !isOpen;
  elements.toggleHomeTopics.setAttribute("aria-expanded", String(isOpen));
}

function goHome(event) {
  event.preventDefault();
  showHome();
}

function showHome() {
  document.body.classList.add("home-view");
  document.body.classList.remove("course-view", "lessons-open");
  elements.toggleLessons.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showCourse() {
  if (!isAuthenticated()) {
    showHome();
    openAuth("register", "Зарегистрируйтесь или войдите, чтобы открыть уроки.");
    return;
  }

  document.body.classList.add("course-view");
  document.body.classList.remove("home-view");
  closeLessonMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function clampLessonIndex(index) {
  if (!Number.isInteger(index)) {
    return 0;
  }

  return Math.min(Math.max(index, 0), lessons.length - 1);
}

function loadCompletedLessons() {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKeys.completed) || "[]");
    return new Set(parsed.filter((index) => Number.isInteger(index) && index >= 0 && index < lessons.length));
  } catch {
    return new Set();
  }
}

function loadUsers() {
  try {
    const users = JSON.parse(localStorage.getItem(storageKeys.users) || "[]");
    return Array.isArray(users) ? users : [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(storageKeys.users, JSON.stringify(users));
}

function loadCurrentUser() {
  const email = localStorage.getItem(storageKeys.currentUser);
  if (!email) {
    return null;
  }

  return loadUsers().find((user) => user.email === email) || null;
}

function isAuthenticated() {
  return Boolean(state.currentUser);
}

function requireAuth(action) {
  if (isAuthenticated()) {
    action();
    return true;
  }

  state.pendingAuthAction = action;
  showHome();
  openAuth("register", "Для доступа к урокам нужна регистрация или вход.");
  return false;
}

function openAuth(mode = "register", message = "") {
  setAuthMode(mode);
  setAuthMessage(message, "error");
  elements.authOverlay.hidden = false;
  document.body.classList.add("auth-open");
  refreshIcons();

  const firstInput = mode === "register" ? elements.registerName : elements.loginEmail;
  setTimeout(() => firstInput.focus(), 50);
}

function closeAuth(clearPending = true) {
  elements.authOverlay.hidden = true;
  document.body.classList.remove("auth-open");
  setAuthMessage("");

  if (clearPending) {
    state.pendingAuthAction = null;
  }
}

function setAuthMode(mode) {
  const registerMode = mode === "register";
  elements.registerForm.hidden = !registerMode;
  elements.loginForm.hidden = registerMode;
  elements.showRegister.classList.toggle("is-active", registerMode);
  elements.showLogin.classList.toggle("is-active", !registerMode);
  elements.authTitle.textContent = registerMode ? "Создайте аккаунт" : "Войдите в аккаунт";
  elements.authIntro.textContent = registerMode
    ? "Регистрация откроет доступ ко всем урокам курса."
    : "Введите email и пароль, чтобы продолжить обучение.";
  setAuthMessage("");
}

function handleRegister(event) {
  event.preventDefault();

  const name = elements.registerName.value.trim();
  const email = normalizeEmail(elements.registerEmail.value);
  const password = elements.registerPassword.value;
  const confirm = elements.registerPasswordConfirm.value;

  if (!validatePasswordMatch(true)) {
    elements.registerPasswordConfirm.focus();
    return;
  }

  if (name.length < 2) {
    setAuthMessage("Введите имя не короче двух символов.");
    return;
  }

  if (password.length < 4) {
    setAuthMessage("Пароль должен быть не короче 4 символов.");
    return;
  }

  if (password !== confirm) {
    setAuthMessage("Пароли не совпадают.");
    return;
  }

  const users = loadUsers();
  if (users.some((user) => user.email === email)) {
    setAuthMessage("Пользователь с таким email уже зарегистрирован.");
    return;
  }

  const user = { name, email, password };
  users.push(user);
  saveUsers(users);
  completeAuth(user);
}

function validatePasswordMatch(showEmptyMessage = false) {
  const password = elements.registerPassword.value;
  const confirm = elements.registerPasswordConfirm.value;
  const hasBothValues = password.length > 0 && confirm.length > 0;
  const matches = hasBothValues && password === confirm;

  elements.registerPasswordConfirm.classList.remove("is-valid", "is-invalid");
  elements.passwordMatchMessage.classList.remove("is-success");

  if (!confirm && !showEmptyMessage) {
    elements.registerPasswordConfirm.setCustomValidity("");
    elements.passwordMatchMessage.textContent = "";
    return true;
  }

  if (!confirm) {
    elements.registerPasswordConfirm.setCustomValidity("Повторите пароль.");
    elements.registerPasswordConfirm.classList.add("is-invalid");
    elements.passwordMatchMessage.textContent = "Повторите пароль.";
    return false;
  }

  if (!matches) {
    elements.registerPasswordConfirm.setCustomValidity("Пароли не совпадают.");
    elements.registerPasswordConfirm.classList.add("is-invalid");
    elements.passwordMatchMessage.textContent = "Пароли не совпадают.";
    return false;
  }

  elements.registerPasswordConfirm.setCustomValidity("");
  elements.registerPasswordConfirm.classList.add("is-valid");
  elements.passwordMatchMessage.classList.add("is-success");
  elements.passwordMatchMessage.textContent = "Пароли совпадают.";
  return true;
}

function handleLogin(event) {
  event.preventDefault();

  const email = normalizeEmail(elements.loginEmail.value);
  const password = elements.loginPassword.value;
  const user = loadUsers().find((item) => item.email === email && item.password === password);

  if (!user) {
    setAuthMessage("Неверный email или пароль.");
    return;
  }

  completeAuth(user);
}

function completeAuth(user) {
  state.currentUser = user;
  localStorage.setItem(storageKeys.currentUser, user.email);
  updateAuthUi();
  setAuthMessage("Доступ открыт.", "success");
  closeAuth(false);

  const action = state.pendingAuthAction;
  state.pendingAuthAction = null;
  if (action) {
    action();
  }
}

function logout() {
  state.currentUser = null;
  state.pendingAuthAction = null;
  localStorage.removeItem(storageKeys.currentUser);
  updateAuthUi();
  showHome();
}

function updateAuthUi() {
  const user = state.currentUser;
  elements.authActions.hidden = Boolean(user);
  elements.userPanel.hidden = !user;
  elements.userNameLabel.textContent = user ? user.name : "";
}

function setAuthMessage(message, type = "error") {
  elements.authMessage.textContent = message;
  elements.authMessage.classList.toggle("is-success", type === "success");
}

function normalizeEmail(value) {
  return String(value).trim().toLowerCase();
}

function renderTheoryBlock(block) {
  return block.trim().startsWith("<ul") ? block : `<p>${block}</p>`;
}

function getStoredCode(index) {
  return localStorage.getItem(`${storageKeys.codePrefix}${index}`);
}

function persistCode() {
  localStorage.setItem(`${storageKeys.codePrefix}${state.activeLesson}`, elements.codeEditor.value);
}

function clearCurrentCode() {
  elements.codeEditor.value = "";
  persistCode();
  updateLineNumbers();
  clearConsole();
  setFeedback("info", "Поле очищено. Напишите решение самостоятельно.");
  elements.codeEditor.focus();
}

function clearConsole() {
  elements.output.textContent = "";
  elements.output.classList.remove("is-error");
  elements.runStatus.textContent = isPythonReady() ? "Готово к запуску" : "Загрузка Python-движка";
}

async function runCode() {
  if (state.running) {
    return;
  }

  clearAutoAdvance();

  if (!elements.codeEditor.value.trim()) {
    elements.output.textContent = "";
    setFeedback("error", "Редактор пустой. Сначала напишите свое решение.");
    return;
  }

  if (!isPythonReady()) {
    elements.output.textContent =
      "Python-движок еще не загрузился. Проверьте подключение к интернету и повторите запуск.";
    elements.output.classList.add("is-error");
    setFeedback("error", "Не удалось запустить код: библиотека Skulpt пока недоступна.");
    return;
  }

  state.running = true;
  elements.runCode.disabled = true;
  elements.runStatus.textContent = "Выполнение";
  elements.output.textContent = "";
  elements.output.classList.remove("is-error");
  setFeedback("info", "Код выполняется...");

  let programOutput = "";

  function write(text) {
    programOutput += text;
    elements.output.textContent = programOutput;
    elements.output.scrollTop = elements.output.scrollHeight;
  }

  try {
    Sk.configure({
      output: write,
      read: builtinRead,
      __future__: Sk.python3,
      execLimit: 5000,
      inputfun(promptText) {
        const answer = window.prompt(promptText || "Введите значение") ?? "";
        write(`${promptText || ""}${answer}\n`);
        return answer;
      },
      inputfunTakesPrompt: true,
    });

    await Sk.misceval.asyncToPromise(() =>
      Sk.importMainWithBody("<stdin>", false, elements.codeEditor.value, true),
    );

    elements.runStatus.textContent = "Выполнено";
    validateCurrentLesson(programOutput);
  } catch (error) {
    const message = formatPythonError(error);
    elements.output.textContent = message;
    elements.output.classList.add("is-error");
    elements.runStatus.textContent = "Ошибка";
    setFeedback("error", "Python сообщил об ошибке. Проверьте синтаксис, отступы и имена переменных.");
  } finally {
    state.running = false;
    elements.runCode.disabled = false;
  }
}

function builtinRead(fileName) {
  if (Sk.builtinFiles === undefined || Sk.builtinFiles.files[fileName] === undefined) {
    throw new Error(`Файл не найден: ${fileName}`);
  }
  return Sk.builtinFiles.files[fileName];
}

function validateCurrentLesson(output) {
  const lesson = lessons[state.activeLesson];
  const passed = lesson.validate(output.trim(), elements.codeEditor.value);

  if (passed) {
    const completedLesson = state.activeLesson;
    state.completed.add(state.activeLesson);
    localStorage.setItem(storageKeys.completed, JSON.stringify([...state.completed]));
    if (completedLesson < lessons.length - 1) {
      setFeedback("success", `${lesson.success} Следующее задание откроется автоматически.`);
      scheduleAutoAdvance(completedLesson);
    } else {
      setFeedback("success", `${lesson.success} Курс завершен.`);
    }
    renderNavigation();
    return;
  }

  clearAutoAdvance();
  setFeedback("error", lesson.retry);
}

function scheduleAutoAdvance(completedLesson) {
  clearAutoAdvance();
  state.autoAdvanceTimer = window.setTimeout(() => {
    if (state.activeLesson === completedLesson) {
      changeLesson(completedLesson + 1);
    }
  }, 1300);
}

function clearAutoAdvance() {
  if (state.autoAdvanceTimer) {
    window.clearTimeout(state.autoAdvanceTimer);
    state.autoAdvanceTimer = null;
  }
}

function setFeedback(type, text) {
  const icon = {
    success: "check-circle-2",
    error: "alert-circle",
    info: "info",
  }[type];

  elements.feedback.className = `feedback is-${type}`;
  elements.feedback.innerHTML = `<i data-lucide="${icon}"></i><span>${escapeHtml(text)}</span>`;
  refreshIcons();
}

function updateProgress() {
  const percent = Math.round((state.completed.size / lessons.length) * 100);
  elements.progressText.textContent = `${percent}%`;
  elements.progressFill.style.width = `${percent}%`;
  elements.homeProgressText.textContent = `${percent}%`;
  elements.homeProgressFill.style.width = `${percent}%`;
  elements.homeProgressTitle.textContent = `${state.completed.size} из ${lessons.length} уроков завершено`;
}

function updateLineNumbers() {
  const lines = Math.max(1, elements.codeEditor.value.split("\n").length);
  elements.lineNumbers.innerHTML = Array.from({ length: lines }, (_, index) => `<span>${index + 1}</span>`).join("");
}

function insertAtCursor(text) {
  const input = elements.codeEditor;
  const start = input.selectionStart;
  const end = input.selectionEnd;
  input.value = `${input.value.slice(0, start)}${text}${input.value.slice(end)}`;
  input.selectionStart = input.selectionEnd = start + text.length;
  input.dispatchEvent(new Event("input"));
}

function isPythonReady() {
  return Boolean(window.Sk && Sk.misceval && Sk.builtinFiles);
}

function formatPythonError(error) {
  if (!error) {
    return "Неизвестная ошибка выполнения.";
  }

  return error.toString ? error.toString() : String(error);
}

function normalize(value) {
  return String(value).toLowerCase().replace(/\s+/g, " ").trim();
}

function numbersFrom(value) {
  return String(value)
    .match(/-?\d+(?:[.,]\d+)?/g)
    ?.map((number) => Number(number.replace(",", "."))) || [];
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

window.addEventListener("load", () => {
  elements.runStatus.textContent = isPythonReady() ? "Готово к запуску" : "Загрузка Python-движка";
});

init();
