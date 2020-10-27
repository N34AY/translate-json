exports.module = {
  common: {
    num: 'Количество',
    size: 'Размер',
    piece: 'шт.',
    notAvailable: 'Нет в ноличии',
    readAll: 'Читать полностью',
    toMainPage: 'На главную',
    contacts: 'Контакты',
    mainPage: 'Главная',
    brands: 'Бренды',
    summAll: 'Сумма заказа:',
    send: 'Отправить',
    save: 'Сохранить',
    yes: 'Да',
    no: 'Нет',
    confirmExit: 'Вы действительно хотите выйти?',
    logout: 'Выход',
    login: 'Вход',
    with: 'от',
    to: 'до',
    items: {
      products: 'Товары',
      price: 'Цена',
      size: 'Размер',
      quantity: 'Количество',
      summ: 'Сумма'
    }
  },
  forms: {
    name: 'Ваше имя',
    lastName: 'Ваша фамилия',
    phone: 'Ваш телефон',
    email: 'Ваш E-mail',
    password: 'Пароль',
    newPassword: 'Введите новый пароль',
    repeatNewPassword: 'Повторите новый пароль',
    comment: 'Ваш комментарий',
    changePassword: 'Изменение пароля',
    title: {
      info: 'Ваши данные'
    },
    buttons: {
      newUser: 'Новый покупатель',
      oldUser: 'Постоянный покупатель'
    },
    validate: {
      password: {
        valid: 'Пароль введен верно',
        minLength: 'Минимальна длина',
        symbols: 'символов',
        change: 'Сменить',
        match: 'Пароли совпадают',
        noMatch: 'Пароли не совпадают',
        success: 'Пароль успешно изменен'
      }
    }
  },
  categoryBlock: {
    buttonAllCategory: 'Категории товаров'
  },
  header: {
    links: {
      search: 'Поиск',
      basket: 'Корзина',
      user: {
        noauth: 'Войти',
        auth: 'Профиль'
      }
    }
  },
  blocks: {
    new: 'Новинки',
    stock: 'Акции',
    hits: 'Хиты',
    blog: 'Блог',
    viewed: 'Вы смотрели',
    similar: 'Рекомендуем'
  },
  footer: {
    titles: {
      info: 'Информация',
      user: 'Покупателям',
      social: 'Мы в соцсетях',
      contacts: 'Контакты'
    }
  },
  user: {
    links: {
      cabinet: 'Личный кабинет',
      orders: 'История заказов',
      favorites: 'Избранное',
      return: 'Возврат'
    }
  },
  placingOrder: {
    title: 'Оформление заказа',
    promocode: {
      title: 'У меня есть промокод',
      button: 'Получить'
    },
    paymentTypes: {
      title: 'Способы оплаты',
      cash: 'Наличными',
      card: 'Оплата на карту',
      terminal: 'Наложеный платеж'
    },
    deliveryTypes: {
      title: 'Способы доставки',
      pickup: {
        title: 'Самовывоз',
        time: 'Время самовывоза'
      },
      courier: {
        title: 'Доставка курьером',
        myAddresses: 'Мои адресса',
        form: {
          city: 'Город',
          district: 'Район',
          street: 'Улица',
          house: 'Дом',
          appartment: 'Квартира/Офис',
          level: 'Этаж',
          enter: 'Парадная'
        }
      },
      newPost: {
        title: 'Новая почта',
        form: {
          region: 'Область',
          city: 'Город',
          warehouse: 'Отделение'
        }
      }
    },
    buttons: {
      placeOrder: 'Оформить заказ'
    },
    validations: {
      invalid: {
        user: 'Нужно быть авторезированным или заполнить пользовательские данные',
        pickup: 'Укажите корректное время самовывоза',
        courier: 'Укажите район, улицу и дом для доставки',
        newPost: 'Укажите область, город и отделение новой почты'
      }
    }
  },
  cartWindow: {
    button: 'Оформить заказ',
    noItems: 'В корзине пусто на душе грустно!'
  },
  thankyou: {
    title: 'Спасибо',
    text1: 'Ваш заказ принят в обработку',
    text2: 'С вами свяжеться продавец'
  },
  blog: {
    otherPosts: {
      title: 'Читать други статьи'
    }
  },
  category: {
    sort: {
      title: 'Сортировать',
      popular: 'Сначала популярные',
      new: 'Сначала новые',
      cheap: 'От дешевых',
      expensive: 'От дорогих'
    },
    filters: {
      titles: {
        category: 'Категория',
        price: 'Цена'
      }
    }
  },
  oneProduct: {
    oneClick: {
      title: 'Быстрый заказ',
      fio: 'Ваше ФИО',
      phone: 'Ваш телефон',
      email: 'Ваш E-mail'
    },
    characteristics: {
      title: 'Характеристики',
      article: 'Код товара:',
      toBasket: 'В корзину',
      oneClick: 'Купить в 1 клик'
    },
    tableSize: {
      button: 'Таблица размеров'
    },
    info: {
      title: 'Описание',
      noInfo: 'Текст ушел но обещал вернутся :3'
    }
  }
}