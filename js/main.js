document.addEventListener('DOMContentLoaded', () => {
	//	open search-form

	const toggleSearch = document.querySelector(".toggle-search")
	const searchForm = document.querySelector(".search-form")

	toggleSearch.addEventListener( "click" , (event) => {
		event.preventDefault()
		searchForm.classList.toggle("open")
	})

	//	open popup

	const btnPopup = document.querySelector(".btn-popup")
	const overlayPopup = document.querySelector(".overlay")
	const popup = document.querySelector(".popup")

	if ( btnPopup ) {
		btnPopup.addEventListener( "click" , (event) => {
			event.preventDefault()
			overlayPopup.classList.add("open")
			popup.classList.add("open")
		})
	}
	
	if ( overlayPopup ) {
		overlayPopup.addEventListener( "click" , (event) => {
			event.preventDefault()
			overlayPopup.classList.remove("open")
			popup.classList.remove("open")
		})
	}

	//	filter for prices

	const filterSlider = document.getElementById('filter-slider')

	if ( filterSlider ) {
		noUiSlider.create(filterSlider, {
			step: 500,
			start: [0, 30000],
			connect: true,
			range: {
				'min': 0,
				'max': 30000
			}
		});
		
		//	change prices
		
		const priceMin = document.querySelector(".filter-prices__min")
		const priceMax = document.querySelector(".filter-prices__max")
		
		filterSlider.noUiSlider.on("update", function(values, handle) {
			priceMin.innerText = Math.round(values[0])
			priceMax.innerText = Math.round(values[1])
		})
		
		//	open/close filter
		
		const catalogTitle = document.querySelector('.catalog-title')
		const filterBtn = document.querySelector('.filter-btn')
		const filter = document.querySelector('.filter')
		const closeFilter = document.querySelector('.close-filter')
		
		filterBtn.addEventListener( "click" , (event) => {
			event.preventDefault()
			filter.classList.add("show")
			catalogTitle.classList.add("show-filter")
		})
		
		closeFilter.addEventListener( "click" , (event) => {
			event.preventDefault()
			filter.classList.remove("show")
			catalogTitle.classList.remove("show-filter")
		})
		
		//	reset filter
		
		const btnReset = document.querySelector(".btn-reset")
		
		btnReset.addEventListener( "click" , (event) => {
			event.preventDefault()
			filterSlider.noUiSlider.reset()
		})
	}
	
	//	filter size
	
	const filterSizeNumber = document.querySelector(".filter-size__number")
	const sizeItem = document.querySelectorAll(".size-item")
	
	if ( filterSizeNumber ) {
		console.log(sizeItem)
		filterSizeNumber.addEventListener( "click" , (event) => {
			if ( !event.target.classList.contains("size-chosen") ) {
				/*
				for (let i = 0; i < sizeItem.length; i++) {
					sizeItem[i].classList.remove("size-chosen")
				}
				*/
				event.target.classList.add("size-chosen")
			}	else {
				event.target.classList.remove("size-chosen")
			}
		})
	}
	
	//	open delivery
	
	const liteOpen = document.querySelector(".lite-open")
	
	if ( liteOpen ) {
		liteOpen.addEventListener( "click" , () => {
			liteOpen.classList.toggle("open")
		})
	}
	
	//	gallery

	const tovar_slider = document.querySelector(".tovar-slider")
	
	if (  tovar_slider ) {
		// Инициализация превью слайдера
		const sliderThumbs = new Swiper('.akopedsag__thumbs .swiper-container', { // ищем слайдер превью по селектору
			// задаем параметры
			direction: 'vertical', // вертикальная прокрутка
			slidesPerView: 4, // показывать по 3 превью
			spaceBetween: 5, // расстояние между слайдами
			navigation: { // задаем кнопки навигации
				nextEl: '.akopedsag__next', // кнопка Next
				prevEl: '.akopedsag__prev' // кнопка Prev
			},
			freeMode: true, // при перетаскивании превью ведет себя как при скролле
			breakpoints: { // условия для разных размеров окна браузера
				0: { // при 0px и выше
					direction: 'horizontal', // горизонтальная прокрутка
				},
				768: { // при 768px и выше
					direction: 'vertical', // вертикальная прокрутка
				}
			}
		});
		// Инициализация слайдера изображений
		const sliderImages = new Swiper('.akopedsag__images .swiper-container', { // ищем слайдер превью по селектору
			// задаем параметры
			direction: 'vertical', // вертикальная прокрутка
			slidesPerView: 1, // показывать по 1 изображению
			spaceBetween: 32, // расстояние между слайдами
			mousewheel: true, // можно прокручивать изображения колёсиком мыши
			navigation: { // задаем кнопки навигации
				nextEl: '.akopedsag__next', // кнопка Next
				prevEl: '.akopedsag__prev' // кнопка Prev
			},
			grabCursor: true, // менять иконку курсора
			thumbs: { // указываем на превью слайдер
				swiper: sliderThumbs // указываем имя превью слайдера
			},
			breakpoints: { // условия для разных размеров окна браузера
				0: { // при 0px и выше
					direction: 'horizontal', // горизонтальная прокрутка
				},
				768: { // при 768px и выше
					direction: 'vertical', // вертикальная прокрутка
				}
			  }
		});

	}
	
	if ( window.innerWidth <= 992){
		//	open mobile menu

		const toggleMenu = document.querySelector(".toggle-menu")
		const headerNavigation = document.querySelector(".header-navigation")

		toggleMenu.addEventListener( "click" , () => {
			toggleMenu.classList.toggle("open-menu")
			headerNavigation.classList.toggle("open-menu")
		})
	}
	
	$(".counts-change__remove").on("click", function(){
		if ( $(this).parent().find(".counts-change__total").val() > 1 ) {
			$(this).parent().find(".counts-change__total").val(+($(this).parent().find(".counts-change__total").val()) - 1)
		}
	})
	
	$(".counts-change__add").on("click", function(){
		$(this).parent().find(".counts-change__total").val(+($(this).parent().find(".counts-change__total").val()) + 1)
	})
})