const messages = [
    "Jonathan",
    "Ana",
    "Laura",
    "Diego",
    "Carolina",
    "Sebastián",
    "Pedro"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() *
        messages.length)];
        console.log(message);
};

module.exports = { randomMsg };




