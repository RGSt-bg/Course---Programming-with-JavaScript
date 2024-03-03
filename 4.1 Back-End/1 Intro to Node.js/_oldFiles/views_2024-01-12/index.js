const http = require("http");
const url = require("inspector");
const fs = require("fs");
// const fs = require("fs/promises");
const port = 5000;

const cats = [
    {
        id: 1,
        name: "Tommy",
        imageUrl: "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
        breed: "Bombay Cat",
        description: "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho."
    },
    {
        id: 2,
        name: "Pretty Kitty",
        imageUrl: "https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952_1280.jpg",
        breed: "Bombay Cat",
        description: "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho."
    },
    {
        id: 3,
        name: "Jenny",
        imageUrl: "https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3591348_1280.jpg",
        breed: "Bombay Cat",
        description: "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho."
    },
    {
        id: 4,
        name: "Joni",
        imageUrl: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
        breed: "Bombay Cat",
        description: "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho."
    },
    {
        id: 5,
        name: "Molly",
        imageUrl: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
        breed: "Bombay Cat",
        description: "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho."
    }
];

const views = {
    home: "./views/home.html",
    style: "./content/styles/site.css",
    add: "./views/addCat.html",
    breed: "./views/addBreed.html",
    cat: "./views/partial/cat.html",
};

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        render(views.cat, cats[0], (err, catResult) => {
            if (err) {
                res.statusCode = 404;
                return res.end();
            }

            render(views.home, { cats: catResult }, (err, result) => {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.write(result);
                res.end();                
            })
        });
    }
    else if (req.url === "/content/styles/site.css") {

        fs.readFile(views.style, { encoding: "UTF-8" }, (err, result) => {
            if (err) {
                res.statusCode = 404;
                return res.end();
            }
            res.writeHead(200, {
                "Content-Type": "text/css"
            });
            res.write(result);
            res.end();
        })
    }
    else if (req.url === "/cats/add-cat" && req.method === "GET") {

        fs.readFile(views.addCat, { encoding: "UTF-8" }, (err, result) => {
            if (err) {
                res.statusCode = 404;
                return res.end();
            }
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.write(result);
            res.end();
        })
    }
    else if (req.url === "/cats/add-breed") {

        fs.readFile(views.breed, { encoding: "UTF-8" }, (err, result) => {
            if (err) {
                res.statusCode = 404;
                return res.end();
            }
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.write(result);
            res.end();
        })
    }
    else {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write("<h1>404 Not found</h1>");
        res.end(); 
    }

});

function render (view, data, callback) {
    fs.readFile(view, { encoding: "UTF-8" }, (err, result) => {
        if (err) {
            return callback(err);
        }

        const htmlResult = Object.keys(data).reduce((acc, key) => {
            const pattern = new RegExp(`{{${key}}}`, "g");
            return acc.replace(pattern, data[key]);
        }, result);

        return htmlResult;
    });
};

server.listen(port);
console.log(`Server is running on port ${port}...`);
