import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let solutions = [
    { id: 1, word: "ninja", },
    { id: 2, word: "spade", },
    { id: 3, word: "pools", },
    { id: 4, word: "drive", },
    { id: 5, word: "relax", },
    { id: 6, word: "times", },
    { id: 7, word: "train", },
    { id: 8, word: "jeans", },
    { id: 9, word: "pours", },
    { id: 10, word: "cores", },
    { id: 11, word: "blame", },
    { id: 12, word: "banks", },
    { id: 13, word: "phone", },
    { id: 14, word: "bling", },
    { id: 15, word: "coins", },
    { id: 16, word: "hello", },
]

let letters = [
    {key: "a"},
    {key: "b"},
    {key: "c"},
    {key: "d"},
    {key: "e"},
    {key: "f"},
    {key: "g"},
    {key: "h"},
    {key: "i"},
    {key: "j"},
    {key: "k"},
    {key: "l"},
    {key: "m"},
    {key: "n"},
    {key: "o"},
    {key: "p"},
    {key: "q"},
    {key: "r"},
    {key: "s"},
    {key: "t"},
    {key: "u"},
    {key: "v"},
    {key: "w"},
    {key: "x"},
    {key: "y"},
    {key: "z"},
]

app.get("/solutions", (req,res)=>res.send(solutions));

app.get("/letters", (req,res)=>res.send(letters));

app.listen(process.env.PORT || 3001,()=>{
    console.log("server is running!")
})
