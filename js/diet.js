document.getElementById('generate-btn').addEventListener('click', generateDietPlan);

function generateDietPlan() {
  const weight = parseFloat(document.getElementById('weight').value);

  let dietPlan;

  if (weight < 50) {
    dietPlan = `
      <h2>Your Diet Plan</h2>
      <p>Based on your weight (${weight} kg), here is your diet plan:</p>
      <p>For weights less than 50 kg, we recommend:</p>
      <ul>
        <li>Include protein-rich foods such as lean meats, fish, eggs, tofu, and legumes in your diet.</li>
        <li>Eat plenty of fruits and vegetables for essential vitamins and minerals.</li>
        <li>Stay hydrated by drinking plenty of water throughout the day.</li>
        <!-- Add more diet plan details here -->
      </ul>
    `;
  } else if (weight >= 50 && weight < 75) {
    dietPlan = `
      <h2>Your Diet Plan</h2>
      <p>Based on your weight (${weight} kg), here is your diet plan:</p>
      <p>For weights between 50 kg and 75 kg, we recommend:</p>
      <ul>
        <li>Balance your meals with a mix of carbohydrates, proteins, and healthy fats.</li>
        <li>Include whole grains, lean proteins, fruits, and vegetables in your diet.</li>
        <li>Limit processed foods, sugary snacks, and drinks.</li>
        <!-- Add more diet plan details here -->
      </ul>
    `;
  } else {
    dietPlan = `
      <h2>Your Diet Plan</h2>
      <p>Based on your weight (${weight} kg), here is your diet plan:</p>
      <p>For weights greater than or equal to 75 kg, we recommend:</p>
      <ul>
        <li>Focus on portion control and mindful eating to manage calorie intake.</li>
        <li>Incorporate regular exercise into your routine for overall health and weight management.</li>
        <li>Include a variety of nutrient-dense foods such as whole grains, lean proteins, fruits, vegetables, and healthy fats.</li>
        <!-- Add more diet plan details here -->
      </ul>
    `;
  }

  document.getElementById('diet-plan').innerHTML = dietPlan;
}
