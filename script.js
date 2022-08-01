
let colors = [
    {
        id: 0,
        color: "yellow",
        title: "sheesh",
        description: "HyunJin (Hangul: 현진) is the second revealed member of LOONA and a member of its first sub-unit, LOONA 1/3. She was born as Kim Hyun-jin (Hangul: 김현진) on November 15, 2000 in Dunchon-dong, Gangdong District, Seoul, South Korea."
    },
    {
        id: 1,
        color: "green",
        title: "Haseul",
        description: "HaSeul (Hangul: 하슬) is the third revealed member of LOONA and a member of its first sub-unit, LOONA 1/3. She was born as Cho Ha-seul (Hangul: 조하슬) on August 18, 1997, in Suncheon, South Jeolla Province, South Korea."
    }
]

colors.map(function(val, index){
    const {id, color, title, description} = val;
    document.querySelector(".wrapper").innerHTML += `<div class="content" style="background: ${color};">
                <h1>${title}</h1>
                <p>${description}</p>
            </div>`
})
