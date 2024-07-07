import React from "react";
import "./recentpost.css";

const recentPost1 = [
  {
    id: crypto.randomUUID(),
    name: "DEVELOPMENT",
    title:
      "How to make a Game look more attractive with New VR & AI Technology",
    text: "Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
    image: "./recent-post-image/recent1.jpg",
  },
];

const recentPosts2 = [
  {
    id: crypto.randomUUID(),
    name: "Travel",
    title: "8 Rules of Travelling In Sea You Need To Know",
    text: "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ",
    image: "./recent-post-image/island.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "DEVELOPMENT",
    title: "How to build strong portfolio and get a Job in UI/UX",
    text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from ",
    image: "./recent-post-image/do-more.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Sports",
    title: "How to Be a Professional Footballer in 2023",
    text: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
    image: "./recent-post-image/ball-inside-net.jpg",
  },
];
function RecentPost() {
  return (
    <>
      <div className="recent-post-container">
        <div className="recent-post-header">
          <h1>Our Recent Post</h1>
          <button>View All</button>
        </div>
        <div className="recent-post-section">
          {recentPost1.map((post) => (
            <>
              <div key={post.id}>
                <img
                  className="recent-post-image"
                  src={post.image}
                  alt={post.name}
                />
              </div>
              <div className="recent-post-news">
                <h6>{post.name}</h6>
                <h1>{post.title}</h1>
                <p>{post.text}</p>
                <button className="read-more-btn">
                  <a href="#">Read More</a>
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
      <RecentPostFeeds />
    </>
  );
}

function RecentPostFeeds() {
  return (
    <div className="post-feeds">
      <ul>
        {recentPosts2.map((data) => (
          <PostFeeds data={data} key={data.id} />
        ))}
      </ul>
    </div>
  );
}

function PostFeeds({ data }) {
  return (
    <li className="post-feeds-list">
      <img className="post-feeds-image" src={data.image} alt={data.name} />
      <h6>{data.name}</h6>
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <button className="post-feeds-btn">
        <a href="#">Read More...</a>
      </button>
    </li>
  );
}
export default RecentPost;
