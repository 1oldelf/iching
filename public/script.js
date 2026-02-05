document.addEventListener('DOMContentLoaded', () => {
    const consultBtn = document.getElementById('consultBtn');
    const consultAgainBtn = document.getElementById('consultAgainBtn');
    const loading = document.getElementById('loading');
    const result = document.getElementById('result');
    const consultation = document.querySelector('.consultation');

    consultBtn.addEventListener('click', consultOracle);
    consultAgainBtn.addEventListener('click', resetConsultation);

    async function consultOracle() {
        // Hide consultation section and show loading
        consultation.style.display = 'none';
        loading.style.display = 'block';
        result.style.display = 'none';

        try {
            // Simulate contemplation time
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Fetch hexagram from API
            const response = await fetch('/api/consult');
            const data = await response.json();

            // Display the result
            displayHexagram(data);
        } catch (error) {
            console.error('Error consulting oracle:', error);
            alert('The oracle is temporarily unavailable. Please try again.');
            resetConsultation();
        }
    }

    function displayHexagram(data) {
        const { lines, hexagram } = data;

        // Display hexagram lines (from top to bottom, but data is stored bottom to top)
        const hexagramLines = document.getElementById('hexagramLines');
        hexagramLines.innerHTML = '';
        
        // Reverse to show top line first
        for (let i = lines.length - 1; i >= 0; i--) {
            const line = document.createElement('div');
            line.className = lines[i] === 1 ? 'hexagram-line yang' : 'hexagram-line yin';
            hexagramLines.appendChild(line);
        }

        // Display hexagram information
        document.getElementById('hexagramNumber').textContent = `Hexagram ${hexagram.number}`;
        document.getElementById('hexagramName').textContent = hexagram.name;
        document.getElementById('hexagramChinese').textContent = hexagram.chinese;
        document.getElementById('hexagramDescription').textContent = hexagram.description;
        document.getElementById('hexagramJudgment').textContent = hexagram.judgment;

        // Show result
        loading.style.display = 'none';
        result.style.display = 'block';
    }

    function resetConsultation() {
        result.style.display = 'none';
        consultation.style.display = 'block';
    }
});
