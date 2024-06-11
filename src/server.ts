import express from "express"
let app=express()
const PORT = process.env.PORT || 3000;


app.listen(PORT, () =>
    console.log(`Delux Mint app listening on port ${PORT}!`),
);