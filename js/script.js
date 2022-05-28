// Vue.component("header", {
//   props: {},
//   // template: ``,
//   data() {
//     return {
//
//     }
//   },
//   methods: {},
//   computed: {},
// })


let app = new Vue({
    el: '#app',
    data: {
      language: "eng",
      header: {
        home: {
          eng: "Home",
          rus: "Главная",
          link: "#home"
        },
        about: {
          eng: "About me",
          rus: "Обо мне",
          link: "#about"
        },
        skills: {
          eng: "Skills",
          rus: "Навыки",
          link: "#skills"
        },
        portfolio: {
          eng: "Portfolio",
          rus: "Портфолио",
          link: "#portfolio"
        },
        contacts: {
          eng: "Contacts",
          rus: "Контакты",
          link: "#contacts"
        }
      },
      intro: {
        title: {
          eng: "Denis Novik",
          rus: "Денис Новик"
        },
        text: {
          first: {
            eng: "UX|UI designer",
            rus: "Дизайнер UX|UI"
          },
          second: {
            eng: "24 years old, Minsk",
            rus: "24 года, Минск"
          }
        },
        cover: "img/intro/cover.png"
      },
      about: {
        title: {
          eng: "About me",
          rus: "Обо мне"
        },
        text: {
          first: {
            eng: "Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.",
            rus: "Привет, я Денис — дизайнер UX/UI из Минска. Интересуюсь дизайном и всем, что с ним связано.Готов реализовывать отличные проекты с замечательными людьми."
          },
          second: {
            eng: "I'm studying at courses «Web and mobile design interfaces» in IT-Academy.",
            rus: "Я учусь на курсе «Дизайн мобильных и Web интерфейсов» в IT-Академии."
          },
          third: {
            eng: "Ready to implement excellent projects with wonderful people.",
            rus: "Готов реализовывать отличные проекты с замечательными людьми."
          }
        }
      },
      skills: {
        title: {
          eng: "Skills",
          rus: "Навыки"
        },
        text: {
          eng: "I work in such programs as",
          rus: "Я работаю в следующих программах"
        },
        list: [{
          cover: "img/skills/item__cover-1.svg",
          title: "Adobe Photoshop",
          rating: 4
        },
        {
          cover: "img/skills/item__cover-2.svg",
          title: "Adobe Illustrator",
          rating: 3
        },
        {
          cover: "img/skills/item__cover-3.svg",
          title: "Adobe After Effects",
          rating: 4
        },
        {
          cover: "img/skills/item__cover-4.svg",
          title: "Figma",
          rating: 4
        }],
      },
      portfolio: {
        title: {
          eng: "Portfolio",
          rus: "Портфолио"
        },
        cards: [
          {
            cover: "img/portfolio/card__cover-1.jpg",
            link: {
              eng: "Online fashion store - Homepage",
              rus: "Онлайн магазин одежды - Главная страница"
            }
          },
          {
            cover: "img/portfolio/card__cover-2.jpg",
            link: {
              eng: "Reebok Store - Concept",
              rus: "Магазин Reebok - концепт"
            }
          },
          {
            cover: "img/portfolio/card__cover-3.jpg",
            link: {
              eng: "Braun Landing Page - Concept",
              rus: "Лэндинг Braun - концепт"
            }
          },

        ]
      },
      contacts: {
        title: {
          eng: "Contacts",
          rus: "Контакты"
        },
        text: {
          eng: "Want to know more or just chat? You are welcome!",
          rus: "Хочешь узнать больше или просто пообщаться? Добро пожаловать!"
        },
        button: {
          eng: "Send message",
          rus: "Отправить сообщение"
        },
        social: [
          {
            icon: "img/contacts/item__cover-1.svg",
            link: "#"
          },
          {
            icon: "img/contacts/item__cover-2.svg",
            link: "#"
          },
          {
            icon: "img/contacts/item__cover-3.svg",
            link: "#"
          },
          {
            icon: "img/contacts/item__cover-4.svg",
            link: "#"
          },
        ],
        subtext: {
          eng: "Like me on LinkedIn, Instagram, Behance, Dribble",
          rus: "Поставь мне лайк в LinkedIn, Instagram, Behance, Dribble"
        }
      }
    },
    computed: {
      skillsRating() {
        let result = [];
        for (let i = 0; i < this.skills.list.length; i++) {
          result.push(this.getStars(this.skills.list[i].rating));
        }
        return result;
      }
    },
    methods: {
      changeToEng() {
        this.language = "eng";
      },
      changeToRus() {
        this.language = "rus";
      },
      getStars(count) {
        let result = [];
        for (let i = 0; i < 5; i++){

          if (i < count) {
            result.push("img/skills/item__star-black.svg");
          }
          else {
            result.push("img/skills/item__star-gray.svg");
          }
        }
        return result;
      }
    }
})
