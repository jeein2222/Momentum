const images=[
    "img_1.jpg",
    "img_2.jfif",
    "img_3.jpg"
]
const chosenImage=images[Math.floor(Math.random()*images.length)]

//js에서 img 태그 만들기
const bgImage=document.createElement("img")
bgImage.src=`img/${chosenImage}`

//html에 태그 추가
document.body.appendChild(bgImage)