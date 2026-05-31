async function getJoke(){
	document.getElementById("joke").innerHTML="loading...";
	let response = await fetch("https://official-joke-api.appspot.com/random_joke");
	let data = await response.json();
	document.getElementById("joke").innerHTML=data.setup+"<br><br>"+data.punchline;
}


async function getNews() {
    let apiKey = "5b94e73867819dcbad981dabcd79e9a1";

    let url = "https://gnews.io/api/v4/search?q=law&lang=en&max=5&apikey="+(apiKey);

    try {
        let response = await fetch(url);
        let data = await response.json();

        console.log(data); // Debug

        let output = "";

        data.articles.forEach(article => {
            output += `
                <div class="news-card">
                    <a href="${article.url}" target="_blank">
                        ${article.title}
                    </a>
                    <p>${article.description || ""}</p>
                </div>
            `;
        });

        document.getElementById("news").innerHTML = output;

    } catch (error) {
        console.error("Error:", error);
        document.getElementById("news").innerHTML =
            "Mai Braj Aap Darshkon Ka Apne Is New Website Par SWagt Karta Hu .";
    }
}

getNews();
