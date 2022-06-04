import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

interface User {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export default function App() {
  const [user, setUser] = useState<User[] | null>(null);
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";
  const fetchData = async () => {
    let response = await axios.request({
      url: baseUrl,
      method: "get"
    });
    if (response.status === 200) {
      setUser(response.data);
    }
  };

  useEffect(() => {
    console.log("!!!!!!!!");
    fetchData().then();
  }, []);

  return (
    <div className="App">
      <h1>This is list posted</h1>
      {user &&
        user.map((item) => {
          return (
            <p key={item.id}>
              <a href={`${baseUrl}/${item.id}`}>{item.title}</a>
            </p>
          );
        })}
    </div>
  );
}
