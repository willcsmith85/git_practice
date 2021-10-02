import fetch from "node-fetch";

function MessageGenerator() {
    const quoteSource = fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        });
        //.then(function(data) {
            //console.log(data);
        //    return data;
        //});
    console.log(quoteSource);
    const randNum = Math.floor(Math.random() * quoteSource.length);
    return quoteSource[randNum];
}

console.log(MessageGenerator());

