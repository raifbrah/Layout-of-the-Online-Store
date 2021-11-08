document.addEventListener('DOMContentLoaded', () => {

  const filterDate = document.querySelectorAll('.filter__date')
  if (!filterDate) return

  const maskOptions = {
    mask: 'DD.MM',
    lazy: true,

    blocks: {
      DD: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 31
      },

      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12
      }
    }
  }
  filterDate.forEach(el => {
    IMask(el, maskOptions) // Запускаю плагин с переданными параметрами
  })
  
})



const filterCategoryTriangle = document.querySelectorAll('.filter__category-triangle')
const filterCategoryRadio = document.querySelectorAll("input[name=filter__category-radio]")
const filterTitle = document.querySelectorAll(".filter__title")
const filterResetBtn = document.querySelector('.filter__reset-btn')


// Цикл для поворота треугольников при расскрытии категории фильтра
for (let i=0; i<filterCategoryRadio.length; i++) {
  if (filterCategoryRadio[i].checked == true) {
    filterCategoryTriangle[i].style.transform = "translateY(3px) rotate(180deg)"
  }
  filterTitle[i].onclick = () => {
    filterCategoryTriangle[i].style.transform = "translateY(3px) rotate(180deg)"
    for (let s=0; s<filterTitle.length; s++) {
      if (filterCategoryRadio[s].checked == true && s != i) {
        filterCategoryTriangle[s].style.transform = "translateY(0px) rotate(0deg)"
      }
    }
  }
}

filterResetBtn.onclick = () => {
  filterTitle[0].click()
}
