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
          rus: "Я работаю в таких программаъ как"
        },
        skill1: {
          cover: "img/skills/item__cover-1.svg",
          title: "Adobe Photoshop",
          rating: 5
        },
        skill2: {
          cover: "img/skills/item__cover-2.svg",
          title: "Adobe Illustrator",
          rating: 5
        },
        skill3: {
          cover: "img/skills/item__cover-3.svg",
          title: "Adobe After Effects",
          rating: 5
        },
        skill4: {
          cover: "img/skills/item__cover-4.svg",
          title: "Figma",
          rating: 5
        }
      }

    },
    computed: {},
    methods: {
      changeToEng() {
        this.language = "eng";
      },
      changeToRus() {
        this.language = "rus";
      }
    }
})