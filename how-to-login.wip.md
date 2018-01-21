# login

```
POST https://www.delivery-club.ru/ajax/login/

c_l=invntrm%40gmail.com&c_p=XXXXXXXX

User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36

Accept: application/json, text/javascript, */*; q=0.01

Content-Type: application/x-www-form-urlencoded; charset=UTF-8

Cookie: ...some cookie...
```

```
GET https://www.delivery-club.ru/

Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8

Cookie: ...some cookie...

User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36
```

```
GET https://www.delivery-club.ru/ajax/feed/

init:true
data[feedbacks][ts]:0
data[registrations][ts]:0
data[menu][ts]:0
data[prizes][ts]:0

{
  "count": {
    "feedbacks": 2,
    "registrations": 1,
    "menu": 1,
    "prizes": 1
  },
  "items": [
    {
      "type": "prizes",
      "ts": 1514059170,
      "id": "ab899c6780b493906ab7b5f66d97d6a1",
      "html": "<li class=\"feed-live__item prizes\">\n\t<div class=\"feed-live__img wrapper-img\">\n\t\t<a href=\"/prizes/cat/20/\" class=\"img\">\n\t\t\t<img src=\"http://delivery-club.ru/pcs/prizes/sert-09.png\" alt=\"\" />\n\t\t</a>\n\t</div>\n\t<div class=\"feed-live__content wrapper-content\">\n\t\t<div class=\"feed-live__content-inner inner-wrapper-content\">\n\t\t\t<div class=\"content\">\n\t\t\t                    <p><strong>Vladimir</strong> выбрал(а) приз\n                        <a href=\"/prizes/cat/20/\">Скидка 250 рублей</a></p>\n                    <p class=\"sub\">обменял(а)                        свои 1250 бонусных баллов\n                        на приз</p>\n                            </div>\n        </div>\n    </div>\n</li>\n"
    },
    {
      "type": "feedbacks",
      "ts": 1514059170,
      "id": "6cf4ae4c66424052e44f666f6cf497c2",
      "html": "<li class=\"feed-live__item feedback up\">\n\t<div class=\"feed-live__img wrapper-img\">\n\t\t<a href=\"/srv/Yakitoria/feedbacks/\" class=\"img\">\n\t\t\t<img src=\"//www.delivery-club.ru/logos/1929.jpg\" alt=\"\" />\n\t\t</a>\n\t</div>\n\t<div class=\"feed-live__content wrapper-content\">\n\t\t<div class=\"feed-live__content-inner inner-wrapper-content\">\n\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<p><strong>Виктория</strong> написала новый отзыв о ресторане <a href=\"/srv/Yakitoria/feedbacks/\">Якитория</a></p>\n                    <p class=\"sub\">\n                        всего 3880 положительных\n                        и 325 отрицательных оценок</p>\n                            </div>\n        </div>\n    </div>\n</li>\n"
    },
    {
      "type": "feedbacks",
      "ts": 1514059170,
      "id": "ce5c4173dd225595367aceddf79ffa5e",
      "html": "<li class=\"feed-live__item feedback up\">\n\t<div class=\"feed-live__img wrapper-img\">\n\t\t<a href=\"/srv/Tochka_jedy/feedbacks/\" class=\"img\">\n\t\t\t<img src=\"//www.delivery-club.ru/logos/12961.jpg\" alt=\"\" />\n\t\t</a>\n\t</div>\n\t<div class=\"feed-live__content wrapper-content\">\n\t\t<div class=\"feed-live__content-inner inner-wrapper-content\">\n\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<p><strong>Лена</strong> написала новый отзыв о ресторане <a href=\"/srv/Tochka_jedy/feedbacks/\">Точка еды</a></p>\n                    <p class=\"sub\">\n                        всего 642 положительные\n                        и 89 отрицательных оценок</p>\n                            </div>\n        </div>\n    </div>\n</li>\n"
    },
    {
      "type": "menu",
      "ts": 1514059170,
      "id": "1a755a8bbc59ce4ed0a89de940e27f7c",
      "html": "<li class=\"feed-live__item menu\">\n\t<div class=\"feed-live__img wrapper-img\">\n\t\t<a href=\"/srv/PRONTO/\" class=\"img\">\n\t\t\t<img src=\"//www.delivery-club.ru/logos/806.png\" alt=\"\" />\n\t\t</a>\n\t</div>\n\t<div class=\"feed-live__content wrapper-content\">\n\t\t<div class=\"feed-live__content-inner inner-wrapper-content\">\n\t\t\t<div class=\"content\">\n\t\t\t                    <p><strong>Алексей</strong> изучает\n                        меню ресторана <a\n                                href=\"/srv/PRONTO/\">PRONTO</a></p>\n                            </div>\n        </div>\n    </div>\n</li>\n"
    },
    {
      "type": "registrations",
      "ts": 1514059170,
      "id": "a4a1eeeef72d1a962420d20349809df8",
      "html": "<li class=\"feed-live__item join\">\n\t<div class=\"feed-live__img wrapper-img\">\n\t\t<a href=\"#\" class=\"img\">\n\t\t\t<img src=\"/img/home/home-icon-join-big.png\" alt=\"\" />\n\t\t</a>\n\t</div>\n\t<div class=\"feed-live__content wrapper-content\">\n\t\t<div class=\"feed-live__content-inner inner-wrapper-content\">\n\t\t\t<div class=\"content\">\n\t\t\t                    <p><strong>Александр</strong>\n                        присоединился к нашему клубу</p>\n                    <p class=\"sub\">встречаем нового участника клуба!</p>\n                            </div>\n        </div>\n    </div>\n</li>\n"
    }
  ]
}
```

# Chajkhona_1 (none_auto: звонят по телефону)

Сёмга по-чайхански
POST https://www.delivery-club.ru/ajax/cart/

product_id: 94530381
quantity: 1
s_id: 23079
byWeight: 0
