const sections = [document.getElementById("s1"), document.getElementById("s2"), document.getElementById("s3")]
const sectionLinks = Array.from(document.querySelectorAll(".nav ul li a"))

let highlightedSection

function highlightSection() {

    let screenSize = innerHeight

    sections.forEach((section, index) => {
        if ((highlightedSection != section &&
        section.getBoundingClientRect().y <= screenSize / 2 &&
        sections.length - 2 >= index &&
        sections[index + 1].getBoundingClientRect().y > screenSize / 2) || 
        (highlightedSection != section &&
        section.getBoundingClientRect().y <= screenSize / 2 &&
        sections.length - 1 == index)){

            if (sections.indexOf(highlightedSection) >= 0)
                sectionLinks[sections.indexOf(highlightedSection)].classList.remove("activated")

            highlightedSection = section
            sectionLinks[sections.indexOf(highlightedSection)].classList.add("activated")
        }
    })
}

highlightSection()
window.addEventListener("scroll", highlightSection)
window.addEventListener("resize", highlightSection)
