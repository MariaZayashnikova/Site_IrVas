let postData = async (data) => {
    let res = await fetch('http://localhost:3000/dataPersone', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    if (!res.ok) throw new Error(`Error. Status: ${res.status}`);

    return await res.text();
};

export default postData;