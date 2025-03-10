async function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const params = new URLSearchParams();
    params.append('num1', num1.toString());
    params.append('num2', num2.toString());

    const response = await fetch(`http://localhost:8080/add?${params}`).then(
        (response) => response.json().then((data) => {
            document.getElementById('result').innerText = "Result: " + data.result;
        })
    ).catch((error) => {
        console.error('Error:', error);
    });

    document.getElementById('operator').innerText= "+";
}

async function subtract() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const params = new URLSearchParams();
    params.append('num1', num1.toString());
    params.append('num2', num2.toString());

    const response = await fetch(`http://localhost:8080/sub?${params}`).then(
        (response) => response.json().then((data) => {
            document.getElementById('result').innerText = "Result: " + data.result;
        })
    ).catch((error) => {
        console.error('Error:', error);
    });

    document.getElementById('operator').innerText = "-";
}

function resetFields() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('operator').innerText = "+";    
    document.getElementById('result').innerText = "Result:";
}