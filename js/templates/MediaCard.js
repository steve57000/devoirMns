class LightboxModal {
    constructor(media) {
        this._media = media;
        this.$wrapperLightbox = document.querySelector('#gallery')
    }

    createLightboxDom() {

        const elementMedia = document.createElement('img')
        addMultipleAttributes(elementMedia, {
            'width': '1100px',
            'height': '700px',
            'src': this._media,
            'alt': '',
            'class': 'media_gallery'
        })
        elementMedia.style.display = 'none'
        return this.$wrapperLightbox.appendChild(elementMedia)
    }

    createLightbox() {
        const selectAllMedia = document.querySelectorAll('.media_gallery')
        let numberSlide = 1

        selectAllMedia.forEach( mediaElement => {
            mediaElement.setAttribute('onclick' , `currentSlide(${numberSlide})`)
            mediaElement.setAttribute('onkeypress' , `currentSlide(${numberSlide})`)

            numberSlide += 1
        })
        return this.createLightboxDom()
    }

}