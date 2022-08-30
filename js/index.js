window.addEventListener('DOMContentLoaded', function () {

    const slider1 = document.querySelector('.swiper');
    const slider2 = document.querySelector('.swiper-project');

    let swiper1 = new Swiper(slider1, {
      slidesPerView: 3,
      spaceBetween: 50,
      grid: {
        rows: 2,
        fill:"row",
      },
        observer: true,
        longSwipes: true,
        loopPreventsSlide: true,
        loop: false,
        pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        },
          // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {

          1500: {
            slidesPerView: 3,
            grid: {
                rows: 2
              },

            spaceBetween: 50
          },

          // when window width is >= 1024px
          1024: {
            slidesPerView: 2,
            grid: {
                rows: 2
              },

            spaceBetween: 34
          },

          768: {
            slidesPerView: 2,
            grid: {
                rows: 2
              },

            spaceBetween: 34
          },

          320: {
            slidesPerView: 1,
            grid: {
                rows: 1
              },

            spaceBetween: 0
          },



        },
        a11y: false

    });


      // слайдер Издания
      const MOBILE_WIDTH = 580;

      const sliderParamsNotMobile = {
        sliderWrap: "edit-js-slider-main",
        cardsContainerName: "edit-js-slider",
        cardsWrapName: "edit-js-slides-wrap",
        card: "edit-slide",
        paginationClassName: "swiper-pagination-edit",
        navClassName: "navigation-edit",
        navPrev: "swiper-button-prev-edit",
        navNext: "swiper-button-next-edit"
      };

      function getWindowWidth() {

        return Math.max(
          document.body.scrollWidth,
          document.documentElement.scrollWidth,
          document.body.offsetWidth,
          document.documentElement.offsetWidth,
          document.body.clientWidth,
          document.documentElement.clientWidth
        );
      }

      function activateSlider(params) {
        const navigation = document.createElement("div");
        const pagination = document.createElement("div");
        const navBtnPrev = document.createElement("button");
        const navBtnNext = document.createElement("button");

        navigation.classList.add(params.navClassName);

        navBtnPrev.classList.add(params.navBtnClassName);
        navBtnPrev.classList.add(params.navPrev);
        navigation.prepend(navBtnPrev);

        pagination.classList.add(params.paginationClassName);
        navigation.append(pagination);

        navBtnNext.classList.add(params.navBtnClassName);
        navBtnNext.classList.add(params.navNext);
        navigation.append(navBtnNext);

        params.sliderWrapElem.prepend(navigation);

        params.cardsContainer.classList.add("swiper-container");
        params.cardsWrap.classList.add("swiper-wrapper");

        params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
         slidesPerView: 3,
            grid: {
              rows: 1,
              fill:"row",
            },

            spaceBetween: 50,


            pagination: {
              el: `.${params.sliderWrap} .${params.paginationClassName}`,
              type: "fraction"
            },

            navigation: {
              nextEl: `.${params.navNext}`,
              prevEl: `.${params.navPrev}`
            },
            breakpoints: {
                1500: {
                  slidesPerView: 3,
                  grid: {
                      rows: 1
                    },
                  spaceBetween: 50
                },

                // when window width is >= 1024px
                1024: {
                  slidesPerView: 2,
                  grid: {
                      rows: 1
                    },

                  spaceBetween: 49
                },

                581: {
                  slidesPerView: 2,
                  grid: {
                      rows: 1
                    },

                  spaceBetween: 34
                },

              },

          on: {
            beforeInit() {
              document.querySelectorAll(`.${params.card}`).forEach((el) => {
                el.classList.add("swiper-slide");
              });
            },

            beforeDestroy() {
              this.slides.forEach((el) => {
                el.classList.remove("swiper-slide");
                el.removeAttribute("role");
                el.removeAttribute("aria-label");
              });

              this.pagination.el.remove();
              navigation.remove();
            }
          }
        });
      }

      function destroySlider(params) {
        params.cardsSlider.destroy();
        params.cardsContainer.classList.remove("swiper-container");
        params.cardsWrap.classList.remove("swiper-wrapper");
        params.cardsWrap.removeAttribute("aria-live");
        params.cardsWrap.removeAttribute("id");
      }

      function checkWindowWidth(params) {
        const currentWidth = getWindowWidth();
        params.sliderWrapElem = document.querySelector(`.${params.sliderWrap}`);
        params.cardsContainer = document.querySelector(
          `.${params.cardsContainerName}`
        );
        params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

        if (
          currentWidth > MOBILE_WIDTH &&
          (!params.cardsSlider || params.cardsSlider.destroyed)
        ) {
          activateSlider(params);
        } else if (currentWidth <= MOBILE_WIDTH && params.cardsSlider) {
          destroySlider(params);
        }
      }

      checkWindowWidth(sliderParamsNotMobile);

      window.addEventListener("resize", function () {
        checkWindowWidth(sliderParamsNotMobile);
      });

     // слайдер Проекты

    let swiper2 = new Swiper( slider2, {

          slidesPerView: 3,
          grid: {
            rows: 1,
            fill:"row",
          },
          observer: true,
        longSwipes: true,
        loopPreventsSlide: true,
        loop: false,


          spaceBetween: 50,
          pagination: {
          el: '.swiper-pagination_project',

          },

          // Navigation arrows
          navigation: {
          nextEl: '.swiper-button-next-project',
          prevEl: '.swiper-button-prev-project',
          },


        breakpoints: {
          1500: {
            slidesPerView: 3,
            grid: {
                rows: 1
              },
            spaceBetween: 50
          },

          // when window width is >= 1024px
          1024: {
            slidesPerView: 2,
            grid: {
                rows: 1
              },
            spaceBetween: 50
          },

          768: {
            slidesPerView: 2,
            grid: {
                rows: 1
              },

            spaceBetween: 34
          },
          320: {
            slidesPerView: 1,
            grid: {
                rows: 1
              },

            spaceBetween: 0
          },

        },
        a11y: false

    });

          // это селекты
          const element = document.querySelector('.choices');
                const choices = new Choices(element, {
                  searchEnabled: false,
                  itemSelectText: '',
                  classNames: {
                    containerOuter: 'choices choices1',
                  },
                });


        // <БУРГЕР МЕНЮ ОТКРЫВАШКА

          document.querySelector('#burger-menu__open').addEventListener('click', function(){
            document.querySelector('#menu-burger__main').classList.add('burger-menu__activ')
          });

          document.querySelector('#burger-menu__closed').addEventListener('click', function(){
            document.querySelector('#menu-burger__main').classList.remove('burger-menu__activ')
          });


          // ВЫбираем табы для иконок языка (кружочки)
            document.querySelectorAll('.img-icon-launge').forEach(function(icons_launge){

              // тут в константу path записываем когда кликнули по нашему сектору с классом .section-work__steps data-path='название'
              icons_launge.addEventListener('click', function(event){
                const path = event.currentTarget.dataset.path

                // этим я записываю 2ую метку что бы потом по ней активировать контент
                const pathContent = event.currentTarget.getAttribute('data-content')
                console.log(pathContent)
                document.querySelectorAll('.cataloge__content').forEach(function(e) {
                  e.classList.remove('cataloge__content--active')
                })
                document.querySelector(`[data-target = "${pathContent}"]`).classList.add('cataloge__content--active')

                // event.target.classList.toggle('active_launge')
                // тут перебираем все сектции с классом  section-work__content_left и удаляем класс tab-content-active
                document.querySelectorAll('.cataloge-icon-launge').forEach(function(icon_launge){
                  icon_launge.classList.remove('active-launge')
                })

                // А тут по названию уже data-target='навзание из дата патч' выбираем конкретный сектор и доабвляем ему класс tab-content-active
                document.querySelector(`[data-target="${path}"]`).classList.add('active-launge')

                })

            });


      // ВЫбираем табы каталога
      document.querySelectorAll('.cataloge-accordion__li-items-link').forEach(function(catalog_content_accordion){

        // тут в константу path записываем когда кликнули по нашему сектору с классом .section-work__steps data-path='название'
        catalog_content_accordion.addEventListener('click', function(event){
          const path = event.currentTarget.dataset.path



          // тут перебираем все сектции с классом  section-work__content_left и удаляем класс tab-content-active
          document.querySelectorAll('.cataloge-main__left').forEach(function(catalog_content){

            catalog_content.classList.remove('active-cataloge-content')
          })
          // А тут по названию уже data-target='навзание из дата патч' выбираем конкретный сектор и доабвляем ему класс tab-content-active

          document.querySelector(`[data-target="${path}"]`).classList.add('active-cataloge-content')
        })
      });




          // функции на секцию nav меню с открытием Реализм и тд и тп

      const params = {
        btnClassName: "main__item-btn",
        activeClassName: "is-active",
        disabledClassName: "is-disabled"
      };

      function onDisable(evt) {
        if (evt.target.classList.contains(params.disabledClassName)) {
          evt.target.classList.remove(params.disabledClassName, params.activeClassName);
          evt.target.removeEventListener("animationend", onDisable);
        }
      };

      function setMenuListener() {
        document.body.addEventListener("click", (evt) => {
          const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

          if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
            activeElements.forEach((current) => {
              if (current.classList.contains(params.btnClassName)) {
                current.classList.remove(params.activeClassName);
              } else {
                current.classList.add(params.disabledClassName);
              }
            });
          }

          if (evt.target.closest(`.${params.btnClassName}`)) {
            const btn = evt.target.closest(`.${params.btnClassName}`);
            const path = btn.dataset.path;
            const drop = document.querySelector(`[data-target="${path}"]`);

            btn.classList.toggle(params.activeClassName);

            if (!drop.classList.contains(params.activeClassName)) {
              drop.classList.add(params.activeClassName);
              drop.addEventListener("animationend", onDisable);
            } else {
              drop.classList.add(params.disabledClassName);
            }
          }
        });
      };

      setMenuListener();


        $( function() {
          $( "#accordion" ).accordion({
            // Это чтобы размер выдвигающего меню блы по размеру контента
            heightStyle: "content",

            // Это чтобы при повтоном клике закрывался акардион
            collapsible: true,
            // чтобы не было иконки
            icons: null,
          });
        });


        $( ".selector" ).accordion( "refresh" );

        var selector = document.querySelector("input[type='tel']");

        var im = new Inputmask("+7 (999) 999-99-99");
        im.mask(selector);


        
        let validatorforms = function (selector, rules,  successModal, yaGoal){
          new JustValidate(selector, {
            rules: rules,
            colorWrong: '#D11616',
            messages: {
                    name: {
                     minLength: 'Миниму 4 символа для имени'
                     },
            },

            submitHandler: function(form) {
              let formData = new FormData(form);

              fetch('mail.php', {
                method: 'POST',
                body: formData
            }).then(() => {
                console.log('Отправлено');
                form.reset();
              })
              .catch(() => console.log('Ошибка'));
            }

          });
        }

        // Данные для валидатора
        validatorforms('.form-order',
            {name:
              {required: true,
                minLength: 4,
                  maxLength: 30
              },

              tel: {
                required: true,
                  function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue()
                    return Number(phone) && phone.length === 10
                  }
              },

            },
          '.thanks-popup', 'send-goal'
        );





// MAP YANDEX

// Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init() {
    // Создание карты.
      var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.75797708658952,37.60075669895271],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14,
        controls: []
      });

    // ===================================================
    // созадние карты для мобильного


      // Создание карты.
      var myMap_mobily = new ymaps.Map("map__mobily", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.75797708658952,37.60075669895271],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14,
        controls: []
      });


      // ===============================================================


            // Добавим на карту геолокацию иконку
        myMap.controls.add('geolocationControl', {
            // Расположим поисковую строку справа.
          float: 'none',
          position: {
            top: '350px',
            right: '10px',
          }
        });

            // Добавим на карту увеличения
            myMap.controls.add('zoomControl', {
              // Расположим поисковую строку справа.
              float: 'none',
              size: 'small',
              position: {
                  top: '280px',
                  right: '10px',
              }
          });

    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [55.75797708658952,37.60075669895271] // координаты точки
      }
    });
    // тут создали свою метку на карте яндлекса и еще свою картинку поставили
    var myPlacemark = new ymaps.Placemark([55.75797708658952,37.60075669895271], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/yandex_img.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-5, -12]
    });


    var myPlacemark_1 = new ymaps.Placemark([55.75797708658952,37.60075669895271], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/yandex_img.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-5, -12]
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark_1);
     // Размещение геообъекта на карте.- мобильная версия
    myMap_mobily.geoObjects.add(myPlacemark);

  };


  // тултипы
    // With the above scripts loaded, you can call `tippy()` with a CSS
      // selector and a `content` prop:
      tippy('.js-tooltip', {
        maxWidth: 265,
        theme: 'style_tooltip',
        delay: [null, 100],
      });


      // мобильное меню -поиск
      var currentWidthSearch = getWindowWidth();
      window.addEventListener("resize", function () {
        currentWidthSearch = getWindowWidth();
      });

      const mainBody = document.querySelector('body');
      const search = document.querySelector('.search-input-mobile');
      const searchButton = document.querySelector('#search__open');
      const destopWidth = 1024;


      function closedSearch(e) {
        currentWidthSearch = getWindowWidth();
        if (currentWidthSearch >= destopWidth && e.target !== search && e.target !== searchButton &&!e._searchClosed) {
          document.querySelector('.header-search-wrapper-mobile').classList.remove('search__button-active')
          document.querySelector('#search__open').style.transform = 'scale(1)';
          console.log('Закрываем меню поиска')
          mainBody.removeEventListener('click', closedSearch)
        }

      }

      document.querySelector('#search__open').addEventListener('click', function(e){
                e._searchClosed = true;

                document.querySelector('.header-search-wrapper-mobile').classList.add('search__button-active')
                document.querySelector('#search__open').style.transform = 'scale(0)';
                mainBody.addEventListener('click', (closedSearch))



      });

      document.querySelector('.search-closed-icon').addEventListener('click', function(){
                document.querySelector('.header-search-wrapper-mobile').classList.remove('search__button-active')
                document.querySelector('#search__open').style.transform = 'scale(1)';

      });
      // =================================================================================

      // MODALS WINDOW GALLERY

      const gallery_img = document.querySelectorAll('.wrapper-gallery-img')
      const modalOverlay = document.querySelector('.modal-overlay')
      const modalClosed = document.querySelectorAll('.model-closed')
      const modalWindow = document.querySelectorAll('.modal')


      // После клика по картинке открываем моадльное окно
      gallery_img.forEach((el)=>{
        el.addEventListener('click', (e) => {
          let path = e.currentTarget.getAttribute('data-path')
          document.querySelector(`[data-target = "${path}"]`).classList.add('modal--visibility')
          modalOverlay.classList.add('modal-overlay--visibility')
        });
      });



      // Закрытие модального окна через кнопку
      modalClosed.forEach((el)=>{
          el.addEventListener('click', ()=> {
            modalOverlay.classList.remove('modal-overlay--visibility');
            modalWindow.forEach((el)=>{
              el.classList.remove('modal--visibility')
            });
          });
      });

      //  закрытие если просто нажали с боку
      modalOverlay.addEventListener('click', (e) => {

        if (e.target == modalOverlay) {
          modalOverlay.classList.remove('modal-overlay--visibility');
          modalWindow.forEach((el)=>{
            el.classList.remove('modal--visibility')
          });
        }
      });



  // тут отменю все переходы по атрибуту href= "#"
  document.querySelectorAll('a').forEach((el)=> {
    el.addEventListener('click', function(event){
      var id_link = event.currentTarget.getAttribute('href')

      console.log(id_link)
      if (id_link == "#") {
        console.log('Отмена перехода по ссылке #')
        event.preventDefault();
      }
    })
  })


  // плавный переход между ссылками ан сайте
  document.querySelectorAll('.js-sckroll-link').forEach((el)=>{
    el.addEventListener('click',function(e) {
      e.preventDefault();
      var anchor = e.currentTarget.getAttribute('href');

      $('html, body')
      .stop().
      animate(
          {
          scrollTop: $(anchor).offset().top - 60,
      },
         700
         );
      })

    });

    minWindonwtext = getWindowWidth();
    window.addEventListener("resize", function () {
      const currentWidth = getWindowWidth();
      if (currentWidth <= 1024 | minWindonwtext <= 1024) {
        document.getElementById('modify-text').innerHTML="Шоурум №2";
      } else {
        document.getElementById('modify-text').innerHTML="Шоурум №4";
      }

    });


});

