const profile = document.querySelector('.profile')
const dropdown = document.querySelector('.dropdown-wrapper')
const dropdownNf = document.querySelector('.dropdown-wrapper-nf')
const notifications = document.querySelector('.notifications')

//evento perfil

profile.addEventListener('click', () => {
    dropdown.classList.remove('none')
    dropdown.classList.toggle('hide')
})

document.addEventListener('click', (event) => {
    const isClickInsideDropdown = dropdown.contains(event.target)
    const isProfileClicked = profile.contains(event.target)
    console.log(isClickInsideDropdown, 'is click dropdown')
    console.log(isProfileClicked, 'is click profile')

    if (!isClickInsideDropdown && !isProfileClicked) {
        dropdown.classList.add('hide')
        dropdown.classList.add('dropdown-wrapper--fade-in')
    }
})

//evento notification

notifications.addEventListener('click', () => {
    dropdownNf.classList.remove('none-nf')
    dropdownNf.classList.toggle('hide-nf')
    console.log('clicked')
})

document.addEventListener('click', (event) => {
    const isClickInsideDropdown = dropdownNf.contains(event.target)
    const isClicked = notifications.contains(event.target)
    console.log(isClickInsideDropdown, 'is click dropdown')
    console.log(isClicked, 'is click profile')

    if (!isClickInsideDropdown && !isClicked) {
        dropdownNf.classList.add('hide-nf')
        dropdownNf.classList.add('dropdown-wrapper-nf--fade-in')
    }
})

//event sidebar


const expandBtn = document.querySelector('.expand-btn')

expandBtn.addEventListener('click', () => {
    document.body.classList.toggle("collapsed")
})

const current = window.location.href

const allLinks = document.querySelectorAll(".sidebar-links a")
console.log(allLinks)

allLinks.forEach((elem) => {
    elem.addEventListener('click', function () {
        const hrefLinkClick = elem.href

        allLinks.forEach((link) => {
            if (link.href == hrefLinkClick) {
                link.classList.add("active")
            } else {
                link.classList.remove("active")
            }
        })
    })
})


