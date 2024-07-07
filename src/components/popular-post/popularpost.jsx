import React from "react";
import "./popularpost.css";

const popularPostArray = [
  {
    id: crypto.randomUUID(),
    name: "Travel",
    title: "Train Or Bus Journey?Which one suits?",
    text: "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
    image: "./post-image/train.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "DEVELOPMENT",
    title: "Best Website to research for your  next project",
    text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs ",
    image: "/post-image/office-table.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Sports",
    title: "How to Be a Dancer in 2023 with proper skills?",
    text: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ",
    image: "/post-image/dancer.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Travel",
    title: "Who is the best singer on chart?Know him?",
    text: "chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and  ",
    image: "/post-image/singer.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "DEVELOPMENT",
    title: "How to start export import business from home?",
    text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs ",
    image: "/post-image/business-man.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Sports",
    title: "Make some drinks with chocolates chocolates and milk",
    text: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
    image: "/post-image/chocolate.jpg",
  },
];
function PopuLarpost() {
  return (
    <div className="popular-post">
      <div className="popular-post-header">
        <h1>Popular Post</h1>
        <button>View All</button>
      </div>

      <div className="popular-post-section">
        <ul>
          {popularPostArray.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <h6>{item.name}</h6>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
              <button>
                <a href="#">Read More...</a>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PopuLarpost;
