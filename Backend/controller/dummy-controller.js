const axios = require('axios');

const fetchDataFromExternalApi = async (req, res) => {
    try {
        // const externalApiUrl = 'https://apex.oracle.com/pls/apex/ra_oracle/invoice/e_invoice';
        const externalApiUrl = 'https://g79aaf589a44d64-bzsoftech.adb.me-dubai-1.oraclecloudapps.com/ords/ptrack/hr/empinfo/';
        const response = await axios.get(externalApiUrl);
        const transformedData = response.data.items;
        res.json(transformedData);
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Failed to fetch data from external API' });
    }
};

module.exports = { fetchDataFromExternalApi };
