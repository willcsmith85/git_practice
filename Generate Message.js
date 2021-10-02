import fetch from "node-fetch";

async function MessageGenerator() {
    const quoteSource = await fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            let rand1Text = data[Math.floor(Math.random() * data.length)].text;
            let rand2Text = data[Math.floor(Math.random() * data.length)].text;
            if(rand1Text.includes("and")){
                rand1Text = rand1Text.split("and")[0];    
            }
            if(rand1Text.includes(".")){
                rand1Text = rand1Text.trim().substring(0,rand1Text.length-1);
            }
            const firstString = rand1Text + " and ";
            if(rand2Text.includes("and")){
                rand2Text = rand1Text.split("and")[1];
            }
            const secondString = rand2Text.slice(0,1).toLowerCase() + rand2Text.slice(1);

            const mixedMessage = firstString + secondString;
            const mixedAuthor = data[Math.floor(Math.random() * data.length)].author;
            console.log(mixedMessage);
            console.log(mixedAuthor);
            return {
                mixedMessage,
                mixedAuthor
            }
        })
        .catch(error => {
            console.log(error)
        });
    return quoteSource;
}
console.log(MessageGenerator());

