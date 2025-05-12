// Yangiliklar ro'yxati
const newsData = [
    {
        title: "Futbol jahon chempionati tugadi",
        content: "Futbol jahon chempionati 2025-yilda ajoyib tugadi. Eng yaxshi jamoa va o'yinchilar aniqlangan.",
        date: "2025-05-12"
         image: "https://avatars.mds.yandex.net/i?id=9b2f12e8441a8fc91573740a8e4fa9896518b1e6-12423254-images-thumbs&n=13"
    },
    {
        title: "Messi yangi jamoaga o'tdi",
        content: "Lionel Messi yana bir bor transfer bo'ldi va yangi jamoada o'ynashni boshladi.",
        date: "2025-05-10"
        image: "https://avatars.mds.yandex.net/i?id=2a00000196bec3066d91a402db612cd3fca1-987198-fast-images&n=13"
    },
    {
        title: "Cristiano Ronaldo rekord qo'ydi",
        content: "Cristiano Ronaldo futbol tarixida yangi rekord o'rnatdi. U eng ko'p gol urgan o'yinchi bo'ldi.",
        date: "2025-05-09"
        image: "https://yandex.ru/images/search?pos=8&from=tabbar&img_url=https%3A%2F%2Fi2-prod.mirror.co.uk%2Farticle35205052.ece%2FALTERNATES%2Fs615%2F0_GettyImages-2213936748.jpg&text=ronaldo&rpt=simage&lr=10335"
    }
];

// Yangiliklarni sahifaga qo'shish
const newsContainer = document.getElementById("news-container");

newsData.forEach(news => {
    const newsItem = document.createElement("div");
    newsItem.innerHTML = `
        <h3>${news.title}</h3>
        <p>${news.content}</p>
        <small>${news.date}</small>
    `;
    newsContainer.appendChild(newsItem);
});
