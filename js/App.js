class App {
    constructor() {
        this.$containerImg = document.querySelector("#gallery")
        this.$containerButtonSlide = document.querySelector("#container-button-slide")

    }


    async CreateDomElement() {

        const previousButton = document.createElement('button')
        addMultipleAttributes(previousButton, {
            'type' : 'button',
            'onclick' : 'getSlides(-1)',
            'onkeypress': 'getSlides(-1)',
            'aria-label' : 'Voir média précédent',
            'aria-controls' : 'myCarousel',
            'title': 'Précédent'
        })
        previousButton.id = 'click-left'

        const iconButtonLeft = document.createElement('i')
        iconButtonLeft.className = 'fa-solid fa-caret-left'

        const nextButton = document.createElement('button')
        addMultipleAttributes(nextButton, {
            'type' : 'button',
            'onclick' : `getSlides(1)`,
            'onkeypress': 'getSlides(1)',
            'aria-label' : 'Voir média suivant',
            'aria-controls' : 'myCarousel',
            'title': 'Suivant'
        })
        nextButton.id = 'click-right'

        const iconButtonRight = document.createElement('i')
        iconButtonRight.className = 'fa-solid fa-caret-right'

        previousButton.appendChild(iconButtonLeft)
        nextButton.appendChild(iconButtonRight)

        this.$containerButtonSlide.appendChild(previousButton)
        this.$containerButtonSlide.appendChild(nextButton)
    }


    async modalLightbox() {
        const fullMedias = [
            "https://picsum.photos/id/237/1100/700",
            "https://picsum.photos/id/13/1100/700",
            "https://picsum.photos/id/2/1100/700",
        ]

        fullMedias.forEach((media) => {
            const sectionLightbox = this.$containerImg

            const Template = new LightboxModal(media)
            sectionLightbox.appendChild(Template.createLightbox())
        })
    }

    async main() {

        await this.CreateDomElement()
        await this.modalLightbox()
        await getSlides(1)
    }
}

const app = new App()
app.main()