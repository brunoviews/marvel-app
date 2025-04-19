const fakeCharacters = [
  {
    id: 1,
    name: "Adam Warlock",
    description:
      "A genetically engineered being with superhuman abilities and a connection to the Soul Gem.",
    thumbnail: {
      path: "https://s3-alpha-sig.figma.com/img/66f3/401f/6380e1c330e32763ea5a102f6b475c49?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FV12rKehczErR7nK0zl6uO-6A67GSp-Pjc1AK9XZ5yLtqEaNRKJ80CWcf0XQ3Cxj~I~cdvnt43uY0mAg8qbmmCGaziynJ8YbFZJSrkrrtz9PYoSWBKpeOy7Ralh2FnT3lBIh3aSMaxkzbAcAu4AECpe8svjI3OEB1A1CHD6wYATDXS0C9NVk--YSRcdjORSxUKmdVCWNIaPPFJuXMpj3iEMALgGsFhGjdV5NKD443VYd3XlN~v5jwwAwagJuXGX9eEv65kri0MxVz9E9DUUCniNM1JZFZfwipYA4fdZyezfWrgC2z6pC6Wds9NbpqJkcsUswycQqZl6w99pKjolDbw__",
      extension: "png",
    },
    comics: {
      items: [
        { name: "Infinity Gauntlet (1991) #1" },
        { name: "Infinity Gauntlet (1991) #2" },
      ],
    },
  },
  {
    id: 2,
    name: "Captain Marvel",
    description:
      "A cosmic-powered superhero with incredible strength and energy manipulation abilities.",
    thumbnail: {
      path: "https://s3-alpha-sig.figma.com/img/66f3/401f/6380e1c330e32763ea5a102f6b475c49?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FV12rKehczErR7nK0zl6uO-6A67GSp-Pjc1AK9XZ5yLtqEaNRKJ80CWcf0XQ3Cxj~I~cdvnt43uY0mAg8qbmmCGaziynJ8YbFZJSrkrrtz9PYoSWBKpeOy7Ralh2FnT3lBIh3aSMaxkzbAcAu4AECpe8svjI3OEB1A1CHD6wYATDXS0C9NVk--YSRcdjORSxUKmdVCWNIaPPFJuXMpj3iEMALgGsFhGjdV5NKD443VYd3XlN~v5jwwAwagJuXGX9eEv65kri0MxVz9E9DUUCniNM1JZFZfwipYA4fdZyezfWrgC2z6pC6Wds9NbpqJkcsUswycQqZl6w99pKjolDbw__",
      extension: "png",
    },
    comics: {
      items: [
        { name: "Captain Marvel (2019) #1" },
        { name: "Avengers (2018) #5" },
      ],
    },
  },
  {
    id: 3,
    name: "Doctor Strange",
    description:
      "The Sorcerer Supreme, master of the mystic arts and protector of Earth from magical threats.",
    thumbnail: {
      path: "https://s3-alpha-sig.figma.com/img/66f3/401f/6380e1c330e32763ea5a102f6b475c49?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FV12rKehczErR7nK0zl6uO-6A67GSp-Pjc1AK9XZ5yLtqEaNRKJ80CWcf0XQ3Cxj~I~cdvnt43uY0mAg8qbmmCGaziynJ8YbFZJSrkrrtz9PYoSWBKpeOy7Ralh2FnT3lBIh3aSMaxkzbAcAu4AECpe8svjI3OEB1A1CHD6wYATDXS0C9NVk--YSRcdjORSxUKmdVCWNIaPPFJuXMpj3iEMALgGsFhGjdV5NKD443VYd3XlN~v5jwwAwagJuXGX9eEv65kri0MxVz9E9DUUCniNM1JZFZfwipYA4fdZyezfWrgC2z6pC6Wds9NbpqJkcsUswycQqZl6w99pKjolDbw__",
      extension: "png",
    },
    comics: {
      items: [
        { name: "Doctor Strange (2015) #1" },
        { name: "Infinity War (1992) #3" },
      ],
    },
  },
  {
    id: 4,
    name: "Scarlet Witch",
    description:
      "A powerful mutant with the ability to manipulate reality and cast hex spells.",
    thumbnail: {
      path: "https://s3-alpha-sig.figma.com/img/66f3/401f/6380e1c330e32763ea5a102f6b475c49?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FV12rKehczErR7nK0zl6uO-6A67GSp-Pjc1AK9XZ5yLtqEaNRKJ80CWcf0XQ3Cxj~I~cdvnt43uY0mAg8qbmmCGaziynJ8YbFZJSrkrrtz9PYoSWBKpeOy7Ralh2FnT3lBIh3aSMaxkzbAcAu4AECpe8svjI3OEB1A1CHD6wYATDXS0C9NVk--YSRcdjORSxUKmdVCWNIaPPFJuXMpj3iEMALgGsFhGjdV5NKD443VYd3XlN~v5jwwAwagJuXGX9eEv65kri0MxVz9E9DUUCniNM1JZFZfwipYA4fdZyezfWrgC2z6pC6Wds9NbpqJkcsUswycQqZl6w99pKjolDbw__",
      extension: "png",
    },
    comics: {
      items: [
        { name: "House of M (2005) #1" },
        { name: "Avengers Disassembled (2004) #1" },
      ],
    },
  },
  {
    id: 5,
    name: "Black Panther",
    description:
      "The King of Wakanda, a skilled warrior with enhanced abilities and advanced technology.",
    thumbnail: {
      path: "https://s3-alpha-sig.figma.com/img/66f3/401f/6380e1c330e32763ea5a102f6b475c49?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FV12rKehczErR7nK0zl6uO-6A67GSp-Pjc1AK9XZ5yLtqEaNRKJ80CWcf0XQ3Cxj~I~cdvnt43uY0mAg8qbmmCGaziynJ8YbFZJSrkrrtz9PYoSWBKpeOy7Ralh2FnT3lBIh3aSMaxkzbAcAu4AECpe8svjI3OEB1A1CHD6wYATDXS0C9NVk--YSRcdjORSxUKmdVCWNIaPPFJuXMpj3iEMALgGsFhGjdV5NKD443VYd3XlN~v5jwwAwagJuXGX9eEv65kri0MxVz9E9DUUCniNM1JZFZfwipYA4fdZyezfWrgC2z6pC6Wds9NbpqJkcsUswycQqZl6w99pKjolDbw__",
      extension: "png",
    },
    comics: {
      items: [
        { name: "Black Panther (2016) #1" },
        { name: "Avengers (2018) #7" },
      ],
    },
  },
];

export default fakeCharacters;