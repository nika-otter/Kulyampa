import Image from 'next/image'
import React from 'react'

const Kulyampa = () => {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">Кулямпа: Традиційна українська страва</h1>
      <p className="text-gray-600 mb-6">Опубліковано 19 серпня 2023</p>
      <Image
        src="/ting-tian-E6DsqnZbZ4o-unsplash(1).jpg"
        alt="Кулямпа"
        className="w-full h-auto mb-6"
      />
      <p className="text-lg leading-relaxed mb-4">
        Кулямпа — це одна з найулюбленіших та найрозповсюдженіших страв
        в українській кухні. Вона володіє багатим смаком та неперевершеним
        ароматом, які дарують незабутні смакові відчуття кожному гурману.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Головною особливістю кулямпи є використання натуральних інгредієнтів.
        Свіжі овочі, натуральне м'ясо та ароматні спеції — ось секрет її
        неперевершеності. Кулямпа готується шляхом складання шарів різних
        компонентів, які потім тушкуються разом. Такий спосіб готування дозволяє
        краще зберегти смак та корисні властивості кожного інгредієнта.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        Часто кулямпу подають на святковому столі, особливо під час родинних
        зібрань та урочистих подій. Вона завжди радує як дорослих, так і дітей
        своєю смаковою насиченістю та неперевершеним ароматом.
      </p>
      <p className="text-lg leading-relaxed">
        Якщо ви ще не мали нагоди спробувати цю неперевершену страву, обов'язково
        знайдіть час і зробіть це. Кулямпа — це справжнє творіння української кулінарії,
        яке дарує незабутні враження та смакові відчуття.
      </p>
    </article>
  )
}

export default Kulyampa