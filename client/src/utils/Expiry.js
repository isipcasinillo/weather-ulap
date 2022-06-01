const Expiry = (date) => {
    const currentdate = Math.floor(date.getTime() / 1000)
    console.log(currentdate)
    // return new Date(date) + 86400
}


export default Expiry;

/*
current date -> May 29

Expiry(date) -> accept the current date
-> Transform date to next day
-> Returns next date





*/

