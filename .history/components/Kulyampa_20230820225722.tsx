import Image from 'next/image'
import React from 'react'

const Kulyampa = () => {

const restaurants = [
    
    {
      name: "Ресторація Шпігеля",
      location: "Хмельницький",
      href: "https://spigel.km.ua/",
    },
    {
      name: "Перша сімейна ресторація Мулярових",
      location: "Івано-Франківськ",
      href: "https://muliarova.if.ua/",
    },
    {
      name: "Пан Атаман",
      location: "Олешки",
      href: "https://www.facebook.com/pan.ataman.kherson/?locale=ru_RU",
    },
    {
      name: "Ресторація Бачевських",
      location: "Львів",
      href: "https://baczewski.com.ua/",
    },
  ];

  return (
    <div className="bg-white p-4">
      <h1 className="text-3xl font-bold mb-4">Кулямпа: Традиційна українська страва</h1>
      <p className="text-gray-600 mb-2">Опубліковано 18 серпня 2023</p>
      
        <img src="/ca-creative-yzFO7e_87fs-unsplash.jpg" alt="Кулямпа" className="w-full h-auto mb-6" />
      <nav className="mb-6">
        <ul className="flex space-x-4">
  <li>
    <a href="#about" className="text-blue-500 hover:underline">Про Кулямпу</a>
  </li>
  <li>
    <a href="#recipe" className="text-blue-500 hover:underline">Рецепт</a>
  </li>
  <li>
    <a href="#traditions" className="text-blue-500 hover:underline">Традиції</a>
  </li>
  <li>
    <a href="#restaurants" className="text-blue-500 hover:underline">Ресторани</a>
  </li>
</ul>

      </nav>

      <section id="about" className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Про Кулямпу</h2>
        <p className="text-lg leading-relaxed mb-4">
          <p className="text-lg leading-relaxed mb-4">
            <span>Кулямпа </span>
           — це неймовірна страва, що вважається істинним скарбом української кулінарії,
          переповнена багатством смаків та ароматів, що відбивають багаторічні традиції та культурну спадщину нашого народу.
          Від тих часів, коли вона вперше з'явилася на українських обідніх столах, аж до сьогодення,
          Кулямпа пройшла великий шлях і стала символом злагоди, щедрості і гостинності.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Кулямпа — це більше, ніж просто страва. Вона є окном у минуле, яке дарує нам змогу сприймати аромати давніх часів
          та відчути палітру смаків, які розповідають про багатство української землі. Кожен шматочок цієї страви — це ковзання в часі,
          зустріч із пращурами, які вже тоді розуміли та цінували цю неповторну симфонію смаків.
        </p>
        </p>
      </section>

      <section id="recipe" className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Рецепт Кулямпи</h2>
        <p className="text-lg leading-relaxed mb-4">
        Для приготування Кулямпи вам знадобляться свіжі овочі, натуральне м'ясо,
        ароматні спеції та любов до української кухні. Спробуйте цей рецепт і
        насолоджуйтесь неперевершеним смаком традиційної страви.
      </p>

      <h3 className="text-xl font-semibold mb-2">Інгредієнти:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>500 г свинячого м'яса</li>
        <li>4 цибулини</li>
        <li>4 моркви</li>
        <li>4 картоплини</li>
        <li>1 перець червоний</li>
        <li>1 перець жовтий</li>
        <li>2 помідори</li>
        <li>2 ст. ложки рослинної олії</li>
        <li>Сіль, перець, спеції за смаком</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Інструкції:</h3>
      <ol className="list-decimal list-inside mb-6">
        <li>Підготуйте всі необхідні інгредієнти.</li>
        <li>Наріжте свиняче м'ясо невеликими кубиками та обсмажте на рослинній олії до золотистої скоринки.</li>
        <li>Додайте нарізану цибулю та готуйте до пом'якшення.</li>
        <li>Додайте нарізані моркву, картоплю, перці та помідори. Перемішуйте.</li>
        <li>Додайте сіль, перець та обрані спеції за смаком.</li>
        <li>Закрийте кришкою і готуйте на маленькому вогні приблизно 40 хвилин, доки овочі не будуть готовими.</li>
        <li>Кулямпа готова! Подавайте гарячою та насолоджуйтеся смаком української кухні.</li>
      </ol>

      <p className="text-lg leading-relaxed">
        Тепер ви знаєте, як приготувати справжню українську Кулямпу. Ця страва
        об'єднує найкращі традиції та смаки української кухні. Спробуйте приготувати
        її самі і насолоджуйтесь неперевершеним смаком!
      </p>
      </section>

      <section id="traditions" className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Традиції</h2>
        <p className="text-lg leading-relaxed mb-4">
          Кулямпа, як справжній символ української кулінарії, здатна змінити атмосферу будь-якого заходу, на якому її подають.
          Її традиційний статус не тільки в питанні їжі, але й у створенні неперевершеної атмосфери єдності та гармонії.
        </p>
        <p className="text-lg leading-relaxed">
          Українські родинні свята без Кулямпи немовби залишаються неповними. Вона вже стала невід'ємною частиною Різдва, Великодня та інших свят,
          які об'єднують рідних та друзів навколо одного столу. Подача Кулямпи на святковому столі завжди супроводжується радісними посмішками,
          веселощами та родинними розмовами. Вона є символом єдності та гармонії, а також нагадує про те, наскільки важливо цінувати свої коріння та спільні моменти.
        </p>
        <p className="text-lg leading-relaxed">
          Крім родинних зібрань, Кулямпа має своє місце й на урочистих подіях, де вона допомагає створити теплу та приємну атмосферу. Весілля, ювілеї, дні народження —
          у будь-якому обраному контексті Кулямпа збагачує подію неповторним відчуттям національної культури та смаку. Її наявність на столі гарантує, що гості залишаться враженими
          і запам'ятають цю подію як особливу та неповторну.
        </p>
        <p className="text-lg leading-relaxed">
          А що стосується молодших членів родини, то Кулямпа завжди має щось для них. Її смакові якості приваблюють найменших гурманів, аромат підкреслює атмосферу родинних свят,
          а колір та форма страви викликають захоплення та інтригують. Ця страва навіть в найменших деталях передає почуття затишку та любові, що є невід'ємними атрибутами справжньої української гостинності.
        </p>
        <p className="text-lg leading-relaxed">
          Отже, Кулямпа — це не лише страва, але й відображення духу української культури, що пронизує кожну родину та подію. Вона зберігає традиції минулого, з'єднує нас з нашими коріннями
          та підкреслює важливість поділитися смаком та радістю разом із близькими людьми.
        </p>
      </section>
      <section id="restaurants" className="mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Ресторани з кулямпою</h2>
      <ul className="list-disc pl-6">
        {restaurants.map((restaurant, index) => (
          <li key={index} className="text-lg mb-2">
            <a href={restaurant.href}><strong>{restaurant.name}</strong> - {restaurant.location}</a>
            
          </li>
        ))}
      </ul>
      <p className="mt-4 text-gray-600">
        Відвідайте ці ресторани, щоб спробувати справжню кулямпу!
      </p>
    </div>
      </section>
     
    </div>
  )
}

export default Kulyampa

