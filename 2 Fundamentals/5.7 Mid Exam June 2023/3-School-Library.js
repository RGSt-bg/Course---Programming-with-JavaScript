function schoolLibrary(inputArr) {

    let booksArr = inputArr.shift().split("&");

    for (let i = 0; i < inputArr.length; i++) {
        let [action, book1, book2] = inputArr[i].split(" | ");

        switch(action) {

            case "Add Book" : {
                if (booksArr.indexOf(book1) > -1) break;
                else booksArr.unshift(book1);
                break;
            }
            
            case "Take Book" : {
                if (booksArr.indexOf(book1) > -1) booksArr.splice(booksArr.indexOf(book1), 1);
                else break;
                break;
            }

            case "Swap Books" : {
                if (booksArr.indexOf(book1) > -1 && booksArr.indexOf(book2) > -1) {
                    let ind1 = booksArr.indexOf(book1);
                    let ind2 = booksArr.indexOf(book2);
                    let tmp = booksArr[ind1];
                    booksArr[ind1] = booksArr[ind2];
                    booksArr[ind2] = tmp;
                }
                break;
            }

            case "Insert Book" : {
                if (booksArr.indexOf(book1) > -1) break;
                else booksArr.push(book1);
                break;
            }

            case "Check Book" : {
                let index = Number(book1);
                if (index < 0 || index >= booksArr.length) break;
                else console.log(booksArr[index]);
                break;
            }

            case "Done" : {
                console.log(booksArr.join(", "));
                break;
            }

        }
    }
}

schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick","Add Book | Ulysses","Take Book | Don Quixote",
                "Insert Book | Alice's Adventures in Wonderland", "Done"]);
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger","Add Book | Catch-22",
                "Swap Books | Anna Karenina | Catch-22","Take Book | David Copperfield","Done"]);
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary","Check Book | 2",
                "Swap Books | Don Quixote | Ulysses","Done"]);