fetch('/polling-units')
  .then((response) => response.json())
  .then((data) => {
    const pollingUnitSelect = document.getElementById('polling-unit-select');
    data.pollingUnits.forEach((pollingUnit) => {
      const option = document.createElement('option');
      option.value = pollingUnit.id;
      option.textContent = pollingUnit.name;
      pollingUnitSelect.appendChild(option);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });

fetch('/lgas')
  .then((response) => response.json())
  .then((data) => {
    const lgaSelect = document.getElementById('lga-select');
    data.lgas.forEach((lga) => {
      const option = document.createElement('option');
      option.value = lga.id;
      option.textContent = lga.name;
      lgaSelect.appendChild(option);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  const pollingUnitForm = document.getElementById('polling-unit-form');
  const pollingUnitResultContainer = document.getElementById('polling-unit-result-container');
  
  pollingUnitForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const pollingUnitSelect = document.getElementById('polling-unit-select');
    const pollingUnitId = pollingUnitSelect.value;
  
    fetch(`/polling-unit-result/${pollingUnitId}`)
      .then((response) => response.json())
      .then((data) => {
        // Display the polling unit result in the result container
        const resultHtml = `
          <h3>Result for Polling Unit: ${pollingUnitId}</h3>
          <ul>
            ${data.resultData.map((party) => `<li><strong>${party.partyName}:</strong> ${party.score}</li>`).join('')}
          </ul>
        `;
        pollingUnitResultContainer.innerHTML = resultHtml;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });

  const lgaForm = document.getElementById('lga-form');
  const lgaResultContainer = document.getElementById('lga-result-container');
  
  lgaForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const lgaSelect = document.getElementById('lga-select');
    const lgaId = lgaSelect.value;
    fetch(`/lga-result/${lgaId}`)
      .then((response) => response.json())
      .then((data) => {
        const resultHtml = `
          <h3>Result for LGA: ${lgaId}</h3>
          <ul>
            ${data.resultData.map((party) => `<li><strong>${party.partyName}:</strong> ${party.score}</li>`).join('')}
          </ul>
        `;
        lgaResultContainer.innerHTML = resultHtml;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
  