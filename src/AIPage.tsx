import React from 'react';
import './AIPage.css';

function AIPage() {
  return (
    <div className="AIPage">
      <h1>Why Use AI in Our Project?</h1>
      <section>
        <h2>Advantages of AI</h2>
        <ul>
          <li>Automates repetitive tasks, allowing humans to focus on creative aspects.</li>
          <li>Provides insights and analytics that can assist in decision-making.</li>
          <li>Enhances user experiences through personalization.</li>
        </ul>
      </section>
      <section>
        <h2>Potential Impact</h2>
        <p>AI can significantly change how we interact with our technology, offering more efficient, intuitive, and personalized services.</p>
      </section>
      <section>
        <h2>Examples of AI Usage</h2>
        <ul>
          <li>Chatbots providing customer support.</li>
          <li>Recommendation engines suggesting products or content.</li>
          <li>Automated data analysis identifying trends.</li>
        </ul>
      </section>
    </div>
  );
}

export default AIPage;
