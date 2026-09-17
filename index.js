const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/api/prateek', (req, res) => {
    res.json({
        message: "बधाई हो प्रदीप! आपकी API अब पूरे इंटरनेट पर लाइव है।",
        developer: "Prateek",
        status: "Active",
        phone: "7668937785",
        email: "robert123@gmail.com"
    });
});

app.get('/api/hosting-deals', (req, res) => {
    res.json({
        provider_1: {
            name: "Hostinger",
            discount: "60% OFF on Premium Web Hosting",
            affiliate_link: "https://hostinger.com"
        },
        provider_2: {
            name: "GoDaddy",
            discount: "15% OFF on .COM Domains",
            affiliate_link: "https://godaddy.com"
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
