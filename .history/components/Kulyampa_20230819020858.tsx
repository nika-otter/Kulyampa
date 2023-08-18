import Image from 'next/image'
import React from 'react'

const Kulyampa = () => {
  return (
    <div className="bg-white p-4">
      <h1 className="text-3xl font-bold mb-4">Кулямпа: Традиційна українська страва</h1>
      <p className="text-gray-600 mb-2">Опубліковано 18 серпня 2023</p>
      <Image
        src="/ca-creative-yzFO7e_87fs-unsplash.jpg"
        alt="Кулямпа"
        className="w-full h-auto mb-6"
        width={192}
        height={128}
      />

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
        </ul>
      </nav>

      <section id="about" className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Про Кулямпу</h2>
        <p className="text-lg leading-relaxed mb-4">
          Кулямпа — це одна з найулюбленіших та найрозповсюдженіших страв
          в українській кухні. Вона володіє багатим смаком та неперевершеним
          ароматом, які дарують незабутні смакові відчуття кожному гурману.
        </p>
      </section>

      <section id="recipe" className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Рецепт Кулямпи</h2>
        <p className="text-lg leading-relaxed mb-4">
          Для приготування Кулямпи вам знадобляться свіжі овочі, натуральне м'ясо,
          ароматні спеції та любов до української кухні. Спробуйте цей рецепт і
          насолоджуйтесь неперевершеним смаком традиційної страви.
        </p>
        {/* Add the recipe steps here */}
      </section>

      <section id="traditions">
        <h2 className="text-2xl font-semibold mb-2">Традиції</h2>
        <p className="text-lg leading-relaxed">
          Кулямпа часто подається на святковому столі, особливо під час родинних
          зібрань та урочистих подій. Вона завжди радує як дорослих, так і дітей
          своєю смаковою насиченістю та неперевершеним ароматом.
        </p>
      </section>

      {/* Add more interesting information or sections here */}
    </div>
  )
}

export default Kulyampa

