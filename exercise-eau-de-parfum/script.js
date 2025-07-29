function setParfumImage() {
    if (document.documentElement.clientWidth < 768) {
        document.querySelector(".product-image").src = "image-product-mobile.jpg"
    } else {
        document.querySelector(".product-image").src = "image-product-desktop.jpg"
    }
}


addEventListener("resize", (event) => {
    setParfumImage()
})

setParfumImage()